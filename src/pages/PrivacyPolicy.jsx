import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, Eye, Database, FileText, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import {
  SEO_PAGES,
  SITE_ORIGIN,
  createBreadcrumbSchema,
  BASE_ORGANIZATION_SCHEMA
} from '../data/seoData';

export default function PrivacyPolicy() {
  const breadcrumbItems = [
    { label: 'Privacy Policy', path: '/privacy-policy' }
  ];

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Privacy Policy', path: '/privacy-policy' }
  ]);

  const privacyStructuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbSchema,
      {
        '@type': 'WebPage',
        '@id': `${SITE_ORIGIN}/privacy-policy/#webpage`,
        url: `${SITE_ORIGIN}/privacy-policy`,
        name: 'Privacy Policy | Staycore Hospitality Technology',
        description: 'Staycore’s commitment to hotelier data sovereignty, guest privacy, 0% commission payment handling, and zero-monetization data policies.',
        publisher: {
          '@id': `${SITE_ORIGIN}/#organization`
        }
      }
    ]
  };

  return (
    <main>
      <SEO
        title="Privacy Policy | Staycore Hotel Management Software"
        description="Learn about Staycore's strict data ownership policies, OTA email parsing privacy, merchant payment handling, and guest record security."
        keywords={SEO_PAGES.privacyPolicy.keywords}
        canonicalPath="/privacy-policy"
        structuredData={privacyStructuredData}
      />

      {/* Page Header */}
      <section className="hero-section" style={{ paddingBottom: 40 }}>
        <div className="container" style={{ maxWidth: 860, position: 'relative', zIndex: 1 }}>
          <Breadcrumbs items={breadcrumbItems} />

          <div className="badge-pill" style={{ marginTop: 12 }}>
            <span className="dot" />
            <span>Data Transparency &amp; Sovereignty</span>
          </div>

          <h1 className="hero-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', textAlign: 'left', lineHeight: 1.25, marginBottom: 16 }}>
            Staycore Privacy Policy
          </h1>

          <p className="hero-sub" style={{ textAlign: 'left', margin: '0 0 20px', maxWidth: '100%' }}>
            Effective &amp; Last Updated: September 2026. This policy outlines how Staycore, operated by COAB Solutions Private Limited, protects hotelier operational data and guest reservation privacy.
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section style={{ paddingTop: 0, paddingBottom: 80 }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="card-glass" style={{ padding: '36px 32px', display: 'flex', flexDirection: 'column', gap: 32 }}>

            {/* Core Principle Summary */}
            <div style={{ padding: '18px 22px', borderRadius: 12, background: 'rgba(94,129,114,0.12)', border: '1px solid var(--accent-sage-border)' }}>
              <h2 style={{ fontSize: '1.1rem', color: '#fff', margin: '0 0 8px', display: 'flex', alignItems: 'center', gap: 8 }}>
                <ShieldCheck size={18} color="var(--accent-sage-light)" /> Our Fundamental Commitment
              </h2>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-primary)', lineHeight: 1.7, margin: 0 }}>
                Staycore is built on the principle that hoteliers own 100% of their operational data. We do not sell, rent, monetize, or broker hotel guest lists, booking volumes, or pricing strategies to third parties, advertisers, or competing aggregators.
              </p>
            </div>

            {/* Section 1: Who Operates Staycore */}
            <div>
              <h2 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: 12 }}>1. Operating Entity</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7 }}>
                Staycore is engineered and provided by <strong>COAB Solutions Private Limited</strong>, registered at 37/2256, Kollamkudi House, Kollamkudimugal, Thrikkakara, Ernakulam, Kerala 682021, India. For privacy inquiries, reach our data desk at <a href="mailto:coabgroup@gmail.com" style={{ color: 'var(--accent-gold-light)', textDecoration: 'underline' }}>coabgroup@gmail.com</a>.
              </p>
            </div>

            {/* Section 2: Operational Data Ingested */}
            <div>
              <h2 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: 12 }}>2. Operational Data We Process</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: 12 }}>
                To operate our property management software and website builder, Staycore processes only the data necessary to coordinate reservations and room readiness:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                  <CheckCircle2 size={16} color="var(--accent-sage-light)" style={{ flexShrink: 0, marginTop: 3 }} />
                  <span><strong>Property Information:</strong> Room counts, room categories, amenity lists, rate cards, and floor configurations.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                  <CheckCircle2 size={16} color="var(--accent-sage-light)" style={{ flexShrink: 0, marginTop: 3 }} />
                  <span><strong>Reservation Records:</strong> Guest names, check-in/out dates, contact numbers, email addresses, and total payment amounts.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                  <CheckCircle2 size={16} color="var(--accent-sage-light)" style={{ flexShrink: 0, marginTop: 3 }} />
                  <span><strong>Staff Operational Actions:</strong> Room readiness toggles (Ready, Occupied, Cleaning, Maintenance) and front-desk check-in logs.</span>
                </li>
              </ul>
            </div>

            {/* Section 3: Automated OTA Email Parsing */}
            <div>
              <h2 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: 12 }}>3. OTA Email Parsing Privacy</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7 }}>
                When hoteliers configure automated AI confirmation parsing for OTAs (such as MakeMyTrip, Goibibo, Booking.com, Agoda, and Expedia), incoming confirmation emails are processed solely to extract structured booking parameters (guest name, dates, room category, and voucher total). This information is recorded exclusively into the hotel’s master room matrix. Content from unrelated correspondence is discarded and never stored or retained.
              </p>
            </div>

            {/* Section 4: Direct Booking Payments */}
            <div>
              <h2 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: 12 }}>4. Direct Booking &amp; Payment Processing</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7 }}>
                On custom-domain hotel websites, direct guest checkouts process credit cards, debit cards, and instant UPI transactions through certified PCI-DSS compliant payment gateways (such as Stripe or Razorpay) linked directly to the hotelier’s bank account. Staycore does not store full credit card numbers or banking credentials, and charges 0% platform commission on guest payments.
              </p>
            </div>

            {/* Section 5: Cookies & Analytics */}
            <div>
              <h2 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: 12 }}>5. Cookies and Web Storage</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7 }}>
                Staycore utilizes essential browser storage strictly for session management, administrative login tokens, and user interface preferences (such as audio/video toggles). We do not deploy invasive cross-site tracking pixels or behavioral advertising trackers.
              </p>
            </div>

            {/* Section 6: Contact & Rights */}
            <div>
              <h2 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: 12 }}>6. Data Sovereignty &amp; Contact</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7 }}>
                Hoteliers may request a complete export or deletion of their property catalog and reservation archives at any time with zero operational lock-in. For data privacy inquiries or access requests, contact our Data Protection Officer at <a href="mailto:coabgroup@gmail.com" style={{ color: 'var(--accent-gold-light)', textDecoration: 'underline' }}>coabgroup@gmail.com</a> or call <a href="tel:+919633277995" style={{ color: 'var(--accent-sage-light)' }}>+91 96332 77995</a>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
