import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, ShieldCheck, Zap, Inbox, CheckCircle2, Clock, Calendar } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import OtaComparison from '../components/OtaComparison';
import FaqAccordion from '../components/FaqAccordion';
import {
  SEO_PAGES,
  OTA_FAQS,
  createBreadcrumbSchema,
  createFaqSchema,
  SOFTWARE_APPLICATION_SCHEMA
} from '../data/seoData';

export default function OtaBookingManagement() {
  const breadcrumbItems = [
    { label: 'OTA Booking Management', path: '/ota-booking-management' }
  ];

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'OTA Booking Management', path: '/ota-booking-management' }
  ]);
  const faqSchema = createFaqSchema(OTA_FAQS);

  const otaStructuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbSchema,
      SOFTWARE_APPLICATION_SCHEMA,
      faqSchema
    ]
  };

  return (
    <main>
      <SEO
        title={SEO_PAGES.otaBooking.title}
        description={SEO_PAGES.otaBooking.description}
        canonicalPath={SEO_PAGES.otaBooking.path}
        ogImage={SEO_PAGES.otaBooking.ogImage}
        structuredData={otaStructuredData}
      />

      {/* Page Hero */}
      <section className="hero-section">
        <div className="hero-bg-media">
          <img
            src="/assets/images/hotel-management-features-banner.webp"
            alt="OTA booking management software dashboard showcasing automated channel aggregation"
            fetchpriority="high"
            decoding="async"
            width="1672"
            height="941"
          />
          <div className="hero-video-overlay" />
        </div>
        <div className="container hero-content text-center" style={{ maxWidth: 940, position: 'relative', zIndex: 1 }}>
          <Breadcrumbs items={breadcrumbItems} />

          <div className="badge-pill" style={{ marginTop: 12 }}>
            <span className="dot" />
            <span>Channel Centralization</span>
          </div>

          <h1 className="hero-title">
            OTA Booking Management <br /><span>for Modern Hotels.</span>
          </h1>

          <p className="hero-sub">
            Stop switching between five open extranets and cluttered inboxes. Staycore’s AI captures, verifies, and synchronizes OTA confirmations from MakeMyTrip, Goibibo, Booking.com, and Expedia in real time.
          </p>

          <div className="hero-cta-group" style={{ justifyContent: 'center' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Book a Free Live Demo
            </Link>
            <a href="#how-it-works" className="btn btn-secondary btn-lg">
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Section 1: Definition & The Problem */}
      <section style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)' }}>
        <div className="container">
          <div className="section-split">
            <div>
              <div className="badge-pill">
                <span className="dot" />
                <span>Core Concept</span>
              </div>
              <h2>What Is OTA Booking Management?</h2>

              {/* Zero-Click / Featured Answer Definition Block */}
              <div style={{ padding: '16px 20px', borderRadius: 12, background: 'rgba(94,129,114,0.1)', border: '1px solid var(--accent-sage-border)', margin: '20px 0', fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--text-primary)' }}>
                <strong>OTA booking management</strong> is the operational process of aggregating, synchronizing, and organizing hotel reservations originating from Online Travel Agencies (such as MakeMyTrip, Goibibo, Booking.com, Agoda, and Expedia) into a unified master calendar to eliminate manual data entry and prevent overbookings.
              </div>

              <p className="lead" style={{ marginBottom: 20 }}>
                Listing rooms across multiple OTAs drives visibility, but logging into separate extranets creates serious operational risks:
              </p>

              <ul className="feature-list-check">
                <li>
                  <span className="check-icon">✕</span>
                  <div>
                    <h3 style={{ fontSize: '1rem', color: '#fff', margin: '0 0 2px' }}>Fragmented Inboxes &amp; Missed Reservations</h3>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Front desk teams miss incoming confirmation emails during rush hours, leading to unassigned guest arrivals.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon">✕</span>
                  <div>
                    <h3 style={{ fontSize: '1rem', color: '#fff', margin: '0 0 2px' }}>Costly Double Bookings</h3>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>A room booked on Booking.com remains visible on MakeMyTrip until manually closed, risking simultaneous sales.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon">✕</span>
                  <div>
                    <h3 style={{ fontSize: '1rem', color: '#fff', margin: '0 0 2px' }}>Scattered Guest Histories</h3>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Hoteliers fail to recognize loyal returning guests because booking data sits trapped across separate portals.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="card-glass">
              <h4 style={{ color: '#fff', marginBottom: 14 }}>The Staycore Aggregation Advantage</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: 20 }}>
                Every reservation email is converted into an active calendar entry in under 0.8 seconds without manual typing.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ padding: 14, borderRadius: 10, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ color: 'var(--accent-sage-light)', fontWeight: 600, fontSize: '0.88rem' }}>✓ Automated AI Parser</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: 2 }}>Extracts guest name, check-in, room type, and paid amounts.</div>
                </div>
                <div style={{ padding: 14, borderRadius: 10, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ color: 'var(--accent-gold-light)', fontWeight: 600, fontSize: '0.88rem' }}>✓ Smart Conflict Guard</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: 2 }}>Locks availability matrix instantly to prevent walk-in overlap.</div>
                </div>
                <div style={{ padding: 14, borderRadius: 10, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.88rem' }}>✓ Cancellation Auto-Release</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: 2 }}>Frees inventory immediately when an OTA cancellation email arrives.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Interactive Demonstration */}
      <section id="how-it-works">
        <div className="container">
          <div className="section-header text-center">
            <div className="badge-pill">
              <span className="dot" />
              <span>Interactive Operational Comparison</span>
            </div>
            <h2>How Staycore Centralizes Your OTA Bookings</h2>
            <p className="lead" style={{ margin: '0 auto' }}>
              Compare the friction of messy inboxes against Staycore’s real-time chronological feed.
            </p>
          </div>

          <div style={{ maxWidth: 860, margin: '0 auto' }}>
            <OtaComparison />
          </div>
        </div>
      </section>

      {/* Section 3: Supported OTA Channels */}
      <section style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}>
        <div className="container">
          <div className="section-header text-center">
            <div className="badge-pill badge-gold">
              <span className="dot" />
              <span>Multi-Channel Coverage</span>
            </div>
            <h2>Supported Online Travel Agencies</h2>
            <p className="lead" style={{ margin: '0 auto' }}>
              Staycore’s secure AI webhook reads confirmation emails directly from all major global and regional OTAs.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            <div className="card-glass text-center" style={{ padding: 24 }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: 6 }}>MakeMyTrip</div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}>Automated confirmation &amp; modification parsing.</p>
            </div>
            <div className="card-glass text-center" style={{ padding: 24 }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: 6 }}>Goibibo</div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}>Instant room hold and guest contact capture.</p>
            </div>
            <div className="card-glass text-center" style={{ padding: 24 }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: 6 }}>Booking.com</div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}>International guest arrival and rate sync.</p>
            </div>
            <div className="card-glass text-center" style={{ padding: 24 }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: 6 }}>Agoda &amp; Expedia</div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}>Prepaid and pay-at-hotel reservation tagging.</p>
            </div>
          </div>

          <div style={{ marginTop: 36, textAlign: 'center' }}>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Want to learn more about the mechanics of multi-channel synchronization?{' '}
              <Link to="/resources/what-is-ota-booking-management" style={{ color: 'var(--accent-gold)', textDecoration: 'underline' }}>
                Read our in-depth OTA Booking Management Guide →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: FAQs */}
      <section style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container" style={{ maxWidth: 840 }}>
          <div className="section-header text-center">
            <div className="badge-pill">
              <span className="dot" />
              <span>Channel Clarity</span>
            </div>
            <h2>Frequently Asked Questions on OTA Booking Management</h2>
            <p className="lead" style={{ margin: '0 auto' }}>
              Everything hoteliers ask about automated email parsing, overbooking prevention, and channel synchronization.
            </p>
          </div>

          <FaqAccordion faqs={OTA_FAQS} />
        </div>
      </section>

      {/* Section 5: Closing CTA */}
      <section>
        <div className="container">
          <div className="cta-banner">
            <h2>Ready to centralize your hotel’s OTA reservations?</h2>
            <p className="lead" style={{ margin: '16px auto 36px' }}>
              See our AI confirmation parser and room matrix in action with a tailored 1-on-1 walkthrough.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary btn-lg">
                Book a Free Live Demo
              </Link>
              <Link to="/direct-hotel-booking" className="btn btn-secondary btn-lg">
                Direct Hotel Booking Engine
              </Link>
              <Link to="/features" className="btn btn-secondary btn-lg">
                Explore Full Room Matrix
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
