import Article from "./Article"
import { ArticleData } from "./Types"

import Link from "next/link"

import styles from "./ArticleList.module.css"

import fs from "fs/promises"
import path from "path"

type Articles = {
    latest: ArticleData | undefined;
    entries: ArticleData[];
}

export default async function ArticleList() {

    const articles = await GetArticles();

    return (
        <>
            <Link href={"/article/" + articles.latest?.title} className={styles.latest}>
            <div className={styles.thumbnail}/>
            <div className={styles.info}>
              <h3>{articles.latest?.title}</h3>
              <p>Here I will have to put the text of the newest article, but somehow clip it so that it won't show
                 in it's entirety but cut off at some point, okay I don't know what to say anymore</p>
            </div>
            </Link>
            <div className={styles.articleList}>
                {articles.entries.map((article) =>
                    <Article article={article}/>
                )}
            </div>
        </>

    ) 

}

async function GetArticles() : Promise<Articles> {

    const articlesPath = path.join(process.cwd(), "public/articles");

    const files = await fs.readdir(articlesPath);
    const articles: ArticleData[] = [];

    for (const file of files) {

        const stats = await fs.stat(path.join(articlesPath, file));
        if (!stats.isFile() || path.extname(file) != ".md") continue;

        articles.push({
            title: path.parse(file).name,
            created: stats.birthtime.getTime()
        });

    }
    articles.sort((a, b) => b.created - a.created);
    const latest = articles.shift();

    return { latest, entries: articles };

}
