import { ArticleData } from "./Types"

import Link from "next/link"
import Image from "next/image"

import styles from "./Article.module.css"

type Props = {

    article: ArticleData;

}
export default function Article({ article } : Props) {

    return (
        <Link href={"/article/" + article.url} className={styles.article}>
            <div className={styles.thumbnail}>
                <Image src={article.thumbnail} alt="Article thumbnail" fill={true}/>
            </div>
            <div className={styles.info}>
                <h3>{article.title}</h3>
                <p>{article.summary}</p>
            </div>
        </Link>
    )

}
