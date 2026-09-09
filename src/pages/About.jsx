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
                Most small and mid-sized hotels run their bookings across multiple disconnected channels — a register for walk-ins, emails for OTA bookings from platforms like Goibibo and MakeMyTrip, and little to no direct booking presence of their own.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.8 }}>
                This fragmentation causes missed bookings, double-allocations, zero visibility into true room occupancy, and a crushing financial dependence on high-commission OTA platforms that swallow 18% to 25% of gross revenue.
              </p>
            </div>

            <div className="card-glass" style={{ borderColor: 'var(--accent-sage-border)' }}>
              <div className="badge-pill">
                <span className="dot" />
                <span>Our North Star</span>
              </div>
              <h3 style={{ color: '#fff', marginBottom: 16 }}>Built to give hotels back control of their bookings.</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.8, marginBottom: 24 }}>
                Staycore brings every booking channel — your rooms, your OTA listings, and your own website — into one system. Hotels get visibility they’ve never had, and a direct booking channel that reduces reliance on commission-heavy OTAs.
              </p>
              <div style={{ padding: '16px 20px', borderRadius: 12, background: 'rgba(94,129,114,0.1)', border: '1px solid var(--accent-sage-border)', color: 'var(--accent-sage-light)', fontSize: '0.9rem' }}>
                ✨ By putting hoteliers in control of their guest relationships and inventory, we help independent properties thrive autonomously.
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
              <h2>From the team behind SkoolPay and SkoolWay.</h2>
              <p className="lead" style={{ marginBottom: 20 }}>
                Staycore is built by COAB — a product-first software company that also builds <strong>SkoolPay</strong> (cashless school fee payments) and <strong>SkoolWay</strong> (GPS/RFID school bus tracking).
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.8 }}>
                Staycore applies the exact same approach: solve one real, specific operational problem well, rather than building a generic do-everything tool. We spend time on property with front-desk staff, housekeeping teams, and owners to craft software that actually saves time instead of demanding it.
              </p>
            </div>

            <div className="card-glass">
              <h4 style={{ color: '#fff', marginBottom: 20 }}>The COAB Software Philosophy</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ padding: 16, borderRadius: 10, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontWeight: 600, color: '#fff', marginBottom: 4 }}>SkoolPay</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Eliminating cash leakage & queues for thousands of educational institutions.
                  </div>
                </div>
                <div style={{ padding: 16, borderRadius: 10, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontWeight: 600, color: '#fff', marginBottom: 4 }}>SkoolWay</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    Real-time vehicle telematics, GPS safety, and automated attendance cards.
                  </div>
                </div>
                <div style={{ padding: 16, borderRadius: 10, background: 'var(--accent-sage-soft)', border: '1px solid var(--accent-sage-border)' }}>
                  <div style={{ fontWeight: 600, color: 'var(--accent-sage-light)', marginBottom: 4 }}>Staycore Hospitality</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    The unified operating dashboard and commission-free front door for modern hotels.
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
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--accent-sage-light)', marginBottom: 12 }}>01</div>
              <h4 style={{ marginBottom: 10 }}>Product-first</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                We build tools people actually use daily, not just software for software’s sake. Every button, interaction, and status toggle exists to save seconds during peak check-in rushes.
              </p>
            </div>

            <div className="card-glass">
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--accent-gold)', marginBottom: 12 }}>02</div>
              <h4 style={{ marginBottom: 10 }}>No lock-in pressure</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                Start with a website, move to the full system whenever you’re ready. You always retain complete ownership of your hotel data, domains, and guest records.
              </p>
            </div>

            <div className="card-glass">
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--accent-sage-light)', marginBottom: 12 }}>03</div>
              <h4 style={{ marginBottom: 10 }}>Built for real hotel operations</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                Not generic hospitality software templates or bloatware. Staycore is purpose-built for the fast-paced reality of managing walk-ins, phone calls, OTAs, and room cleanings simultaneously.
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
