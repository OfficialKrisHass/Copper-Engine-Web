import { DataEntry } from "../Types"

export default function Defines({ list } : { list: DataEntry[] }) {

    return (
        <>
            <h3>Defines</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
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
