import styles from "./Article.module.css"

export default function Article() {

  return (
    <a href="/article">
      <div className={styles.thumbnail}>
      </div>
      <div className={styles.info}>
        <h3>Article title</h3>
        <p> Article description yada yada yada yada bla bla lorem ipsum es dolores que pala sashdkjahsk</p>
      </div>
    </a>
  )

}
