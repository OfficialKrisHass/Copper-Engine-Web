import { GetDoc, GetDocTreeCached } from "@/app/components/Docs/DocList";

import { DocData, DocTreeNode } from "@/app/components/Docs/Types"

import NotFound from "@/app/not-found";

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm";

import styles from "./page.module.css"

export default async function Page({ params, } : { params : Promise<{ id: string }> }) {

    const { id } = await params;

    const data: DocData | undefined = await GetDoc(id);

    if (!data) {

        console.log(`doc '${id}' is invalid!`);
        return (
            <NotFound/>
        )

    }

    return (
        <>
            <h2>{id}</h2>
            <div className={styles.doc}>
                <h1>{data.name}</h1>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {data.content}
                </ReactMarkdown>
            </div>
        </>
    )

}

export async function generateStaticParams() {

    type Params = { id: string };

    const ret: Params[] = [];
    function walk(node : DocTreeNode | undefined) {

        if (!node) return;
        if (node.subDirs) {

            for (const dir of node.subDirs) { walk(dir); }

        }
        if (node.entries) {

            for (const entry of node.entries) {

                ret.push({ id: node.path + '.' + entry });

            }

        }

    }

    const tree: DocTreeNode | undefined = await GetDocTreeCached();
    walk(tree);

    return ret;

}
