import React from 'react';

// =============================================================================
// SCHEMA MARKUP COMPONENT - Comprehensive JSON-LD Structured Data
// =============================================================================

const BASE_URL = 'https://www.persoflex-gmbh.de';

// Organization Schema - Core company data
export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["EmploymentAgency", "LocalBusiness", "Organization"],
    "@id": `${BASE_URL}/#organization`,
    "name": "PersoFlex GmbH",
    "alternateName": ["PersoFlex", "PersoFlex Personaldienstleistungen", "Zeitarbeit Pforzheim"],
    "legalName": "PersoFlex GmbH",
    "url": BASE_URL,
    "logo": {
      "@type": "ImageObject",
      "url": `${BASE_URL}/bilder/logo.webp`,
      "width": 200,
      "height": 60,
      "caption": "PersoFlex GmbH Logo"
    },
    "image": [
      `${BASE_URL}/bilder/og-image.jpg`,
      `${BASE_URL}/bilder/buero-pforzheim.jpg`
    ],
    "description": "PersoFlex GmbH ist Ihr regionaler Partner fuer Zeitarbeit und Personalvermittlung in Pforzheim und dem Enzkreis. Wir vermitteln qualifizierte Fachkraefte in Produktion, Logistik, Handwerk und Industrie. Als GVP-Mitglied garantieren wir faire Arbeitsbedingungen und tarifliche Bezahlung.",
    "slogan": "Ihr Partner fuer Zeitarbeit in Pforzheim",
    "foundingDate": "2024",
    "foundingLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Pforzheim",
        "addressCountry": "DE"
      }
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kiehnlestrasse 4",
      "addressLocality": "Pforzheim",
      "postalCode": "75172",
      "addressRegion": "Baden-Wuerttemberg",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.8929474,
      "longitude": 8.6949572
    },
    "hasMap": "https://www.google.com/maps?q=PersoFlex+GmbH+Pforzheim",
    "telephone": "+49 7231 1545010",
    "email": "info@persoflex-gmbh.de",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+49 7231 1545010",
        "contactType": "customer service",
        "availableLanguage": ["German", "English"],
        "areaServed": "DE",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "17:00"
        }
      },
      {
        "@type": "ContactPoint",
        "telephone": "+49 7231 1545010",
        "contactType": "employment",
        "availableLanguage": "German"
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Pforzheim",
        "@id": "https://www.wikidata.org/wiki/Q3276"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Enzkreis"
      },
      {
        "@type": "State",
        "name": "Baden-Wuerttemberg"
      },
      {
        "@type": "City",
        "name": "Karlsruhe"
      },
      {
        "@type": "City",
        "name": "Stuttgart"
      }
    ],
    "serviceType": [
      "Zeitarbeit",
      "Personalvermittlung",
      "Arbeitnehmerueberlassung",
      "Personalberatung",
      "Personalleasing",
      "Fachkraeftevermittlung"
    ],
    "knowsAbout": [
      "Produktion",
      "Logistik",
      "Industrie",
      "Metallverarbeitung",
      "Lagerlogistik",
      "Handwerk",
      "CNC-Bearbeitung",
      "Maschinenbedienung"
    ],
    "memberOf": {
      "@type": "Organization",
      "name": "GVP - Gesamtverband der Personaldienstleister",
      "url": "https://www.personaldienstleister.de"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Erlaubnis zur Arbeitnehmerueberlassung",
        "credentialCategory": "license",
        "issuedBy": {
          "@type": "Organization",
          "name": "Bundesagentur fuer Arbeit"
        }
      }
    ],
    "award": [
      "GVP Mitglied",
      "Tarifgebundener Personaldienstleister"
    ],
    "sameAs": [
      "https://www.linkedin.com/company/persoflex-gmbh",
      "https://www.xing.com/companies/persoflexgmbh",
      "https://www.facebook.com/persoflexgmbh"
    ],
    "priceRange": "Kostenlos fuer Bewerber",
    "currenciesAccepted": "EUR",
    "paymentAccepted": "Ueberweisung"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Local Business Schema with enhanced location data
export const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE_URL}/#localbusiness`,
    "name": "PersoFlex GmbH - Zeitarbeit Pforzheim",
    "image": `${BASE_URL}/bilder/buero-pforzheim.jpg`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kiehnlestrasse 4",
      "addressLocality": "Pforzheim",
      "postalCode": "75172",
      "addressRegion": "BW",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.8929474,
      "longitude": 8.6949572
    },
    "url": BASE_URL,
    "telephone": "+49 7231 1545010",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "priceRange": "Kostenlos fuer Bewerber"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Job Posting Schema
interface JobPostingSchemaProps {
  title: string;
  description: string;
  datePosted: string;
  validThrough?: string;
  employmentType: string;
  jobLocation?: string;
  baseSalary?: {
    min: number;
    max: number;
    currency?: string;
    unitText?: string;
  };
  industry?: string;
  qualifications?: string[];
  responsibilities?: string[];
  benefits?: string[];
  jobId?: string;
}

export const JobPostingSchema: React.FC<JobPostingSchemaProps> = ({
  title,
  description,
  datePosted,
  validThrough,
  employmentType,
  jobLocation = "Pforzheim",
  baseSalary,
  industry,
  qualifications,
  responsibilities,
  benefits,
  jobId
}) => {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": title,
    "description": description,
    "datePosted": datePosted,
    "validThrough": validThrough || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    "employmentType": employmentType,
    "hiringOrganization": {
      "@type": "Organization",
      "name": "PersoFlex GmbH",
      "sameAs": BASE_URL,
      "logo": `${BASE_URL}/bilder/logo.webp`
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": jobLocation,
        "addressRegion": "Baden-Wuerttemberg",
        "addressCountry": "DE"
      }
    },
    "directApply": true,
    "jobLocationType": "TELECOMMUTE" // or remove if on-site only
  };

  if (baseSalary) {
    schema.baseSalary = {
      "@type": "MonetaryAmount",
      "currency": baseSalary.currency || "EUR",
      "value": {
        "@type": "QuantitativeValue",
        "minValue": baseSalary.min,
        "maxValue": baseSalary.max,
        "unitText": baseSalary.unitText || "HOUR"
      }
    };
  }

  if (industry) {
    schema.industry = industry;
  }

  if (qualifications && qualifications.length > 0) {
    schema.qualifications = qualifications.join(", ");
  }

  if (responsibilities && responsibilities.length > 0) {
    schema.responsibilities = responsibilities.join(", ");
  }

  if (benefits && benefits.length > 0) {
    schema.jobBenefits = benefits.join(", ");
  }

  if (jobId) {
    schema.identifier = {
      "@type": "PropertyValue",
      "name": "PersoFlex GmbH",
      "value": jobId
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Article/Blog Post Schema
interface ArticleSchemaProps {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  articleSection?: string;
  keywords?: string[];
  wordCount?: number;
  url: string;
}

export const ArticleSchema: React.FC<ArticleSchemaProps> = ({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author = "PersoFlex Team",
  articleSection,
  keywords,
  wordCount,
  url
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "headline": headline,
    "description": description,
    "image": image || `${BASE_URL}/bilder/og-default.jpg`,
    "author": {
      "@type": "Organization",
      "name": author,
      "url": BASE_URL
    },
    "publisher": {
      "@type": "Organization",
      "name": "PersoFlex GmbH",
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/bilder/logo.webp`,
        "width": 200,
        "height": 60
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "articleSection": articleSection,
    "keywords": keywords?.join(", "),
    "wordCount": wordCount,
    "inLanguage": "de-DE",
    "isAccessibleForFree": true
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// FAQ Schema
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  items: FAQItem[];
}

export const FAQSchema: React.FC<FAQSchemaProps> = ({ items }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Breadcrumb Schema
interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ items }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Service Schema
interface ServiceSchemaProps {
  name: string;
  description: string;
  serviceType: string;
  areaServed?: string[];
  provider?: string;
}

export const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  name,
  description,
  serviceType,
  areaServed = ["Pforzheim", "Enzkreis", "Baden-Wuerttemberg"],
  provider = "PersoFlex GmbH"
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "serviceType": serviceType,
    "provider": {
      "@type": "Organization",
      "name": provider,
      "url": BASE_URL
    },
    "areaServed": areaServed.map(area => ({
      "@type": "Place",
      "name": area
    })),
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": BASE_URL,
      "servicePhone": "+49 7231 1545010",
      "availableLanguage": ["German", "English"]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Review/Testimonial Schema
interface ReviewSchemaProps {
  author: string;
  reviewBody: string;
  ratingValue: number;
  datePublished?: string;
}

export const ReviewSchema: React.FC<ReviewSchemaProps> = ({
  author,
  reviewBody,
  ratingValue,
  datePublished
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": author
    },
    "reviewBody": reviewBody,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": ratingValue,
      "bestRating": 5
    },
    "itemReviewed": {
      "@type": "Organization",
      "name": "PersoFlex GmbH",
      "url": BASE_URL
    },
    "datePublished": datePublished || new Date().toISOString()
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Aggregate Rating Schema
interface AggregateRatingSchemaProps {
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
}

export const AggregateRatingSchema: React.FC<AggregateRatingSchemaProps> = ({
  ratingValue,
  reviewCount,
  bestRating = 5
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PersoFlex GmbH",
    "url": BASE_URL,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue,
      "reviewCount": reviewCount,
      "bestRating": bestRating
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Event Schema (for job fairs, workshops, etc.)
interface EventSchemaProps {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location?: string;
  url?: string;
  eventStatus?: 'EventScheduled' | 'EventCancelled' | 'EventPostponed';
  eventAttendanceMode?: 'OfflineEventAttendanceMode' | 'OnlineEventAttendanceMode' | 'MixedEventAttendanceMode';
}

export const EventSchema: React.FC<EventSchemaProps> = ({
  name,
  description,
  startDate,
  endDate,
  location = "Pforzheim",
  url,
  eventStatus = 'EventScheduled',
  eventAttendanceMode = 'OfflineEventAttendanceMode'
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": name,
    "description": description,
    "startDate": startDate,
    "endDate": endDate || startDate,
    "eventStatus": `https://schema.org/${eventStatus}`,
    "eventAttendanceMode": `https://schema.org/${eventAttendanceMode}`,
    "location": {
      "@type": "Place",
      "name": location,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": location,
        "addressCountry": "DE"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "PersoFlex GmbH",
      "url": BASE_URL
    },
    "url": url || BASE_URL
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// WebPage Schema
interface WebPageSchemaProps {
  name: string;
  description: string;
  url: string;
  breadcrumb?: BreadcrumbItem[];
}

export const WebPageSchema: React.FC<WebPageSchemaProps> = ({
  name,
  description,
  url,
  breadcrumb
}) => {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": name,
    "description": description,
    "url": url,
    "isPartOf": {
      "@type": "WebSite",
      "name": "PersoFlex GmbH",
      "url": BASE_URL
    },
    "publisher": {
      "@type": "Organization",
      "name": "PersoFlex GmbH",
      "url": BASE_URL
    },
    "inLanguage": "de-DE"
  };

  if (breadcrumb && breadcrumb.length > 0) {
    schema.breadcrumb = {
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumb.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }))
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Contact Page Schema
export const ContactPageSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Kontakt - PersoFlex GmbH",
    "description": "Kontaktieren Sie PersoFlex GmbH fuer Zeitarbeit und Personalvermittlung in Pforzheim",
    "url": `${BASE_URL}/kontakt`,
    "mainEntity": {
      "@type": "Organization",
      "name": "PersoFlex GmbH",
      "telephone": "+49 7231 1545010",
      "email": "info@persoflex-gmbh.de",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kiehnlestrasse 4",
        "addressLocality": "Pforzheim",
        "postalCode": "75172",
        "addressCountry": "DE"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// About Page Schema
export const AboutPageSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Ueber uns - PersoFlex GmbH",
    "description": "Erfahren Sie mehr ueber PersoFlex GmbH, Ihren regionalen Partner fuer Zeitarbeit und Personalvermittlung in Pforzheim",
    "url": `${BASE_URL}/ueber-uns`,
    "mainEntity": {
      "@type": "Organization",
      "name": "PersoFlex GmbH",
      "@id": `${BASE_URL}/#organization`
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// How-To Schema (for guides)
interface HowToStep {
  name: string;
  text: string;
  image?: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string; // ISO 8601 duration format, e.g., "PT30M"
}

export const HowToSchema: React.FC<HowToSchemaProps> = ({
  name,
  description,
  steps,
  totalTime
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "totalTime": totalTime,
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      "image": step.image
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Collection Page Schema (for job listings, blog archive)
interface CollectionPageSchemaProps {
  name: string;
  description: string;
  url: string;
  numberOfItems?: number;
}

export const CollectionPageSchema: React.FC<CollectionPageSchemaProps> = ({
  name,
  description,
  url,
  numberOfItems
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": name,
    "description": description,
    "url": url,
    "isPartOf": {
      "@type": "WebSite",
      "name": "PersoFlex GmbH",
      "url": BASE_URL
    },
    "numberOfItems": numberOfItems
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// Speakable Schema (for voice search optimization)
interface SpeakableSchemaProps {
  url: string;
  cssSelectors: string[];
}

export const SpeakableSchema: React.FC<SpeakableSchemaProps> = ({
  url,
  cssSelectors
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": url,
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": cssSelectors
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default {
  OrganizationSchema,
  LocalBusinessSchema,
  JobPostingSchema,
  ArticleSchema,
  FAQSchema,
  BreadcrumbSchema,
  ServiceSchema,
  ReviewSchema,
  AggregateRatingSchema,
  EventSchema,
  WebPageSchema,
  ContactPageSchema,
  AboutPageSchema,
  HowToSchema,
  CollectionPageSchema,
  SpeakableSchema
};
