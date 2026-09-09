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
                No more calling the front desk or flipping through a register to know what’s free. Staycore gives you a live, visual map of every room across every property you run — free, occupied, checking out today, or under housekeeping — updated in real time the moment a booking, check-in, or check-out happens.
              </p>

              <h4 style={{ marginTop: 28, marginBottom: 14, color: 'var(--accent-gold-light)' }}>How it works:</h4>
              <ol style={{ color: 'var(--text-secondary)', paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 10, fontSize: '0.95rem' }}>
                <li><strong>Automatic Status Updates:</strong> Every booking — direct, OTA, or walk-in — updates the room status automatically.</li>
                <li><strong>Live Grid Dashboard:</strong> Your dashboard shows a live grid: room number, status, guest name, and check-out date.</li>
                <li><strong>1-Tap Staff Workflows:</strong> Staff mark rooms as “ready,” “cleaning,” or “maintenance” in one single tap.</li>
              </ol>

              <h4 style={{ marginTop: 28, marginBottom: 14, color: 'var(--accent-sage-light)' }}>Key benefits:</h4>
              <ul className="feature-list-check">
                <li><span className="check-icon">✓</span><span>Real-time room status across single or multiple properties</span></li>
                <li><span className="check-icon">✓</span><span>No double-booking — one source of truth for availability</span></li>
                <li><span className="check-icon">✓</span><span>Housekeeping and front-desk teams see the same live data</span></li>
                <li><span className="check-icon">✓</span><span>Works on desktop and mobile for on-the-go staff</span></li>
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
              <h2>Every OTA booking, in one feed — not your inbox.</h2>
              <p className="lead" style={{ marginBottom: 24 }}>
                Hotels listed on Goibibo, MakeMyTrip, and other OTAs today get bookings scattered across separate emails and separate partner dashboards — nothing pulls them together. Staycore’s AI reads and organizes these bookings automatically, so instead of checking five inboxes, you check one feed.
              </p>

              <h4 style={{ marginTop: 28, marginBottom: 14, color: 'var(--accent-gold-light)' }}>How it works:</h4>
              <ol style={{ color: 'var(--text-secondary)', paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 10, fontSize: '0.95rem' }}>
                <li><strong>One-Time Connect:</strong> Connect your OTA accounts/email once during initial setup.</li>
                <li><strong>Instant AI Detection:</strong> Staycore’s AI detects and parses booking confirmations as they arrive.</li>
                <li><strong>Unified Dashboard Feed:</strong> Every booking appears in your unified dashboard — guest name, dates, room type, OTA source — alongside your direct bookings.</li>
              </ol>

              <h4 style={{ marginTop: 28, marginBottom: 14, color: 'var(--accent-sage-light)' }}>Key benefits:</h4>
              <ul className="feature-list-check">
                <li><span className="check-icon">✓</span><span>One unified booking feed across all OTAs (Goibibo, MakeMyTrip, Booking.com, Agoda)</span></li>
                <li><span className="check-icon">✓</span><span>No manual copy-pasting from emails into a register</span></li>
                <li><span className="check-icon">✓</span><span>Fewer missed or late-noticed bookings</span></li>
                <li><span className="check-icon">✓</span><span>Full visibility of occupancy across every channel, not just your own</span></li>
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
                🔒 <strong>Enterprise Security:</strong> Bank-grade encryption for all guest data. Fully compliant with hospitality data privacy guidelines.
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
              <h2>Stop paying commission on every guest. Bring them to your own front door.</h2>
              <p className="lead" style={{ marginBottom: 24 }}>
                When you come on board with Staycore, we build your hotel a website on your own custom domain — designed to showcase your property, optimized for both traditional SEO and AEO (so AI search assistants can find and recommend you too). Guests can browse and book directly on your site, and every booking flows straight into your Staycore dashboard alongside your OTA and walk-in bookings.
              </p>

              <h4 style={{ marginTop: 28, marginBottom: 14, color: 'var(--accent-gold-light)' }}>How it works:</h4>
              <ol style={{ color: 'var(--text-secondary)', paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 10, fontSize: '0.95rem' }}>
                <li><strong>Custom Design & Launch:</strong> We design and launch your hotel’s website on your custom domain.</li>
                <li><strong>Search & AI Assistant Optimized:</strong> The site is built for search visibility (SEO) and AI-assistant visibility (AEO).</li>
                <li><strong>Direct Guest Incentives:</strong> Guests book directly through your site — you can offer them promo codes and discounts to encourage direct booking over OTAs.</li>
                <li><strong>Unified Real-Time Flow:</strong> Every direct booking appears instantly in your unified dashboard.</li>
              </ol>

              <h4 style={{ marginTop: 28, marginBottom: 14, color: 'var(--accent-sage-light)' }}>Key benefits:</h4>
              <ul className="feature-list-check">
                <li><span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span><span>Your own branded, custom-domain website</span></li>
                <li><span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span><span>Built-in SEO + AEO so guests (and AI assistants) can find you</span></li>
                <li><span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span><span>Direct booking engine — reduce dependency on OTA commissions</span></li>
                <li><span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span><span>Promo codes/coupons to reward and encourage direct bookings</span></li>
                <li><span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span><span>Everything syncs to the same dashboard as your other channels</span></li>
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
