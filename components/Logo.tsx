import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <img 
      src="/bilder/logo.webp" 
      alt="PersoFlex GmbH - Ihr Partner für Zeitarbeit und Personalvermittlung in Pforzheim und Enzkreis" 
      width="200"
      height="60"
      className={`h-8 md:h-10 w-auto object-contain ${className}`}
    />
  );
};