import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, TrendingUp, CreditCard, Tag, Layout } from 'lucide-react';

export default function WebsiteOnly() {
  return (
    <main>
      {/* Page Hero */}
      <section className="hero-section">
        <div className="hero-bg-media">
          <img
            src="/assets/images/website-only-banner.png"
            alt="The Aurelia Hotel & Resort — Website-Only Plan banner showcase"
          />
          <div className="hero-video-overlay" />
        </div>
        <div className="container hero-content">
          <div className="badge-pill badge-gold">
            <span className="dot" />
            <span>Lightweight & High-Conversion</span>
          </div>
          <h1 className="hero-title">
            Just need a website? <br /><span>We’ve got you.</span>
          </h1>
          <p className="hero-sub">
            A professional, search-ready website for your hotel — with a simple portal to track your bookings. No need to adopt the full Staycore system.
          </p>
          <div className="hero-cta-group">
            <Link to="/contact" className="btn btn-gold btn-lg">
              Get Your Hotel Website
            </Link>
            <a href="#whats-included" className="btn btn-secondary btn-lg">
              See What's Included
            </a>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)' }}>
        <div className="container">
          <div className="section-split">
            <div>
              <div className="badge-pill">
                <span className="dot" />
                <span>Ideal Candidate</span>
              </div>
              <h2>Who this is for</h2>
              <p className="lead" style={{ marginBottom: 24 }}>
                For hotels that aren’t ready for a full booking-management system yet, but want:
              </p>
              <ul className="feature-list-check">
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong className="text-white">Bespoke Hotel Identity:</strong>{' '}
                    <span>An elegant custom-domain presence that outshines generic template directories.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong className="text-white">0% Commission Bookings:</strong>{' '}
                    <span>Keep 100% of guest payments instead of surrendering 18–25% to third-party portals.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong className="text-white">Simple Bookings View:</strong>{' '}
                    <span>Track guest details, stay dates, and payment totals in a clean 30-second interface.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="card-glass">
              <h4 style={{ color: '#fff', marginBottom: 16 }}>The Lightweight Portal Advantage</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: 20 }}>
                Zero training required. A focused dashboard showing incoming direct reservations at a glance.
              </p>
              <div style={{ background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 12, padding: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: 12, marginBottom: 12 }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Upcoming Direct Guest</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-sage-light)' }}>Confirmed #ST-9021</span>
                </div>
                <div style={{ fontSize: '1.1rem', color: '#fff', fontWeight: 600 }}>Sophia Laurenson</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: 4 }}>Deluxe Ocean Villa • Nov 02 - Nov 05 (3 Nights)</div>
                <div style={{ marginTop: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--accent-gold)', fontSize: '0.95rem', fontWeight: 600 }}>$780.00 Paid</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--status-ready)', background: 'rgba(82,183,136,0.15)', padding: '3px 8px', borderRadius: 9999 }}>
                    0% Commission
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section id="whats-included">
        <div className="container">
          <div className="section-header text-center">
            <div className="badge-pill badge-gold">
              <span className="dot" />
              <span>Comprehensive Package</span>
            </div>
            <h2>What’s Included</h2>
            <p className="lead" style={{ margin: '0 auto' }}>
              Everything required to turn search traffic and AI queries into direct paying guests.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
            {/* Item 1 */}
            <div className="card-glass">
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--accent-sage-soft)', border: '1px solid var(--accent-sage-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-sage-light)', marginBottom: 20 }}>
                <Globe size={20} />
              </div>
              <h4 style={{ marginBottom: 10 }}>Custom-Domain Website</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Bespoke high-speed site showcasing your rooms, suites, and amenities on your private brand domain.
              </p>
            </div>

            {/* Item 2 */}
            <div className="card-glass">
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--accent-gold-soft)', border: '1px solid var(--accent-gold-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', marginBottom: 20 }}>
                <TrendingUp size={20} />
              </div>
              <h4 style={{ marginBottom: 10 }}>SEO & AI Search (AEO)</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Schema optimization ensuring top recommendations on Google, ChatGPT, and Perplexity searches.
              </p>
            </div>

            {/* Item 3 */}
            <div className="card-glass">
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--accent-sage-soft)', border: '1px solid var(--accent-sage-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-sage-light)', marginBottom: 20 }}>
                <CreditCard size={20} />
              </div>
              <h4 style={{ marginBottom: 10 }}>Direct Booking Engine</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Mobile-optimized checkout accepting cards and instant UPI payments with 0% platform commission.
              </p>
            </div>

            {/* Item 4 */}
            <div className="card-glass">
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--accent-gold-soft)', border: '1px solid var(--accent-gold-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', marginBottom: 20 }}>
                <Tag size={20} />
              </div>
              <h4 style={{ marginBottom: 10 }}>Promo & Coupon Engine</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Create custom discount codes and seasonal perks to incentivize guests to book directly with you.
              </p>
            </div>

            {/* Item 5 */}
            <div className="card-glass">
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--accent-sage-soft)', border: '1px solid var(--accent-sage-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-sage-light)', marginBottom: 20 }}>
                <Layout size={20} />
              </div>
              <h4 style={{ marginBottom: 10 }}>Lightweight Bookings View</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                A focused portal to monitor upcoming check-ins, guest payments, and room selections effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}>
        <div className="container">
          <div className="section-header text-center">
            <div className="badge-pill">
              <span className="dot" />
              <span>Simple 4-Step Process</span>
            </div>
            <h2>How It Works</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            <div className="card-glass">
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 800, color: 'var(--accent-sage-light)', marginBottom: 12 }}>01</div>
              <h4 style={{ marginBottom: 8 }}>Build & Launch</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                We design and launch your custom website on your private domain with your exact branding.
              </p>
            </div>

            <div className="card-glass">
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 800, color: 'var(--accent-gold)', marginBottom: 12 }}>02</div>
              <h4 style={{ marginBottom: 8 }}>Direct Discovery</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Guests find you via Google and AI assistants, booking directly with zero middleman markup.
              </p>
            </div>

            <div className="card-glass">
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 800, color: 'var(--accent-sage-light)', marginBottom: 12 }}>03</div>
              <h4 style={{ marginBottom: 8 }}>Track Bookings</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Log into your clean portal anytime to see upcoming guests, check-in dates, and payment status.
              </p>
            </div>

            <div className="card-glass">
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 800, color: 'var(--accent-gold)', marginBottom: 12 }}>04</div>
              <h4 style={{ marginBottom: 8 }}>Seamless Upgrade</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Upgrade to the full Staycore webapp whenever you're ready for automated multi-channel aggregation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section>
        <div className="container">
          <div className="cta-banner">
            <div className="badge-pill badge-gold">
              <span className="dot" />
              <span>Commission-Free Growth</span>
            </div>
            <h2>Get a website that actually brings you bookings.</h2>
            <p className="lead" style={{ margin: '16px auto 36px' }}>
              Stop giving away 20% of your earnings. Give your hotel a beautiful front door that converts visitors into confirmed guests.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-gold btn-lg">
                Get Your Hotel Website
              </Link>
              <Link to="/pricing" className="btn btn-secondary btn-lg">
                Compare with Full Webapp
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
