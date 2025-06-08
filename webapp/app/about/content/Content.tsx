'use client'

import Values from "./Values";
import Features from "./Features";

import { useSearchParams } from "next/navigation"

export default function Content() {

    const searchParams = useSearchParams();

    const view = searchParams.get("view");
    switch (view) {

        default:
        case "values": return <Values/>;
        case "features": return <Features/>;

    }

} 
