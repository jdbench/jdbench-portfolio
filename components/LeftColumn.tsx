"use client";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function LeftColumn({
    navList,
}: {
    navList: { href: string; title: string }[];
}) {
    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav(!showNav);
    };

    return (
        <>
            <div className="icons">
                {showNav ? (
                    <IoMdClose color="white" onClick={toggleNav} size={24} />
                ) : (
                    <FaBars onClick={toggleNav} size={24} />
                )}
            </div>
            <div
                id="left-column"
                className={`body-left${showNav ? " flex-show" : ""}`}
            >
                <Header showNav={showNav} toggleNav={toggleNav} />
                <Nav items={navList} showNav={showNav} toggleNav={toggleNav} />
                <Footer showNav={showNav} />
            </div>
        </>
    );
}
