export default function Footer() {
    const year = new Date().getFullYear();
  return <footer className="footer"><span className="footer-year">&copy;{year} Justin Bench</span></footer>;
}
