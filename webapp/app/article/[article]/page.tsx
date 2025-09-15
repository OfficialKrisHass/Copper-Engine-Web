import NotFound from "@/app/not-found";

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm";

import styles from "./page.module.css"

import { promises as fs } from "fs"
import path from "path";

export default async function Page({ params } : { params : Promise<{ article: string }> }) {

    const { article } = await params;
    const fullPath = path.join(process.cwd(), "public/articles", article + ".md");

    const contents = await fs.readFile(fullPath, "utf8");

    return (
        <main className={styles.main}>
            <article className={styles.container}>
                <div className={styles.article}>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {contents}
                    </ReactMarkdown>
                </div>
            </article>
        </main>
    )

}
