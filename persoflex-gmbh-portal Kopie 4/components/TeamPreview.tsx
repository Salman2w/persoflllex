import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Clock, Shield } from 'lucide-react';

/**
 * Team-Preview section for the Home page.
 * Builds Subject Expertise & Credibility signals by showing real, named people.
 * Mirrors the 4 members from UeberUns to keep a single source of truth visually consistent.
 */

const TEAM_PREVIEW = [
  {
    name: 'Arina Karakus',
    role: 'Geschäftsführung',
    imageSrc: '/bilder/arina_karakus.webp',
  },
  {
    name: 'Salman Karakus',
    role: 'Geschäftsleitung',
    imageSrc: '/bilder/salman_karakus.webp',
  },
  {
    name: 'Samira Kampen',
    role: 'Recruiting & HR',
    imageSrc: '/bilder/samira_van_kampen.webp',
  },
];

const TRUST_FACTS = [
  {
    icon: Shield,
    label: 'AÜG-Erlaubnis',
    value: '',
    source: 'Bundesagentur für Arbeit',
  },
  {
    icon: Clock,
    label: 'Reaktionszeit',
    value: '24-48 h',
    source: 'Bei qualifizierten Anfragen',
  },
  {
    icon: Phone,
    label: 'Persönliche Betreuung',
    value: 'Direkter Ansprechpartner',
    source: 'Für jeden Einsatz',
  },
];

export const TeamPreview: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-white" aria-labelledby="team-preview-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Heading + Copy */}
          <div className="lg:col-span-5">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-orange-600 mb-4">
              Das Team hinter PersoFlex
            </span>
            <h2
              id="team-preview-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-6 text-balance"
            >
              Menschen statt <span className="text-orange-500">Nummern.</span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              Bei PersoFlex kennen Sie Ihre Ansprechpartner mit Namen. Kein Callcenter,
              keine anonymen Prozesse &ndash; sondern ein regional verwurzeltes Team in
              Pforzheim, das Sie direkt erreichen k&ouml;nnen.
            </p>

            {/* Trust Facts */}
            <ul className="space-y-4 mb-8">
              {TRUST_FACTS.map((fact, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center flex-shrink-0">
                    <fact.icon className="w-4 h-4" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {fact.label}
                      {fact.value && (
                        <>
                          : <span className="text-orange-600">{fact.value}</span>
                        </>
                      )}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">{fact.source}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              to="/ueber-uns"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all shadow-sm hover:shadow-md"
            >
              Team kennenlernen
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Right: Team Grid — single column on very small screens, 2 cols on sm+, 3 cols fits naturally */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {TEAM_PREVIEW.map((member, idx) => (
                <Link
                  key={idx}
                  to="/ueber-uns"
                  className="group block"
                  aria-label={`Mehr über ${member.name}, ${member.role}`}
                >
                  <div className="aspect-[4/5] bg-gray-100 rounded-xl overflow-hidden border border-gray-200 group-hover:border-orange-300 transition-all shadow-sm group-hover:shadow-md">
                    <img
                      src={member.imageSrc}
                      alt={`${member.name}, ${member.role} bei PersoFlex GmbH in Pforzheim`}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      width={400}
                      height={500}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="mt-3">
                    <p className="font-semibold text-gray-900 text-sm md:text-base tracking-tight">
                      {member.name}
                    </p>
                    <p className="text-xs md:text-sm text-orange-600 font-medium mt-0.5">
                      {member.role}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
