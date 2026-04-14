import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description }) => {
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

    // Update Meta Description
    updateMetaTag('description', description);

    // Update Open Graph Tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');

    // Update Twitter Tags
    updateMetaTag('twitter:title', title, 'property');
    updateMetaTag('twitter:description', description, 'property');

  }, [title, description]);

  return null;
};
