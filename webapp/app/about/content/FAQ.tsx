import Link from "next/link"

import styles from "./FAQ.module.css"

export default function FAQ() {

    return (
        <>
            <h2>FAQ</h2>
            <p>Here are some commonly asked questions. This page is quite short at the moment, but it will expand as the project grows.</p>
            <br/>

            <h3>General</h3>
            <p className={styles.question}>Who is the engine for</p>
            <p className={styles.answer}>As mentioned in the <Link href="/about?view=overview">Overview</Link> section, absolutely anyone, no matter their experience,
               status or gender can can use Copper-Engine. However, keep in mind that the engine is uncharted teritory, there are very few tutorials and guides
               so development may be harder for the time being.</p>
            <br/>
            
            <p className={styles.question}>What platforms does the engine support</p>
            <p className={styles.answer}>Copper-Engine supports both Windows and Linux. Mac, Android and console support is planned in the future.</p>
            <br/>

            <p className={styles.question}>How actively is Copper-Engine developed</p>
            <p className={styles.answer}>Copper-Engine is currently a hobby side-project of mine, therefore it is developed depending on my free time. Thankfully
               that is pretty active, however it changes frequently whether due to a busier time or mental health issues. Development updates are always going to
               be posted on our social media.</p>
            <br/>

            <h3>Technical</h3>
            <p className={styles.question}>What language is used to work with Copper-Engine</p>
            <p className={styles.answer}>Copper-Engine itself is written in C++ and supports C# scripting at the moment. In the future you will be able to use both
               C# and C++ for developing games in Copper-Engine.</p>
            <br/>
            
            <p className={styles.question}>Does it support 2D, 3D or both</p>
            <p className={styles.answer}>Copper-Engine currently only supports 3D, however 2D support is planned in a future release.</p>
            <br/>

            <p className={styles.question}>Can I use it commercially to release a game</p>
            <p className={styles.answer}>YES! And you can keep 100% of the earnings without paying for anything. You can read about distribution at the <Link href="/about?view=ethos#distribution">
               Copper-Ethos</Link> section.</p>
            <br/>

            <h3>Community</h3>
            <p className={styles.question}>Is there a Discord server</p>
            <p className={styles.answer}>Not at the moment, but when there will be a demand, one will be created.</p>
            <br/>

            <p className={styles.question}>How can I report bugs or request features</p>
            <p className={styles.answer}>Please reach out to us on discord, twitter or by email, which you can find at the bottom of any page.</p>
            <br/>
        </>
    )

}
