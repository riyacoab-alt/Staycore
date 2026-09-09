import React from 'react';
import { Link } from 'react-router-dom';
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
          </div>

          <div className="footer-col">
            <h5>Platform</h5>
            <ul className="footer-links">
              <li><Link to="/features">Dashboard Overview</Link></li>
              <li><Link to="/features">Room Availability Matrix</Link></li>
              <li><Link to="/features">AI OTA Aggregator</Link></li>
              <li><Link to="/features">Direct Booking Engine</Link></li>
              <li><Link to="/website-only">Website-Only Plan</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Company</h5>
            <ul className="footer-links">
              <li><Link to="/about">About Staycore</Link></li>
              <li><Link to="/about">Why COAB Built This</Link></li>
              <li><Link to="/pricing">Pricing & Plans</Link></li>
              <li><Link to="/contact">Book a Demo</Link></li>
              <li><Link to="/contact">General Inquiries</Link></li>
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
          <div>
            © 2026 Staycore Technologies. All rights reserved.
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
