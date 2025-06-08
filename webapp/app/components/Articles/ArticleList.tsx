import Article from "./Article"

import styles from "./ArticleList.module.css"

export default function ArticleList() {

 return (
    <div className={styles.articleList}>
      <Article/>
      <Article/>
    </div>
  ) 

}
