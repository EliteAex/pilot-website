'use client';

import { useState } from "react";

/* ───────────────────────────────────────────────
   Klick-zum-Laden Video-Facade.
   Zeigt erst ein leichtes Poster; das externe iframe
   (HeyGen) wird erst beim Klick geladen — schneller
   Seitenaufbau + kein Tracking vor der Zustimmung.
   ─────────────────────────────────────────────── */
export default function VideoEmbed({
  src,
  fallbackHref,
  badge,
  duration,
}: {
  src: string;
  fallbackHref: string;
  badge: string;
  duration: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="scroll-in relative aspect-video w-full overflow-hidden rounded-3xl border border-copper/40 bg-paper-2">
        <iframe
          src={src}
          title="Filo AI: Il Tuo Receptionist Digitale"
          className="absolute inset-0 h-full w-full"
          frameBorder={0}
          allow="encrypted-media; fullscreen;"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className="scroll-in group relative block aspect-video w-full overflow-hidden rounded-3xl border border-line text-left"
      style={{ background: "radial-gradient(120% 120% at 50% 0%, #1f1810 0%, #0c0813 70%)" }}
      aria-label="Video abspielen"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute inset-0 grid place-items-center">
        <span className="grid h-20 w-20 place-items-center rounded-full bg-copper text-paper shadow-[0_0_60px_-10px_rgba(216,184,120,0.9)] transition group-hover:scale-110">
          <svg viewBox="0 0 24 24" className="ml-1 h-8 w-8" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </div>
      <span className="absolute left-5 top-5 rounded-full bg-paper/70 px-3 py-1.5 text-xs font-bold text-ink backdrop-blur">
        {badge}
      </span>
      <span className="mono absolute right-5 top-5 rounded-full bg-paper/70 px-3 py-1.5 text-xs text-ink-2 backdrop-blur">
        {duration}
      </span>
      <a
        href={fallbackHref}
        target="_blank"
        rel="noopener"
        onClick={(e) => e.stopPropagation()}
        className="mono absolute bottom-5 right-5 rounded-full border border-line bg-paper/60 px-3 py-1.5 text-[0.7rem] text-ink-3 backdrop-blur transition hover:text-ink"
      >
        ↗ HeyGen
      </a>
    </button>
  );
}
