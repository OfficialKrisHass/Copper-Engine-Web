import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const mainFont = localFont({
    src: "./fonts/Roboto-VariableFont_wdth,wght.ttf",
    variable: "--font-main",
    weight: "100 900",
});
const titleFont = localFont({
    src: "./fonts/Orbitron-VariableFont_wght.ttf",
    variable: "--font-title",
    weight: "100 900",
})
const subtitleFont = localFont({
    src: "./fonts/Audiowide-Regular.ttf",
    variable: "--font-subtitle",
    weight: "100 900",
})

const title = "Copper-Engine";
const description = "The different choice. Copper-Engine is a modern open-source game engine empowering indie developers to create unique games that rival the biggest studios.";
export const metadata: Metadata = {
    metadataBase: new URL("https://coppr.dev"),
    title: title,
    description: description,
    openGraph: {
        title: title,
        siteName: "Copper-Engine",
        description: description,
        type: "website",
        url: "https://coppr.dev",
        images: {
            url: "screenshots/CopperPromotional.png",
            width: 1200,
            height: 675,
            alt: "Copper-Engine Blog",
        },
        locale: "en_US",
    }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mainFont.variable} ${titleFont.variable} ${subtitleFont.variable}`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
