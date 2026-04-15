# Blog-Anleitung: Neue Beiträge hinzufügen

## Übersicht

Diese Anleitung erklärt, wie Sie neue Blog-Beiträge zur PersoFlex Website hinzufügen können.

---

## Schritt-für-Schritt Anleitung

### 1. Datei öffnen

Öffnen Sie die Datei: `pages/Blog.tsx`

### 2. Vorlage kopieren

Kopieren Sie diese Vorlage und fügen Sie sie am **ANFANG** des `BLOG_POSTS` Arrays ein (neueste Beiträge erscheinen zuerst):

```typescript
{
  id: 'url-freundliche-id',
  title: 'Ihr SEO-optimierter Titel hier',
  excerpt: 'Kurze Beschreibung für Vorschau und SEO (max. 160 Zeichen).',
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
```

### 3. Felder ausfüllen

| Feld | Beschreibung | Beispiel |
|------|--------------|----------|
| `id` | URL-freundliche ID (Kleinbuchstaben, Bindestriche, keine Leerzeichen) | `'neue-jobs-pforzheim-2024'` |
| `title` | SEO-optimierter Titel (max. 60 Zeichen für beste Anzeige) | `'Neue Jobs in Pforzheim: Aktuelle Stellenangebote 2024'` |
| `excerpt` | Kurzbeschreibung für Vorschau (max. 160 Zeichen) | `'Entdecken Sie die neuesten Jobangebote...'` |
| `content` | HTML-formatierter Artikelinhalt | Siehe HTML-Formatierung unten |
| `author` | Autorenname | `'PersoFlex Team'` oder `'Max Mustermann'` |
| `date` | Datum im Format YYYY-MM-DD | `'2024-12-20'` |
| `readTime` | Geschätzte Lesezeit | `'5 Min.'` |
| `category` | Kategorie (bestehend oder neu) | `'Zeitarbeit'`, `'Karriere'`, `'Bewerbung'` |
| `tags` | Array von Keywords für SEO | `['Jobs', 'Pforzheim', 'Industrie']` |
| `featuredImage` | (Optional) Pfad zum Beitragsbild | `'/bilder/blog/bild.webp'` |

---

## HTML-Formatierung für Content

Verwenden Sie folgende HTML-Tags im `content`-Feld:

### Überschriften
```html
<h2>Hauptüberschrift</h2>
<h3>Unterüberschrift</h3>
```

### Absätze
```html
<p>Ihr Text hier. Mehrere Sätze in einem Absatz.</p>
```

### Listen
```html
<ul>
  <li>Punkt 1</li>
  <li>Punkt 2</li>
  <li>Punkt 3</li>
</ul>
```

### Fett und Hervorhebungen
```html
<strong>Wichtiger Text</strong>
```

### Links
```html
<a href="/jobs">Zu unseren Jobs</a>
```

---

## Bestehende Kategorien

- `Zeitarbeit` - Allgemeines zur Zeitarbeit
- `Karriere` - Karrieretipps und Jobinformationen
- `Bewerbung` - Bewerbungstipps
- `Industrie` - Industrie-spezifische Themen
- `Recht` - Arbeitsrecht und rechtliche Informationen
- `Ratgeber` - Allgemeine Ratgeber

Sie können auch neue Kategorien erstellen - diese werden automatisch im Filter angezeigt.

---

## Beispiel: Vollständiger neuer Beitrag

```typescript
{
  id: 'staplerfahrer-jobs-pforzheim-2024',
  title: 'Staplerfahrer Jobs in Pforzheim: Top-Gehälter & Benefits',
  excerpt: 'Alles über Staplerfahrer-Jobs in Pforzheim: Gehalt, Anforderungen und wie Sie sich bewerben.',
  content: `
    <h2>Staplerfahrer werden in Pforzheim gesucht</h2>
    <p>Die Nachfrage nach qualifizierten Staplerfahrern in Pforzheim und dem Enzkreis ist hoch. 
    Erfahren Sie alles über diese gefragte Position.</p>
    
    <h2>Gehalt und Benefits</h2>
    <p>Staplerfahrer verdienen in der Region zwischen 14-17€ pro Stunde. 
    Hinzu kommen Schichtzulagen und weitere Vorteile.</p>
    
    <h3>Was wir bieten</h3>
    <ul>
      <li>Faire Bezahlung nach GVP-Tarif</li>
      <li>30 Tage Urlaub</li>
      <li>Tankgutscheine</li>
      <li>Persönliche Betreuung</li>
    </ul>
    
    <h2>Anforderungen</h2>
    <p>Sie benötigen einen gültigen Staplerschein. Falls Sie noch keinen haben, 
    können wir Sie bei der Ausbildung unterstützen.</p>
    
    <h2>Jetzt bewerben</h2>
    <p>Kontaktieren Sie uns für mehr Informationen zu aktuellen Staplerfahrer-Positionen.</p>
  `,
  author: 'PersoFlex Team',
  date: '2024-12-20',
  readTime: '4 Min.',
  category: 'Karriere',
  tags: ['Staplerfahrer', 'Jobs', 'Pforzheim', 'Logistik', 'Gehalt'],
  featuredImage: '/bilder/blog/staplerfahrer.webp'
},
```

---

## SEO-Tipps für Blog-Beiträge

1. **Titel**: Wichtigste Keywords am Anfang, max. 60 Zeichen
2. **Excerpt**: Enthält Haupt-Keywords, max. 160 Zeichen
3. **Tags**: 3-5 relevante Keywords für die Suche
4. **Content**: 
   - Mindestens 300 Wörter für gutes SEO
   - Haupt-Keyword in erster H2-Überschrift
   - Keyword natürlich im Text verteilen
5. **URL (id)**: Enthält Haupt-Keyword, kurz und beschreibend

---

## Bilder hinzufügen (Optional)

1. Bild in `/bilder/blog/` speichern
2. Format: WebP für beste Performance
3. Empfohlene Größe: 1200x630 Pixel (Social Media optimiert)
4. `featuredImage` Pfad im Blog-Post eintragen

---

## Fragen?

Bei Fragen zur Blog-Verwaltung kontaktieren Sie die Webentwicklung.
