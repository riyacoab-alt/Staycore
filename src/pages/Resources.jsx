import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, ArrowRight, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { GUIDES } from '../data/guidesData';
import {
  SEO_PAGES,
  createBreadcrumbSchema
} from '../data/seoData';

const CATEGORIES = ['All Topics', 'Hotel Management', 'OTA Management', 'Direct Bookings', 'Hotel Websites', 'Hotel Technology'];

export default function Resources() {
  const [selectedCategory, setSelectedCategory] = useState('All Topics');

  const breadcrumbItems = [
    { label: 'Resources & Guides', path: '/resources' }
  ];

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Resources & Guides', path: '/resources' }
  ]);

  const filteredGuides = selectedCategory === 'All Topics'
    ? GUIDES
    : GUIDES.filter(g => g.category === selectedCategory);

  const resourcesStructuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbSchema,
      {
        '@type': 'CollectionPage',
        '@id': `${SITE_ORIGIN}/resources#collection`,
        url: `${SITE_ORIGIN}/resources`,
        name: 'Staycore Hotel Management Knowledge Hub',
        description: 'Comprehensive guides on hotel management software, OTA booking centralization, and commission-free direct hotel websites.',
        publisher: {
          '@id': `${SITE_ORIGIN}/#organization`
        },
        hasPart: GUIDES.map(g => ({
          '@type': 'Article',
          headline: g.title,
          url: `${SITE_ORIGIN}/resources/${g.slug}`,
          description: g.metaDescription
        }))
      }
    ]
  };

  return (
    <main>
      <SEO
        title={SEO_PAGES.resources.title}
        description={SEO_PAGES.resources.description}
        keywords={SEO_PAGES.resources.keywords}
        canonicalPath={SEO_PAGES.resources.path}
        ogImage={SEO_PAGES.resources.ogImage}
        structuredData={resourcesStructuredData}
      />

      {/* Page Hero */}
      <section className="hero-section" style={{ paddingBottom: 40 }}>
        <div className="hero-bg-media">
          <picture>
            <source srcSet="/assets/images/hotel-resources-knowledge-banner.webp" type="image/webp" />
            <img
              src="/assets/images/ChatGPT Image Sep 17, 2026, 09_11_48 PM.png"
              alt="Hotelier workstation with laptop displaying direct booking website"
              fetchpriority="high"
              decoding="async"
              width="1984"
              height="793"
            />
          </picture>
          <div className="hero-video-overlay" />
        </div>
        <div className="container hero-content text-center" style={{ maxWidth: 900, position: 'relative', zIndex: 1 }}>
          <Breadcrumbs items={breadcrumbItems} />

          <div className="badge-pill" style={{ marginTop: 12 }}>
            <span className="dot" />
            <span>Hospitality Technology Knowledge Hub</span>
          </div>

          <h1 className="hero-title">
            Hotel Management &amp; Direct <br /><span>Booking Knowledge Base.</span>
          </h1>

          <p className="hero-sub" style={{ margin: '0 auto 32px' }}>
            Practical operational guides, channel management blueprints, and direct booking financial strategies written for hotel owners and general managers.
          </p>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap', marginTop: 16 }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '8px 18px',
                  borderRadius: 9999,
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: selectedCategory === cat ? '1px solid var(--accent-sage-light)' : '1px solid rgba(255,255,255,0.08)',
                  background: selectedCategory === cat ? 'var(--accent-sage-soft)' : 'rgba(15,20,26,0.6)',
                  color: selectedCategory === cat ? '#fff' : 'var(--text-secondary)',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: 32 }}>
            <h2>Educational Guides &amp; Hotel Industry Insights</h2>
            <p className="lead">
              Clear, practical explanations of hotel technology, booking centralization, and direct revenue strategies.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 28 }}>
            {filteredGuides.map(guide => (
              <article key={guide.slug} className="card-glass" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 28 }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                    <span className="badge-pill" style={{ margin: 0, fontSize: '0.74rem' }}>
                      {guide.category}
                    </span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      <Clock size={13} /> {guide.readTime}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: 12, lineHeight: 1.4 }}>
                    <Link to={`/resources/${guide.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {guide.title}
                    </Link>
                  </h3>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: 18 }}>
                    {guide.metaDescription}
                  </p>

                  <div style={{ padding: '12px 14px', borderRadius: 8, background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', fontSize: '0.8rem', color: 'var(--accent-gold-light)', marginBottom: 20 }}>
                    💡 <strong>Key Takeaway:</strong> {guide.takeaways[0]}
                  </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 16 }}>
                  <Link
                    to={`/resources/${guide.slug}`}
                    className="btn btn-secondary btn-sm"
                    style={{ width: '100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}
                  >
                    Read Complete Guide <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Section: Connect Guides to Solutions */}
      <section style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)', marginTop: 40 }}>
        <div className="container">
          <div className="section-header text-center">
            <div className="badge-pill badge-gold">
              <span className="dot" />
              <span>Commercial Solutions</span>
            </div>
            <h2>Put These Strategies into Practice with Staycore</h2>
            <p className="lead" style={{ margin: '0 auto' }}>
              Explore how Staycore’s hotel technology platform implements automated OTA parsing and commission-free direct booking engines.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            <div className="card-glass">
              <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: 8 }}>Live Room Matrix</h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginBottom: 16 }}>
                Real-time multi-property availability grid eliminating double bookings.
              </p>
              <Link to="/features#feature-rooms" style={{ color: 'var(--accent-sage-light)', fontSize: '0.85rem', fontWeight: 600 }}>
                Explore Room Matrix →
              </Link>
            </div>

            <div className="card-glass">
              <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: 8 }}>AI OTA Aggregator</h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginBottom: 16 }}>
                Parses incoming emails from MakeMyTrip, Goibibo, and Booking.com in seconds.
              </p>
              <Link to="/ota-booking-management" style={{ color: 'var(--accent-gold-light)', fontSize: '0.85rem', fontWeight: 600 }}>
                See OTA Solution →
              </Link>
            </div>

            <div className="card-glass">
              <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: 8 }}>Hotel Website Builder</h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginBottom: 16 }}>
                Custom-domain hotel website with 0% commission direct checkout.
              </p>
              <Link to="/website-only" style={{ color: 'var(--accent-sage-light)', fontSize: '0.85rem', fontWeight: 600 }}>
                Website-Only Plan →
              </Link>
            </div>

            <div className="card-glass">
              <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: 8 }}>Direct Booking Engine</h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginBottom: 16 }}>
                Keep 100% of guest payments with instant UPI and card checkout.
              </p>
              <Link to="/direct-hotel-booking" style={{ color: 'var(--accent-gold-light)', fontSize: '0.85rem', fontWeight: 600 }}>
                Direct Booking Engine →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section>
        <div className="container">
          <div className="cta-banner">
            <h2>Ready to see how Staycore works for your property?</h2>
            <p className="lead" style={{ margin: '16px auto 36px' }}>
              Book an interactive walkthrough tailored to your room count and operational goals.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary btn-lg">
                Book a Free Live Demo
              </Link>
              <Link to="/features" className="btn btn-secondary btn-lg">
                Explore All Platform Features
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
