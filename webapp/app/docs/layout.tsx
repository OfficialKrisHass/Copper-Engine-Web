import SideNav from "../ui/Docs/SideNav"

import styles from "./layout.module.css"

export default function DocsLayout({ children } : { children: React.ReactNode }) {

    return (
        <main className={styles.main}>
            <SideNav/>
            <div className={styles.page}>
                {children}
            </div>
        </main>
    )

}
