import { config } from "@/config";

import SideNav from "../ui/Docs/SideNav"
import { Data as EntryData } from "../ui/Docs/SideNavEntry";

import styles from "./layout.module.css"

export default async function DocsLayout({ children } : { children: React.ReactNode }) {

    const res = await fetch("http://127.0.0.1:8080/docs/", { next: { revalidate: config.RevalidateTime }});
    const entryData: EntryData[] = await res.json();

    return (
        <main className={styles.main}>
            <SideNav entries={entryData}/>
            <div className={styles.page}>
                {children}
            </div>
        </main>
    )

}
