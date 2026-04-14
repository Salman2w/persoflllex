import React from 'react';
import { Handshake, AlertTriangle, Clock, Percent, FileCheck, XCircle } from 'lucide-react';
import { SEO } from '../components/SEO';

export const AGB: React.FC = () => {
  const sections = [
    { id: 'rechtsstellung', title: '1. Rechtsstellung des Arbeitnehmers' },
    { id: 'pflichten', title: '2. Pflichten des Kunden' },
    { id: 'ausfall', title: '3. Ausfall des Arbeitnehmers' },
    { id: 'auswahl', title: '4. Auswahl des Arbeitnehmers' },
    { id: 'austausch', title: '5. Austausch des Arbeitnehmers' },
    { id: 'haftung', title: '6. Haftung und Freistellung' },
    { id: 'beendigung', title: '7. Beendigung des Vertrages' },
    { id: 'abrechnung', title: '8. Abrechnung' },
    { id: 'zuschlaege', title: '9. Zuschläge' },
    { id: 'uebernahme', title: '10. Übernahme von Arbeitnehmern' },
    { id: 'datenschutz', title: '11. Datenschutz' },
    { id: 'sonstiges', title: '12. Sonstiges' },
    { id: 'gerichtsstand', title: '13. Gerichtsstand' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-[100px] pb-20 text-gray-800 scroll-smooth">
      <SEO 
        title="Allgemeine Geschäftsbedingungen | AGB PersoFlex GmbH"
        description="Unsere Allgemeinen Geschäftsbedingungen für die Arbeitnehmerüberlassung und Personalvermittlung. Transparent, fair und rechtssicher."
      />
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center p-4 bg-brand-orange/10 rounded-full text-brand-orange mb-6">
            <Handshake size={48} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-brand-black mb-4">Allgemeine Geschäftsbedingungen</h1>
          <p className="text-xl text-gray-600">
            Die Grundlage unserer Zusammenarbeit. <br className="hidden md:inline"/>Transparent, fair und verlässlich.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 relative">
          
          {/* Sticky Table of Contents (Desktop) */}
          <aside className="hidden lg:block w-1/4 sticky top-24 h-fit">
            <nav className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="font-bold text-gray-900 mb-4 uppercase text-xs tracking-wider">Inhalt</h3>
              <ul className="space-y-2">
                {sections.map((sec) => (
                  <li key={sec.id}>
                    <a 
                      href={`#${sec.id}`} 
                      className="block text-sm text-gray-600 hover:text-brand-orange hover:translate-x-1 transition-all"
                    >
                      {sec.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 space-y-12">
            
            {/* 1. Rechtsstellung */}
            <section id="rechtsstellung" className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-brand-orange">
              <h2 className="text-2xl font-bold mb-6 flex gap-4 items-center border-b border-gray-100 pb-4">
                <span className="text-4xl text-brand-orange/20 font-black">01</span>
                Rechtsstellung des Arbeitnehmers
              </h2>
              <div className="prose max-w-none text-gray-600 space-y-4">
                <p>
                  Durch den Abschluss des Arbeitnehmerüberlassungsvertrages wird kein Vertragsverhältnis zwischen Kunde und Arbeitnehmer begründet.
                </p>
                <p>
                  Der Kunde darf dem Arbeitnehmer nur solche Tätigkeiten zuweisen, die dem vereinbarten Tätigkeitsbereich unterfallen. Änderungen von Arbeitszeit und Arbeitstätigkeit können nur zwischen Verleiher und Kunde vereinbart werden.
                </p>
                <p>
                  Der Arbeitnehmer darf vom Kunden nicht mit Geld- oder Wertpapierangelegenheiten betraut werden.
                </p>
              </div>
            </section>

            {/* 2. Pflichten */}
            <section id="pflichten" className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 flex gap-4 items-center border-b border-gray-100 pb-4">
                <span className="text-4xl text-gray-200 font-black">02</span>
                Pflichten des Kunden
              </h2>
              <div className="prose max-w-none text-gray-600 space-y-4">
                <p>
                  Der Kunde stellt sicher, dass Unfallverhütungs- und Arbeitsschutzvorschriften sowie die gesetzlich zulässigen Arbeitszeitgrenzen und Pausen eingehalten werden.
                </p>
                <p>
                  Der Kunde gestattet dem Verleiher nach vorheriger Absprache den Zutritt zum Tätigkeitsort des Arbeitnehmers, damit dieser sich von der Einhaltung der Arbeitsschutzvorschriften überzeugen kann.
                </p>
                <p>
                  Sofern für die Beschäftigung des Arbeitnehmers behördliche Genehmigungen erforderlich sind oder werden, verpflichtet sich der Kunde, diese vor Aufnahme der Beschäftigung des Arbeitnehmers einzuholen und dem Verleiher auf Anfrage vorzulegen.
                </p>
                <p>
                  Der Kunde wird dem Verleiher einen etwaigen Arbeitsunfall des überlassenen Arbeitnehmers unverzüglich, das heißt am Schadenstag, in Textform anzeigen. Ferner wird der Kunde dem Verleiher einen Schadensbericht innerhalb von 3 Werktagen nach Eintritt des Schadens überlassen. Gem. § 193 SGB VII ist der Kunde ebenfalls zur Unfallmeldung an seinen Versicherungsträger verpflichtet.
                </p>
                
                {/* Visual Aid */}
                <div className="bg-red-50 text-red-800 p-4 rounded text-sm border border-red-100 flex gap-3 items-start mt-6">
                  <AlertTriangle className="shrink-0 mt-0.5" size={20} />
                  <div>
                    <strong>Wichtige Frist:</strong> Arbeitsunfälle müssen am Schadenstag gemeldet werden. Der schriftliche Bericht muss binnen 3 Werktagen erfolgen.
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Ausfall */}
            <section id="ausfall" className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
               <h2 className="text-2xl font-bold mb-6 flex gap-4 items-center border-b border-gray-100 pb-4">
                <span className="text-4xl text-gray-200 font-black">03</span>
                Ausfall des Arbeitnehmers
              </h2>
              <div className="prose max-w-none text-gray-600 space-y-4">
                <p>
                  Der Verleiher kann ganz oder teilweise vom Vertrag zurücktreten, wenn und soweit die Überlassung des Arbeitnehmers durch außergewöhnliche Umstände dauernd oder zeitweise erschwert wird. Solche außergewöhnlichen Umstände sind insbesondere Arbeitskämpfe, hoheitliche Maßnahmen, innere Unruhen, Katastrophen, Epidemien etc. Das Rücktrittsrecht besteht nicht, wenn der Verleiher die außergewöhnlichen Umstände zu vertreten hat.
                </p>
                <p>
                  Nimmt der überlassene Arbeitnehmer seine Arbeit nicht auf, setzt er sie nicht fort oder fehlt er aus sonstigen Gründen, ist der Verleiher vom Kunden umgehend zu unterrichten. Der Verleiher ist berechtigt und wird sich nach besten Kräften bemühen, eine Ersatzkraft zu stellen. Steht eine solche Ersatzkraft nicht zur Verfügung, wird der Verleiher von der Überlassungsverpflichtung frei, es sei denn, der Verleiher hat den Nichtantritt der Arbeit zu vertreten.
                </p>
              </div>
            </section>

            {/* 4. Auswahl */}
            <section id="auswahl" className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 flex gap-4 items-center border-b border-gray-100 pb-4">
                <span className="text-4xl text-gray-200 font-black">04</span>
                Auswahl des Arbeitnehmers
              </h2>
              <div className="prose max-w-none text-gray-600 space-y-4">
                <p>
                  Der Arbeitnehmer wird durch den Verleiher sorgfältig ausgewählt. Dennoch ist der Kunde gehalten, sich seinerseits von der Eignung des ihm überlassenen Arbeitnehmers zu überzeugen und etwaige Beanstandungen unverzüglich an den Verleiher zu richten.
                </p>
              </div>
            </section>

            {/* 5. Austausch */}
            <section id="austausch" className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 flex gap-4 items-center border-b border-gray-100 pb-4">
                <span className="text-4xl text-gray-200 font-black">05</span>
                Austausch des Arbeitnehmers
              </h2>
              <div className="prose max-w-none text-gray-600 space-y-4">
                <p>
                  Weist ein Arbeitnehmer die vereinbarte Qualifikation nicht auf oder ist er aus sonstigen Gründen zur Ausübung der Tätigkeit objektiv ungeeignet, kann der Kunde jederzeit die Auswechslung des Arbeitnehmers verlangen.
                </p>
                <p>
                  Sollten dem Kunden die Leistungen des Arbeitnehmers aus sonstigen Gründen nicht genügen, so kann er den Verleiher innerhalb von 4 Stunden nach Arbeitsaufnahme davon unterrichten. Ihm wird nach den gegebenen Möglichkeiten eine Ersatzkraft gestellt. Ist dem Verleiher dieses nicht möglich, kann der Kunde den Auftrag ohne Einhaltung einer Frist mit sofortiger Wirkung kündigen.
                </p>
                <p>
                  Der Verleiher ist befugt, den Arbeitnehmer jederzeit abzurufen und durch andere fachlich gleichwertige Arbeitnehmer zu ersetzen.
                </p>

                {/* Visual Aid */}
                <div className="bg-blue-50 text-blue-900 p-4 rounded flex items-center gap-3 mt-6">
                   <Clock size={20} />
                   <span><strong>4-Stunden-Regel:</strong> Melden Sie Unzufriedenheit innerhalb von 4 Stunden für eine kostenfreie Kündigung oder Ersatzgestellung.</span>
                </div>
              </div>
            </section>

            {/* 6. Haftung */}
            <section id="haftung" className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 flex gap-4 items-center border-b border-gray-100 pb-4">
                <span className="text-4xl text-gray-200 font-black">06</span>
                Haftung und Freistellung
              </h2>
              <div className="prose max-w-none text-gray-600 space-y-4">
                <p>
                  Die Haftung des Verleihers für das Handeln der Arbeitnehmer wird ausgeschlossen. Der Verleiher haftet nur für die ordnungsgemäße Auswahl seiner Arbeitnehmer in Bezug auf die vertraglich vereinbarte Tätigkeit.
                </p>
                <p>
                  Die Haftung des Verleihers ist bei Sach- und Vermögensschäden auf Vorsatz oder grobe Fahrlässigkeit beschränkt. Bei einer Verletzung vertragswesentlicher Pflichten, wie z.B. der ordnungsgemäßen Auswahl des Arbeitnehmers, haftet der Verleiher auch bei Sach- und Vermögensschäden bei normaler und bei leichter Fahrlässigkeit. Die Haftung für schuldloses Handeln wird - auch bei Personenschäden - ausgeschlossen.
                </p>
                <p>
                  Kommt es in dem Betrieb des Kunden zu einer Verletzung des Arbeitnehmers, die der Kunde bzw. seine Erfüllungsgehilfen zu vertreten haben, so haftet der Kunde für die aus dieser Pflichtverletzung entstehenden Entgeltfortzahlungskosten des Verleihers gegenüber seinem Arbeitnehmer.
                </p>
                <p>
                  Der Kunde ist verpflichtet, den Verleiher von allen Ansprüchen freizustellen, die Dritte im Zusammenhang mit der Ausführung der dem Arbeitnehmer übertragenen Tätigkeiten gegen den Verleiher erheben. Der Kunde ist ferner verpflichtet, den Verleiher von Ansprüchen des Arbeitnehmers freizustellen, die dieser wegen einer Inanspruchnahme durch Dritte wegen einer Tätigkeit für den Kunden gegen den Verleiher richtet. Ausgenommen sind jeweils Ansprüche, deren Ursache in einer nicht ordnungsgemäßen Auswahl des Arbeitnehmers besteht.
                </p>
              </div>
            </section>

            {/* 7. Beendigung */}
            <section id="beendigung" className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 flex gap-4 items-center border-b border-gray-100 pb-4">
                <span className="text-4xl text-gray-200 font-black">07</span>
                Beendigung des Vertrages
              </h2>
              <div className="prose max-w-none text-gray-600 space-y-4">
                <p>
                  Der Vertrag kann bei befristeter und bei unbefristeter Überlassung beidseitig mit einer Frist von einer Woche in Textform gekündigt werden. Einzelne Einsätze können mit einer Ankündigungsfrist von drei Tagen beendet werden. Der beim Kunden eingesetzte Arbeitnehmer ist nicht zum Kündigungsempfang berechtigt.
                </p>
                
                {/* Visual Aid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="border border-gray-200 p-4 rounded bg-gray-50 text-center">
                    <span className="block font-bold text-gray-900">Allgemeine Frist</span>
                    <span className="text-brand-orange text-2xl font-black">1 Woche</span>
                    <span className="block text-xs text-gray-500">In Textform</span>
                  </div>
                  <div className="border border-gray-200 p-4 rounded bg-gray-50 text-center">
                    <span className="block font-bold text-gray-900">Einzelne Einsätze</span>
                    <span className="text-brand-orange text-2xl font-black">3 Tage</span>
                    <span className="block text-xs text-gray-500">Ankündigungsfrist</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 8. Abrechnung */}
            <section id="abrechnung" className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 flex gap-4 items-center border-b border-gray-100 pb-4">
                <span className="text-4xl text-gray-200 font-black">08</span>
                Abrechnung
              </h2>
              <div className="prose max-w-none text-gray-600 space-y-4">
                <p>
                  Der Kunde verpflichtet sich, wöchentlich von einem bevollmächtigten Vertreter die geleisteten Arbeitsstunden auf dem Formular „Tätigkeitsnachweis“ zu bestätigen. Alternativ kann die Zeiterfassung elektronisch erfolgen.
                </p>
                <p>
                  Die Abrechnung erfolgt wöchentlich. Forderungen sind innerhalb von 7 Tagen zu begleichen. Der Arbeitnehmer ist nicht zum Inkasso berechtigt.
                </p>
                <p>
                  Eine Aufrechnung oder die Geltendmachung eines Zurückbehaltungsrechts ist gegenüber dem Verleiher nur mit unstreitigen bzw. rechtskräftig festgestellten Forderungen zulässig.
                </p>
              </div>
            </section>

            {/* 9. Zuschläge */}
            <section id="zuschlaege" className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-brand-orange">
              <h2 className="text-2xl font-bold mb-6 flex gap-4 items-center border-b border-gray-100 pb-4">
                <span className="text-4xl text-brand-orange/20 font-black">09</span>
                Zuschläge
              </h2>
              <div className="prose max-w-none text-gray-600 space-y-4 mb-8">
                <p>Sofern nicht anders vereinbart, gelten zwischen den Parteien folgende Zuschlagsregelungen:</p>
                <p>
                  Mehrarbeitszuschläge werden bei Überschreitung der vereinbarten wöchentlichen Arbeitszeit um mehr als 15% bezahlt. Der Mehrarbeitszuschlag beträgt 25 Prozent.
                </p>
                <p>
                  Zuschläge für Nachtarbeit werden für Arbeit in der Zeit von 23.00 bis 6.00 Uhr gewährt. Der Zuschlag für Nachtarbeit beträgt 25 Prozent.
                </p>
                <p>
                  Der Zuschlag für Sonntagsarbeit beträgt 50 Prozent.
                </p>
                <p>
                  Der Zuschlag für Feiertagsarbeit beträgt 100 Prozent. Es gilt die gesetzliche Feiertagsregelung am jeweiligen Einsatzort. Als Feiertage gelten auch Heiligabend und Silvester, jeweils nach 14:00 Uhr.
                </p>
                <p>
                  Treffen mehrere Zuschläge für die gleiche Arbeitszeit zusammen, so wird nur der jeweils höhere Zuschlag gezahlt.
                </p>
                <p>
                  Sofern nicht anders vereinbart, hat der Verleiher zudem einen Anspruch auf eine Erhöhung der Überlassungsvergütung um den Faktor, um den seine Kosten dadurch steigen, dass er nach Regelungen der von ihm gem. Ziff. 2 des Überlassungsvertrages angewandten Tarifverträge, insbesondere von Regelungen in Tarifverträgen über Branchenzuschläge oder über eine Inflationsausgleichsprämie (IAP), zu höheren Zahlungen an die an den Kunden überlassenen Arbeitnehmer verpflichtet ist. Der Verleiher ist verpflichtet, seine Kostenkalkulation zur Anspruchsbegründung offen zu legen.
                </p>
              </div>

              {/* Visual Aid for Surcharges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-900 text-white p-4 rounded text-center">
                  <span className="block text-3xl font-black text-brand-orange">25%</span>
                  <span className="text-xs uppercase tracking-wider">Mehrarbeit</span>
                  <span className="block text-[10px] text-gray-400 mt-1"> 15% der Arbeitszeit</span>
                </div>
                <div className="bg-gray-900 text-white p-4 rounded text-center">
                  <span className="block text-3xl font-black text-brand-orange">25%</span>
                  <span className="text-xs uppercase tracking-wider">Nachtarbeit</span>
                  <span className="block text-[10px] text-gray-400 mt-1">23:00 - 06:00 Uhr</span>
                </div>
                 <div className="bg-gray-900 text-white p-4 rounded text-center">
                  <span className="block text-3xl font-black text-brand-orange">50%</span>
                  <span className="text-xs uppercase tracking-wider">Sonntag</span>
                </div>
                 <div className="bg-gray-900 text-white p-4 rounded text-center">
                  <span className="block text-3xl font-black text-brand-orange">100%</span>
                  <span className="text-xs uppercase tracking-wider">Feiertag</span>
                </div>
              </div>
            </section>

            {/* 10. Übernahme */}
            <section id="uebernahme" className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
               <h2 className="text-2xl font-bold mb-6 flex gap-4 items-center border-b border-gray-100 pb-4">
                <span className="text-4xl text-gray-200 font-black">10</span>
                Übernahme von Arbeitnehmern
              </h2>
              <div className="prose max-w-none text-gray-600 space-y-4">
                <p>
                  Schließen Kunde und Arbeitnehmer vor Beginn, während oder innerhalb von sechs Monaten nach Beendigung der Überlassung einen Arbeits- oder Dienstvertrag miteinander ab, steht dem Verleiher ein Anspruch auf Zahlung einer Vermittlungsprovision in Höhe von zwei zwischen Kunde und Arbeitnehmer vereinbarten Bruttomonatsgehältern zzgl. MwSt. zu. Der Provisionsanspruch reduziert sich für jeden vorherigen Einsatzmonat des Arbeitnehmers bei dem Kunden um 1/12.
                </p>
                <p>
                  Der Kunde kann den Gegenbeweis führen, dass die Überlassung nicht für die Einstellung ursächlich war.
                </p>
                <p>
                  Der Anspruch auf Zahlung der Vermittlungsprovision entsteht ferner, wenn der Arbeitnehmer innerhalb der in Ziff. 10.1. genannten Fristen:
                  <ul className="list-disc pl-5 mt-2">
                    <li>bei einem mit dem Kunden konzernverbundenen Unternehmen (§§ 15ff. AktG in Deutschland) eingestellt wird oder</li>
                    <li>bei einem mit dem Kunden nicht konzernverbundenen Unternehmen eingestellt, von dort jedoch beim Kunden im Wege der Arbeitnehmerüberlassung eingesetzt wird.</li>
                  </ul>
                </p>
                <p>
                  Die Vermittlungsprovision ist fällig mit Abschluss des Arbeitsvertrages zwischen dem Arbeitnehmer und dem Kunden (10.1.) bzw. dem konzernverbundenen Unternehmen (10.3. Alt. (1)) bzw. bei Arbeitsaufnahme im Kundenbetrieb (10.3. Alt. (2)).
                </p>
                <p>
                  Der Kunde ist zur Auskunft über den vereinbarten Monatslohn verpflichtet.
                </p>

                {/* Visual Aid */}
                <div className="bg-gray-50 p-6 rounded border border-gray-200 text-center mt-6">
                  <span className="text-gray-500 uppercase text-xs font-bold">Vermittlungsprovision</span>
                  <div className="text-2xl font-bold text-brand-black my-2">2 Bruttomonatsgehälter</div>
                  <p className="text-sm text-gray-500">Reduziert sich um 1/12 für jeden Einsatzmonat.</p>
                </div>
              </div>
            </section>

            {/* 11. Datenschutz */}
            <section id="datenschutz" className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 flex gap-4 items-center border-b border-gray-100 pb-4">
                <span className="text-4xl text-gray-200 font-black">11</span>
                Datenschutz
              </h2>
              <div className="prose max-w-none text-gray-600 space-y-4">
                <p>
                  Der Kunde verpflichtet sich gegenüber dem Verleiher, alle personenbezogenen Daten, die ihm von Verleiher übermittelt werden, oder die er anderweitig über Arbeitnehmer aus der Sphäre des Verleihers erhebt, ausschließlich für die Zwecke der Durchführung des mit dem Verleiher bestehenden Vertragsverhältnisses zu verarbeiten und alle datenschutzrechtlichen Vorschriften zu beachten. Angemessenen Weisungen des Verleihers zum Umgang mit solchen personenbezogenen Daten, die der Einhaltung der datenschutzrechtlichen Vorschriften dienen, hat der Kunde Folge zu leisten.
                </p>
                <p>
                  Insbesondere sind personenbezogene Daten unverzüglich zu löschen, wenn der Zweck der Rechtsgrundlage ihrer Verarbeitung eine weitere Speicherung nicht mehr erfordert und keine anderweitigen gesetzlichen Verpflichtungen zur weiteren Speicherung bestehen. Möchte der Kunde die Daten zulässig für einen anderen Zweck verarbeiten, informiert der Kunde nicht nur den Betroffenen, sondern auch den Verleiher. Weiter verpflichtet sich der Kunde alle technischen und organisatorischen Maßnahmen zu treffen, um die Prinzipien des Datenschutzes, insbesondere die Sicherheit der Daten, zu gewährleisten.
                </p>
              </div>
            </section>

            {/* 12. Sonstiges */}
            <section id="sonstiges" className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 flex gap-4 items-center border-b border-gray-100 pb-4">
                <span className="text-4xl text-gray-200 font-black">12</span>
                Sonstiges
              </h2>
               <div className="prose max-w-none text-gray-600 space-y-4">
                 <p>
                  Nebenabreden, Ergänzungen oder Abänderungen dieses Vertrages sind nur wirksam, wenn sie mindestens in Textform getroffen worden sind.
                 </p>
                 <p>
                  Die Unwirksamkeit einzelner Bestimmungen des Vertrages lässt die Wirksamkeit der übrigen Bestimmungen unberührt. Die Parteien werden die unwirksamen Bestimmungen durch wirksame Vereinbarungen ersetzen, die den wirtschaftlichen Zweck der unwirksamen Bestimmungen erreichen oder ihm möglichst nahe kommen.
                 </p>
               </div>
            </section>

            {/* 13. Gerichtsstand */}
            <section id="gerichtsstand" className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 flex gap-4 items-center border-b border-gray-100 pb-4">
                <span className="text-4xl text-gray-200 font-black">13</span>
                Gerichtsstand / Erfüllungsort
              </h2>
              <div className="prose max-w-none text-gray-600 space-y-4">
                <p>
                  Gerichtsstand und Erfüllungsort ist Pforzheim.
                </p>
                <p>
                  Es gilt das Recht der Bundesrepublik Deutschland.
                </p>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
};
