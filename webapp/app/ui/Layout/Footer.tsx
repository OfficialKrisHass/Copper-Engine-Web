import Link from "next/link"

import styles from "./Footer.module.css"

export default function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.creditsAndSocials}>
                    <p>2021-2025 Kris Hass</p>
                    <div className={styles.socials}>
                        <Link href="https://github.com/OfficialKrisHass/Copper-Engine">
                            <div/>
                        </Link>
                        <Link href="https://github.com/OfficialKrisHass/Copper-Engine">
                            <div/>
                        </Link>
                        <Link href="https://github.com/OfficialKrisHass/Copper-Engine">
                            <div/>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )

}
