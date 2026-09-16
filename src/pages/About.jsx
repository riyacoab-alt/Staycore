import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ShieldCheck, HeartHandshake, Zap, Building } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import {
  SEO_PAGES,
  SITE_ORIGIN,
  createBreadcrumbSchema,
  BASE_ORGANIZATION_SCHEMA
} from '../data/seoData';

export default function About() {
  const breadcrumbItems = [
    { label: 'About Staycore', path: '/about' }
  ];

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'About Staycore', path: '/about' }
  ]);

  const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${SITE_ORIGIN}/about/#webpage`,
    url: `${SITE_ORIGIN}/about`,
    name: 'About Staycore | Hospitality Technology Built by COAB',
    description: 'Learn the story behind Staycore and COAB. Why product-first engineering solves high-friction hotel operations across rooms, OTAs, and direct bookings.',
    mainEntity: BASE_ORGANIZATION_SCHEMA
  };

  const aboutStructuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbSchema,
      aboutPageSchema,
      BASE_ORGANIZATION_SCHEMA
    ]
  };

  return (
    <main>
      <SEO
        title={SEO_PAGES.about.title}
        description={SEO_PAGES.about.description}
        canonicalPath={SEO_PAGES.about.path}
        ogImage={SEO_PAGES.about.ogImage}
        structuredData={aboutStructuredData}
      />

      {/* Page Hero */}
      <section className="hero-section">
        <div className="hero-bg-media">
          <img
            src="/assets/images/hotel-room-availability-matrix.webp"
            alt="Luxury hotel architecture and modern hospitality technology environment"
            fetchpriority="high"
            decoding="async"
            width="1376"
            height="768"
          />
          <div className="hero-video-overlay" />
        </div>
        <div className="container hero-content" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumbs items={breadcrumbItems} />

          <div
            className="badge-pill"
            style={{
              background: 'rgba(15, 20, 26, 0.88)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(244, 208, 111, 0.55)',
              color: '#FFF4CF',
              fontWeight: 600,
              boxShadow: '0 4px 18px rgba(0, 0, 0, 0.55)',
              marginBottom: 20,
              marginTop: 12
            }}
          >
            <span className="dot" style={{ backgroundColor: '#F4D06F', boxShadow: '0 0 10px #F4D06F' }} />
            <span style={{ color: '#FFF8DE', letterSpacing: '0.06em', fontWeight: 600 }}>Our Origin &amp; Purpose</span>
          </div>

          <h1 className="hero-title">
            Built to Give Hoteliers <br /><span>Complete Booking Independence.</span>
          </h1>
          <p className="hero-sub">
            Staycore exists because independent hoteliers deserve one unified screen to see their entire property — not five open extranet portals and fragmented paper registers.
          </p>
        </div>
      </section>

      {/* The Problem & The Mission */}
      <section style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)' }}>
        <div className="container">
          <div className="section-split">
            <div>
              <div className="badge-pill" style={{ background: 'rgba(231,111,81,0.15)', color: '#f0896f', borderColor: 'rgba(231,111,81,0.3)' }}>
                <span>The Industry Challenge</span>
              </div>
              <h2>The Fragmentation in Modern Hotel Operations</h2>
              <p className="lead" style={{ marginBottom: 20 }}>
                Most independent hotels run their daily operations across disconnected tools — physical registers, disparate confirmation inboxes, and separate OTA dashboards.
              </p>
              <ul className="feature-list-check" style={{ marginTop: 16 }}>
                <li>
                  <span className="check-icon" style={{ background: 'rgba(231,111,81,0.15)', color: '#f0896f' }}>✕</span>
                  <div>
                    <h3 style={{ fontSize: '1rem', color: '#fff', margin: '0 0 2px' }}>Disconnected Channels &amp; Missing Visibility</h3>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Separate inboxes lead to missed confirmations, delayed check-ins, and double-booking chaos.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon" style={{ background: 'rgba(231,111,81,0.15)', color: '#f0896f' }}>✕</span>
                  <div>
                    <h3 style={{ fontSize: '1rem', color: '#fff', margin: '0 0 2px' }}>Unsustainable 18% to 25% OTA Commissions</h3>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Hotels surrender nearly a quarter of their gross revenue to third-party booking aggregators.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon" style={{ background: 'rgba(231,111,81,0.15)', color: '#f0896f' }}>✕</span>
                  <div>
                    <h3 style={{ fontSize: '1rem', color: '#fff', margin: '0 0 2px' }}>Loss of Direct Guest Ownership</h3>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Owners lack direct communication channels with past guests to nurture loyalty and repeat bookings.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="card-glass" style={{ borderColor: 'var(--accent-sage-border)' }}>
              <div className="badge-pill">
                <span className="dot" />
                <span>Our Unified Solution</span>
              </div>
              <h2>Our Solution: Unified Hotel Operating Architecture</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: 20 }}>
                Staycore unifies your rooms, OTA channels, and custom hotel website into one screen. You gain real-time visibility, automated AI parsing, and a direct booking engine that eliminates middleman commissions.
              </p>
              <div style={{ padding: '14px 18px', borderRadius: 12, background: 'rgba(94,129,114,0.1)', border: '1px solid var(--accent-sage-border)', color: 'var(--accent-sage-light)', fontSize: '0.88rem' }}>
                By owning your direct guest relationships and live inventory, your hotel operates with complete operational independence.
              </div>
              <div style={{ marginTop: 24 }}>
                <Link to="/features" className="btn btn-secondary btn-sm">
                  Explore Hotel Management System Features →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why COAB Built This */}
      <section id="why-coab">
        <div className="container">
          <div className="section-split reversed">
            <div>
              <div className="badge-pill badge-gold">
                <span className="dot" />
                <span>Engineering Heritage</span>
              </div>
              <h2>Hospitality Technology Engineered by COAB</h2>
              <p className="lead" style={{ marginBottom: 16 }}>
                Staycore is engineered by{' '}
                <a
                  href="https://coab.club/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent-gold-light)', textDecoration: 'underline' }}
                >
                  COAB Solutions Private Limited
                </a>{' '}
                — a product-first software studio focused on solving high-friction operational workflows across mission-critical sectors.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                We spend time on-property with front-desk managers, housekeeping staff, and property owners to craft software that saves real hours every day instead of demanding more screen time.
              </p>
            </div>

            <div className="card-glass">
              <h3 style={{ color: '#fff', marginBottom: 16, fontSize: '1.2rem' }}>The COAB Product Ecosystem</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ padding: 14, borderRadius: 10, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontWeight: 600, color: '#fff', marginBottom: 2 }}>SkoolPay</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    Cashless institution payment infrastructure eliminating queues and revenue leakage.
                  </div>
                </div>
                <div style={{ padding: 14, borderRadius: 10, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontWeight: 600, color: '#fff', marginBottom: 2 }}>SkoolWay</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    Real-time vehicle telematics, GPS safety, and automated student attendance tracking.
                  </div>
                </div>
                <div style={{ padding: 14, borderRadius: 10, background: 'var(--accent-sage-soft)', border: '1px solid var(--accent-sage-border)' }}>
                  <div style={{ fontWeight: 600, color: 'var(--accent-sage-light)', marginBottom: 2 }}>Staycore Hospitality</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                    Unified hotel operations dashboard, AI OTA parsing, and commission-free direct bookings.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values / How We Work */}
      <section style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}>
        <div className="container">
          <div className="section-header text-center">
            <div className="badge-pill">
              <span className="dot" />
              <span>Operating Principles</span>
            </div>
            <h2>Our Product-First Operating Principles</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            <div className="card-glass">
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: 'var(--accent-sage-light)', marginBottom: 12 }}>01</div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: 8 }}>Product-First Workflow Speed</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Every button, status toggle, and calendar grid is engineered to save seconds during peak check-in and check-out rushes.
              </p>
            </div>

            <div className="card-glass">
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: 'var(--accent-gold)', marginBottom: 12 }}>02</div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: 8 }}>Zero Lock-In Data Ownership</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Start with a website, upgrade to the full platform anytime. You always retain 100% ownership of your guest and booking data.
              </p>
            </div>

            <div className="card-glass">
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: 'var(--accent-sage-light)', marginBottom: 12 }}>03</div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: 8 }}>Designed for Front-Desk Reality</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Built for the fast-paced reality of managing walk-ins, phone bookings, OTA notifications, and housekeeping readiness together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section>
        <div className="container">
          <div className="cta-banner">
            <h2>Experience the difference of a unified hotel dashboard.</h2>
            <p className="lead" style={{ margin: '16px auto 36px' }}>
              Book an interactive session with our engineering and hospitality team to see Staycore in action for your property.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary btn-lg">
                Book a Free Demo
              </Link>
              <Link to="/features" className="btn btn-secondary btn-lg">
                Explore Platform Features
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
