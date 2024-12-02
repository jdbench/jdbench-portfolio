"use client";
import Image from "next/image";
import Link from "next/link";

export default function Nav({
    items = [],
}: {
    items: { href: string; title: string }[];
}) {
    return items.length > 0 ? (
        <nav className={`nav`}>
            <section className="nav-section">
                <a href="#dashboard">
                    <Image
                        src="/logo.png"
                        height="40"
                        width="40"
                        alt="Justin Bench's initials as a logo"
                    />
                </a>
            </section>
            <section className="nav-section">
                <ul className="nav-ul">
                    {items
                        .filter(({ href, title }) => href && title)
                        .map(({ href, title }, i) => (
                            <li className="nav-ul-li" key={`nav-link-${i}`}>
                                <Link href={href}>{title}</Link>
                            </li>
                        ))}
                </ul>
            </section>
            {/* <div className="nav-burger">
                <div className="nav-burger-tray">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div> */}
        </nav>
    ) : null;
}
