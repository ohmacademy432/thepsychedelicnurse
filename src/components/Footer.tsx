import { Link } from 'react-router-dom';

const FOOTER_LINKS = [
  { to: '/about', label: 'About' },
  { to: '/medicines', label: 'Medicines' },
  { to: '/harm-reduction', label: 'Harm Reduction' },
  { to: '/login', label: 'Member Access' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-col footer-brand-col">
          <Link to="/" className="footer-brand">
            <em>The Psychedelic Nurse</em>
          </Link>
          <p className="footer-tagline">
            Harm reduction, held in sacred hands.
          </p>
        </div>

        <div className="footer-col">
          <p className="eyebrow footer-eyebrow">Explore</p>
          <ul className="footer-links">
            {FOOTER_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <p className="eyebrow footer-eyebrow">Reach out</p>
          <ul className="footer-contact">
            <li>
              <a href="tel:+16159702015">(615) 970-2015</a>
            </li>
            <li>
              <a href="mailto:ohmacademy432@gmail.com">
                ohmacademy432@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="site-footer-bottom">
        <p className="footer-copy">
          &copy; {year} The Psychedelic Nurse. A project of Ohm Academy of
          Healing.
        </p>
        <p className="footer-fineprint">
          This site is educational. It does not provide medical advice. Many
          substances discussed are Schedule I under federal law. Information is
          presented for harm reduction purposes only. Consult a licensed
          healthcare provider before making any health decisions.
        </p>
      </div>
    </footer>
  );
}
