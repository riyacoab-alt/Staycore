import React, { useState } from 'react';
import { HOME_FAQS } from '../data/seoData';

export const FAQS = HOME_FAQS;

/**
 * Reusable FAQ Accordion Component
 * Accepts page-specific FAQs to eliminate content duplication.
 *
 * @param {{ faqs?: Array<{q: string, a: string}> }} props
 */
export default function FaqAccordion({ faqs = HOME_FAQS }) {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => {
    setOpenIdx(prev => (prev === idx ? null : idx));
  };

  return (
    <div className="faq-list">
      {faqs.map((faq, idx) => {
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
