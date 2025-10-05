'use client'

import { DocTreeNode } from "./Types";

import SideNavEntry from "./SideNavEntry";

import { useState } from "react";

import styles from "./SideNav.module.css"

type Props = {
    docTree: DocTreeNode | undefined;
}

export default function SideNav({ docTree } : Props) {

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
                {docTree?.subDirs && docTree.subDirs.map((entry, index) =>
                    <SideNavEntry key={index} item={entry} path={entry.name} openPaths={openPaths} togglePath={togglePath}/>
                )}
            </ul>
        </aside>
    )

}
