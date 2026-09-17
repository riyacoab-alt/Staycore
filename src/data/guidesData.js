/**
 * Staycore Educational Guides & Knowledge Base Data
 * Written strictly for hotel owners, managers, and hospitality operators.
 * Features zero-click definitions, structured tables, citations, and conversion pathways.
 */

export const GUIDES = [
  {
    slug: 'what-is-hotel-management-software',
    title: 'What Is Hotel Management Software and How Does It Work?',
    metaTitle: 'What Is Hotel Management Software? Complete 2026 Guide | Staycore',
    metaDescription: 'Understand what hotel management software is, how it automates room inventory and guest check-ins, and how to choose the right system for your property.',
    category: 'Hotel Management',
    readTime: '6 min read',
    lastUpdated: 'September 2026',
    author: 'COAB Hospitality Engineering Team',
    reviewer: 'COAB Systems Architecture',
    primaryKeyword: 'what is hotel management software',
    secondaryKeywords: ['how does hotel management software work', 'hotel management software features', 'hotel PMS guide'],
    zeroClickDefinition: 'Hotel management software is a centralized digital platform that unifies and automates daily property operations — including real-time room availability, front-desk check-ins, housekeeping status, multi-channel OTA reservations, and guest billing — into a single operational interface.',
    takeaways: [
      'Replaces scattered spreadsheets, paper registers, and multiple OTA extranet tabs with one screen.',
      'Prevents double bookings by instantly locking room availability across all sales channels.',
      'Empowers housekeeping staff with 1-tap mobile readiness status updates.',
      'Boutique and independent hotels benefit most from lightweight, modern web-based architectures without heavy server hardware.'
    ],
    citations: [
      {
        title: 'Schema.org Hotel Specification',
        url: 'https://schema.org/Hotel'
      },
      {
        title: 'Google Hotel Center Official Guidelines',
        url: 'https://support.google.com/hotelprices/answer/9238392'
      }
    ],
    relatedSolutionPath: '/features',
    relatedSolutionAnchor: 'Explore Staycore Hotel Management System',
    sections: [
      {
        h2: 'The Core Problems Solved by Hotel Management Software',
        p: 'Historically, independent hotels and boutique resorts managed reservations across fragmented tools: a paper front-desk ledger for walk-ins, phone reservations jotted in notebooks, and separate extranet logins for MakeMyTrip, Goibibo, and Booking.com. This fragmentation routinely causes double bookings, delayed room handovers, and lost revenue.',
        bullets: [
          'Overbooking during peak seasons due to delayed manual availability updates across channels.',
          'Front-desk miscommunication with housekeeping, causing guests to wait in lobbies for unready rooms.',
          'Missing guest preferences and history, preventing personalized hospitality for return travelers.'
        ]
      },
      {
        h2: 'How Modern Hotel Management Software Works',
        p: 'Modern hotel management platforms operate as a unified system where every booking channel and operational department connects in real time.',
        steps: [
          {
            title: '1. Centralized Room Availability Matrix',
            desc: 'A live grid displays every room key across wings and floors, color-coded by status (Ready, Occupied, Cleaning, Maintenance). Front-desk staff can assign rooms and process check-ins with one click.'
          },
          {
            title: '2. Multi-Channel Synchronization',
            desc: 'When a room is booked directly through the hotel website or an OTA, the system automatically marks that room as occupied across all other booking channels.'
          },
          {
            title: '3. Mobile Housekeeping Coordination',
            desc: 'Cleaning teams view checkout notifications on mobile devices and toggle room status as soon as a suite is sanitized and inspected.'
          },
          {
            title: '4. Guest Data & Billing',
            desc: 'The platform aggregates guest contact details, stay duration, special requests, and invoice balances into a unified profile.'
          }
        ]
      },
      {
        h2: 'Legacy On-Premise PMS vs. Modern Web Hotel Software',
        p: 'Before choosing a software solution, hoteliers should understand the difference between legacy desktop software and modern cloud platforms:',
        table: {
          headers: ['Feature', 'Legacy Desktop PMS', 'Modern Web Software (Staycore)'],
          rows: [
            ['Hardware Requirements', 'Dedicated local server & network setup', 'Any modern web browser, tablet, or phone'],
            ['Remote Access', 'Restricted to front-desk office computer', 'Accessible anywhere by owners and managers'],
            ['OTA Integration', 'Complex third-party channel manager add-ons', 'Automated AI confirmation parsing and sync'],
            ['Direct Booking Engine', 'Separate vendor or expensive add-on', 'Native 0% commission direct hotel website'],
            ['Maintenance & Backups', 'Manual IT maintenance required', 'Continuous automatic updates and bank-grade security']
          ]
        }
      },
      {
        h2: 'How to Choose the Right System for Your Property',
        p: 'Independent hoteliers do not need complex enterprise systems with hundreds of unused menus. Look for speed, intuitive room matrix visuals, automated OTA conflict prevention, and direct booking ownership that lets you keep 100% of guest revenue.'
      }
    ],
    faqs: [
      {
        q: 'What is the difference between a Hotel PMS and Hotel Management Software?',
        a: 'While the terms are often used interchangeably, a traditional Property Management System (PMS) focused primarily on front-desk check-in and night audits. Modern hotel management software unifies PMS functions with real-time multi-channel OTA aggregation, housekeeping mobile status, and 0% commission direct booking engine technology.'
      },
      {
        q: 'Can small boutique hotels and homestays use hotel management software without local servers?',
        a: 'Yes. Modern cloud-native hotel software runs entirely in web browsers on laptops, tablets, and smartphones, eliminating the need for expensive on-premise servers, IT maintenance, or hardware setup.'
      },
      {
        q: 'How quickly does a hotel management system prevent double bookings?',
        a: 'An effective system updates room inventory across all connected channels and front-desk registers within seconds of a confirmed walk-in, website reservation, or OTA booking confirmation email.'
      }
    ]
  },
  {
    slug: 'what-is-ota-booking-management',
    title: 'What Is OTA Booking Management? Complete Operational Guide',
    metaTitle: 'What Is OTA Booking Management for Hotels? | Staycore Guide',
    metaDescription: 'Learn what OTA booking management is, why managing multiple extranets causes double bookings, and how automated AI email parsing centralizes your reservations.',
    category: 'OTA Management',
    readTime: '5 min read',
    lastUpdated: 'September 2026',
    author: 'COAB Hospitality Engineering Team',
    reviewer: 'COAB Systems Architecture',
    primaryKeyword: 'what is OTA booking management',
    secondaryKeywords: ['manage OTA bookings', 'OTA management system for hotels', 'hotel booking channel management'],
    zeroClickDefinition: 'OTA booking management is the operational process of aggregating, synchronizing, and organizing hotel reservations originating from Online Travel Agencies (such as MakeMyTrip, Goibibo, Booking.com, Agoda, and Expedia) into a single master calendar to prevent overbookings and eliminate manual data entry.',
    takeaways: [
      'Eliminates the need to monitor 5+ separate extranet inboxes and dashboards simultaneously.',
      'Automated parsing extracts guest details and assigns rooms in under 0.8 seconds.',
      'Instant inventory auto-hold locks room availability so multiple channels cannot sell the same suite.',
      'Consolidates returning guest histories across disparate OTA profiles into one chronological feed.'
    ],
    citations: [
      {
        title: 'OpenTravel Alliance Technical Specifications',
        url: 'https://opentravel.org'
      },
      {
        title: 'IATA Hospitality and Travel Distribution Guidelines',
        url: 'https://www.iata.org'
      }
    ],
    relatedSolutionPath: '/ota-booking-management',
    relatedSolutionAnchor: 'Explore Staycore Automated OTA Aggregator',
    sections: [
      {
        h2: 'The Challenge: The Multi-Extranet Nightmare',
        p: 'Listing on Online Travel Agencies provides essential guest discovery, especially for travelers visiting from other cities or countries. However, managing multiple OTAs manually presents severe operational headaches for front-desk teams:',
        bullets: [
          'Logging into separate portal dashboards daily to verify new check-ins and cancellations.',
          'Missing critical reservation emails during peak check-in rushes, resulting in guests arriving without an assigned room.',
          'The constant threat of double bookings when a room is sold on Booking.com while front desk takes a walk-in guest.'
        ]
      },
      {
        h2: 'How Automated OTA Ingestion Works',
        p: 'Rather than forcing hotel staff to manually type booking details from confirmation emails into a register, modern platforms utilize automated AI ingestion pipelines.',
        steps: [
          {
            title: '1. Instant Email Capture',
            desc: 'When an OTA issues a booking confirmation to your property email, Staycore’s secure webhook detects and reads the email in real time.'
          },
          {
            title: '2. Precision AI Extraction (0.8 Seconds)',
            desc: 'The parser extracts guest name, stay dates, room type, guest count, and payment status, automatically filtering out marketing junk.'
          },
          {
            title: '3. Automated Inventory Lock',
            desc: 'The platform places an immediate auto-hold on room inventory, ensuring walk-ins and other OTA channels cannot double-book that room.'
          },
          {
            title: '4. Chronological Multi-Channel Feed',
            desc: 'The reservation appears instantly on your live calendar alongside direct guests and phone reservations.'
          }
        ]
      },
      {
        h2: 'Handling Modifications and Cancellations',
        p: 'Guest travel plans change frequently. When an OTA sends a cancellation or date alteration notice, the system parses the modification and immediately updates room availability, freeing the inventory for walk-ins or direct website visitors.'
      }
    ],
    faqs: [
      {
        q: 'Which OTAs can be automatically aggregated without complex hardware?',
        a: 'Platforms like Staycore automatically ingest and parse booking confirmation emails from major Online Travel Agencies including MakeMyTrip, Goibibo, Booking.com, Agoda, and Expedia, syncing reservation data directly into your master calendar in under 0.8 seconds.'
      },
      {
        q: 'What happens when an OTA guest alters dates or cancels their reservation?',
        a: 'When the OTA sends a date alteration or cancellation confirmation email, the automated AI parser reads the update, adjusts the reservation calendar, and immediately frees the room inventory on the availability matrix.'
      },
      {
        q: 'Why is automated email parsing more reliable for independent hotels than manual extranet logging?',
        a: 'Manual tracking relies on staff constantly monitoring multiple extranet portals and inboxes. Automated parsing captures booking details 24/7 without delays, locking inventory instantly and preventing human data-entry errors.'
      }
    ]
  },
  {
    slug: 'ota-vs-direct-hotel-bookings',
    title: 'OTA vs Direct Hotel Bookings: The Hoteliers’ Revenue Guide',
    metaTitle: 'OTA vs Direct Hotel Bookings: Commission & Profit Guide | Staycore',
    metaDescription: 'Compare OTA bookings vs direct hotel website bookings. Discover how much 18–25% commissions cost your property and strategies to capture direct guests.',
    category: 'Direct Bookings',
    readTime: '7 min read',
    lastUpdated: 'September 2026',
    author: 'COAB Hospitality Engineering Team',
    reviewer: 'COAB Systems Architecture',
    primaryKeyword: 'OTA vs direct hotel bookings',
    secondaryKeywords: ['direct hotel booking benefits', 'how to increase direct hotel bookings', 'hotel direct booking software'],
    zeroClickDefinition: 'OTA bookings are reservations acquired through third-party travel platforms where the hotel surrenders an 18% to 25% commission fee, while direct hotel bookings are reservations made directly on the hotel’s custom-domain website where the property keeps 100% of guest revenue.',
    takeaways: [
      'A 30-room hotel with 65% occupancy commonly surrenders $1,800 to $3,500+ monthly in third-party OTA commissions.',
      'Direct guests provide higher profit margins, direct contact information, and significantly higher repeat booking rates.',
      'Having an independent custom-domain website is essential to converting search queries and AI recommendations into direct bookings.',
      'Direct booking engines with 0% platform commission enable hoteliers to offer special guest perks while still earning more net revenue.'
    ],
    citations: [
      {
        title: 'Google Hotel Ads & Free Booking Links Guidelines',
        url: 'https://support.google.com/hotelprices'
      },
      {
        title: 'Hotel Electronic Distribution Network Association (HEDNA) Direct Booking Insights',
        url: 'https://www.hedna.org'
      }
    ],
    relatedSolutionPath: '/direct-hotel-booking',
    relatedSolutionAnchor: 'Explore Staycore Direct Hotel Booking Software',
    sections: [
      {
        h2: 'The Financial Impact of OTA Commissions',
        p: 'Online Travel Agencies provide undeniable discovery, but relying solely on them drastically cuts hotel operating margins. Most major OTAs charge between 18% and 25% commission on every booked room night.',
        p2: 'For example, if a guest books a 3-night stay at $150/night ($450 total), the OTA keeps up to $112.50. Shifting even 30% of total bookings to a direct channel can retain thousands of dollars in profit every month.'
      },
      {
        h2: 'Detailed Comparison: OTA vs Direct Booking',
        table: {
          headers: ['Metric', 'OTA Bookings', 'Direct Hotel Bookings (Staycore)'],
          rows: [
            ['Commission Cost', '18% – 25% deducted per booking', '0% platform commission (100% retained)'],
            ['Guest Relationship', 'Owned by the OTA; masked email addresses', 'Direct contact via phone, email, and WhatsApp'],
            ['Payment Timing', 'Weekly or monthly batch disbursements', 'Instant merchant payout via UPI and card gateway'],
            ['Brand Loyalty', 'Guest is loyal to the OTA platform', 'Guest is loyal to your hotel brand'],
            ['Cancellation Rates', 'Higher cancellation rates (typically 30–40%)', 'Lower cancellation rates with verified guest cards']
          ]
        }
      },
      {
        h2: 'How Hotels Can Increase Direct Bookings Without Violating Rate Parity',
        p: 'Hoteliers often wonder how to attract direct bookings without creating friction with OTA listings. The key lies in offering superior value rather than simply undercutting rates:',
        bullets: [
          'Offer Exclusive Value-Adds: Complimentary artisan breakfast, early check-in, or welcome drinks exclusively for direct website bookers.',
          'Provide Promo Codes to Return Guests: Give checkout guests a private promo card offering 10% off their next reservation booked directly on your website.',
          'Fast, Mobile-First Checkout: Ensure booking on your website takes under 60 seconds with instant UPI, Google Pay, Apple Pay, and credit cards.',
          'Structured SEO & AI Search Visibility: Ensure your property website has valid schema.org/Hotel structured data so Google Hotel Search and AI assistants (ChatGPT, Perplexity) recommend your official direct booking channel.'
        ]
      }
    ],
    faqs: [
      {
        q: 'How can hoteliers encourage OTA guests to book directly next time?',
        a: 'Hoteliers can offer exclusive direct booking perks (such as complimentary breakfast, early check-in, or exclusive promo codes) on their official website, combined with welcoming returning guest communications via WhatsApp or email.'
      },
      {
        q: 'Does having a direct booking website mean disconnecting from OTAs?',
        a: 'No. A healthy distribution strategy uses OTAs for top-of-funnel discovery of new international and out-of-state guests, while using the official hotel website to capture repeat visitors and direct search traffic at 0% commission.'
      },
      {
        q: 'What is the typical commission fee charged by major OTAs?',
        a: 'Major Online Travel Agencies typically charge between 15% and 25% of the total booking value, depending on market, property tier, and visibility agreements.'
      }
    ]
  },
  {
    slug: 'what-should-a-hotel-website-include',
    title: 'What Should a Hotel Booking Website Include? The 7 Essentials',
    metaTitle: 'What Should a Hotel Booking Website Include? | Staycore Checklist',
    metaDescription: 'Discover the 7 essential features every hotel booking website must have to convert visitors into confirmed direct guests with zero commissions.',
    category: 'Hotel Websites',
    readTime: '6 min read',
    lastUpdated: 'September 2026',
    author: 'COAB Hospitality Engineering Team',
    reviewer: 'COAB Systems Architecture',
    primaryKeyword: 'what should a hotel website include',
    secondaryKeywords: ['hotel website builder', 'hotel booking website features', 'hotel website with booking'],
    zeroClickDefinition: 'An effective hotel booking website must feature a custom branded domain, mobile-first direct booking engine, high-resolution visual gallery, real-time room availability, instant payment processing (UPI/cards), structured Google schema, and transparent policies.',
    takeaways: [
      'A custom domain (yourhotel.com) builds trust and establishes digital authority.',
      'Mobile-first responsive design is critical, as over 60% of leisure hotel bookings occur on mobile devices.',
      'Direct checkout must be frictionless, supporting instant card and UPI payments without redirects to slow portals.',
      'Structured Hotel schema ensures automatic inclusion in Google Hotel Search and conversational AI queries.'
    ],
    citations: [
      {
        title: 'Google Search Central Hotel Structured Data Guide',
        url: 'https://developers.google.com/search/docs/appearance/structured-data/hotel'
      },
      {
        title: 'W3C Web Accessibility Initiative & Usability Best Practices',
        url: 'https://www.w3.org/WAI/'
      }
    ],
    relatedSolutionPath: '/website-only',
    relatedSolutionAnchor: 'Explore Staycore Hotel Website Builder',
    sections: [
      {
        h2: 'The 7 Essential Elements of a High-Converting Hotel Website',
        p: 'A hotel website should not merely be a static online brochure. It must act as your primary direct sales engine. Here are the 7 core features required:',
        steps: [
          {
            title: '1. Custom Domain & Luxury Visual Identity',
            desc: 'Your property needs its own branded domain (e.g., theobsidianhotel.com) with high-speed hosting and SSL security to establish immediate credibility.'
          },
          {
            title: '2. Integrated Direct Booking Engine',
            desc: 'Guests should never be redirected to confusing third-party booking widgets. A native, zero-commission booking bar allows guests to select check-in dates, view suites, and complete reservations seamlessly.'
          },
          {
            title: '3. Instant Local & Global Payment Gateways',
            desc: 'Support instant card processing (Visa, Mastercard, RuPay) and modern mobile payments (UPI, Google Pay, Apple Pay) with funds routed directly to your hotel’s bank.'
          },
          {
            title: '4. High-Resolution Room & Amenity Photography',
            desc: 'Showcase authentic room photos, bathroom amenities, suite square footage, bed configurations, and views (mountain, sea, or garden).'
          },
          {
            title: '5. Schema.org Structured Data for Google & AI Search',
            desc: 'Integrated schema.org/Hotel and schema.org/Offer markup enables Google Hotel Search, Google Maps, and AI models (like ChatGPT and Perplexity) to display your room rates and official direct booking link.'
          },
          {
            title: '6. Returning Guest Promo Code Engine',
            desc: 'Allow guests to apply promotional discount codes to incentivize direct booking loyalty and seasonal corporate travel.'
          },
          {
            title: '7. Transparent Policies & Direct Contact Options',
            desc: 'Clearly state check-in/out times, cancellation terms, and provide 1-tap WhatsApp and phone call buttons so guests can ask quick questions before booking.'
          }
        ]
      },
      {
        h2: 'Why Website-Only Solutions Are Ideal for Growing Hotels',
        p: 'Hotels that are not ready to overhaul their entire front desk can start with a standalone, custom-domain hotel website. Staycore’s Website-Only plan provides this complete setup, paired with a simple portal to view upcoming reservations, with a seamless upgrade path to the full PMS webapp anytime.'
      }
    ],
    faqs: [
      {
        q: 'Can a hotel website have a direct booking engine without paying monthly transaction commissions?',
        a: 'Yes. Modern website builders like Staycore offer 0% commission direct booking engines where you only pay standard merchant gateway processing fees (such as Stripe or Razorpay) directly to your bank, retaining 100% of room revenues.'
      },
      {
        q: 'Why is Schema.org structured data essential for hotel websites?',
        a: 'Embedding Schema.org/Hotel and Schema.org/Offer markup enables Google Search, Google Maps, and AI answer engines (ChatGPT, Perplexity) to automatically read live room availability, amenities, and direct rates.'
      },
      {
        q: 'What is the most critical factor for mobile hotel booking conversion?',
        a: 'Fast page load times under 2.5 seconds, clear room photography, and a 2-step checkout supporting instant UPI and digital wallets without requiring mandatory user account creation.'
      }
    ]
  },
  {
    slug: 'how-hotel-reservation-systems-work',
    title: 'How Hotel Reservation Systems Work: Front Desk, OTAs, and Direct Feeds',
    metaTitle: 'How Hotel Reservation Systems Work: Complete Guide | Staycore',
    metaDescription: 'A practical guide explaining how hotel reservation systems work, from live front-desk room matrices and automated OTA email ingestion to commission-free direct booking engines.',
    category: 'Hotel Technology',
    readTime: '6 min read',
    lastUpdated: 'September 2026',
    author: 'COAB Hospitality Engineering Team',
    reviewer: 'COAB Systems Architecture',
    primaryKeyword: 'hotel reservation system',
    secondaryKeywords: ['how hotel reservation systems work', 'hotel technology', 'hotel booking technology', 'hospitality management tools'],
    zeroClickDefinition: 'A hotel reservation system is a centralized technology platform that synchronizes room inventory, records guest bookings, automates front-desk check-ins, and connects direct website channels and third-party OTAs into one operational master calendar.',
    takeaways: [
      'Synchronizes room inventory across walk-in, telephone, direct web, and OTA reservations in real time.',
      'Eliminates double bookings by executing automated inventory locks the second a room is confirmed.',
      'Replaces bulky on-premise servers with secure, browser-based cloud access for front-desk and remote managers.',
      'Reduces commission drag by connecting directly to a hotel’s own custom-domain direct booking engine.'
    ],
    citations: [
      {
        title: 'Schema.org LodgingBusiness & Reservation Standards',
        url: 'https://schema.org/LodgingReservation'
      },
      {
        title: 'PCI-DSS Payment Security Standards for Hospitality Checkout',
        url: 'https://www.pcisecuritystandards.org'
      },
      {
        title: 'Google Hotel Center Integration Documentation',
        url: 'https://support.google.com/hotelprices/answer/9238392'
      }
    ],
    relatedSolutionPath: '/features',
    relatedSolutionAnchor: 'Explore Staycore Hotel Management System',
    sections: [
      {
        h2: 'The Core Architecture of a Modern Hotel Reservation System',
        p: 'A modern hotel reservation system operates as the central nervous system of lodging operations. Instead of keeping guest lists in isolated paper ledgers or desktop spreadsheets, it unifies three distinct booking streams into one synchronized database:',
        steps: [
          {
            title: '1. Front-Desk Walk-Ins & Direct Inquiries',
            desc: 'Front-desk staff instantly view available keys, check guests in, process payment, and mark rooms occupied on the live matrix.'
          },
          {
            title: '2. Custom-Domain Direct Hotel Website',
            desc: 'Online travelers browse room categories on the hotel’s website, select dates, and complete 0% commission payment via UPI or card.'
          },
          {
            title: '3. Third-Party Online Travel Agencies (OTAs)',
            desc: 'Reservations made through Booking.com, MakeMyTrip, and Goibibo are captured in seconds via automated parsing, preventing double bookings.'
          }
        ]
      },
      {
        h2: 'Step-by-Step: What Happens When a Room Is Booked?',
        p: 'To understand the operational value of reservation technology, trace the automated workflow when a guest confirms a stay:',
        bullets: [
          'Inventory Hold: The moment a booking confirmation is generated, the reserved room key is locked across all connected sales channels.',
          'Guest Profile Creation: Guest contact details, stay dates, room tier, and payment status are added to the property’s master calendar.',
          'Housekeeping Notification: On check-out morning, the room automatically transitions to "Cleaning" status on staff mobile devices.',
          'Invoice Settlement: Room charges, local taxes, and payment confirmation are compiled into a clean digital folio without manual math.'
        ]
      },
      {
        h2: 'Cloud-Native Web Systems vs. Legacy On-Premise Servers',
        p: 'Older reservation systems required bulky physical server racks installed in back offices, high licensing fees, and on-site IT technicians. Modern cloud-native platforms like Staycore run on modern web architecture accessible from any phone, tablet, or laptop, ensuring property managers maintain total operational visibility even when away from the front desk.'
      },
      {
        h2: 'Key Evaluation Criteria for Independent Hoteliers',
        p: 'When selecting reservation software, independent and boutique operators should prioritize fast user onboarding, reliable overbooking prevention, mobile accessibility, and revenue ownership over complex enterprise bloat.'
      }
    ],
    faqs: [
      {
        q: 'How does a hotel reservation system prevent double bookings during peak check-in hours?',
        a: 'By utilizing an instant inventory locking mechanism. The moment a booking is made via an OTA, direct website, or front-desk walk-in, the system marks the room unavailable across all other channels within seconds.'
      },
      {
        q: 'Can hotel managers access reservation calendars remotely on mobile devices?',
        a: 'Yes. Modern cloud-native reservation systems provide secure web-based access across desktops, tablets, and smartphones, allowing owners and managers to monitor live occupancy and arrivals from anywhere.'
      },
      {
        q: 'What is the difference between a Central Reservation System (CRS) and a lightweight hotel PMS?',
        a: 'Traditional CRSs were built for large enterprise hotel chains with multi-property call centers. Modern lightweight hotel platforms combine CRS channel distribution and PMS front-desk matrix functionality into a single affordable browser dashboard for independent properties.'
      }
    ]
  }
];

export function getGuideBySlug(slug) {
  return GUIDES.find(g => g.slug === slug);
}
