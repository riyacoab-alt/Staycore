/**
 * Staycore SEO Configuration & Structured Data Generators
 * Maintains valid Schema.org JSON-LD and consistent canonical URLs.
 */

export const SITE_ORIGIN = (typeof window !== 'undefined' && window.location.origin.includes('localhost'))
  ? 'https://staycore.club'
  : (import.meta.env.VITE_SITE_URL || 'https://staycore.club');

export const BRAND_NAME = 'Staycore';
export const LEGAL_NAME = 'COAB Solutions Private Limited';

export const BASE_ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_ORIGIN}/#organization`,
  name: BRAND_NAME,
  legalName: LEGAL_NAME,
  url: SITE_ORIGIN,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_ORIGIN}/assets/images/staycore-logo.png`,
    caption: 'Staycore — Property Management'
  },
  telephone: '+919633277995',
  email: 'coabgroup@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '37/2256, Kollamkudi House, Kollamkudimugal, Thrikkakara',
    addressLocality: 'Ernakulam',
    addressRegion: 'Kerala',
    postalCode: '682021',
    addressCountry: 'IN'
  },
  sameAs: [
    'https://coab.club/',
    'https://www.instagram.com/coab.club/',
    'https://www.linkedin.com/company/coabclub/posts/?feedView=all'
  ]
};

export const SOFTWARE_APPLICATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `${SITE_ORIGIN}/#software`,
  name: 'Staycore Hotel Management Platform',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All modern web and mobile browsers',
  url: SITE_ORIGIN,
  description: 'Unified hotel operating system with real-time room availability matrix, automated AI OTA email parser, and 0% commission direct booking engine.',
  author: {
    '@id': `${SITE_ORIGIN}/#organization`
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Custom tailored quote based on property keys and selected modules.'
  },
  featureList: [
    'Live Multi-Property Room Availability Matrix',
    'AI-Automated OTA Confirmation Email Parsing',
    '0% Commission Direct Hotel Booking Engine',
    'Custom-Domain Hotel Website Builder',
    'Instant UPI and International Card Payment Processing',
    'Unified Chronological Guest Feed and Repeat Guest Profiles'
  ]
};

export const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_ORIGIN}/#website`,
  url: SITE_ORIGIN,
  name: BRAND_NAME,
  publisher: {
    '@id': `${SITE_ORIGIN}/#organization`
  }
};

/**
 * Builds a valid Schema.org BreadcrumbList
 * @param {Array<{name: string, path: string}>} items
 */
export function createBreadcrumbSchema(items = []) {
  const itemListElement = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${SITE_ORIGIN}/`
    },
    ...items.map((it, idx) => ({
      '@type': 'ListItem',
      position: idx + 2,
      name: it.name,
      item: it.path.startsWith('http') ? it.path : `${SITE_ORIGIN}${it.path}`
    }))
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement
  };
}

/**
 * Builds a valid Schema.org FAQPage matching visible FAQ accordions
 * @param {Array<{q: string, a: string}>} faqs
 */
export function createFaqSchema(faqs = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a
      }
    }))
  };
}

export const SEO_PAGES = {
  home: {
    title: 'Staycore — One Platform for Every Hotel Booking',
    description: 'One unified hotel management platform for your rooms, bookings, and OTAs. Eliminate double bookings, auto-sync OTA emails with AI, and capture 0% commission direct bookings.',
    path: '/',
    ogImage: '/assets/images/hero-suite.jpg'
  },
  features: {
    title: 'Hotel Management Features & Capabilities | Staycore',
    description: 'Explore Staycore’s live room availability matrix, automated AI OTA email aggregator, multi-property calendar, and 0% commission direct booking engine.',
    path: '/features',
    ogImage: '/assets/images/features-banner.png'
  },
  websiteOnly: {
    title: 'Hotel Website Builder & Direct Booking Engine | Staycore',
    description: 'Get a bespoke, search-ready hotel website on your custom domain with 0% commission direct bookings and a lightweight reservation management portal.',
    path: '/website-only',
    ogImage: '/assets/images/website-only-banner.png'
  },
  about: {
    title: 'About Staycore — Hospitality Technology Built by COAB',
    description: 'Learn the story behind Staycore and COAB. Why product-first engineering solves high-friction hotel operations across rooms, OTAs, and direct bookings.',
    path: '/about',
    ogImage: '/assets/images/hotel-villa.jpg'
  },
  contact: {
    title: 'Book a Demo & Contact Our Hospitality Desk | Staycore',
    description: 'Schedule a personalized 1-on-1 walkthrough of Staycore. See real-time room inventory, AI OTA parsing, and direct booking checkout tailored for your property.',
    path: '/contact',
    ogImage: '/assets/images/contact-banner.png'
  },
  notFound: {
    title: '404 — Page Not Found | Staycore',
    description: 'The requested hotel operations page could not be located. Explore our platform features or return to Staycore homepage.',
    path: '/404',
    robots: 'noindex, follow'
  }
};
