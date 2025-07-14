'use client'

import Overview from "./Overview";
import Ethos from "./Ethos";
import Features from "./Features";
import Donations from "./Donations";

import { useSearchParams } from "next/navigation"

export default function Content() {

    const searchParams = useSearchParams();

    const view = searchParams.get("view");
    switch (view) {

        case null:
        case "overview": return <Overview/>;
        case "ethos": return <Ethos/>
        case "features": return <Features/>;
        case "donations": return <Donations/>
        default: return <p>Invalid option!</p>;

    }

} 
