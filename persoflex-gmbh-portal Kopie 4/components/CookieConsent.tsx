import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Cookie, X, Settings, Check } from 'lucide-react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const COOKIE_CONSENT_KEY = 'persoflex_cookie_consent';
const COOKIE_PREFERENCES_KEY = 'persoflex_cookie_preferences';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Immer aktiviert
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Pruefen ob bereits Consent gegeben wurde
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Kurze Verzoegerung fuer bessere UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    } else {
      // Gespeicherte Praeferenzen laden
      const savedPrefs = localStorage.getItem(COOKIE_PREFERENCES_KEY);
      if (savedPrefs) {
        setPreferences(JSON.parse(savedPrefs));
      }
    }
  }, []);

  const saveConsent = (accepted: boolean, prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, accepted ? 'accepted' : 'declined');
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(prefs));
    setIsVisible(false);
    
    // Hier koennen Sie Analytics/Marketing Scripts aktivieren/deaktivieren
    if (prefs.analytics) {
      // Google Analytics oder andere Analytics aktivieren
      console.log('[CookieConsent] Analytics aktiviert');
    }
    if (prefs.marketing) {
      // Marketing Cookies aktivieren
      console.log('[CookieConsent] Marketing aktiviert');
    }
  };

  const acceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true };
    setPreferences(allAccepted);
    saveConsent(true, allAccepted);
  };

  const acceptNecessaryOnly = () => {
    const necessaryOnly = { necessary: true, analytics: false, marketing: false };
    setPreferences(necessaryOnly);
    saveConsent(true, necessaryOnly);
  };

  const saveCustomPreferences = () => {
    saveConsent(true, preferences);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-[9998]" />
      
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          
          {/* Header */}
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <Cookie className="w-5 h-5 text-orange-500" />
              </div>
              <h2 className="text-lg font-bold text-gray-900">Cookie-Einstellungen</h2>
            </div>
            <button
              onClick={acceptNecessaryOnly}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Schliessen"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="px-6 py-5">
            {!showSettings ? (
              <>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
                  Einige Cookies sind für den Betrieb der Website notwendig, während andere uns helfen, 
                  die Website zu verbessern und Ihnen personalisierte Inhalte anzuzeigen.
                </p>
                <p className="text-gray-500 text-xs mb-4">
                  Weitere Informationen finden Sie in unserer{' '}
                  <NavLink to="/datenschutz" className="text-orange-500 hover:underline">
                    Datenschutzerklärung
                  </NavLink>.
                </p>
              </>
            ) : (
              <div className="space-y-4 mb-4">
                {/* Notwendige Cookies */}
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="font-semibold text-gray-900">Notwendige Cookies</span>
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded">Immer aktiv</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Diese Cookies sind für den Betrieb der Website unbedingt erforderlich und können nicht deaktiviert werden.
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">Analyse-Cookies</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                    </label>
                  </div>
                  <p className="text-xs text-gray-600">
                    Helfen uns zu verstehen, wie Besucher mit der Website interagieren, und ermöglichen uns, die Nutzererfahrung zu verbessern.
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">Marketing-Cookies</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                    </label>
                  </div>
                  <p className="text-xs text-gray-600">
                    Werden verwendet, um Besuchern relevante Werbung und Marketing-Kampagnen anzuzeigen.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Actions — flex-wrap for very small screens */}
          <div className="px-4 sm:px-6 py-4 bg-gray-50 border-t border-gray-200 flex flex-wrap sm:flex-nowrap gap-2 sm:gap-3">
            {!showSettings ? (
              <>
                <button
                  onClick={() => setShowSettings(true)}
                  className="flex-1 min-w-[120px] px-4 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                >
                  <Settings className="w-4 h-4" />
                  Einstellungen
                </button>
                <button
                  onClick={acceptNecessaryOnly}
                  className="flex-1 min-w-[120px] px-4 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors"
                >
                  Nur notwendige
                </button>
                <button
                  onClick={acceptAll}
                  className="flex-1 min-w-[120px] px-4 py-3 text-sm font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600 active:bg-orange-700 transition-colors"
                >
                  Alle akzeptieren
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setShowSettings(false)}
                  className="flex-1 min-w-[120px] px-4 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors"
                >
                  Zurueck
                </button>
                <button
                  onClick={saveCustomPreferences}
                  className="flex-1 min-w-[120px] px-4 py-3 text-sm font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600 active:bg-orange-700 transition-colors"
                >
                  Auswahl speichern
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CookieConsent;
