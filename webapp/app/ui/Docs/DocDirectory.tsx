import Link from "next/link";

import styles from "./DocDirectory.module.css"

export type Data = {
    title: string;
    subDirs?: Data[];
    entries?: string[];
}
type Props = {
    item: Data;
    path: string;
    level?: number;
    openPaths: Record<string, boolean>;
    togglePath: (path: string) => void;
}

export default function DocDirectory({ item, path, level = 0, openPaths, togglePath } : Props) {

    const hasChildren = item.subDirs && item.subDirs.length > 0;
    const hasEntries = item.entries && item.entries.length > 0;
    const isOpen = openPaths[path];

    const isToggleable = hasChildren || hasEntries;

    return (
        <li className={styles.item} key={item.title}>
            <span className={styles.title} onClick={() => isToggleable && togglePath(path)}>{item.title}</span>
            { isOpen && (
                <ul>
                    {hasChildren && item.subDirs!.map((subDir, index) => {

                        const childPath = `${path}/${subDir.title}`;
                        return (
                            <DocDirectory key={index} item={subDir} path={childPath} level={level + 1} openPaths={openPaths} togglePath={togglePath}/>
                        );

                    })}
                    {hasEntries && item.entries!.map(entry => (
                        <li key={entry} className={styles.item}>
                            <Link href={item.title.toLowerCase() + '.' + entry.toLowerCase()}>{entry}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );

}
