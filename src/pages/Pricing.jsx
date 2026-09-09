import React from 'react';
import { Link } from 'react-router-dom';
import PricingCalculator from '../components/PricingCalculator';
import FaqAccordion from '../components/FaqAccordion';

export default function Pricing() {
  return (
    <main>
      {/* Page Hero */}
      <section className="hero-section" style={{ paddingBottom: 60 }}>
        <div className="container text-center" style={{ maxWidth: 900 }}>
          <div className="badge-pill">
            <span className="dot" />
            <span>Flexible & Scalable</span>
          </div>
          <h1 className="hero-title">
            Choose the setup that <br /><span>fits your hotel.</span>
          </h1>
          <p className="hero-sub">
            Start with a website, or go all-in with the full booking system. Move up anytime.
          </p>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="plans-split-grid">
            {/* Plan 1 — Website-Only */}
            <div className="plan-card">
              <div>
                <div className="badge-pill badge-gold">Plan 1</div>
                <h2 style={{ fontSize: '2.2rem', marginBottom: 4 }}>Website-Only</h2>
                <div className="plan-tagline">“A booking-ready website for your hotel.”</div>

                <div className="plan-price-callout">
                  <div className="plan-price-label">Investment Model</div>
                  <div className="plan-price-amount">Custom Pricing</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', marginTop: 4 }}>
                    Book a demo for a tailored quote
                  </div>
                </div>

                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: 24 }}>
                  <strong className="text-white">Best for:</strong> Hotels that want an online presence and direct bookings without managing a full system.
                </p>

                <h4 style={{ marginBottom: 16, fontSize: '0.95rem', color: 'var(--accent-gold-light)' }}>Includes:</h4>
                <ul className="feature-list-check" style={{ marginBottom: 36 }}>
                  <li><span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span><span>Custom-domain hotel website</span></li>
                  <li><span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span><span>SEO + AEO setup (Google & AI search)</span></li>
                  <li><span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span><span>Direct booking engine with instant payment</span></li>
                  <li><span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span><span>Promo code / discount support</span></li>
                  <li><span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span><span>Simple bookings-view portal</span></li>
                  <li><span className="check-icon" style={{ background: 'var(--accent-gold-soft)', color: 'var(--accent-gold)' }}>✓</span><span>0% Commission on direct bookings</span></li>
                </ul>
              </div>
              <Link to="/contact" className="btn btn-secondary" style={{ width: '100%' }}>
                Get Website Quote
              </Link>
            </div>

            {/* Plan 2 — Full Staycore Webapp */}
            <div className="plan-card featured">
              <div>
                <div className="badge-pill">Plan 2 • Recommended</div>
                <h2 style={{ fontSize: '2.2rem', marginBottom: 4 }}>Full Staycore Webapp</h2>
                <div className="plan-tagline">“Everything, in one dashboard.”</div>

                <div className="plan-price-callout">
                  <div className="plan-price-label">Investment Model</div>
                  <div className="plan-price-amount">Custom Pricing</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--accent-sage-light)', marginTop: 4 }}>
                    Depends on hotel size (rooms & properties)
                  </div>
                </div>

                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: 24 }}>
                  <strong className="text-white">Best for:</strong> Hotels that want complete visibility and control across every booking channel.
                </p>

                <h4 style={{ marginBottom: 16, fontSize: '0.95rem', color: 'var(--accent-sage-light)' }}>Includes everything in Website-Only, plus:</h4>
                <ul className="feature-list-check" style={{ marginBottom: 36 }}>
                  <li><span className="check-icon">✓</span><span>Real-time room & availability management across properties</span></li>
                  <li><span className="check-icon">✓</span><span>AI-powered OTA booking aggregation (Goibibo, MakeMyTrip, etc.)</span></li>
                  <li><span className="check-icon">✓</span><span>Full booking dashboard — direct, OTA, and walk-ins in one place</span></li>
                  <li><span className="check-icon">✓</span><span>Multi-property and multi-building support</span></li>
                  <li><span className="check-icon">✓</span><span>Staff & housekeeping live status updates</span></li>
                  <li><span className="check-icon">✓</span><span>Priority 24/7 dedicated operational support</span></li>
                </ul>
              </div>
              <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                Book a Demo for Quote
              </Link>
            </div>
          </div>

          {/* Pricing Note */}
          <div style={{ marginTop: 36, padding: 24, borderRadius: 14, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              📌 <strong>Pricing Note:</strong> Pricing depends on hotel size (number of rooms and properties) — we provide a tailored custom quote rather than one-size-fits-all pricing, ensuring boutique homestays and multi-property resorts only pay for what they use.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive ROI Calculator */}
      <section style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)' }}>
        <div className="container">
          <div className="section-header text-center">
            <div className="badge-pill">
              <span className="dot" />
              <span>Interactive ROI Calculator</span>
            </div>
            <h2>Estimate Your Direct Savings</h2>
            <p className="lead" style={{ margin: '0 auto' }}>
              See how much you can save every month by shifting guest bookings from 20% OTA commissions to your direct Staycore channel.
            </p>
          </div>

          <PricingCalculator />
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section>
        <div className="container">
          <div className="section-header text-center">
            <div className="badge-pill">
              <span className="dot" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2>Everything you need to know.</h2>
          </div>

          <FaqAccordion />
        </div>
      </section>

      {/* Closing CTA */}
      <section style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="cta-banner">
            <h2>Not sure which plan fits?</h2>
            <p className="lead" style={{ margin: '16px auto 36px' }}>
              Schedule a 15-minute consultation with our hotel operations specialists. We will analyze your room distribution and recommend the most profitable setup.
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
