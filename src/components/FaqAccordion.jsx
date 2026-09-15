import React, { useState } from 'react';

export const FAQS = [
  {
    q: 'Can I switch plans later?',
    a: 'Yes, absolutely. Many hotels start with the Website-Only Plan to build their online brand and take direct bookings. When you are ready to automate your OTA email confirmations and manage your room inventory in real-time, upgrading to the Full Staycore Webapp takes less than 24 hours with zero disruption.'
  },
  {
    q: 'Do you take a commission on direct bookings?',
    a: 'No commission — that’s the whole point. You keep 100% of your guest room revenue on all direct bookings made through your custom-domain website. Standard payment processing fees from your merchant gateway (e.g. Stripe or Razorpay) apply directly to your account.'
  },
  {
    q: 'How does onboarding and property setup work?',
    a: 'Our engineering team handles end-to-end property setup: custom domain configuration, bespoke hotel website design, SEO & search optimization, room cataloging, OTA connection, and staff walkthroughs. Everything is tailored directly to your property so your team is up and running smoothly.'
  },
  {
    q: 'Which OTAs does Staycore support?',
    a: 'Staycore’s AI parser currently supports Goibibo, MakeMyTrip, Booking.com, Agoda, and Expedia, with automated detection for cancellation notices, booking modifications, and guest requests.'
  },
  {
    q: 'Does my staff need technical knowledge to run Staycore?',
    a: 'None at all. Staycore was designed from the ground up to eliminate complexity. If your staff can use WhatsApp or send an email, they can operate the Staycore room matrix and status grid with ease.'
  }
];

export default function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => {
    setOpenIdx(prev => (prev === idx ? null : idx));
  };

  return (
    <div className="faq-list">
      {FAQS.map((faq, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div key={idx} className={`faq-item ${isOpen ? 'active' : ''}`}>
            <button
              type="button"
              className="faq-question"
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
            >
              <span>{faq.q}</span>
              <span className="faq-icon" style={{ transform: isOpen ? 'rotate(45deg)' : 'none' }}>
                +
              </span>
            </button>
            {isOpen && (
              <div className="faq-answer">
                {faq.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
