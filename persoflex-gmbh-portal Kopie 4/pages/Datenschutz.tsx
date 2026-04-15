import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { Shield, ChevronDown, ChevronUp, Lock, Server, FileText, Users, Globe, Mail } from 'lucide-react';

interface SectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const AccordionSection: React.FC<SectionProps> = ({ title, icon, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden mb-4 bg-white shadow-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-500">
            {icon}
          </div>
          <h2 className="text-lg font-bold text-gray-900">{title}</h2>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="px-5 pb-5 pt-2 border-t border-gray-100">
          <div className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-headings:font-semibold prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-orange-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-800 prose-h3:text-base prose-h3:mt-6 prose-h3:mb-3 prose-h4:text-sm prose-h4:mt-4 prose-h4:mb-2">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export const Datenschutz: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Datenschutz | PersoFlex GmbH"
        description="Datenschutzerklaerung der PersoFlex GmbH. Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemaess DSGVO."
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        <div className="max-w-4xl mx-auto px-6 relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 rounded-xl bg-orange-500 flex items-center justify-center">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <span className="px-4 py-1.5 bg-white/10 text-white/80 text-sm font-medium rounded-full">
              DSGVO-konform
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            Datenschutz&shy;erklaerung
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">
            Transparenz und Sicherheit Ihrer Daten haben fuer uns hoechste Prioritaet. 
            Hier erfahren Sie, wie wir Ihre personenbezogenen Daten schuetzen.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Lock className="w-4 h-4" />
              <span>SSL-verschluesselt</span>
            </div>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Server className="w-4 h-4" />
              <span>EU-Hosting</span>
            </div>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <FileText className="w-4 h-4" />
              <span>Stand: April 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Cards */}
      <section className="py-8 -mt-8 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100">
              <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-500 mb-3">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Verantwortliche Stelle</h3>
              <p className="text-sm text-gray-600">PersoFlex GmbH<br />Wilhelmshoehe 7, 75173 Pforzheim</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100">
              <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-500 mb-3">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Kontakt Datenschutz</h3>
              <p className="text-sm text-gray-600">info@persoflex-gmbh.de<br />Tel: 07231 6039493</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-lg border border-gray-100">
              <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-500 mb-3">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">Hosting-Anbieter</h3>
              <p className="text-sm text-gray-600">ALL-INKL.COM<br />Serverstandort: Deutschland</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          
          <AccordionSection 
            title="1. Datenschutz auf einen Blick" 
            icon={<Shield className="w-5 h-5" />}
            defaultOpen={true}
          >
            <h3>Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Ueberblick darueber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persoenlich identifiziert werden koennen.
            </p>

            <h3>Datenerfassung auf dieser Website</h3>
            <p>
              <strong>Wer ist verantwortlich fuer die Datenerfassung?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber PersoFlex GmbH.
            </p>
            <p>
              <strong>Wie erfassen wir Ihre Daten?</strong><br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z.B. in einem Kontaktformular). Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst (technische Daten wie Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
            </p>
            <p>
              <strong>Wofuer nutzen wir Ihre Daten?</strong><br />
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewaehrleisten. Andere Daten koennen zur Analyse Ihres Nutzerverhaltens oder fuer Vertragsangebote verwendet werden.
            </p>
            <p>
              <strong>Welche Rechte haben Sie?</strong><br />
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft, Berichtigung oder Loeschung Ihrer gespeicherten personenbezogenen Daten. Ausserdem steht Ihnen ein Beschwerderecht bei der zustaendigen Aufsichtsbehoerde zu.
            </p>
          </AccordionSection>

          <AccordionSection 
            title="2. Hosting" 
            icon={<Server className="w-5 h-5" />}
          >
            <h3>All-Inkl</h3>
            <p>
              Anbieter ist die ALL-INKL.COM - Neue Medien Muennich, Inh. Rene Muennich, Hauptstrasse 68, 02742 Friedersdorf. Details entnehmen Sie der Datenschutzerklaerung von All-Inkl: <a href="https://all-inkl.com/datenschutzinformationen/" target="_blank" rel="noopener noreferrer">https://all-inkl.com/datenschutzinformationen/</a>.
            </p>
            <p>
              Die Verwendung von All-Inkl erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer moeglichst zuverlaessigen Darstellung unserer Website.
            </p>
            
            <h4>Auftragsverarbeitung</h4>
            <p>
              Wir haben einen Vertrag ueber Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Dieser gewaehrleistet, dass die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet werden.
            </p>
          </AccordionSection>

          <AccordionSection 
            title="3. Allgemeine Hinweise und Pflichtinformationen" 
            icon={<FileText className="w-5 h-5" />}
          >
            <h3>Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persoenlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklaerung.
            </p>
            <p>
              Wir weisen darauf hin, dass die Datenuebertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitsluecken aufweisen kann. Ein lueckenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht moeglich.
            </p>

            <h3>Hinweis zur verantwortlichen Stelle</h3>
            <div className="bg-gray-50 rounded-lg p-4 my-4">
              <p className="mb-0">
                <strong>PersoFlex GmbH</strong><br />
                Vertreten durch: Arina Karakus (Geschaeftsfuehrer)<br />
                Wilhelmshoehe 7<br />
                75173 Pforzheim<br />
                Telefon: 07231 6039493<br />
                E-Mail: info@persoflex-gmbh.de
              </p>
            </div>

            <h3>Speicherdauer</h3>
            <p>
              Soweit innerhalb dieser Datenschutzerklaerung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck fuer die Datenverarbeitung entfaellt.
            </p>

            <h3>Ihre Rechte</h3>
            <ul>
              <li><strong>Widerruf der Einwilligung:</strong> Sie koennen eine bereits erteilte Einwilligung jederzeit widerrufen.</li>
              <li><strong>Widerspruchsrecht:</strong> Sie haben das Recht, gegen die Verarbeitung Ihrer Daten Widerspruch einzulegen.</li>
              <li><strong>Beschwerderecht:</strong> Sie koennen sich bei einer Aufsichtsbehoerde beschweren.</li>
              <li><strong>Recht auf Datenuebertragbarkeit:</strong> Sie koennen Ihre Daten in einem gaengigen Format erhalten.</li>
              <li><strong>Auskunft, Berichtigung, Loeschung:</strong> Sie haben jederzeit das Recht auf Auskunft und ggf. Korrektur oder Loeschung Ihrer Daten.</li>
            </ul>

            <h3>SSL- bzw. TLS-Verschluesselung</h3>
            <p>
              Diese Seite nutzt aus Sicherheitsgruenden eine SSL- bzw. TLS-Verschluesselung. Eine verschluesselte Verbindung erkennen Sie an dem Schloss-Symbol in Ihrer Browserzeile und an &quot;https://&quot; in der Adresszeile.
            </p>
          </AccordionSection>

          <AccordionSection 
            title="4. Datenerfassung auf dieser Website" 
            icon={<Lock className="w-5 h-5" />}
          >
            <h3>Cookies</h3>
            <p>
              Unsere Internetseiten verwenden so genannte &quot;Cookies&quot;. Cookies sind kleine Datenpakete und richten auf Ihrem Endgeraet keinen Schaden an. Sie werden entweder voruebergehend (Session-Cookies) oder dauerhaft (permanente Cookies) gespeichert.
            </p>
            <p>
              Notwendige Cookies werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von notwendigen Cookies zur technisch fehlerfreien Bereitstellung seiner Dienste.
            </p>

            <h3>Kontaktformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben zwecks Bearbeitung der Anfrage bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p>
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfuellung) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
            </p>

            <h3>Anfrage per E-Mail, Telefon oder Telefax</h3>
            <p>
              Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten zum Zwecke der Bearbeitung bei uns gespeichert und verarbeitet.
            </p>
          </AccordionSection>

          <AccordionSection 
            title="5. Soziale Medien" 
            icon={<Users className="w-5 h-5" />}
          >
            <h3>Shariff-Loesung</h3>
            <p>
              Auf dieser Website werden Plugins der sozialen Medien verwendet (z.B. Facebook, X, Instagram). Um den Datenschutz zu gewaehrleisten, verwenden wir diese Plugins nur zusammen mit der sogenannten &quot;Shariff&quot;-Loesung.
            </p>
            <p>
              Diese Anwendung verhindert, dass die integrierten Plugins Daten schon beim ersten Betreten der Seite an den jeweiligen Anbieter uebertragen. Erst wenn Sie den entsprechenden Button aktivieren, wird eine direkte Verbindung zum Server des Anbieters hergestellt.
            </p>
          </AccordionSection>

          <AccordionSection 
            title="6. Plugins und Tools" 
            icon={<Globe className="w-5 h-5" />}
          >
            <h3>Google Fonts (lokales Hosting)</h3>
            <p>
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten Google Fonts. Die Google Fonts sind <strong>lokal installiert</strong>. Eine Verbindung zu Servern von Google findet dabei nicht statt.
            </p>

            <h3>Google Maps</h3>
            <p>
              Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
            <p>
              Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA uebertragen.
            </p>
            <p>
              Weitere Informationen finden Sie in der Datenschutzerklaerung von Google: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>.
            </p>
          </AccordionSection>

          {/* Footer Note */}
          <div className="mt-8 p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 flex-shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Fragen zum Datenschutz?</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten wenden Sie sich bitte an uns.
                </p>
                <a 
                  href="mailto:info@persoflex-gmbh.de" 
                  className="inline-flex items-center gap-2 text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@persoflex-gmbh.de
                </a>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            Stand: April 2025
          </p>

        </div>
      </section>
    </div>
  );
};

export default Datenschutz;
