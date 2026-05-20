import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Accessible Breadcrumb component with BreadcrumbList structured data for SEO/LLM visibility.
 * Automatically generates JSON-LD schema for Google rich results.
 */
export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  // Generate BreadcrumbList structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Startseite",
        "item": "https://www.persoflex-gmbh.de/"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        ...(item.href ? { "item": `https://www.persoflex-gmbh.de${item.href}` } : {})
      }))
    ]
  };

  return (
    <>
      {/* BreadcrumbList Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Visible Breadcrumb Navigation */}
      <nav 
        aria-label="Breadcrumb" 
        className={`flex items-center gap-2 text-sm text-gray-500 ${className}`}
      >
        <ol className="flex items-center gap-1 flex-wrap" itemScope itemType="https://schema.org/BreadcrumbList">
          {/* Home Link */}
          <li 
            className="flex items-center gap-1"
            itemProp="itemListElement" 
            itemScope 
            itemType="https://schema.org/ListItem"
          >
            <Link 
              to="/" 
              className="hover:text-orange-500 transition-colors flex items-center gap-1"
              itemProp="item"
            >
              <Home className="w-4 h-4" aria-hidden="true" />
              <span itemProp="name" className="sr-only sm:not-sr-only">Startseite</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>

          {/* Breadcrumb Items */}
          {items.map((item, index) => (
            <li 
              key={index}
              className="flex items-center gap-1"
              itemProp="itemListElement" 
              itemScope 
              itemType="https://schema.org/ListItem"
            >
              <ChevronRight className="w-4 h-4 text-gray-400" aria-hidden="true" />
              {item.href ? (
                <Link 
                  to={item.href}
                  className="hover:text-orange-500 transition-colors"
                  itemProp="item"
                >
                  <span itemProp="name">{item.label}</span>
                </Link>
              ) : (
                <span 
                  className="text-gray-900 font-medium" 
                  itemProp="name"
                  aria-current="page"
                >
                  {item.label}
                </span>
              )}
              <meta itemProp="position" content={String(index + 2)} />
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb;
