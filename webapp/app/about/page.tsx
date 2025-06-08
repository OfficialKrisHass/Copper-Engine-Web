import Selector from "./components/Selector"
import Content from "./content/Content"

import styles from "./page.module.css"

export default async function About() {

    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <h1>About</h1>
                <h2>Learn more about Copper-Engine</h2>
            </div>
            <Selector/>
            <div className={styles.container}>
                <Content/>
            </div>
        </main>
    )

}
