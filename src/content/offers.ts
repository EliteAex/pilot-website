import type { Lang } from "./i18n";

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

export type LocalizedOffer = Record<Lang, Offer>;

export const offers: Record<string, LocalizedOffer> = {
  salons: {
    de: {
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
    it: {
      slug: "salons",
      brand: "TerminPilot",
      niche: "Saloni",
      audience: "Parrucchiere · Beauty · Estetica",
      accent: "#bd6a43",
      accentDark: "#9c4e2b",
      circleImg: "/img/salon-4.jpg",
      heroImg: "/img/salon-1.jpg",
      bandImg: "/img/salon-2.jpg",
      bandLine: "Online in 7 giorni — poi la tua agenda lavora per te.",
      offerName:
        "Agenda piena in 30 giorni — il sistema WhatsApp per i saloni dell'Alto Adige",
      heroEyebrow: "TerminPilot · per saloni",
      heroTitle: "Mai più un\nappuntamento perso.",
      heroLead:
        "Il tuo assistente WhatsApp che non dorme mai — in tedesco e italiano.",
      heroSub:
        "Risponde a ogni richiesta in meno di 10 secondi, fissa l'appuntamento direttamente nella tua agenda e riempie automaticamente le poltrone vuote. Tu continui a tagliare, lui pensa al resto.",
      heroBadges: [
        { icon: "⚡", text: "Online in 7 giorni" },
        { icon: "🗣️", text: "Tedesco + Italiano" },
        { icon: "🙌", text: "Configurato completamente per te" },
      ],
      problemsKicker: "Ti suona familiare?",
      problemsTitle: "Ogni messaggio senza risposta è un cliente perso.",
      problems: [
        {
          icon: "📵",
          t: "Il telefono squilla, le mani sono tra i capelli",
          d: "Non puoi rispondere — e il cliente chiama il salone successivo.",
        },
        {
          icon: "💬",
          t: "WhatsApp resta senza risposta per ore",
          d: "Quando rispondi la sera, il cliente ha già prenotato altrove.",
        },
        {
          icon: "🪑",
          t: "Poltrone vuote dopo disdette e no-show",
          d: "Una disdetta la mattina e il buco resta vuoto tutto il giorno.",
        },
        {
          icon: "🌙",
          t: "Le richieste di notte e nel giorno di chiusura si perdono",
          d: "È proprio allora che la gente scrive — e proprio allora nessuno risponde.",
        },
        {
          icon: "🔁",
          t: "Botta e risposta infinito per l'appuntamento",
          d: "«Quando hai tempo?» – «E tu?» divora il tempo che non hai.",
        },
        {
          icon: "👋",
          t: "I clienti abituali non tornano più",
          d: "Nessuno li ricontatta — e lentamente passano alla concorrenza.",
        },
      ],
      stepsTitle: "Ecco quanto è semplice",
      steps: [
        {
          n: "01",
          icon: "💬",
          t: "Il cliente scrive",
          d: "Un WhatsApp al tuo salone — giorno, notte, weekend. Non importa.",
        },
        {
          n: "02",
          icon: "📅",
          t: "L'assistente risponde e prenota",
          d: "In meno di 10 secondi, in tedesco o italiano, con lo slot libero giusto direttamente nella tua agenda.",
        },
        {
          n: "03",
          icon: "🪑",
          t: "La poltrona resta piena",
          d: "Le disdette vengono ricoperte dalla lista d'attesa, poi viene chiesta automaticamente una recensione a 5 stelle.",
        },
      ],
      stack: [
        { item: "Reception WhatsApp 24/7 (DE + IT, invece di una receptionist a 1.500 €/mese)", value: "1.400 €" },
        { item: "Prenotazione automatica + un'unica agenda centrale", value: "600 €" },
        { item: "Riempi-poltrona: protezione no-show e ricopertura disdette", value: "900 €", hero: true },
        { item: "Riattivazione dei tuoi vecchi clienti abituali (settimana 1)", value: "700 €", bonus: true },
        { item: "Boost recensioni: più 5 stelle su Google", value: "500 €", bonus: true },
        { item: "Configurazione completa, fatta per te + tuning dialettale", value: "900 €" },
      ],
      stackTotal: "5.000 €",
      plans: [
        {
          name: "Mensile",
          price: "197 €",
          priceNote: "/ mese",
          sub: "+ 690 € di configurazione (per i primi 5 saloni, invece di 990 €)",
          features: [
            "Tutti i moduli inclusi",
            "Disdici ogni mese",
            "Paghi il canone mensile solo quando è fissato il primo appuntamento",
          ],
          guarantee: "Garanzia pagamento posticipato",
          cta: "Prenota la prima call",
        },
        {
          name: "1 anno in anticipo",
          badge: "Popolare · risparmi oltre 4 mesi",
          price: "2.490 €",
          priceNote: "una tantum",
          sub: "Invece di 3.354 € con pagamento mensile",
          features: [
            "Tutti i moduli inclusi",
            "Sito web del salone GRATIS (valore 1.800 €)",
            "Nessun costo di configurazione",
            "Garanzia credito invece del rischio",
          ],
          guarantee: "Garanzia credito",
          highlight: true,
          cta: "Richiedi il pacchetto annuale",
        },
      ],
      guaranteeTitle: "Non corri alcun rischio. Io sì.",
      guaranteeLead:
        "Due garanzie — a seconda di come paghi. Nessuna clausola nascosta.",
      guarantees: [
        {
          name: "Garanzia pagamento posticipato (mensile)",
          text: "Paghi il canone mensile solo quando l'assistente ha fissato il tuo primo appuntamento via WhatsApp. Se non funziona, non paghi nulla.",
        },
        {
          name: "Garanzia credito (pacchetto annuale)",
          text: "Se in 90 giorni l'assistente non fissa 10 appuntamenti, continuo a lavorare gratis e ti accredito il corrispettivo — finché il risultato non arriva.",
        },
      ],
      trust:
        "Realizzato da un altoatesino — nessun call center, nessuna grande azienda anonima. Parli direttamente con la persona che configura il tuo sistema.",
      scarcity:
        "Accetto solo 3 nuovi saloni al mese — qualità prima della quantità. I primi 5 ottengono la configurazione a 690 € invece di 990 €.",
      faq: [
        {
          q: "Non sembra un robot?",
          a: "No. L'assistente scrive in modo caldo e personale — in tedesco e italiano, persino in dialetto. Per tutto ciò a cui non sa rispondere con certezza, passa subito a te.",
        },
        {
          q: "Non sono una persona tecnologica.",
          a: "Non devi esserlo. Configuro tutto io per te. Non devi installare nulla, imparare nessuna app o inserire dati.",
        },
        {
          q: "E se prenota in modo sbagliato?",
          a: "Prenota solo negli slot liberi della tua agenda e in caso di dubbio chiede. In caso di incertezza il messaggio arriva a te prima che succeda qualcosa.",
        },
        {
          q: "Parla davvero entrambe le lingue?",
          a: "Sì — tedesco e italiano, comprese le particolarità altoatesine. Il cliente scrive come vuole, l'assistente risponde di conseguenza.",
        },
      ],
      finalTitle: "Lascia che la tua agenda lavori per te.",
      finalSub:
        "15 minuti di prima call, gratis e senza impegno. Ti mostro dal vivo come l'assistente risponde per il tuo salone.",
    },
  },

  handwerker: {
    de: {
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
    it: {
      slug: "handwerker",
      brand: "AuftragsPilot",
      niche: "Artigiani",
      audience: "Elettricista · Idraulico · Riscaldamento",
      accent: "#2b4b63",
      accentDark: "#1d3a4f",
      circleImg: "/img/hand-1.jpg",
      heroImg: "/img/hand-4.jpg",
      bandImg: "/img/hand-3.jpg",
      bandLine: "Un solo lavoro recuperato ripaga l'intero anno.",
      offerName:
        "Nessun lavoro perso in 90 giorni — il sistema di follow-up preventivi per le aziende dell'Alto Adige",
      heroEyebrow: "AuftragsPilot · per artigiani",
      heroTitle: "Mai più un\nlavoro perso.",
      heroLead:
        "Ogni richiesta risposta, ogni preventivo seguito — automaticamente.",
      heroSub:
        "Il tuo assistente d'ufficio digitale intercetta ogni richiesta, la qualifica e ricontatta ogni preventivo aperto finché non c'è un sì o un no. Tu lavori, lui porta i lavori.",
      heroBadges: [
        { icon: "⚡", text: "Online in 7 giorni" },
        { icon: "🗣️", text: "Tedesco + Italiano" },
        { icon: "🙌", text: "Configurato completamente per te" },
      ],
      problemsKicker: "Ti suona familiare?",
      problemsTitle: "La maggior parte dei lavori non si perde — svanisce.",
      problems: [
        {
          icon: "🪜",
          t: "Il telefono squilla mentre sei sulla scala",
          d: "Non puoi rispondere — e il cliente chiama l'artigiano successivo.",
        },
        {
          icon: "⏰",
          t: "Il preventivo viene inviato troppo tardi",
          d: "O dimenticato. La sera, stanco, dopo una lunga giornata in cantiere.",
        },
        {
          icon: "👻",
          t: "Dopo il preventivo non arriva più nulla",
          d: "Il cliente non si fa vivo — e nessuno ricontatta. Lavoro perso.",
        },
        {
          icon: "🗂️",
          t: "Nessuna panoramica dei preventivi aperti",
          d: "Quali sono ancora aperti? Chi ha confermato? Tutto in testa, niente nel sistema.",
        },
        {
          icon: "🌙",
          t: "La sera scartoffie invece di riposo",
          d: "Organizzare, scrivere, richiamare — invece di tempo per la famiglia.",
        },
        {
          icon: "💸",
          t: "Rincorri le fatture non pagate",
          d: "Fatture non pagate, fatturato imprevedibile, nessun sistema dietro.",
        },
      ],
      stepsTitle: "Ecco quanto è semplice",
      steps: [
        {
          n: "01",
          icon: "📲",
          t: "Arriva la richiesta",
          d: "Via WhatsApp o come chiamata persa — l'assistente intercetta ogni richiesta, 24 ore su 24.",
        },
        {
          n: "02",
          icon: "📋",
          t: "Qualificata e registrata",
          d: "Chiede cosa serve, dove, quanto è urgente e quale budget — prima ancora che tu richiami.",
        },
        {
          n: "03",
          icon: "✅",
          t: "Il preventivo diventa lavoro",
          d: "Ogni preventivo aperto viene seguito automaticamente, fino a un sì o un no. Più promemoria appuntamenti e solleciti fatture.",
        },
      ],
      stack: [
        { item: "Ricezione e qualificazione richieste 24/7 (DE + IT)", value: "1.400 €" },
        { item: "Sistema di follow-up preventivi — recupera i lavori persi", value: "1.800 €", hero: true },
        { item: "Promemoria appuntamenti + panoramica giornaliera", value: "600 €" },
        { item: "Solleciti fatture + boost recensioni", value: "700 €", bonus: true },
        { item: "Configurazione completa, fatta per te + tuning DE/IT", value: "900 €" },
      ],
      stackTotal: "5.400 €",
      plans: [
        {
          name: "Mensile",
          price: "297 €",
          priceNote: "/ mese",
          sub: "+ 1.490 € di configurazione",
          features: [
            "Tutti i moduli inclusi",
            "Disdici ogni mese",
            "Paghi il canone mensile solo quando la prima richiesta è registrata e il primo preventivo seguito",
          ],
          guarantee: "Garanzia pagamento posticipato",
          cta: "Prenota la prima call",
        },
        {
          name: "1 anno in anticipo",
          badge: "Popolare · sito gratis",
          price: "3.490 €",
          priceNote: "una tantum",
          sub: "Un solo lavoro recuperato ripaga l'intero anno",
          features: [
            "Tutti i moduli inclusi",
            "Sito web aziendale GRATIS (valore 1.800 €)",
            "Nessun costo di configurazione",
            "Garanzia credito invece del rischio",
          ],
          guarantee: "Garanzia credito",
          highlight: true,
          cta: "Richiedi il pacchetto annuale",
        },
      ],
      guaranteeTitle: "Un solo lavoro ripaga l'intero sistema.",
      guaranteeLead:
        "Due garanzie — a seconda di come paghi. Nessuna clausola nascosta.",
      guarantees: [
        {
          name: "Garanzia pagamento posticipato (mensile)",
          text: "Paghi il canone mensile solo quando la prima richiesta è stata registrata e il primo preventivo seguito. Prima non scorre alcun denaro.",
        },
        {
          name: "Garanzia credito (pacchetto annuale)",
          text: "Se in 90 giorni il sistema non registra 20 richieste qualificate e non segue ogni preventivo aperto, ti accredito il corrispettivo — finché il risultato non arriva.",
        },
      ],
      trust:
        "Da un altoatesino per le aziende dell'Alto Adige — nessuna azienda tech anonima. Parli direttamente con la persona che configura il tuo sistema.",
      scarcity:
        "Accetto solo 3 nuove aziende al mese — così ogni sistema è impostato bene e produce risultati.",
      faq: [
        {
          q: "I miei clienti vogliono parlare con me, non con un robot.",
          a: "È costruito esattamente per questo. L'assistente raccoglie la richiesta e la prepara — la conversazione e il lavoro li fai sempre tu. Si assicura solo che nessuna richiesta vada persa.",
        },
        {
          q: "Non sono una persona da computer.",
          a: "Non devi esserlo. Configuro e mantengo tutto io. Tu ricevi le richieste pronte e i promemoria — non tocchi altra tecnologia.",
        },
        {
          q: "E se il lavoro viene registrato in modo sbagliato?",
          a: "L'assistente chiede in modo strutturato e ti presenta tutto in ordine. In caso di dubbi passa a te prima che qualcosa prosegua.",
        },
        {
          q: "Ho già bruciato soldi nel marketing.",
          a: "Comprensibile. Per questo con il pacchetto mensile paghi solo quando, dimostrabilmente, la prima richiesta è stata registrata e il primo preventivo seguito — e con il pacchetto annuale ti protegge la garanzia credito.",
        },
      ],
      finalTitle: "Riprenditi i lavori che stai perdendo.",
      finalSub:
        "15 minuti di prima call, gratis e senza impegno. Ti mostro dal vivo come l'assistente raccoglie una richiesta e segue un preventivo.",
    },
  },
};
