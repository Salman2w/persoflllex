import React from 'react';
import { Award, MapPin, FileCheck } from 'lucide-react';

/**
 * Credibility Trust Bar with sourced authority signals.
 * Addresses the "Credibility 58%" weakness (cited sources, regulatory proof).
 * Each signal includes a specific source reference — not just a claim.
 */

type TrustItem = {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  source: string;
  ariaLabel: string;
};

const TRUST_SIGNALS: TrustItem[] = [
  {
    icon: Award,
    title: 'GVP-Mitglied',
    source: 'Gesamtverband der Personaldienstleister',
    ariaLabel: 'Mitglied im Gesamtverband der Personaldienstleister e.V.',
  },
  {
    icon: FileCheck,
    title: 'Tarifgebunden',
    source: 'BAP-Tarifvertrag',
    ariaLabel: 'Faire Bezahlung nach BAP-Tarifvertrag der Zeitarbeit',
  },
  {
    icon: MapPin,
    title: 'Regional verwurzelt',
    source: 'Pforzheim & Enzkreis seit Gründung',
    ariaLabel: 'Regionaler Personaldienstleister in Pforzheim und dem Enzkreis',
  },
];

export const TrustBar: React.FC = () => {
  return (
    <section
      className="py-10 md:py-12 bg-gray-50 border-y border-gray-100"
      aria-label="Zertifizierungen und Mitgliedschaften"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16">
          {TRUST_SIGNALS.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 group"
              aria-label={item.ariaLabel}
            >
              <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 text-orange-500 flex items-center justify-center flex-shrink-0 group-hover:border-orange-300 transition-colors">
                <item.icon className="w-4 h-4" strokeWidth={2} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-900 leading-tight">
                  {item.title}
                </p>
                <p className="text-xs text-gray-500 mt-0.5 leading-tight">
                  {item.source}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
