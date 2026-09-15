import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass, Home as HomeIcon, Sparkles } from 'lucide-react';
import SEO from '../components/SEO';
import { SEO_PAGES } from '../data/seoData';

export default function NotFound() {
  return (
    <main>
      <SEO
        title={SEO_PAGES.notFound.title}
        description={SEO_PAGES.notFound.description}
        canonicalPath={SEO_PAGES.notFound.path}
        robots={SEO_PAGES.notFound.robots}
      />
      <section className="hero-section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div className="container text-center" style={{ maxWidth: 760, position: 'relative', zIndex: 1 }}>
          <div
            className="badge-pill"
            style={{
              background: 'rgba(231, 111, 81, 0.15)',
              color: '#f0896f',
              borderColor: 'rgba(231, 111, 81, 0.3)',
              margin: '0 auto 20px'
            }}
          >
            <Compass size={14} style={{ marginRight: 6 }} />
            <span>HTTP 404 • Resource Not Located</span>
          </div>

          <h1 className="hero-title" style={{ fontSize: 'clamp(2.8rem, 6vw, 4.8rem)', marginBottom: 16 }}>
            Suite Not <br />
            <span>Found.</span>
          </h1>

          <p className="lead" style={{ margin: '0 auto 36px', color: 'var(--text-secondary)' }}>
            The hotel management route you requested could not be found. It may have been relocated, updated, or temporarily disconnected.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 48 }}>
            <Link to="/" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <HomeIcon size={18} /> Return to Homepage
            </Link>
            <Link to="/features" className="btn btn-secondary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <Sparkles size={18} /> Explore Platform Features
            </Link>
          </div>

          {/* Helpful Navigation Links Grid */}
          <div
            className="card-glass"
            style={{
              textAlign: 'left',
              padding: 24,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 16
            }}
          >
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: 600, textTransform: 'uppercase', marginBottom: 8 }}>
                Core Capabilities
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8, fontSize: '0.9rem' }}>
                <li><Link to="/features" style={{ color: 'var(--text-primary)' }}>Live Room Matrix</Link></li>
                <li><Link to="/features" style={{ color: 'var(--text-primary)' }}>AI OTA Confirmation Feed</Link></li>
                <li><Link to="/website-only" style={{ color: 'var(--text-primary)' }}>0% Commission Website Plan</Link></li>
              </ul>
            </div>

            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--accent-sage-light)', fontWeight: 600, textTransform: 'uppercase', marginBottom: 8 }}>
                Assistance & Demo
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8, fontSize: '0.9rem' }}>
                <li><Link to="/contact" style={{ color: 'var(--text-primary)' }}>Schedule VIP Live Walkthrough</Link></li>
                <li><Link to="/about" style={{ color: 'var(--text-primary)' }}>Why COAB Built Staycore</Link></li>
                <li><a href="tel:+919633277995" style={{ color: 'var(--text-secondary)' }}>Direct Support: +91 96332 77995</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
