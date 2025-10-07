import { Metadata } from "next";

import styles from "./layout.module.css"

const title = "About | Copper-Engine";
export const metadata: Metadata = {
    metadataBase: new URL("https://coppr.dev"),
    title: title,
    description: "Copper-Engine started as a hobby project and has evolved into a general engine meant for everyone, empowering indie developers along the way.",
    openGraph: {
        title: title,
        siteName: "Copper-Engine",
        description: "Learn more about Copper-Engine, a hobby project turned professional, growing into a versatile and powerful C++ Game engine.",
        type: "website",
        url: "https://coppr.dev/about?view=overview",
        images: {
            url: "screenshots/CopperPromotional.png",
            width: 1200,
            height: 630,
            alt: "Copper-Engine About",
        },
        locale: "en_US",
    }
}

export default function AboutLayout({ children } : { children: React.ReactNode }) {

    return (
        <main className={styles.main}>
            {children}
        </main>
    )

}