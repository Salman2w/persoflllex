import React from 'react';

export const Impressum: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-[100px] pb-20 text-gray-800">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-black mb-8 pb-4 border-b border-gray-200">Impressum</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-2">Angaben gemäß § 5 TMG</h2>
            <p className="leading-relaxed">
              <strong>PersoFlex GmbH</strong><br />
              Kiehnlestraße 4<br />
              75172 Pforzheim
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">Vertreten durch</h2>
            <p className="leading-relaxed">
              Arina Karakus
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">Kontakt</h2>
            <p className="leading-relaxed">
              Telefon: 07231 6039493<br />
              E-Mail: info@persoflex-gmbh.de<br />
              Web: www.persoflex-gmbh.de
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">Registereintrag</h2>
            <p className="leading-relaxed">
              Eintragung im Handelsregister.<br />
              Registergericht: Mannheim<br />
              Registernummer: HRB 755048
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">Umsatzsteuer-ID</h2>
            <p className="leading-relaxed">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE456879708
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">Aufsichtsbehörde</h2>
            <p className="leading-relaxed">
              Bundesagentur für Arbeit<br />
              Richard-Wagner-Platz 5<br />
              90443 Nürnberg
            </p>
            <p className="mt-2 text-sm text-gray-500">
               Erlaubnis zur gewerbsmäßigen Arbeitnehmerüberlassung gemäß § 1 AÜG.
            </p>
          </section>

          <section className="bg-gray-50 p-6 rounded text-sm text-gray-600 mt-8">
            <h3 className="font-bold mb-2">Streitschlichtung</h3>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              https://ec.europa.eu/consumers/odr.<br/>
              Unsere E-Mail-Adresse finden Sie oben im Impressum.<br/>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};