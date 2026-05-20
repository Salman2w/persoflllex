import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  /** Optional overline label above the heading */
  eyebrow?: string;
  /** Section heading */
  heading?: string;
  /** Optional intro paragraph under the heading */
  subheading?: string;
  /** List of FAQ entries */
  items?: FAQItem[];
}

const defaultFaqs: FAQItem[] = [
  {
    question: 'Was ist Zeitarbeit und wie funktioniert sie?',
    answer:
      'Zeitarbeit (Arbeitnehmerüberlassung) bedeutet, dass Sie bei PersoFlex GmbH angestellt sind und in verschiedenen Kundenunternehmen arbeiten. Sie erhalten einen festen Arbeitsvertrag mit tariflicher Bezahlung, Urlaubs- und Weihnachtsgeld sowie vollen Sozialversicherungsschutz.',
  },
  {
    question: 'Welche Jobs bietet PersoFlex in Pforzheim an?',
    answer:
      'Wir vermitteln Stellen in Produktion, Logistik, Lager, Industrie und Handwerk in Pforzheim und dem Enzkreis. Typische Positionen sind Produktionshelfer, Lageristen, Staplerfahrer, Maschinenbediener und Fachkräfte in der Metallverarbeitung.',
  },
  {
    question: 'Ist die Bewerbung bei PersoFlex kostenlos?',
    answer:
      'Ja, die Bewerbung und Vermittlung ist für Bewerber komplett kostenlos. Sie können sich online, telefonisch unter 07231 1545010 oder persönlich in unserer Niederlassung in der Kiehnlestraße 4, 75172 Pforzheim bewerben.',
  },
  {
    question: 'Was ist der Unterschied zwischen Zeitarbeit und Personalvermittlung?',
    answer:
      'Bei der Zeitarbeit sind Sie bei PersoFlex angestellt und arbeiten bei unseren Kunden. Bei der Personalvermittlung vermitteln wir Sie direkt in eine Festanstellung beim Kundenunternehmen. Beide Optionen bieten Vorteile je nach Ihrer persönlichen Situation.',
  },
  {
    question: 'Welche Vorteile bietet PersoFlex als Arbeitgeber?',
    answer:
      'Als GVP-Mitglied bieten wir tarifliche Bezahlung, Urlaubs- und Weihnachtsgeld, persönliche Betreuung, Weiterbildungsmöglichkeiten und die Chance auf Übernahme beim Kundenunternehmen. Wir sind ein regionaler Partner mit Fokus auf Pforzheim und den Enzkreis.',
  },
  {
    question: 'Wie schnell kann ich bei PersoFlex anfangen?',
    answer:
      'Nach einem ersten persönlichen Gespräch und der Prüfung Ihrer Unterlagen können Sie in der Regel innerhalb von wenigen Tagen starten. Bei dringendem Personalbedarf auch schneller – oft schon am nächsten Werktag.',
  },
];

export const FAQSection: React.FC<FAQSectionProps> = ({
  eyebrow = 'Häufige Fragen',
  heading = 'Antworten auf Ihre Fragen',
  subheading = 'Die wichtigsten Informationen rund um Zeitarbeit und Personalvermittlung bei PersoFlex – auf einen Blick.',
  items = defaultFaqs,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white border-t border-gray-100" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-600 mb-4">
            <HelpCircle size={14} strokeWidth={2.25} />
            {eyebrow}
          </span>
          <h2
            id="faq-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-5 text-balance"
          >
            {heading}
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">{subheading}</p>
        </div>

        {/* FAQ List */}
        <div className="divide-y divide-gray-200 border-y border-gray-200">
          {items.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 py-5 min-h-[56px] text-left group"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors tracking-tight">
                    {faq.question}
                  </h3>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center transition-all ${
                      isOpen
                        ? 'bg-orange-500 border-orange-500 text-white rotate-180'
                        : 'bg-white text-gray-500 group-hover:border-orange-300 group-hover:text-orange-600'
                    }`}
                  >
                    <ChevronDown size={16} strokeWidth={2.25} />
                  </span>
                </button>
                <div
                  id={`faq-answer-${idx}`}
                  role="region"
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-600 leading-relaxed pr-12 text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support prompt */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Ihre Frage war nicht dabei?{' '}
            <a
              href="/kontakt"
              className="font-semibold text-orange-600 hover:text-orange-700 underline underline-offset-2"
            >
              Sprechen Sie uns direkt an
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
