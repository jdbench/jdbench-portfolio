import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../css/all.scss";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
