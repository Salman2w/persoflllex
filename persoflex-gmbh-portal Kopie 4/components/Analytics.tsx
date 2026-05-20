import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics Measurement ID
const GA_MEASUREMENT_ID = 'G-54EE1QK7FJ';

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}

/**
 * Analytics Component
 * 
 * Trackt automatisch alle Seitenwechsel in der SPA.
 * Muss einmal in der App.tsx eingebunden werden.
 * 
 * Beruecksichtigt Cookie-Consent:
 * - Prueft ob der Nutzer Analytics-Cookies akzeptiert hat
 * - Sendet nur Page Views wenn Zustimmung vorliegt
 */
export function Analytics() {
  const location = useLocation();

  useEffect(() => {
    // Pruefe Cookie-Consent
    const checkConsent = () => {
      try {
        const consent = localStorage.getItem('cookie-consent');
        if (consent) {
          const parsed = JSON.parse(consent);
          return parsed.analytics === true;
        }
      } catch {
        return false;
      }
      return false;
    };

    // Nur tracken wenn Zustimmung vorliegt
    if (checkConsent() && typeof window.gtag === 'function') {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }
  }, [location]);

  return null;
}

/**
 * Custom Event Tracking
 * 
 * Verwendung:
 * trackEvent('button_click', 'engagement', 'Jetzt bewerben Button');
 */
export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number
) {
  // Pruefe Cookie-Consent
  const checkConsent = () => {
    try {
      const consent = localStorage.getItem('cookie-consent');
      if (consent) {
        const parsed = JSON.parse(consent);
        return parsed.analytics === true;
      }
    } catch {
      return false;
    }
    return false;
  };

  if (checkConsent() && typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

/**
 * Conversion Tracking
 * 
 * Fuer wichtige Aktionen wie Bewerbungen oder Kontaktanfragen
 */
export function trackConversion(conversionLabel: string, value?: number) {
  const checkConsent = () => {
    try {
      const consent = localStorage.getItem('cookie-consent');
      if (consent) {
        const parsed = JSON.parse(consent);
        return parsed.analytics === true;
      }
    } catch {
      return false;
    }
    return false;
  };

  if (checkConsent() && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: `${GA_MEASUREMENT_ID}/${conversionLabel}`,
      value: value,
      currency: 'EUR',
    });
  }
}
