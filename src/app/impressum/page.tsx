import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum — amstudio",
  robots: { index: false },
};

export default function Impressum() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-16 md:px-10 md:py-24">
      <Link href="/" className="kicker text-copper transition hover:text-copper-light">← amstudio</Link>

      <h1 className="display mb-12 mt-8 text-[clamp(2rem,5vw,3.5rem)] text-ink">Impressum</h1>

      <div className="space-y-10 text-ink-2">
        <section>
          <h2 className="mb-3 font-semibold text-ink">Anbieter</h2>
          <p>
            amstudio<br />
            Inhaber: Alex Grünberer<br />
            {/* TODO: vollständige Anschrift eintragen */}
            <span className="text-ink-3">[Straße &amp; Hausnummer]</span><br />
            <span className="text-ink-3">[PLZ Ort]</span>, Südtirol, Italien
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-semibold text-ink">Kontakt</h2>
          <p>
            Telefon: <span className="mono">+39 327 042 753</span><br />
            E-Mail: <a href="mailto:alex@amstudio.ink" className="mono text-copper hover:text-copper-light">alex@amstudio.ink</a>
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-semibold text-ink">Umsatzsteuer / Partita IVA</h2>
          {/* TODO: P.IVA eintragen, sobald vorhanden — sonst diesen Abschnitt entfernen */}
          <p className="text-ink-3">[Partita IVA / USt-IdNr., sofern vorhanden]</p>
        </section>

        <section>
          <h2 className="mb-3 font-semibold text-ink">Verantwortlich für den Inhalt</h2>
          <p>Alex Grünberer (Anschrift wie oben)</p>
        </section>

        <section>
          <h2 className="mb-3 font-semibold text-ink">Haftung für Inhalte und Links</h2>
          <p>
            Die Inhalte dieser Seiten wurden mit größtmöglicher Sorgfalt erstellt. Für die
            Richtigkeit, Vollständigkeit und Aktualität wird keine Gewähr übernommen. Diese
            Website enthält ggf. Links zu externen Websites Dritter, auf deren Inhalte wir
            keinen Einfluss haben und für die wir keine Haftung übernehmen.
          </p>
        </section>

        <p className="rounded-lg border border-line bg-paper-2 p-4 text-sm text-ink-3">
          Hinweis: Diese Seite ist eine Vorlage. Vor dem Live-Gang bitte alle Felder
          ausfüllen und rechtlich prüfen lassen (in Italien gelten eigene Pflichtangaben).
        </p>
      </div>
    </main>
  );
}
