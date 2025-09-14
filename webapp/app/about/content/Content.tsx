'use client'

import Overview from "./Overview";
import Ethos from "./Ethos";
import TechStack from "./TechStack";
import Donations from "./Donations";
import FAQ from "./FAQ";

import { useSearchParams } from "next/navigation"

export default function Content() {

    const searchParams = useSearchParams();

    const view = searchParams.get("view");
    switch (view) {

        case null:
        case "overview": return <Overview/>;
        case "ethos": return <Ethos/>
        case "tech-stack": return <TechStack/>;
        case "donations": return <Donations/>
        case "faq": return <FAQ/>;
        default: return <p>Invalid option!</p>;

    }

} 
