import Selector from "./components/Selector"
import Content from "./content/Content"

import styles from "./page.module.css"

export default async function About() {

    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <img src={"/screenshots/CopperPromotional.png"} alt="Copper Editor screenshot"/>
                <div className={styles.headerText}>
                    <h1>About</h1>
                    <h2>Learn more about Copper-Engine</h2>
                </div>
            </div>
            <Selector/>
            <div className={styles.container}>
                <Content/>
            </div>
        </main>
    )

}
