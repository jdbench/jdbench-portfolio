"use client";
import { spacing24, spacing32 } from "../utils/constants";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

export default function Nav() {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => {
    setShowNav(!showNav);
  };
  const nav = [
    {
      href: "/",
      title: "Home",
    },
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
          {nav.map(({ href, title }, i) => (
            <li
              className="top-nav-ul-li"
              key={`top-nav-link-${i}`}>
              <Link
                onClick={toggleNav}
                href={href}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
