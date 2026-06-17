export interface Offer {
  slug: string;
  brand: string;
  niche: string;
  audience: string;
  accent: string;
  accentDark: string;
  circleImg: string;
  heroImg: string;
  bandImg: string;
  bandLine: string;
  offerName: string;
  heroEyebrow: string;
  heroTitle: string;
  heroLead: string;
  heroSub: string;
  heroBadges: { icon: string; text: string }[];
  problemsKicker: string;
  problemsTitle: string;
  problems: { icon: string; t: string; d: string }[];
  stepsTitle: string;
  steps: { n: string; icon: string; t: string; d: string }[];
  stack: { item: string; value: string; hero?: boolean; bonus?: boolean }[];
  stackTotal: string;
  plans: {
    name: string;
    badge?: string;
    price: string;
    priceNote: string;
    sub: string;
    features: string[];
    guarantee: string;
    highlight?: boolean;
    cta: string;
  }[];
  guaranteeTitle: string;
  guaranteeLead: string;
  guarantees: { name: string; text: string }[];
  trust: string;
  scarcity: string;
  faq: { q: string; a: string }[];
  finalTitle: string;
  finalSub: string;
}

export const offers: Record<string, Offer> = {
  salons: {
    slug: "salons",
    brand: "TerminPilot",
    niche: "Salons",
    audience: "Friseur · Beauty · Kosmetik",
    accent: "#bd6a43",
    accentDark: "#9c4e2b",
    circleImg: "/img/salon-4.jpg",
    heroImg: "/img/salon-1.jpg",
    bandImg: "/img/salon-2.jpg",
    bandLine: "In 7 Tagen live — dann arbeitet dein Kalender für dich.",
    offerName:
      "Voller Kalender in 30 Tagen — das WhatsApp-System für Südtiroler Salons",
    heroEyebrow: "TerminPilot · für Salons",
    heroTitle: "Nie wieder ein\nverpasster Termin.",
    heroLead:
      "Dein WhatsApp-Assistent, der nie schläft — auf Deutsch und Italienisch.",
    heroSub:
      "Er antwortet jeder Anfrage in unter 10 Sekunden, bucht den Termin direkt in deinen Kalender und füllt leere Stühle automatisch nach. Du schneidest weiter, er kümmert sich um den Rest.",
    heroBadges: [
      { icon: "⚡", text: "Live in 7 Tagen" },
      { icon: "🗣️", text: "Deutsch + Italienisch" },
      { icon: "🙌", text: "Komplett für dich eingerichtet" },
    ],
    problemsKicker: "Kennst du das?",
    problemsTitle: "Jede unbeantwortete Nachricht ist ein verlorener Kunde.",
    problems: [
      {
        icon: "📵",
        t: "Das Telefon klingelt, die Hände sind im Haar",
        d: "Du kannst nicht rangehen — und der Kunde ruft beim nächsten Salon an.",
      },
      {
        icon: "💬",
        t: "WhatsApp bleibt stundenlang liegen",
        d: "Bis du abends antwortest, hat der Kunde längst woanders gebucht.",
      },
      {
        icon: "🪑",
        t: "Leere Stühle nach Stornos & No-Shows",
        d: "Eine Absage am Morgen, und die Lücke bleibt den ganzen Tag ungenutzt.",
      },
      {
        icon: "🌙",
        t: "Anfragen nachts & am Ruhetag versickern",
        d: "Genau dann fragen die Leute — und genau dann antwortet niemand.",
      },
      {
        icon: "🔁",
        t: "Ewiges Hin-und-Her beim Termin",
        d: "„Wann hast du Zeit?\" – „Und du?\" frisst Zeit, die du nicht hast.",
      },
      {
        icon: "👋",
        t: "Stammkunden kommen nicht mehr",
        d: "Niemand fragt nach — und sie gehen langsam zur Konkurrenz.",
      },
    ],
    stepsTitle: "So einfach läuft es",
    steps: [
      {
        n: "01",
        icon: "💬",
        t: "Kunde schreibt",
        d: "Eine WhatsApp an deinen Salon — Tag, Nacht, Wochenende. Völlig egal.",
      },
      {
        n: "02",
        icon: "📅",
        t: "Assistent antwortet & bucht",
        d: "In unter 10 Sekunden, auf Deutsch oder Italienisch, mit dem passenden freien Termin direkt in deinem Kalender.",
      },
      {
        n: "03",
        icon: "🪑",
        t: "Der Stuhl bleibt voll",
        d: "Stornos werden aus der Warteliste nachbesetzt, danach wird automatisch um eine 5-Sterne-Bewertung gebeten.",
      },
    ],
    stack: [
      { item: "24/7 WhatsApp-Empfang (DE + IT, statt Empfangskraft à 1.500 €/Mt.)", value: "1.400 €" },
      { item: "Automatische Buchung + ein zentraler Kalender", value: "600 €" },
      { item: "Stuhl-Füller: No-Show-Schutz & Storno-Nachbesetzung", value: "900 €", hero: true },
      { item: "Reaktivierung deiner alten Stammkunden (Woche 1)", value: "700 €", bonus: true },
      { item: "Bewertungs-Booster: mehr 5-Sterne auf Google", value: "500 €", bonus: true },
      { item: "Komplette Einrichtung, für dich erledigt + Dialekt-Tuning", value: "900 €" },
    ],
    stackTotal: "5.000 €",
    plans: [
      {
        name: "Monatlich",
        price: "197 €",
        priceNote: "/ Monat",
        sub: "+ 690 € Einrichtung (für die ersten 5 Salons, statt 990 €)",
        features: [
          "Alle Bausteine inklusive",
          "Monatlich kündbar",
          "Du zahlst die Monatsgebühr erst, wenn der erste Termin gebucht ist",
        ],
        guarantee: "Delayed-Payment-Garantie",
        cta: "Erstgespräch sichern",
      },
      {
        name: "1 Jahr im Voraus",
        badge: "Beliebt · spart über 4 Monate",
        price: "2.490 €",
        priceNote: "einmalig",
        sub: "Statt 3.354 € bei monatlicher Zahlung",
        features: [
          "Alle Bausteine inklusive",
          "Eigene Salon-Webseite GRATIS (Wert 1.800 €)",
          "Keine Einrichtungsgebühr",
          "Credit-Garantie statt Risiko",
        ],
        guarantee: "Credit-Garantie",
        highlight: true,
        cta: "Jahres-Paket anfragen",
      },
    ],
    guaranteeTitle: "Du gehst kein Risiko ein. Ich schon.",
    guaranteeLead:
      "Zwei Garantien — je nachdem, wie du zahlst. Kein Kleingedrucktes.",
    guarantees: [
      {
        name: "Delayed-Payment-Garantie (monatlich)",
        text: "Du zahlst die monatliche Gebühr erst, wenn der Assistent deinen ersten Termin über WhatsApp gebucht hat. Funktioniert es nicht, zahlst du nichts.",
      },
      {
        name: "Credit-Garantie (Jahres-Paket)",
        text: "Bucht der Assistent in den ersten 90 Tagen keine 10 Termine, arbeite ich gratis weiter und schreibe dir den Gegenwert als Guthaben gut — bis das Ergebnis steht.",
      },
    ],
    trust:
      "Gebaut von einem Südtiroler — kein Callcenter, kein anonymer Großkonzern. Du redest direkt mit der Person, die dein System einrichtet.",
    scarcity:
      "Ich nehme pro Monat nur 3 neue Salons auf — Qualität vor Masse. Die ersten 5 bekommen die Einrichtung für 690 € statt 990 €.",
    faq: [
      {
        q: "Klingt das nicht wie ein Roboter?",
        a: "Nein. Der Assistent schreibt warm und persönlich — auf Deutsch und Italienisch, sogar im Dialekt. Bei allem, was er nicht sicher beantworten kann, übergibt er sofort an dich.",
      },
      {
        q: "Ich bin kein Technik-Mensch.",
        a: "Musst du auch nicht sein. Ich richte alles für dich ein. Du musst nichts installieren, keine App lernen und keine Daten eingeben.",
      },
      {
        q: "Was, wenn er falsch bucht?",
        a: "Er bucht nur in freie Slots deines Kalenders und fragt im Zweifel nach. Bei Unsicherheit landet die Nachricht bei dir, bevor etwas passiert.",
      },
      {
        q: "Spricht er wirklich beide Sprachen?",
        a: "Ja — Deutsch und Italienisch, inklusive Südtiroler Eigenheiten. Der Kunde schreibt, wie er will, der Assistent antwortet passend.",
      },
    ],
    finalTitle: "Lass deinen Kalender für dich arbeiten.",
    finalSub:
      "15 Minuten Erstgespräch, kostenlos und unverbindlich. Ich zeige dir live, wie der Assistent für deinen Salon antwortet.",
  },

  handwerker: {
    slug: "handwerker",
    brand: "AuftragsPilot",
    niche: "Handwerker",
    audience: "Elektriker · Installateur · Heizung",
    accent: "#2b4b63",
    accentDark: "#1d3a4f",
    circleImg: "/img/hand-1.jpg",
    heroImg: "/img/hand-4.jpg",
    bandImg: "/img/hand-3.jpg",
    bandLine: "Ein zurückgeholter Auftrag zahlt das ganze Jahr.",
    offerName:
      "Kein verlorener Auftrag in 90 Tagen — das Angebots-Nachfass-System für Südtiroler Betriebe",
    heroEyebrow: "AuftragsPilot · für Handwerker",
    heroTitle: "Kein verlorener\nAuftrag mehr.",
    heroLead:
      "Jede Anfrage beantwortet, jedes Angebot nachgefasst — automatisch.",
    heroSub:
      "Dein digitaler Büro-Assistent fängt jede Anfrage ab, qualifiziert sie und hakt bei jedem offenen Angebot nach, bis es ein Ja oder Nein ist. Du arbeitest, er holt die Aufträge rein.",
    heroBadges: [
      { icon: "⚡", text: "Live in 7 Tagen" },
      { icon: "🗣️", text: "Deutsch + Italienisch" },
      { icon: "🙌", text: "Komplett für dich eingerichtet" },
    ],
    problemsKicker: "Kennst du das?",
    problemsTitle: "Die meisten Aufträge gehen nicht verloren — sie versanden.",
    problems: [
      {
        icon: "🪜",
        t: "Das Telefon klingelt auf der Leiter",
        d: "Du kannst nicht ran — und der Kunde ruft den nächsten Handwerker an.",
      },
      {
        icon: "⏰",
        t: "Das Angebot wird zu spät geschickt",
        d: "Oder vergessen. Abends, müde, nach einem langen Tag auf der Baustelle.",
      },
      {
        icon: "👻",
        t: "Nach dem Angebot kommt nichts mehr",
        d: "Der Kunde meldet sich nicht — und niemand hakt nach. Auftrag weg.",
      },
      {
        icon: "🗂️",
        t: "Kein Überblick über offene Angebote",
        d: "Welche sind noch offen? Wer hat zugesagt? Alles im Kopf, nichts im System.",
      },
      {
        icon: "🌙",
        t: "Abends Papierkram statt Feierabend",
        d: "Organisieren, schreiben, nachtelefonieren — statt Zeit für die Familie.",
      },
      {
        icon: "💸",
        t: "Du rennst offenen Rechnungen hinterher",
        d: "Unbezahlte Rechnungen, unplanbarer Umsatz, kein System dahinter.",
      },
    ],
    stepsTitle: "So einfach läuft es",
    steps: [
      {
        n: "01",
        icon: "📲",
        t: "Anfrage kommt rein",
        d: "Per WhatsApp oder als verpasster Anruf — der Assistent fängt jede Anfrage ab, rund um die Uhr.",
      },
      {
        n: "02",
        icon: "📋",
        t: "Qualifiziert & erfasst",
        d: "Er fragt ab, was gebraucht wird, wo, wie dringend und welches Budget — bevor du überhaupt zurückrufst.",
      },
      {
        n: "03",
        icon: "✅",
        t: "Angebot wird zum Auftrag",
        d: "Jedes offene Angebot wird automatisch nachgefasst, bis Ja oder Nein. Plus Termin-Erinnerung und Rechnungs-Nachfass.",
      },
    ],
    stack: [
      { item: "24/7 Anfrage-Empfang & Qualifizierung (DE + IT)", value: "1.400 €" },
      { item: "Angebots-Nachfass-System — holt verlorene Aufträge zurück", value: "1.800 €", hero: true },
      { item: "Termin-Erinnerung + Tagesübersicht", value: "600 €" },
      { item: "Rechnungs-Nachfass + Bewertungs-Booster", value: "700 €", bonus: true },
      { item: "Komplette Einrichtung, für dich erledigt + DE/IT-Tuning", value: "900 €" },
    ],
    stackTotal: "5.400 €",
    plans: [
      {
        name: "Monatlich",
        price: "297 €",
        priceNote: "/ Monat",
        sub: "+ 1.490 € Einrichtung",
        features: [
          "Alle Bausteine inklusive",
          "Monatlich kündbar",
          "Du zahlst die Monatsgebühr erst, wenn die erste Anfrage erfasst & das erste Angebot nachgefasst ist",
        ],
        guarantee: "Delayed-Payment-Garantie",
        cta: "Erstgespräch sichern",
      },
      {
        name: "1 Jahr im Voraus",
        badge: "Beliebt · Webseite gratis",
        price: "3.490 €",
        priceNote: "einmalig",
        sub: "Ein einziger zurückgeholter Auftrag zahlt das ganze Jahr",
        features: [
          "Alle Bausteine inklusive",
          "Eigene Firmen-Webseite GRATIS (Wert 1.800 €)",
          "Keine Einrichtungsgebühr",
          "Credit-Garantie statt Risiko",
        ],
        guarantee: "Credit-Garantie",
        highlight: true,
        cta: "Jahres-Paket anfragen",
      },
    ],
    guaranteeTitle: "Ein einziger Auftrag zahlt das ganze System.",
    guaranteeLead:
      "Zwei Garantien — je nachdem, wie du zahlst. Kein Kleingedrucktes.",
    guarantees: [
      {
        name: "Delayed-Payment-Garantie (monatlich)",
        text: "Du zahlst die monatliche Gebühr erst, wenn die erste Anfrage erfasst und das erste Angebot nachgefasst wurde. Vorher fließt kein Geld.",
      },
      {
        name: "Credit-Garantie (Jahres-Paket)",
        text: "Erfasst das System in den ersten 90 Tagen keine 20 qualifizierten Anfragen und fasst nicht jedes offene Angebot nach, schreibe ich dir den Gegenwert als Guthaben gut — bis das Ergebnis steht.",
      },
    ],
    trust:
      "Von einem Südtiroler für Südtiroler Betriebe — kein anonymes Tech-Unternehmen. Du redest direkt mit der Person, die dein System einrichtet.",
    scarcity:
      "Ich nehme pro Monat nur 3 neue Betriebe auf — damit jedes System sauber sitzt und liefert.",
    faq: [
      {
        q: "Meine Kunden wollen mit mir reden, nicht mit einem Roboter.",
        a: "Genau dafür ist es gebaut. Der Assistent nimmt die Anfrage auf und bereitet sie vor — das Gespräch und die Arbeit machst weiterhin du. Er sorgt nur dafür, dass keine Anfrage verloren geht.",
      },
      {
        q: "Ich bin kein Computer-Mensch.",
        a: "Musst du nicht sein. Ich richte alles ein und pflege es. Du bekommst die fertigen Anfragen und Erinnerungen — mehr Technik berührst du nicht.",
      },
      {
        q: "Was, wenn der Auftrag falsch aufgenommen wird?",
        a: "Der Assistent fragt strukturiert ab und legt dir alles sauber vor. Bei Unklarheiten übergibt er an dich, bevor etwas weiterläuft.",
      },
      {
        q: "Ich habe schon mal Geld für Marketing verbrannt.",
        a: "Verständlich. Deshalb zahlst du beim Monats-Paket erst, wenn nachweislich die erste Anfrage erfasst und das erste Angebot nachgefasst wurde — und beim Jahres-Paket sichert dich die Credit-Garantie ab.",
      },
    ],
    finalTitle: "Hol dir die Aufträge, die du gerade verlierst.",
    finalSub:
      "15 Minuten Erstgespräch, kostenlos und unverbindlich. Ich zeige dir live, wie der Assistent eine Anfrage aufnimmt und ein Angebot nachfasst.",
  },
};

export const offerList = [offers.salons, offers.handwerker];
