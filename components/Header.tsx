import Image from "next/image";

export default function Header({
    showNav,
    toggleNav,
}: {
    showNav: boolean;
    toggleNav: () => void;
}) {
    return (
        <header className={`header${showNav ? " show" : ""}`}>
            <h1 onClick={toggleNav}>
                <a href="#dashboard">Dashboard</a>
            </h1>
        </header>
    );
}
