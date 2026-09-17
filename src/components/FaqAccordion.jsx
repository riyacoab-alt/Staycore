import React, { useState } from 'react';
import { HOME_FAQS } from '../data/seoData';

export const FAQS = HOME_FAQS;

/**
 * Accessible, Crawlable FAQ Accordion Component
 * Keeps all questions and answers rendered in the DOM for search engines and AI parsers.
 * First item is open by default for immediate answer accessibility.
 *
 * @param {{ faqs?: Array<{q: string, a: string}> }} props
 */
export default function FaqAccordion({ faqs = HOME_FAQS }) {
  // First item open by default for instant answer visibility
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(prev => (prev === idx ? null : idx));
  };

  return (
    <div className="faq-list" role="region" aria-label="Frequently Asked Questions">
      {faqs.map((faq, idx) => {
        const isOpen = openIdx === idx;
        const qId = `faq-q-${idx}`;
        const aId = `faq-a-${idx}`;

        return (
          <div key={idx} className={`faq-item ${isOpen ? 'active' : ''}`} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 style={{ margin: 0, fontSize: 'inherit', fontWeight: 'inherit' }}>
              <button
                type="button"
                id={qId}
                className="faq-question"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                aria-controls={aId}
              >
                <span itemProp="name">{faq.q}</span>
                <span className="faq-icon" style={{ transform: isOpen ? 'rotate(45deg)' : 'none' }} aria-hidden="true">
                  +
                </span>
              </button>
            </h3>
            <div
              id={aId}
              role="region"
              aria-labelledby={qId}
              className="faq-answer"
              style={{ display: isOpen ? 'block' : 'none' }}
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <div itemProp="text">
                {faq.a}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
