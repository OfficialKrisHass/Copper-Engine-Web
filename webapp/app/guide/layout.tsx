import SideNav from "../components/Guide/SideNav";

import { Metadata } from "next";

import styles from "./layout.module.css"

const title = "Guide | Copper-Engine";
export const metadata: Metadata = {
    metadataBase: new URL("https://coppr.dev"),
    title: title,
    description: "Learn how to use the Copper-Engine with our step-by-step, beginner-friendly guide. Build your dream game, explore engine systems, and utilize your creativity.",
    openGraph: {
        title: title,
        siteName: "Copper-Engine",
        description: "get started with Copper-Engine with your step-by-step, beginner-friendly guide and build your dream game today.",
        type: "website",
        url: "https://coppr.dev/guide",
        images: {
            url: "screenshots/CopperPromotional.png",
            width: 1200,
            height: 630,
            alt: "Copper-Engine Blog",
        },
        locale: "en_US",
    }
}

export default function GuideLayout({ children } : { children: React.ReactNode }) {

    return (
        <main className={styles.main}>
            <SideNav/>
            <div className={styles.page}>
                {children}
            </div>
        </main>
    )

}
