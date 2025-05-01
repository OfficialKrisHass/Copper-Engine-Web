'use client'

import SideNavEntry, { Data as EntryData } from "./SideNavEntry";

import { useState } from "react";

import styles from "./SideNav.module.css"

export default function SideNav() {

    const data : EntryData[] = [
        {
            title: "Engine",
            subDirs: [
                {
                    title: "Core",
                    entries: [ "Engine", "Window", "UUID" ]
                },
                {
                    title: "Renderer",
                    entries: [ "Renderer", "VertexArray", "VertexBuffer", "Shader", "Material" ]
                },
                {
                    title: "Scripting",
                    entries: [ "ScriptingEngine", "Script" ],
                },
                {
                    title: "Input",
                    entries: [ "Input", ],
                },
            ],
        },
        {
            title: "Editor",
        },
        {
            title: "ScriptingAPI",
        },
    ]

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
                {data.map((entry, index) =>
                    <SideNavEntry key={index} item={entry} path={entry.title} openPaths={openPaths} togglePath={togglePath}/>
                )}
            </ul>
        </aside>
    )

}
