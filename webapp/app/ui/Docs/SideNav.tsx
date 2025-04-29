'use client'

import DocDirectory, { Data } from "./DocDirectory";

import { useState } from "react";

import styles from "./SideNav.module.css"

export default function SideNav() {

    const data : Data[] = [
        {
            title: "Copper-Engine",
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
            title: "Copper-Editor",
        },
        {
            title: "Copper-ScriptingAPI",
        },
        {
            title: "Copper-Runtime",
        }
    ]

    const [openPaths, setOpenPaths] = useState<Record<string, boolean>>({});

    const togglePath = (path: string) => {
        setOpenPaths(prev => ({
            ...prev,
            [path]: !prev[path],
        }));
    }

    return (
        <aside className={styles.navbar}>
            <h3>Table of Contents</h3>
            <hr/>
            <ul>
                {data.map((entry, index) =>
                    <DocDirectory key={index} item={entry} path={entry.title} openPaths={openPaths} togglePath={togglePath}/>
                )}
            </ul>
        </aside>
    )

}
