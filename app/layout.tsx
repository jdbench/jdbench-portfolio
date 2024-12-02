/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../css/all.scss";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useState } from "react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Justin Bench",
    description: "Portfolio webpage for Fullstack developer, Justin Bench.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const navList = [
        {
            href: "/#about",
            title: "About",
        },
        {
            href: "/#work",
            title: "Work",
        },
        {
            href: "/#contact",
            title: "Contact",
        },
    ];

    return (
        <html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="use-credentials"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Itim&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Istok+Web:ital,wght@0,400;0,700;1,400;1,700&family=Itim&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body className={`${inter.className} body`}>
                <Nav items={navList} />
                <main className="body-main">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
