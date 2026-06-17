import Link from "next/link";
import { offerList } from "@/content/offers";

const taglines: Record<string, string> = {
  salons: "Voller Kalender, keine verpassten Termine.",
  handwerker: "Kein Auftrag geht mehr verloren.",
};

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-paper">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
          <div className="flex items-center gap-3">
            <div className="grid h-8 w-8 place-items-center rounded-full bg-copper">
              <span className="text-sm font-bold text-cream">P</span>
            </div>
            <span className="display text-xl text-ink">Pilot</span>
          </div>
          <nav className="hidden gap-8 md:flex">
            <a href="#leistungen" className="text-sm text-ink-2 transition hover:text-ink">LEISTUNGEN</a>
            <a href="#ergebnisse" className="text-sm text-ink-2 transition hover:text-ink">ERGEBNISSE</a>
            <a href="#angebot" className="text-sm text-ink-2 transition hover:text-ink">ANGEBOT</a>
            <a href="#kontakt" className="text-sm text-ink-2 transition hover:text-ink">KONTAKT</a>
          </nav>
          <a href="#kontakt" className="rounded-sm bg-copper px-6 py-3 text-xs font-bold text-cream transition hover:bg-copper-light">
            PROJEKT STARTEN
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 md:pt-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-radial from-copper/20 via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-24 text-center md:px-10 md:py-40">
          <p className="kicker text-copper mb-8">VERFÜGBAR FÜR NEUE PROJEKTE</p>
          <h1 className="display text-[clamp(2.5rem,6vw,5rem)] leading-tight text-ink mb-6">
            Lokale Wurzeln.<br />
            <em className="italic">Globale Reichweite.</em>
          </h1>
          <p className="max-w-2xl text-lg text-ink-2 mb-12">
            KI-Systeme für Südtiroler Betriebe. Gratis Website, KI-gestützter Empfang und messbares Wachstum.
          </p>
          <a href="#angebot" className="inline-flex items-center gap-2 text-cream transition hover:translate-y-1">
            <span className="text-sm font-bold">ENTDECKEN</span>
            <span>↓</span>
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section id="ergebnisse" className="border-t border-line bg-paper-2">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="scroll-in text-center">
              <p className="display text-4xl md:text-5xl text-ink mb-2">0 €</p>
              <p className="kicker text-copper mb-2">WEBSITE-ERSTELLUNG</p>
              <p className="text-sm text-ink-2">Komplett kostenlos</p>
            </div>
            <div className="scroll-in text-center">
              <p className="display text-4xl md:text-5xl text-ink mb-2">&lt; 2 Min</p>
              <p className="kicker text-copper mb-2">ANTWORTZEIT</p>
              <p className="text-sm text-ink-2">KI-gestützter Empfang</p>
            </div>
            <div className="scroll-in text-center">
              <p className="display text-4xl md:text-5xl text-ink mb-2">24/7</p>
              <p className="kicker text-copper mb-2">ERREICHBAR</p>
              <p className="text-sm text-ink-2">Automatisiert für dich</p>
            </div>
            <div className="scroll-in text-center">
              <p className="display text-4xl md:text-5xl text-ink mb-2">100 %</p>
              <p className="kicker text-copper mb-2">SÜDTIROL</p>
              <p className="text-sm text-ink-2">Lokal verwurzelt</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mechanismus Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <p className="kicker text-copper mb-8">DER MECHANISMUS</p>
        <h2 className="display text-[clamp(2rem,5vw,4rem)] leading-tight text-ink mb-16">
          So einfach geht's — in drei Schritten zum digitalen Empfang.
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {offerList.map((offer, i) => (
            <Link
              key={offer.slug}
              href={`/${offer.slug}`}
              className="scroll-in group rounded-2xl border border-line bg-paper-2 p-8 transition hover:border-copper hover:bg-paper-3"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="display text-5xl text-copper">0{i + 1}</span>
                <span className="text-2xl">→</span>
              </div>
              <h3 className="display text-2xl text-ink mb-3">{offer.niche}</h3>
              <p className="text-sm text-ink-2 mb-6">{offer.offerName}</p>
              <div className="flex flex-wrap gap-2">
                {offer.heroBadges.map((badge) => (
                  <span key={badge.text} className="inline-block rounded-full border border-copper/30 bg-copper/10 px-3 py-1 text-xs text-copper-light">
                    {badge.text}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="angebot" className="border-t border-line bg-paper-2">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <p className="kicker text-copper mb-8">EHRLICH & EINFACH</p>
          <h2 className="display text-[clamp(2rem,5vw,4rem)] leading-tight text-ink mb-16">
            Die Website ist gratis.<br />Danach zahlst nur, was ihr nutzt.
          </h2>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl">
            {/* Free Option */}
            <div className="scroll-in rounded-3xl border border-line bg-paper p-8">
              <p className="kicker text-copper mb-4">DER EINSTIEG</p>
              <div className="mb-8">
                <p className="display text-5xl text-ink">Gratis</p>
                <p className="text-sm text-ink-2 mt-2">einmalig</p>
              </div>
              <p className="text-ink-2 mb-8">Eure professionelle Website — komplett kostenlos.</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Professionelle Website",
                  "Mobil-optimiert & schnell",
                  "Impressum & Datenschutz",
                  "Google-Profil Verbindung",
                  "Innerhalb weniger Tage online"
                ].map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm text-ink-2">
                    <span className="text-copper">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#kontakt" className="block w-full rounded-lg border border-line bg-transparent px-6 py-4 text-center text-sm font-bold text-ink transition hover:bg-line">
                GRATIS WEBSITE SICHERN →
              </a>
            </div>

            {/* Paid Option */}
            <div className="scroll-in rounded-3xl border-2 border-copper bg-paper-2 p-8 relative">
              <span className="absolute -top-4 left-8 rounded-full bg-copper px-4 py-1 text-xs font-bold text-cream">BELIEBT</span>
              <p className="kicker text-copper mb-4">LAUFEND</p>
              <div className="mb-8">
                <p className="display text-5xl text-ink">ab 30 €</p>
                <p className="text-sm text-ink-2 mt-2">pro Monat</p>
              </div>
              <p className="text-ink-2 mb-8">Hosting, Pflege und der KI-Empfangsdienst für euren Betrieb.</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Hosting & Domain inklusive",
                  "SSL-Sicherheit",
                  "Kleine Anpassungen inklusive",
                  "KI-Empfangsdienst (optional)",
                  "Jederzeit kündbar"
                ].map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm text-cream">
                    <span className="text-copper">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#kontakt" className="block w-full rounded-lg bg-copper px-6 py-4 text-center text-sm font-bold text-cream transition hover:bg-copper-light">
                JETZT ANFRAGEN →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="mx-auto max-w-3xl px-6 py-20 md:px-10 md:py-28">
        <p className="kicker text-copper mb-8 text-center">DER AUFSTIEG</p>
        <h2 className="display text-[clamp(2rem,5vw,4rem)] leading-tight text-ink mb-12 text-center">
          Lust auf eine gratis Website? Schreibt uns.
        </h2>

        <form className="space-y-6">
          <div>
            <label className="text-ink mb-2 block">Ich bin</label>
            <input type="text" placeholder="Euer Name" className="w-full rounded-lg border border-line bg-paper-2 px-4 py-3 text-ink placeholder:text-ink-3 focus:outline-none focus:border-copper" />
          </div>
          <div>
            <label className="text-ink mb-2 block">und habe einen</label>
            <select className="w-full rounded-lg border border-line bg-paper-2 px-4 py-3 text-ink focus:outline-none focus:border-copper">
              <option>Betrieb wählen</option>
              <option>Salon</option>
              <option>Handwerksbetrieb</option>
            </select>
          </div>
          <div>
            <label className="text-ink mb-2 block">Schreibt mir an</label>
            <input type="email" placeholder="eure@email.com" className="w-full rounded-lg border border-line bg-paper-2 px-4 py-3 text-ink placeholder:text-ink-3 focus:outline-none focus:border-copper" />
          </div>
          <div>
            <textarea placeholder="Noch etwas, das ihr uns mitteilen wollt? (optional)" className="w-full rounded-lg border border-line bg-paper-2 px-4 py-3 text-ink placeholder:text-ink-3 focus:outline-none focus:border-copper" rows={4}></textarea>
          </div>
          <button type="submit" className="w-full rounded-lg bg-copper px-6 py-4 text-center text-sm font-bold text-cream transition hover:bg-copper-light">
            ANFRAGE SENDEN →
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t border-line bg-paper-2">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm md:flex-row md:px-10">
          <span className="display text-lg text-ink">Pilot</span>
          <span className="text-ink-2">© {new Date().getFullYear()} · KI-Systeme für Südtiroler Betriebe</span>
          <span className="mono text-ink-3">alex.grunberer@gmail.com</span>
        </div>
      </footer>
    </main>
  );
}
