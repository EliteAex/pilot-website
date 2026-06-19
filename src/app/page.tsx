'use client';

import Link from "next/link";
import dynamic from "next/dynamic";
import { offerList } from "@/content/offers";

const Spline = dynamic(
  () => import('@splinetool/react-spline/next').then(mod => mod.default),
  { ssr: false, loading: () => <div className="absolute inset-0 bg-gradient-to-br from-copper/20 via-paper to-paper" /> }
);

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-paper">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-line bg-paper/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
          <div className="flex items-center gap-3">
            <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2L28 8V16C28 24.8366 16 30 16 30C16 30 4 24.8366 4 16V8L16 2Z" fill="#d946ef" fillOpacity="0.1" stroke="#d946ef" strokeWidth="2"/>
              <path d="M16 8L20 11V16C20 20.4183 16 23 16 23C16 23 12 20.4183 12 16V11L16 8Z" fill="#d946ef"/>
            </svg>
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
      <section className="relative h-screen overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-copper/20 via-paper to-paper" />
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#d946ef" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="1200" height="800" fill="url(#grid)" />
          <circle cx="300" cy="200" r="200" fill="#d946ef" opacity="0.1"/>
          <circle cx="900" cy="600" r="300" fill="#d946ef" opacity="0.05"/>
        </svg>
        <div className="text-center relative z-10">
          <p className="kicker text-copper mb-6 animate-pulse">VERFÜGBAR FÜR NEUE PROJEKTE</p>
          <h1 className="display text-[clamp(2.5rem,8vw,5.5rem)] leading-tight text-cream mb-8 text-center drop-shadow-lg">
            Lokale Wurzeln.<br />
            <em className="italic">Globale Reichweite.</em>
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-cream/80 mb-12 mx-auto drop-shadow">
            KI-Systeme für Südtiroler Betriebe. Gratis Website, KI-gestützter Empfang und messbares Wachstum.
          </p>
          <a href="#angebot" className="inline-flex items-center gap-2 text-cream transition hover:translate-y-1">
            <span className="text-sm font-bold">ENTDECKEN</span>
            <span className="text-xl">↓</span>
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
            Die Website ist gratis.<br />Danach zahlst du nur, was du nutzt.
          </h2>

          <div className="grid gap-8 md:grid-cols-2 max-w-4xl">
            <div className="scroll-in rounded-3xl border border-line bg-paper p-8">
              <p className="kicker text-copper mb-4">DER EINSTIEG</p>
              <div className="mb-8">
                <p className="display text-5xl text-ink">Gratis</p>
                <p className="text-sm text-ink-2 mt-2">einmalig</p>
              </div>
              <p className="text-ink-2 mb-8">Eure professionelle Website — komplett kostenlos.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-3 text-sm text-ink-2">
                  <span className="text-copper">✓</span>
                  Professionelle Website
                </li>
                <li className="flex gap-3 text-sm text-ink-2">
                  <span className="text-copper">✓</span>
                  Mobil-optimiert & schnell
                </li>
                <li className="flex gap-3 text-sm text-ink-2">
                  <span className="text-copper">✓</span>
                  Impressum & Datenschutz
                </li>
                <li className="flex gap-3 text-sm text-ink-2">
                  <span className="text-copper">✓</span>
                  Google-Profil Verbindung
                </li>
                <li className="flex gap-3 text-sm text-ink-2">
                  <span className="text-copper">✓</span>
                  Innerhalb weniger Tage online
                </li>
              </ul>
              <a href="#kontakt" className="block w-full rounded-lg border border-line bg-transparent px-6 py-4 text-center text-sm font-bold text-ink transition hover:bg-line">
                Gratis Website Anfragen
              </a>
            </div>

            <div className="scroll-in rounded-3xl border-2 border-copper bg-paper-2 p-8 relative">
              <span className="absolute -top-4 left-8 rounded-full bg-copper px-4 py-1 text-xs font-bold text-cream">BELIEBT</span>
              <p className="kicker text-copper mb-4">LAUFEND</p>
              <div className="mb-8">
                <p className="display text-5xl text-ink">ab 30 €</p>
                <p className="text-sm text-ink-2 mt-2">pro Monat</p>
              </div>
              <p className="text-ink-2 mb-8">Hosting, Pflege und der KI-Empfangsdienst für euren Betrieb.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-3 text-sm text-cream">
                  <span className="text-copper">✓</span>
                  Hosting & Domain inklusive
                </li>
                <li className="flex gap-3 text-sm text-cream">
                  <span className="text-copper">✓</span>
                  SSL-Sicherheit
                </li>
                <li className="flex gap-3 text-sm text-cream">
                  <span className="text-copper">✓</span>
                  Kleine Anpassungen inklusive
                </li>
                <li className="flex gap-3 text-sm text-cream">
                  <span className="text-copper">✓</span>
                  KI-Empfangsdienst (optional)
                </li>
                <li className="flex gap-3 text-sm text-cream">
                  <span className="text-copper">✓</span>
                  Jederzeit kündbar
                </li>
              </ul>
              <a href="#kontakt" className="block w-full rounded-lg bg-copper px-6 py-4 text-center text-sm font-bold text-cream transition hover:bg-copper-light">
                Jahres-Paket Anfragen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="bg-paper-2 border-t border-line">
        <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
          <p className="kicker text-copper mb-8">GARANTIE</p>
          <h2 className="display text-[clamp(2rem,5vw,4rem)] leading-tight text-ink mb-4">Du gehst kein Risiko ein.</h2>
          <p className="max-w-2xl text-ink-2 mb-12">Zwei Garantien — je nachdem, wie du zahlst. Kein Kleingedrucktes.</p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="scroll-in rounded-2xl border border-line bg-paper p-8">
              <h3 className="font-semibold text-ink mb-3">Delayed-Payment-Garantie</h3>
              <p className="text-ink-2 text-sm">Du zahlst die monatliche Gebühr erst, wenn der Assistent deinen ersten Termin über WhatsApp gebucht hat. Funktioniert es nicht, zahlst du nichts.</p>
            </div>
            <div className="scroll-in rounded-2xl border border-copper bg-paper-2 p-8">
              <h3 className="font-semibold text-ink mb-3">Credit-Garantie</h3>
              <p className="text-ink-2 text-sm">Bucht der Assistent in den ersten 90 Tagen keine 10 Termine, schreibe ich dir den Gegenwert als Guthaben gut — bis das Ergebnis steht.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="mx-auto max-w-3xl px-6 py-20 md:px-10 md:py-28">
        <p className="kicker text-copper mb-8 text-center">DER AUFSTIEG</p>
        <h2 className="display text-[clamp(2rem,5vw,4rem)] leading-tight text-ink mb-12 text-center">
          Lust auf eine professionelle Website? Schreib uns.
        </h2>

        <form className="space-y-6">
          <div>
            <label className="text-ink mb-2 block text-sm">Ich bin</label>
            <input type="text" placeholder="Dein Name" className="w-full rounded-lg border border-line bg-paper-2 px-4 py-3 text-ink placeholder:text-ink-3 focus:outline-none focus:border-copper" />
          </div>
          <div>
            <label className="text-ink mb-2 block text-sm">und habe einen</label>
            <select className="w-full rounded-lg border border-line bg-paper-2 px-4 py-3 text-ink focus:outline-none focus:border-copper">
              <option>Betrieb wählen</option>
              <option>Salon</option>
              <option>Handwerksbetrieb</option>
            </select>
          </div>
          <div>
            <label className="text-ink mb-2 block text-sm">Schreib mir an</label>
            <input type="email" placeholder="deine@email.com" className="w-full rounded-lg border border-line bg-paper-2 px-4 py-3 text-ink placeholder:text-ink-3 focus:outline-none focus:border-copper" />
          </div>
          <div>
            <textarea placeholder="Noch etwas, das du uns mitteilen willst?" className="w-full rounded-lg border border-line bg-paper-2 px-4 py-3 text-ink placeholder:text-ink-3 focus:outline-none focus:border-copper" rows={4}></textarea>
          </div>
          <button type="submit" className="w-full rounded-lg bg-copper px-6 py-4 text-center text-sm font-bold text-cream transition hover:bg-copper-light">
            Anfrage Senden
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
