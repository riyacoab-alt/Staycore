import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, TrendingUp, CreditCard, Tag, Layout, ExternalLink } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import FaqAccordion from '../components/FaqAccordion';
import {
  SEO_PAGES,
  SITE_ORIGIN,
  WEBSITE_ONLY_FAQS,
  createBreadcrumbSchema,
  createFaqSchema
} from '../data/seoData';

export default function WebsiteOnly() {
  const breadcrumbItems = [
    { label: 'Hotel Website Builder', path: '/website-only' }
  ];

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Hotel Website Builder', path: '/website-only' }
  ]);
  const faqSchema = createFaqSchema(WEBSITE_ONLY_FAQS);

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Staycore Hotel Website Builder & Direct Booking Engine',
    description: 'Bespoke custom-domain hotel website with 0% commission direct booking engine and a lightweight reservation management portal.',
    brand: {
      '@type': 'Brand',
      name: 'Staycore'
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      priceValidUntil: '2027-12-31',
      availability: 'https://schema.org/InStock',
      url: `${SITE_ORIGIN}/website-only`,
      description: 'Tailored custom quote based on property requirements and direct booking needs.'
    }
  };

  const websiteOnlyStructuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbSchema,
      productSchema,
      faqSchema
    ]
  };

  return (
    <main>
      <SEO
        title={SEO_PAGES.websiteOnly.title}
        description={SEO_PAGES.websiteOnly.description}
        keywords={SEO_PAGES.websiteOnly.keywords}
        canonicalPath={SEO_PAGES.websiteOnly.path}
        ogImage={SEO_PAGES.websiteOnly.ogImage}
        structuredData={websiteOnlyStructuredData}
      />

      {/* Page Hero */}
      <section className="hero-section">
        <div className="hero-bg-media">
          <img
            src="/assets/images/hotel-website-builder-banner.webp"
            alt="Hotel website builder showcase displaying The Aurelia Hotel on custom domain with direct booking engine"
            fetchpriority="high"
            decoding="async"
            width="1672"
            height="941"
          />
          <div className="hero-video-overlay" />
        </div>
        <div className="container hero-content">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="badge-pill badge-gold" style={{ marginTop: 12 }}>
            <span className="dot" />
            <span>Lightweight &amp; High-Conversion</span>
          </div>
          <h1 className="hero-title">
            Hotel Website Builder with <br /><span>Direct Booking Engine.</span>
          </h1>
          <p className="hero-sub">
            A bespoke, search-ready hotel website on your custom domain with a focused portal to track incoming guests. Eliminate 20% OTA commissions without adopting an enterprise PMS until you're ready.
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
                <span>Targeted Solution</span>
              </div>
              <h2>Who Benefits from Our Independent Hotel Website Solution</h2>
              <div className="zero-click-box" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, padding: '14px 18px', margin: '14px 0 20px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--text-white)' }}>What is a hotel website builder?</strong> A hotel website builder is software engineered specifically for hospitality properties to showcase rooms, publish rates, and accept direct guest bookings without OTA commission fees.{' '}
                <Link to="/resources/what-should-a-hotel-website-include" style={{ color: 'var(--accent-gold)', textDecoration: 'underline' }}>Read hotel website checklist →</Link>
              </div>
              <p className="lead" style={{ marginBottom: 24 }}>
                Designed specifically for independent hoteliers, boutique retreats, and villa owners who want direct revenue ownership:
              </p>
              <ul className="feature-list-check">
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <h3 style={{ fontSize: '1rem', color: '#fff', margin: '0 0 2px' }}>Bespoke Hotel Identity</h3>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>An elegant custom-domain presence that outshines generic third-party directory listings.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <h3 style={{ fontSize: '1rem', color: '#fff', margin: '0 0 2px' }}>0% Commission Direct Bookings</h3>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Keep 100% of guest room revenue instead of surrendering 18–25% to OTA intermediaries.</span>
                  </div>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <div>
                    <h3 style={{ fontSize: '1rem', color: '#fff', margin: '0 0 2px' }}>Focused Reservation Management Portal</h3>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Track guest names, stay dates, and payment totals in a clean 30-second interface with zero learning curve.</span>
                  </div>
                </li>
              </ul>
              <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link to="/direct-hotel-booking" className="btn btn-secondary">
                  Explore Direct Booking Engine →
                </Link>
                <Link to="/features" className="btn btn-secondary" style={{ opacity: 0.85 }}>
                  Explore Full Operating System
                </Link>
              </div>
            </div>

            <div className="card-glass">
              <h4 style={{ color: '#fff', marginBottom: 16 }}>The Lightweight Portal Advantage</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: 20 }}>
                Zero training required. A focused reservation dashboard showing incoming direct reservations at a glance.
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
            <h2>Everything Included in the Website-Only Plan</h2>
            <p className="lead" style={{ margin: '0 auto' }}>
              Everything required to turn search traffic, Google Hotel queries, and AI assistants into confirmed paying guests.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
            {/* Item 1 */}
            <div className="card-glass">
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--accent-sage-soft)', border: '1px solid var(--accent-sage-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-sage-light)', marginBottom: 20 }}>
                <Globe size={20} />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: 10 }}>Custom-Domain Hotel Website</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Bespoke high-speed site showcasing your rooms, suites, and property amenities on your private brand domain.
              </p>
            </div>

            {/* Item 2 */}
            <div className="card-glass">
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--accent-gold-soft)', border: '1px solid var(--accent-gold-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', marginBottom: 20 }}>
                <TrendingUp size={20} />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: 10 }}>SEO &amp; AI Search Discovery (AEO)</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Integrated{' '}
                <a
                  href="https://developers.google.com/search/docs/appearance/structured-data/hotel"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--accent-gold)', textDecoration: 'underline', display: 'inline-flex', alignItems: 'center', gap: 3 }}
                >
                  structured schema <ExternalLink size={12} />
                </a>{' '}
                ensures prominent recommendations on Google Hotel Search, ChatGPT, and Perplexity.
              </p>
            </div>

            {/* Item 3 */}
            <div className="card-glass">
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--accent-sage-soft)', border: '1px solid var(--accent-sage-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-sage-light)', marginBottom: 20 }}>
                <CreditCard size={20} />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: 10 }}>Direct Hotel Booking Engine</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Mobile-optimized checkout accepting cards, net banking, and instant UPI payments with 0% platform commission.
              </p>
            </div>

            {/* Item 4 */}
            <div className="card-glass">
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--accent-gold-soft)', border: '1px solid var(--accent-gold-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', marginBottom: 20 }}>
                <Tag size={20} />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: 10 }}>Promo Codes &amp; Seasonal Discounts Engine</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Create custom discount codes and VIP seasonal perks to incentivize direct guests to book on your website.
              </p>
            </div>

            {/* Item 5 */}
            <div className="card-glass">
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--accent-sage-soft)', border: '1px solid var(--accent-sage-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-sage-light)', marginBottom: 20 }}>
                <Layout size={20} />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: 10 }}>Focused Reservation Management Portal</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                A streamlined portal to monitor upcoming check-ins, guest payments, and room selections without complexity.
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
            <h2>How Your Direct Booking Website Works</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            <div className="card-glass">
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 800, color: 'var(--accent-sage-light)', marginBottom: 12 }}>01</div>
              <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: 8 }}>Bespoke Build &amp; Custom Domain Launch</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                We design and launch your custom website on your private domain with your exact branding and photography.
              </p>
            </div>

            <div className="card-glass">
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 800, color: 'var(--accent-gold)', marginBottom: 12 }}>02</div>
              <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: 8 }}>Search &amp; AI-Driven Direct Discovery</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Guests discover your property via Google and AI assistants, booking directly with zero middleman markup.
              </p>
            </div>

            <div className="card-glass">
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 800, color: 'var(--accent-sage-light)', marginBottom: 12 }}>03</div>
              <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: 8 }}>Track Check-Ins &amp; Guest Payments</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Log into your clean portal anytime to see upcoming guests, check-in dates, and real-time payment confirmations.
              </p>
            </div>

            <div className="card-glass">
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', fontWeight: 800, color: 'var(--accent-gold)', marginBottom: 12 }}>04</div>
              <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: 8 }}>Seamless Upgrade to Full Webapp Anytime</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Upgrade to the full Staycore webapp whenever you're ready for multi-channel room matrix and OTA aggregation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container" style={{ maxWidth: 840 }}>
          <div className="section-header text-center">
            <div className="badge-pill badge-gold">
              <span className="dot" />
              <span>Direct Booking Clarity</span>
            </div>
            <h2>Direct Booking Website FAQs</h2>
            <p className="lead" style={{ margin: '0 auto' }}>
              Learn more about setting up your custom-domain hotel website, booking engine gateway, and commission-free guest payments.
            </p>
          </div>

          <FaqAccordion faqs={WEBSITE_ONLY_FAQS} />
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
            <h2>Get a hotel website that actually drives direct bookings.</h2>
            <p className="lead" style={{ margin: '16px auto 36px' }}>
              Stop giving away 20% of your earnings. Give your hotel a beautiful front door that converts visitors into confirmed direct guests.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-gold btn-lg">
                Get Your Hotel Website
              </Link>
              <Link to="/direct-hotel-booking" className="btn btn-secondary btn-lg">
                Direct Booking Engine Details
              </Link>
              <Link to="/features" className="btn btn-secondary btn-lg">
                Explore Full Webapp Features
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
