import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe, Instagram, Linkedin, MessageSquare, ExternalLink, Calendar, CheckCircle } from 'lucide-react';
import DemoBookingWidget from '../components/DemoBookingWidget';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';
import FaqAccordion from '../components/FaqAccordion';
import {
  SEO_PAGES,
  SITE_ORIGIN,
  createBreadcrumbSchema,
  createFaqSchema,
  BASE_ORGANIZATION_SCHEMA,
  CONTACT_FAQS
} from '../data/seoData';

export default function Contact({ onToast }) {
  const breadcrumbItems = [
    { label: 'Contact & VIP Demo', path: '/contact' }
  ];

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Contact & VIP Demo', path: '/contact' }
  ]);

  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${SITE_ORIGIN}/contact/#webpage`,
    url: `${SITE_ORIGIN}/contact`,
    name: 'Contact Staycore | Request a Hotel Software Demo',
    description: 'Contact Staycore or book a live 1-on-1 hotel software demo. See real-time room availability, AI OTA parsing, and direct booking tools for your property.',
    mainEntity: BASE_ORGANIZATION_SCHEMA
  };

  const faqSchema = createFaqSchema(CONTACT_FAQS);

  const contactStructuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbSchema,
      contactPageSchema,
      BASE_ORGANIZATION_SCHEMA,
      faqSchema
    ]
  };

  return (
    <main>
      <SEO
        title={SEO_PAGES.contact.title}
        description={SEO_PAGES.contact.description}
        keywords={SEO_PAGES.contact.keywords}
        canonicalPath={SEO_PAGES.contact.path}
        ogImage={SEO_PAGES.contact.ogImage}
        structuredData={contactStructuredData}
      />

      {/* Page Hero */}
      <section className="hero-section">
        <div className="hero-bg-media">
          <img
            src="/assets/images/hotel-contact-reception-desk.webp"
            alt="Staycore hotel management software contact desk — luxury hotel reception and concierge architecture"
            fetchpriority="high"
            decoding="async"
            width="1376"
            height="768"
          />
          <div className="hero-video-overlay" />
        </div>
        <div className="container hero-content text-center" style={{ maxWidth: 880, position: 'relative', zIndex: 1 }}>
          <Breadcrumbs items={breadcrumbItems} />

          <div className="badge-pill" style={{ marginTop: 12 }}>
            <span className="dot" />
            <span>Direct Hospitality &amp; Engineering Desk</span>
          </div>
          <h1 className="hero-title">
            Contact Staycore &amp; <br /><span>Request a Live Hotel Software Demo.</span>
          </h1>
          <p className="hero-sub">
            Schedule an interactive 1-on-1 walkthrough or reach out directly to our engineering desk. We’ll show you how Staycore unifies room inventory, auto-syncs OTA emails, and captures 0% commission direct guests.
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
          <div className="section-header text-center" style={{ marginBottom: 28 }}>
            <div className="badge-pill">
              <span className="dot" />
              <span>Personalized Walkthrough</span>
            </div>
            <h2>Schedule Your Interactive VIP Walkthrough</h2>
            <p className="lead" style={{ margin: '0 auto' }}>
              Select a date and time that fits your schedule. Our team will tailor the walkthrough to your property size and operational goals.
            </p>
          </div>
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
            <h2>Official Corporate Coordinates &amp; Direct Support</h2>
            <p className="lead" style={{ margin: '0 auto' }}>
              Connect directly with our hospitality technology team via phone, WhatsApp, official email, or corporate headquarters.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {/* 1. Phone & WhatsApp */}
            <div className="card-glass" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--accent-sage-soft)', border: '1px solid var(--accent-sage-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-sage-light)', marginBottom: 16 }}>
                  <Phone size={20} />
                </div>
                <h3 style={{ color: '#fff', marginBottom: 6, fontSize: '1.2rem' }}>Direct Hotline &amp; WhatsApp Desk</h3>
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
                <h3 style={{ color: '#fff', marginBottom: 6, fontSize: '1.2rem' }}>Email Inquiries &amp; Quotations</h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginBottom: 16 }}>
                  Direct inquiries, partnership proposals, and custom quotes for properties:
                </p>
                <div style={{ fontSize: '1.1rem', color: '#fff', fontWeight: 600, wordBreak: 'break-all', marginBottom: 4 }}>
                  <a href="mailto:coabgroup@gmail.com" style={{ color: 'var(--accent-gold-light)' }}>
                    coabgroup@gmail.com
                  </a>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Response typically within 2 business hours
                </div>
              </div>

              <div style={{ marginTop: 22 }}>
                <a
                  href="mailto:coabgroup@gmail.com"
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
                <h3 style={{ color: '#fff', marginBottom: 6, fontSize: '1.2rem' }}>Registered Corporate Office</h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginBottom: 14 }}>
                  COAB Solutions Private Limited Headquarters:
                </p>
                <div style={{ fontSize: '0.92rem', color: '#fff', lineHeight: 1.6, fontWeight: 500 }}>
                  37/2256, Kollamkudi House, Kollamkudimugal, Thrikkakara, Ernakulam, Kerala 682021, India.
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
                <h3 style={{ color: '#fff', marginBottom: 6, fontSize: '1.2rem' }}>Verified Public Channels</h3>
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
                <Link
                  to="/features"
                  className="btn btn-secondary btn-sm"
                  style={{ width: '100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}
                >
                  Explore Platform Capabilities →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', padding: '60px 0' }}>
        <div className="container" style={{ maxWidth: 840 }}>
          <div className="section-header text-center" style={{ marginBottom: 36 }}>
            <div className="badge-pill">
              <span className="dot" />
              <span>Demonstration &amp; Onboarding</span>
            </div>
            <h2>Frequently Asked Questions About Demos &amp; Setup</h2>
            <p className="lead" style={{ margin: '0 auto' }}>
              Common questions about booking a live software walkthrough, system requirements, and property onboarding.
            </p>
          </div>

          <FaqAccordion faqs={CONTACT_FAQS} />
        </div>
      </section>
    </main>
  );
}
