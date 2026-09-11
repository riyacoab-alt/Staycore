import React, { useState } from 'react';
import { Calendar as CalendarIcon, CheckCircle2 } from 'lucide-react';

const DAYS = [
  { day: 28, disabled: true },
  { day: 29, disabled: true },
  { day: 30, disabled: true },
  { day: 1, label: 'Thursday, Oct 1' },
  { day: 2, label: 'Friday, Oct 2' },
  { day: 3, label: 'Saturday, Oct 3' },
  { day: 4, label: 'Sunday, Oct 4' },
  { day: 5, label: 'Monday, Oct 5' },
  { day: 6, label: 'Tuesday, Oct 6' },
  { day: 7, label: 'Wednesday, Oct 7' },
  { day: 8, label: 'Thursday, Oct 8' },
  { day: 9, label: 'Friday, Oct 9' },
  { day: 10, label: 'Saturday, Oct 10' },
  { day: 11, label: 'Sunday, Oct 11' },
  { day: 12, label: 'Monday, Oct 12' },
  { day: 13, label: 'Tuesday, Oct 13' },
  { day: 14, label: 'Wednesday, Oct 14' },
  { day: 15, label: 'Thursday, Oct 15' },
  { day: 16, label: 'Friday, Oct 16' },
  { day: 17, label: 'Saturday, Oct 17' },
  { day: 18, label: 'Sunday, Oct 18' },
];

const TIME_SLOTS = [
  '10:00 AM – 10:25 AM',
  '11:30 AM – 11:55 AM',
  '02:00 PM – 02:25 PM',
  '03:30 PM – 03:55 PM',
  '05:00 PM – 05:25 PM',
];

export default function DemoBookingWidget({ onToast }) {
  const [selectedDate, setSelectedDate] = useState('Wednesday, Oct 7');
  const [selectedTime, setSelectedTime] = useState('10:00 AM – 10:25 AM');
  const [formData, setFormData] = useState({
    name: '',
    hotel: '',
    phone: '',
    email: '',
    rooms: '',
    interest: 'full-webapp'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (onToast) {
      onToast('VIP Demo scheduled successfully!');
    }
  };

  return (
    <div className="demo-booking-widget">
      <div className="demo-split">
        {/* Left Side: Calendly Style Picker */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--accent-sage-soft)', border: '1px solid var(--accent-sage-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-sage-light)' }}>
              <CalendarIcon size={22} />
            </div>
            <div>
              <h4 style={{ color: '#fff', marginBottom: 2 }}>Select Date & Time</h4>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>25-minute interactive video session</span>
            </div>
          </div>

          <div className="calendar-header">
            <span>October 2026</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--accent-sage-light)' }}>Timezone: UTC+05:30 (IST)</span>
          </div>

          <div className="calendar-days-grid">
            <div className="cal-day-label">Mo</div>
            <div className="cal-day-label">Tu</div>
            <div className="cal-day-label">We</div>
            <div className="cal-day-label">Th</div>
            <div className="cal-day-label">Fr</div>
            <div className="cal-day-label">Sa</div>
            <div className="cal-day-label">Su</div>

            {DAYS.map((d, i) => (
              <button
                key={i}
                type="button"
                className={`cal-day-btn ${d.label === selectedDate ? 'selected' : ''}`}
                disabled={d.disabled}
                onClick={() => d.label && setSelectedDate(d.label)}
              >
                {d.day}
              </button>
            ))}
          </div>

          <div style={{ marginTop: 24 }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: 10, fontWeight: 500 }}>
              Available Slots for <strong style={{ color: '#fff' }}>{selectedDate}</strong>:
            </div>
            <div className="slot-list">
              {TIME_SLOTS.map((slot, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`slot-btn ${slot === selectedTime ? 'selected' : ''}`}
                  onClick={() => setSelectedTime(slot)}
                >
                  <span>{slot}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--accent-sage-light)' }}>Available</span>
                </button>
              ))}
            </div>
            <div style={{ marginTop: 14, fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Selected slot: <strong style={{ color: 'var(--accent-gold)' }}>{selectedTime}</strong>
            </div>
          </div>
        </div>

        {/* Right Side: Form / Confirmation */}
        <div>
          {isSubmitted ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(94, 129, 114, 0.2)', border: '1px solid var(--accent-sage-light)', color: 'var(--accent-sage-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <CheckCircle2 size={36} />
              </div>
              <h3 style={{ color: '#fff', marginBottom: 12, fontFamily: 'var(--font-heading)' }}>Demo Confirmed!</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 20 }}>
                Thank you, <strong>{formData.name || 'Valued Hotelier'}</strong>. Your personalized Staycore walkthrough for <strong>{formData.hotel || 'Your Property'}</strong> is reserved for:
              </p>
              <div style={{ display: 'inline-block', padding: '12px 24px', borderRadius: 9999, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--accent-gold-light)', fontWeight: 600, marginBottom: 24 }}>
                {selectedDate} at {selectedTime}
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: 28 }}>
                A calendar invitation and walkthrough link have been dispatched to <strong>{formData.email || 'your email'}</strong>. Built by COAB.
              </p>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => setIsSubmitted(false)}
              >
                Schedule Another Time
              </button>
            </div>
          ) : (
            <>
              <h4 style={{ color: '#fff', marginBottom: 6 }}>Hotel Information</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: 24 }}>
                Enter your details to generate your personalized room simulation.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="e.g. Rachel Adams"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Hotel / Property Name *</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="e.g. Azure Cliff Boutique Resort"
                    value={formData.hotel}
                    onChange={(e) => setFormData({ ...formData, hotel: e.target.value })}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      className="form-control"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      required
                      className="form-control"
                      placeholder="rachel@azurehotel.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Number of Rooms / Keys *</label>
                  <select
                    required
                    className="form-control"
                    value={formData.rooms}
                    onChange={(e) => setFormData({ ...formData, rooms: e.target.value })}
                  >
                    <option value="" disabled>Select room range</option>
                    <option value="1-15">1 – 15 Rooms (Boutique / Homestay)</option>
                    <option value="16-40">16 – 40 Rooms (Mid-sized Hotel)</option>
                    <option value="41-100">41 – 100 Rooms (Resort / Large Hotel)</option>
                    <option value="100+">100+ Rooms / Multi-Property Group</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Primary Interest</label>
                  <select
                    className="form-control"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  >
                    <option value="full-webapp">Full Staycore Webapp (PMS + OTA + Website)</option>
                    <option value="website-only">Website-Only Plan (Direct Bookings & Simple Portal)</option>
                    <option value="ota-aggregation">AI OTA Aggregator & Email Syncing</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: 10 }}>
                  Confirm VIP Demo Walkthrough
                </button>

                <p style={{ fontSize: '0.76rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: 16 }}>
                  🔒 We respect your privacy. No spam. You will receive an instant Google Calendar invitation.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
