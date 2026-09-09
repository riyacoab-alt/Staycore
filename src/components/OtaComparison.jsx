import React, { useState } from 'react';

export default function OtaComparison() {
  const [activeTab, setActiveTab] = useState('after');

  return (
    <div className="comparison-card">
      <div className="comparison-toggle">
        <button
          type="button"
          className={`comp-btn ${activeTab === 'after' ? 'active' : ''}`}
          onClick={() => setActiveTab('after')}
        >
          After: Staycore AI Feed
        </button>
        <button
          type="button"
          className={`comp-btn ${activeTab === 'before' ? 'active' : ''}`}
          onClick={() => setActiveTab('before')}
        >
          Before: Messy Inbox
        </button>
      </div>

      {activeTab === 'after' ? (
        <div className="unified-sim">
          <div className="unified-sim-header">
            <span>✓ 100% Parsed & Unified Feed</span>
            <span>Auto-Assigned</span>
          </div>
          <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div className="ota-feed-item" style={{ borderLeft: '3px solid var(--accent-sage)' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span className="ota-badge badge-mmt">MakeMyTrip</span>
                  <strong style={{ color: '#fff' }}>Priya N.</strong>
                </div>
                <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', marginTop: 4 }}>
                  Deluxe Ocean #204 • Check-in Today 2:00 PM • Paid $320
                </div>
              </div>
              <span className="room-status-indicator status-ready">Room Ready</span>
            </div>

            <div className="ota-feed-item" style={{ borderLeft: '3px solid var(--accent-sage)' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span className="ota-badge badge-goibibo">Goibibo</span>
                  <strong style={{ color: '#fff' }}>Karan Sharma</strong>
                </div>
                <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', marginTop: 4 }}>
                  Exec Suite #102 • 2 Nights • Meal Plan Included
                </div>
              </div>
              <span className="room-status-indicator status-ready">Synced</span>
            </div>

            <div className="ota-feed-item" style={{ borderLeft: '3px solid var(--accent-sage)' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span className="ota-badge badge-booking">Booking.com</span>
                  <strong style={{ color: '#fff' }}>Elena Rostova</strong>
                </div>
                <div style={{ fontSize: '0.76rem', color: 'var(--text-muted)', marginTop: 4 }}>
                  Villa Suite #301 • Tomorrow Check-in
                </div>
              </div>
              <span className="room-status-indicator status-ready">Synced</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="inbox-sim">
          <div className="inbox-sim-header">
            <span>⚠ hotel-reservations@gmail.com (17 Unread)</span>
            <span>Easy to Miss</span>
          </div>
          <div className="inbox-sim-rows">
            <div className="inbox-sim-row unread">
              <div>
                <span className="unread-badge">NEW</span>
                <strong>partner-alert@goibibo.com</strong>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                  Booking ID #GOB938201 Confirmation (Action Required)
                </div>
              </div>
              <span>10:41 AM</span>
            </div>
            <div className="inbox-sim-row unread">
              <div>
                <span className="unread-badge">NEW</span>
                <strong>extranet@makemytrip.com</strong>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                  Reservation Update: Guest requested late checkout
                </div>
              </div>
              <span>09:15 AM</span>
            </div>
            <div className="inbox-sim-row">
              <div>
                <strong>noreply@booking.com</strong>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                  Modified dates for confirmation #382910
                </div>
              </div>
              <span>Yesterday</span>
            </div>
          </div>
        </div>
      )}

      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: 14 }}>
        Staycore reads OTA confirmation emails via secure AI webhook, assigning rooms in 0.8 seconds.
      </p>
    </div>
  );
}
