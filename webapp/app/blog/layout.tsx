import { Metadata } from "next"

import styles from "./layout.module.css"

const title = "Blog | Copper-Engine";
export const metadata: Metadata = {
    metadataBase: new URL("https://coppr.dev"),
    title: title,
    description: "Read the latest updates, devlogs and news from the Copper-Engine project. Follow the open-source journey of the Copper-Engine and discover how we're empowering indie devs worldwide.",
    openGraph: {
        title: title,
        siteName: "Copper-Engine",
        description: "Stay updated on Copper-Engine's progress, upcoming releases, new features and devlogs. Learn how indie creators are building unique games with our open-source tools.",
        type: "website",
        url: "https://coppr.dev/blog",
        images: {
            url: "screenshots/CopperPromotional.png",
            width: 1200,
            height: 630,
            alt: "Copper-Engine Blog",
        },
        locale: "en_US",
    }
}

export default function BlogLayout({ children } : { children: React.ReactNode }) {

    return (
        <main className={styles.main}>
            {children}
        </main>
    )

}