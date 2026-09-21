import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';

/**
 * Standard Luxury Smooth Scroll & Card Animation Hook
 * - Butter-smooth momentum scrolling (Lenis)
 * - 3D Card mouse tracking spotlight & gentle tilt
 * - Viewport scroll reveal observer for cards
 */
export default function useSmoothScrollAndCards() {
  const location = useLocation();

  // 1. Lenis Smooth Scroll Setup
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.8
    });

    let animationFrameId;

    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    // Smooth scroll handler for both raw hash anchors and same-page router links
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      // Case 1: Pure hash link on current page (e.g. href="#why-coab" or href="#")
      if (href.startsWith('#')) {
        if (href === '#') {
          e.preventDefault();
          lenis.scrollTo(0, { duration: 1.0 });
          return;
        }
        const targetEl = document.querySelector(href);
        if (targetEl) {
          e.preventDefault();
          lenis.scrollTo(targetEl, { offset: -90, duration: 1.1 });
        }
        return;
      }

      // Case 2: Router link with hash matching current path (e.g. href="/about#why-coab" while on "/about")
      try {
        const url = new URL(anchor.href, window.location.origin);
        const currentPath = window.location.pathname;

        if (url.pathname === currentPath) {
          if (url.hash) {
            const targetEl = document.querySelector(url.hash);
            if (targetEl) {
              e.preventDefault();
              window.history.pushState(null, '', url.pathname + url.hash);
              lenis.scrollTo(targetEl, { offset: -90, duration: 1.1 });
            }
          } else {
            // Clicking same page link without hash (e.g. clicking "About" while already on "/about#why-coab")
            e.preventDefault();
            window.history.pushState(null, '', url.pathname);
            lenis.scrollTo(0, { duration: 0.9 });
          }
        }
      } catch (err) {
        // Fallback for relative or malformed URLs
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Expose lenis globally for external controls
    window.__lenis = lenis;

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  // Route & Hash change: scroll to target hash or top
  useEffect(() => {
    const scrollToTarget = () => {
      if (location.hash) {
        const targetEl = document.querySelector(location.hash);
        if (targetEl) {
          if (window.__lenis) {
            window.__lenis.scrollTo(targetEl, { offset: -90, duration: 1.1 });
          } else {
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }
          return;
        }
      }

      // If no hash or element not found, scroll to top
      if (window.__lenis) {
        window.__lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    };

    // Small timeout to allow DOM and page content to mount
    const timer = setTimeout(scrollToTarget, 60);
    return () => clearTimeout(timer);
  }, [location.pathname, location.hash, location.key]);

  // 2. Interactive 3D Card Spotlight & Tilt
  useEffect(() => {
    const cardSelectors = '.card-glass, .plan-card, .docked-card, .stat-item, .cinematic-card';
    const cards = document.querySelectorAll(cardSelectors);

    const handleMouseMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate tilt angles (-5 to +5 degrees max for subtle luxury feel)
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const tiltX = ((y - centerY) / centerY) * -4;
      const tiltY = ((x - centerX) / centerX) * 4;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
      card.style.setProperty('--tilt-x', `${tiltX.toFixed(2)}deg`);
      card.style.setProperty('--tilt-y', `${tiltY.toFixed(2)}deg`);
    };

    const handleMouseLeave = (e) => {
      const card = e.currentTarget;
      card.style.setProperty('--mouse-x', `-999px`);
      card.style.setProperty('--mouse-y', `-999px`);
      card.style.setProperty('--tilt-x', `0deg`);
      card.style.setProperty('--tilt-y', `0deg`);
    };

    cards.forEach((card) => {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [location.pathname]);

  // 3. Fallback Viewport Intersection Observer for Scroll Card Reveal
  useEffect(() => {
    const cardSelectors = '.card-glass, .plan-card, .docked-card, .stat-item, .feature-list-check li, .faq-item';
    const elements = document.querySelectorAll(cardSelectors);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    elements.forEach((el) => {
      el.classList.add('scroll-animated');
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [location.pathname]);
}
