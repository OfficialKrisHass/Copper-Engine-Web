import styles from "./page.module.css"

export default async function Page({ params, } : { params : Promise<{ id: string }> }) {

    const { id } = await params;

    return (
        <>
            <h2>{id}</h2>
            <p>Some info about this entry</p>
        </>
    )

}

export async function generateStaticParams() {

    return [
        {
            id: "engine",
        },
        {
            id: "window",
        },
    ];

}
