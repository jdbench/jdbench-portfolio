export default function Header({ showNav }: { showNav: boolean }) {
  return (
    <header className={`header${showNav ? " show" : ""}`}>
      <h1><a href="#dashboard">Justin Bench</a></h1>
    </header>
  );
}
