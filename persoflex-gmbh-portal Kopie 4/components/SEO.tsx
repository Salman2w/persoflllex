import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  articleAuthor?: string;
  noIndex?: boolean;
}

/**
 * SEO Component - Handles all meta tags for optimal search engine visibility
 * 
 * Usage:
 * <SEO 
 *   title="Page Title | PersoFlex GmbH"
 *   description="Page description for search results (max 160 chars)"
 *   keywords="keyword1, keyword2, keyword3"
 *   canonicalUrl="https://www.persoflex-gmbh.de/page"
 *   ogImage="/images/og-image.jpg"
 * />
 */
export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description,
  keywords,
  canonicalUrl,
  ogImage = '/bilder/og-default.jpg',
  ogType = 'website',
  articlePublishedTime,
  articleModifiedTime,
  articleAuthor,
  noIndex = false
}) => {
  useEffect(() => {
    // Update Title
    document.title = title;

    // Helper function to update meta tags
    const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to update link tags
    const updateLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // Basic Meta Tags
    updateMetaTag('description', description);
    if (keywords) {
      updateMetaTag('keywords', keywords);
    }
    
    // Robots
    updateMetaTag('robots', noIndex ? 'noindex, nofollow' : 'index, follow');
    
    // Canonical URL
    if (canonicalUrl) {
      updateLinkTag('canonical', canonicalUrl);
    }

    // Open Graph Tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:type', ogType, 'property');
    updateMetaTag('og:image', ogImage, 'property');
    updateMetaTag('og:site_name', 'PersoFlex GmbH', 'property');
    updateMetaTag('og:locale', 'de_DE', 'property');
    if (canonicalUrl) {
      updateMetaTag('og:url', canonicalUrl, 'property');
    }

    // Article-specific tags
    if (ogType === 'article') {
      if (articlePublishedTime) {
        updateMetaTag('article:published_time', articlePublishedTime, 'property');
      }
      if (articleModifiedTime) {
        updateMetaTag('article:modified_time', articleModifiedTime, 'property');
      }
      if (articleAuthor) {
        updateMetaTag('article:author', articleAuthor, 'property');
      }
    }

    // Twitter Card Tags
    updateMetaTag('twitter:card', 'summary_large_image', 'name');
    updateMetaTag('twitter:title', title, 'name');
    updateMetaTag('twitter:description', description, 'name');
    updateMetaTag('twitter:image', ogImage, 'name');

    // Additional SEO Tags
    updateMetaTag('author', 'PersoFlex GmbH');
    updateMetaTag('geo.region', 'DE-BW');
    updateMetaTag('geo.placename', 'Pforzheim');

  }, [title, description, keywords, canonicalUrl, ogImage, ogType, articlePublishedTime, articleModifiedTime, articleAuthor, noIndex]);

  return null;
};

export default SEO;
