import React, { useState } from 'react';
import { Building2, Layers, Activity } from 'lucide-react';

const STATUS_CYCLE = [
  { key: 'ready', label: 'Ready', class: 'status-ready' },
  { key: 'occupied', label: 'Occupied', class: 'status-occupied' },
  { key: 'cleaning', label: 'Cleaning', class: 'status-cleaning' },
  { key: 'maintenance', label: 'Maintenance', class: 'status-maintenance' }
];

const INITIAL_ROOMS = [
  { id: '101', name: 'Room 101', cat: 'Deluxe Suite', status: 'occupied' },
  { id: '102', name: 'Room 102', cat: 'Executive King', status: 'ready' },
  { id: '103', name: 'Room 103', cat: 'Premier Twin', status: 'cleaning' },
  { id: '104', name: 'Room 104', cat: 'Deluxe Suite', status: 'occupied' },
  { id: '201', name: 'Room 201', cat: 'Penthouse Villa', status: 'occupied' },
  { id: '202', name: 'Room 202', cat: 'Executive King', status: 'ready' },
  { id: '203', name: 'Room 203', cat: 'Deluxe Suite', status: 'maintenance' },
  { id: '204', name: 'Room 204', cat: 'Sky Suite', status: 'occupied' },
];

export default function HeroDashboardPreview({ onToast }) {
  const [rooms, setRooms] = useState(INITIAL_ROOMS);

  const cycleRoomStatus = (roomId) => {
    setRooms(prev => prev.map(room => {
      if (room.id !== roomId) return room;
      const currentIndex = STATUS_CYCLE.findIndex(s => s.key === room.status);
      const nextStatus = STATUS_CYCLE[(currentIndex + 1) % STATUS_CYCLE.length];
      if (onToast) {
        onToast(`${room.name} marked as ${nextStatus.label}`);
      }
      return { ...room, status: nextStatus.key };
    }));
  };

  const occupiedCount = rooms.filter(r => r.status === 'occupied').length;
  const occupancyRate = Math.round((occupiedCount / rooms.length) * 100);
  const readyCount = rooms.filter(r => r.status === 'ready').length;

  return (
    <div className="hero-dashboard-preview">
      <div className="dashboard-frame">
        {/* Top bar */}
        <div className="dashboard-topbar">
          <div className="dash-window-dots">
            <span /><span /><span />
          </div>
          <div className="dash-hotel-tag">
            <Building2 size={14} />
            <span>The Grand Obsidian Hotel & Spa</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>(42 Keys)</span>
          </div>
          <div className="dash-live-pulse">
            <span>Live Sync Active</span>
          </div>
        </div>

        <div className="dashboard-body">
          {/* Metrics Row */}
          <div className="metrics-row">
            <div className="metric-box">
              <div className="metric-label">Occupancy Rate</div>
              <div className="metric-val">{occupancyRate}%</div>
              <div className="metric-sub">▲ +12% vs last week</div>
            </div>
            <div className="metric-box">
              <div className="metric-label">Live Occupied Rooms</div>
              <div className="metric-val">{occupiedCount} <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>/ {rooms.length}</span></div>
              <div className="metric-sub" style={{ color: 'var(--status-ready)' }}>
                {readyCount} keys ready for walk-ins
              </div>
            </div>
            <div className="metric-box">
              <div className="metric-label">Direct vs OTA Share</div>
              <div className="metric-val">44% <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold-light)' }}>Direct</span></div>
              <div className="metric-sub" style={{ color: 'var(--accent-gold)' }}>$2,480 saved in fees</div>
            </div>
            <div className="metric-box">
              <div className="metric-label">AI Parsed Bookings</div>
              <div className="metric-val">100%</div>
              <div className="metric-sub" style={{ color: 'var(--accent-sage-light)' }}>0 missed reservations</div>
            </div>
          </div>

          {/* Main Grid Split */}
          <div className="dash-split-grid">
            {/* Left: Interactive Room Matrix */}
            <div className="dash-panel">
              <div className="dash-panel-head">
                <div className="dash-panel-title">
                  <Layers size={16} />
                  <span>Live Room Matrix (Click room to toggle status)</span>
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Floor 1 - 2</span>
              </div>

              <div className="rooms-mock-grid">
                {rooms.map(room => {
                  const currentStatus = STATUS_CYCLE.find(s => s.key === room.status) || STATUS_CYCLE[0];
                  return (
                    <div
                      key={room.id}
                      className="room-cell"
                      onClick={() => cycleRoomStatus(room.id)}
                      title="Click to cycle status"
                    >
                      <div className="room-num">{room.name}</div>
                      <div className="room-cat">{room.cat}</div>
                      <span className={`room-status-indicator ${currentStatus.class}`}>
                        {currentStatus.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: AI Ingested OTA Feed */}
            <div className="dash-panel">
              <div className="dash-panel-head">
                <div className="dash-panel-title">
                  <Activity size={16} />
                  <span>Unified Feed (AI Aggregated)</span>
                </div>
                <span style={{ fontSize: '0.72rem', color: 'var(--accent-sage-light)' }}>Instant Push</span>
              </div>

              <div className="ota-feed-list">
                <div className="ota-feed-item">
                  <div className="ota-feed-left">
                    <span className="ota-badge badge-direct">Direct</span>
                    <div>
                      <div className="ota-guest-name">Alexander Wright</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Penthouse • 3 Nights • $940</div>
                    </div>
                  </div>
                  <div className="ota-feed-right">Just now</div>
                </div>

                <div className="ota-feed-item">
                  <div className="ota-feed-left">
                    <span className="ota-badge badge-mmt">MakeMyTrip</span>
                    <div>
                      <div className="ota-guest-name">Rohit Malhotra</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Exec King • 2 Nights • Room 102</div>
                    </div>
                  </div>
                  <div className="ota-feed-right">4m ago</div>
                </div>

                <div className="ota-feed-item">
                  <div className="ota-feed-left">
                    <span className="ota-badge badge-goibibo">Goibibo</span>
                    <div>
                      <div className="ota-guest-name">Priya Sundaram</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Deluxe Suite • Auto-assigned 101</div>
                    </div>
                  </div>
                  <div className="ota-feed-right">18m ago</div>
                </div>

                <div className="ota-feed-item">
                  <div className="ota-feed-left">
                    <span className="ota-badge badge-booking">Booking.com</span>
                    <div>
                      <div className="ota-guest-name">Marcus Vance</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Sky Suite • Paid in Advance</div>
                    </div>
                  </div>
                  <div className="ota-feed-right">42m ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
