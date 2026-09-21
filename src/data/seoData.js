/**
 * Staycore SEO Configuration & Structured Data Generators
 * Maintains valid Schema.org JSON-LD and consistent canonical URLs.
 */

export const SITE_ORIGIN = (typeof window !== 'undefined' && window.location.origin.includes('localhost'))
  ? 'https://staycore.club'
  : (import.meta.env.VITE_SITE_URL || 'https://staycore.club');

export const BRAND_NAME = 'Staycore';
export const LEGAL_NAME = 'COAB Solutions Private Limited';

/**
 * High-Impact Targeted SEO & AEO Keyword Clusters for StayCore
 */
export const MASTER_KEYWORDS = 'hotel management software, hotel management system, hotel booking software, hotel website builder, hotel reservation system, direct hotel booking, hotel booking engine, hotel room management, OTA booking management, hotel PMS, property management system, hotel website development, hotel SEO, hotel booking platform, online hotel reservations, hotel management solution, hotel technology, hospitality management software, hotel booking system, direct booking platform for hotels, hotel website with booking, online hotel booking system, hotel OTA management, hotel booking aggregation, hotel reservation management, hotel booking dashboard, custom hotel website, hotel website with online booking, hotel website SEO, StayCore';

export const KEYWORD_CLUSTERS = {
  core: [
    'hotel management software',
    'hotel management system',
    'hotel booking software',
    'hotel reservation system',
    'hotel PMS',
    'hotel room management',
    'property management system',
    'hospitality management software',
    'StayCore'
  ],
  directBooking: [
    'direct hotel booking',
    'hotel booking engine',
    'hotel website with booking',
    'online hotel booking system',
    'direct booking platform for hotels',
    'hotel booking system',
    'hotel booking platform',
    '0% commission hotel booking',
    'StayCore'
  ],
  otaManagement: [
    'OTA booking management',
    'hotel OTA management',
    'hotel booking aggregation',
    'hotel reservation management',
    'hotel booking dashboard',
    'online hotel reservations',
    'automated AI booking parser',
    'StayCore'
  ],
  website: [
    'hotel website builder',
    'hotel website development',
    'custom hotel website',
    'hotel website with online booking',
    'hotel website with booking',
    'hotel website SEO',
    'hotel SEO',
    'StayCore'
  ]
};

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
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+919633277995',
    contactType: 'customer service',
    areaServed: 'IN',
    availableLanguage: ['English', 'Malayalam', 'Hindi']
  }
};

export const SOFTWARE_APPLICATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `${SITE_ORIGIN}/#software`,
  name: 'Staycore Hotel Management Software',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All modern web and mobile browsers',
  url: SITE_ORIGIN,
  description: 'Unified hotel operating system with real-time room availability matrix, automated AI OTA confirmation email parsing, and 0% commission direct hotel booking engine.',
  author: {
    '@id': `${SITE_ORIGIN}/#organization`
  },
  publisher: {
    '@id': `${SITE_ORIGIN}/#organization`
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Custom tailored quote based on property keys and selected operational modules.'
  },
  keywords: MASTER_KEYWORDS,
  featureList: [
    'Live Multi-Property Room Availability Matrix',
    'AI-Automated OTA Confirmation Email Parsing (MakeMyTrip, Goibibo, Booking.com, Agoda, Expedia)',
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
  keywords: MASTER_KEYWORDS,
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

// -------------------------------------------------------------
// PAGE-SPECIFIC UNIQUE FAQ SETS (Eliminates Duplicate Content)
// -------------------------------------------------------------

export const HOME_FAQS = [
  {
    q: 'What is Staycore hotel management software?',
    a: 'Staycore is a unified hotel management platform that combines real-time room availability, automated AI parsing for OTA confirmation emails, and a 0% commission direct booking hotel website into a single dashboard.'
  },
  {
    q: 'How does Staycore eliminate double bookings?',
    a: 'Staycore synchronizes room status across walk-in registrations, phone bookings, and OTA channels in real time. When a room is booked through any channel, the availability matrix locks it instantly across all screens.'
  },
  {
    q: 'Can hotels get their own direct booking website with Staycore?',
    a: 'Yes. Staycore provides a bespoke hotel website hosted on your custom domain with an integrated, mobile-first direct booking engine that processes card and UPI payments with zero commission.'
  },
  {
    q: 'Can we switch from the Website-Only plan to the Full Webapp later?',
    a: 'Yes, absolutely. Hoteliers frequently start with the Website-Only plan to capture direct reservations and upgrade to the complete Staycore operating system in under 24 hours with zero operational downtime.'
  }
];

export const FEATURES_FAQS = [
  {
    q: 'Which OTA platforms does Staycore’s AI email parser support?',
    a: 'Staycore’s AI ingestion engine automatically captures, reads, and extracts booking details from MakeMyTrip, Goibibo, Booking.com, Agoda, and Expedia confirmation emails within 0.8 seconds.'
  },
  {
    q: 'Can Staycore manage multiple hotels or separate property wings?',
    a: 'Yes. The multi-property floor matrix allows front-desk and general managers to switch between different buildings, wings, floors, and independent resort villas from a single view.'
  },
  {
    q: 'How do housekeeping teams update room readiness?',
    a: 'Housekeeping staff use an optimized mobile status interface with one-tap toggles between Ready, Occupied, Cleaning, and Maintenance, keeping the front desk informed without intercom calls.'
  },
  {
    q: 'Does front-desk staff need specialized hardware to operate Staycore?',
    a: 'No specialized hardware is required. Staycore runs securely on modern web browsers across desktop PCs, laptops, tablets, and smartphones.'
  },
  {
    q: 'How does Staycore handle OTA booking cancellations and date modifications?',
    a: 'When an OTA issues a cancellation or date change email, the AI parser updates the calendar entry and immediately releases or shifts room inventory on your matrix.'
  }
];

export const WEBSITE_ONLY_FAQS = [
  {
    q: 'Can we connect our existing custom hotel domain?',
    a: 'Yes. We configure your custom domain (e.g., yourhotel.com) with high-speed DNS, SSL encryption, and Google search console indexing, maintaining complete brand authority.'
  },
  {
    q: 'Does Staycore charge any commission on direct bookings?',
    a: 'Zero platform commission. Your hotel keeps 100% of room revenue. Standard merchant gateway processing fees (such as Stripe or Razorpay) apply directly to your linked bank account.'
  },
  {
    q: 'What payment methods can guests use on our hotel website?',
    a: 'The direct booking checkout supports instant UPI, Google Pay, Apple Pay, Visa, Mastercard, RuPay, and international credit cards.'
  },
  {
    q: 'How do we receive notifications when a direct guest books?',
    a: 'Instant booking notifications are delivered via SMS, WhatsApp, and email, and appear immediately in your lightweight reservations portal.'
  },
  {
    q: 'How does Staycore optimize our hotel website for Google and AI search?',
    a: 'Each website includes structured schema markup (schema.org/Hotel), fast Core Web Vitals optimization, localized meta tags, and open AI search integration for ChatGPT and Google Hotel Search.'
  }
];

export const PRICING_FAQS = [
  {
    q: 'How is Staycore hotel management software pricing determined?',
    a: 'Staycore uses a transparent, room-count-based investment model. Boutique homestays and heritage villas pay a modest operational rate, while larger multi-property resorts receive a tailored volume quote.'
  },
  {
    q: 'Are there any hidden fees or direct booking commission cuts?',
    a: 'None. We believe hotels should own their revenue. Direct bookings carry 0% platform commission, and there are no surprise bandwidth or support surcharges.'
  },
  {
    q: 'What is included in the property onboarding package?',
    a: 'Onboarding includes bespoke hotel website design, custom domain setup, room cataloging, OTA email parser configuration, staff training walkthroughs, and dedicated launch support.'
  },
  {
    q: 'Can we start with the Website-Only plan and upgrade later?',
    a: 'Yes. You can start with the Website-Only plan to capture direct guests and upgrade seamlessly to the full PMS webapp as your occupancy and operational needs expand.'
  },
  {
    q: 'Do you offer flexible billing cycles?',
    a: 'Yes, we provide both monthly operational agreements and discounted annual plans depending on your property’s cash flow preference.'
  }
];

export const OTA_FAQS = [
  {
    q: 'Which Online Travel Agencies (OTAs) does Staycore support?',
    a: 'Staycore’s AI parsing engine natively captures, reads, and extracts booking details from confirmation emails sent by MakeMyTrip, Goibibo, Booking.com, Agoda, and Expedia in under 0.8 seconds.'
  },
  {
    q: 'How does Staycore prevent overbookings across channels?',
    a: 'When an OTA reservation email arrives, Staycore immediately triggers an auto-inventory hold on your availability matrix, locking that room key so walk-ins or other booking channels cannot duplicate the reservation.'
  },
  {
    q: 'What happens when a guest cancels or alters their dates on an OTA?',
    a: 'When an OTA issues a cancellation or date alteration notice, the AI parser instantly updates the calendar entry and frees or shifts the inventory on your room matrix.'
  },
  {
    q: 'Do we need to keep multiple extranet tabs open during the day?',
    a: 'No. Staycore consolidates incoming reservations from all supported OTA channels into a single chronological feed, eliminating the need to monitor separate inboxes and extranet portals.'
  },
  {
    q: 'Can Staycore track returning guests across different booking channels?',
    a: 'Yes. Staycore’s guest profiles link reservations by guest phone number and email, allowing you to identify loyal returning guests even if they previously booked through a different channel.'
  }
];

export const DIRECT_BOOKING_FAQS = [
  {
    q: 'Does Staycore take any commission on direct hotel bookings?',
    a: 'Zero platform commission. Your hotel retains 100% of guest room revenue. Standard merchant gateway processing fees from your linked payment provider (e.g. Stripe, Razorpay) apply directly to your account.'
  },
  {
    q: 'What payment options can guests use on our direct booking engine?',
    a: 'The mobile-first direct booking engine supports instant UPI, Google Pay, Apple Pay, Visa, Mastercard, RuPay, and international credit/debit cards.'
  },
  {
    q: 'Can guests apply promo codes or private corporate discounts?',
    a: 'Yes. You can generate custom discount codes, seasonal perks, and returning guest promo codes that apply directly during checkout and record automatically on your dashboard.'
  },
  {
    q: 'How does a direct booking website help us appear on Google and AI search?',
    a: 'Staycore embeds Schema.org/Hotel and Schema.org/Offer structured data into your custom-domain website, allowing Google Hotel Search, ChatGPT, and Perplexity to read live rates and recommend your official direct channel.'
  },
  {
    q: 'Can we use our existing custom hotel domain name?',
    a: 'Yes. We configure your custom domain (e.g., yourhotel.com) with high-speed DNS, SSL encryption, and search console indexing while preserving your property brand identity.'
  }
];

export const CONTACT_FAQS = [
  {
    q: 'What is covered during a live Staycore software demonstration?',
    a: 'A 1-on-1 demonstration covers live room availability matrix management, automated AI parsing of OTA confirmation emails, direct booking website setup on your custom domain, and the staff mobile interface.'
  },
  {
    q: 'Does our hotel need specialized servers or local hardware to use Staycore?',
    a: 'No specialized hardware or local servers are needed. Staycore operates securely in any modern web browser across desktop PCs, laptops, tablets, and smartphones.'
  },
  {
    q: 'Can our hotel retain our existing domain name for direct bookings?',
    a: 'Yes. Staycore connects directly to your existing hotel domain name (e.g., yourhotel.com) with automated SSL encryption, preserving your existing brand authority and search equity.'
  },
  {
    q: 'How long does property onboarding and setup typically take?',
    a: 'Standard property onboarding takes between 24 and 48 hours. Our team assists with room catalog setup, domain configuration, and staff walkthroughs.'
  },
  {
    q: 'What OTA channels can be integrated with Staycore?',
    a: 'Staycore’s AI confirmation parser processes booking confirmation emails from MakeMyTrip, Goibibo, Booking.com, Agoda, and Expedia, syncing reservation data directly into your master calendar.'
  }
];

export const ABOUT_FAQS = [
  {
    q: 'What is Staycore?',
    a: 'Staycore is a hospitality technology platform engineered to unify hotel operations, real-time room availability, multi-channel OTA booking management, and direct hotel booking websites into a single interface.'
  },
  {
    q: 'Who develops and maintains Staycore?',
    a: 'Staycore is engineered and maintained by COAB Solutions Private Limited, a technology firm based in Kerala, India.'
  },
  {
    q: 'What types of hospitality properties use Staycore?',
    a: 'Staycore is built for independent hotels, boutique retreats, heritage villas, homestays, and multi-property resort groups seeking streamlined operations and commission-free direct bookings.'
  },
  {
    q: 'What core operational problem does Staycore solve?',
    a: 'Staycore eliminates the operational friction of managing scattered registers, spreadsheets, and multiple open OTA extranets, preventing overbookings and centralizing property workflows.'
  }
];

/**
 * Builds a valid Schema.org Article structured data object for educational guides
 * @param {Object} guide
 */
export function createArticleSchema(guide) {
  if (!guide) return null;
  const guideKeywords = [guide.primaryKeyword, ...(guide.secondaryKeywords || []), 'hotel management software', 'StayCore'].filter(Boolean).join(', ');
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.metaDescription,
    keywords: guideKeywords,
    url: `${SITE_ORIGIN}/resources/${guide.slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_ORIGIN}/resources/${guide.slug}`
    },
    author: {
      '@id': `${SITE_ORIGIN}/#organization`
    },
    publisher: {
      '@id': `${SITE_ORIGIN}/#organization`
    },
    datePublished: '2026-09-10',
    dateModified: '2026-09-16'
  };
}

// -------------------------------------------------------------
// METADATA CONFIGURATION PER PAGE
// -------------------------------------------------------------

export const SEO_PAGES = {
  home: {
    title: 'Hotel Management Software for Modern Hotels | Staycore',
    description: 'Manage hotel operations, room availability, OTA bookings, and your own direct booking hotel website with Staycore’s unified hotel management platform.',
    keywords: MASTER_KEYWORDS,
    path: '/',
    ogImage: '/assets/images/hotel-management-dashboard.webp'
  },
  features: {
    title: 'Hotel Management System & Operations Features | Staycore',
    description: 'Explore Staycore’s hotel management system: live room availability matrix, automated AI OTA email parsing, multi-property views, and direct booking engine.',
    keywords: 'hotel management software, hotel management system, hotel booking software, hotel reservation system, hotel PMS, hotel room management, property management system, hospitality management software, live room availability matrix, housekeeping mobile status, StayCore',
    path: '/features',
    ogImage: '/assets/images/hotel-management-features-banner.webp'
  },
  otaBooking: {
    title: 'OTA Booking Management Software for Hotels | Staycore',
    description: 'Centralize hotel bookings from MakeMyTrip, Goibibo, Booking.com, and Expedia with Staycore’s automated AI OTA email parser and real-time inventory guard.',
    keywords: 'OTA booking management, hotel OTA management, hotel booking aggregation, hotel reservation management, hotel booking dashboard, online hotel reservations, automated AI booking parser, hotel booking system, StayCore',
    path: '/ota-booking-management',
    ogImage: '/assets/images/hotel-management-features-banner.webp'
  },
  websiteOnly: {
    title: 'Hotel Website Builder | Direct Booking Engine | Staycore',
    description: 'Get a custom-domain hotel website with Staycore’s 0% commission direct booking engine, AI search visibility, and lightweight reservation portal.',
    keywords: 'hotel website builder, hotel website development, custom hotel website, hotel website with online booking, hotel website with booking, hotel website SEO, hotel SEO, direct booking engine, direct hotel booking, StayCore',
    path: '/website-only',
    ogImage: '/assets/images/hotel-website-builder-banner.webp'
  },
  directBooking: {
    title: 'Direct Hotel Booking Software & 0% Commission Engine | Staycore',
    description: 'Boost direct hotel reservations with Staycore’s commission-free direct booking engine. Mobile-first checkout, instant UPI & card payments, and promo codes.',
    keywords: 'direct hotel booking, hotel booking engine, hotel website with booking, online hotel booking system, direct booking platform for hotels, 0% commission hotel booking, hotel booking system, hotel booking platform, StayCore',
    path: '/direct-hotel-booking',
    ogImage: '/assets/images/hotel-direct-booking-lounge.webp'
  },

  about: {
    title: 'About Staycore | Hospitality Technology Built by COAB',
    description: 'Learn how Staycore was built by COAB to solve operational friction in hospitality. Unified hotel management software, OTA aggregation, and direct bookings.',
    keywords: 'Staycore, COAB Solutions, hotel management software company, hospitality technology, hotel PMS platform, hotel reservation system, hotel technology',
    path: '/about',
    ogImage: '/assets/images/hotel-room-availability-matrix.webp'
  },
  contact: {
    title: 'Contact Staycore | Request a Hotel Software Demo',
    description: 'Contact Staycore or book a live 1-on-1 hotel software demo. See real-time room availability, AI OTA parsing, and direct booking tools for your property.',
    keywords: 'Staycore demo, contact hotel software, hotel PMS consultation, book hotel software demo, hotel management solution, StayCore',
    path: '/contact',
    ogImage: '/assets/images/hotel-contact-reception-desk.webp'
  },
  resources: {
    title: 'Hotel Management & Direct Booking Resources | Staycore',
    description: 'Explore expert hotel technology guides. Learn how hotel management software, OTA aggregation, and direct booking websites reduce costs and increase revenue.',
    keywords: 'hotel management software, hotel technology, direct hotel booking, OTA booking management, hotel website builder, hotel PMS, hotel SEO, StayCore',
    path: '/resources',
    ogImage: '/assets/images/hotel-resources-knowledge-banner.webp'
  },
  notFound: {
    title: '404 — Page Not Found | Staycore',
    description: 'The requested hotel operations page could not be located. Explore our platform features or return to Staycore homepage.',
    keywords: 'Staycore, 404',
    path: '/404',
    robots: 'noindex, follow'
  }
};
