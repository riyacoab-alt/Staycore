import React from 'react';
import DemoBookingWidget from '../components/DemoBookingWidget';

export default function Contact({ onToast }) {
  return (
    <main>
      {/* Page Hero */}
      <section className="hero-section" style={{ paddingBottom: 50 }}>
        <div className="container text-center" style={{ maxWidth: 860 }}>
          <div className="badge-pill">
            <span className="dot" />
            <span>Personalized Walkthrough</span>
          </div>
          <h1 className="hero-title">
            See what one dashboard <br /><span>can do for your hotel.</span>
          </h1>
          <p className="hero-sub">
            Book an interactive 1-on-1 demo with our hospitality tech team. We’ll show you how Staycore unifies your rooms, stops OTA inbox clutter, and captures commission-free direct guests.
          </p>
        </div>
      </section>

      {/* Interactive Demo Widget Section */}
      <section style={{ paddingTop: 10 }}>
        <div className="container">
          <DemoBookingWidget onToast={onToast} />
        </div>
      </section>

      {/* Direct Inquiries & Contact Channels */}
      <section id="inquiries" style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            <div className="card-glass">
              <h4 style={{ color: '#fff', marginBottom: 8 }}>Direct Hotlines</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: 16 }}>
                For immediate assistance with ongoing hotel installations or inquiries:
              </p>
              <div style={{ fontSize: '1.05rem', color: 'var(--accent-sage-light)', fontWeight: 500 }}>
                +91 (0) 80 4920 3100
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: 4 }}>
                Mon – Sat: 9:00 AM – 7:00 PM IST
              </div>
            </div>

            <div className="card-glass">
              <h4 style={{ color: '#fff', marginBottom: 8 }}>Email Inquiries</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: 16 }}>
                Direct your questions to our dedicated teams:
              </p>
              <div style={{ fontSize: '0.95rem', color: '#fff' }}>
                hello@staycore.club
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--accent-gold)', marginTop: 4 }}>
                partnerships@coab.club
              </div>
            </div>

            <div className="card-glass">
              <h4 style={{ color: '#fff', marginBottom: 8 }}>COAB Engineering HQ</h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: 16 }}>
                Built with precision by the creators of SkoolPay and SkoolWay.
              </p>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Bangalore, India • Operations across South & Southeast Asia
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
