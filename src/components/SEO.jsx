import { useEffect } from 'react';
import { SITE_ORIGIN, BRAND_NAME } from '../data/seoData';

/**
 * SEO Head Manager Component
 * Dynamically synchronizes document title, canonical URL, meta tags, and JSON-LD structured data.
 */
export default function SEO({
  title,
  description,
  canonicalPath = '/',
  ogImage = '/assets/images/hero-suite.jpg',
  ogType = 'website',
  robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  structuredData
}) {
  useEffect(() => {
    // 1. Title
    if (title) {
      document.title = title;
    }

    // Helper to update or create a meta tag
    const setMeta = (name, content, isProperty = false) => {
      if (!content) return;
      const attr = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to update or create a link tag
    const setLink = (rel, href) => {
      if (!href) return;
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // Construct clean canonical URL (no trailing slash except root '/')
    const cleanPath = canonicalPath === '/' ? '/' : canonicalPath.replace(/\/+$/, '');
    const canonicalUrl = `${SITE_ORIGIN}${cleanPath}`;
    const fullOgImage = ogImage.startsWith('http') ? ogImage : `${SITE_ORIGIN}${ogImage}`;

    // 2. Standard Meta
    setMeta('description', description);
    setMeta('robots', robots);

    // 3. Canonical Link
    setLink('canonical', canonicalUrl);

    // 4. Open Graph Tags
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:url', canonicalUrl, true);
    setMeta('og:image', fullOgImage, true);
    setMeta('og:type', ogType, true);
    setMeta('og:site_name', BRAND_NAME, true);

    // 5. Twitter Card Tags
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', fullOgImage);
    setMeta('twitter:url', canonicalUrl);

    // 6. JSON-LD Structured Data
    const SCRIPT_ID = 'seo-dynamic-json-ld';
    let scriptEl = document.getElementById(SCRIPT_ID);

    if (structuredData) {
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.id = SCRIPT_ID;
        scriptEl.type = 'application/ld+json';
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(structuredData);
    } else if (scriptEl) {
      scriptEl.remove();
    }

    return () => {
      // Keep head clean if component unmounts
      if (scriptEl && !structuredData) {
        scriptEl.remove();
      }
    };
  }, [title, description, canonicalPath, ogImage, ogType, robots, structuredData]);

  return null;
}
