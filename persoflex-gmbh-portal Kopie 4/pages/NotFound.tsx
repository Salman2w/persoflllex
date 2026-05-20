import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft } from 'lucide-react';
import { SEO } from '../components/SEO';

export const NotFound: React.FC = () => {
  useEffect(() => {
    // Set 404 status for SEO
    document.title = '404 - Seite nicht gefunden | PersoFlex GmbH';
  }, []);

  return (
    <>
      <SEO
        title="404 - Seite nicht gefunden | PersoFlex GmbH"
        description="Die gesuchte Seite wurde nicht gefunden. Kehren Sie zur Startseite zurück oder nutzen Sie unsere Navigation."
        noIndex={true}
      />
      
      <main className="min-h-screen bg-white flex items-center justify-center px-6 pt-32 pb-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Visual */}
          <div className="mb-8">
            <h1 className="text-[120px] md:text-[180px] font-black text-orange-500 leading-none">
              404
            </h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full" />
          </div>

          {/* Message */}
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Seite nicht gefunden
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Die von Ihnen gesuchte Seite existiert leider nicht oder wurde verschoben. 
            Lassen Sie uns gemeinsam den richtigen Weg finden.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-600 transition-all shadow-lg"
            >
              <Home size={20} />
              Zur Startseite
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:border-orange-400 hover:bg-orange-50 transition-all"
            >
              <ArrowLeft size={20} />
              Zurück
            </button>
          </div>

          {/* Quick Links */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
              <Search size={20} className="text-orange-500" />
              Beliebte Seiten
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <Link to="/jobs" className="px-4 py-3 bg-white rounded-lg text-gray-700 hover:text-orange-600 hover:shadow-md transition-all font-medium">
                Jobs
              </Link>
              <Link to="/fuer-bewerber" className="px-4 py-3 bg-white rounded-lg text-gray-700 hover:text-orange-600 hover:shadow-md transition-all font-medium">
                Für Bewerber
              </Link>
              <Link to="/unternehmen" className="px-4 py-3 bg-white rounded-lg text-gray-700 hover:text-orange-600 hover:shadow-md transition-all font-medium">
                Für Unternehmen
              </Link>
              <Link to="/ueber-uns" className="px-4 py-3 bg-white rounded-lg text-gray-700 hover:text-orange-600 hover:shadow-md transition-all font-medium">
                Über uns
              </Link>
              <Link to="/blog" className="px-4 py-3 bg-white rounded-lg text-gray-700 hover:text-orange-600 hover:shadow-md transition-all font-medium">
                Blog
              </Link>
              <Link to="/kontakt" className="px-4 py-3 bg-white rounded-lg text-gray-700 hover:text-orange-600 hover:shadow-md transition-all font-medium">
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
