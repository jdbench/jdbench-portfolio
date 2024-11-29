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
                <a href="#dashboard">Justin Bench</a>
            </h1>
        </header>
    );
}
