"use client";
import { spacing24, spacing32 } from "../utils/constants";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { IoCloseSharp, IoSearch } from "react-icons/io5";

export default function Nav() {
  const [showNav, setShowNav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const toggleNav = () => {
    setShowNav(!showNav);
  };
  const nav = [
    {
      href: "/projects",
      title: "Projects",
    },
    {
      href: "/about",
      title: "About",
    },
  ];

  return (
    <nav className="top-nav">
      <div className={`${showNav ? "top-nav-show" : ""}`}>
        <div className="top-nav-toggles">
          <FaBars
            className={!showNav ? "top-nav-bars" : "hidden"}
            size={spacing24}
            onClick={toggleNav}
          />
          <IoCloseSharp
            className={showNav ? "top-nav-close" : "hidden"}
            size={spacing32}
            onClick={toggleNav}
          />
        </div>
        <ul className="top-nav-ul">
          <div>
            <Link href="/">Home</Link>
          </div>
          <div className="top-nav-ul-list">
            {nav.map(({ href, title }, i) => (
              <li
                className="top-nav-ul-list-li"
                key={`top-nav-link-${i}`}>
                <Link
                  onClick={toggleNav}
                  href={href}>
                  {title}
                </Link>
              </li>
            ))}
            <IoSearch className="top-nav-ul-list-search" onClick={() => setShowSearch(!showSearch)} />
          </div>
        </ul>
      </div>
    </nav>
  );
}
