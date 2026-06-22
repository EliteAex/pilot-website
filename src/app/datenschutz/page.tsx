import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz — amstudio",
  robots: { index: false },
};

export default function Datenschutz() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-16 md:px-10 md:py-24">
      <Link href="/" className="kicker text-copper transition hover:text-copper-light">← amstudio</Link>

      <h1 className="display mb-4 mt-8 text-[clamp(2rem,5vw,3.5rem)] text-ink">Datenschutzerklärung</h1>
      <p className="mb-12 text-ink-2">Wie wir mit deinen Daten umgehen, nach DSGVO (Verordnung (EU) 2016/679).</p>

      <div className="space-y-10 text-ink-2">
        <section>
          <h2 className="mb-3 font-semibold text-ink">1. Verantwortlicher</h2>
          <p>
            Alex Grünberer (amstudio)<br />
            {/* TODO: Anschrift wie im Impressum */}
            <span className="text-ink-3">[Anschrift wie im Impressum]</span><br />
            E-Mail: <a href="mailto:alex@amstudio.ink" className="mono text-copper hover:text-copper-light">alex@amstudio.ink</a>
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-semibold text-ink">2. Aufruf der Website (Server-Logs)</h2>
          <p>
            Beim Aufruf werden vom Hosting-Anbieter technisch notwendige Daten verarbeitet
            (IP-Adresse, Datum/Uhrzeit, abgerufene Seite, Browser-Typ). Rechtsgrundlage ist
            unser berechtigtes Interesse an einem sicheren, stabilen Betrieb
            (Art. 6 Abs. 1 lit. f DSGVO).
            {/* TODO: Hosting-Anbieter nennen, z.B. „Hosting: Vercel Inc." + ggf. AVV */}
            <span className="text-ink-3"> [Hosting-Anbieter eintragen, z. B. Vercel Inc.]</span>
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-semibold text-ink">3. Kontaktformular</h2>
          <p>
            Wenn du das Formular nutzt, verarbeiten wir die von dir angegebenen Daten (Name,
            Telefon/E-Mail, Nachricht) ausschließlich zur Bearbeitung deiner Anfrage.
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw.
            lit. f (berechtigtes Interesse an der Anfragebearbeitung). Die Daten werden
            gelöscht, sobald sie nicht mehr benötigt werden.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-semibold text-ink">4. Kontakt per WhatsApp</h2>
          <p>
            Über die WhatsApp-Buttons kannst du uns direkt schreiben. Dabei werden Daten an
            WhatsApp Ireland Ltd. / Meta übertragen; es gelten deren Datenschutzbestimmungen.
            Eine Übermittlung in Drittländer (USA) kann erfolgen. Wenn du das nicht möchtest,
            nutze bitte E-Mail oder Telefon.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-semibold text-ink">5. Cookies &amp; Tracking</h2>
          {/* TODO: anpassen, falls später Analytics/Tracking eingebaut wird (dann Consent-Banner nötig) */}
          <p>
            Diese Website setzt keine Tracking- oder Marketing-Cookies und bindet kein
            Analyse-Tool ein. Es werden nur technisch notwendige Funktionen verwendet.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-semibold text-ink">6. Deine Rechte</h2>
          <p>
            Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
            Verarbeitung, Datenübertragbarkeit und Widerspruch. Wende dich dafür an die oben
            genannte E-Mail-Adresse. Außerdem hast du ein Beschwerderecht bei der
            Aufsichtsbehörde (in Italien: Garante per la protezione dei dati personali).
          </p>
        </section>

        <p className="rounded-lg border border-line bg-paper-2 p-4 text-sm text-ink-3">
          Hinweis: Diese Datenschutzerklärung ist eine Vorlage. Vor dem Live-Gang bitte an
          deine tatsächlichen Tools/Dienste anpassen und rechtlich prüfen lassen.
        </p>
      </div>
    </main>
  );
}
