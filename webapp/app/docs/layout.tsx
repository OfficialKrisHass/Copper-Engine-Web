import { config } from "@/config";

import { Entry } from "../components/Docs/Types";
import SideNav from "../components/Docs/SideNav"

import styles from "./layout.module.css"

export default async function DocsLayout({ children } : { children: React.ReactNode }) {

    const res = await fetch("http://127.0.0.1:8080/docs/", { next: { revalidate: config.RevalidateTime }});
    const entryData: Entry[] = await res.json();

    return (
        <main className={styles.main}>
            <SideNav entries={entryData}/>
            <div className={styles.page}>
                {children}
            </div>
        </main>
    )

}
