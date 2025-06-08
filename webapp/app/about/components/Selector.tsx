'use client'

import Link from "next/link"

import { useSearchParams } from "next/navigation"

import styles from "./Selector.module.css"

export default function Selector() {

    const searchParams = useSearchParams();
    const view = searchParams.get("view");

    return (
        <div className={styles.selector}>
            <Link href="/about?view=values" className={(view === "values" || view === null) ? styles.selected : undefined}>Values</Link>
            <Link href="/about?view=features" className={view === "features" ? styles.selected : undefined}>Features</Link>
            <Link href="/about?view=community" className={view === "community" ? styles.selected : undefined}>Community</Link>
            <Link href="/about?view=plans" className={view === "plans" ? styles.selected : undefined}>Plans</Link>
            <Link href="/about?view=faq" className={view === "faq" ? styles.selected : undefined}>FAQ</Link>
        </div>
    )

}
