'use client';

import Link from "next/link";
import type { LocalizedOffer, Offer } from "@/content/offers";
import { offerUI } from "@/content/i18n";
import { useLang, LangSwitch } from "@/components/LanguageProvider";

const EMAIL = "alex.grunberer@gmail.com";
const WA_NUMBER = "393273042753";

type OfferUI = (typeof offerUI)["de"];

const mail = (o: Offer, ui: OfferUI, plan?: string) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(
    ui.mailSubject.replace("{brand}", o.brand) + (plan ? " · " + plan : "")
  )}&body=${encodeURIComponent(ui.mailBody.replace("{brand}", o.brand))}`;

const waLink = (o: Offer, ui: OfferUI) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    ui.waMessage.replace("{brand}", o.brand)
  )}`;

function Head({
  n,
  label,
  title,
  light,
}: {
  n: string;
  label: string;
  title: string;
  light?: boolean;
}) {
  return (
    <div className="scroll-in">
      <p className="kicker">
        <span className={light ? "text-cream/60" : "text-copper"}>
          {n}
        </span>
        <span className={light ? "text-cream/40" : "text-ink-3"}> — {label}</span>
      </p>
      <div className={`mt-5 h-px w-full ${light ? "bg-cream/20" : "bg-line"}`} />
      <h2
        className={`display mt-8 max-w-3xl text-[clamp(2.1rem,4.8vw,3.6rem)] ${
          light ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}

export default function OfferPage({ offerSet }: { offerSet: LocalizedOffer }) {
  const { lang } = useLang();
  const offer = offerSet[lang];
  const ui = offerUI[lang];

  return (
    <div className="relative bg-paper">
      {/* ── Header ───────────────────────────────── */}
      <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <Link href="/" className="group flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-full border border-ink/30 text-ink transition group-hover:bg-ink group-hover:text-paper">
              <span className="text-base leading-none">←</span>
            </span>
            <span className="flex items-baseline gap-2">
              <span className="display text-xl text-ink">amstudio</span>
              <span className="kicker text-ink-3">/ {offer.brand}</span>
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <LangSwitch />
            <a
              href={mail(offer, ui)}
              className="rounded-full bg-copper px-5 py-2.5 text-sm font-semibold text-cream shadow-sm transition hover:bg-copper-light"
            >
              {ui.headerCta}
            </a>
          </div>
        </div>
      </header>

      {/* ── Hero ─────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-14 md:px-10 md:pb-24 md:pt-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p
              className="kicker reveal text-copper"
              style={{ animationDelay: "0ms" }}
            >
              {offer.heroEyebrow}
            </p>
            <h1
              className="display reveal mt-7 whitespace-pre-line text-[clamp(2.9rem,7.5vw,5.8rem)] text-ink"
              style={{ animationDelay: "80ms" }}
            >
              {offer.heroTitle}
            </h1>
            <p
              className="reveal mt-7 max-w-xl text-xl font-medium leading-snug text-ink md:text-2xl"
              style={{ animationDelay: "160ms" }}
            >
              {offer.heroLead}
            </p>
            <p
              className="reveal mt-4 max-w-xl text-lg leading-relaxed text-ink-2"
              style={{ animationDelay: "220ms" }}
            >
              {offer.heroSub}
            </p>
            <div
              className="reveal mt-9 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "300ms" }}
            >
              <a
                href={mail(offer, ui)}
                className="rounded-full bg-copper px-8 py-4 text-base font-semibold text-cream shadow-md transition hover:bg-copper-light"
              >
                {ui.heroCta1}
              </a>
              <a
                href="#preise"
                className="rounded-full border border-ink/25 px-8 py-4 text-base font-semibold text-ink transition hover:border-ink hover:bg-ink hover:text-paper"
              >
                {ui.heroCta2}
              </a>
            </div>
            <ul
              className="reveal mt-9 flex flex-wrap gap-x-7 gap-y-3"
              style={{ animationDelay: "380ms" }}
            >
              {offer.heroBadges.map((b) => (
                <li
                  key={b.text}
                  className="flex items-center gap-2 text-sm text-ink-2"
                >
                  {b.text}
                </li>
              ))}
            </ul>
          </div>

          {/* hero image */}
          <div className="reveal relative" style={{ animationDelay: "240ms" }}>
            <div
              aria-hidden
              className="absolute -right-5 -top-5 h-44 w-44 rounded-full border border-copper/25"
            />
            <img
              src={offer.heroImg}
              alt={`${offer.niche} ${ui.heroImgAlt}`}
              className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-2xl"
            />
            <div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl border border-line bg-paper px-5 py-4 shadow-xl">
              <span className="text-2xl">⚡</span>
              <div>
                <p className="mono text-lg font-semibold text-ink">&lt; 10 Sek</p>
                <p className="text-xs text-ink-3">{ui.badgeAnswer}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 01 Problems ──────────────────────────── */}
      <section className="border-t border-line bg-paper-2">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <Head n="01" label={offer.problemsKicker} title={offer.problemsTitle} />
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {offer.problems.map((p, i) => (
              <div key={p.t} className="scroll-in">
                <div className="mb-4">
                  <span className="mono text-xs text-copper font-bold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="mt-4 h-px w-full bg-line" />
                <h3 className="mt-4 text-lg font-semibold text-ink">{p.t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-2">
                  {p.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 02 How it works ──────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
        <Head n="02" label={ui.stepsLabel} title={offer.stepsTitle} />
        <div className="mt-14 grid gap-12 md:grid-cols-3">
          {offer.steps.map((s) => (
            <div key={s.n} className="scroll-in relative">
              <div className="flex items-end justify-between">
                <span className="display text-5xl text-copper">
                  {s.n}
                </span>
              </div>
              <div className="mt-5 h-px w-full bg-line" />
              <h3 className="display mt-6 text-2xl text-ink">{s.t}</h3>
              <p className="mt-3 leading-relaxed text-ink-2">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pull-quote band ──────────────────────── */}
      <section className="relative overflow-hidden">
        <img
          src={offer.bandImg}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-white/90" />
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center md:py-36">
          <span className="text-3xl text-copper">"</span>
          <p className="display mt-2 text-[clamp(1.9rem,4.8vw,3.6rem)] leading-tight text-black font-bold">
            {offer.bandLine}
          </p>
        </div>
      </section>

      {/* ── 03 Value stack ───────────────────────── */}
      <section className="bg-loden text-cream">
        <div className="mx-auto max-w-4xl px-6 py-20 md:px-10 md:py-28">
          <Head n="03" label={ui.stackLabel} title={ui.stackTitle} light />
          <div className="mt-12 overflow-hidden rounded-2xl border border-cream/15 bg-cream/[0.04]">
            {offer.stack.map((row) => (
              <div
                key={row.item}
                className="flex items-start justify-between gap-6 border-b border-cream/10 px-6 py-5 last:border-0"
              >
                <div className="flex items-start gap-3">
                  <div>
                    <p className="font-medium leading-snug text-cream">
                      {row.item}
                    </p>
                    {(row.hero || row.bonus) && (
                      <span className="kicker mt-1 inline-block text-cream/45">
                        {row.hero ? ui.stackCore : ui.stackBonus}
                      </span>
                    )}
                  </div>
                </div>
                <span className="mono whitespace-nowrap text-cream/70">
                  {row.value}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-baseline justify-between gap-4">
            <span className="text-lg text-cream/70">{ui.totalLabel}</span>
            <span className="mono text-2xl text-cream/45 line-through decoration-copper decoration-2">
              {offer.stackTotal}
            </span>
          </div>
          <p className="mt-2 text-cream/70">
            {ui.totalNote}
          </p>
        </div>
      </section>

      {/* ── Trust strip ──────────────────────────── */}
      <section className="border-b border-line bg-paper-2">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center md:px-10 md:py-20">
          <p className="display text-[clamp(1.5rem,3.2vw,2.3rem)] leading-snug text-ink">
            <em>„{offer.trust}"</em>
          </p>
          <p className="kicker mt-6 text-ink-3">{ui.trustAttribution}</p>
        </div>
      </section>

      {/* ── 04 Pricing ───────────────────────────── */}
      <section id="preise" className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
        <Head n="04" label={ui.pricingLabel} title={ui.pricingTitle} />
        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {offer.plans.map((plan) => (
            <div
              key={plan.name}
              className={[
                "scroll-in relative flex flex-col rounded-3xl border p-8",
                plan.highlight
                  ? "border-copper bg-paper-2 shadow-xl"
                  : "border-line bg-cream",
              ].join(" ")}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-8 rounded-full bg-copper px-4 py-1 text-xs font-semibold text-cream">
                  {plan.badge}
                </span>
              )}
              <h3 className={`display text-2xl ${plan.highlight ? "text-ink" : "text-black"}`}>{plan.name}</h3>
              <div className="mt-5 flex items-baseline gap-2">
                <span className={`display text-[3.4rem] leading-none ${plan.highlight ? "text-ink" : "text-black"}`}>
                  {plan.price}
                </span>
                <span className={plan.highlight ? "text-ink-2" : "text-black"}>{plan.priceNote}</span>
              </div>
              <p className={`mt-3 text-sm ${plan.highlight ? "text-ink-3" : "text-black"}`}>{plan.sub}</p>
              <ul className="mt-7 space-y-4">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-3 text-[15px]">
                    <span className="shrink-0 text-copper font-black text-2xl leading-none mt-0.5">✓</span>
                    <span className={plan.highlight ? "text-cream" : "text-ink-2"}>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex-1" />
              <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-copper/40 px-3 py-1 text-xs font-medium text-copper">
                {plan.guarantee}
              </span>
              <a
                href={mail(offer, ui, plan.name)}
                className={[
                  "rounded-full px-6 py-4 text-center text-base font-semibold transition",
                  plan.highlight
                    ? "bg-copper text-cream hover:bg-copper-light"
                    : "border border-black bg-white text-black hover:bg-black hover:text-white",
                ].join(" ")}
              >
                {plan.cta} →
              </a>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-ink-3">
          {offer.scarcity}
        </p>
      </section>

      {/* ── 05 Guarantee ─────────────────────────── */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
          <div className="scroll-in">
            <p className="kicker text-copper">05 — {ui.guaranteeLabel}</p>
            <div className="mt-5 h-px w-full bg-line" />
            <h2 className="display mt-8 max-w-3xl text-[clamp(2.1rem,4.8vw,3.6rem)] text-black">
              {offer.guaranteeTitle}
            </h2>
          </div>
          <p className="mt-4 max-w-xl text-black font-medium">{offer.guaranteeLead}</p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {offer.guarantees.map((g) => (
              <div
                key={g.name}
                className="scroll-in rounded-2xl border-2 border-copper/30 bg-copper/5 p-7"
              >
                <h3 className="font-bold text-black mb-3 text-lg">{g.name}</h3>
                <p className="leading-relaxed text-black text-base">{g.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 06 FAQ ───────────────────────────────── */}
      <section className="mx-auto max-w-3xl px-6 py-20 md:px-10 md:py-28">
        <Head n="06" label={ui.faqLabel} title={ui.faqTitle} />
        <div className="mt-12 divide-y divide-line border-y border-line">
          {offer.faq.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-ink">
                {f.q}
                <span className="text-2xl font-light leading-none text-copper transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-ink-2">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ── Final CTA / Contact ──────────────────── */}
      <section
        id="kontakt"
        className="border-t border-line bg-copper text-cream"
      >
        <div className="mx-auto max-w-3xl px-6 py-24 text-center md:px-10">
          <h2 className="display text-[clamp(2.2rem,5vw,4rem)]">
            {offer.finalTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-cream/85">
            {offer.finalSub}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={mail(offer, ui)}
              className="rounded-full bg-white px-8 py-4 text-base font-semibold text-black font-bold transition hover:bg-gray-100"
            >
              {ui.finalCta1}
            </a>
            <a
              href={waLink(offer, ui)}
              target="_blank"
              rel="noopener"
              className="rounded-full border border-cream/50 px-8 py-4 text-base font-semibold text-cream transition hover:bg-cream/10"
            >
              {ui.finalCta2}
            </a>
          </div>
          <p className="mono mt-8 text-sm text-cream/70">
            {EMAIL}
          </p>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────── */}
      <footer className="bg-ink text-cream/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm md:flex-row md:px-10">
          <span className="display text-lg text-cream">amstudio</span>
          <span>
            © {new Date().getFullYear()} · {ui.footerTagline}
          </span>
          <Link href="/" className="transition hover:text-cream">
            {ui.backToChoice}
          </Link>
        </div>
      </footer>
    </div>
  );
}
