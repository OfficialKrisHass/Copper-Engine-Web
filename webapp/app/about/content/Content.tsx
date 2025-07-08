'use client'

import Overview from "./Overview";
import Ethos from "./Ethos";
import Features from "./Features";

import { useSearchParams } from "next/navigation"

export default function Content() {

    const searchParams = useSearchParams();

    const view = searchParams.get("view");
    switch (view) {

        case null:
        case "overview": return <Overview/>;
        case "features": return <Features/>;
        case "ethos": return <Ethos/>
        default: return <p>Invalid option!</p>;

    }

} 
