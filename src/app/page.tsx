'use client';

import Link from "next/link";
import { offerList } from "@/content/offers";

/* ───────────────────────────────────────────────
   KONTAKT-DATEN — HIER deine echten Daten eintragen.
   Werden überall auf der Seite verwendet (Header, Hero,
   Kontakt, Sticky-Bar, Footer). Nur EINMAL ändern nötig.
   ─────────────────────────────────────────────── */
const PHONE_DISPLAY = "+39 327 042 753";        // TODO prüfen: nur 9 Ziffern — IT-Handy hat meist 10
const PHONE_TEL = "+39327042753";
const WA_NUMBER = "39327042753";                // wa.me-Format: Ländercode 39 + Nummer ohne +
const EMAIL = "alex@amstudio.ink";
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  "Hallo amstudio, ich interessiere mich für eine Website."
)}`;

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-paper">
      {/* ── Header ───────────────────────────────── */}
      <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <div className="flex items-center gap-3">
            <svg className="h-8 w-8" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="amstudio">
              <path d="M22 92 L45 38 L60 71 L75 38 L98 92" fill="none" stroke="#ffffff" strokeWidth="10" strokeLinejoin="round" strokeLinecap="round" />
              <line x1="33" y1="66" x2="58" y2="66" stroke="#d946ef" strokeWidth="10" strokeLinecap="round" />
            </svg>
            <span className="display text-xl text-ink">amstudio</span>
          </div>

          <nav className="hidden gap-8 lg:flex">
            <a href="#leistungen" className="text-sm text-ink-2 transition hover:text-ink">LEISTUNGEN</a>
            <a href="#ergebnisse" className="text-sm text-ink-2 transition hover:text-ink">ERGEBNISSE</a>
            <a href="#angebot" className="text-sm text-ink-2 transition hover:text-ink">ANGEBOT</a>
            <a href="#kontakt" className="text-sm text-ink-2 transition hover:text-ink">KONTAKT</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener"
              className="hidden items-center gap-2 rounded-sm border border-line px-4 py-3 text-xs font-bold text-ink transition hover:border-copper hover:text-copper sm:inline-flex"
            >
              WHATSAPP
            </a>
            <a href="#kontakt" className="rounded-sm bg-copper px-5 py-3 text-xs font-bold text-cream transition hover:bg-copper-light">
              GRATIS WEBSITE
            </a>
          </div>
        </div>
      </header>

      {/* ── Hero — klare Value-Prop + 2 CTAs above the fold ── */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(60% 55% at 50% 0%, rgba(217,70,239,0.16), transparent 70%)" }}
        />
        <div className="mx-auto w-full max-w-5xl px-6 py-24 text-center md:px-10">
          <p className="kicker text-copper mb-6">WEBSEITEN &amp; KI-EMPFANG · SÜDTIROL</p>
          <h1 className="display mx-auto mb-7 max-w-4xl text-[clamp(2.4rem,7vw,5rem)] text-cream">
            Eure Website. Gratis.<br />
            <em>Plus ein KI-Empfang, der nie schläft.</em>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-base text-cream/80 md:text-lg">
            amstudio baut Südtiroler Salons und Handwerkern eine professionelle Website — kostenlos.
            Der KI-Assistent beantwortet jede Anfrage und bucht Termine, rund um die Uhr.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#kontakt" className="w-full rounded-lg bg-copper px-8 py-4 text-sm font-bold text-cream transition hover:bg-copper-light sm:w-auto">
              Gratis Website anfragen
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener"
              className="w-full rounded-lg border border-line px-8 py-4 text-sm font-bold text-ink transition hover:border-copper hover:text-copper sm:w-auto"
            >
              Auf WhatsApp schreiben
            </a>
          </div>
          <p className="mono mt-6 text-xs text-ink-3">
            Kein Risiko — du zahlst erst, wenn der erste Termin gebucht ist.
          </p>
        </div>
      </section>

      {/* ── Trust-Stats ──────────────────────────── */}
      <section id="ergebnisse" className="border-t border-line bg-paper-2">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4">
            <div className="scroll-in text-center">
              <p className="display mb-2 text-4xl text-ink md:text-5xl">0 €</p>
              <p className="kicker text-copper mb-2">WEBSITE-ERSTELLUNG</p>
              <p className="text-sm text-ink-2">Komplett kostenlos</p>
            </div>
            <div className="scroll-in text-center">
              <p className="display mb-2 text-4xl text-ink md:text-5xl">&lt; 2 Min</p>
              <p className="kicker text-copper mb-2">ANTWORTZEIT</p>
              <p className="text-sm text-ink-2">KI-gestützter Empfang</p>
            </div>
            <div className="scroll-in text-center">
              <p className="display mb-2 text-4xl text-ink md:text-5xl">24/7</p>
              <p className="kicker text-copper mb-2">ERREICHBAR</p>
              <p className="text-sm text-ink-2">Automatisiert für dich</p>
            </div>
            <div className="scroll-in text-center">
              <p className="display mb-2 text-4xl text-ink md:text-5xl">100 %</p>
              <p className="kicker text-copper mb-2">SÜDTIROL</p>
              <p className="text-sm text-ink-2">Lokal verwurzelt · DE / IT</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mechanismus / Branchen ───────────────── */}
      <section id="leistungen" className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <p className="kicker text-copper mb-6">FÜR WEN WIR BAUEN</p>
        <h2 className="display mb-14 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] text-ink">
          Gemacht für Betriebe, die jeden Tag Anfragen verpassen.
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {offerList && offerList.length > 0 ? (
            offerList.map((offer, i) => (
              <Link
                key={offer.slug}
                href={`/${offer.slug}`}
                className="scroll-in group rounded-2xl border border-line bg-paper-2 p-9 transition hover:border-copper"
              >
                <div className="mb-8 flex items-start justify-between">
                  <span className="display text-5xl text-copper">0{i + 1}</span>
                  <span className="text-2xl text-ink-3 transition group-hover:text-copper">→</span>
                </div>
                <h3 className="display mb-3 text-2xl text-cream">{offer.niche || "Service"}</h3>
                <p className="mb-7 text-sm leading-relaxed text-ink-2">{offer.offerName || "KI-System für Betriebe"}</p>
                <div className="flex flex-wrap gap-2">
                  {offer.heroBadges?.map((badge) => (
                    <span key={badge.text} className="inline-block rounded-full border border-line px-3 py-1.5 text-xs font-medium text-ink-2">
                      {badge.text}
                    </span>
                  ))}
                </div>
              </Link>
            ))
          ) : (
            <>
              <div className="rounded-2xl border border-line bg-paper-2 p-9">
                <span className="display text-5xl text-copper">01</span>
                <h3 className="display mb-3 mt-8 text-2xl text-cream">Salons &amp; Beauty</h3>
                <p className="text-sm text-ink-2">Voller Kalender, keine verpassten Termine.</p>
              </div>
              <div className="rounded-2xl border border-line bg-paper-2 p-9">
                <span className="display text-5xl text-copper">02</span>
                <h3 className="display mb-3 mt-8 text-2xl text-cream">Handwerk &amp; Technik</h3>
                <p className="text-sm text-ink-2">Kein Anruf, kein Auftrag geht mehr verloren.</p>
              </div>
            </>
          )}
        </div>
      </section>

      {/* ── Beispielprojekt / Proof (keine erfundenen Testimonials) ── */}
      <section className="border-t border-line bg-paper-2">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">
          <div>
            <p className="kicker text-copper mb-6">BEISPIELPROJEKT</p>
            <h2 className="display mb-6 text-[clamp(2rem,5vw,3.5rem)] text-ink">
              So sieht das fertige Ergebnis aus.
            </h2>
            <p className="mb-8 text-ink-2">
              ELEKTRIX, ein Elektrobetrieb aus Mölten: professionelle Website plus
              KI-Empfang, der Anfragen rund um die Uhr beantwortet und Termine bucht —
              auf Deutsch und Italienisch.
            </p>
            {/* TODO: echte Live-URL des Beispielprojekts eintragen */}
            <a href="#kontakt" className="inline-flex items-center gap-2 rounded-lg border border-line px-6 py-4 text-sm font-bold text-ink transition hover:border-copper hover:text-copper">
              Beispiel ansehen →
            </a>
          </div>
          <div className="scroll-in rounded-2xl border border-copper bg-paper p-8">
            <span className="display text-2xl text-cream">ELEKTRIX</span>
            <div className="mt-6 space-y-3">
              <div className="flex justify-between border-b border-line pb-3 text-sm"><span className="text-ink-2">Branche</span><span className="text-ink">Elektro &amp; Technik</span></div>
              <div className="flex justify-between border-b border-line pb-3 text-sm"><span className="text-ink-2">Ort</span><span className="text-ink">Mölten, Südtirol</span></div>
              <div className="flex justify-between border-b border-line pb-3 text-sm"><span className="text-ink-2">Umfang</span><span className="text-ink">Website + KI-Empfang</span></div>
              <div className="flex justify-between pb-1 text-sm"><span className="text-ink-2">Sprachen</span><span className="text-ink">DE / IT</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────── */}
      <section id="angebot" className="border-t border-line">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <p className="kicker text-copper mb-6">EHRLICH &amp; EINFACH</p>
          <h2 className="display mb-14 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] text-ink">
            Die Website ist gratis.<br />Danach zahlst du nur, was du nutzt.
          </h2>

          <div className="grid max-w-4xl gap-8 md:grid-cols-2">
            <div className="scroll-in rounded-3xl border border-line bg-paper-2 p-8">
              <p className="kicker text-copper mb-4">DER EINSTIEG</p>
              <div className="mb-8">
                <p className="display text-5xl text-ink">Gratis</p>
                <p className="mt-2 text-sm text-ink-2">einmalig</p>
              </div>
              <p className="mb-8 text-ink-2">Eure professionelle Website — komplett kostenlos.</p>
              <ul className="mb-8 space-y-3">
                {["Professionelle Website", "Mobil-optimiert & schnell", "Impressum & Datenschutz", "Google-Profil Verbindung", "Innerhalb weniger Tage online"].map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-ink-2"><span className="text-copper">✓</span>{f}</li>
                ))}
              </ul>
              <a href="#kontakt" className="block w-full rounded-lg border border-line bg-transparent px-6 py-4 text-center text-sm font-bold text-ink transition hover:border-copper hover:text-copper">
                Gratis Website anfragen
              </a>
            </div>

            <div className="scroll-in relative rounded-3xl border-2 border-copper bg-paper-2 p-8">
              <span className="absolute -top-4 left-8 rounded-full bg-copper px-4 py-1 text-xs font-bold text-cream">BELIEBT</span>
              <p className="kicker text-copper mb-4">LAUFEND</p>
              <div className="mb-8">
                <p className="display text-5xl text-ink">ab 30 €</p>
                <p className="mt-2 text-sm text-ink-2">pro Monat</p>
              </div>
              <p className="mb-8 text-ink-2">Hosting, Pflege und der KI-Empfangsdienst für euren Betrieb.</p>
              <ul className="mb-8 space-y-3">
                {["Hosting & Domain inklusive", "SSL-Sicherheit", "Kleine Anpassungen inklusive", "KI-Empfangsdienst (optional)", "Jederzeit kündbar"].map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-cream"><span className="text-copper">✓</span>{f}</li>
                ))}
              </ul>
              <a href="#kontakt" className="block w-full rounded-lg bg-copper px-6 py-4 text-center text-sm font-bold text-cream transition hover:bg-copper-light">
                Paket anfragen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Garantie ─────────────────────────────── */}
      <section className="border-t border-line bg-paper-2">
        <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
          <p className="kicker text-copper mb-6">GARANTIE</p>
          <h2 className="display mb-4 text-[clamp(2rem,5vw,3.5rem)] text-ink">Du gehst kein Risiko ein.</h2>
          <p className="mb-12 max-w-2xl text-ink-2">Zwei Garantien — je nachdem, wie du zahlst. Kein Kleingedrucktes.</p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="scroll-in rounded-2xl border border-line bg-paper p-8">
              <h3 className="mb-3 font-semibold text-ink">Delayed-Payment-Garantie</h3>
              <p className="text-sm text-ink-2">Du zahlst die monatliche Gebühr erst, wenn der Assistent deinen ersten Termin über WhatsApp gebucht hat. Funktioniert es nicht, zahlst du nichts.</p>
            </div>
            <div className="scroll-in rounded-2xl border border-copper bg-paper p-8">
              <h3 className="mb-3 font-semibold text-ink">Credit-Garantie</h3>
              <p className="text-sm text-ink-2">Bucht der Assistent in den ersten 90 Tagen keine 10 Termine, schreibe ich dir den Gegenwert als Guthaben gut — bis das Ergebnis steht.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Kontakt — Formular + alle Kanäle ─────── */}
      <section id="kontakt" className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">
          <div>
            <p className="kicker text-copper mb-6">KONTAKT</p>
            <h2 className="display mb-6 text-[clamp(2rem,5vw,3.5rem)] text-ink">
              Lust auf eine gratis Website? Melde dich.
            </h2>
            <p className="mb-10 text-ink-2">Unverbindlich und schnell — am liebsten direkt per WhatsApp oder Anruf. Wir schauen uns deinen Betrieb an und melden uns.</p>
            <div className="space-y-3">
              <a href={WA_LINK} target="_blank" rel="noopener" className="flex items-center justify-between rounded-lg border border-line bg-paper-2 px-5 py-4 transition hover:border-copper">
                <span className="text-sm font-bold text-ink">WhatsApp</span>
                <span className="mono text-sm text-copper">{PHONE_DISPLAY}</span>
              </a>
              <a href={`tel:${PHONE_TEL}`} className="flex items-center justify-between rounded-lg border border-line bg-paper-2 px-5 py-4 transition hover:border-copper">
                <span className="text-sm font-bold text-ink">Anrufen</span>
                <span className="mono text-sm text-copper">{PHONE_DISPLAY}</span>
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center justify-between rounded-lg border border-line bg-paper-2 px-5 py-4 transition hover:border-copper">
                <span className="text-sm font-bold text-ink">E-Mail</span>
                <span className="mono text-sm text-copper">{EMAIL}</span>
              </a>
            </div>
          </div>

          <form className="space-y-5" action={`mailto:${EMAIL}`} method="post" encType="text/plain">
            <div>
              <label className="mb-2 block text-sm text-ink">Dein Name</label>
              <input type="text" name="name" required placeholder="Vor- und Nachname" className="w-full rounded-lg border border-line bg-paper-2 px-4 py-3 text-ink placeholder:text-ink-3 focus:border-copper focus:outline-none" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-ink">Art des Betriebs</label>
              <select name="betrieb" className="w-full rounded-lg border border-line bg-paper-2 px-4 py-3 text-ink focus:border-copper focus:outline-none">
                <option>Salon / Beauty</option>
                <option>Handwerk / Technik</option>
                <option>Gastro / Hotel</option>
                <option>Anderer Betrieb</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm text-ink">Telefon oder E-Mail</label>
              <input type="text" name="kontakt" required placeholder="Wie erreichen wir dich?" className="w-full rounded-lg border border-line bg-paper-2 px-4 py-3 text-ink placeholder:text-ink-3 focus:border-copper focus:outline-none" />
            </div>
            <div>
              <textarea name="nachricht" placeholder="Noch etwas, das wir wissen sollten?" rows={4} className="w-full rounded-lg border border-line bg-paper-2 px-4 py-3 text-ink placeholder:text-ink-3 focus:border-copper focus:outline-none"></textarea>
            </div>
            <button type="submit" className="w-full rounded-lg bg-copper px-6 py-4 text-center text-sm font-bold text-cream transition hover:bg-copper-light">
              Anfrage senden
            </button>
          </form>
        </div>
      </section>

      {/* ── Footer — Rechtliches + Kanäle ────────── */}
      <footer className="border-t border-line bg-paper-2 pb-24 md:pb-0">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 text-sm md:flex-row md:items-center md:justify-between md:px-10">
          <div className="flex items-center gap-3">
            <svg className="h-7 w-7" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="amstudio">
              <path d="M22 92 L45 38 L60 71 L75 38 L98 92" fill="none" stroke="#ffffff" strokeWidth="10" strokeLinejoin="round" strokeLinecap="round" />
              <line x1="33" y1="66" x2="58" y2="66" stroke="#d946ef" strokeWidth="10" strokeLinecap="round" />
            </svg>
            <span className="display text-lg text-ink">amstudio</span>
          </div>
          <span className="text-ink-2">© {new Date().getFullYear()} · KI-Systeme für Südtiroler Betriebe</span>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-ink-3">
            <a href="/impressum" className="transition hover:text-ink">Impressum</a>
            <a href="/datenschutz" className="transition hover:text-ink">Datenschutz</a>
            <a href={`mailto:${EMAIL}`} className="mono transition hover:text-ink">{EMAIL}</a>
          </div>
        </div>
      </footer>

      {/* ── Sticky Mobile Contact Bar (Südtirol-Standard) ── */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-line bg-paper/95 backdrop-blur md:hidden">
        <a href={`tel:${PHONE_TEL}`} className="py-4 text-center text-sm font-bold text-ink">Anrufen</a>
        <a href={WA_LINK} target="_blank" rel="noopener" className="bg-copper py-4 text-center text-sm font-bold text-cream">WhatsApp</a>
      </div>
    </main>
  );
}
