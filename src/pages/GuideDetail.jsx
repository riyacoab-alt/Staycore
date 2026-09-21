import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Clock, Calendar, ArrowRight, ArrowLeft, CheckCircle2, BookOpen, HelpCircle } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import { getGuideBySlug, GUIDES } from '../data/guidesData';
import FaqAccordion from '../components/FaqAccordion';
import {
  SITE_ORIGIN,
  createBreadcrumbSchema,
  createArticleSchema,
  createFaqSchema
} from '../data/seoData';

export default function GuideDetail() {
  const { slug } = useParams();
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return <Navigate to="/resources" replace />;
  }

  const breadcrumbItems = [
    { label: 'Resources & Guides', path: '/resources' },
    { label: guide.title, path: `/resources/${guide.slug}` }
  ];

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Resources & Guides', path: '/resources' },
    { name: guide.title, path: `/resources/${guide.slug}` }
  ]);

  const articleSchema = createArticleSchema(guide);
  const faqSchema = guide.faqs ? createFaqSchema(guide.faqs) : null;

  const guideStructuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbSchema,
      articleSchema,
      ...(faqSchema ? [faqSchema] : [])
    ]
  };

  const otherGuides = GUIDES.filter(g => g.slug !== guide.slug).slice(0, 2);
  const guideKeywords = [guide.primaryKeyword, ...(guide.secondaryKeywords || []), 'hotel management software', 'StayCore'].filter(Boolean).join(', ');

  return (
    <main>
      <SEO
        title={guide.metaTitle}
        description={guide.metaDescription}
        keywords={guideKeywords}
        canonicalPath={`/resources/${guide.slug}`}
        structuredData={guideStructuredData}
      />

      {/* Article Header */}
      <article className="hero-section" style={{ paddingBottom: 40 }}>
        <div className="container" style={{ maxWidth: 860, position: 'relative', zIndex: 1 }}>
          <Breadcrumbs items={breadcrumbItems} />

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 12, marginBottom: 16, flexWrap: 'wrap' }}>
            <span className="badge-pill" style={{ margin: 0, fontSize: '0.78rem' }}>
              {guide.category}
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              <Clock size={13} /> {guide.readTime}
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              • {guide.lastUpdated}
            </span>
          </div>

          <h1 className="hero-title" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.4rem)', textAlign: 'left', lineHeight: 1.25, marginBottom: 20 }}>
            {guide.title}
          </h1>

          <p className="hero-sub" style={{ textAlign: 'left', margin: '0 0 28px', maxWidth: '100%' }}>
            {guide.metaDescription}
          </p>

          {/* Zero-Click / Featured Answer Definition Block */}
          <div style={{ padding: '20px 24px', borderRadius: 14, background: 'rgba(94,129,114,0.12)', border: '1px solid var(--accent-sage-border)', marginBottom: 32 }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--accent-sage-light)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.06em', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
              <HelpCircle size={15} /> Quick Answer &amp; Definition
            </div>
            <p style={{ fontSize: '1rem', color: '#fff', lineHeight: 1.7, margin: 0 }}>
              {guide.zeroClickDefinition}
            </p>
          </div>

          {/* Key Takeaways Box */}
          <div className="card-glass" style={{ padding: 24, marginBottom: 40, borderLeft: '3px solid var(--accent-gold)' }}>
            <h3 style={{ fontSize: '1.05rem', color: 'var(--accent-gold-light)', marginBottom: 12 }}>
              Key Operational Takeaways for Hoteliers:
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {guide.takeaways.map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                  <CheckCircle2 size={16} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: 3 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Sections */}
          <div className="guide-content" style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {guide.sections.map((section, idx) => (
              <section key={idx} style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: 32 }}>
                <h2 style={{ fontSize: '1.75rem', color: '#fff', marginBottom: 16 }}>
                  {section.h2}
                </h2>

                {section.p && (
                  <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 16 }}>
                    {section.p}
                  </p>
                )}

                {section.p2 && (
                  <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 16 }}>
                    {section.p2}
                  </p>
                )}

                {section.bullets && (
                  <ul className="feature-list-check" style={{ margin: '16px 0 24px' }}>
                    {section.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>
                        <span className="check-icon">✓</span>
                        <span style={{ fontSize: '0.92rem', color: 'var(--text-primary)' }}>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.steps && (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16, margin: '20px 0' }}>
                    {section.steps.map((step, sIdx) => (
                      <div key={sIdx} className="card-glass" style={{ padding: 20 }}>
                        <h3 style={{ fontSize: '1rem', color: '#fff', marginBottom: 6 }}>
                          {step.title}
                        </h3>
                        <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                          {step.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {section.table && (
                  <div style={{ overflowX: 'auto', margin: '24px 0' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem', background: 'rgba(15,20,26,0.6)', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
                      <thead>
                        <tr style={{ background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                          {section.table.headers.map((th, thIdx) => (
                            <th key={thIdx} style={{ padding: '14px 16px', textAlign: 'left', color: '#fff', fontWeight: 600 }}>
                              {th}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} style={{ padding: '12px 16px', color: cIdx === 0 ? '#fff' : (cIdx === 2 ? 'var(--accent-sage-light)' : 'var(--text-secondary)') }}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Guide FAQ Section (AEO Question-First Answers) */}
          {guide.faqs && guide.faqs.length > 0 && (
            <div style={{ marginTop: 48 }}>
              <FaqAccordion
                items={guide.faqs}
                title="Frequently Asked Questions"
                subtitle={`Direct operational answers regarding ${guide.primaryKeyword}`}
              />
            </div>
          )}

          {/* Content-to-Conversion Box: Connect to Staycore Solution */}
          <div className="card-glass" style={{ marginTop: 50, padding: 32, border: '1px solid var(--accent-sage-border)', background: 'linear-gradient(180deg, rgba(94,129,114,0.12) 0%, rgba(18,22,29,0.85) 100%)' }}>
            <div className="badge-pill">
              <span className="dot" />
              <span>Recommended Staycore Solution</span>
            </div>
            <h3 style={{ fontSize: '1.5rem', color: '#fff', margin: '12px 0 8px' }}>
              Solve this operational challenge with Staycore.
            </h3>
            <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', marginBottom: 24, lineHeight: 1.6 }}>
              Staycore provides independent hoteliers with a live room matrix, automated AI OTA email parsing, and 0% commission direct hotel websites.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link to={guide.relatedSolutionPath} className="btn btn-primary">
                {guide.relatedSolutionAnchor} →
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Book a Free Live Demo
              </Link>
            </div>
          </div>

          {/* Related Guides Links */}
          <div style={{ marginTop: 50, borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: 32 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <h3 style={{ fontSize: '1.2rem', color: '#fff' }}>Explore More Guides</h3>
              <Link to="/resources" style={{ color: 'var(--accent-gold)', fontSize: '0.85rem' }}>
                All Knowledge Hub Articles →
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
              {otherGuides.map(og => (
                <Link
                  key={og.slug}
                  to={`/resources/${og.slug}`}
                  className="card-glass"
                  style={{ padding: 20, textDecoration: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                >
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: 6 }}>{og.category}</div>
                  <h4 style={{ color: '#fff', fontSize: '1rem', marginBottom: 8, lineHeight: 1.4 }}>{og.title}</h4>
                  <span style={{ color: 'var(--accent-sage-light)', fontSize: '0.82rem', fontWeight: 600 }}>Read Guide →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
