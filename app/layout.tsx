import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../css/all.scss";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useState } from "react";

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
            href: "/#dashboard",
            title: "Dashboard",
        },
        {
            href: "/#skills",
            title: "Skills",
        },
        {
            href: "/#projects",
            title: "Projects",
        },
        {
            href: "/#about",
            title: "About",
        },
    ];

    return (
        <html lang="en">
            <body className={`${inter.className} body`}>
                <Nav items={navList} />
                <main className="body-main">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
