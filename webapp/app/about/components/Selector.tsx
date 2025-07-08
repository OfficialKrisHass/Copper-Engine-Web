'use client'

import Link from "next/link"

import { useSearchParams } from "next/navigation"

import styles from "./Selector.module.css"

export default function Selector() {

    const searchParams = useSearchParams();
    const view = searchParams.get("view");

    return (
        <div className={styles.selector}>
            <Link href="/about?view=overview" className={(view === "overview" || view === null) ? styles.selected : undefined}>Overview</Link>
            <Link href="/about?view=ethos" className={view === "ethos" ? styles.selected : undefined}>Ethos</Link>
            <Link href="/about?view=features" className={view === "features" ? styles.selected : undefined}>Features</Link>
            <Link href="/about?view=tech-stack" className={view === "tech-stack" ? styles.selected : undefined}>Tech stack</Link>
            <Link href="/about?view=future" className={view === "future" ? styles.selected : undefined}>Future</Link>
            <Link href="/about?view=faq" className={view === "faq" ? styles.selected : undefined}>FAQ</Link>
        </div>
    )

}
