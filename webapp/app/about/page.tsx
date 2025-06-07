import styles from "./page.module.css"

export default async function About() {

    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <h1>About</h1>
                <h2>Learn more about Copper-Engine</h2>
            </div>
            <div className={styles.selector}>
                <p>Values</p>
                <p>Features</p>
                <p>Community</p>
                <p>Something</p>
                <p>Yep yep</p>
            </div>
        </main>
    )

}
