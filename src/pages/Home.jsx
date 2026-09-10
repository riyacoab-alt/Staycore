import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Volume2, VolumeX } from 'lucide-react';
import HeroDashboardPreview from '../components/HeroDashboardPreview';
import OtaComparison from '../components/OtaComparison';
import DirectBookingPreview from '../components/DirectBookingPreview';

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

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-media">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
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
            See every room, every booking, every OTA — in one dashboard. Eliminate double bookings, auto-sync Goibibo and MakeMyTrip confirmations, and capture 0% commission direct reservations.
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
                Real-time view of which rooms are free, occupied, or need housekeeping — across all your properties, one screen.
              </p>
              <ul className="feature-list-check">
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong className="text-white">Live visual map:</strong>{' '}
                    <span>Every room status updates the moment a booking, check-in, or check-out occurs.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong className="text-white">Zero double-booking:</strong>{' '}
                    <span>One single source of truth across walk-ins, phone reservations, and all OTAs.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong className="text-white">Mobile housekeeping sync:</strong>{' '}
                    <span>Cleaning and front-desk teams communicate status changes in one tap without intercom chaos.</span>
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
                alt="Luxury hotel villa suite"
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
              <h2>Stop checking your inbox for bookings.</h2>
              <p className="lead">
                Goibibo, MakeMyTrip, and other OTAs send bookings by email — scattered, easy to miss. Staycore’s AI pulls them all into one unified booking feed, automatically.
              </p>
              <ul className="feature-list-check">
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong className="text-white">Automated email ingestion:</strong>{' '}
                    <span>No staff needed to manually copy-paste guest names, dates, or payment details.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong className="text-white">Smart conflict resolution:</strong>{' '}
                    <span>Instantly holds inventory so two OTAs never sell the same bed at the same time.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong className="text-white">Cross-channel guest profiles:</strong>{' '}
                    <span>Identify returning guests regardless of which platform they booked through.</span>
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
                A custom-domain website for your hotel, built for SEO & AEO (so people — and AI search — find you). Guests book directly, you offer promo codes for direct bookings, and every booking flows straight into your dashboard.
              </p>
              <ul className="feature-list-check">
                <li>
                  <span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span>
                  <div>
                    <strong className="text-white">Custom domain, your brand:</strong>{' '}
                    <span>Your luxury identity, high-res photography, and direct checkout on your own domain.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span>
                  <div>
                    <strong className="text-white">Built-in SEO + AEO:</strong>{' '}
                    <span>Structured schema for Google Hotel Search and AI assistants (Perplexity, ChatGPT, Gemini).</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span>
                  <div>
                    <strong className="text-white">Direct booking engine:</strong>{' '}
                    <span>Instant card and UPI payments without paying 18–25% commissions to middlemen.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span>
                  <div>
                    <strong className="text-white">Promo codes & loyalty coupons:</strong>{' '}
                    <span>Incentivize return guests with exclusive direct-booking discounts.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span>
                  <div>
                    <strong className="text-white">Seamless Staycore sync:</strong>{' '}
                    <span>All direct bookings land in your central calendar instantly alongside OTAs.</span>
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
              Whether you want a comprehensive operating system or simply want to escape OTA commissions with your own website, Staycore adapts to you.
            </p>
          </div>

          <div className="plans-split-grid">
            {/* Card 1: Full Staycore Webapp */}
            <div className="plan-card featured">
              <div>
                <div className="badge-pill">Complete Operating System</div>
                <h3 style={{ color: '#fff', marginBottom: 6 }}>Full Staycore Webapp</h3>
                <div className="plan-tagline">“Everything, in one dashboard.”</div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: 24 }}>
                  The complete hotel cockpit. Includes live room management, AI-powered OTA email aggregator, multi-property support, staff housekeeping workflows, and your custom branded website.
                </p>

                <div className="plan-price-callout">
                  <div className="plan-price-label">Hotel Sizing</div>
                  <div className="plan-price-amount">Custom Quote</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 4 }}>
                    Based on your room keys & properties. Zero direct commission.
                  </div>
                </div>

                <ul className="feature-list-check" style={{ marginBottom: 36 }}>
                  <li><span className="check-icon">✓</span><span>Real-time room & availability management across properties</span></li>
                  <li><span className="check-icon">✓</span><span>AI-powered OTA booking aggregation (Goibibo, MakeMyTrip, etc.)</span></li>
                  <li><span className="check-icon">✓</span><span>Unified feed: direct, OTA, and walk-in bookings in one place</span></li>
                  <li><span className="check-icon">✓</span><span>Staff & housekeeping live status updates</span></li>
                  <li><span className="check-icon">✓</span><span>Includes branded custom-domain hotel website</span></li>
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
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: 24 }}>
                  Just want a website that turns searchers into paying guests? We design, launch, and host your site with SEO/AEO and direct booking engine, giving you a lightweight portal to view bookings — no need to adopt the full webapp.
                </p>

                <div className="plan-price-callout">
                  <div className="plan-price-label">Fast Setup</div>
                  <div className="plan-price-amount">Flat Custom Rate</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 4 }}>
                    Upgrade to the full Staycore webapp anytime as you scale.
                  </div>
                </div>

                <ul className="feature-list-check" style={{ marginBottom: 36 }}>
                  <li><span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span><span>Custom-domain website tailored to your hotel's aesthetic</span></li>
                  <li><span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span><span>SEO + AEO optimization for Google and AI assistants</span></li>
                  <li><span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span><span>Direct booking engine with instant payment processing</span></li>
                  <li><span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span><span>Promo codes and coupon generator for direct guests</span></li>
                  <li><span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span><span>Lightweight portal to track incoming direct reservations</span></li>
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
            <h2>Built for the reality of hotel operations.</h2>
            <p className="lead" style={{ margin: '0 auto' }}>
              No generic templates, no painful enterprise complexity, and no commissions taken from your hard-earned guest revenue.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            <div className="card-glass">
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--accent-gold)', marginBottom: 12 }}>01</div>
              <h4 style={{ marginBottom: 10 }}>One dashboard instead of five tabs</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Stop toggling between Goibibo Extranet, MakeMyTrip Partner, email inbox, and a paper register. Everything flows into one screen.
              </p>
            </div>

            <div className="card-glass">
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--accent-sage-light)', marginBottom: 12 }}>02</div>
              <h4 style={{ marginBottom: 10 }}>AI-powered, not manual data entry</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Confirmation emails are ingested and translated to bookings in seconds. Free your front-desk staff to focus on hospitality, not typing.
              </p>
            </div>

            <div className="card-glass">
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--accent-gold)', marginBottom: 12 }}>03</div>
              <h4 style={{ marginBottom: 10 }}>You own your direct-booking channel</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                You own your guest emails, phone numbers, and booking history. Build lasting relationships and run repeat-guest promotions freely.
              </p>
            </div>

            <div className="card-glass">
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--accent-sage-light)', marginBottom: 12 }}>04</div>
              <h4 style={{ marginBottom: 10 }}>Built for hotels of every size</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                From independent boutique properties to heritage homestays and multi-property resorts, Staycore scales without bloat.
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
              <Link to="/pricing" className="btn btn-secondary btn-lg">
                View Plans & Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
