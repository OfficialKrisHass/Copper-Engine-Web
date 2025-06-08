import { Entry } from "./Types";

import Link from "next/link";

import styles from "./SideNavEntry.module.css"

type Props = {
    item: Entry;
    path: string;
    level?: number;
    openPaths: Record<string, boolean>;
    togglePath: (path: string) => void;
}

export default function SideNavEntry({ item, path, level = 0, openPaths, togglePath } : Props) {

    const hasChildren = item.subDirs && item.subDirs.length > 0;
    const hasEntries = item.entries && item.entries.length > 0;
    const isOpen = openPaths[path];

    const isToggleable = hasChildren || hasEntries;

    return (
        <li className={styles.entry} key={item.title}>
            <span className={styles.title} onClick={() => isToggleable && togglePath(path)}>{item.title}</span>
            { isOpen && (
                <ul>
                    {hasChildren && item.subDirs!.map((subDir, index) => {

                        const childPath = `${path}/${subDir.title}`;
                        return (
                            <SideNavEntry key={index} item={subDir} path={childPath} level={level + 1} openPaths={openPaths} togglePath={togglePath}/>
                        );

                    })}
                    {hasEntries && item.entries!.map(entry => (
                        <li className={styles.entry} key={entry}>
                            <Link href={"/docs/" + item.title + '.' + entry}>{entry}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );

}
