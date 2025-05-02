export default function Defines({ list } : { list: string[] }) {

    return (
        <>
            <h3>Defines</h3>
            {list.map(define => (
                <p>{define}</p>
            ))}
            <br/>
        </>
    )

}
