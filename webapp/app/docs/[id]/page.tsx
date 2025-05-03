import Details from "@/app/ui/Docs/Page/Details";

import Variables from "@/app/ui/Docs/Page/Variables";
import Values from "@/app/ui/Docs/Page/Values";
import Functions from "@/app/ui/Docs/Page/Functions";
import Defines from "@/app/ui/Docs/Page/Defines";
import Types from "@/app/ui/Docs/Page/Types";

import { Data } from "@/app/ui/Docs/Types"

import { config } from "@/config";

import styles from "./page.module.css"

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
                <Details data={data}/>

                {data.variables && <Variables list={data.variables}/>}
                {data.types && <Types list={data.types}/>}
                {data.values && <Values list={data.values}/>}
                {data.functions && <Functions list={data.functions}/>}
                {data.defines && <Defines list={data.defines}/>}
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
