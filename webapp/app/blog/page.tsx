import Article from "../components/Articles/Article";
import { GetArticlesCached } from "../components/Articles/GetArticles"

import styles from "./page.module.css"

export default async function Blog() {

    const articles = await GetArticlesCached();

    return (
        <>
            <h1>Blog</h1>
            <div className={styles.container}>
                {articles.map((article) =>
                    <Article article={article} key={article.url}/>
                )}
            </div>
        </>
    )

}
