import styles from "./not-found.module.css"

export default async function NotFound() {

    return (
        <main className={styles.main}>
            <p className={styles.text}>404 - Page Not Found</p>
            <p className={styles.subtext}>Either you inserted the wrong link, or I messed up the website :)</p>
        </main>
    )

}
