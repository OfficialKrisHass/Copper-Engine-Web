export default function Types({ list } : { list: string[] }) {

    return (
        <>
            <h3>Types</h3>
            {list.map(type => (
                <p>{type}</p>
            ))}
            <br/>
        </>
    )

}
