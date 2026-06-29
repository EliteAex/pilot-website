'use client';

import Link from "next/link";
import { i18n } from "@/content/i18n";
import { useLang, LangSwitch } from "@/components/LanguageProvider";
import DemoReceptionist from "@/components/DemoReceptionist";
import VideoEmbed from "@/components/VideoEmbed";

/* ───────────────────────────────────────────────
   KONTAKT-DATEN — HIER deine echten Daten eintragen.
   Werden überall auf der Seite verwendet (Header, Hero,
   Kontakt, Sticky-Bar, Footer). Nur EINMAL ändern nötig.
   ─────────────────────────────────────────────── */
const PHONE_DISPLAY = "+39 327 304 2753";
const PHONE_TEL = "+393273042753";
const WA_NUMBER = "393273042753";               // wa.me-Format: Ländercode 39 + Nummer ohne +
const EMAIL = "alex@amstudio.ink";

/* Markenzeichen — AM "Bergkamm"-Monogramm */
function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="amstudio">
      <path d="M22 92 L45 38 L60 71 L75 38 L98 92" fill="none" stroke="#ffffff" strokeWidth="10" strokeLinejoin="round" strokeLinecap="round" />
      <line x1="33" y1="66" x2="58" y2="66" stroke="#d8b878" strokeWidth="10" strokeLinecap="round" />
    </svg>
  );
}

export default function Home() {
  const { lang } = useLang();
  const t = i18n[lang];
  const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(t.waMessage)}`;

  return (
    <main className="relative flex min-h-screen flex-col">
      <div className="grain" aria-hidden />

      {/* ── Header ───────────────────────────────── */}
      <header className="sticky top-0 z-40 border-b border-line/60 bg-paper/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#top" className="flex items-center gap-3">
            <Logo />
            <span className="display text-xl text-ink">amstudio</span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            <a href="#demo" className="text-sm text-ink-2 transition hover:text-ink">Demo</a>
            <a href="#leistungen" className="text-sm text-ink-2 transition hover:text-ink">{t.nav.leistungen}</a>
            <a href="#angebot" className="text-sm text-ink-2 transition hover:text-ink">{t.nav.angebot}</a>
            <a href="#kontakt" className="text-sm text-ink-2 transition hover:text-ink">{t.nav.kontakt}</a>
          </nav>

          <div className="flex items-center gap-3">
            <LangSwitch />
            <a href={WA_LINK} target="_blank" rel="noopener" className="hidden items-center gap-2 rounded-full px-4 py-2.5 text-xs font-bold btn-ghost sm:inline-flex">
              {t.btn.whatsapp}
            </a>
            <a href="#kontakt" className="rounded-full px-5 py-2.5 text-xs font-bold btn-primary">
              {t.btn.gratisWebsite}
            </a>
          </div>
        </div>
      </header>

      <span id="top" />

      {/* ── Hero ─────────────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* decorative grid + glow */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.4]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "64px 64px", maskImage: "radial-gradient(70% 60% at 50% 30%, black, transparent)" }} aria-hidden />

        <div className="relative mx-auto w-full max-w-5xl px-6 pb-20 pt-24 text-center md:px-10 md:pt-32">
          <p className="kicker-tick kicker text-copper-light mb-7 inline-flex justify-center">
            {t.hero.kicker}
          </p>
          <h1 className="display mx-auto mb-8 max-w-4xl text-[clamp(2.6rem,7.5vw,5.5rem)] text-cream">
            {t.hero.titleA}
            <br />
            <em>{t.hero.titleB}</em>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-base text-ink-2 md:text-lg">
            {t.hero.lead}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#demo" className="w-full rounded-full px-8 py-4 text-sm font-bold btn-primary sm:w-auto">
              {lang === "de" ? "Live-Demo ausprobieren" : "Prova la demo live"}
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener" className="w-full rounded-full px-8 py-4 text-sm font-bold btn-ghost sm:w-auto">
              {t.hero.cta2}
            </a>
          </div>
          <p className="mono mt-7 text-xs text-ink-3">{t.hero.risk}</p>
        </div>
      </section>

      {/* ── LIVE-DEMO (Herzstück) ─────────────────── */}
      <section id="demo" className="relative border-t border-line/60 bg-paper-2/40">
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(50% 50% at 50% 0%, rgba(217,70,239,0.12), transparent 70%)" }} aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="mb-10 max-w-2xl">
            <p className="kicker-tick kicker text-copper-light mb-6 inline-flex">{t.demo.kicker}</p>
            <h2 className="display text-[clamp(2rem,5vw,3.5rem)] text-ink">
              {t.demo.title} <em>{t.demo.titleEm}</em>
            </h2>
            <p className="mt-5 text-ink-2">{t.demo.lead}</p>
          </div>
          <DemoReceptionist />
        </div>
      </section>

      {/* ── Trust-Stats ──────────────────────────── */}
      <section id="ergebnisse" className="border-t border-line/60">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="grid gap-12 sm:grid-cols-3">
            {t.stats.map((stat) => (
              <div key={stat.label} className="scroll-in text-center">
                <p className="display mb-2 text-5xl text-ink md:text-6xl">{stat.num}</p>
                <p className="kicker text-copper-light mb-2">{stat.label}</p>
                <p className="text-sm text-ink-2">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Branchen ─────────────────────────────── */}
      <section id="leistungen" className="border-t border-line/60 mx-auto w-full max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <p className="kicker-tick kicker text-copper-light mb-6 inline-flex">{t.services.kicker}</p>
        <h2 className="display mb-14 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] text-ink">
          {t.services.title}
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {t.services.cards.map((card, i) => (
            <Link
              key={card.href}
              href={card.href}
              className="scroll-in card-hover group rounded-3xl border border-line bg-paper-2/60 p-9"
            >
              <div className="mb-8 flex items-start justify-between">
                <span className="display text-5xl text-copper-light">0{i + 1}</span>
                <span className="grid h-10 w-10 place-items-center rounded-full border border-line text-lg text-ink-3 transition group-hover:border-copper group-hover:text-copper-light">→</span>
              </div>
              <h3 className="display mb-3 text-3xl text-cream">{card.title}</h3>
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

      {/* ── Video ────────────────────────────────── */}
      <section className="border-t border-line/60">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="mb-10 max-w-2xl">
            <p className="kicker-tick kicker text-copper-light mb-6 inline-flex">{t.video.kicker}</p>
            <h2 className="display text-[clamp(2rem,5vw,3.5rem)] text-ink">{t.video.title}</h2>
            <p className="mt-5 text-ink-2">{t.video.lead}</p>
          </div>

          {/* HeyGen-Video „Filo AI – il tuo receptionist digitale".
              Klick-zum-Laden. Hinweis: falls das Video nicht startet, im HeyGen
              Share-Dialog die echte Embed-URL holen und hier in `src` eintragen. */}
          <VideoEmbed
            src="https://app.heygen.com/embeds/108e118c80a94c049c7911608d3fcfea"
            fallbackHref="https://app.heygen.com/videos/filo-ai-il-tuo-receptionist-digitale-108e118c80a94c049c7911608d3fcfea"
            badge={t.video.badge}
            duration={t.video.duration}
          />
          <p className="mono mt-4 text-xs text-ink-3">{t.video.caption}</p>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────── */}
      <section id="angebot" className="border-t border-line/60 bg-paper-2/40">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <p className="kicker-tick kicker text-copper-light mb-6 inline-flex">{t.pricing.kicker}</p>
          <h2 className="display mb-14 max-w-3xl text-[clamp(2rem,5vw,3.5rem)] text-ink">
            {t.pricing.title}
          </h2>

          <div className="grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="scroll-in rounded-3xl border border-line bg-paper-2/60 p-8">
              <p className="kicker text-copper-light mb-4">{t.pricing.starter.kicker}</p>
              <div className="mb-8">
                <p className="display text-5xl text-ink">{t.pricing.starter.price}</p>
                <p className="mt-2 text-sm text-ink-2">{t.pricing.starter.note}</p>
              </div>
              <p className="mb-8 text-ink-2">{t.pricing.starter.desc}</p>
              <ul className="mb-8 space-y-3">
                {t.pricing.starter.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-ink-2"><span className="text-copper-light">✓</span>{f}</li>
                ))}
              </ul>
              <a href="#kontakt" className="block w-full rounded-full px-6 py-4 text-center text-sm font-bold btn-ghost">
                {t.pricing.starter.cta}
              </a>
            </div>

            <div className="scroll-in relative rounded-3xl border-2 border-copper bg-paper-2/60 p-8 shadow-[0_30px_80px_-40px_rgba(216,184,120,0.6)]">
              <span className="absolute -top-3.5 left-8 rounded-full bg-copper px-4 py-1 text-xs font-bold text-paper">{t.pricing.popular}</span>
              <p className="kicker text-copper-light mb-4">{t.pricing.ongoing.kicker}</p>
              <div className="mb-8">
                <p className="display text-5xl text-ink">{t.pricing.ongoing.price}</p>
                <p className="mt-2 text-sm text-ink-2">{t.pricing.ongoing.note}</p>
              </div>
              <p className="mb-8 text-ink-2">{t.pricing.ongoing.desc}</p>
              <ul className="mb-8 space-y-3">
                {t.pricing.ongoing.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-cream"><span className="text-copper-light">✓</span>{f}</li>
                ))}
              </ul>
              <a href="#kontakt" className="block w-full rounded-full px-6 py-4 text-center text-sm font-bold btn-primary">
                {t.pricing.ongoing.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Garantie ─────────────────────────────── */}
      <section className="border-t border-line/60">
        <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
          <p className="kicker-tick kicker text-copper-light mb-6 inline-flex">{t.guarantee.kicker}</p>
          <h2 className="display mb-4 text-[clamp(2rem,5vw,3.5rem)] text-ink">{t.guarantee.title}</h2>
          <p className="mb-12 max-w-2xl text-ink-2">{t.guarantee.lead}</p>

          <div className="grid gap-6 md:grid-cols-2">
            {t.guarantee.items.map((item, i) => (
              <div key={item.name} className={`scroll-in rounded-3xl bg-paper-2/60 p-8 ${i === 0 ? "border border-line" : "border border-copper/60"}`}>
                <h3 className="mb-3 font-semibold text-ink">{item.name}</h3>
                <p className="text-sm text-ink-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Infos / FAQ ──────────────────────────── */}
      <section id="infos" className="border-t border-line/60 bg-paper-2/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[0.8fr_1.2fr] md:px-10 md:py-28">
          <div>
            <p className="kicker-tick kicker text-copper-light mb-6 inline-flex">{t.infos.kicker}</p>
            <h2 className="display text-[clamp(2rem,5vw,3.5rem)] text-ink">{t.infos.title}</h2>
          </div>
          <div className="space-y-3">
            {t.infos.items.map((item, i) => (
              <details key={item.q} className="scroll-in group rounded-2xl border border-line bg-paper-2/60 px-6 transition open:border-copper/50" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-base font-semibold text-ink marker:hidden">
                  {item.q}
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line text-ink-2 transition group-open:rotate-45 group-open:border-copper group-open:text-copper-light">+</span>
                </summary>
                <p className="pb-5 text-sm leading-relaxed text-ink-2">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Kontakt ──────────────────────────────── */}
      <section id="kontakt" className="border-t border-line/60">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">
          <div>
            <p className="kicker-tick kicker text-copper-light mb-6 inline-flex">{t.contact.kicker}</p>
            <h2 className="display mb-6 text-[clamp(2rem,5vw,3.5rem)] text-ink">
              {t.contact.title}
            </h2>
            <p className="mb-10 text-ink-2">{t.contact.lead}</p>
            <div className="space-y-3">
              <a href={WA_LINK} target="_blank" rel="noopener" className="flex items-center justify-between rounded-2xl border border-line bg-paper-2/60 px-5 py-4 transition hover:border-copper">
                <span className="text-sm font-bold text-ink">{t.contact.waLabel}</span>
                <span className="mono text-sm text-copper-light">{PHONE_DISPLAY}</span>
              </a>
              <a href={`tel:${PHONE_TEL}`} className="flex items-center justify-between rounded-2xl border border-line bg-paper-2/60 px-5 py-4 transition hover:border-copper">
                <span className="text-sm font-bold text-ink">{t.contact.callLabel}</span>
                <span className="mono text-sm text-copper-light">{PHONE_DISPLAY}</span>
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center justify-between rounded-2xl border border-line bg-paper-2/60 px-5 py-4 transition hover:border-copper">
                <span className="text-sm font-bold text-ink">{t.contact.mailLabel}</span>
                <span className="mono text-sm text-copper-light">{EMAIL}</span>
              </a>
            </div>
          </div>

          <form className="space-y-5" action={`mailto:${EMAIL}`} method="post" encType="text/plain">
            <div>
              <label className="mb-2 block text-sm text-ink">{t.contact.form.nameLabel}</label>
              <input type="text" name="name" required placeholder={t.contact.form.namePh} className="w-full rounded-xl border border-line bg-paper-2/60 px-4 py-3 text-ink placeholder:text-ink-3 focus:border-copper focus:outline-none" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-ink">{t.contact.form.betriebLabel}</label>
              <select name="betrieb" className="w-full rounded-xl border border-line bg-paper-2/60 px-4 py-3 text-ink focus:border-copper focus:outline-none">
                {t.contact.form.betriebOptions.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm text-ink">{t.contact.form.kontaktLabel}</label>
              <input type="text" name="kontakt" required placeholder={t.contact.form.kontaktPh} className="w-full rounded-xl border border-line bg-paper-2/60 px-4 py-3 text-ink placeholder:text-ink-3 focus:border-copper focus:outline-none" />
            </div>
            <div>
              <textarea name="nachricht" placeholder={t.contact.form.msgPh} rows={4} className="w-full rounded-xl border border-line bg-paper-2/60 px-4 py-3 text-ink placeholder:text-ink-3 focus:border-copper focus:outline-none"></textarea>
            </div>
            <button type="submit" className="w-full rounded-full px-6 py-4 text-center text-sm font-bold btn-primary">
              {t.contact.form.submit}
            </button>
          </form>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────── */}
      <footer className="border-t border-line/60 bg-paper-2/40 pb-24 md:pb-0">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 text-sm md:flex-row md:items-center md:justify-between md:px-10">
          <div className="flex items-center gap-3">
            <Logo className="h-7 w-7" />
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

      {/* ── Sticky Mobile Contact Bar ────────────── */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-line bg-paper/95 backdrop-blur md:hidden">
        <a href={`tel:${PHONE_TEL}`} className="py-4 text-center text-sm font-bold text-ink">{t.sticky.call}</a>
        <a href={WA_LINK} target="_blank" rel="noopener" className="bg-copper py-4 text-center text-sm font-bold text-paper">{t.sticky.whatsapp}</a>
      </div>
    </main>
  );
}
