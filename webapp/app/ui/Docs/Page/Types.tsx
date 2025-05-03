import { DataEntry } from "../Types"

import styles from "./Table.module.css"

export default function Types({ list } : { list: DataEntry[] }) {

    return (
        <>
            <h3>Types</h3>
            <table className={styles.list}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(entry => (
                        <tr>
                            <td className={styles.name}>{entry.name}</td>
                            <td className={styles.desc}>{entry.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )

}
