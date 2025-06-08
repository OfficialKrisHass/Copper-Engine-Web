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

export const metadata: Metadata = {
  title: "Copper-Engine",
  description: "Copper-Engine website",
};

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
