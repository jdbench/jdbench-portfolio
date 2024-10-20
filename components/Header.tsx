export default function Header({ showNav }: { showNav: boolean }) {
  return (
    <header className={`header${showNav ? " show" : ""}`}>
      <h1>Justin Bench</h1>
    </header>
  );
}
