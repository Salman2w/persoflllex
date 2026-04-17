import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Komponente
 * Scrollt automatisch zum Seitenanfang bei jedem Routenwechsel
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll zum Seitenanfang mit sanfter Animation
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // 'instant' für sofortiges Scrollen, 'smooth' für Animation
    });
  }, [pathname]);

  return null;
}
