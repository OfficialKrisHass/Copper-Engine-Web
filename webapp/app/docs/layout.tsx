import { DocTreeNode } from "../components/Docs/Types";
import { GetDocTreeCached } from "../components/Docs/DocList";

import SideNav from "../components/Docs/SideNav"

import { Metadata } from "next";

import styles from "./layout.module.css"

const title = "Documentation | Copper-Engine";
export const metadata: Metadata = {
    metadataBase: new URL("https://coppr.dev"),
    title: title,
    description: "Learn how to use the Copper-Engine with our step-by-step guide and our detailed API reference. Build your dream game, explore engine systems, and utilize your creativity.",
    openGraph: {
        title: title,
        siteName: "Copper-Engine",
        description: "Get started with Copper-Engine or read the extensive API reference. Find guides and best practices for game development with the Copper-Engine.",
        type: "website",
        url: "https://coppr.dev/docs",
        images: {
            url: "screenshots/CopperPromotional.png",
            width: 1200,
            height: 630,
            alt: "Copper-Engine Blog",
        },
        locale: "en_US",
    }
}

export default async function DocsLayout({ children } : { children: React.ReactNode }) {

    const entryData: DocTreeNode | undefined = await GetDocTreeCached();

    return (
        <main className={styles.main}>
            <SideNav docTree={entryData}/>
            <div className={styles.page}>
                {children}
            </div>
        </main>
    )

}
