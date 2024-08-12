import Link from "next/link";

export default function Nav() {
  return (
    <nav className="top-nav">
      <ul className="top-nav-ul">
        <li className="top-nav-ul-li"><Link href="/">Home</Link></li>
        <li className="top-nav-ul-li"><Link href="/projects">Projects</Link></li>
        <li className="top-nav-ul-li"><Link href="/about">About Me</Link></li>
      </ul>
    </nav>
  );
}
