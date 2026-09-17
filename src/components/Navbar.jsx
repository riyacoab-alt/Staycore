import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import StaycoreLogo from './StaycoreLogo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
    document.body.style.overflow = '';
  }, [location.pathname]);

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

  const isSolutionsActive = [
    '/features',
    '/ota-booking-management',
    '/direct-hotel-booking',
    '/website-only'
  ].includes(location.pathname);

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

              {/* Solutions Dropdown */}
              <li
                className={`nav-dropdown ${dropdownOpen ? 'open' : ''}`}
                ref={dropdownRef}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  type="button"
                  className={`nav-dropdown-btn ${isSolutionsActive ? 'active' : ''} ${dropdownOpen ? 'open' : ''}`}
                  onClick={() => setDropdownOpen(prev => !prev)}
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                >
                  Solutions <ChevronDown size={14} className="chevron-icon" />
                </button>

                <div className="nav-dropdown-menu" role="menu">
                  <NavLink
                    to="/features"
                    className="nav-dropdown-item"
                    role="menuitem"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <span className="nav-dropdown-item-title">Hotel Management System</span>
                    <span className="nav-dropdown-item-desc">Live availability matrix &amp; operations</span>
                  </NavLink>

                  <NavLink
                    to="/ota-booking-management"
                    className="nav-dropdown-item"
                    role="menuitem"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <span className="nav-dropdown-item-title">OTA Booking Management</span>
                    <span className="nav-dropdown-item-desc">AI confirmation parser for MMT, Agoda &amp; Booking</span>
                  </NavLink>

                  <NavLink
                    to="/direct-hotel-booking"
                    className="nav-dropdown-item"
                    role="menuitem"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <span className="nav-dropdown-item-title">Direct Hotel Booking</span>
                    <span className="nav-dropdown-item-desc">0% commission direct booking engine</span>
                  </NavLink>

                  <NavLink
                    to="/website-only"
                    className="nav-dropdown-item"
                    role="menuitem"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <span className="nav-dropdown-item-title">Hotel Website Builder</span>
                    <span className="nav-dropdown-item-desc">Custom domain hotel website &amp; portal</span>
                  </NavLink>
                </div>
              </li>

              <li>
                <NavLink to="/resources" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  Resources
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                  About
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
          <div style={{ marginBottom: 28 }}>
            <StaycoreLogo size="md" subtitle="PROPERTY MANAGEMENT" />
          </div>

          <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-muted)', marginBottom: 10, paddingLeft: 4 }}>
            Core Platform Solutions
          </div>
          <ul className="mobile-nav-links" style={{ marginBottom: 24 }}>
            <li>
              <NavLink to="/" onClick={closeMobile} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/features" onClick={closeMobile} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
                Hotel Management System
              </NavLink>
            </li>
            <li>
              <NavLink to="/ota-booking-management" onClick={closeMobile} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
                OTA Booking Management
              </NavLink>
            </li>
            <li>
              <NavLink to="/direct-hotel-booking" onClick={closeMobile} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
                Direct Hotel Booking
              </NavLink>
            </li>
            <li>
              <NavLink to="/website-only" onClick={closeMobile} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
                Hotel Website Builder
              </NavLink>
            </li>
          </ul>

          <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-muted)', marginBottom: 10, paddingLeft: 4, borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 16 }}>
            Company &amp; Resources
          </div>
          <ul className="mobile-nav-links">
            <li>
              <NavLink to="/resources" onClick={closeMobile} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
                Resources &amp; Guides
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={closeMobile} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
                About Staycore
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeMobile} className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}>
                Contact &amp; Demo
              </NavLink>
            </li>
          </ul>
        </div>
        <div style={{ marginTop: 24 }}>
          <Link to="/contact" onClick={closeMobile} className="btn btn-primary" style={{ width: '100%' }}>
            Book a Demo
          </Link>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: 16 }}>
            © Staycore. Built by COAB Solutions.
          </p>
        </div>
      </aside>
    </>
  );
}
