import Link from "next/link"
import Image from "next/image"

import styles from "./Footer.module.css"

export default function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.creditsAndSocials}>
                    <p>2021-2025 Kris Hass</p>
                    <div className={styles.socials}>
                        <Link href="https://github.com/OfficialKrisHass/Copper-Engine">
                            <Image className={styles.normal} src={"/icons/github.svg"} alt="Github icon" width={64} height={64}/>
                            <Image className={styles.hover} src={"/icons/github-hover.svg"} alt="Github icon" width={64} height={64}/>
                        </Link>
                        <Link href="https://x.com/CopperEngine">
                            <Image className={styles.normal} src={"/icons/twitter.svg"} alt="Github icon" width={64} height={64}/> 
                            <Image className={styles.hover} src={"/icons/twitter-hover.svg"} alt="Github icon" width={64} height={64}/>
                        </Link>
                        <Link href="mailto:copper.engine.contact@gmail.com">
                            <Image className={styles.normal} src={"/icons/gmail.svg"} alt="Github icon" width={64} height={64}/>
                            <Image className={styles.hover} src={"/icons/gmail-hover.svg"} alt="Github icon" width={64} height={64}/>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )

}
