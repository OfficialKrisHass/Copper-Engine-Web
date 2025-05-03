'use client'

import { Entry } from "./Types";
import SideNavEntry from "./SideNavEntry";

import { useState } from "react";

import styles from "./SideNav.module.css"

type Props = {
    entries: Entry[];
}

export default function SideNav({ entries } : Props) {

    const [openPaths, setOpenPaths] = useState<Record<string, boolean>>({});

    const togglePath = (path: string) => {
        setOpenPaths(prev => ({
            ...prev,
            [path]: !prev[path],
        }));
    }

    return (
        <aside className={styles.sidenav}>
            <h3>Table of Contents</h3>
            <hr/>
            <ul>
                {entries.map((entry, index) =>
                    <SideNavEntry key={index} item={entry} path={entry.title} openPaths={openPaths} togglePath={togglePath}/>
                )}
            </ul>
        </aside>
    )

}
