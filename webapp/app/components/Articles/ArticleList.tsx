import Article from "./Article"

import Link from "next/link"

import styles from "./ArticleList.module.css"

export default function ArticleList() {

    return (
        <>
            <Link href="/article/latest" className={styles.latest}>
            <div className={styles.thumbnail}/>
            <div className={styles.info}>
              <h3>Latest article title</h3>
              <p>Here I will have to put the text of the newest article, but somehow clip it so that it won't show
                 in it's entirety but cut off at some point, okay I don't know what to say anymore</p>
            </div>
            </Link>
            <div className={styles.articleList}>
              <Article/>
              <Article/>
            </div>
        </>

    ) 

}
