import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../css/all.scss";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useState } from "react";
import LeftColumn from "@/components/LeftColumn";

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
        <LeftColumn navList={navList} />
        <div className="body-right">
          <main className="main">{children}</main>
        </div>
      </body>
    </html>
  );
}
