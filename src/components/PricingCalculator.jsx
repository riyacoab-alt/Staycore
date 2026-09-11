import React, { useState } from 'react';

export default function PricingCalculator() {
  const [rooms, setRooms] = useState(25);

  const monthlyBookings = Math.round(rooms * 14);
  const directBookings = Math.round(monthlyBookings * 0.38);
  const otaSavings = directBookings * 28;

  let recommendedTier = 'Full Staycore Webapp';
  if (rooms <= 15) {
    recommendedTier = 'Website-Only or Essential PMS';
  } else if (rooms > 50) {
    recommendedTier = 'Full Staycore Multi-Property Enterprise';
  }

  return (
    <div className="calculator-card">
      <div className="calc-slider-header">
        <span style={{ fontWeight: 600, color: '#fff', fontSize: '1.1rem' }}>Number of Rooms / Keys</span>
        <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', color: 'var(--accent-sage-light)', fontWeight: 700 }}>
          {rooms} Rooms
        </span>
      </div>

      <div className="calc-slider-wrap">
        <input
          type="range"
          className="calc-slider"
          min="5"
          max="150"
          value={rooms}
          onChange={(e) => setRooms(parseInt(e.target.value, 10))}
        />
      </div>

      <div className="calc-results-grid">
        <div className="calc-result-box">
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
            Estimated Direct Bookings
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 600, color: '#fff', marginTop: 8 }}>
            {directBookings} / mo
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: 4 }}>
            Via search & AI queries
          </div>
        </div>

        <div className="calc-result-box" style={{ border: '1px solid var(--accent-sage-border)', background: 'rgba(94,129,114,0.08)' }}>
          <div style={{ fontSize: '0.8rem', color: 'var(--accent-sage-light)', textTransform: 'uppercase', fontWeight: 600 }}>
            Est. OTA Commission Saved
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: 600, color: 'var(--status-ready)', marginTop: 8 }}>
            ${otaSavings.toLocaleString()} / mo
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: 4 }}>
            Retained directly by your hotel
          </div>
        </div>

        <div className="calc-result-box">
          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
            Recommended Setup
          </div>
          <div style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--accent-gold-light)', marginTop: 8 }}>
            {recommendedTier}
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: 4 }}>
            Scales with your keys
          </div>
        </div>
      </div>
    </div>
  );
}
