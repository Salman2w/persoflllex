import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, User, Tag } from 'lucide-react';
import { SEO } from '../components/SEO';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// Blog-Artikel Daten für SEO
export const BLOG_POSTS = [
  {
    id: 'zeitarbeit-pforzheim-vorteile',
    title: 'Zeitarbeit in Pforzheim: 7 Vorteile für Arbeitnehmer und Unternehmen',
    excerpt: 'Erfahren Sie, warum Zeitarbeit in Pforzheim und dem Enzkreis für beide Seiten eine Win-Win-Situation ist. Von flexiblen Einsatzmöglichkeiten bis zur Übernahmechance.',
    content: `
      <h2>Was ist Zeitarbeit und wie funktioniert sie?</h2>
      <p>Zeitarbeit, auch Arbeitnehmerüberlassung genannt, ist ein Beschäftigungsmodell, bei dem Arbeitnehmer bei einem Personaldienstleister angestellt sind und an verschiedene Kundenunternehmen verliehen werden. In Pforzheim und dem Enzkreis hat sich dieses Modell als wichtiger Bestandteil des Arbeitsmarktes etabliert.</p>
      
      <h2>Die 7 wichtigsten Vorteile der Zeitarbeit</h2>
      
      <h3>1. Schneller Einstieg in den Arbeitsmarkt</h3>
      <p>Besonders für Berufseinsteiger, Wiedereinsteiger oder Menschen in beruflicher Neuorientierung bietet Zeitarbeit eine schnelle Möglichkeit, im Arbeitsmarkt Fuß zu fassen. Die Bewerbungsprozesse sind oft unkomplizierter und schneller als bei direkten Anstellungen.</p>
      
      <h3>2. Vielfältige Berufserfahrung</h3>
      <p>Durch Einsätze in verschiedenen Unternehmen sammeln Zeitarbeitnehmer wertvolle Erfahrungen in unterschiedlichen Branchen und Arbeitsumgebungen. Dies erweitert nicht nur den Horizont, sondern macht auch den Lebenslauf attraktiver.</p>
      
      <h3>3. Faire Bezahlung nach Tarifvertrag</h3>
      <p>Seriöse Personaldienstleister wie PersoFlex GmbH arbeiten nach dem GVP-Tarifvertrag. Das bedeutet faire Löhne, 30 Tage Urlaub und weitere tarifliche Leistungen für alle Mitarbeiter.</p>
      
      <h3>4. Übernahmechancen</h3>
      <p>Viele Unternehmen nutzen Zeitarbeit als "verlängerte Probezeit". Wer sich bewährt, hat gute Chancen auf eine Festanstellung beim Kundenunternehmen.</p>
      
      <h3>5. Flexibilität für Unternehmen</h3>
      <p>Für Unternehmen in Pforzheim bietet Zeitarbeit die Möglichkeit, Auftragsspitzen abzufangen, ohne langfristige Verpflichtungen einzugehen. Besonders in der Logistik und Produktion ist diese Flexibilität Gold wert.</p>
      
      <h3>6. Professionelles Recruiting</h3>
      <p>Unternehmen profitieren von der Expertise des Personaldienstleisters bei der Auswahl geeigneter Kandidaten. Das spart Zeit und Ressourcen im eigenen HR-Bereich.</p>
      
      <h3>7. Rechtliche Sicherheit</h3>
      <p>Bei der Zusammenarbeit mit einem seriösen Personaldienstleister sind alle rechtlichen Aspekte wie AÜG-Konformität, Arbeitsverträge und Sozialversicherungen professionell geregelt.</p>
      
      <h2>Fazit</h2>
      <p>Zeitarbeit in Pforzheim und Umgebung ist längst mehr als nur eine Übergangslösung. Sie bietet echte Karrierechancen für Arbeitnehmer und flexible Personalplanung für Unternehmen. PersoFlex GmbH steht dabei als verlässlicher Partner für beide Seiten zur Verfügung.</p>
    `,
    author: 'PersoFlex Team',
    date: '2024-12-15',
    readTime: '6 Min.',
    category: 'Zeitarbeit',
    tags: ['Zeitarbeit', 'Pforzheim', 'Arbeitnehmerüberlassung', 'Karriere']
  },
  {
    id: 'logistik-jobs-pforzheim-enzkreis',
    title: 'Logistik Jobs in Pforzheim & Enzkreis: Der komplette Guide 2024',
    excerpt: 'Alles über Logistik-Karrieren in der Region: Von Kommissionierer bis Lagerleiter. Gehälter, Anforderungen und wie Sie Ihren Traumjob finden.',
    content: `
      <h2>Die Logistik-Branche in Pforzheim boomt</h2>
      <p>Pforzheim und der Enzkreis haben sich zu einem wichtigen Logistik-Standort in Baden-Württemberg entwickelt. Die zentrale Lage, gute Verkehrsanbindung und die Nähe zu großen Wirtschaftszentren machen die Region attraktiv für Logistikunternehmen jeder Größe.</p>
      
      <h2>Welche Logistik-Jobs gibt es?</h2>
      
      <h3>Kommissionierer/in</h3>
      <p>Als Kommissionierer stellen Sie Waren nach Auftrag zusammen. Der Job erfordert Genauigkeit, körperliche Fitness und oft die Bereitschaft zur Schichtarbeit. Einstiegsgehälter liegen bei ca. 13-15€ pro Stunde.</p>
      
      <h3>Staplerfahrer/in</h3>
      <p>Mit einem gültigen Staplerschein sind Sie in der Logistik heiß begehrt. Staplerfahrer verdienen in der Regel zwischen 14-17€ pro Stunde. Ein Staplerschein kann oft über den Arbeitgeber erworben werden.</p>
      
      <h3>Lagerhelfer/in</h3>
      <p>Der Einstieg in die Logistik: Als Lagerhelfer unterstützen Sie bei verschiedenen Aufgaben im Lager. Vorkenntnisse sind meist nicht erforderlich, Einarbeitung erfolgt vor Ort.</p>
      
      <h3>Fachkraft für Lagerlogistik</h3>
      <p>Mit einer abgeschlossenen Ausbildung zur Fachkraft für Lagerlogistik übernehmen Sie verantwortungsvolle Aufgaben wie Wareneingang, Bestandskontrolle und Versandvorbereitung.</p>
      
      <h2>Gehälter in der Logistik</h2>
      <p>Die Gehälter in der Logistik-Branche in Pforzheim sind wettbewerbsfähig. Durch Schichtzulagen und Überstunden können Mitarbeiter ihr Einkommen deutlich steigern. Bei PersoFlex GmbH profitieren Sie zusätzlich von Tankgutscheinen und anderen Benefits.</p>
      
      <h2>So finden Sie Ihren Logistik-Job</h2>
      <p>Der schnellste Weg zu einem Logistik-Job in Pforzheim führt über einen spezialisierten Personaldienstleister wie PersoFlex GmbH. Wir kennen die Unternehmen der Region und können Sie schnell und passgenau vermitteln.</p>
    `,
    author: 'PersoFlex Team',
    date: '2024-12-10',
    readTime: '5 Min.',
    category: 'Karriere',
    tags: ['Logistik', 'Jobs', 'Pforzheim', 'Enzkreis', 'Staplerfahrer']
  },
  {
    id: 'bewerbungstipps-zeitarbeit',
    title: 'Bewerbungstipps für Zeitarbeit: So überzeugen Sie beim Personaldienstleister',
    excerpt: 'Praktische Tipps für Ihre Bewerbung bei einer Zeitarbeitsfirma. Was Sie beachten sollten und wie Sie sich optimal präsentieren.',
    content: `
      <h2>Die Bewerbung bei einer Zeitarbeitsfirma</h2>
      <p>Eine Bewerbung bei einem Personaldienstleister unterscheidet sich in einigen Punkten von einer klassischen Bewerbung. Wir zeigen Ihnen, worauf es ankommt.</p>
      
      <h2>Welche Unterlagen brauche ich?</h2>
      <ul>
        <li>Aktueller Lebenslauf</li>
        <li>Arbeitszeugnisse (falls vorhanden)</li>
        <li>Relevante Zertifikate (z.B. Staplerschein, Schweißerpass)</li>
        <li>Ausweisdokument</li>
      </ul>
      
      <h2>Das persönliche Gespräch</h2>
      <p>Im Gegensatz zu klassischen Vorstellungsgesprächen geht es beim Personaldienstleister vor allem darum, Ihre Fähigkeiten und Wünsche zu erfassen. Seien Sie ehrlich über Ihre Stärken und Schwächen – nur so können wir Sie optimal vermitteln.</p>
      
      <h2>Was Sie mitbringen sollten</h2>
      <ul>
        <li>Klare Vorstellung über gewünschte Einsatzbereiche</li>
        <li>Flexibilität bei Arbeitszeiten und Einsatzorten</li>
        <li>Motivation und Zuverlässigkeit</li>
        <li>Offenheit für verschiedene Branchen</li>
      </ul>
      
      <h2>Unser Tipp</h2>
      <p>Bei PersoFlex GmbH legen wir Wert auf persönliche Betreuung. Kommen Sie einfach vorbei oder rufen Sie uns an – wir nehmen uns Zeit für Sie und finden gemeinsam den passenden Job.</p>
    `,
    author: 'PersoFlex Team',
    date: '2024-12-05',
    readTime: '4 Min.',
    category: 'Bewerbung',
    tags: ['Bewerbung', 'Tipps', 'Zeitarbeit', 'Karriere']
  },
  {
    id: 'industriejobs-pforzheim-nordschwarzwald',
    title: 'Industrie-Jobs in Pforzheim: Chancen in der Metallverarbeitung',
    excerpt: 'Die Metallverarbeitung prägt Pforzheim seit Jahrhunderten. Entdecken Sie aktuelle Karrieremöglichkeiten in der Industrie.',
    content: `
      <h2>Pforzheim - Stadt der Industrie</h2>
      <p>Pforzheim, bekannt als Goldstadt, hat eine lange Tradition in der Metallverarbeitung. Heute prägen moderne Produktionsunternehmen die regionale Wirtschaft und bieten vielfältige Karrieremöglichkeiten.</p>
      
      <h2>Beliebte Industrie-Jobs</h2>
      
      <h3>Produktionshelfer/in</h3>
      <p>Als Produktionshelfer unterstützen Sie in der Fertigung bei verschiedenen Aufgaben. Vorkenntnisse sind oft nicht erforderlich – wichtiger sind Zuverlässigkeit und die Bereitschaft zur Schichtarbeit.</p>
      
      <h3>Maschinenführer/in</h3>
      <p>Mit Erfahrung oder entsprechender Ausbildung können Sie als Maschinenführer Verantwortung für Produktionsanlagen übernehmen. Die Bezahlung ist entsprechend höher.</p>
      
      <h3>Qualitätsprüfer/in</h3>
      <p>Für Menschen mit einem guten Auge für Details: Als Qualitätsprüfer stellen Sie sicher, dass Produkte den Anforderungen entsprechen.</p>
      
      <h2>Voraussetzungen</h2>
      <p>Für viele Industrie-Jobs benötigen Sie keine spezielle Ausbildung. Wichtig sind: körperliche Belastbarkeit, Teamfähigkeit und die Bereitschaft zu Schichtarbeit. Deutschkenntnisse auf B1-Niveau sind in den meisten Fällen ausreichend.</p>
      
      <h2>Verdienst in der Industrie</h2>
      <p>Industriejobs bieten oft überdurchschnittliche Verdienstmöglichkeiten, besonders durch Schichtzulagen. Bei PersoFlex GmbH erhalten Sie faire Bezahlung nach GVP-Tarif.</p>
    `,
    author: 'PersoFlex Team',
    date: '2024-11-28',
    readTime: '5 Min.',
    category: 'Industrie',
    tags: ['Industrie', 'Produktion', 'Pforzheim', 'Metallverarbeitung']
  },
  {
    id: 'arbeitsrecht-zeitarbeit-faq',
    title: 'Arbeitsrecht in der Zeitarbeit: Die wichtigsten Fragen und Antworten',
    excerpt: 'Was sind Ihre Rechte als Zeitarbeitnehmer? Wir klären die häufigsten Fragen zu Arbeitsvertrag, Kündigungsschutz und Equal Pay.',
    content: `
      <h2>Ihre Rechte als Zeitarbeitnehmer</h2>
      <p>Als Zeitarbeitnehmer haben Sie dieselben grundlegenden Rechte wie alle anderen Arbeitnehmer in Deutschland. Das Arbeitnehmerüberlassungsgesetz (AÜG) regelt zusätzlich spezielle Schutzrechte.</p>
      
      <h2>Häufige Fragen</h2>
      
      <h3>Wie lange darf ich beim selben Kunden eingesetzt werden?</h3>
      <p>Die maximale Überlassungsdauer beträgt grundsätzlich 18 Monate. Durch Tarifverträge können Abweichungen möglich sein.</p>
      
      <h3>Was bedeutet Equal Pay?</h3>
      <p>Nach 9 Monaten Einsatz beim selben Kunden haben Sie Anspruch auf gleiche Bezahlung wie vergleichbare Stammmitarbeiter. Bei Anwendung von Branchenzuschlagstarifverträgen kann dies früher eintreten.</p>
      
      <h3>Wie sieht es mit dem Kündigungsschutz aus?</h3>
      <p>Es gelten die regulären Kündigungsfristen nach Arbeitsvertrag. Auch das Kündigungsschutzgesetz findet Anwendung, wenn die Voraussetzungen erfüllt sind.</p>
      
      <h3>Bekomme ich auch Urlaubsgeld?</h3>
      <p>Bei PersoFlex GmbH arbeiten wir nach GVP-Tarifvertrag. Das bedeutet: 30 Tage Urlaub und Anspruch auf Urlaubsgeld nach tariflichen Regelungen.</p>
      
      <h2>Bei Fragen: Wir helfen!</h2>
      <p>Haben Sie Fragen zu Ihren Rechten? Das Team von PersoFlex GmbH steht Ihnen jederzeit für Auskünfte zur Verfügung. Transparenz und Fairness sind für uns keine leeren Worte.</p>
    `,
    author: 'PersoFlex Team',
    date: '2024-11-20',
    readTime: '6 Min.',
    category: 'Recht',
    tags: ['Arbeitsrecht', 'AÜG', 'Equal Pay', 'Zeitarbeit']
  },
  {
    id: 'personaldienstleister-pforzheim-vergleich',
    title: 'Personaldienstleister in Pforzheim: Worauf Sie achten sollten',
    excerpt: 'Nicht alle Zeitarbeitsfirmen sind gleich. Erfahren Sie, woran Sie einen seriösen Personaldienstleister erkennen.',
    content: `
      <h2>Qualitätsmerkmale seriöser Personaldienstleister</h2>
      <p>In Pforzheim und Umgebung gibt es zahlreiche Personaldienstleister. Doch wie erkennen Sie einen seriösen Partner? Wir zeigen Ihnen die wichtigsten Qualitätsmerkmale.</p>
      
      <h2>Checkliste für die Auswahl</h2>
      
      <h3>1. Gültige AÜG-Erlaubnis</h3>
      <p>Jeder seriöse Personaldienstleister muss eine gültige Erlaubnis zur Arbeitnehmerüberlassung besitzen. Diese wird von der Bundesagentur für Arbeit erteilt und regelmäßig überprüft.</p>
      
      <h3>2. Tarifbindung</h3>
      <p>Achten Sie auf Tarifbindung (z.B. GVP/BAP). Das garantiert faire Löhne und Arbeitsbedingungen.</p>
      
      <h3>3. Transparente Verträge</h3>
      <p>Alle Konditionen sollten klar und verständlich im Arbeitsvertrag stehen. Scheuen Sie sich nicht, nachzufragen!</p>
      
      <h3>4. Persönliche Betreuung</h3>
      <p>Ein guter Personaldienstleister nimmt sich Zeit für Sie – vor, während und nach der Vermittlung.</p>
      
      <h3>5. Regionale Verwurzelung</h3>
      <p>Kenntnis des lokalen Arbeitsmarktes ist Gold wert. Ein regional verwurzelter Dienstleister kennt die Unternehmen und deren Anforderungen.</p>
      
      <h2>PersoFlex GmbH: Ihr Partner in Pforzheim</h2>
      <p>Als junges, dynamisches Unternehmen mit Sitz in Pforzheim erfüllen wir alle diese Kriterien. Überzeugen Sie sich selbst – wir freuen uns auf Ihren Besuch!</p>
    `,
    author: 'PersoFlex Team',
    date: '2024-11-15',
    readTime: '4 Min.',
    category: 'Ratgeber',
    tags: ['Personaldienstleister', 'Pforzheim', 'Qualität', 'Zeitarbeit']
  }
];

// Schema.org Structured Data für Blog
const blogStructuredData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "PersoFlex GmbH Blog",
  "description": "Ratgeber und News rund um Zeitarbeit, Jobs und Karriere in Pforzheim und dem Enzkreis",
  "url": "https://www.persoflex-gmbh.de/blog",
  "publisher": {
    "@type": "Organization",
    "name": "PersoFlex GmbH",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.persoflex-gmbh.de/logo.png"
    }
  }
};

export const Blog: React.FC = () => {
  // Kategorien aus den Posts extrahieren
  const categories = [...new Set(BLOG_POSTS.map(post => post.category))];

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="Blog | Zeitarbeit & Karriere Ratgeber | PersoFlex GmbH Pforzheim"
        description="Expertenwissen rund um Zeitarbeit, Jobs und Karriere in Pforzheim & Enzkreis. Tipps für Bewerber, Infos zu Logistik-Jobs und Arbeitsrecht."
      />
      
      <script type="application/ld+json">
        {JSON.stringify(blogStructuredData)}
      </script>

      {/* Hero Section */}
      <section className="bg-brand-black text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-brand-orange opacity-10 blur-[100px] rounded-full"></div>
        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-blue-500 opacity-5 blur-[80px] rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block py-1 px-3 bg-brand-orange/20 text-brand-orange border border-brand-orange text-xs font-bold uppercase tracking-widest mb-6 rounded-sm">
              Wissen & Karriere
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
              Der PersoFlex <span className="text-brand-orange">Blog</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Expertenwissen rund um Zeitarbeit, Jobs und Karriere in Pforzheim und dem Enzkreis. 
              Praktische Tipps, aktuelle Informationen und Einblicke in die Arbeitswelt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Kategorien Filter */}
      <section className="bg-gray-50 py-6 border-b border-gray-200 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-3 justify-center">
            <span className="text-sm font-medium text-gray-500 mr-2">Kategorien:</span>
            <button className="px-4 py-2 bg-brand-black text-white text-sm font-medium rounded-full hover:bg-brand-orange transition-colors">
              Alle
            </button>
            {categories.map((category) => (
              <button 
                key={category}
                className="px-4 py-2 bg-white text-gray-700 text-sm font-medium rounded-full border border-gray-200 hover:border-brand-orange hover:text-brand-orange transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, index) => (
              <motion.article
                key={post.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                variants={fadeIn}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                {/* Category Badge */}
                <div className="p-6 pb-0">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-orange/10 text-brand-orange text-xs font-bold rounded-full">
                    <Tag size={12} />
                    {post.category}
                  </span>
                </div>
                
                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h2 className="text-xl font-bold text-brand-black mb-3 group-hover:text-brand-orange transition-colors leading-tight">
                    <NavLink to={`/blog/${post.id}`}>
                      {post.title}
                    </NavLink>
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(post.date).toLocaleDateString('de-DE', { 
                        day: '2-digit', 
                        month: '2-digit', 
                        year: 'numeric' 
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>
                  
                  {/* Read More Link */}
                  <NavLink 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-brand-orange font-bold text-sm group-hover:gap-3 transition-all"
                  >
                    Weiterlesen <ArrowRight size={16} />
                  </NavLink>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-black text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange via-orange-400 to-brand-black"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black mb-6">
            Bereit für den nächsten <span className="text-brand-orange">Karriereschritt?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Ob Jobsuche oder Personalanfrage – wir sind für Sie da. Kontaktieren Sie uns noch heute!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink 
              to="/jobs" 
              className="inline-flex items-center justify-center gap-2 bg-brand-orange text-white px-8 py-4 font-bold rounded-sm hover:bg-white hover:text-brand-black transition-colors"
            >
              Jobs entdecken <ArrowRight size={18} />
            </NavLink>
            <NavLink 
              to="/kontakt" 
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white px-8 py-4 font-bold rounded-sm border-2 border-white hover:bg-white hover:text-brand-black transition-colors"
            >
              Kontakt aufnehmen
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};
