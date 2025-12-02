import styles from "./page.module.css"

export default async function Guide() {

    return (
        <article className={styles.container}>
            <div className={styles.guide}>
                <h1>Copper-Engine Guide</h1>
                <hr/>
                <p>Welcome to the Copper-Engine guide.</p>
                <p>This section of the website serves as a sort of tutorial for firs-time Copper-Engine users. You will learn the basic concepts of making games
                   in the Copper-Engine, how to use the Copper-Editor, and much, much more.</p>
            </div>
        </article>
    )

}
