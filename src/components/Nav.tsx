import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const LINKS = [
  { to: '/about', label: 'About' },
  { to: '/medicines', label: 'Medicines' },
  { to: '/harm-reduction', label: 'Harm Reduction' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  useEffect(() => {
    // Close the mobile menu whenever the route changes (handles browser
    // back/forward; in-menu link clicks already close via onClick).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleSignOut = () => {
    setOpen(false);
    void signOut();
  };

  return (
    <header className="site-nav">
      <div className="site-nav-inner">
        <Link to="/" className="nav-brand">
          The <em>Psychedelic</em> Nurse
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} className="nav-link">
              {l.label}
            </NavLink>
          ))}
          {user ? (
            <>
              <Link to="/members" className="btn btn-primary nav-cta">
                Member Dashboard
              </Link>
              <button
                type="button"
                onClick={handleSignOut}
                className="nav-signout"
              >
                Sign out
              </button>
            </>
          ) : (
            <Link to="/login" className="btn btn-primary nav-cta">
              Member Access
            </Link>
          )}
        </nav>

        <button
          className="nav-burger"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="nav-mobile" role="dialog" aria-modal="true">
          <div className="nav-mobile-head">
            <Link to="/" className="nav-brand" onClick={() => setOpen(false)}>
              The <em>Psychedelic</em> Nurse
            </Link>
            <button
              className="nav-mobile-close"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              &times;
            </button>
          </div>
          <ul className="nav-mobile-list">
            {LINKS.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} onClick={() => setOpen(false)}>
                  {l.label}
                </NavLink>
              </li>
            ))}
            {user ? (
              <>
                <li>
                  <NavLink to="/members" onClick={() => setOpen(false)}>
                    Member Dashboard
                  </NavLink>
                </li>
                <li>
                  <button
                    type="button"
                    className="nav-mobile-signout"
                    onClick={handleSignOut}
                  >
                    Sign out
                  </button>
                </li>
              </>
            ) : (
              <li>
                <NavLink to="/login" onClick={() => setOpen(false)}>
                  Member Access
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
}
