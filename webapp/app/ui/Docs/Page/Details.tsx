import { Data } from "../Types";

import styles from "./Details.module.css"

export default function Details({ data } : { data: Data }) {

    return (
        <table className={styles.list}>
            <thead>
                <tr>
                    <th colSpan={2}>Details</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className={styles.static}>Header:</td>
                    <td>{data.header}</td>
                </tr>
                <tr>
                    <td className={styles.static}>Source:</td>
                    <td>{data.source}</td>
                </tr>
                <tr>
                    <td className={styles.static}>Namespace:</td>
                    <td>{data.namespace}</td>
                </tr>
                <tr>
                    <td className={styles.static}>Type:</td>
                    <td>{data.type}</td>
                </tr>
            </tbody>
        </table>
    )

}
