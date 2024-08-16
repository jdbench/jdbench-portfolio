export default function Footer() {
    const year = new Date().getFullYear();
  return <footer className="footer"><span className="footer-credit">&copy;{year} Justin Bench</span></footer>;
}
