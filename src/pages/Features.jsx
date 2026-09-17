import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import FaqAccordion from '../components/FaqAccordion';
import {
  SEO_PAGES,
  FEATURES_FAQS,
  createBreadcrumbSchema,
  createFaqSchema,
  SOFTWARE_APPLICATION_SCHEMA
} from '../data/seoData';

export default function Features() {
  const breadcrumbItems = [
    { label: 'Platform Features', path: '/features' }
  ];

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Platform Features', path: '/features' }
  ]);
  const faqSchema = createFaqSchema(FEATURES_FAQS);

  const featuresStructuredData = {
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
        title={SEO_PAGES.features.title}
        description={SEO_PAGES.features.description}
        keywords={SEO_PAGES.features.keywords}
        canonicalPath={SEO_PAGES.features.path}
        ogImage={SEO_PAGES.features.ogImage}
        structuredData={featuresStructuredData}
      />

      {/* Page Hero */}
      <section className="hero-section">
        <div className="hero-bg-media">
          <img
            src="/assets/images/hotel-management-features-banner.webp"
            alt="Staycore hotel management system features banner showcasing luxury suite and operational dashboard"
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
            <span>Platform Capabilities</span>
          </div>
          <h1 className="hero-title">
            Hotel Management System for <br /><span>Modern Property Operations.</span>
          </h1>
          <p className="hero-sub">
            From the front desk to your OTA channels to your own hotel website — Staycore unifies your hotel operations in one screen. Eliminate manual friction, synchronize room availability, and empower your hospitality team.
          </p>
          <div className="hero-cta-group" style={{ justifyContent: 'center' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Book a Free Live Demo
            </Link>
            <a href="#feature-rooms" className="btn btn-secondary btn-lg">
              Explore Capabilities
            </a>
          </div>
        </div>
      </section>

      {/* Feature 1 — Room & Availability Management */}
      <section id="feature-rooms" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container">
          <div className="section-split">
            <div>
              <div className="badge-pill">
                <span className="dot" />
                <span>Feature 01</span>
              </div>
              <h2>Real-Time Room Availability &amp; Inventory Management</h2>
              <div className="zero-click-box" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, padding: '14px 18px', margin: '14px 0 20px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--text-white)' }}>What is hotel operations software?</strong> Hotel operations software automates and organizes day-to-day lodging workflows, including live room inventory, housekeeping status tracking, front-desk check-ins, and guest billing.{' '}
                <Link to="/resources/what-is-hotel-management-software" style={{ color: 'var(--accent-sage-light)', textDecoration: 'underline' }}>Read hotel software guide →</Link>
              </div>
              <p className="lead" style={{ marginBottom: 24 }}>
                A live visual map of every room across all your properties — free, occupied, or cleaning — updated in real time.
              </p>

              <ul className="feature-list-check">
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <h3 style={{ fontSize: '1rem', color: '#fff', margin: '0 0 2px' }}>Multi-Floor Room Availability Matrix</h3>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Instant room status updates the second a guest checks in, checks out, or extends their stay.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <h3 style={{ fontSize: '1rem', color: '#fff', margin: '0 0 2px' }}>Zero Double Bookings Across Channels</h3>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>One single source of truth across walk-ins, phone reservations, and all OTA channels.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <h3 style={{ fontSize: '1rem', color: '#fff', margin: '0 0 2px' }}>Mobile Housekeeping Readiness</h3>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>1-tap cleaning and readiness updates for front desk and housekeeping teams.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <h3 style={{ fontSize: '1rem', color: '#fff', margin: '0 0 2px' }}>Multi-Property View Across Independent Wings</h3>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Switch between different wings, floors, and independent resort villas seamlessly.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="card-glass">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>Live Availability Matrix</span>
                <span className="badge-pill" style={{ margin: 0, fontSize: '0.72rem' }}>Multi-Floor</span>
              </div>
              <img
                src="/assets/images/hotel-management-dashboard.webp"
                alt="Staycore multi-floor live room availability matrix mockup"
                loading="lazy"
                decoding="async"
                width="600"
                height="260"
                style={{ borderRadius: 12, height: 260, width: '100%', objectFit: 'cover', marginBottom: 20 }}
              />
              <div className="rooms-mock-grid">
                <div className="room-cell"><div className="room-num">101</div><span className="room-status-indicator status-ready">Ready</span></div>
                <div className="room-cell"><div className="room-num">102</div><span className="room-status-indicator status-occupied">Occupied</span></div>
                <div className="room-cell"><div className="room-num">103</div><span className="room-status-indicator status-cleaning">Cleaning</span></div>
                <div className="room-cell"><div className="room-num">104</div><span className="room-status-indicator status-occupied">Occupied</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2 — OTA Booking Aggregation (AI-Powered) */}
      <section id="feature-ota" style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container">
          <div className="section-split reversed">
            <div>
              <div className="badge-pill">
                <span className="dot" />
                <span>Feature 02</span>
              </div>
              <h2>Automated OTA Booking Aggregation &amp; Channel Sync</h2>
              <div className="zero-click-box" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, padding: '14px 18px', margin: '14px 0 20px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--text-white)' }}>What is OTA booking management?</strong> OTA booking management is the operational process of centralizing guest reservations from channels like Booking.com, MakeMyTrip, and Goibibo into a unified calendar to prevent overbooking.{' '}
                <Link to="/ota-booking-management" style={{ color: 'var(--accent-sage-light)', textDecoration: 'underline' }}>Explore full OTA solution →</Link>
              </div>
              <p className="lead" style={{ marginBottom: 24 }}>
                Staycore’s AI automatically reads and organizes incoming OTA emails so you never have to check multiple extranet portals.
              </p>

              <ul className="feature-list-check">
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <h3 style={{ fontSize: '1rem', color: '#fff', margin: '0 0 2px' }}>Instant AI Email Parsing Pipeline</h3>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Extracts guest names, stay dates, and payment totals from OTA emails in under 0.8 seconds.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <h3 style={{ fontSize: '1rem', color: '#fff', margin: '0 0 2px' }}>Instant Inventory Auto-Hold to Prevent Overbooking</h3>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Locks availability instantly so two platforms never sell the same room simultaneously.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <h3 style={{ fontSize: '1rem', color: '#fff', margin: '0 0 2px' }}>Unified Multi-OTA Chronological Feed</h3>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>All bookings appear side-by-side whether from MakeMyTrip, Goibibo, Booking.com, or walk-ins.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <h3 style={{ fontSize: '1rem', color: '#fff', margin: '0 0 2px' }}>Repeat Guest History Across Channels</h3>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Recognize returning guests and their preferences regardless of which platform they booked through.</span>
                  </div>
                </li>
              </ul>
              <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link to="/ota-booking-management" className="btn btn-secondary">
                  Explore OTA Management Solution →
                </Link>
                <Link to="/resources/what-is-ota-booking-management" className="btn btn-secondary" style={{ opacity: 0.85 }}>
                  OTA Guide
                </Link>
              </div>
            </div>

            <div className="card-glass">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>Staycore AI Ingestion Pipeline</span>
                <span className="badge-pill" style={{ margin: 0, fontSize: '0.72rem', background: 'var(--accent-sage-soft)', color: 'var(--accent-sage-light)' }}>
                  Auto-Sync
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div className="ota-feed-item" style={{ padding: 14 }}>
                  <div className="ota-feed-left">
                    <span className="ota-badge badge-mmt">MakeMyTrip</span>
                    <div>
                      <strong style={{ color: '#fff' }}>Amit Verma</strong>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Parsed in 0.4s • Executive Suite #202</div>
                    </div>
                  </div>
                  <span className="room-status-indicator status-ready">Assigned</span>
                </div>

                <div className="ota-feed-item" style={{ padding: 14 }}>
                  <div className="ota-feed-left">
                    <span className="ota-badge badge-goibibo">Goibibo</span>
                    <div>
                      <strong style={{ color: '#fff' }}>Sunita Rao</strong>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Parsed in 0.6s • Deluxe King #104</div>
                    </div>
                  </div>
                  <span className="room-status-indicator status-ready">Assigned</span>
                </div>

                <div className="ota-feed-item" style={{ padding: 14 }}>
                  <div className="ota-feed-left">
                    <span className="ota-badge badge-direct">Direct Booking</span>
                    <div>
                      <strong style={{ color: '#fff' }}>David Miller</strong>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Direct Web • Penthouse #501 • $1,280</div>
                    </div>
                  </div>
                  <span className="room-status-indicator status-ready" style={{ background: 'rgba(199,173,133,0.2)', color: 'var(--accent-gold)', borderColor: 'rgba(199,173,133,0.4)' }}>
                    0% Fee
                  </span>
                </div>
              </div>

              <div style={{ marginTop: 24, padding: 16, background: 'rgba(0,0,0,0.3)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.06)', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                🔒 <strong>Enterprise Security:</strong> Bank-grade encryption for all guest records and payment workflows.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3 — Your Own Branded Website + Direct Booking Engine */}
      <section id="feature-website" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container">
          <div className="section-split">
            <div>
              <div className="badge-pill badge-gold">
                <span className="dot" />
                <span>Feature 03</span>
              </div>
              <h2>Commission-Free Hotel Direct Booking Engine</h2>
              <div className="zero-click-box" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, padding: '14px 18px', margin: '14px 0 20px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--text-white)' }}>What is a direct booking engine?</strong> A direct booking engine allows guests to reserve rooms straight on a hotel's website with immediate confirmation and zero third-party commission fees.{' '}
                <Link to="/direct-hotel-booking" style={{ color: 'var(--accent-gold)', textDecoration: 'underline' }}>Explore direct booking solution →</Link>
              </div>
              <p className="lead" style={{ marginBottom: 24 }}>
                A custom-domain hotel website built for high conversion, search visibility, and commission-free guest checkout.
              </p>

              <ul className="feature-list-check">
                <li>
                  <span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span>
                  <div>
                    <h3 style={{ fontSize: '1rem', color: '#fff', margin: '0 0 2px' }}>Custom Domain Hotel Website</h3>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Bespoke design showcasing your suites, amenities, and location aesthetic on your private domain.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span>
                  <div>
                    <h3 style={{ fontSize: '1rem', color: '#fff', margin: '0 0 2px' }}>Google &amp; AI Search Discovery (AEO)</h3>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      Structured{' '}
                      <a
                        href="https://developers.google.com/search/docs/appearance/structured-data/hotel"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--accent-gold)', textDecoration: 'underline', display: 'inline-flex', alignItems: 'center', gap: 3 }}
                      >
                        schema.org/Hotel markup <ExternalLink size={12} />
                      </a>{' '}
                      ensures rich placement across Google search results, ChatGPT, and Perplexity.
                    </span>
                  </div>
                </li>
                <li>
                  <span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span>
                  <div>
                    <h3 style={{ fontSize: '1rem', color: '#fff', margin: '0 0 2px' }}>Direct Booking Engine with Zero Commissions</h3>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Mobile-first checkout supporting instant card and UPI payments with zero commissions taken by Staycore.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span>
                  <div>
                    <h3 style={{ fontSize: '1rem', color: '#fff', margin: '0 0 2px' }}>Promo Codes &amp; Loyalty Coupons</h3>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Reward returning guests with private discount codes that sync directly to your availability calendar.</span>
                  </div>
                </li>
              </ul>
              <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link to="/direct-hotel-booking" className="btn btn-gold">
                  Explore Direct Booking System →
                </Link>
                <Link to="/website-only" className="btn btn-secondary">
                  Hotel Website Builder
                </Link>
              </div>
            </div>

            <div className="card-glass">
              <img
                src="/assets/images/hotel-direct-booking-lounge.webp"
                alt="Luxury hotel lounge driving commission-free direct reservations"
                loading="lazy"
                decoding="async"
                width="600"
                height="280"
                style={{ borderRadius: 14, width: '100%', height: 280, objectFit: 'cover', marginBottom: 20 }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 12 }}>
                <div>
                  <h4 style={{ color: '#fff', marginBottom: 4 }}>Direct Booking Impact</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0 }}>
                    Avg. savings for a 30-room hotel: <strong>$1,800+/month</strong>
                  </p>
                </div>
                <Link to="/website-only" className="btn btn-gold btn-sm">
                  Learn About Website Plan →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container" style={{ maxWidth: 840 }}>
          <div className="section-header text-center">
            <div className="badge-pill">
              <span className="dot" />
              <span>Operational Clarity</span>
            </div>
            <h2>Frequently Asked Questions on Hotel Operations</h2>
            <p className="lead" style={{ margin: '0 auto' }}>
              Everything hoteliers want to know about onboarding, OTA synchronization, multi-property management, and hardware requirements.
            </p>
          </div>

          <FaqAccordion faqs={FEATURES_FAQS} />
        </div>
      </section>

      {/* Closing CTA */}
      <section>
        <div className="container">
          <div className="cta-banner">
            <h2>Ready to experience the unified Staycore system?</h2>
            <p className="lead" style={{ margin: '16px auto 36px' }}>
              See how the room matrix, AI OTA aggregator, and direct booking engine work together seamlessly for your property.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary btn-lg">
                Book a Free Live Demo
              </Link>
              <Link to="/ota-booking-management" className="btn btn-secondary btn-lg">
                OTA Booking Centralization
              </Link>
              <Link to="/website-only" className="btn btn-secondary btn-lg">
                Explore Website-Only Plan
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
