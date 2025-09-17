import NotFound from "@/app/not-found";

import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm";

import styles from "./page.module.css"

import { promises as fs } from "fs"
import path from "path";

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

        return (
            <NotFound/>
        );

    }

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
