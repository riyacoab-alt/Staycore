import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import StaycoreLogo from './StaycoreLogo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    document.body.style.overflow = '';
  };

  const toggleMobile = () => {
    setMobileOpen(prev => {
      const next = !prev;
      document.body.style.overflow = next ? 'hidden' : '';
      return next;
    });
  };

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-wrap">
          <Link to="/" className="brand-logo" aria-label="Staycore Home">
            <StaycoreLogo size="sm" subtitle="PROPERTY MANAGEMENT" />
          </Link>

          <nav aria-label="Primary Navigation">
            <ul className="nav-links">
              <li>
                <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/features" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Features
                </NavLink>
              </li>
              <li>
                <NavLink to="/website-only" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Website-Only Plan
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/resources" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Resources
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="nav-actions">
            <Link to="/contact" className="btn btn-primary btn-sm">
              Book a Demo
            </Link>
            <button
              className="menu-toggle"
              onClick={toggleMobile}
              aria-label={mobileOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`mobile-nav-backdrop ${mobileOpen ? 'visible' : ''}`}
        onClick={closeMobile}
      />
      <aside className={`mobile-nav ${mobileOpen ? 'open' : ''}`} aria-label="Mobile Navigation">
        <div>
          <div style={{ marginBottom: 36 }}>
            <StaycoreLogo size="md" subtitle="PROPERTY MANAGEMENT" />
          </div>
          <ul className="mobile-nav-links">
            <li>
              <NavLink to="/" onClick={closeMobile} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/features" onClick={closeMobile} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
                Features
              </NavLink>
            </li>
            <li>
              <NavLink to="/website-only" onClick={closeMobile} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
                Website-Only Plan
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={closeMobile} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/resources" onClick={closeMobile} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
                Resources
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeMobile} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <Link to="/contact" onClick={closeMobile} className="btn btn-primary" style={{ width: '100%' }}>
            Book a Demo
          </Link>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: 16 }}>
            © Staycore. Built by COAB.
          </p>
        </div>
      </aside>
    </>
  );
}
