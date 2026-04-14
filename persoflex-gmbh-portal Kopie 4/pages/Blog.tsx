import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag, Flame, BookOpen } from 'lucide-react';
import { SEO } from '../components/SEO';

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
  const categories = [...new Set(BLOG_POSTS.map(post => post.category))];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Blog | Zeitarbeit & Karriere Ratgeber | PersoFlex GmbH Pforzheim"
        description="Expertenwissen rund um Zeitarbeit, Jobs und Karriere in Pforzheim & Enzkreis. Tipps für Bewerber, Infos zu Logistik-Jobs und Arbeitsrecht."
        keywords="Zeitarbeit Blog, Karriere Ratgeber, Jobs Pforzheim, Personaldienstleister Tipps"
      />
      
      <script type="application/ld+json">
        {JSON.stringify(blogStructuredData)}
      </script>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/20 mb-6">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Wissen & Karriere</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6">
            Der PersoFlex <span className="text-gradient-flame">Blog</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertenwissen rund um Zeitarbeit, Jobs und Karriere in Pforzheim und dem Enzkreis. 
            Praktische Tipps, aktuelle Informationen und Einblicke in die Arbeitswelt.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-6 border-y border-border bg-card/50 backdrop-blur sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center gap-3 justify-center">
            <span className="text-sm font-medium text-muted-foreground mr-2">Kategorien:</span>
            <button className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white text-sm font-medium rounded-full">
              Alle
            </button>
            {categories.map((category) => (
              <button 
                key={category}
                className="px-4 py-2 bg-card text-muted-foreground text-sm font-medium rounded-full border border-border hover:border-primary/50 hover:text-foreground transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.id}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3),0_0_30px_rgba(234,88,12,0.1)] transition-all duration-300"
              >
                {/* Category Badge */}
                <div className="p-6 pb-0">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                    <Tag size={12} />
                    {post.category}
                  </span>
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col">
                  <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                    <Link to={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
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
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all"
                  >
                    Weiterlesen <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card border-t border-border relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Flame className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-black text-foreground mb-4">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Sie haben Fragen oder suchen einen neuen Job? Unser Team in Pforzheim freut sich auf Sie!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/jobs" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-bold hover:shadow-[0_0_40px_rgba(234,88,12,0.4)] transition-all"
            >
              Jobs entdecken <ArrowRight size={18} />
            </Link>
            <Link 
              to="/kontakt" 
              className="px-8 py-4 border border-border rounded-xl text-foreground font-bold hover:bg-background hover:border-primary/50 transition-all"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
