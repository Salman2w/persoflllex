import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Clock, Shield, Users } from 'lucide-react';

/**
 * Team-Preview section for the Home page.
 * Photo-free, text-based presentation that still communicates trust and expertise
 * via named roles, responsibilities, and sourced trust facts.
 */

const TEAM_PREVIEW = [
  {
    name: 'Salman Karakus',
    role: 'Geschäftsführung',
    focus: 'Operative Leitung & Kundenbetreuung',
  },
  {
    name: 'Albert Budagyan',
    role: 'Vertriebsleitung',
    focus: 'Neukunden & Unternehmenspartnerschaften',
  },
  {
    name: 'Samira Kampen',
    role: 'Recruiting & HR',
    focus: 'Bewerberbetreuung & Personalauswahl',
  },
];

const TRUST_FACTS = [
  {
    icon: Shield,
    label: 'AÜG-Erlaubnis',
    value: 'Unbefristet',
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

// Returns initials (max 2 characters) for a given full name.
const getInitials = (name: string): string =>
  name
    .split(' ')
    .map((part) => part.charAt(0).toUpperCase())
    .slice(0, 2)
    .join('');

export const TeamPreview: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-white" aria-labelledby="team-preview-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Heading + Copy + Trust Facts */}
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
                      {fact.label}: <span className="text-orange-600">{fact.value}</span>
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

          {/* Right: Text-only team cards */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-6">
              <Users size={16} className="text-orange-500" strokeWidth={2} />
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">
                Ihre direkten Ansprechpartner
              </span>
            </div>
            <ul className="space-y-3">
              {TEAM_PREVIEW.map((member, idx) => (
                <li key={idx}>
                  <Link
                    to="/ueber-uns"
                    className="group flex items-center gap-4 md:gap-5 p-4 md:p-5 bg-white border border-gray-200 rounded-xl hover:border-orange-300 hover:shadow-md transition-all"
                    aria-label={`Mehr &uuml;ber ${member.name}, ${member.role}`}
                  >
                    {/* Initials avatar — no personal photo */}
                    <div
                      aria-hidden="true"
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 flex items-center justify-center flex-shrink-0"
                    >
                      <span className="text-sm md:text-base font-bold tracking-tight text-orange-600">
                        {getInitials(member.name)}
                      </span>
                    </div>

                    {/* Text content */}
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 text-sm md:text-base tracking-tight group-hover:text-orange-600 transition-colors">
                        {member.name}
                      </p>
                      <p className="text-xs md:text-sm text-orange-600 font-medium mt-0.5">
                        {member.role}
                      </p>
                      <p className="text-xs md:text-sm text-gray-500 mt-1 leading-snug">
                        {member.focus}
                      </p>
                    </div>

                    <ArrowRight
                      size={16}
                      className="text-gray-400 group-hover:text-orange-500 group-hover:translate-x-0.5 transition-all flex-shrink-0"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
