export default async function Page({ params, } : { params : Promise<{ id: string }> }) {

    const { id } = await params;
    return <div>My doc: {id}</div>;

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
