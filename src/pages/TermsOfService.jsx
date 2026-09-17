import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import {
  SITE_ORIGIN,
  createBreadcrumbSchema
} from '../data/seoData';

export default function TermsOfService() {
  const breadcrumbItems = [
    { label: 'Terms of Service', path: '/terms-of-service' }
  ];

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Terms of Service', path: '/terms-of-service' }
  ]);

  const termsStructuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbSchema,
      {
        '@type': 'WebPage',
        '@id': `${SITE_ORIGIN}/terms-of-service/#webpage`,
        url: `${SITE_ORIGIN}/terms-of-service`,
        name: 'Terms of Service | Staycore Hotel Management Platform',
        description: 'Review the subscription terms, service policies, zero-commission guarantee, and operational guidelines governing Staycore software.',
        publisher: {
          '@id': `${SITE_ORIGIN}/#organization`
        }
      }
    ]
  };

  return (
    <main>
      <SEO
        title="Terms of Service | Staycore Hotel Management Software"
        description="Review Staycore's operational terms, 0% direct booking commission guarantee, subscription policies, and service level commitments."
        keywords={SEO_PAGES.termsOfService.keywords}
        canonicalPath="/terms-of-service"
        structuredData={termsStructuredData}
      />

      {/* Page Header */}
      <section className="hero-section" style={{ paddingBottom: 40 }}>
        <div className="container" style={{ maxWidth: 860, position: 'relative', zIndex: 1 }}>
          <Breadcrumbs items={breadcrumbItems} />

          <div className="badge-pill badge-gold" style={{ marginTop: 12 }}>
            <span className="dot" />
            <span>Operational Agreement</span>
          </div>

          <h1 className="hero-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', textAlign: 'left', lineHeight: 1.25, marginBottom: 16 }}>
            Staycore Terms of Service
          </h1>

          <p className="hero-sub" style={{ textAlign: 'left', margin: '0 0 20px', maxWidth: '100%' }}>
            Effective &amp; Last Updated: September 2026. These terms govern the use of Staycore hotel management software, OTA aggregation, and direct booking website services.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section style={{ paddingTop: 0, paddingBottom: 80 }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="card-glass" style={{ padding: '36px 32px', display: 'flex', flexDirection: 'column', gap: 32 }}>

            {/* Zero Commission Guarantee Highlight */}
            <div style={{ padding: '18px 22px', borderRadius: 12, background: 'rgba(199,173,133,0.1)', border: '1px solid var(--accent-gold-border)' }}>
              <h2 style={{ fontSize: '1.1rem', color: '#fff', margin: '0 0 8px', display: 'flex', alignItems: 'center', gap: 8 }}>
                <Scale size={18} color="var(--accent-gold)" /> Zero-Commission Direct Booking Guarantee
              </h2>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-primary)', lineHeight: 1.7, margin: 0 }}>
                Staycore guarantees 0% platform commission on all direct hotel reservations processed through our custom-domain website builder. Hoteliers retain 100% of room revenue, with merchant gateway processing fees paid directly to linked merchant providers (e.g. Stripe, Razorpay).
              </p>
            </div>

            {/* Section 1: Parties */}
            <div>
              <h2 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: 12 }}>1. Agreement &amp; Operating Parties</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7 }}>
                This agreement is between the subscribing property owner or operator ("Hotelier", "Customer") and <strong>COAB Solutions Private Limited</strong> ("Staycore", "Company"), registered at 37/2256, Kollamkudi House, Kollamkudimugal, Thrikkakara, Ernakulam, Kerala 682021, India.
              </p>
            </div>

            {/* Section 2: Scope of Services */}
            <div>
              <h2 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: 12 }}>2. Scope of Services</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: 12 }}>
                Staycore delivers cloud-hosted hospitality technology solutions, including:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                  <CheckCircle2 size={16} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: 3 }} />
                  <span><strong>Room Availability Matrix:</strong> Visual multi-property room inventory and readiness tracking interface.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                  <CheckCircle2 size={16} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: 3 }} />
                  <span><strong>AI OTA Confirmation Parser:</strong> Automated extraction of reservation details from MakeMyTrip, Goibibo, Booking.com, Agoda, and Expedia emails.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                  <CheckCircle2 size={16} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: 3 }} />
                  <span><strong>Custom-Domain Hotel Website:</strong> Search-optimized hotel showcase on the hotel’s private domain.</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                  <CheckCircle2 size={16} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: 3 }} />
                  <span><strong>Direct Booking Engine:</strong> Mobile checkout supporting cards and instant UPI payments with 0% platform commission.</span>
                </li>
              </ul>
            </div>

            {/* Section 3: Property Onboarding & Subscriptions */}
            <div>
              <h2 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: 12 }}>3. Onboarding &amp; Subscriptions</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7 }}>
                Staycore operates on transparent, room-count-based operational plans. Subscription fees are agreed upon prior to onboarding based on key counts and requested modules. Property setup typically takes 24 to 48 hours, including room cataloging and domain configuration.
              </p>
            </div>

            {/* Section 4: Data Ownership & Security */}
            <div>
              <h2 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: 12 }}>4. Data Sovereignty</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7 }}>
                The Hotelier retains 100% intellectual property and commercial ownership of all guest profiles, reservation histories, and room pricing models. Staycore retains all intellectual property rights in its proprietary software platform, UI designs, and algorithms.
              </p>
            </div>

            {/* Section 5: Governing Law */}
            <div>
              <h2 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: 12 }}>5. Governing Law &amp; Jurisdiction</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7 }}>
                These terms are governed by the laws of India. Any disputes arising in connection with Staycore services shall be subject to the exclusive jurisdiction of the competent courts in Ernakulam, Kerala, India.
              </p>
            </div>

            {/* Section 6: Inquiries */}
            <div>
              <h2 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: 12 }}>6. Contact Information</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7 }}>
                For operational or legal questions regarding these terms, reach our legal desk at <a href="mailto:coabgroup@gmail.com" style={{ color: 'var(--accent-gold-light)', textDecoration: 'underline' }}>coabgroup@gmail.com</a> or phone <a href="tel:+919633277995" style={{ color: 'var(--accent-sage-light)' }}>+91 96332 77995</a>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
