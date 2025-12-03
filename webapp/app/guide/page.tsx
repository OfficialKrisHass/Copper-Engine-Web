import Link from "next/link"

import styles from "./page.module.css"

export default async function Guide() {

    return (
        <article className={styles.container}>
            <div className={styles.guide}>
                <h1>Copper-Engine Guide</h1>
                <hr/>
                <p>Welcome to the Copper-Engine guide.</p>
                <br/>
                <p>This section of the website serves as a sort of tutorial for firs-time Copper-Engine users. You will learn the basic concepts of making games
                   in the Copper-Engine, how to use the Copper-Editor, and much, much more.</p>
                <p>The guide is split into chapters, each talking about a certain topic, feature or common systems and how to implement them in the Copper-Engine.</p>
                <p>You will start by installing and setting up the Copper-Engine and Copper-Editor, learn how to create a new project, learn about the Copper-Editor
                   and it's UI and the basics of Scripting in C#.</p>
                <br/>
                <p>Currently, the guide is maintained by me (Kris) so it may not be fully up to date, contain mistakes or not be clear enough. I will try to provide
                   the best possible result, but that may not be always possible.</p>
                <p>Contribution to the guide is always welcome, even encouraged. If you want to contribute, feel free to open a pull request on the <Link href="https://github.com/OfficialKrisHass/Copper-Engine">
                    Gihub repository</Link> or reach out to me through discord (chrishass).</p>
            </div>
        </article>
    )

}
