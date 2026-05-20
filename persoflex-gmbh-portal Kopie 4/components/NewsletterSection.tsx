import React, { useState } from "react";
import { Mail, CheckCircle2, Download, Send, FileText, Loader2 } from "lucide-react";

/**
 * NewsletterSection - Lead-magnet block for both companies and applicants.
 *
 * Lead-gen rationale (from SEO audit):
 *  - No newsletter/lead magnet was visible before.
 *  - Two distinct value propositions match the two buyer personas on the site.
 *  - Single unified email field keeps friction low.
 *
 * On submit this currently only sets UI state. Wire the POST handler to your
 * ESP (Brevo, Mailchimp, Cleverreach, etc.) when ready — the markup, a11y
 * labels and consent copy are already in place.
 */

type AudienceId = "unternehmen" | "bewerber";

interface AudienceOption {
  id: AudienceId;
  label: string;
  description: string;
  leadMagnetTitle: string;
  leadMagnetDescription: string;
}

const AUDIENCES: AudienceOption[] = [
  {
    id: "unternehmen",
    label: "Für Unternehmen",
    description: "Branchenupdates & Recruiting-Insights",
    leadMagnetTitle: "Checkliste: Personalbedarf richtig planen",
    leadMagnetDescription:
      "10-seitiger Praxisleitfaden für Produktion und Logistik — mit Vorlagen für Einsatzplanung und Schichtbedarf.",
  },
  {
    id: "bewerber",
    label: "Für Bewerber",
    description: "Neue Jobs & Karriere-Tipps",
    leadMagnetTitle: "Bewerbungsleitfaden Zeitarbeit",
    leadMagnetDescription:
      "Worauf es bei Zeitarbeit wirklich ankommt: Rechte, Tarifzuschläge und wie Sie in die Festanstellung wechseln.",
  },
];

export const NewsletterSection: React.FC = () => {
  const [audience, setAudience] = useState<AudienceId>("unternehmen");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const activeAudience = AUDIENCES.find((a) => a.id === audience)!;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!consent) {
      setStatus("error");
      setErrorMessage("Bitte bestätigen Sie die Einwilligung.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus("error");
      setErrorMessage("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    // Simulated latency — replace with real ESP integration.
    await new Promise((resolve) => setTimeout(resolve, 600));

    setStatus("success");
    setEmail("");
    setConsent(false);
  };

  return (
    <section
      id="newsletter"
      aria-labelledby="newsletter-heading"
      className="py-20 md:py-24 bg-gray-50 border-y border-gray-100"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Lead magnet preview card */}
          <div className="relative">
            <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-600 mb-4">
                <Download className="w-3.5 h-3.5" />
                Kostenloser PDF-Download
              </div>
              <div className="flex items-start gap-4">
                <div
                  aria-hidden="true"
                  className="flex-shrink-0 w-14 h-14 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center"
                >
                  <FileText className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 leading-snug mb-2">
                    {activeAudience.leadMagnetTitle}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {activeAudience.leadMagnetDescription}
                  </p>
                </div>
              </div>

              <ul className="mt-6 space-y-2.5" role="list">
                {[
                  "Praxisnahe Vorlagen aus der Region",
                  "Aktuelle BAP-Tarifdaten (Stand 2026)",
                  "Keine Werbung, jederzeit abbestellbar",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle2
                      className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Signup form */}
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-orange-600 mb-4">
              Newsletter
            </span>
            <h2
              id="newsletter-heading"
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight tracking-tight mb-4 text-balance"
            >
              Bleiben Sie auf dem Laufenden.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Einmal im Monat Jobangebote, Recruiting-Insights und regionale
              Arbeitsmarkt-Updates aus Pforzheim und dem Enzkreis. Nach der Anmeldung
              erhalten Sie den passenden PDF-Download automatisch per E-Mail.
            </p>

            {/* Audience toggle */}
            <div
              role="radiogroup"
              aria-label="Zielgruppe auswählen"
              className="inline-flex p-1 rounded-lg bg-white border border-gray-200 mb-5"
            >
              {AUDIENCES.map((option) => {
                const isActive = option.id === audience;
                return (
                  <button
                    key={option.id}
                    type="button"
                    role="radio"
                    aria-checked={isActive}
                    onClick={() => {
                      setAudience(option.id);
                      if (status !== "idle") {
                        setStatus("idle");
                        setErrorMessage("");
                      }
                    }}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive
                        ? "bg-orange-500 text-white shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>

            {status === "success" ? (
              <div
                role="status"
                aria-live="polite"
                className="rounded-xl border border-orange-200 bg-orange-50 p-5 flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Fast geschafft.</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Bitte bestätigen Sie Ihre E-Mail-Adresse über den Link, den wir Ihnen
                    soeben zugeschickt haben. Danach erhalten Sie den PDF-Download automatisch.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label htmlFor="newsletter-email" className="sr-only">
                    E-Mail-Adresse
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <Mail
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                        aria-hidden="true"
                      />
                      <input
                        id="newsletter-email"
                        type="email"
                        required
                        autoComplete="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (status === "error") {
                            setStatus("idle");
                            setErrorMessage("");
                          }
                        }}
                        placeholder="ihre@email.de"
                        aria-invalid={status === "error"}
                        aria-describedby={status === "error" ? "newsletter-error" : undefined}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold text-sm transition-colors shadow-sm"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                          <span>Wird gesendet…</span>
                        </>
                      ) : (
                        <>
                          <span>Anmelden</span>
                          <Send className="w-4 h-4" aria-hidden="true" />
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <label className="flex items-start gap-2.5 text-xs text-gray-600 leading-relaxed cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => {
                      setConsent(e.target.checked);
                      if (status === "error") {
                        setStatus("idle");
                        setErrorMessage("");
                      }
                    }}
                    className="mt-0.5 w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                  />
                  <span>
                    Ich willige ein, den Newsletter der PersoFlex GmbH zu erhalten. Die
                    Einwilligung kann ich jederzeit widerrufen. Weitere Informationen in der{" "}
                    <a
                      href="/datenschutz"
                      className="text-orange-600 hover:text-orange-700 underline underline-offset-2"
                    >
                      Datenschutzerklärung
                    </a>
                    .
                  </span>
                </label>

                {status === "error" && (
                  <p
                    id="newsletter-error"
                    role="alert"
                    className="text-sm text-red-600 font-medium"
                  >
                    {errorMessage}
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
