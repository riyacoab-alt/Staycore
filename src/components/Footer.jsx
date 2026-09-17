import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Globe, Instagram, Linkedin } from 'lucide-react';
import StaycoreLogo from './StaycoreLogo';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" aria-label="Staycore Home">
              <StaycoreLogo size="md" subtitle="PROPERTY MANAGEMENT" />
            </Link>
            <p>
              One platform for every hotel booking — yours, theirs, and everyone else’s. Minimal, elegant, product-first hospitality technology.
            </p>
            <div style={{ marginTop: 16, display: 'flex', flexDirection: 'column', gap: 6, fontSize: '0.84rem' }}>
              <a href="tel:+919633277995" style={{ color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <Phone size={14} style={{ color: 'var(--accent-sage-light)' }} /> +91 96332 77995
              </a>
              <a href="mailto:coabgroup@gmail.com" style={{ color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <Mail size={14} style={{ color: 'var(--accent-gold)' }} /> coabgroup@gmail.com
              </a>
              <div style={{ color: 'var(--text-dim)', fontSize: '0.78rem', marginTop: 4, lineHeight: 1.4 }}>
                37/2256, Kollamkudi House, Kollamkudimugal, Thrikkakara, Ernakulam, Kerala 682021.
              </div>
            </div>
            <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
              <a
                href="https://coab.club/"
                target="_blank"
                rel="noopener noreferrer"
                title="COAB Website"
                style={{ width: 34, height: 34, borderRadius: 8, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', transition: 'all 0.2s ease' }}
              >
                <Globe size={16} />
              </a>
              <a
                href="https://www.instagram.com/coab.club/"
                target="_blank"
                rel="noopener noreferrer"
                title="COAB Instagram"
                style={{ width: 34, height: 34, borderRadius: 8, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', transition: 'all 0.2s ease' }}
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.linkedin.com/company/coabclub/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                title="COAB LinkedIn"
                style={{ width: 34, height: 34, borderRadius: 8, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)', transition: 'all 0.2s ease' }}
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Platform</h5>
            <ul className="footer-links">
              <li><Link to="/features">Hotel Management System</Link></li>
              <li><Link to="/ota-booking-management">OTA Booking Management</Link></li>
              <li><Link to="/direct-hotel-booking">Direct Hotel Booking</Link></li>
              <li><Link to="/website-only">Hotel Website Builder</Link></li>
              <li><Link to="/contact">Request a Custom Quote</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Guides &amp; Hub</h5>
            <ul className="footer-links">
              <li><Link to="/resources">Educational Knowledge Hub</Link></li>
              <li><Link to="/resources/what-is-hotel-management-software">What is Hotel Management Software?</Link></li>
              <li><Link to="/resources/what-is-ota-booking-management">What is OTA Management?</Link></li>
              <li><Link to="/resources/ota-vs-direct-hotel-bookings">OTA vs Direct Hotel Bookings</Link></li>
              <li><Link to="/resources/what-should-a-hotel-website-include">Hotel Website Must-Haves</Link></li>
              <li><Link to="/resources/how-hotel-reservation-systems-work">How Hotel Reservation Systems Work</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Company</h5>
            <ul className="footer-links">
              <li><Link to="/about">About Staycore</Link></li>
              <li><Link to="/about#why-coab">Why COAB Built This</Link></li>
              <li><Link to="/contact">Book a Free Demo</Link></li>
              <li><Link to="/contact#inquiries">Official Coordinates</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Sister Products</h5>
            <ul className="footer-links">
              <li><a href="https://coab.club" target="_blank" rel="noopener noreferrer">COAB Studio</a></li>
              <li><Link to="/about">SkoolPay (Cashless School Fees)</Link></li>
              <li><Link to="/about">SkoolWay (GPS/RFID Tracking)</Link></li>
              <li><Link to="/contact">Partner Inquiries</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
            <span>©2026 COAB Solutions Private Limited. All rights reserved.</span>
            <span style={{ opacity: 0.4 }}>•</span>
            <Link to="/privacy-policy" style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', textDecoration: 'none' }}>
              Privacy Policy
            </Link>
            <span style={{ opacity: 0.4 }}>•</span>
            <Link to="/terms-of-service" style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', textDecoration: 'none' }}>
              Terms of Service
            </Link>
          </div>
          <div className="coab-badge">
            <span>Built by</span> <strong>COAB</strong>
            <span style={{ display: 'inline-block', width: 4, height: 4, borderRadius: '50%', backgroundColor: 'var(--accent-sage-light)', margin: '0 4px' }} />
            <span style={{ color: 'var(--accent-sage-light)' }}>Product-First Software</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
