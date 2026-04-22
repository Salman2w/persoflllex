import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Factory, Truck, Wrench, ArrowRight } from 'lucide-react';

/**
 * Regional SEO block — explicit, machine-readable content structure that
 * reinforces PersoFlex's local focus for both humans and answer engines.
 *
 * Keywords covered naturally (no stuffing):
 *   Zeitarbeit Pforzheim, Personalvermittlung Enzkreis, Produktionshelfer
 *   Pforzheim, Logistik Jobs Pforzheim, Arbeitnehmerüberlassung Enzkreis,
 *   Personal für Industrie Pforzheim
 */

const INDUSTRY_FOCUS = [
  {
    icon: Factory,
    title: 'Produktion & Industrie',
    roles: 'Produktionshelfer, Maschinenbediener, Montierer, Qualitätsprüfer',
    context:
      'Für Fertigungsbetriebe im Pforzheimer Raum besetzen wir Produktionsstellen im Ein-, Zwei- und Drei-Schicht-Betrieb — auch bei kurzfristigen Auftragsspitzen.',
  },
  {
    icon: Truck,
    title: 'Lager & Logistik',
    roles: 'Kommissionierer, Staplerfahrer, Lagerhelfer, Versandmitarbeiter',
    context:
      'Logistikunternehmen im Enzkreis profitieren von unserem Bewerberpool mit Staplerschein, Scanner-Erfahrung und Versandkenntnissen.',
  },
  {
    icon: Wrench,
    title: 'Handwerk & Fachkräfte',
    roles: 'Schlosser, Schweißer, Elektriker, CNC-Fachkräfte',
    context:
      'Für die Metallverarbeitung und das Handwerk in Pforzheim vermitteln wir qualifizierte Fachkräfte mit geprüften Zertifikaten.',
  },
];

const SERVICE_AREAS = [
  'Pforzheim',
  'Enzkreis',
  'Mühlacker',
  'Niefern-Öschelbronn',
  'Birkenfeld',
  'Königsbach-Stein',
  'Remchingen',
  'Ispringen',
  'Nordschwarzwald',
];

export const RegionalSection: React.FC = () => {
  return (
    <section
      className="py-24 bg-white border-t border-gray-100"
      aria-labelledby="regional-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-600 mb-4">
            <MapPin size={14} strokeWidth={2.25} />
            Regional verwurzelt
          </span>
          <h2
            id="regional-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-5 text-balance"
          >
            Personaldienstleister für Pforzheim und den{' '}
            <span className="text-orange-500">Enzkreis</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            PersoFlex GmbH ist ein regionaler Personaldienstleister mit Sitz in Pforzheim.
            Wir vermitteln Fachkräfte und Helfer in Arbeitnehmerüberlassung und
            Personalvermittlung — mit Fokus auf Industrie, Logistik und Produktion im Enzkreis
            und dem angrenzenden Nordschwarzwald.
          </p>
        </div>

        {/* Industry cards — explicit role listings for local SEO and AI parsing */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {INDUSTRY_FOCUS.map((industry, idx) => {
            const Icon = industry.icon;
            return (
              <article
                key={idx}
                className="bg-white border border-gray-200 rounded-xl p-7 hover:border-orange-300 hover:shadow-md transition-all"
              >
                <div className="w-11 h-11 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center mb-5">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 tracking-tight">
                  {industry.title}
                </h3>
                <p className="text-xs font-medium text-orange-600 mb-3 uppercase tracking-wide">
                  {industry.roles}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {industry.context}
                </p>
              </article>
            );
          })}
        </div>

        {/* Service-area grid — explicit location enumeration for local SEO */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-10">
          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-2">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                Einsatzgebiet
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                Wir betreuen Unternehmen und Bewerber in Pforzheim, dem gesamten Enzkreis und
                angrenzenden Gemeinden im Nordschwarzwald. Persönlicher Kontakt vor Ort ist bei
                uns selbstverständlich.
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
              >
                Standort besuchen
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="md:col-span-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 mb-4">
                Betreute Städte und Gemeinden
              </p>
              <ul className="flex flex-wrap gap-2">
                {SERVICE_AREAS.map((area) => (
                  <li
                    key={area}
                    className="px-3.5 py-1.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionalSection;
