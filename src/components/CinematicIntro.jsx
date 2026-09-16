import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import StaycoreLogo from './StaycoreLogo';

export const INTRO_CARDS = [
  {
    id: 'card-1',
    title: 'The Obsidian Grand',
    sub: 'Executive Penthouse Suite • 42 Keys • Live Room Matrix',
    image: '/assets/images/hotel-management-dashboard.webp',
    badge: 'Flagship Property'
  },
  {
    id: 'card-2',
    title: 'Alpine Mountain Villa',
    sub: 'Private Luxury Retreat • Direct Channel • 0% Commission',
    image: '/assets/images/hotel-room-availability-matrix.webp',
    badge: 'Direct Booking'
  },
  {
    id: 'card-3',
    title: 'The Amber Lounge & Bar',
    sub: 'Boutique Cocktail Lounge • Real-Time AI Ingestion Feed',
    image: '/assets/images/hotel-direct-booking-lounge.webp',
    badge: 'OTA Aggregated'
  },
  {
    id: 'card-4',
    title: 'Azure Cliff Residence',
    sub: 'Skyline Terrace Suite • 1-Tap Housekeeping Sync',
    image: '/assets/images/hotel-management-dashboard.webp',
    badge: 'Multi-Property'
  }
];

export default function CinematicIntro({ isIntroActive, onTransitionComplete, onReplay }) {
  // phase: 'grid' (initial 2x2 presentation) -> 'morphing' (continuous transition to hero) -> 'docked' (website active)
  const [phase, setPhase] = useState('grid');
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    if (!isIntroActive) {
      setPhase('docked');
      return;
    }

    setPhase('grid');

    // Automatically begin cinematic transition into website after 3.8s if user hasn't clicked
    const timer = setTimeout(() => {
      triggerTransition();
    }, 3800);

    return () => clearTimeout(timer);
  }, [isIntroActive]);

  const triggerTransition = () => {
    if (phase !== 'grid') return;
    setPhase('morphing');
    setTimeout(() => {
      setPhase('docked');
      if (onTransitionComplete) {
        onTransitionComplete();
      }
    }, 1100);
  };

  if (!isIntroActive && phase === 'docked') {
    return null;
  }

  return (
    <div className={`cinematic-wrapper ${phase}`}>
      {/* Background ambient lighting vignette */}
      <div className="cinematic-backdrop" />

      {/* Floating viewport framing the 2x2 grid */}
      <div className="cinematic-viewport">
        {/* Top bar control inside intro with official Staycore logo */}
        <div className="cinematic-top-controls">
          <div style={{ pointerEvents: 'none' }}>
            <StaycoreLogo size="sm" subtitle="PROPERTY MANAGEMENT" />
          </div>

          <button
            type="button"
            className="cinematic-enter-btn"
            onClick={triggerTransition}
          >
            <span>Enter Website</span>
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* 2x2 Grid of 4 Cards */}
        <div className="cinematic-grid-container" onClick={triggerTransition}>
          {INTRO_CARDS.map((card, index) => {
            const isHovered = hoveredCard === card.id;
            return (
              <div
                key={card.id}
                className={`cinematic-card card-${index + 1} ${isHovered ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <img src={card.image} alt={card.title} className="cinematic-card-img" />
                <div className="cinematic-card-gradient" />

                <div className="cinematic-card-content">
                  <span className="cinematic-card-pill">{card.badge}</span>
                  <h3 className="cinematic-card-title">{card.title}</h3>
                  <p className="cinematic-card-subtitle">{card.sub}</p>

                  <div className="cinematic-card-action">
                    <span>Explore Suite</span>
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom prompt indicator */}
        <div className="cinematic-bottom-prompt" onClick={triggerTransition}>
          <div className="prompt-pill">
            <span className="prompt-dot" />
            <span>Click any card to enter website</span>
            <ChevronDown size={14} className="prompt-chevron" />
          </div>
        </div>
      </div>
    </div>
  );
}
