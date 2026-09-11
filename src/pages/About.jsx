import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main>
      {/* Page Hero */}
      <section className="hero-section">
        <div className="hero-bg-media">
          <img src="/assets/images/hotel-villa.jpg" alt="Atmospheric hotel villa architecture" />
        </div>
        <div className="container hero-content">
          <div className="badge-pill">
            <span className="dot" />
            <span>Our Origin & Purpose</span>
          </div>
          <h1 className="hero-title">
            Hotel bookings shouldn’t <br /><span>be this scattered.</span>
          </h1>
          <p className="hero-sub">
            Staycore exists because hotels deserve one place to see everything — not five.
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
              <h2>The Problem</h2>
              <p className="lead" style={{ marginBottom: 20 }}>
                Most hotels run their bookings across disconnected channels — paper registers, scattered emails, and multiple OTA extranets.
              </p>
              <ul className="feature-list-check" style={{ marginTop: 16 }}>
                <li>
                  <span className="check-icon" style={{ background: 'rgba(231,111,81,0.15)', color: '#f0896f' }}>✕</span>
                  <div>
                    <strong className="text-white">Fragmented Channels:</strong>{' '}
                    <span>Separate inboxes lead to missed confirmations and double-booking chaos.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon" style={{ background: 'rgba(231,111,81,0.15)', color: '#f0896f' }}>✕</span>
                  <div>
                    <strong className="text-white">Heavy OTA Commissions:</strong>{' '}
                    <span>Hotels surrender 18% to 25% of their gross revenue to third-party middlemen.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon" style={{ background: 'rgba(231,111,81,0.15)', color: '#f0896f' }}>✕</span>
                  <div>
                    <strong className="text-white">Zero Direct Control:</strong>{' '}
                    <span>Owners lack real-time visibility into overall occupancy and direct guest relationships.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="card-glass" style={{ borderColor: 'var(--accent-sage-border)' }}>
              <div className="badge-pill">
                <span className="dot" />
                <span>Our Solution</span>
              </div>
              <h3 style={{ color: '#fff', marginBottom: 14 }}>Built to give hotels back control of their bookings.</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: 20 }}>
                Staycore unifies your rooms, OTA channels, and custom hotel website into one screen. You gain real-time visibility and a direct booking engine that eliminates middleman commissions.
              </p>
              <div style={{ padding: '14px 18px', borderRadius: 12, background: 'rgba(94,129,114,0.1)', border: '1px solid var(--accent-sage-border)', color: 'var(--accent-sage-light)', fontSize: '0.88rem' }}>
                ✨ By owning your direct guest relationships and live inventory, your hotel operates with complete independence.
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
              <h2>From the creators behind SkoolPay and SkoolWay.</h2>
              <p className="lead" style={{ marginBottom: 16 }}>
                Staycore is engineered by COAB — a product-first software studio focused on solving high-friction operational workflows.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                We spend time on-property with front-desk staff, housekeeping teams, and owners to craft software that actually saves hours instead of demanding more screen time.
              </p>
            </div>

            <div className="card-glass">
              <h4 style={{ color: '#fff', marginBottom: 16 }}>The COAB Product Ecosystem</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ padding: 14, borderRadius: 10, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontWeight: 600, color: '#fff', marginBottom: 2 }}>SkoolPay</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    Cashless institution payment infrastructure eliminating queues and leakage.
                  </div>
                </div>
                <div style={{ padding: 14, borderRadius: 10, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontWeight: 600, color: '#fff', marginBottom: 2 }}>SkoolWay</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    Real-time vehicle telematics, GPS safety, and automated attendance cards.
                  </div>
                </div>
                <div style={{ padding: 14, borderRadius: 10, background: 'var(--accent-sage-soft)', border: '1px solid var(--accent-sage-border)' }}>
                  <div style={{ fontWeight: 600, color: 'var(--accent-sage-light)', marginBottom: 2 }}>Staycore Hospitality</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                    Unified hotel operations dashboard and commission-free direct booking engine.
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
            <h2>How We Work</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            <div className="card-glass">
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: 'var(--accent-sage-light)', marginBottom: 12 }}>01</div>
              <h4 style={{ marginBottom: 8 }}>Product-First</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Every button and status toggle is engineered to save seconds during peak check-in and check-out rushes.
              </p>
            </div>

            <div className="card-glass">
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: 'var(--accent-gold)', marginBottom: 12 }}>02</div>
              <h4 style={{ marginBottom: 8 }}>Zero Lock-In</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Start with a website, upgrade to the full platform anytime. You always retain 100% ownership of your data.
              </p>
            </div>

            <div className="card-glass">
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: 'var(--accent-sage-light)', marginBottom: 12 }}>03</div>
              <h4 style={{ marginBottom: 8 }}>Real Operations</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Built for the fast-paced reality of managing walk-ins, phone bookings, OTAs, and housekeeping together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section>
        <div className="container">
          <div className="cta-banner">
            <h2>See what one dashboard can do for your hotel.</h2>
            <p className="lead" style={{ margin: '16px auto 36px' }}>
              Book an interactive session with our engineering and hospitality team to see Staycore in action.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Book a Free Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
