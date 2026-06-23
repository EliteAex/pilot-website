'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { i18n, LANG_LABELS, type Lang } from "@/content/i18n";

/* ───────────────────────────────────────────────
   KONTAKT-DATEN — HIER deine echten Daten eintragen.
   Werden überall auf der Seite verwendet (Header, Hero,
   Kontakt, Sticky-Bar, Footer). Nur EINMAL ändern nötig.
   ─────────────────────────────────────────────── */
const PHONE_DISPLAY = "+39 327 042 753";        // TODO prüfen: nur 9 Ziffern — IT-Handy hat meist 10
const PHONE_TEL = "+39327042753";
const WA_NUMBER = "39327042753";                // wa.me-Format: Ländercode 39 + Nummer ohne +
const EMAIL = "alex@amstudio.ink";

export default function Home() {
  const [lang, setLang] = useState<Lang>("de");

  // Sprache aus localStorage laden + <html lang> setzen
  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("amstudio-lang")) as Lang | null;
    if (stored === "de" || stored === "it") setLang(stored);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("amstudio-lang", lang);
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const t = i18n[lang];
  const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(t.waMessage)}`;

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
            <a href="#leistungen" className="text-sm text-ink-2 transition hover:text-ink">{t.nav.leistungen}</a>
            <a href="#ergebnisse" className="text-sm text-ink-2 transition hover:text-ink">{t.nav.ergebnisse}</a>
            <a href="#angebot" className="text-sm text-ink-2 transition hover:text-ink">{t.nav.angebot}</a>
            <a href="#kontakt" className="text-sm text-ink-2 transition hover:text-ink">{t.nav.kontakt}</a>
          </nav>

          <div className="flex items-center gap-3">
            <LangSwitch lang={lang} setLang={setLang} />
            <a href={WA_LINK} target="_blank" rel="noopener" className="hidden items-center gap-2 rounded-sm border border-line px-4 py-3 text-xs font-bold text-ink transition hover:border-copper hover:text-copper sm:inline-flex">
              {t.btn.whatsapp}
            </a>
            <a href="#kontakt" className="rounded-sm bg-copper px-5 py-3 text-xs font-bold text-cream transition hover:bg-copper-light">
              {t.btn.gratisWebsite}
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
          <p className="kicker text-copper mb-6">{t.hero.kicker}</p>
          <h1 className="display mx-auto mb-7 max-w-4xl text-[clamp(2.4rem,7vw,5rem)] text-cream">
            {t.hero.titleA}<br />
            <em>{t.hero.titleB}</em>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-base text-cream/80 md:text-lg">
            {t.hero.lead}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#kontakt" className="w-full rounded-lg bg-copper px-8 py-4 text-sm font-bold text-cream transition hover:bg-copper-light sm:w-auto">
              {t.hero.cta1}
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener" className="w-full rounded-lg border border-line px-8 py-4 text-sm font-bold text-ink transition hover:border-copper hover:text-copper sm:w-auto">
              {t.hero.cta2}
            </a>
          </div>
          <p className="mono mt-6 text-xs text-ink-3">
            {t.hero.risk}
          </p>
        </div>
      </section>

      {/* ── Trust-Stats ──────────────────────────── */}
      <section id="ergebnisse" className="border-t border-line bg-paper-2">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-12 sm:grid-cols-3">
            {t.stats.map((stat) => (
              <div key={stat.label} className="scroll-in text-center">
                <p className="display mb-2 text-4xl text-ink md:text-5xl">{stat.num}</p>
                <p className="kicker text-copper mb-2">{stat.label}</p>
                <p className="text-sm text-ink-2">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mechanismus / Branchen ───────────────── */}
      <section id="leistungen" className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <p className="kicker text-copper mb-6">{t.services.kicker}</p>
        <h2 className="display mb-14 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] text-ink">
          {t.services.title}
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {t.services.cards.map((card, i) => (
            <Link
              key={card.href}
              href={card.href}
              className="scroll-in group rounded-2xl border border-line bg-paper-2 p-9 transition hover:border-copper"
            >
              <div className="mb-8 flex items-start justify-between">
                <span className="display text-5xl text-copper">0{i + 1}</span>
                <span className="text-2xl text-ink-3 transition group-hover:text-copper">→</span>
              </div>
              <h3 className="display mb-3 text-2xl text-cream">{card.title}</h3>
              <p className="mb-7 text-sm leading-relaxed text-ink-2">{card.desc}</p>
              <div className="flex flex-wrap gap-2">
                {card.badges.map((badge) => (
                  <span key={badge} className="inline-block rounded-full border border-line px-3 py-1.5 text-xs font-medium text-ink-2">
                    {badge}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Beispielprojekt / Proof (keine erfundenen Testimonials) ── */}
      <section className="border-t border-line bg-paper-2">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">
          <div>
            <p className="kicker text-copper mb-6">{t.example.kicker}</p>
            <h2 className="display mb-6 text-[clamp(2rem,5vw,3.5rem)] text-ink">
              {t.example.title}
            </h2>
            <p className="mb-8 text-ink-2">
              {t.example.body}
            </p>
            {/* TODO: echte Live-URL des Beispielprojekts eintragen */}
            <a href="#kontakt" className="inline-flex items-center gap-2 rounded-lg border border-line px-6 py-4 text-sm font-bold text-ink transition hover:border-copper hover:text-copper">
              {t.example.cta}
            </a>
          </div>
          <div className="scroll-in rounded-2xl border border-copper bg-paper p-8">
            <span className="display text-2xl text-cream">{t.example.brand}</span>
            <div className="mt-6 space-y-3">
              {t.example.rows.map((row, i) => (
                <div
                  key={row.k}
                  className={`flex justify-between text-sm ${i < t.example.rows.length - 1 ? "border-b border-line pb-3" : "pb-1"}`}
                >
                  <span className="text-ink-2">{row.k}</span>
                  <span className="text-ink">{row.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────── */}
      <section id="angebot" className="border-t border-line">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <p className="kicker text-copper mb-6">{t.pricing.kicker}</p>
          <h2 className="display mb-14 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] text-ink">
            {t.pricing.title}
          </h2>

          <div className="grid max-w-4xl gap-8 md:grid-cols-2">
            <div className="scroll-in rounded-3xl border border-line bg-paper-2 p-8">
              <p className="kicker text-copper mb-4">{t.pricing.starter.kicker}</p>
              <div className="mb-8">
                <p className="display text-5xl text-ink">{t.pricing.starter.price}</p>
                <p className="mt-2 text-sm text-ink-2">{t.pricing.starter.note}</p>
              </div>
              <p className="mb-8 text-ink-2">{t.pricing.starter.desc}</p>
              <ul className="mb-8 space-y-3">
                {t.pricing.starter.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-ink-2"><span className="text-copper">✓</span>{f}</li>
                ))}
              </ul>
              <a href="#kontakt" className="block w-full rounded-lg border border-line bg-transparent px-6 py-4 text-center text-sm font-bold text-ink transition hover:border-copper hover:text-copper">
                {t.pricing.starter.cta}
              </a>
            </div>

            <div className="scroll-in relative rounded-3xl border-2 border-copper bg-paper-2 p-8">
              <span className="absolute -top-4 left-8 rounded-full bg-copper px-4 py-1 text-xs font-bold text-cream">{t.pricing.popular}</span>
              <p className="kicker text-copper mb-4">{t.pricing.ongoing.kicker}</p>
              <div className="mb-8">
                <p className="display text-5xl text-ink">{t.pricing.ongoing.price}</p>
                <p className="mt-2 text-sm text-ink-2">{t.pricing.ongoing.note}</p>
              </div>
              <p className="mb-8 text-ink-2">{t.pricing.ongoing.desc}</p>
              <ul className="mb-8 space-y-3">
                {t.pricing.ongoing.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-cream"><span className="text-copper">✓</span>{f}</li>
                ))}
              </ul>
              <a href="#kontakt" className="block w-full rounded-lg bg-copper px-6 py-4 text-center text-sm font-bold text-cream transition hover:bg-copper-light">
                {t.pricing.ongoing.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Garantie ─────────────────────────────── */}
      <section className="border-t border-line bg-paper-2">
        <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
          <p className="kicker text-copper mb-6">{t.guarantee.kicker}</p>
          <h2 className="display mb-4 text-[clamp(2rem,5vw,3.5rem)] text-ink">{t.guarantee.title}</h2>
          <p className="mb-12 max-w-2xl text-ink-2">{t.guarantee.lead}</p>

          <div className="grid gap-6 md:grid-cols-2">
            {t.guarantee.items.map((item, i) => (
              <div key={item.name} className={`scroll-in rounded-2xl bg-paper p-8 ${i === 0 ? "border border-line" : "border border-copper"}`}>
                <h3 className="mb-3 font-semibold text-ink">{item.name}</h3>
                <p className="text-sm text-ink-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Kontakt — Formular + alle Kanäle ─────── */}
      <section id="kontakt" className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">
          <div>
            <p className="kicker text-copper mb-6">{t.contact.kicker}</p>
            <h2 className="display mb-6 text-[clamp(2rem,5vw,3.5rem)] text-ink">
              {t.contact.title}
            </h2>
            <p className="mb-10 text-ink-2">{t.contact.lead}</p>
            <div className="space-y-3">
              <a href={WA_LINK} target="_blank" rel="noopener" className="flex items-center justify-between rounded-lg border border-line bg-paper-2 px-5 py-4 transition hover:border-copper">
                <span className="text-sm font-bold text-ink">{t.contact.waLabel}</span>
                <span className="mono text-sm text-copper">{PHONE_DISPLAY}</span>
              </a>
              <a href={`tel:${PHONE_TEL}`} className="flex items-center justify-between rounded-lg border border-line bg-paper-2 px-5 py-4 transition hover:border-copper">
                <span className="text-sm font-bold text-ink">{t.contact.callLabel}</span>
                <span className="mono text-sm text-copper">{PHONE_DISPLAY}</span>
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center justify-between rounded-lg border border-line bg-paper-2 px-5 py-4 transition hover:border-copper">
                <span className="text-sm font-bold text-ink">{t.contact.mailLabel}</span>
                <span className="mono text-sm text-copper">{EMAIL}</span>
              </a>
            </div>
          </div>

          <form className="space-y-5" action={`mailto:${EMAIL}`} method="post" encType="text/plain">
            <div>
              <label className="mb-2 block text-sm text-ink">{t.contact.form.nameLabel}</label>
              <input type="text" name="name" required placeholder={t.contact.form.namePh} className="w-full rounded-lg border border-line bg-paper-2 px-4 py-3 text-ink placeholder:text-ink-3 focus:border-copper focus:outline-none" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-ink">{t.contact.form.betriebLabel}</label>
              <select name="betrieb" className="w-full rounded-lg border border-line bg-paper-2 px-4 py-3 text-ink focus:border-copper focus:outline-none">
                {t.contact.form.betriebOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm text-ink">{t.contact.form.kontaktLabel}</label>
              <input type="text" name="kontakt" required placeholder={t.contact.form.kontaktPh} className="w-full rounded-lg border border-line bg-paper-2 px-4 py-3 text-ink placeholder:text-ink-3 focus:border-copper focus:outline-none" />
            </div>
            <div>
              <textarea name="nachricht" placeholder={t.contact.form.msgPh} rows={4} className="w-full rounded-lg border border-line bg-paper-2 px-4 py-3 text-ink placeholder:text-ink-3 focus:border-copper focus:outline-none"></textarea>
            </div>
            <button type="submit" className="w-full rounded-lg bg-copper px-6 py-4 text-center text-sm font-bold text-cream transition hover:bg-copper-light">
              {t.contact.form.submit}
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
          <span className="text-ink-2">© {new Date().getFullYear()} · {t.footer.tagline}</span>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-ink-3">
            <a href="/impressum" className="transition hover:text-ink">{t.footer.impressum}</a>
            <a href="/datenschutz" className="transition hover:text-ink">{t.footer.datenschutz}</a>
            <a href={`mailto:${EMAIL}`} className="mono transition hover:text-ink">{EMAIL}</a>
          </div>
        </div>
      </footer>

      {/* ── Sticky Mobile Contact Bar (Südtirol-Standard) ── */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-line bg-paper/95 backdrop-blur md:hidden">
        <a href={`tel:${PHONE_TEL}`} className="py-4 text-center text-sm font-bold text-ink">{t.sticky.call}</a>
        <a href={WA_LINK} target="_blank" rel="noopener" className="bg-copper py-4 text-center text-sm font-bold text-cream">{t.sticky.whatsapp}</a>
      </div>
    </main>
  );
}

/* ── Sprach-Umschalter DE / IT ──────────────────── */
function LangSwitch({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="flex items-center rounded-sm border border-line text-xs font-bold" role="group" aria-label="Sprache / Lingua">
      {(Object.keys(LANG_LABELS) as Lang[]).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`px-2.5 py-2 transition ${lang === l ? "bg-copper text-cream" : "text-ink-2 hover:text-ink"}`}
        >
          {LANG_LABELS[l]}
        </button>
      ))}
    </div>
  );
}
