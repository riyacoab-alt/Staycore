import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Volume2, VolumeX } from 'lucide-react';
import HeroDashboardPreview from '../components/HeroDashboardPreview';
import OtaComparison from '../components/OtaComparison';
import DirectBookingPreview from '../components/DirectBookingPreview';
import SEO from '../components/SEO';
import { SEO_PAGES, BASE_ORGANIZATION_SCHEMA, SOFTWARE_APPLICATION_SCHEMA, WEBSITE_SCHEMA } from '../data/seoData';

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
      WEBSITE_SCHEMA
    ]
  };

  return (
    <main>
      <SEO
        title={SEO_PAGES.home.title}
        description={SEO_PAGES.home.description}
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
            poster="/assets/images/hero-suite.jpg"
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
            Run your hotel <br /><span>from one screen.</span>
          </h1>

          <p className="hero-sub">
            One unified dashboard for all your rooms, bookings, and OTAs. Eliminate double bookings, auto-sync OTA emails, and capture 0% commission direct reservations.
          </p>

          <div className="hero-cta-group">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Book a Demo
            </Link>
            <a href="#features-preview" className="btn btn-secondary btn-lg">
              See How It Works
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
                <span>Room & Availability Management</span>
              </div>
              <h2>Know your rooms, instantly.</h2>
              <p className="lead">
                Real-time view of which rooms are free, occupied, or cleaning — across all your properties in one place.
              </p>
              <ul className="feature-list-check">
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong className="text-white">Live Visual Matrix:</strong>{' '}
                    <span>Instant room status updates on check-ins, check-outs, and cleaning.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong className="text-white">Zero Double Bookings:</strong>{' '}
                    <span>Synchronized availability across walk-ins, phone calls, and all OTAs.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong className="text-white">Mobile Housekeeping:</strong>{' '}
                    <span>Front-desk and cleaning teams stay aligned with one-tap status toggles.</span>
                  </div>
                </li>
              </ul>
              <div style={{ marginTop: 32 }}>
                <Link to="/features" className="btn btn-secondary">
                  Explore Room Matrix →
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
                src="/assets/images/hotel-villa.jpg"
                alt="Luxury hotel mountain penthouse suite villa showcase in Staycore room availability matrix"
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
              <h2>Every OTA booking in one feed.</h2>
              <p className="lead">
                Stop checking separate emails and extranet tabs. Staycore’s AI captures and organizes your OTA confirmations automatically.
              </p>
              <ul className="feature-list-check">
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong className="text-white">Instant AI Extraction:</strong>{' '}
                    <span>Parses guest names, stay dates, and payment totals from OTA emails in seconds.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong className="text-white">Smart Conflict Guard:</strong>{' '}
                    <span>Auto-holds inventory so multiple channels never book the same room twice.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong className="text-white">Unified Guest Profiles:</strong>{' '}
                    <span>Track guest history across MakeMyTrip, Goibibo, and direct reservations.</span>
                  </div>
                </li>
              </ul>
              <div style={{ marginTop: 32 }}>
                <Link to="/features" className="btn btn-secondary">
                  See AI Aggregator Details →
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
              <h2>Your hotel deserves its own front door.</h2>
              <p className="lead">
                A custom-domain website optimized for Google and AI search, with direct checkout that eliminates middleman commissions.
              </p>
              <ul className="feature-list-check">
                <li>
                  <span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span>
                  <div>
                    <strong className="text-white">Custom Domain & Brand:</strong>{' '}
                    <span>Showcase suites, amenities, and room rates with high-speed direct checkout.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span>
                  <div>
                    <strong className="text-white">0% Commission Engine:</strong>{' '}
                    <span>Keep 100% of guest revenue with instant card and UPI payment processing.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span>
                  <div>
                    <strong className="text-white">Google & AI Search Ready:</strong>{' '}
                    <span>Structured schema ensures visibility on Google Hotel Search, ChatGPT, and Perplexity.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span>
                  <div>
                    <strong className="text-white">Promo Codes & Auto-Sync:</strong>{' '}
                    <span>Incentivize return guests while direct reservations flow straight into your dashboard.</span>
                  </div>
                </li>
              </ul>
              <div style={{ marginTop: 32 }}>
                <Link to="/website-only" className="btn btn-gold">
                  Explore Website Solutions →
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
            <h2>Two Ways to Work With Us</h2>
            <p className="lead" style={{ margin: '0 auto' }}>
              Choose a complete operating system or start with a commission-free website. Upgrade anytime.
            </p>
          </div>

          <div className="plans-split-grid">
            {/* Card 1: Full Staycore Webapp */}
            <div className="plan-card featured">
              <div>
                <div className="badge-pill">Complete Operating System</div>
                <h3 style={{ color: '#fff', marginBottom: 6 }}>Full Staycore Webapp</h3>
                <div className="plan-tagline">“Everything, in one dashboard.”</div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: 24 }}>
                  The complete hotel command center with live room matrix, AI OTA ingestion, and multi-property management.
                </p>

                <ul className="feature-list-check" style={{ marginBottom: 32 }}>
                  <li><span className="check-icon">✓</span><span>Real-time multi-property room matrix</span></li>
                  <li><span className="check-icon">✓</span><span>AI automated OTA confirmation parsing</span></li>
                  <li><span className="check-icon">✓</span><span>Unified calendar for direct, OTA & walk-in guests</span></li>
                  <li><span className="check-icon">✓</span><span>Includes custom branded hotel website</span></li>
                </ul>
              </div>
              <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                Book a Free Demo
              </Link>
            </div>

            {/* Card 2: Website-Only Plan */}
            <div className="plan-card">
              <div>
                <div className="badge-pill badge-gold">Lightweight Entry</div>
                <h3 style={{ color: '#fff', marginBottom: 6 }}>Website-Only Plan</h3>
                <div className="plan-tagline">“A booking-ready website for your hotel.”</div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: 24 }}>
                  A bespoke hotel website with direct booking engine and a lightweight portal to view reservations.
                </p>

                <ul className="feature-list-check" style={{ marginBottom: 32 }}>
                  <li><span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span><span>Bespoke custom-domain hotel website</span></li>
                  <li><span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span><span>Direct booking engine with 0% commission</span></li>
                  <li><span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span><span>SEO & AI search visibility (ChatGPT & Google)</span></li>
                  <li><span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span><span>Lightweight portal to track incoming guests</span></li>
                </ul>
              </div>
              <Link to="/website-only" className="btn btn-secondary" style={{ width: '100%' }}>
                Explore Website-Only Plan
              </Link>
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
            <h2>Built for real hotel operations.</h2>
            <p className="lead" style={{ margin: '0 auto' }}>
              No generic templates or enterprise clutter — just clear control over your rooms and guest revenue.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            <div className="card-glass">
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-gold)', marginBottom: 12 }}>01</div>
              <h4 style={{ marginBottom: 8 }}>One Unified Screen</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Replace five open extranet tabs and registers with a single live operational dashboard.
              </p>
            </div>

            <div className="card-glass">
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-sage-light)', marginBottom: 12 }}>02</div>
              <h4 style={{ marginBottom: 8 }}>AI Confirmation Parsing</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Incoming booking emails are parsed and added to your calendar in seconds without manual typing.
              </p>
            </div>

            <div className="card-glass">
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-gold)', marginBottom: 12 }}>03</div>
              <h4 style={{ marginBottom: 8 }}>Direct Revenue Ownership</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Keep 100% of direct bookings and build lasting guest relationships without OTA cuts.
              </p>
            </div>

            <div className="card-glass">
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent-sage-light)', marginBottom: 12 }}>04</div>
              <h4 style={{ marginBottom: 8 }}>Scales With Your Property</h4>
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

      {/* Section 6 — CTA Banner */}
      <section>
        <div className="container">
          <div className="cta-banner">
            <div className="badge-pill">
              <span className="dot" />
              <span>Get Started with Staycore</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', marginBottom: 16 }}>
              See your hotel, all in one place.
            </h2>
            <p className="lead" style={{ margin: '0 auto 36px' }}>
              Join independent hoteliers who have taken control of their bookings, automated their OTA feeds, and boosted their profit margins.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary btn-lg">
                Book a Free Demo
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
