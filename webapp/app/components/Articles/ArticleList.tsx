import Article from "./Article"
import { ArticleData } from "./Types"

import Link from "next/link"
import Image from "next/image"

import { cache } from "react"

import matter from "gray-matter"

import fs from "fs/promises"
import path from "path"

import styles from "./ArticleList.module.css"

export default async function ArticleList() {

    const articles = await GetArticles();

    const latest = articles.at(0);
    const recent = articles.slice(1, 4);

    return (
        <>
            {latest && 
                <Link href={"/article/" + latest.url} className={styles.latest}>
                    <div className={styles.thumbnail}>
                        <Image src={latest.thumbnail} alt="Latest article thumbnail" fill={true}/>
                    </div>
                    <div className={styles.info}>
                      <h3>{latest.title}</h3>
                      <p>{latest.summary}</p>
                    </div>
                </Link>
            }
            <div className={styles.articleList}>
                {recent.map((article) =>
                    <Article article={article} key={article.url}/>
                )}
            </div>
        </>

    ) 

}

async function GetArticles() : Promise<ArticleData[]> {

    const articlesPath = path.join(process.cwd(), "public/articles");

    const files = await fs.readdir(articlesPath);
    const articles: ArticleData[] = [];

    for (const file of files) {

        const filePath = path.join(articlesPath, file);

        const stats = await fs.stat(filePath);
        if (!stats.isFile() || path.extname(file) != ".md") continue;

        const raw = await fs.readFile(filePath, "utf-8");
        const { data, content } = matter(raw);

        articles.push({
            title: data.title,
            thumbnail: data.thumbnail,
            url: path.parse(file).name,

            created: stats.birthtime.getTime(),

            summary: data.summary,
            content: content,
        });

    }
    articles.sort((a, b) => b.created - a.created);

    return articles;

}

export const GetArticlesCached = cache(async () => {

    return await GetArticles();

});
