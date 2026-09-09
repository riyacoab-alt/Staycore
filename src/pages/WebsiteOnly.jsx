import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, TrendingUp, CreditCard, Tag, Layout } from 'lucide-react';

export default function WebsiteOnly() {
  return (
    <main>
      {/* Page Hero */}
      <section className="hero-section">
        <div className="hero-bg-media">
          <img src="/assets/images/hotel-lounge.jpg" alt="Luxury boutique hotel ambiance" />
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
                    <strong className="text-white">A professional online presence:</strong>{' '}
                    <span>A bespoke, elegant website that elevates your brand and outshines generic template directories.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong className="text-white">The ability to take direct bookings:</strong>{' '}
                    <span>Stop paying 18–25% to third-party portals for every returning guest or word-of-mouth referral.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <strong className="text-white">A simple way to see those bookings:</strong>{' '}
                    <span>A streamlined, clutter-free portal to view dates, guests, and payments without managing a full PMS dashboard.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="card-glass">
              <h4 style={{ color: '#fff', marginBottom: 16 }}>The Lightweight Portal Advantage</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: 20 }}>
                Unlike complex legacy enterprise software that requires weeks of staff training, the Website-Only Portal takes 30 seconds to learn.
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
              Everything required to turn internet searches and AI queries into direct paying guests.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
            {/* Item 1 */}
            <div className="card-glass">
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--accent-sage-soft)', border: '1px solid var(--accent-sage-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-sage-light)', marginBottom: 20 }}>
                <Globe size={20} />
              </div>
              <h4 style={{ marginBottom: 12 }}>Custom-domain website</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Built around your hotel’s brand, photos, room suites, amenities, and location. Hosted on ultra-fast edge infrastructure with SSL security.
              </p>
            </div>

            {/* Item 2 */}
            <div className="card-glass">
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--accent-gold-soft)', border: '1px solid var(--accent-gold-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', marginBottom: 20 }}>
                <TrendingUp size={20} />
              </div>
              <h4 style={{ marginBottom: 12 }}>SEO + AEO optimization</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                So your hotel shows up in traditional Google searches and AI-assistant answers (ChatGPT, Perplexity, Gemini) when travellers ask for recommendations.
              </p>
            </div>

            {/* Item 3 */}
            <div className="card-glass">
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--accent-sage-soft)', border: '1px solid var(--accent-sage-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-sage-light)', marginBottom: 20 }}>
                <CreditCard size={20} />
              </div>
              <h4 style={{ marginBottom: 12 }}>Direct booking engine</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Guests can check room availability and book directly on your site with mobile-optimized checkout and multiple payment gateways.
              </p>
            </div>

            {/* Item 4 */}
            <div className="card-glass">
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--accent-gold-soft)', border: '1px solid var(--accent-gold-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', marginBottom: 20 }}>
                <Tag size={20} />
              </div>
              <h4 style={{ marginBottom: 12 }}>Promo codes / discount codes</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Reward guests who book direct instead of through an OTA. Generate weekend perks, corporate discount codes, or repeat-guest coupons easily.
              </p>
            </div>

            {/* Item 5 */}
            <div className="card-glass">
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--accent-sage-soft)', border: '1px solid var(--accent-sage-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-sage-light)', marginBottom: 20 }}>
                <Layout size={20} />
              </div>
              <h4 style={{ marginBottom: 12 }}>Lightweight bookings portal</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                A simple, clean login where you can see who’s booked, when, and for how long (without the full Staycore dashboard’s complexity).
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
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--accent-sage-light)', marginBottom: 12 }}>01</div>
              <h4 style={{ marginBottom: 10 }}>Build & Launch</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                We build and launch your custom hotel website on your private domain with your exact branding.
              </p>
            </div>

            <div className="card-glass">
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--accent-gold)', marginBottom: 12 }}>02</div>
              <h4 style={{ marginBottom: 10 }}>Direct Discovery</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Guests find you via search engines and AI assistants and book directly without paying middleman markups.
              </p>
            </div>

            <div className="card-glass">
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--accent-sage-light)', marginBottom: 12 }}>03</div>
              <h4 style={{ marginBottom: 10 }}>Track Bookings</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                You log into your simple portal anytime to see upcoming guests, check-in dates, and payment status.
              </p>
            </div>

            <div className="card-glass">
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', color: 'var(--accent-gold)', marginBottom: 12 }}>04</div>
              <h4 style={{ marginBottom: 10 }}>Seamless Upgrade</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Upgrade to the full Staycore webapp anytime you’re ready for OTA aggregation and full room management.
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
