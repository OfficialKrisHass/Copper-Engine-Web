import Functions from "@/app/ui/Docs/Functions";
import Defines from "@/app/ui/Docs/Defines";
import Types from "@/app/ui/Docs/Types";

import { config } from "@/config";

import styles from "./page.module.css"

type Data = {
    summary: string;

    header: string;
    source: string;
    namespace: string;
    type: string;

    functions?: string[];
    defines?: string[];
    types?: string[];
}

export default async function Page({ params, } : { params : Promise<{ id: string }> }) {

    const { id } = await params;

    const tmp = await fetch("http://127.0.0.1:8080/docs/" + id, { next: { revalidate: config.RevalidateTime } });
    const data: Data = await tmp.json();

    if (tmp.status != 200) {

        return (
            <>
                <h2>Invalid document: {id}</h2>
                <p>Could not get the document for entry {id} from server, try again in few moments or contact me somehow</p>
            </>
        )

    }

    return (
        <>
            <h2>{id}</h2>
            <div className={styles.doc}>
                <p>{data.summary}</p>
                <br/>
                <p>Header: {data.header}</p>
                <p>Source: {data.source}</p>
                <p>Namespace: {data.namespace}</p>
                <p>Type: {data.type}</p>
                <br/>

                {data.functions && <Functions list={data.functions}/>}
                {data.defines && <Defines list={data.defines}/>}
                {data.types && <Types list={data.types}/>}
            </div>
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
