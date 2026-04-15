import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Tag, BookOpen, User } from 'lucide-react';
import { SEO } from '../components/SEO';

/**
 * =============================================================================
 * BLOG SYSTEM - ANLEITUNG ZUM HINZUFÜGEN NEUER BEITRÄGE
 * =============================================================================
 * 
 * Um einen neuen Blog-Beitrag hinzuzufügen:
 * 
 * 1. Kopieren Sie die BLOG_POST_TEMPLATE unten
 * 2. Fügen Sie sie am ANFANG des BLOG_POSTS Arrays ein (neueste zuerst)
 * 3. Füllen Sie alle Felder aus:
 * 
 *    - id: URL-freundliche ID (keine Leerzeichen, nur Kleinbuchstaben und Bindestriche)
 *    - title: SEO-optimierter Titel (max. 60 Zeichen für beste Anzeige)
 *    - excerpt: Kurzbeschreibung für Vorschau (max. 160 Zeichen)
 *    - content: HTML-formatierter Inhalt (siehe Beispiele unten)
 *    - author: Autorenname
 *    - date: Datum im Format YYYY-MM-DD
 *    - readTime: Geschätzte Lesezeit
 *    - category: Eine der vorhandenen Kategorien oder neue erstellen
 *    - tags: Array von relevanten Keywords
 *    - featuredImage: (optional) Pfad zum Beitragsbild
 * 
 * CONTENT FORMATIERUNG:
 * - <h2>...</h2> für Hauptüberschriften
 * - <h3>...</h3> für Unterüberschriften
 * - <p>...</p> für Absätze
 * - <ul><li>...</li></ul> für Listen
 * - <strong>...</strong> für fette Schrift
 * 
 * =============================================================================
 */

// BLOG_POST_TEMPLATE - Kopieren Sie diese Vorlage für neue Beiträge:
/*
{
  id: 'url-freundliche-id',
  title: 'Ihr SEO-optimierter Titel hier',
  excerpt: 'Kurze Beschreibung des Artikels für Vorschau und SEO (max. 160 Zeichen).',
  content: `
    <h2>Erste Hauptüberschrift</h2>
    <p>Ihr Einleitungstext hier...</p>
    
    <h3>Unterüberschrift</h3>
    <p>Weitere Inhalte...</p>
    
    <h2>Zweite Hauptüberschrift</h2>
    <p>Mehr Inhalte...</p>
  `,
  author: 'PersoFlex Team',
  date: '2024-XX-XX',
  readTime: 'X Min.',
  category: 'Kategorie',
  tags: ['Tag1', 'Tag2', 'Tag3'],
  featuredImage: '/bilder/blog/ihr-bild.webp'
},
*/

// Blog-Artikel Typdefinition
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featuredImage?: string;
}

// =============================================================================
// BLOG_POSTS ARRAY - Fügen Sie neue Beiträge am ANFANG ein (neueste zuerst)
// =============================================================================
export const BLOG_POSTS: BlogPost[] = [
  // ---- NEUESTE BEITRÄGE HIER EINFÜGEN ----
  
  {
    id: 'zeitarbeit-pforzheim-vorteile',
    title: 'Zeitarbeit in Pforzheim: 7 Vorteile für Arbeitnehmer und Unternehmen',
    excerpt: 'Erfahren Sie, warum Zeitarbeit in Pforzheim und dem Enzkreis für beide Seiten eine Win-Win-Situation ist.',
    content: `
      <h2>Was ist Zeitarbeit und wie funktioniert sie?</h2>
      <p>Zeitarbeit, auch Arbeitnehmerüberlassung genannt, ist ein Beschäftigungsmodell, bei dem Arbeitnehmer bei einem Personaldienstleister angestellt sind und an verschiedene Kundenunternehmen verliehen werden. In Pforzheim und dem Enzkreis hat sich dieses Modell als wichtiger Bestandteil des Arbeitsmarktes etabliert.</p>
      
      <h2>Die 7 wichtigsten Vorteile der Zeitarbeit</h2>
      
      <h3>1. Schneller Einstieg in den Arbeitsmarkt</h3>
      <p>Besonders für Berufseinsteiger, Wiedereinsteiger oder Menschen in beruflicher Neuorientierung bietet Zeitarbeit eine schnelle Möglichkeit, im Arbeitsmarkt Fuß zu fassen.</p>
      
      <h3>2. Vielfältige Berufserfahrung</h3>
      <p>Durch Einsätze in verschiedenen Unternehmen sammeln Zeitarbeitnehmer wertvolle Erfahrungen in unterschiedlichen Branchen und Arbeitsumgebungen.</p>
      
      <h3>3. Faire Bezahlung nach Tarifvertrag</h3>
      <p>Seriöse Personaldienstleister wie PersoFlex GmbH arbeiten nach dem GVP-Tarifvertrag. Das bedeutet faire Löhne und weitere tarifliche Leistungen.</p>
      
      <h3>4. Übernahmechancen</h3>
      <p>Viele Unternehmen nutzen Zeitarbeit als erweiterte Probezeit. Wer sich bewährt, hat gute Chancen auf eine Festanstellung.</p>
      
      <h3>5. Flexibilität für Unternehmen</h3>
      <p>Für Unternehmen bietet Zeitarbeit die Möglichkeit, Auftragsspitzen abzufangen, ohne langfristige Verpflichtungen einzugehen.</p>
      
      <h3>6. Professionelles Recruiting</h3>
      <p>Unternehmen profitieren von der Expertise des Personaldienstleisters bei der Auswahl geeigneter Kandidaten.</p>
      
      <h3>7. Rechtliche Sicherheit</h3>
      <p>Bei der Zusammenarbeit mit einem seriösen Personaldienstleister sind alle rechtlichen Aspekte professionell geregelt.</p>
      
      <h2>Fazit</h2>
      <p>Zeitarbeit in Pforzheim und Umgebung bietet echte Karrierechancen für Arbeitnehmer und flexible Personalplanung für Unternehmen.</p>
    `,
    author: 'PersoFlex Team',
    date: '2024-12-15',
    readTime: '6 Min.',
    category: 'Zeitarbeit',
    tags: ['Zeitarbeit', 'Pforzheim', 'Arbeitnehmerüberlassung', 'Karriere'],
    featuredImage: '/bilder/blog/zeitarbeit-vorteile.webp'
  },
  {
    id: 'logistik-jobs-pforzheim-enzkreis',
    title: 'Logistik Jobs in Pforzheim & Enzkreis: Der komplette Guide 2024',
    excerpt: 'Alles über Logistik-Karrieren in der Region: Von Kommissionierer bis Lagerleiter. Gehälter und Anforderungen.',
    content: `
      <h2>Die Logistik-Branche in Pforzheim boomt</h2>
      <p>Pforzheim und der Enzkreis haben sich zu einem wichtigen Logistik-Standort in Baden-Württemberg entwickelt. Die zentrale Lage und gute Verkehrsanbindung machen die Region attraktiv für Logistikunternehmen.</p>
      
      <h2>Welche Logistik-Jobs gibt es?</h2>
      
      <h3>Kommissionierer/in</h3>
      <p>Als Kommissionierer stellen Sie Waren nach Auftrag zusammen. Einstiegsgehälter liegen bei ca. 13-15€ pro Stunde.</p>
      
      <h3>Staplerfahrer/in</h3>
      <p>Mit einem gültigen Staplerschein sind Sie in der Logistik heiß begehrt. Staplerfahrer verdienen zwischen 14-17€ pro Stunde.</p>
      
      <h3>Lagerhelfer/in</h3>
      <p>Der Einstieg in die Logistik: Vorkenntnisse sind meist nicht erforderlich, Einarbeitung erfolgt vor Ort.</p>
      
      <h3>Fachkraft für Lagerlogistik</h3>
      <p>Mit abgeschlossener Ausbildung übernehmen Sie verantwortungsvolle Aufgaben wie Wareneingang und Bestandskontrolle.</p>
      
      <h2>So finden Sie Ihren Logistik-Job</h2>
      <p>Der schnellste Weg führt über einen spezialisierten Personaldienstleister wie PersoFlex GmbH. Wir kennen die Unternehmen der Region.</p>
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
    excerpt: 'Praktische Tipps für Ihre Bewerbung bei einer Zeitarbeitsfirma. Was Sie beachten sollten.',
    content: `
      <h2>Die Bewerbung bei einer Zeitarbeitsfirma</h2>
      <p>Eine Bewerbung bei einem Personaldienstleister unterscheidet sich in einigen Punkten von einer klassischen Bewerbung.</p>
      
      <h2>Welche Unterlagen brauche ich?</h2>
      <ul>
        <li>Aktueller Lebenslauf</li>
        <li>Arbeitszeugnisse (falls vorhanden)</li>
        <li>Relevante Zertifikate (z.B. Staplerschein)</li>
        <li>Ausweisdokument</li>
      </ul>
      
      <h2>Das persönliche Gespräch</h2>
      <p>Seien Sie ehrlich über Ihre Stärken und Schwächen – nur so können wir Sie optimal vermitteln.</p>
      
      <h2>Was Sie mitbringen sollten</h2>
      <ul>
        <li>Klare Vorstellung über gewünschte Einsatzbereiche</li>
        <li>Flexibilität bei Arbeitszeiten und Einsatzorten</li>
        <li>Motivation und Zuverlässigkeit</li>
      </ul>
      
      <h2>Unser Tipp</h2>
      <p>Bei PersoFlex GmbH legen wir Wert auf persönliche Betreuung. Kommen Sie einfach vorbei!</p>
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
    excerpt: 'Die Metallverarbeitung prägt Pforzheim seit Jahrhunderten. Entdecken Sie aktuelle Karrieremöglichkeiten.',
    content: `
      <h2>Pforzheim - Stadt der Industrie</h2>
      <p>Pforzheim, bekannt als Goldstadt, hat eine lange Tradition in der Metallverarbeitung. Moderne Produktionsunternehmen bieten vielfältige Karrieremöglichkeiten.</p>
      
      <h2>Beliebte Industrie-Jobs</h2>
      
      <h3>Produktionshelfer/in</h3>
      <p>Als Produktionshelfer unterstützen Sie in der Fertigung. Wichtig sind Zuverlässigkeit und Schichtbereitschaft.</p>
      
      <h3>Maschinenführer/in</h3>
      <p>Mit Erfahrung übernehmen Sie Verantwortung für Produktionsanlagen.</p>
      
      <h3>Qualitätsprüfer/in</h3>
      <p>Als Qualitätsprüfer stellen Sie sicher, dass Produkte den Anforderungen entsprechen.</p>
      
      <h2>Verdienst in der Industrie</h2>
      <p>Industriejobs bieten überdurchschnittliche Verdienstmöglichkeiten durch Schichtzulagen.</p>
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
    excerpt: 'Was sind Ihre Rechte als Zeitarbeitnehmer? Wir klären die häufigsten Fragen.',
    content: `
      <h2>Ihre Rechte als Zeitarbeitnehmer</h2>
      <p>Als Zeitarbeitnehmer haben Sie dieselben grundlegenden Rechte wie alle anderen Arbeitnehmer in Deutschland.</p>
      
      <h2>Häufige Fragen</h2>
      
      <h3>Wie lange darf ich beim selben Kunden eingesetzt werden?</h3>
      <p>Die maximale Überlassungsdauer beträgt grundsätzlich 18 Monate.</p>
      
      <h3>Was bedeutet Equal Pay?</h3>
      <p>Nach 9 Monaten haben Sie Anspruch auf gleiche Bezahlung wie vergleichbare Stammmitarbeiter.</p>
      
      <h3>Wie sieht es mit dem Kündigungsschutz aus?</h3>
      <p>Es gelten die regulären Kündigungsfristen nach Arbeitsvertrag.</p>
      
      <h3>Bekomme ich auch Urlaubsgeld?</h3>
      <p>Bei PersoFlex GmbH arbeiten wir nach GVP-Tarifvertrag: 30 Tage Urlaub und Urlaubsgeld.</p>
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
    excerpt: 'Nicht alle Zeitarbeitsfirmen sind gleich. Erfahren Sie, woran Sie einen seriösen Partner erkennen.',
    content: `
      <h2>Qualitätsmerkmale seriöser Personaldienstleister</h2>
      <p>In Pforzheim gibt es zahlreiche Personaldienstleister. Wie erkennen Sie einen seriösen Partner?</p>
      
      <h2>Checkliste für die Auswahl</h2>
      
      <h3>1. Gültige AÜG-Erlaubnis</h3>
      <p>Jeder seriöse Personaldienstleister muss eine gültige Erlaubnis zur Arbeitnehmerüberlassung besitzen.</p>
      
      <h3>2. Tarifbindung</h3>
      <p>Achten Sie auf Tarifbindung (z.B. GVP/BAP). Das garantiert faire Löhne.</p>
      
      <h3>3. Transparente Verträge</h3>
      <p>Alle Konditionen sollten klar im Arbeitsvertrag stehen.</p>
      
      <h3>4. Persönliche Betreuung</h3>
      <p>Ein guter Personaldienstleister nimmt sich Zeit für Sie.</p>
      
      <h3>5. Regionale Verwurzelung</h3>
      <p>Kenntnis des lokalen Arbeitsmarktes ist Gold wert.</p>
      
      <h2>PersoFlex GmbH: Ihr Partner in Pforzheim</h2>
      <p>Wir erfüllen alle diese Kriterien. Überzeugen Sie sich selbst!</p>
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
  "name": "PersoFlex GmbH Blog - Zeitarbeit & Karriere Ratgeber",
  "description": "Expertenwissen rund um Zeitarbeit, Jobs und Karriere in Pforzheim und dem Enzkreis",
  "url": "https://www.persoflex-gmbh.de/blog",
  "inLanguage": "de-DE",
  "publisher": {
    "@type": "Organization",
    "name": "PersoFlex GmbH",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.persoflex-gmbh.de/bilder/logo.webp"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kiehnlestraße 4",
      "addressLocality": "Pforzheim",
      "postalCode": "75172",
      "addressCountry": "DE"
    }
  }
};

export const Blog: React.FC = () => {
  const categories = [...new Set(BLOG_POSTS.map(post => post.category))];
  const [activeCategory, setActiveCategory] = React.useState<string | null>(null);
  
  const filteredPosts = activeCategory 
    ? BLOG_POSTS.filter(post => post.category === activeCategory)
    : BLOG_POSTS;

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Blog | Zeitarbeit & Karriere Ratgeber | PersoFlex GmbH Pforzheim"
        description="Expertenwissen rund um Zeitarbeit, Jobs und Karriere in Pforzheim & Enzkreis. Tipps für Bewerber, Infos zu Logistik-Jobs und Arbeitsrecht."
        keywords="Zeitarbeit Blog, Karriere Ratgeber, Jobs Pforzheim, Personaldienstleister Tipps"
        canonicalUrl="https://www.persoflex-gmbh.de/blog"
      />
      
      <script type="application/ld+json">
        {JSON.stringify(blogStructuredData)}
      </script>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 mb-6">
            <BookOpen className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-orange-700">Wissen & Karriere</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
            Der PersoFlex <span className="text-orange-500">Blog</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Expertenwissen rund um Zeitarbeit, Jobs und Karriere in Pforzheim und dem Enzkreis. 
            Praktische Tipps und aktuelle Informationen.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-6 border-b border-gray-200 bg-white sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center gap-3 justify-center">
            <span className="text-sm font-medium text-gray-500 mr-2">Kategorien:</span>
            <button 
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                !activeCategory 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-600'
              }`}
            >
              Alle
            </button>
            {categories.map((category) => (
              <button 
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeCategory === category 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-600'
                }`}
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
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-orange-300 hover:shadow-lg transition-all duration-300"
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                {/* Featured Image Placeholder */}
                {post.featuredImage ? (
                  <div className="aspect-video bg-gray-100 overflow-hidden">
                    <img 
                      src={post.featuredImage} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-orange-300" />
                  </div>
                )}
                
                {/* Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-100 text-orange-600 text-xs font-semibold rounded-full mb-4">
                    <Tag size={12} />
                    <span itemProp="articleSection">{post.category}</span>
                  </span>
                  
                  <h2 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors leading-tight" itemProp="headline">
                    <Link to={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3" itemProp="description">
                    {post.excerpt}
                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1" itemProp="author" itemScope itemType="https://schema.org/Person">
                      <User size={14} />
                      <span itemProp="name">{post.author}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      <time itemProp="datePublished" dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('de-DE', { 
                          day: '2-digit', 
                          month: '2-digit', 
                          year: 'numeric' 
                        })}
                      </time>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>
                  
                  {/* Read More Link */}
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm hover:gap-3 transition-all"
                    itemProp="url"
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Sie haben Fragen oder suchen einen neuen Job? Unser Team in Pforzheim freut sich auf Sie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/kontakt" 
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Kontakt aufnehmen <ArrowRight size={18} />
            </Link>
            <Link 
              to="/jobs" 
              className="inline-flex items-center justify-center gap-2 bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-orange-300 hover:text-orange-500 transition-colors"
            >
              Jobs ansehen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
