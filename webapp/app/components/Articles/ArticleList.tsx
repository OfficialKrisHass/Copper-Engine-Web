import Article from "./Article"
import { GetArticlesCached } from "./GetArticles"

import Link from "next/link"
import Image from "next/image"

import styles from "./ArticleList.module.css"

export default async function ArticleList() {

    const articles = await GetArticlesCached();

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