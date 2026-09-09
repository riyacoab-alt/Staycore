import React from 'react';

export default function DirectBookingPreview() {
  return (
    <div className="booking-engine-preview">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <div>
          <h4 style={{ fontSize: '1.1rem', color: '#fff' }}>yourhotel.com</h4>
          <span style={{ fontSize: '0.74rem', color: 'var(--accent-sage-light)' }}>Official Direct Booking Channel</span>
        </div>
        <span className="badge-pill" style={{ marginBottom: 0, fontSize: '0.72rem', background: 'rgba(199,173,133,0.15)', color: 'var(--accent-gold)' }}>
          0% COMMISSION
        </span>
      </div>

      {/* Booking Bar */}
      <div className="b-engine-bar">
        <div className="b-field">
          <div className="b-field-label">Check-In / Out</div>
          <div className="b-field-val">Oct 14 – Oct 18</div>
        </div>
        <div className="b-field">
          <div className="b-field-label">Guests</div>
          <div className="b-field-val">2 Adults, 1 Room</div>
        </div>
        <div className="b-field">
          <div className="b-field-label">Promo Applied</div>
          <div className="b-field-val" style={{ color: 'var(--accent-sage-light)' }}>STAYDIRECT (-15%)</div>
        </div>
        <button type="button" className="btn btn-primary btn-sm" style={{ alignSelf: 'center' }}>
          Check Rates
        </button>
      </div>

      {/* Room Option 1 */}
      <div className="b-room-card">
        <div className="b-room-info">
          <div className="b-room-name">Signature Obsidian King Suite</div>
          <div className="b-room-perks">Free High-speed Wi-Fi • Late Checkout • Welcome Drink</div>
        </div>
        <div className="b-room-pricing">
          <div className="b-rate">$195 <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 400 }}>/ night</span></div>
          <span className="b-save-tag">Direct savings: $42 vs OTA</span>
        </div>
      </div>

      {/* Room Option 2 */}
      <div className="b-room-card">
        <div className="b-room-info">
          <div className="b-room-name">Penthouse Villa with Private Terrace</div>
          <div className="b-room-perks">Mountain View • Daily Artisan Breakfast included</div>
        </div>
        <div className="b-room-pricing">
          <div className="b-rate">$340 <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 400 }}>/ night</span></div>
          <span className="b-save-tag">Direct savings: $78 vs OTA</span>
        </div>
      </div>

      <div style={{ marginTop: 16, padding: '12px 16px', borderRadius: 10, background: 'rgba(94,129,114,0.1)', border: '1px solid var(--accent-sage-border)', fontSize: '0.8rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
        ✨ Direct guests get instant confirmation SMS, personalized arrival note, and automated check-in keys.
      </div>
    </div>
  );
}
