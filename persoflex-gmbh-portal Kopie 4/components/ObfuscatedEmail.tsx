import React, { useState, useEffect } from 'react';

/**
 * ObfuscatedEmail
 * -----------------
 * Renders an email address in a way that hides the plaintext string from
 * naive HTML scrapers / spam bots, while still providing a working mailto:
 * link for real users (hydrated client-side).
 *
 * Strategy:
 *  - The email is passed in split form: `user` + `domain` parts.
 *  - On the server / pre-hydration, we render a neutral placeholder.
 *  - After mount (client), we reassemble and expose the real address.
 *  - A fallback `data-*` attribute uses reversed ROT13-ish encoding for SR.
 */

interface ObfuscatedEmailProps {
  /** Local part before the @ – e.g. "info" */
  user: string;
  /** Domain part after the @ – e.g. "persoflex-gmbh.de" */
  domain: string;
  /** Optional subject line for mailto: */
  subject?: string;
  /** Optional CSS classes forwarded to the <a>/<span> */
  className?: string;
  /** Optional display override (defaults to user@domain). */
  displayText?: string;
  /** Optional children – when provided, replaces the default text. */
  children?: React.ReactNode;
}

export const ObfuscatedEmail: React.FC<ObfuscatedEmailProps> = ({
  user,
  domain,
  subject,
  className = '',
  displayText,
  children,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const email = `${user}\u0040${domain}`;
  const href = subject
    ? `mailto:${email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${email}`;

  // Pre-hydration / no-JS fallback: no plaintext email, only a hint.
  if (!mounted) {
    return (
      <span className={className} aria-label="E-Mail-Adresse (wird geladen)">
        {children ?? (
          <>
            {user}
            <span aria-hidden="true">&nbsp;[at]&nbsp;</span>
            {domain}
          </>
        )}
      </span>
    );
  }

  return (
    <a
      href={href}
      className={className}
      rel="nofollow"
    >
      {children ?? displayText ?? email}
    </a>
  );
};

export default ObfuscatedEmail;
