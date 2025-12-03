import { GuideData } from "@/app/components/Guide/Types";
import { GetGuideListCached } from "@/app/components/Guide/GetGuideList";

import NotFound from "@/app/not-found";

import Link from "next/link";

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm";

import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css"

import clsx from "clsx";

import styles from "./page.module.css"

export default async function Page({ params } : { params : { id: string } }) {

    const id = Number(params.id);
    const guideList = await GetGuideListCached();
    const guide: GuideData | undefined = guideList[id];

    if (!guide) return <NotFound/>;

    const previousEnabled = id > 0;
    const nextEnabled = id < guideList.length - 1;

    return (
        <article className={styles.container}>
            <div className={styles.article}>
                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]} components={{
                    code({ node, className, children, ...props} : any) {
                        const inline = Object.keys(node.properties || {}).length === 0;
                        if (inline) {

                            return (
                                <code className={styles.inlineCode} {...props}>
                                    {children}
                                </code>
                            );

                        }

                        const combinedClassName = clsx(styles.codeblock, className);

                        return (
                            <code className={combinedClassName} {...props}>
                                {children}
                            </code>
                        )
                    }
                }} urlTransform={(src) => {

                    if (src.startsWith("http") || src.startsWith('/')) return src;
                    return `/guide/${src}`;

                }}>
                    {guide.content}
                </ReactMarkdown>
                <div className={styles.navigationContainer}>
                    <Link href={"/guide/" + (id - 1).toString()} className={previousEnabled ? '' : styles.disabled} aria-disabled={!previousEnabled} tabIndex={previousEnabled ? -1 : undefined}>Previous</Link>
                    <Link href={"/guide/" + (id + 1).toString()} className={nextEnabled ? '' : styles.disabled} aria-disabled={!nextEnabled} tabIndex={nextEnabled ? -1 : undefined}>Next</Link>
                </div>
            </div>
        </article>
    )

}

export async function generateStaticParams() {

    type Params = { id: string };
    const ret: Params[] = [];

    const guideList = await GetGuideListCached();
    guideList.map(guide => ret.push({ id: guide.id.toString() }))

    return ret;

}
