'use client';

import { useCallback, useEffect, useRef, useState } from "react";
import { useLang } from "@/components/LanguageProvider";

/* ───────────────────────────────────────────────
   Live-Demo des KI-Empfangs — Test-Salon "Salone Gerola".
   Zwei Modi:
   • CHAT   — der Besucher chattet (WhatsApp-Stil), fragt einen
              Termin an, die KI bucht ihn.
   • ANRUF  — der Besucher sieht die echte Test-Nummer und kann
              wirklich anrufen. „Ergebnis zeigen" spielt ab, was
              NACH dem Anruf passiert.
   In beiden Fällen erscheinen rechts gleichzeitig die
   Buchungs-Bestätigung + die Rezensions-SMS und der Kalender
   füllt sich. Alles client-seitig simuliert.
   ─────────────────────────────────────────────── */

type Sender = "bot" | "user";
type Msg = { id: number; from: Sender; text: string; tone?: "ok" | "star" };
type Mode = "chat" | "call";

/* ── Test-Salon + Kanäle (hier echte Daten eintragen) ── */
const SALON_NAME = "Salone Gerola";
const CALL_DISPLAY = "+49 89 62084424";        // echte Test-Nummer zum Anrufen
const CALL_TEL = "+498962084424";
const CALENDLY_LINK = "https://calendly.com/amstudio/demo"; // TODO: echten Calendly-Link eintragen

const copy = {
  de: {
    tabChat: "💬 Chatbot",
    tabCall: "📞 Anruf",
    testBadge: "TESTSALON",
    salonMeta: "Friseur · Bozen · DE / IT",
    // chat
    chatStatus: "KI-Empfang · antwortet sofort",
    inputPh: "Nachricht schreiben…",
    send: "Senden",
    replay: "Demo neu starten",
    quick: {
      book: "Ich will einen Termin",
      hours: "Wann habt ihr offen?",
      price: "Was kostet ein Haarschnitt?",
    },
    slotsPrompt: "Klar! Wann passt es dir am besten?",
    slots: ["Morgen 15:00", "Do 10:30", "Sa 09:00"],
    greeting: "Ciao! 👋 Hier ist der KI-Empfang von Salone Gerola. Wie kann ich dir helfen?",
    hoursReply: "Wir haben Di–Sa, 9:00–18:30 geöffnet. Soll ich dir gleich einen Termin reservieren?",
    priceReply: "Ein Haarschnitt startet bei 28 €. Möchtest du einen Termin? 😊",
    fallback: "Verstanden! Am schnellsten geht's mit einem Termin — soll ich einen freien Platz suchen?",
    checking: "Einen Moment, ich schaue in den Kalender…",
    booked: (s: string) => `Perfekt, gebucht ✓  Dein Termin: ${s}. Du bekommst gleich eine SMS mit Kalender-Eintrag. Bis dann! ✂️`,
    review: "Danke für deinen Besuch! ⭐ Magst du Salone Gerola kurz auf Google bewerten? Hier der Link: g.page/r/gerola",
    // call
    callTitle: "Ruf den KI-Empfang an",
    callLead: "Wähl die Nummer, sprich ganz normal — die KI nimmt ab, beantwortet Fragen und bucht deinen Termin.",
    callNumberLabel: "Test-Nummer",
    callCta: "Jetzt anrufen",
    callSimulate: "Ergebnis nach dem Anruf zeigen",
    callAfter: "Nach dem Auflegen kommen Bestätigung & Bewertung — gleichzeitig, siehe rechts. ↘",
    calendlyCta: "Lieber online buchen →",
    callReset: "Zurücksetzen",
    callDefaultSlot: "Morgen 15:00",
    // phone (right)
    lockTitle: "iPhone von Gerola",
    callIncoming: "Anruf läuft",
    callFrom: "KI-Empfang spricht…",
    callAnsweredBy: "KI-Empfang nimmt an",
    callHandled: "Anruf von KI bearbeitet · 0:42",
    smsApp: "Mitteilungen",
    smsConfirmTitle: "Termin bestätigt",
    smsConfirm: (s: string) => `Salone Gerola: Dein Termin ist bestätigt — ${s}.`,
    addToCal: "Zum Kalender hinzufügen",
    added: "Im Kalender ✓",
    smsReviewTitle: "Bewertung",
    smsReview: "Salone Gerola: Danke für deinen Besuch! Bewerte uns ⭐",
    now: "jetzt",
    // calendar
    calTitle: "Kalender · Salone Gerola",
    weekdays: ["Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    newAppt: "Neuer Kunde",
    booking: "wird gebucht…",
    confirmedTag: "BESTÄTIGT",
  },
  it: {
    tabChat: "💬 Chatbot",
    tabCall: "📞 Chiamata",
    testBadge: "SALONE DEMO",
    salonMeta: "Parrucchiere · Bolzano · DE / IT",
    chatStatus: "Reception AI · risponde subito",
    inputPh: "Scrivi un messaggio…",
    send: "Invia",
    replay: "Riavvia la demo",
    quick: {
      book: "Vorrei un appuntamento",
      hours: "Quando siete aperti?",
      price: "Quanto costa un taglio?",
    },
    slotsPrompt: "Certo! Quando ti va meglio?",
    slots: ["Domani 15:00", "Gio 10:30", "Sab 09:00"],
    greeting: "Ciao! 👋 Sono la reception AI di Salone Gerola. Come posso aiutarti?",
    hoursReply: "Siamo aperti mar–sab, 9:00–18:30. Vuoi che ti fissi subito un appuntamento?",
    priceReply: "Un taglio parte da 28 €. Vuoi prenotare un appuntamento? 😊",
    fallback: "Capito! Il modo più veloce è fissare un appuntamento — cerco un posto libero?",
    checking: "Un attimo, controllo l'agenda…",
    booked: (s: string) => `Perfetto, prenotato ✓  Il tuo appuntamento: ${s}. Ti arriva subito un SMS con l'evento in calendario. A presto! ✂️`,
    review: "Grazie della visita! ⭐ Ti va di lasciare una recensione a Salone Gerola su Google? Ecco il link: g.page/r/gerola",
    callTitle: "Chiama la reception AI",
    callLead: "Componi il numero e parla normalmente — l'AI risponde, dà le informazioni e fissa il tuo appuntamento.",
    callNumberLabel: "Numero di test",
    callCta: "Chiama ora",
    callSimulate: "Mostra il risultato dopo la chiamata",
    callAfter: "Dopo aver riagganciato arrivano conferma e recensione — nello stesso momento, vedi a destra. ↘",
    calendlyCta: "Preferisci prenotare online →",
    callReset: "Reimposta",
    callDefaultSlot: "Domani 15:00",
    lockTitle: "iPhone di Gerola",
    callIncoming: "Chiamata in corso",
    callFrom: "La reception AI parla…",
    callAnsweredBy: "Risponde la reception AI",
    callHandled: "Chiamata gestita dall'AI · 0:42",
    smsApp: "Messaggi",
    smsConfirmTitle: "Appuntamento confermato",
    smsConfirm: (s: string) => `Salone Gerola: il tuo appuntamento è confermato — ${s}.`,
    addToCal: "Aggiungi al calendario",
    added: "In calendario ✓",
    smsReviewTitle: "Recensione",
    smsReview: "Salone Gerola: grazie della visita! Lasciaci una recensione ⭐",
    now: "ora",
    calTitle: "Agenda · Salone Gerola",
    weekdays: ["Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
    newAppt: "Nuovo cliente",
    booking: "in prenotazione…",
    confirmedTag: "CONFERMATO",
  },
};

const TRIGGER = /(termin|appunt|book|appointment|prenot|reserv|buchen)/i;

export default function DemoReceptionist() {
  const { lang } = useLang();
  const t = copy[lang];

  const [mode, setMode] = useState<Mode>("chat");
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [typing, setTyping] = useState(false);
  const [phase, setPhase] = useState<"intro" | "slots" | "booking" | "done">("intro");
  const [input, setInput] = useState("");
  const [chosenSlot, setChosenSlot] = useState<string | null>(null);

  // shared result flags (phone + calendar)
  const [callState, setCallState] = useState<"idle" | "ringing" | "handled">("idle");
  const [smsConfirm, setSmsConfirm] = useState(false);
  const [smsReview, setSmsReview] = useState(false);
  const [added, setAdded] = useState(false);
  const [calBooking, setCalBooking] = useState(false);
  const [calConfirmed, setCalConfirmed] = useState(false);
  const [callDone, setCallDone] = useState(false); // call-mode result shown

  const idRef = useRef(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const after = useCallback((ms: number, fn: () => void) => {
    const id = setTimeout(fn, ms);
    timers.current.push(id);
  }, []);
  const clearAll = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);
  const push = useCallback((from: Sender, text: string, tone?: Msg["tone"]) => {
    idRef.current += 1;
    setMsgs((m) => [...m, { id: idRef.current, from, text, tone }]);
  }, []);

  const resetResult = useCallback(() => {
    setCallState("idle");
    setSmsConfirm(false);
    setSmsReview(false);
    setAdded(false);
    setCalBooking(false);
    setCalConfirmed(false);
    setCallDone(false);
    setChosenSlot(null);
  }, []);

  const resetChat = useCallback(() => {
    clearAll();
    setMsgs([]);
    setTyping(false);
    setPhase("intro");
    setInput("");
    resetResult();
    idRef.current = 0;
    after(500, () => push("bot", t.greeting));
  }, [clearAll, after, push, t.greeting, resetResult]);

  // boot chat on mount + language change
  useEffect(() => {
    resetChat();
    return clearAll;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, typing]);

  /* The shared climax: calendar fills, then BOTH SMS appear together. */
  const fireResult = useCallback(
    (slot: string, opts?: { quiet?: boolean }) => {
      setChosenSlot(slot);
      setCallState(opts?.quiet ? "handled" : "ringing");
      setCalBooking(true);
      after(1100, () => {
        setCalBooking(false);
        setCalConfirmed(true);
        setSmsConfirm(true); // ← Buchungs-Bestätigung
        setSmsReview(true); //  ← Rezensions-SMS — gleichzeitig
        if (!opts?.quiet) after(1400, () => setCallState("handled"));
      });
    },
    [after]
  );

  const askForSlots = useCallback(() => {
    setPhase("slots");
    setTyping(true);
    after(800, () => {
      setTyping(false);
      push("bot", t.slotsPrompt);
    });
  }, [after, push, t.slotsPrompt]);

  const handleUser = useCallback(
    (text: string) => {
      if (phase === "booking" || phase === "done") return;
      push("user", text);
      setInput("");
      if (phase === "slots") return;
      if (TRIGGER.test(text)) askForSlots();
      else if (/(uhr|offen|aperti|orari|hours|open)/i.test(text)) {
        setTyping(true);
        after(900, () => { setTyping(false); push("bot", t.hoursReply); });
      } else if (/(kost|preis|prezzo|cost|price|euro|€)/i.test(text)) {
        setTyping(true);
        after(900, () => { setTyping(false); push("bot", t.priceReply); });
      } else {
        setTyping(true);
        after(900, () => { setTyping(false); push("bot", t.fallback); });
      }
    },
    [phase, push, askForSlots, after, t.hoursReply, t.priceReply, t.fallback]
  );

  const bookSlot = useCallback(
    (slot: string) => {
      if (phase !== "slots") return;
      push("user", slot);
      setPhase("booking");
      setTyping(true);
      after(900, () => { setTyping(false); push("bot", t.checking); });
      after(1500, () => fireResult(slot));
      after(2700, () => push("bot", t.booked(slot), "ok"));
      after(3500, () => { push("bot", t.review, "star"); setPhase("done"); });
    },
    [phase, push, after, fireResult, t]
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = input.trim();
    if (v) handleUser(v);
  };

  const runCallResult = useCallback(() => {
    clearAll();
    resetResult();
    setCallDone(true);
    after(200, () => fireResult(t.callDefaultSlot));
  }, [clearAll, resetResult, after, fireResult, t.callDefaultSlot]);

  const switchMode = (m: Mode) => {
    if (m === mode) return;
    clearAll();
    setMode(m);
    if (m === "chat") resetChat();
    else resetResult();
  };

  return (
    <div className="device overflow-hidden">
      {/* ── Salon-Kopf + Mode-Switch ─────────────── */}
      <div className="flex flex-col gap-4 border-b border-line/70 bg-paper-2/70 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="relative grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-copper-light to-copper-deep text-base font-bold text-paper">
            G
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-paper-2 bg-success" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p className="display text-lg text-ink">{SALON_NAME}</p>
              <span className="rounded-full border border-copper/50 px-2 py-0.5 text-[0.58rem] font-bold tracking-widest text-copper-light">
                {t.testBadge}
              </span>
            </div>
            <p className="mono text-[0.7rem] text-ink-3">{t.salonMeta}</p>
          </div>
        </div>

        <div className="flex rounded-full border border-line bg-paper p-1">
          {(["chat", "call"] as Mode[]).map((m) => (
            <button
              key={m}
              onClick={() => switchMode(m)}
              aria-pressed={mode === m}
              className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                mode === m ? "bg-copper text-paper" : "text-ink-2 hover:text-ink"
              }`}
            >
              {m === "chat" ? t.tabChat : t.tabCall}
            </button>
          ))}
        </div>
      </div>

      {/* ── Body: Tester (links) + Ergebnis (rechts) ─ */}
      <div className="grid gap-5 p-5 lg:grid-cols-[1.1fr_0.9fr]">
        {/* LEFT — chat OR call */}
        {mode === "chat" ? (
          <div className="flex h-[30rem] flex-col overflow-hidden rounded-2xl border border-line bg-paper/60">
            <div className="flex items-center gap-2 border-b border-line/60 px-4 py-2.5">
              <span className="h-2 w-2 rounded-full bg-success" />
              <span className="mono text-[0.7rem] text-success">{t.chatStatus}</span>
              <span className="ml-auto rounded-full border border-line px-2 py-0.5 text-[0.58rem] font-bold tracking-wider text-ink-3">AI</span>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-2.5 overflow-y-auto px-4 py-4">
              {msgs.map((m) => (
                <div key={m.id} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`bubble-in max-w-[82%] rounded-2xl px-3.5 py-2.5 text-[0.86rem] leading-relaxed ${
                      m.from === "user"
                        ? "rounded-br-md bg-copper text-paper"
                        : m.tone === "ok"
                        ? "rounded-bl-md border border-success/40 bg-success/10 text-ink"
                        : m.tone === "star"
                        ? "rounded-bl-md border border-copper/40 bg-copper/10 text-ink"
                        : "rounded-bl-md bg-paper-3 text-ink"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="flex gap-1 rounded-2xl rounded-bl-md bg-paper-3 px-4 py-3.5">
                    <span className="dot h-1.5 w-1.5 rounded-full bg-ink-2" />
                    <span className="dot h-1.5 w-1.5 rounded-full bg-ink-2" />
                    <span className="dot h-1.5 w-1.5 rounded-full bg-ink-2" />
                  </div>
                </div>
              )}
              {!typing && phase === "intro" && (
                <div className="flex flex-wrap gap-2 pt-1">
                  <Chip onClick={() => handleUser(t.quick.book)}>{t.quick.book}</Chip>
                  <Chip onClick={() => handleUser(t.quick.hours)}>{t.quick.hours}</Chip>
                  <Chip onClick={() => handleUser(t.quick.price)}>{t.quick.price}</Chip>
                </div>
              )}
              {!typing && phase === "slots" && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {t.slots.map((s) => (
                    <Chip key={s} accent onClick={() => bookSlot(s)}>{s}</Chip>
                  ))}
                </div>
              )}
              {phase === "done" && (
                <div className="pt-2 text-center">
                  <button onClick={resetChat} className="mono rounded-full border border-line px-4 py-2 text-[0.7rem] text-ink-2 transition hover:border-copper hover:text-copper">
                    ↻ {t.replay}
                  </button>
                </div>
              )}
            </div>

            <form onSubmit={onSubmit} className="flex items-center gap-2 border-t border-line/60 px-3 py-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t.inputPh}
                disabled={phase === "booking"}
                className="min-w-0 flex-1 rounded-full bg-paper-3 px-4 py-2.5 text-sm text-ink placeholder:text-ink-3 focus:outline-none focus:ring-1 focus:ring-copper"
              />
              <button type="submit" aria-label={t.send} disabled={!input.trim() || phase === "booking"}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-copper text-paper transition hover:bg-copper-light disabled:opacity-40">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M3.4 20.4 21 12 3.4 3.6 3 10l12 2-12 2z" /></svg>
              </button>
            </form>
          </div>
        ) : (
          <div className="flex h-[30rem] flex-col items-center justify-center rounded-2xl border border-line bg-paper/60 px-6 text-center">
            <div className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-copper-light to-copper-deep text-paper floaty">
              <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1.1l-2.2 2.1z" /></svg>
            </div>
            <h3 className="display mt-5 text-2xl text-ink">{t.callTitle}</h3>
            <p className="mt-3 max-w-xs text-sm text-ink-2">{t.callLead}</p>

            <div className="mt-6 w-full max-w-xs rounded-2xl border border-line bg-paper-2/60 p-4">
              <p className="mono text-[0.62rem] uppercase tracking-widest text-ink-3">{t.callNumberLabel}</p>
              <a href={`tel:${CALL_TEL}`} className="display mt-1 block text-2xl text-copper-light">{CALL_DISPLAY}</a>
            </div>

            <a href={`tel:${CALL_TEL}`} className="mt-4 w-full max-w-xs rounded-full px-6 py-3.5 text-sm font-bold btn-primary">
              {t.callCta}
            </a>
            <button onClick={callDone ? () => { clearAll(); resetResult(); } : runCallResult}
              className="mt-2 w-full max-w-xs rounded-full px-6 py-3.5 text-sm font-bold btn-ghost">
              {callDone ? `↻ ${t.callReset}` : t.callSimulate}
            </button>
            <p className="mono mt-4 max-w-xs text-[0.68rem] leading-relaxed text-ink-3">{t.callAfter}</p>
            <a href={CALENDLY_LINK} target="_blank" rel="noopener" className="mt-3 text-xs font-bold text-copper-light underline-offset-4 transition hover:underline">{t.calendlyCta}</a>
          </div>
        )}

        {/* RIGHT — shared result: phone + calendar */}
        <div className="flex flex-col gap-5">
          {/* Phone lock screen */}
          <div className="relative overflow-hidden rounded-2xl border border-line bg-paper/60 p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="mono text-[0.68rem] text-ink-3">{t.lockTitle}</span>
              <span className="mono text-[0.68rem] text-ink-3">{t.now}</span>
            </div>

            <div className={`mb-2.5 flex items-center gap-3 rounded-2xl border p-3 transition-all duration-500 ${
              callState === "idle" ? "border-line/50 opacity-40"
              : callState === "ringing" ? "border-success/50 bg-success/10"
              : "border-line bg-paper-3"}`}>
              <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${
                callState === "ringing" ? "ringing bg-success text-paper" : "bg-paper-3 text-ink-2"}`}>
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1.1l-2.2 2.1z" /></svg>
              </div>
              <div className="min-w-0">
                <p className="text-[0.8rem] font-bold text-ink">{callState === "handled" ? t.callAnsweredBy : callState === "ringing" ? t.callIncoming : t.callIncoming}</p>
                <p className="mono truncate text-[0.7rem] text-ink-3">{callState === "handled" ? t.callHandled : callState === "ringing" ? t.callFrom : CALL_DISPLAY}</p>
              </div>
              {callState === "ringing" && <span className="mono ml-auto shrink-0 rounded-full bg-success px-2 py-0.5 text-[0.6rem] font-bold text-paper">●●●</span>}
            </div>

            {smsConfirm && (
              <div className="bubble-in mb-2.5 rounded-2xl border border-line bg-paper-3 p-3">
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="mono text-[0.62rem] font-bold tracking-wider text-copper-light">{t.smsApp}</span>
                  <span className="mono text-[0.62rem] text-ink-3">{t.smsConfirmTitle}</span>
                </div>
                <p className="text-[0.78rem] leading-relaxed text-ink">{t.smsConfirm(chosenSlot ?? "")}</p>
                <button onClick={() => setAdded(true)} disabled={added}
                  className={`mono mt-2.5 flex w-full items-center justify-center gap-1.5 rounded-lg py-2 text-[0.7rem] font-bold transition ${
                    added ? "bg-success/15 text-success" : "bg-copper/15 text-copper-light hover:bg-copper/25"}`}>
                  {added ? `✓ ${t.added}` : `📅 ${t.addToCal}`}
                </button>
              </div>
            )}

            {smsReview && (
              <div className="bubble-in rounded-2xl border border-copper/40 bg-copper/10 p-3">
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="mono text-[0.62rem] font-bold tracking-wider text-copper-light">{t.smsApp}</span>
                  <span className="mono text-[0.62rem] text-ink-3">{t.smsReviewTitle}</span>
                </div>
                <p className="text-[0.78rem] leading-relaxed text-ink">{t.smsReview}</p>
                <div className="mt-1.5 text-[0.85rem] tracking-widest text-copper-light">★★★★★</div>
              </div>
            )}

            {!smsConfirm && callState === "idle" && (
              <p className="mono py-6 text-center text-[0.7rem] text-ink-3">{CALL_DISPLAY}</p>
            )}
          </div>

          {/* Calendar */}
          <div className="flex-1 rounded-2xl border border-line bg-paper/60 p-4">
            <div className="mb-3 flex items-center justify-between">
              <span className="mono text-[0.68rem] text-ink-3">{t.calTitle}</span>
              {calConfirmed && <span className="pop-in mono rounded-full bg-success/15 px-2 py-0.5 text-[0.6rem] font-bold text-success">{t.confirmedTag}</span>}
            </div>

            <div className="mb-1.5 grid grid-cols-6 gap-1">
              {t.weekdays.map((d, i) => (
                <span key={d} className={`mono text-center text-[0.62rem] ${i === 3 ? "font-bold text-copper-light" : "text-ink-3"}`}>{d}</span>
              ))}
            </div>

            <div className="grid grid-cols-6 gap-1">
              {Array.from({ length: 24 }).map((_, i) => {
                const col = i % 6, row = Math.floor(i / 6);
                const isExisting = (col === 1 && row === 1) || (col === 4 && row === 2) || (col === 0 && row === 3);
                const isNew = col === 3 && row === 2;
                if (isNew) {
                  return (
                    <div key={i} className={`grid h-9 place-items-center rounded-md text-center text-[0.55rem] font-bold transition-all duration-500 ${
                      calConfirmed ? "pop-in bg-gradient-to-br from-copper-light to-copper text-paper shadow-[0_6px_20px_-6px_rgba(216,184,120,0.8)]"
                      : calBooking ? "animate-pulse border border-dashed border-copper/70 bg-copper/15 text-copper-light"
                      : "border border-dashed border-line bg-transparent text-transparent"}`}>
                      {calConfirmed ? "✓" : calBooking ? "…" : ""}
                    </div>
                  );
                }
                return <div key={i} className={`h-9 rounded-md ${isExisting ? "bg-paper-3 ring-1 ring-line" : "bg-paper-2/40"}`} />;
              })}
            </div>

            <div className="mt-3 flex items-center gap-2 text-[0.7rem]">
              <span className={`inline-block h-2.5 w-2.5 rounded-sm transition-colors ${calConfirmed ? "bg-copper" : "bg-line"}`} />
              <span className={calConfirmed ? "text-ink" : "text-ink-3"}>
                {t.newAppt}
                {calBooking && !calConfirmed ? ` · ${t.booking}` : ""}
                {chosenSlot && calConfirmed ? ` · ${chosenSlot}` : ""}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Chip({ children, onClick, accent }: { children: React.ReactNode; onClick: () => void; accent?: boolean }) {
  return (
    <button onClick={onClick}
      className={`bubble-in rounded-full border px-3.5 py-2 text-[0.78rem] font-medium transition ${
        accent ? "border-copper/60 bg-copper/10 text-copper-light hover:bg-copper/20"
        : "border-line bg-paper-3/60 text-ink-2 hover:border-copper hover:text-ink"}`}>
      {children}
    </button>
  );
}
