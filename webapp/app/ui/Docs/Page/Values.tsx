import { DataEntry } from "../Types"

export default function Values({ list } : { list: DataEntry[] }) {

    return (
        <>
            <h3>Values</h3>
            <table>
                <thead>
                    <tr>
                        <th>Value</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(entry => (
                        <tr>
                            <td>{entry.name}</td>
                            <td>{entry.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br/>
        </>
    )

}
