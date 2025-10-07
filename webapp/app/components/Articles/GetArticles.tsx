import { ArticleData } from "./Types.ts";

import { cache } from "react"

import matter from "gray-matter"

import fs from "fs/promises"
import path from "path"

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