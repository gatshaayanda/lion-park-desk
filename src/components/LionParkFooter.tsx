import Link from "next/link";

const visitorLinks = [
  { href: "#attractions", label: "Attractions" },
  { href: "#activities", label: "Activities" },
  { href: "#plan-your-day", label: "Plan Your Visit" },
  { href: "#packages", label: "Packages" },
  { href: "#contact", label: "Contact" },
];

export default function LionParkFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <p className="footer-brand-name">Lion Park Resort</p>
            <p className="footer-tagline">The Beach in the Bush</p>
            <p className="footer-copy">
              A destination for family fun, adventure, water, animals and
              memorable days out.
            </p>
          </div>

          <div>
            <p className="footer-heading">Explore</p>
            <nav className="footer-links" aria-label="Visitor links">
              {visitorLinks.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="footer-heading">Lion Park</p>
            <p className="footer-copy">
              Theme Park • Water Park • Animal Park
            </p>

            <Link href="/desk" className="footer-staff-link">
              Staff Login
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Lion Park Resort.</p>
          <p>The Beach in the Bush.</p>
        </div>
      </div>
    </footer>
  );
}