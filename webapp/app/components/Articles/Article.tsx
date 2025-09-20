import { ArticleData } from "./Types"

import Link from "next/link"

import styles from "./Article.module.css"

type Props = {

    article: ArticleData;

}
export default function Article({ article } : Props) {

  return (
    <Link href={"/article/" + article.url} className={styles.article} key={article.title}>
      <div className={styles.thumbnail}>
      </div>
      <div className={styles.info}>
        <h3>{article.title}</h3>
        <p> Article description yada yada yada yada bla bla lorem ipsum es dolores que pala sashdkjahsk</p>
      </div>
    </Link>
  )

}
