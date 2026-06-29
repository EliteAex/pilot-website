export type Lang = "de" | "it";

/* ───────────────────────────────────────────────
   Zweisprachige Inhalte der Startseite (DE / IT).
   Beide Objekte haben dieselbe Struktur — `it` ist
   per `typeof de` typisiert, fehlende Keys schlagen
   beim Build fehl.
   ─────────────────────────────────────────────── */

const de = {
  nav: {
    leistungen: "LEISTUNGEN",
    ergebnisse: "ERGEBNISSE",
    angebot: "ANGEBOT",
    kontakt: "KONTAKT",
  },
  btn: {
    whatsapp: "WHATSAPP",
    gratisWebsite: "GRATIS WEBSITE",
  },
  hero: {
    kicker: "WEBSEITEN & KI-EMPFANG · SÜDTIROL",
    titleA: "Eure Website. Gratis.",
    titleB: "Plus ein KI-Empfang, der nie schläft.",
    lead: "amstudio baut Südtiroler Salons und Handwerkern eine professionelle Website — kostenlos. Der KI-Assistent beantwortet jede Anfrage und bucht Termine, rund um die Uhr.",
    cta1: "Gratis Website anfragen",
    cta2: "Auf WhatsApp schreiben",
    risk: "Kein Risiko — du zahlst erst, wenn der erste Termin gebucht ist.",
  },
  waMessage: "Hallo amstudio, ich interessiere mich für eine Website.",
  stats: [
    { num: "0 €", label: "WEBSITE-ERSTELLUNG", sub: "Komplett kostenlos" },
    { num: "24/7", label: "ERREICHBAR", sub: "Automatisiert für dich" },
    { num: "100 %", label: "SÜDTIROL", sub: "Lokal verwurzelt · DE / IT" },
  ],
  services: {
    kicker: "FÜR WEN WIR BAUEN",
    title: "Gemacht für Betriebe, die jeden Tag Anfragen verpassen.",
    cards: [
      {
        href: "/salons",
        title: "Salons & Beauty",
        desc: "Voller Kalender, keine verpassten Termine.",
        badges: ["Live in 7 Tagen", "DE + IT"],
      },
      {
        href: "/handwerker",
        title: "Handwerk & Technik",
        desc: "Kein Anruf, kein Auftrag geht mehr verloren.",
        badges: ["Live in 7 Tagen", "DE + IT"],
      },
    ],
  },
  example: {
    kicker: "BEISPIELPROJEKT",
    title: "So sieht das fertige Ergebnis aus.",
    body: "ELEKTRIX, ein Elektrobetrieb aus Mölten: professionelle Website plus KI-Empfang, der Anfragen rund um die Uhr beantwortet und Termine bucht — auf Deutsch und Italienisch.",
    cta: "Beispiel ansehen →",
    brand: "ELEKTRIX",
    rows: [
      { k: "Branche", v: "Elektro & Technik" },
      { k: "Ort", v: "Mölten, Südtirol" },
      { k: "Umfang", v: "Website + KI-Empfang" },
      { k: "Sprachen", v: "DE / IT" },
    ],
  },
  pricing: {
    kicker: "EHRLICH & EINFACH",
    title: "Die Website ist gratis. Danach zahlst du nur, was du nutzt.",
    popular: "BELIEBT",
    starter: {
      kicker: "DER EINSTIEG",
      price: "Gratis",
      note: "einmalig",
      desc: "Eure professionelle Website — komplett kostenlos.",
      features: [
        "Professionelle Website",
        "Mobil-optimiert & schnell",
        "Impressum & Datenschutz",
        "Google-Profil Verbindung",
        "Innerhalb weniger Tage online",
      ],
      cta: "Gratis Website anfragen",
    },
    ongoing: {
      kicker: "LAUFEND",
      price: "ab 30 €",
      note: "pro Monat",
      desc: "Hosting, Pflege und der KI-Empfangsdienst für euren Betrieb.",
      features: [
        "Hosting & Domain inklusive",
        "SSL-Sicherheit",
        "Kleine Anpassungen inklusive",
        "KI-Empfangsdienst (optional)",
        "Jederzeit kündbar",
      ],
      cta: "Paket anfragen",
    },
  },
  guarantee: {
    kicker: "GARANTIE",
    title: "Du gehst kein Risiko ein.",
    lead: "Zwei Garantien — je nachdem, wie du zahlst. Kein Kleingedrucktes.",
    items: [
      {
        name: "Delayed-Payment-Garantie",
        text: "Du zahlst die monatliche Gebühr erst, wenn der Assistent deinen ersten Termin über WhatsApp gebucht hat. Funktioniert es nicht, zahlst du nichts.",
      },
      {
        name: "Credit-Garantie",
        text: "Bucht der Assistent in den ersten 90 Tagen keine 10 Termine, schreibe ich dir den Gegenwert als Guthaben gut — bis das Ergebnis steht.",
      },
    ],
  },
  contact: {
    kicker: "KONTAKT",
    title: "Lust auf eine gratis Website? Melde dich.",
    lead: "Unverbindlich und schnell — am liebsten direkt per WhatsApp oder Anruf. Wir schauen uns deinen Betrieb an und melden uns.",
    waLabel: "WhatsApp",
    callLabel: "Anrufen",
    mailLabel: "E-Mail",
    form: {
      nameLabel: "Dein Name",
      namePh: "Vor- und Nachname",
      betriebLabel: "Art des Betriebs",
      betriebOptions: [
        "Salon / Beauty",
        "Handwerk / Technik",
        "Gastro / Hotel",
        "Anderer Betrieb",
      ],
      kontaktLabel: "Telefon oder E-Mail",
      kontaktPh: "Wie erreichen wir dich?",
      msgPh: "Noch etwas, das wir wissen sollten?",
      submit: "Anfrage senden",
    },
  },
  demo: {
    kicker: "LIVE AUSPROBIEREN",
    title: "Sieh, wie dein Empfang",
    titleEm: "von selbst bucht.",
    lead: "Kein Video, keine Folien — eine echte Mini-Version. Schreib wie ein Kunde, frag nach einem Termin und schau zu.",
  },
  video: {
    kicker: "IN 90 SEKUNDEN",
    title: "So läuft eine Buchung wirklich ab.",
    lead: "Vom ersten „Habt ihr Mittwoch frei?“ bis zum Eintrag im Kalender — komplett automatisch, Tag und Nacht.",
    badge: "▶ Demo ansehen",
    duration: "1:28",
    caption: "Echte Anfrage · WhatsApp + Anruf · Kalender + SMS",
  },
  infos: {
    kicker: "GUT ZU WISSEN",
    title: "Alles, was du dich gerade fragst.",
    items: [
      {
        q: "Wie schnell ist mein Empfang aktiv?",
        a: "Die Website steht in wenigen Tagen, der KI-Empfang ist innerhalb von 7 Tagen live — eingerichtet, getestet und auf deinen Betrieb abgestimmt.",
      },
      {
        q: "Spricht die KI Deutsch und Italienisch?",
        a: "Ja. Sie erkennt die Sprache des Kunden automatisch und antwortet auf Deutsch oder Italienisch — so wie deine Kundschaft schreibt.",
      },
      {
        q: "Was passiert bei einem Anruf?",
        a: "Geht niemand ran, nimmt die KI ab, beantwortet die Frage und bucht den Termin. Du bekommst alles als Notiz — kein verpasster Anruf mehr.",
      },
      {
        q: "Bleibt die Kontrolle bei mir?",
        a: "Komplett. Du siehst jede Buchung, kannst Zeiten sperren, Preise ändern und jederzeit selbst übernehmen. Die KI nimmt dir nur die Tipparbeit ab.",
      },
      {
        q: "Was kostet mich das wirklich?",
        a: "Die Website ist gratis. Den laufenden Empfang zahlst du erst, wenn der erste Termin gebucht ist — ab 30 €/Monat, jederzeit kündbar.",
      },
    ],
  },
  footer: {
    tagline: "KI-Systeme für Südtiroler Betriebe",
    impressum: "Impressum",
    datenschutz: "Datenschutz",
  },
  sticky: {
    call: "Anrufen",
    whatsapp: "WhatsApp",
  },
};

const it: typeof de = {
  nav: {
    leistungen: "SERVIZI",
    ergebnisse: "RISULTATI",
    angebot: "OFFERTA",
    kontakt: "CONTATTI",
  },
  btn: {
    whatsapp: "WHATSAPP",
    gratisWebsite: "SITO GRATIS",
  },
  hero: {
    kicker: "SITI WEB & RECEPTION AI · ALTO ADIGE",
    titleA: "Il vostro sito. Gratis.",
    titleB: "E una reception AI che non dorme mai.",
    lead: "amstudio crea siti web professionali per saloni e artigiani dell'Alto Adige — gratis. L'assistente AI risponde a ogni richiesta e fissa gli appuntamenti, 24 ore su 24.",
    cta1: "Richiedi il sito gratis",
    cta2: "Scrivici su WhatsApp",
    risk: "Nessun rischio — paghi solo quando è fissato il primo appuntamento.",
  },
  waMessage: "Ciao amstudio, sono interessato a un sito web.",
  stats: [
    { num: "0 €", label: "CREAZIONE SITO", sub: "Completamente gratis" },
    { num: "24/7", label: "SEMPRE ATTIVO", sub: "Automatizzato per te" },
    { num: "100 %", label: "ALTO ADIGE", sub: "Radici locali · DE / IT" },
  ],
  services: {
    kicker: "PER CHI LAVORIAMO",
    title: "Pensato per le attività che ogni giorno perdono richieste.",
    cards: [
      {
        href: "/salons",
        title: "Saloni & Beauty",
        desc: "Agenda piena, nessun appuntamento perso.",
        badges: ["Online in 7 giorni", "DE + IT"],
      },
      {
        href: "/handwerker",
        title: "Artigiani & Tecnici",
        desc: "Nessuna chiamata, nessun lavoro perso.",
        badges: ["Online in 7 giorni", "DE + IT"],
      },
    ],
  },
  example: {
    kicker: "PROGETTO DI ESEMPIO",
    title: "Ecco come appare il risultato finito.",
    body: "ELEKTRIX, un'azienda elettrica di Meltina: sito web professionale più reception AI che risponde alle richieste 24 ore su 24 e fissa gli appuntamenti — in tedesco e italiano.",
    cta: "Guarda l'esempio →",
    brand: "ELEKTRIX",
    rows: [
      { k: "Settore", v: "Elettro & Tecnica" },
      { k: "Luogo", v: "Meltina, Alto Adige" },
      { k: "Ambito", v: "Sito + reception AI" },
      { k: "Lingue", v: "DE / IT" },
    ],
  },
  pricing: {
    kicker: "ONESTO & SEMPLICE",
    title: "Il sito è gratis. Poi paghi solo ciò che usi.",
    popular: "POPOLARE",
    starter: {
      kicker: "L'INIZIO",
      price: "Gratis",
      note: "una tantum",
      desc: "Il vostro sito professionale — completamente gratis.",
      features: [
        "Sito professionale",
        "Ottimizzato per mobile & veloce",
        "Note legali & Privacy",
        "Collegamento profilo Google",
        "Online in pochi giorni",
      ],
      cta: "Richiedi il sito gratis",
    },
    ongoing: {
      kicker: "RICORRENTE",
      price: "da 30 €",
      note: "al mese",
      desc: "Hosting, manutenzione e il servizio di reception AI per la vostra attività.",
      features: [
        "Hosting & dominio inclusi",
        "Sicurezza SSL",
        "Piccole modifiche incluse",
        "Servizio reception AI (opzionale)",
        "Disdici quando vuoi",
      ],
      cta: "Richiedi il pacchetto",
    },
  },
  guarantee: {
    kicker: "GARANZIA",
    title: "Non corri alcun rischio.",
    lead: "Due garanzie — a seconda di come paghi. Nessuna clausola nascosta.",
    items: [
      {
        name: "Garanzia pagamento posticipato",
        text: "Paghi il canone mensile solo quando l'assistente ha fissato il tuo primo appuntamento via WhatsApp. Se non funziona, non paghi nulla.",
      },
      {
        name: "Garanzia credito",
        text: "Se in 90 giorni l'assistente non fissa 10 appuntamenti, ti accredito il corrispettivo — finché il risultato non arriva.",
      },
    ],
  },
  contact: {
    kicker: "CONTATTI",
    title: "Vuoi un sito gratis? Scrivici.",
    lead: "Senza impegno e veloce — meglio ancora via WhatsApp o con una chiamata. Diamo un'occhiata alla tua attività e ti ricontattiamo.",
    waLabel: "WhatsApp",
    callLabel: "Chiama",
    mailLabel: "E-mail",
    form: {
      nameLabel: "Il tuo nome",
      namePh: "Nome e cognome",
      betriebLabel: "Tipo di attività",
      betriebOptions: [
        "Salone / Beauty",
        "Artigianato / Tecnica",
        "Ristorazione / Hotel",
        "Altra attività",
      ],
      kontaktLabel: "Telefono o e-mail",
      kontaktPh: "Come possiamo contattarti?",
      msgPh: "Qualcos'altro che dovremmo sapere?",
      submit: "Invia richiesta",
    },
  },
  demo: {
    kicker: "PROVALA DAL VIVO",
    title: "Guarda la tua reception",
    titleEm: "prenotare da sola.",
    lead: "Niente video, niente slide — una vera mini-versione. Scrivi come un cliente, chiedi un appuntamento e guarda.",
  },
  video: {
    kicker: "IN 90 SECONDI",
    title: "Ecco come avviene davvero una prenotazione.",
    lead: "Dal primo «Avete posto mercoledì?» fino all'evento in agenda — tutto in automatico, giorno e notte.",
    badge: "▶ Guarda la demo",
    duration: "1:28",
    caption: "Richiesta reale · WhatsApp + chiamata · Agenda + SMS",
  },
  infos: {
    kicker: "DA SAPERE",
    title: "Tutto quello che ti stai chiedendo.",
    items: [
      {
        q: "In quanto tempo è attiva la reception?",
        a: "Il sito è pronto in pochi giorni, la reception AI è online entro 7 giorni — configurata, testata e adattata alla tua attività.",
      },
      {
        q: "L'AI parla tedesco e italiano?",
        a: "Sì. Riconosce in automatico la lingua del cliente e risponde in tedesco o italiano — proprio come scrive la tua clientela.",
      },
      {
        q: "Cosa succede con una chiamata?",
        a: "Se non risponde nessuno, l'AI risponde, dà le informazioni e fissa l'appuntamento. Ricevi tutto come nota — nessuna chiamata persa.",
      },
      {
        q: "Mantengo il controllo?",
        a: "Totale. Vedi ogni prenotazione, puoi bloccare orari, cambiare prezzi e subentrare quando vuoi. L'AI ti toglie solo il lavoro di scrivere.",
      },
      {
        q: "Quanto mi costa davvero?",
        a: "Il sito è gratis. La reception la paghi solo quando è fissato il primo appuntamento — da 30 €/mese, disdici quando vuoi.",
      },
    ],
  },
  footer: {
    tagline: "Sistemi AI per le attività dell'Alto Adige",
    impressum: "Note legali",
    datenschutz: "Privacy",
  },
  sticky: {
    call: "Chiama",
    whatsapp: "WhatsApp",
  },
};

export const i18n = { de, it };

/* ───────────────────────────────────────────────
   UI-Chrome der Angebots-Unterseiten (OfferPage).
   Die Inhaltsdaten selbst stehen in offers.ts (de/it);
   hier nur die festen Beschriftungen rundherum.
   `{brand}` wird zur Laufzeit ersetzt.
   ─────────────────────────────────────────────── */
const offerDe = {
  headerCta: "Erstgespräch",
  heroCta1: "Kostenloses Erstgespräch →",
  heroCta2: "Pakete ansehen",
  heroImgAlt: "bei der Arbeit",
  badgeAnswer: "bis zur Antwort",
  stepsLabel: "So funktioniert's",
  stackLabel: "Was du bekommst",
  stackTitle: "Alles in einem System.",
  stackCore: "Kern-System",
  stackBonus: "Bonus",
  totalLabel: "Gesamtwert",
  totalNote: "Dein Preis steht unten — ein Bruchteil davon.",
  trustAttribution: "— Alex · Südtirol",
  pricingLabel: "Pakete",
  pricingTitle: "Wähl deinen Weg.",
  guaranteeLabel: "Garantie",
  faqLabel: "Fragen",
  faqTitle: "Häufige Fragen",
  finalCta1: "✉️ Jetzt Erstgespräch sichern",
  finalCta2: "💬 Auf WhatsApp schreiben",
  backToChoice: "← Zur Auswahl",
  footerTagline: "KI-Systeme für Südtiroler Betriebe",
  waMessage: "Hallo amstudio, ich interessiere mich für {brand}.",
  mailSubject: "Anfrage {brand}",
  mailBody:
    "Hallo Alex,\n\nich interessiere mich für {brand} für meinen Betrieb.\n\nName / Betrieb:\nTelefon:\n\nLiebe Grüße",
};

const offerIt: typeof offerDe = {
  headerCta: "Prima call",
  heroCta1: "Prima call gratuita →",
  heroCta2: "Vedi i pacchetti",
  heroImgAlt: "al lavoro",
  badgeAnswer: "alla risposta",
  stepsLabel: "Come funziona",
  stackLabel: "Cosa ricevi",
  stackTitle: "Tutto in un unico sistema.",
  stackCore: "Sistema base",
  stackBonus: "Bonus",
  totalLabel: "Valore totale",
  totalNote: "Il tuo prezzo è qui sotto — una frazione di questo.",
  trustAttribution: "— Alex · Alto Adige",
  pricingLabel: "Pacchetti",
  pricingTitle: "Scegli la tua strada.",
  guaranteeLabel: "Garanzia",
  faqLabel: "Domande",
  faqTitle: "Domande frequenti",
  finalCta1: "✉️ Prenota subito la prima call",
  finalCta2: "💬 Scrivici su WhatsApp",
  backToChoice: "← Alla selezione",
  footerTagline: "Sistemi AI per le attività dell'Alto Adige",
  waMessage: "Ciao amstudio, sono interessato a {brand}.",
  mailSubject: "Richiesta {brand}",
  mailBody:
    "Ciao Alex,\n\nsono interessato a {brand} per la mia attività.\n\nNome / Attività:\nTelefono:\n\nCordiali saluti",
};

export const offerUI = { de: offerDe, it: offerIt };

export const LANG_LABELS: Record<Lang, string> = { de: "DE", it: "IT" };
