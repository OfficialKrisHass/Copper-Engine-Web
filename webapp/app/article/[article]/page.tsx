import NotFound from "@/app/not-found";

import Image from "next/image";

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm";

import { promises as fs } from "fs"
import path from "path";
import matter from "gray-matter";

import styles from "./page.module.css"

async function ArticleExists(articlePath: string) {

    try {

        await fs.access(articlePath);
        return true;

    } catch {

        return false;

    }

}

export default async function Page({ params } : { params : Promise<{ article: string }> }) {

    const { article } = await params;
    const fullPath = path.join(process.cwd(), "public/articles", article + ".md");
    const exists = await ArticleExists(fullPath);

    if (!exists) {

        console.log(`article ${fullPath} does not exist`)
        return (
            <NotFound/>
        );

    }

    const raw = await fs.readFile(fullPath, "utf8");
    const { data, content } = matter(raw);

    return (
        <main className={styles.main}>
            <article className={styles.container}>
                <div className={styles.article}>
                    <div className={styles.thumbnail}>
                        <Image src={data.thumbnail} alt="Article thumbnail" fill={true}/>
                    </div>
                    <h1>{data.title}</h1>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {content}
                    </ReactMarkdown>
                </div>
            </article>
        </main>
    )

}
