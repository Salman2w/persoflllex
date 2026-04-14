import React from 'react';
import { SEO } from '../components/SEO';

export const Datenschutz: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-[80px]">
      <SEO
        title="Datenschutz | PersoFlex GmbH"
        description="Datenschutzerklärung der PersoFlex GmbH. Informationen zur Verarbeitung Ihrer Daten."
      />

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-lg prose-headings:font-black prose-headings:text-brand-black prose-a:text-brand-orange">
          <h1>Datenschutzerklärung</h1>

          <h2>1. Datenschutz auf einen Blick</h2>
          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
            Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>

          <h3>Datenerfassung auf dieser Website</h3>
          <p>
            <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
          </p>
          <p>
            <strong>Wie erfassen wir Ihre Daten?</strong><br />
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
          </p>

          <h2>2. Hosting</h2>
          <p>
            Wir hosten die Inhalte unserer Website bei folgendem Anbieter:<br />
            [Muster-Hoster]<br />
            [Adresse Hoster]
          </p>

          <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
          <h3>Datenschutz</h3>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>

          <h3>Hinweis zur verantwortlichen Stelle</h3>
          <p>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br />
            PersoFlex GmbH<br />
            Kiehnlestraße 4<br />
            75172 Pforzheim<br />
            E-Mail: info@persoflex-gmbh.de
          </p>

          <h2>4. Datenerfassung auf dieser Website</h2>
          <h3>Kontaktformular</h3>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>

          <h3>Bewerbungen</h3>
          <p>
            Wir bieten Ihnen die Möglichkeit, sich bei uns zu bewerben (z. B. per E-Mail, postalisch oder via Online-Bewerberformular).
            Im Folgenden informieren wir Sie über Umfang, Zweck und Verwendung der im Rahmen des Bewerbungsprozesses erhobenen personenbezogenen Daten.
          </p>

          {/* ... Weitere Datenschutz-Abschnitte ... */}
          <p className="text-sm text-gray-500 mt-8">
            Stand: November 2025
          </p>
        </div>
      </section>
    </div>
  );
};
