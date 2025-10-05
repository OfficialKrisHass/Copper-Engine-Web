import { DocTreeNode } from "../components/Docs/Types";

import SideNav from "../components/Docs/SideNav"

import styles from "./layout.module.css"
import { GetDocTreeCached } from "../components/Docs/DocList";

export default async function DocsLayout({ children } : { children: React.ReactNode }) {

    const entryData: DocTreeNode | undefined = await GetDocTreeCached();

    return (
        <main className={styles.main}>
            <SideNav docTree={entryData}/>
            <div className={styles.page}>
                {children}
            </div>
        </main>
    )

}
