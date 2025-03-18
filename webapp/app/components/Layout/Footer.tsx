import styles from "./Footer.module.css"

export default function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.creditsAndSocials}>
                    <p>2021-2025 Kris Hass</p>
                    <div className={styles.socials}>
                        <a href="https://github.com/OfficialKrisHass/Copper-Engine">
                            <div/>
                        </a>
                        <a href="https://github.com/OfficialKrisHass/Copper-Engine">
                            <div/>
                        </a>
                        <a href="https://github.com/OfficialKrisHass/Copper-Engine">
                            <div/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )

}
