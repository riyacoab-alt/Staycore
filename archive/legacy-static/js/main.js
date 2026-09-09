/**
 * STAYCORE — Main Interactive Engine
 * Luxury Hospitality Management Platform
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initScrollReveal();
  initRoomGridInteractivity();
  initComparisonToggle();
  initPricingCalculator();
  initDemoSlotPicker();
  initFaqAccordion();
});

/* --------------------------------------------------
   1. Navbar Scroll Effect
-------------------------------------------------- */
function initNavbar() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* --------------------------------------------------
   2. Mobile Drawer Menu
-------------------------------------------------- */
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const backdrop = document.querySelector('.mobile-nav-backdrop');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuToggle || !mobileNav) return;

  const toggleDrawer = () => {
    const isOpen = mobileNav.classList.contains('open');
    if (isOpen) {
      mobileNav.classList.remove('open');
      backdrop?.classList.remove('visible');
      document.body.style.overflow = '';
    } else {
      mobileNav.classList.add('open');
      backdrop?.classList.add('visible');
      document.body.style.overflow = 'hidden';
    }
  };

  menuToggle.addEventListener('click', toggleDrawer);
  backdrop?.addEventListener('click', toggleDrawer);
  mobileLinks.forEach(link => link.addEventListener('click', toggleDrawer));
}

/* --------------------------------------------------
   3. Scroll Reveal Animation (IntersectionObserver)
-------------------------------------------------- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (!revealElements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealElements.forEach((el) => observer.observe(el));
}

/* --------------------------------------------------
   4. Interactive Room Status Grid (Click to cycle status)
-------------------------------------------------- */
function initRoomGridInteractivity() {
  const roomCells = document.querySelectorAll('.room-cell');
  if (!roomCells.length) return;

  const statuses = [
    { key: 'ready', label: 'Ready', class: 'status-ready' },
    { key: 'occupied', label: 'Occupied', class: 'status-occupied' },
    { key: 'cleaning', label: 'Cleaning', class: 'status-cleaning' },
    { key: 'maintenance', label: 'Maintenance', class: 'status-maintenance' }
  ];

  roomCells.forEach((cell) => {
    cell.addEventListener('click', () => {
      const indicator = cell.querySelector('.room-status-indicator');
      if (!indicator) return;

      const currentText = indicator.innerText.trim();
      let currentIndex = statuses.findIndex(s => s.label.toLowerCase() === currentText.toLowerCase());
      if (currentIndex === -1) currentIndex = 0;

      const nextStatus = statuses[(currentIndex + 1) % statuses.length];

      // Remove all status classes
      statuses.forEach(s => indicator.classList.remove(s.class));
      // Add next
      indicator.classList.add(nextStatus.class);
      indicator.innerText = nextStatus.label;

      // Update room counter if present
      updateRoomStats();

      showToast(`Room ${cell.querySelector('.room-num')?.innerText || ''} marked as ${nextStatus.label}`);
    });
  });

  function updateRoomStats() {
    const occupiedCount = document.querySelectorAll('.room-status-indicator.status-occupied').length;
    const totalRooms = roomCells.length;
    const occupiedEl = document.getElementById('stat-occupied-count');
    const occupancyRateEl = document.getElementById('stat-occupancy-rate');

    if (occupiedEl) occupiedEl.innerText = occupiedCount;
    if (occupancyRateEl && totalRooms > 0) {
      const pct = Math.round((occupiedCount / totalRooms) * 100);
      occupancyRateEl.innerText = `${pct}%`;
    }
  }
}

/* --------------------------------------------------
   5. Interactive Before & After OTA Comparison Switcher
-------------------------------------------------- */
function initComparisonToggle() {
  const compBtns = document.querySelectorAll('.comp-btn');
  const compViews = document.querySelectorAll('.comp-view');

  if (!compBtns.length || !compViews.length) return;

  compBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetViewId = btn.getAttribute('data-view');

      compBtns.forEach(b => b.classList.remove('active'));
      compViews.forEach(v => v.classList.remove('active'));

      btn.classList.add('active');
      const activeView = document.getElementById(targetViewId);
      if (activeView) activeView.classList.add('active');
    });
  });
}

/* --------------------------------------------------
   6. Pricing & Commission Savings Calculator
-------------------------------------------------- */
function initPricingCalculator() {
  const roomSlider = document.getElementById('room-slider');
  const roomCountVal = document.getElementById('room-count-val');
  const directBookingEstimate = document.getElementById('calc-direct-bookings');
  const otaSavingsVal = document.getElementById('calc-ota-savings');
  const recommendedTier = document.getElementById('calc-recommended-tier');

  if (!roomSlider) return;

  function recalculate() {
    const rooms = parseInt(roomSlider.value, 10);
    if (roomCountVal) roomCountVal.innerText = `${rooms} Rooms`;

    // Average 30 days * 70% occupancy = ~21 room-nights per room / month
    // Direct bookings estimated at 35% with Staycore website + SEO/AEO
    const monthlyBookings = Math.round(rooms * 14);
    // Average booking value $140, OTA commission 18% = ~$25.20 saved per direct booking
    const directBookings = Math.round(monthlyBookings * 0.38);
    const savings = directBookings * 28;

    if (directBookingEstimate) directBookingEstimate.innerText = `${directBookings} / mo`;
    if (otaSavingsVal) otaSavingsVal.innerText = `$${savings.toLocaleString()} / mo`;
    if (recommendedTier) {
      if (rooms <= 15) {
        recommendedTier.innerText = 'Website-Only or Essential PMS';
      } else if (rooms <= 50) {
        recommendedTier.innerText = 'Full Staycore Webapp';
      } else {
        recommendedTier.innerText = 'Full Staycore Multi-Property Enterprise';
      }
    }
  }

  roomSlider.addEventListener('input', recalculate);
  recalculate();
}

/* --------------------------------------------------
   7. Calendly-Style Demo Slot Picker & Form
-------------------------------------------------- */
function initDemoSlotPicker() {
  const dayBtns = document.querySelectorAll('.cal-day-btn');
  const slotBtns = document.querySelectorAll('.slot-btn');
  const selectedDateEl = document.getElementById('selected-demo-date');
  const selectedTimeEl = document.getElementById('selected-demo-time');
  const demoForm = document.getElementById('demo-booking-form');

  dayBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      dayBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      const dateText = btn.getAttribute('data-date') || btn.innerText;
      if (selectedDateEl) selectedDateEl.innerText = dateText;
    });
  });

  slotBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      slotBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      const timeText = btn.getAttribute('data-time') || btn.innerText;
      if (selectedTimeEl) selectedTimeEl.innerText = timeText;
    });
  });

  if (demoForm) {
    demoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const hotelName = document.getElementById('demo-hotel-name')?.value || 'Your Hotel';
      const guestName = document.getElementById('demo-guest-name')?.value || 'Valued Partner';
      const selectedDate = selectedDateEl?.innerText || 'Next Available Date';
      const selectedTime = selectedTimeEl?.innerText || '10:00 AM';

      demoForm.innerHTML = `
        <div style="text-align: center; padding: 40px 20px;">
          <div style="width: 64px; height: 64px; border-radius: 50%; background: rgba(94, 129, 114, 0.2); border: 1px solid var(--accent-sage-light); color: var(--accent-sage-light); display: flex; align-items: center; justify-content: center; font-size: 2rem; margin: 0 auto 20px;">✓</div>
          <h3 style="color: #fff; margin-bottom: 12px; font-family: var(--font-serif);">Demo Confirmed!</h3>
          <p style="color: var(--text-secondary); margin-bottom: 20px;">
            Thank you, <strong>${guestName}</strong>. Your personalized Staycore walkthrough for <strong>${hotelName}</strong> is reserved for:
          </p>
          <div style="display: inline-block; padding: 12px 24px; border-radius: 9999px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); color: var(--accent-gold-light); font-weight: 600; margin-bottom: 24px;">
            ${selectedDate} at ${selectedTime}
          </div>
          <p style="font-size: 0.88rem; color: var(--text-muted);">
            A calendar invitation and demo link have been dispatched. Built by COAB.
          </p>
        </div>
      `;

      showToast('VIP Demo scheduled successfully!');
    });
  }
}

/* --------------------------------------------------
   8. FAQ Collapsible Accordion
-------------------------------------------------- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (!questionBtn || !answer) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items
      faqItems.forEach((other) => {
        other.classList.remove('active');
        const otherAns = other.querySelector('.faq-answer');
        if (otherAns) otherAns.style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 32 + 'px';
      }
    });
  });
}

/* --------------------------------------------------
   Global Toast Notification Utility
-------------------------------------------------- */
function showToast(message) {
  let toast = document.querySelector('.toast-notice');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:var(--accent-sage-light); box-shadow:0 0 8px var(--accent-sage-light);"></span>
    <span>${message}</span>
  `;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}
