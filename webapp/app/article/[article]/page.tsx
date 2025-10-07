import NotFound from "@/app/not-found";

import { ArticleData } from "@/app/components/Articles/Types";

import { GetArticlesCached } from "@/app/components/Articles/GetArticles";

import Image from "next/image";
import { Metadata } from "next";

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

    const raw = await fs.readFile(fullPath, "utf-8");
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

export async function generateMetadata({ params } : { params : Promise<{ article: string }> }) {

    const { article } = await params;
    const fullPath = path.join(process.cwd(), "public/articles", article + ".md");
    const exists = await ArticleExists(fullPath);

    if (!exists) { return {} }

    const raw = await fs.readFile(fullPath, "utf-8");
    const { data, content } = matter(raw);

    const ret: Metadata = {
        metadataBase: new URL("https://coppr.dev"),
        title: data.title + " | Copper-Engine",
        description: data.summary || "Read the latest article on Copper-Engine's blog.",
        openGraph: {
            title: data.title + " | Copper-Engine",
            siteName: "Copper-Engine",
            description: data.summary || "Read the latest article on Copper-Engine's blog.",
            type: "article",
            url: `https://coppr.dev/article/${article}`,
            images: {
                url: data.thumbnail || "screenshots/CopperPromotional.png",
                width: 1200,
                height: 630,
                alt: data.title,
            },
            locale: "en_US",
        }
    }

    return ret;

}
export async function generateStaticParams() {

    type Params = { article: string };

    const data: ArticleData[] = await GetArticlesCached();
    const ret: Params[] = [];

    for (const article of data) {

        ret.push({ article: article.url });

    }

    return ret;

}