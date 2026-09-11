import React from 'react';
import { Phone, Mail, MapPin, Globe, Instagram, Linkedin, MessageSquare, ExternalLink } from 'lucide-react';
import DemoBookingWidget from '../components/DemoBookingWidget';

export default function Contact({ onToast }) {
  return (
    <main>
      {/* Page Hero */}
      <section className="hero-section">
        <div className="hero-bg-media">
          <img
            src="/assets/images/contact-banner.png"
            alt="Staycore Contact Desk — Luxury Hotel Reception"
          />
          <div className="hero-video-overlay" />
        </div>
        <div className="container hero-content text-center" style={{ maxWidth: 880, position: 'relative', zIndex: 1 }}>
          <div className="badge-pill">
            <span className="dot" />
            <span>Direct Hospitality & Engineering Desk</span>
          </div>
          <h1 className="hero-title">
            See what one dashboard <br /><span>can do for your hotel.</span>
          </h1>
          <p className="hero-sub">
            Book an interactive 1-on-1 walkthrough or reach out directly to our team. We’ll show you how Staycore unifies your rooms, eliminates OTA inbox clutter, and captures 0% commission direct guests.
          </p>
          <div className="hero-cta-group" style={{ justifyContent: 'center' }}>
            <a href="#demo-widget" className="btn btn-primary btn-lg">
              Schedule VIP Walkthrough
            </a>
            <a href="#inquiries" className="btn btn-secondary btn-lg">
              Official Coordinates
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Demo Widget Section */}
      <section id="demo-widget" style={{ paddingTop: 30 }}>
        <div className="container">
          <DemoBookingWidget onToast={onToast} />
        </div>
      </section>

      {/* Direct Inquiries & Official Coordinates */}
      <section id="inquiries" style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)' }}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: 36 }}>
            <div className="badge-pill badge-gold">
              <span className="dot" />
              <span>Direct Channels</span>
            </div>
            <h2>Official Coordinates & Support</h2>
            <p className="lead" style={{ margin: '0 auto' }}>
              Connect directly with our hospitality technology team via phone, WhatsApp, email, or social channels.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {/* 1. Phone & WhatsApp */}
            <div className="card-glass" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--accent-sage-soft)', border: '1px solid var(--accent-sage-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-sage-light)', marginBottom: 16 }}>
                  <Phone size={20} />
                </div>
                <h4 style={{ color: '#fff', marginBottom: 6 }}>Direct Hotline & WhatsApp</h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginBottom: 16 }}>
                  Immediate assistance with hotel installations, onboarding, and system walkthroughs:
                </p>
                <div style={{ fontSize: '1.25rem', color: 'var(--accent-sage-light)', fontWeight: 700, letterSpacing: '0.02em', marginBottom: 4 }}>
                  <a href="tel:+919633277995" style={{ color: 'inherit' }}>
                    +91 96332 77995
                  </a>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Mon – Sat: 9:00 AM – 8:00 PM IST
                </div>
              </div>

              <div style={{ marginTop: 22 }}>
                <a
                  href="https://wa.me/919633277995"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ width: '100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}
                >
                  <MessageSquare size={15} /> Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* 2. Email Inquiries */}
            <div className="card-glass" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--accent-gold-soft)', border: '1px solid var(--accent-gold-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', marginBottom: 16 }}>
                  <Mail size={20} />
                </div>
                <h4 style={{ color: '#fff', marginBottom: 6 }}>Email Inquiries</h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginBottom: 16 }}>
                  Direct inquiries, partnership proposals, and custom quotes for properties:
                </p>
                <div style={{ fontSize: '1.1rem', color: '#fff', fontWeight: 600, wordBreak: 'break-all', marginBottom: 4 }}>
                  <a href="mailto:coabgroup@gmail.com
" style={{ color: 'var(--accent-gold-light)' }}>
                    coabgroup@gmail.com

                  </a>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Response typically within 2 business hours
                </div>
              </div>

              <div style={{ marginTop: 22 }}>
                <a
                  href="mailto:coabgroup@gmail.com
"
                  className="btn btn-secondary btn-sm"
                  style={{ width: '100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}
                >
                  <Mail size={15} /> Send an Email
                </a>
              </div>
            </div>

            {/* 3. Address */}
            <div className="card-glass" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-white)', marginBottom: 16 }}>
                  <MapPin size={20} />
                </div>
                <h4 style={{ color: '#fff', marginBottom: 6 }}>Registered Office</h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginBottom: 14 }}>
                  COAB Engineering & Hospitality Technology Headquarters:
                </p>
                <div style={{ fontSize: '0.92rem', color: '#fff', lineHeight: 1.6, fontWeight: 500 }}>
                  37/2256, Kollamkudi House, Kollamkudimugal, Thrikkakara, Ernakulam, Kerala 682021.
                </div>
              </div>

              <div style={{ marginTop: 22 }}>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=37%2F2256%2C+Kollamkudi+House%2C+Kollamkudimugal%2C+Thrikkakara%2C+Ernakulam%2C+Kerala+682021"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ width: '100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}
                >
                  <MapPin size={15} /> Open in Google Maps
                </a>
              </div>
            </div>

            {/* 4. Public Links & Socials */}
            <div className="card-glass" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--accent-sage-soft)', border: '1px solid var(--accent-sage-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-sage-light)', marginBottom: 16 }}>
                  <Globe size={20} />
                </div>
                <h4 style={{ color: '#fff', marginBottom: 6 }}>COAB Public Channels</h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginBottom: 14 }}>
                  Explore our ecosystem, product announcements, and corporate updates:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <a
                    href="https://coab.club/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--accent-gold-light)', fontSize: '0.9rem', fontWeight: 500 }}
                  >
                    <Globe size={16} /> coab.club <ExternalLink size={12} style={{ opacity: 0.6 }} />
                  </a>
                  <a
                    href="https://www.instagram.com/coab.club/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--text-primary)', fontSize: '0.9rem' }}
                  >
                    <Instagram size={16} color="#E1306C" /> instagram.com/coab.club <ExternalLink size={12} style={{ opacity: 0.6 }} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/coabclub/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--text-primary)', fontSize: '0.9rem' }}
                  >
                    <Linkedin size={16} color="#0A66C2" /> linkedin.com/company/coabclub <ExternalLink size={12} style={{ opacity: 0.6 }} />
                  </a>
                </div>
              </div>

              <div style={{ marginTop: 22 }}>
                <a
                  href="https://coab.club/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ width: '100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}
                >
                  Visit COAB Website <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
