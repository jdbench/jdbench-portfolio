"use client";
import Link from "next/link";

export default function Nav({
    items = [],
}: {
    items: { href: string; title: string }[];
}) {
    return items.length > 0 ? (
        <nav className={`nav flex-show`}>
            <ul className="nav-ul">
                {items
                    .filter(({ href, title }) => href && title)
                    .map(({ href, title }, i) => (
                        <li className="nav-ul-li" key={`nav-link-${i}`}>
                            <Link href={href}>{title}</Link>
                        </li>
                    ))}
            </ul>
        </nav>
    ) : null;
}
