import React from 'react';
import { Link } from 'react-router-dom';

export default function Features() {
  return (
    <main>
      {/* Page Hero */}
      <section className="hero-section" style={{ paddingBottom: 60 }}>
        <div className="container text-center" style={{ maxWidth: 920 }}>
          <div className="badge-pill">
            <span className="dot" />
            <span>Platform Capabilities</span>
          </div>
          <h1 className="hero-title">
            One system. Every part of <br /><span>your hotel’s bookings.</span>
          </h1>
          <p className="hero-sub">
            From the front desk to the OTAs to your own website — Staycore brings it all into one place. Eliminate manual friction, synchronize room availability, and empower your hospitality team.
          </p>
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
              <h2>Know your rooms, at a glance.</h2>
              <p className="lead" style={{ marginBottom: 24 }}>
                A live visual map of every room across all your properties — free, occupied, or cleaning — updated in real time.
              </p>

              <ul className="feature-list-check">
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong className="text-white">Live Status Matrix:</strong>{' '}
                    <span>Instant room status updates the second a guest checks in, checks out, or extends.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong className="text-white">Zero Double Bookings:</strong>{' '}
                    <span>One single source of truth across walk-ins, phone reservations, and all OTAs.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong className="text-white">Mobile Housekeeping:</strong>{' '}
                    <span>1-tap cleaning and readiness updates for front desk and housekeeping teams.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong className="text-white">Multi-Property View:</strong>{' '}
                    <span>Switch between different wings, floors, and independent resort villas seamlessly.</span>
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
                src="/assets/images/hero-suite.jpg"
                alt="Hotel room mockup"
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
              <h2>Every OTA booking in one live feed.</h2>
              <p className="lead" style={{ marginBottom: 24 }}>
                Staycore’s AI automatically reads and organizes incoming OTA emails so you never have to check multiple extranet portals.
              </p>

              <ul className="feature-list-check">
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong className="text-white">Instant AI Email Parsing:</strong>{' '}
                    <span>Extracts guest names, stay dates, and payment totals from OTA emails in seconds.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong className="text-white">Auto-Hold Inventory:</strong>{' '}
                    <span>Locks availability instantly so two platforms never sell the same room simultaneously.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong className="text-white">Unified Chronological Feed:</strong>{' '}
                    <span>All bookings appear side-by-side whether from MakeMyTrip, Goibibo, or walk-ins.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong className="text-white">Repeat Guest History:</strong>{' '}
                    <span>Recognize returning guests regardless of which platform they booked through.</span>
                  </div>
                </li>
              </ul>
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
              <h2>Own your direct bookings and save 20%.</h2>
              <p className="lead" style={{ marginBottom: 24 }}>
                A custom-domain hotel website built for high conversion, search visibility, and commission-free guest checkout.
              </p>

              <ul className="feature-list-check">
                <li>
                  <span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span>
                  <div>
                    <strong className="text-white">Custom Domain Website:</strong>{' '}
                    <span>Bespoke design showcasing your suites, amenities, and location aesthetic.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span>
                  <div>
                    <strong className="text-white">Google & AI Search (AEO):</strong>{' '}
                    <span>Structured schema ensures visibility on Google, ChatGPT, and Perplexity.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span>
                  <div>
                    <strong className="text-white">Direct Booking Engine:</strong>{' '}
                    <span>Mobile-first checkout supporting instant card and UPI payments with zero commissions.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span>
                  <div>
                    <strong className="text-white">Promo Codes & Coupons:</strong>{' '}
                    <span>Reward returning guests with private discount codes that sync to your calendar.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="card-glass">
              <img
                src="/assets/images/hotel-lounge.jpg"
                alt="Luxury hotel cocktail lounge"
                style={{ borderRadius: 14, width: '100%', height: 280, objectFit: 'cover', marginBottom: 20 }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                  <h4 style={{ color: '#fff', marginBottom: 4 }}>Direct Booking Impact</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Avg. savings for 30-room hotel: <strong>$1,800+/month</strong></p>
                </div>
                <Link to="/website-only" className="btn btn-gold btn-sm">
                  Learn About Website Plan →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section>
        <div className="container">
          <div className="cta-banner">
            <h2>Ready to experience the unified Staycore system?</h2>
            <p className="lead" style={{ margin: '16px auto 36px' }}>
              See how the room matrix, AI OTA aggregator, and direct booking engine work together seamlessly.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary btn-lg">
                Book a Free Live Demo
              </Link>
              <Link to="/pricing" className="btn btn-secondary btn-lg">
                Compare Pricing Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
