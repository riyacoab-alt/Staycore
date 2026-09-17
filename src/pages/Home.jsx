import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Volume2, VolumeX, ExternalLink } from 'lucide-react';
import HeroDashboardPreview from '../components/HeroDashboardPreview';
import OtaComparison from '../components/OtaComparison';
import DirectBookingPreview from '../components/DirectBookingPreview';
import FaqAccordion from '../components/FaqAccordion';
import SEO from '../components/SEO';
import {
  SEO_PAGES,
  BASE_ORGANIZATION_SCHEMA,
  SOFTWARE_APPLICATION_SCHEMA,
  WEBSITE_SCHEMA,
  HOME_FAQS,
  createFaqSchema
} from '../data/seoData';

export default function Home({ onToast }) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const homeStructuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      BASE_ORGANIZATION_SCHEMA,
      SOFTWARE_APPLICATION_SCHEMA,
      WEBSITE_SCHEMA,
      createFaqSchema(HOME_FAQS)
    ]
  };

  return (
    <main>
      <SEO
        title={SEO_PAGES.home.title}
        description={SEO_PAGES.home.description}
        keywords={SEO_PAGES.home.keywords}
        canonicalPath={SEO_PAGES.home.path}
        ogImage={SEO_PAGES.home.ogImage}
        structuredData={homeStructuredData}
      />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-media">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="metadata"
            poster="/assets/images/hotel-management-dashboard.webp"
            className="hero-banner-video"
          >
            <source src="/assets/vedios/StayCore_hotel_promotional_video_20260910063621.mp4" type="video/mp4" />
          </video>
          <div className="hero-video-overlay" />
        </div>

        {/* Floating Sound Toggle */}
        <button
          type="button"
          className="hero-video-sound-btn"
          onClick={toggleMute}
          title={isMuted ? 'Unmute promotional video' : 'Mute promotional video'}
          aria-label={isMuted ? 'Unmute promotional video' : 'Mute promotional video'}
        >
          {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
          <span>{isMuted ? 'Sound Off' : 'Sound On'}</span>
        </button>

        <div className="container hero-content">
          <div className="badge-pill">
            <span className="dot" />
            <span>One platform for every hotel booking</span>
          </div>

          <h1 className="hero-title">
            Hotel Management Software <br /><span>Built for One Screen.</span>
          </h1>

          <p className="hero-sub">
            One unified hotel management platform for your rooms, bookings, and OTAs. Eliminate double bookings, auto-sync OTA emails with AI, and capture 0% commission direct reservations.
          </p>

          <div className="hero-cta-group">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Book a Free Demo
            </Link>
            <a href="#features-preview" className="btn btn-secondary btn-lg">
              Explore Hotel Software Features
            </a>
          </div>

          <HeroDashboardPreview onToast={onToast} />
        </div>
      </section>

      {/* Section 1 — Room & Availability Management */}
      <section id="features-preview" style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)' }}>
        <div className="container">
          <div className="section-split">
            <div>
              <div className="badge-pill">
                <span className="dot" />
                <span>Room &amp; Availability Management</span>
              </div>
              <h2>Real-Time Room Availability &amp; Operations Management</h2>
              <div className="zero-click-box" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, padding: '14px 18px', margin: '14px 0 20px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--text-white)' }}>What is hotel management software?</strong> Hotel management software is a centralized digital system that manages front-desk check-ins, room inventory, housekeeping statuses, and reservations across all channels in one interface.{' '}
                <Link to="/resources/what-is-hotel-management-software" style={{ color: 'var(--accent-sage-light)', textDecoration: 'underline' }}>Read our complete guide →</Link>
              </div>
              <p className="lead">
                A live visual matrix of which rooms are free, occupied, or cleaning — across all your properties in one place.
              </p>
              <ul className="feature-list-check">
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <h3 style={{ fontSize: '1rem', color: '#fff', margin: '0 0 2px' }}>Live Room Availability Matrix</h3>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Instant room status updates on check-ins, check-outs, and housekeeping cleanings.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <h3 style={{ fontSize: '1rem', color: '#fff', margin: '0 0 2px' }}>Zero Double Bookings Across Channels</h3>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Synchronized availability across walk-in guests, phone reservations, and all connected OTAs.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <h3 style={{ fontSize: '1rem', color: '#fff', margin: '0 0 2px' }}>Mobile Housekeeping Alignment</h3>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Front-desk and cleaning teams stay aligned with 1-tap mobile readiness status toggles.</span>
                  </div>
                </li>
              </ul>
              <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link to="/features#feature-rooms" className="btn btn-secondary">
                  Explore Room Availability Matrix →
                </Link>
                <Link to="/resources/what-is-hotel-management-software" className="btn btn-secondary" style={{ opacity: 0.85 }}>
                  Hotel Software Guide
                </Link>
              </div>
            </div>

            <div className="card-glass">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <h4 style={{ fontSize: '1rem', color: '#fff' }}>Multi-Property Floor Overview</h4>
                <span className="badge-pill" style={{ margin: 0, fontSize: '0.75rem' }}>Live Broadcast</span>
              </div>
              <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'var(--status-ready)' }} /> 12 Ready
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'var(--status-occupied)' }} /> 28 Occupied
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'var(--status-cleaning)' }} /> 2 Cleaning
                </span>
              </div>
              <img
                src="/assets/images/hotel-room-availability-matrix.webp"
                alt="Luxury hotel suite in Staycore real-time room availability matrix"
                loading="lazy"
                decoding="async"
                width="600"
                height="260"
                style={{ borderRadius: 12, width: '100%', height: 260, objectFit: 'cover', border: '1px solid rgba(255,255,255,0.08)' }}
              />
              <div style={{ marginTop: 18, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
                <span style={{ color: 'var(--text-white)', fontWeight: 500 }}>Villa Mountain Penthouse #301</span>
                <span className="room-status-indicator status-ready">Ready for Check-In</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — OTA Aggregation (AI) */}
      <section>
        <div className="container">
          <div className="section-split reversed">
            <div>
              <div className="badge-pill">
                <span className="dot" />
                <span>AI-Powered OTA Engine</span>
              </div>
              <h2>Centralize OTA Bookings with Automated AI Parsing</h2>
              <div className="zero-click-box" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, padding: '14px 18px', margin: '14px 0 20px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--text-white)' }}>What is OTA booking management?</strong> OTA booking management is the operational workflow of tracking, updating, and centralizing guest reservations from Online Travel Agencies into a single master calendar to prevent overbooking.{' '}
                <Link to="/resources/what-is-ota-booking-management" style={{ color: 'var(--accent-sage-light)', textDecoration: 'underline' }}>Learn how it works →</Link>
              </div>
              <p className="lead">
                Stop checking separate emails and extranet tabs. Staycore’s AI captures and organizes your OTA confirmations automatically.
              </p>
              <ul className="feature-list-check">
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <h3 style={{ fontSize: '1rem', color: '#fff', margin: '0 0 2px' }}>Instant Confirmation Extraction</h3>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Parses guest names, stay dates, and payment totals from OTA emails in under 0.8 seconds.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <h3 style={{ fontSize: '1rem', color: '#fff', margin: '0 0 2px' }}>Smart Conflict Inventory Guard</h3>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Auto-holds inventory so multiple channels never book the same room twice.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <h3 style={{ fontSize: '1rem', color: '#fff', margin: '0 0 2px' }}>Unified Chronological Guest History</h3>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Track guest history across MakeMyTrip, Goibibo, Booking.com, and direct reservations.</span>
                  </div>
                </li>
              </ul>
              <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link to="/ota-booking-management" className="btn btn-secondary">
                  Explore OTA Management Solution →
                </Link>
                <Link to="/features#feature-ota" className="btn btn-secondary" style={{ opacity: 0.85 }}>
                  See Technical Details
                </Link>
              </div>
            </div>

            <OtaComparison />
          </div>
        </div>
      </section>

      {/* Section 3 — Your Own Branded Website + Direct Bookings */}
      <section style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}>
        <div className="container">
          <div className="section-split">
            <div>
              <div className="badge-pill badge-gold">
                <span className="dot" />
                <span>Direct Booking Channel</span>
              </div>
              <h2>Build Your Own Hotel Website for Direct Bookings</h2>
              <div className="zero-click-box" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, padding: '14px 18px', margin: '14px 0 20px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--text-white)' }}>OTA vs Direct Bookings:</strong> Direct bookings allow hoteliers to retain 100% of guest revenue without middleman fees, while OTAs charge 15–25% commission per reservation.{' '}
                <Link to="/resources/ota-vs-direct-hotel-bookings" style={{ color: 'var(--accent-gold)', textDecoration: 'underline' }}>Compare direct vs OTA channels →</Link>
              </div>
              <p className="lead">
                A custom-domain website optimized for Google and AI search, with direct checkout that eliminates middleman commissions.
              </p>
              <ul className="feature-list-check">
                <li>
                  <span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span>
                  <div>
                    <h3 style={{ fontSize: '1rem', color: '#fff', margin: '0 0 2px' }}>Custom-Domain Hotel Presence</h3>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Showcase suites, amenities, and room rates on your private hotel domain.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span>
                  <div>
                    <h3 style={{ fontSize: '1rem', color: '#fff', margin: '0 0 2px' }}>0% Commission Direct Booking Engine</h3>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Keep 100% of guest revenue with instant card and UPI payment processing.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span>
                  <div>
                    <h3 style={{ fontSize: '1rem', color: '#fff', margin: '0 0 2px' }}>Structured Google &amp; AI Search Visibility</h3>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      Built to comply with{' '}
                      <a
                        href="https://support.google.com/hotelprices/answer/9238392"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--accent-gold)', textDecoration: 'underline', display: 'inline-flex', alignItems: 'center', gap: 3 }}
                      >
                        Google Hotel Search standards <ExternalLink size={12} />
                      </a>{' '}
                      and AI discovery engines like ChatGPT and Perplexity.
                    </span>
                  </div>
                </li>
                <li>
                  <span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span>
                  <div>
                    <h3 style={{ fontSize: '1rem', color: '#fff', margin: '0 0 2px' }}>Promo Codes &amp; Returning Guest Perks</h3>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Incentivize direct guest loyalty while direct reservations flow straight into your dashboard.</span>
                  </div>
                </li>
              </ul>
              <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link to="/website-only" className="btn btn-gold">
                  Explore Hotel Website Builder →
                </Link>
                <Link to="/direct-hotel-booking" className="btn btn-secondary">
                  Direct Hotel Booking Engine →
                </Link>
              </div>
            </div>

            <DirectBookingPreview />
          </div>
        </div>
      </section>

      {/* Section 4 — Two Ways to Work With Us */}
      <section>
        <div className="container">
          <div className="section-header text-center">
            <div className="badge-pill">
              <span className="dot" />
              <span>Tailored Architecture</span>
            </div>
            <h2>Flexible Plans for Hotels of Every Size</h2>
            <p className="lead" style={{ margin: '0 auto' }}>
              Choose a complete operating system or start with a commission-free website. Upgrade anytime.
            </p>
          </div>

          <div className="plans-split-grid">
            {/* Card 1: Full Staycore Webapp */}
            <div className="plan-card featured">
              <div>
                <div className="badge-pill">Complete Operating System</div>
                <h3 style={{ color: '#fff', marginBottom: 6, fontSize: '1.6rem' }}>Full Staycore Webapp</h3>
                <div className="plan-tagline">“Everything, in one dashboard.”</div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: 24 }}>
                  The complete hotel command center with live room matrix, AI OTA ingestion, and multi-property management.
                </p>

                <ul className="feature-list-check" style={{ marginBottom: 32 }}>
                  <li><span className="check-icon">✓</span><span>Real-time multi-property room matrix</span></li>
                  <li><span className="check-icon">✓</span><span>AI automated OTA confirmation parsing</span></li>
                  <li><span className="check-icon">✓</span><span>Unified calendar for direct, OTA &amp; walk-in guests</span></li>
                  <li><span className="check-icon">✓</span><span>Includes custom branded hotel website</span></li>
                </ul>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                  Book a Free Demo
                </Link>
                <Link to="/contact" style={{ color: 'var(--accent-sage-light)', fontSize: '0.85rem', textAlign: 'center', textDecoration: 'none' }}>
                  Request Tailored Property Quote →
                </Link>
              </div>
            </div>

            {/* Card 2: Website-Only Plan */}
            <div className="plan-card">
              <div>
                <div className="badge-pill badge-gold">Lightweight Entry</div>
                <h3 style={{ color: '#fff', marginBottom: 6, fontSize: '1.6rem' }}>Website-Only Plan</h3>
                <div className="plan-tagline">“A booking-ready website for your hotel.”</div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: 24 }}>
                  A bespoke hotel website with direct booking engine and a lightweight portal to view reservations.
                </p>

                <ul className="feature-list-check" style={{ marginBottom: 32 }}>
                  <li><span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span><span>Bespoke custom-domain hotel website</span></li>
                  <li><span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span><span>Direct booking engine with 0% commission</span></li>
                  <li><span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span><span>SEO &amp; AI search visibility (ChatGPT &amp; Google)</span></li>
                  <li><span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span><span>Lightweight portal to track incoming guests</span></li>
                </ul>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <Link to="/website-only" className="btn btn-secondary" style={{ width: '100%' }}>
                  Explore Website-Only Plan
                </Link>
                <Link to="/contact" style={{ color: 'var(--accent-gold)', fontSize: '0.85rem', textAlign: 'center', textDecoration: 'none' }}>
                  Inquire About Website-Only Setup →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 — Why Staycore */}
      <section style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)' }}>
        <div className="container">
          <div className="section-header text-center">
            <div className="badge-pill">
              <span className="dot" />
              <span>Why Hoteliers Choose Staycore</span>
            </div>
            <h2>Why Hoteliers Choose Staycore Hotel Software</h2>
            <p className="lead" style={{ margin: '0 auto' }}>
              No generic templates or enterprise clutter — just clear control over your rooms and guest revenue.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            <div className="card-glass">
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-gold)', marginBottom: 12 }}>01</div>
              <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: 8 }}>One Unified Screen</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Replace five open extranet tabs and registers with a single live operational dashboard.
              </p>
            </div>

            <div className="card-glass">
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-sage-light)', marginBottom: 12 }}>02</div>
              <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: 8 }}>Automated AI Confirmation Parsing</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Incoming booking emails are parsed and added to your calendar in seconds without manual typing.
              </p>
            </div>

            <div className="card-glass">
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-gold)', marginBottom: 12 }}>03</div>
              <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: 8 }}>Direct Revenue Ownership</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Keep 100% of direct bookings and build lasting guest relationships without OTA cuts.
              </p>
            </div>

            <div className="card-glass">
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-sage-light)', marginBottom: 12 }}>04</div>
              <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: 8 }}>Scalable for Independent Properties</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Built for boutique stays, heritage retreats, and multi-property resorts alike.
              </p>
            </div>
          </div>

          {/* Luxury Stats Counters */}
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-num">0%</div>
              <div className="stat-label">Commission on Direct Bookings</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">1</div>
              <div className="stat-label">Unified Dashboard for All Channels</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">5x</div>
              <div className="stat-label">Faster Front-Desk Updates</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">100%</div>
              <div className="stat-label">Automated AI Confirmation Parsing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Frequently Asked Questions */}
      <section style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container" style={{ maxWidth: 840 }}>
          <div className="section-header text-center">
            <div className="badge-pill">
              <span className="dot" />
              <span>Common Questions</span>
            </div>
            <h2>Frequently Asked Questions About Staycore</h2>
            <p className="lead" style={{ margin: '0 auto' }}>
              Quick answers about our unified hotel operations software, OTA integration, and direct booking engine.
            </p>
          </div>

          <FaqAccordion faqs={HOME_FAQS} />
        </div>
      </section>

      {/* Section 7 — Closing CTA Banner */}
      <section>
        <div className="container">
          <div className="cta-banner">
            <div className="badge-pill">
              <span className="dot" />
              <span>Get Started with Staycore</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', marginBottom: 16 }}>
              See your hotel operations, all in one place.
            </h2>
            <p className="lead" style={{ margin: '0 auto 36px' }}>
              Join independent hoteliers who have taken control of their bookings, automated their OTA feeds, and boosted their profit margins.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary btn-lg">
                Book a Free Demo
              </Link>
              <Link to="/direct-hotel-booking" className="btn btn-secondary btn-lg">
                Direct Booking Engine
              </Link>
              <Link to="/features" className="btn btn-secondary btn-lg">
                Explore All Features
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
