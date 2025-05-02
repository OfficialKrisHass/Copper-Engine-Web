export default function Functions({ list } : { list: string[] }) {

    return (
        <>
            <h3>Functions</h3>
            {list.map(func => (
                <p>{func}</p>
            ))}
            <br/>
        </>
    )

}
