export default function Footer({ showNav }: { showNav: boolean }) {
  const year = new Date().getFullYear();
  return (
    <footer className={`footer${showNav ? " show" : ""}`}>
      <span className="footer-credit">&copy;{year} Justin Bench</span>
    </footer>
  );
}
