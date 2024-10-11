"use client";
import Link from "next/link";

export default function Nav({
  items,
  showNav,
  toggleNav,
}: {
  items: { href: string; title: string }[];
  showNav: boolean;
  toggleNav: () => void;
}) {
  return items.length > 0 ? (
    <nav className={`nav ${showNav ? "flex-show" : ""}`}>
      <ul className="nav-ul">
        {items
          .filter(({ href, title }) => href && title)
          .map(({ href, title }, i) => (
            <li
              className="nav-ul-li"
              key={`nav-link-${i}`}>
              <Link
                onClick={toggleNav}
                href={href}>
                {title}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  ) : null;
}
