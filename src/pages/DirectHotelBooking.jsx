import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, TrendingUp, ShieldCheck, Tag, Globe, ExternalLink, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import DirectBookingPreview from '../components/DirectBookingPreview';
import FaqAccordion from '../components/FaqAccordion';
import {
  SEO_PAGES,
  DIRECT_BOOKING_FAQS,
  createBreadcrumbSchema,
  createFaqSchema,
  SOFTWARE_APPLICATION_SCHEMA
} from '../data/seoData';

export default function DirectHotelBooking() {
  const breadcrumbItems = [
    { label: 'Direct Hotel Booking', path: '/direct-hotel-booking' }
  ];

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Direct Hotel Booking', path: '/direct-hotel-booking' }
  ]);
  const faqSchema = createFaqSchema(DIRECT_BOOKING_FAQS);

  const directStructuredData = {
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
        title={SEO_PAGES.directBooking.title}
        description={SEO_PAGES.directBooking.description}
        canonicalPath={SEO_PAGES.directBooking.path}
        ogImage={SEO_PAGES.directBooking.ogImage}
        structuredData={directStructuredData}
      />

      {/* Page Hero */}
      <section className="hero-section">
        <div className="hero-bg-media">
          <img
            src="/assets/images/hotel-direct-booking-lounge.webp"
            alt="Luxury boutique hotel lounge showcasing direct booking guest conversion"
            fetchpriority="high"
            decoding="async"
            width="1376"
            height="768"
          />
          <div className="hero-video-overlay" />
        </div>
        <div className="container hero-content text-center" style={{ maxWidth: 940, position: 'relative', zIndex: 1 }}>
          <Breadcrumbs items={breadcrumbItems} />

          <div className="badge-pill badge-gold" style={{ marginTop: 12 }}>
            <span className="dot" />
            <span>0% Commission Revenue</span>
          </div>

          <h1 className="hero-title">
            Direct Hotel Booking Software &amp; <br /><span>0% Commission Engine.</span>
          </h1>

          <p className="hero-sub">
            Give guests a reason to book directly on your custom hotel website. Eliminate 18% to 25% OTA commissions with high-speed mobile checkout, instant UPI and card processing, and exclusive promo codes.
          </p>

          <div className="hero-cta-group" style={{ justifyContent: 'center' }}>
            <Link to="/contact" className="btn btn-gold btn-lg">
              Get Direct Booking Engine
            </Link>
            <Link to="/website-only" className="btn btn-secondary btn-lg">
              Explore Hotel Website
            </Link>
          </div>
        </div>
      </section>

      {/* Section 1: Definition & Revenue Comparison */}
      <section style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)' }}>
        <div className="container">
          <div className="section-split">
            <div>
              <div className="badge-pill">
                <span className="dot" />
                <span>Financial Independence</span>
              </div>
              <h2>What Is Direct Hotel Booking?</h2>

              {/* Zero-Click / Featured Answer Definition Block */}
              <div style={{ padding: '16px 20px', borderRadius: 12, background: 'rgba(199,173,133,0.1)', border: '1px solid var(--accent-gold-border)', margin: '20px 0', fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--text-primary)' }}>
                <strong>Direct hotel booking</strong> refers to reservations completed by guests directly on a hotel’s own custom-domain website or communication channels without third-party travel intermediaries, allowing the property to retain 100% of guest revenue with zero commissions.
              </div>

              <p className="lead" style={{ marginBottom: 20 }}>
                Every reservation captured through an OTA carries an 18% to 25% deduction. Direct booking puts your hotel back in control:
              </p>

              <ul className="feature-list-check">
                <li>
                  <span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span>
                  <div>
                    <h3 style={{ fontSize: '1rem', color: '#fff', margin: '0 0 2px' }}>Zero Platform Commission</h3>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>You retain 100% of guest payments on room nights and seasonal packages.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span>
                  <div>
                    <h3 style={{ fontSize: '1rem', color: '#fff', margin: '0 0 2px' }}>Direct Guest Contact Ownership</h3>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Receive real guest phone numbers and email addresses instead of masked OTA proxies.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span>
                  <div>
                    <h3 style={{ fontSize: '1rem', color: '#fff', margin: '0 0 2px' }}>Immediate Cash Flow</h3>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Guest payments settle directly into your bank via your merchant payment gateway.</span>
                  </div>
                </li>
              </ul>

              <div style={{ marginTop: 24 }}>
                <Link to="/resources/ota-vs-direct-hotel-bookings" style={{ color: 'var(--accent-gold)', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  Read our in-depth OTA vs Direct Hotel Bookings Revenue Guide <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <DirectBookingPreview />
          </div>
        </div>
      </section>

      {/* Section 2: Core Direct Booking Features */}
      <section>
        <div className="container">
          <div className="section-header text-center">
            <div className="badge-pill badge-gold">
              <span className="dot" />
              <span>Engine Architecture</span>
            </div>
            <h2>Everything Needed for High-Conversion Direct Bookings</h2>
            <p className="lead" style={{ margin: '0 auto' }}>
              Engineered to convert website traffic into confirmed direct reservations in under 60 seconds.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            <div className="card-glass">
              <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--accent-gold-soft)', border: '1px solid var(--accent-gold-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', marginBottom: 16 }}>
                <CreditCard size={20} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: 8 }}>Instant Payment Checkout</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Frictionless mobile checkout supporting instant UPI, Google Pay, Apple Pay, Visa, Mastercard, and RuPay.
              </p>
            </div>

            <div className="card-glass">
              <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--accent-sage-soft)', border: '1px solid var(--accent-sage-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-sage-light)', marginBottom: 16 }}>
                <Tag size={20} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: 8 }}>Promo Codes &amp; Loyalty Perks</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Create private discount codes (e.g. STAYDIRECT) to reward returning guests without violating OTA rate parity.
              </p>
            </div>

            <div className="card-glass">
              <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--accent-gold-soft)', border: '1px solid var(--accent-gold-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', marginBottom: 16 }}>
                <Globe size={20} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: 8 }}>Google Hotel Search Schema</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Structured{' '}
                <a
                  href="https://developers.google.com/search/docs/appearance/structured-data/hotel"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent-gold)', textDecoration: 'underline' }}
                >
                  schema.org/Hotel data
                </a>{' '}
                enables Google Hotel Search and AI assistants to display your direct booking link.
              </p>
            </div>

            <div className="card-glass">
              <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--accent-sage-soft)', border: '1px solid var(--accent-sage-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-sage-light)', marginBottom: 16 }}>
                <TrendingUp size={20} />
              </div>
              <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: 8 }}>Live Calendar Auto-Sync</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Direct reservations flow straight into your room availability matrix, immediately locking inventory across all OTAs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Interactive Savings Calculator Callout */}
      <section style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}>
        <div className="container text-center" style={{ maxWidth: 840 }}>
          <div className="badge-pill">
            <span className="dot" />
            <span>Financial ROI</span>
          </div>
          <h2>Calculate How Much Commission You Can Save</h2>
          <p className="lead" style={{ margin: '0 auto 28px' }}>
            A 30-room hotel shifting just 30% of reservations to direct bookings saves an estimated <strong>$1,800 to $3,500+ every month</strong>.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Request Direct Booking Consultation →
          </Link>
        </div>
      </section>

      {/* Section 4: FAQs */}
      <section style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container" style={{ maxWidth: 840 }}>
          <div className="section-header text-center">
            <div className="badge-pill badge-gold">
              <span className="dot" />
              <span>Direct Booking Clarity</span>
            </div>
            <h2>Frequently Asked Questions on Direct Hotel Bookings</h2>
            <p className="lead" style={{ margin: '0 auto' }}>
              Common questions about zero-commission direct booking engines, merchant gateway payouts, and guest data privacy.
            </p>
          </div>

          <FaqAccordion faqs={DIRECT_BOOKING_FAQS} />
        </div>
      </section>

      {/* Section 5: Closing CTA */}
      <section>
        <div className="container">
          <div className="cta-banner">
            <h2>Ready to capture direct hotel bookings with 0% commission?</h2>
            <p className="lead" style={{ margin: '16px auto 36px' }}>
              Launch your bespoke hotel website and direct booking engine with Staycore.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-gold btn-lg">
                Get Started Now
              </Link>
              <Link to="/website-only" className="btn btn-secondary btn-lg">
                Explore Website-Only Plan
              </Link>
              <Link to="/features" className="btn btn-secondary btn-lg">
                Explore Full Platform
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
