'use client';

import { createContext, useContext, useEffect, useState } from "react";
import { LANG_LABELS, type Lang } from "@/content/i18n";

type LangContextValue = { lang: Lang; setLang: (l: Lang) => void };

const LangContext = createContext<LangContextValue>({ lang: "de", setLang: () => {} });

const STORAGE_KEY = "amstudio-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Default "de" — gleich für Server & ersten Client-Render (keine Hydration-Mismatch).
  const [lang, setLang] = useState<Lang>("de");

  // Gespeicherte Sprache nach dem Mount laden.
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored === "de" || stored === "it") setLang(stored);
  }, []);

  // Auswahl persistieren + <html lang> setzen.
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

/* ── Sprach-Umschalter DE / IT ──────────────────── */
export function LangSwitch({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <div
      className={`flex items-center rounded-sm border border-line text-xs font-bold ${className}`}
      role="group"
      aria-label="Sprache / Lingua"
    >
      {(Object.keys(LANG_LABELS) as Lang[]).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`px-2.5 py-2 transition ${lang === l ? "bg-copper text-on-accent" : "text-ink-2 hover:text-ink"}`}
        >
          {LANG_LABELS[l]}
        </button>
      ))}
    </div>
  );
}
