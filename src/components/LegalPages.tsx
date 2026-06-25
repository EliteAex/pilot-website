'use client';

import Link from "next/link";
import { useLang, LangSwitch } from "@/components/LanguageProvider";

const EMAIL = "alex@amstudio.ink";

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-16 md:px-10 md:py-24">
      <div className="flex items-center justify-between">
        <Link href="/" className="kicker text-copper transition hover:text-copper-light">← amstudio</Link>
        <LangSwitch />
      </div>
      {children}
    </main>
  );
}

export function ImpressumContent() {
  const { lang } = useLang();
  const de = lang === "de";

  return (
    <Shell>
      <h1 className="display mb-12 mt-8 text-[clamp(2rem,5vw,3.5rem)] text-ink">
        {de ? "Impressum" : "Note legali"}
      </h1>

      <div className="space-y-10 text-ink-2">
        <section>
          <h2 className="mb-3 font-semibold text-ink">{de ? "Anbieter" : "Fornitore"}</h2>
          <p>
            amstudio<br />
            {de ? "Inhaber: Alex Grünberer" : "Titolare: Alex Grünberer"}<br />
            <span className="text-ink-3">{de ? "[Straße & Hausnummer]" : "[Via e numero civico]"}</span><br />
            <span className="text-ink-3">{de ? "[PLZ Ort]" : "[CAP Località]"}</span>
            {de ? ", Südtirol, Italien" : ", Alto Adige, Italia"}
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-semibold text-ink">{de ? "Kontakt" : "Contatti"}</h2>
          <p>
            {de ? "Telefon" : "Telefono"}: <span className="mono">+39 327 304 2753</span><br />
            {de ? "E-Mail" : "E-mail"}: <a href={`mailto:${EMAIL}`} className="mono text-copper hover:text-copper-light">{EMAIL}</a>
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-semibold text-ink">{de ? "Umsatzsteuer / Partita IVA" : "Partita IVA"}</h2>
          <p className="text-ink-3">{de ? "[Partita IVA / USt-IdNr., sofern vorhanden]" : "[Partita IVA, se disponibile]"}</p>
        </section>

        <section>
          <h2 className="mb-3 font-semibold text-ink">{de ? "Verantwortlich für den Inhalt" : "Responsabile dei contenuti"}</h2>
          <p>{de ? "Alex Grünberer (Anschrift wie oben)" : "Alex Grünberer (indirizzo come sopra)"}</p>
        </section>

        <section>
          <h2 className="mb-3 font-semibold text-ink">{de ? "Haftung für Inhalte und Links" : "Responsabilità per contenuti e link"}</h2>
          <p>
            {de
              ? "Die Inhalte dieser Seiten wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität wird keine Gewähr übernommen. Diese Website enthält ggf. Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben und für die wir keine Haftung übernehmen."
              : "I contenuti di queste pagine sono stati realizzati con la massima cura. Non si fornisce alcuna garanzia circa la correttezza, la completezza e l'attualità. Questo sito può contenere link a siti esterni di terzi, sui cui contenuti non abbiamo alcuna influenza e per i quali non ci assumiamo alcuna responsabilità."}
          </p>
        </section>

        <p className="rounded-lg border border-line bg-paper-2 p-4 text-sm text-ink-3">
          {de
            ? "Hinweis: Diese Seite ist eine Vorlage. Vor dem Live-Gang bitte alle Felder ausfüllen und rechtlich prüfen lassen (in Italien gelten eigene Pflichtangaben)."
            : "Nota: questa pagina è un modello. Prima della pubblicazione, compilare tutti i campi e farli verificare legalmente (in Italia valgono indicazioni obbligatorie specifiche)."}
        </p>
      </div>
    </Shell>
  );
}

export function DatenschutzContent() {
  const { lang } = useLang();
  const de = lang === "de";

  return (
    <Shell>
      <h1 className="display mb-4 mt-8 text-[clamp(2rem,5vw,3.5rem)] text-ink">
        {de ? "Datenschutzerklärung" : "Informativa sulla privacy"}
      </h1>
      <p className="mb-12 text-ink-2">
        {de
          ? "Wie wir mit deinen Daten umgehen, nach DSGVO (Verordnung (EU) 2016/679)."
          : "Come trattiamo i tuoi dati, ai sensi del GDPR (Regolamento (UE) 2016/679)."}
      </p>

      <div className="space-y-10 text-ink-2">
        <section>
          <h2 className="mb-3 font-semibold text-ink">{de ? "1. Verantwortlicher" : "1. Titolare del trattamento"}</h2>
          <p>
            Alex Grünberer (amstudio)<br />
            <span className="text-ink-3">{de ? "[Anschrift wie im Impressum]" : "[Indirizzo come nelle note legali]"}</span><br />
            {de ? "E-Mail" : "E-mail"}: <a href={`mailto:${EMAIL}`} className="mono text-copper hover:text-copper-light">{EMAIL}</a>
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-semibold text-ink">{de ? "2. Aufruf der Website (Server-Logs)" : "2. Accesso al sito (log del server)"}</h2>
          <p>
            {de
              ? "Beim Aufruf werden vom Hosting-Anbieter technisch notwendige Daten verarbeitet (IP-Adresse, Datum/Uhrzeit, abgerufene Seite, Browser-Typ). Rechtsgrundlage ist unser berechtigtes Interesse an einem sicheren, stabilen Betrieb (Art. 6 Abs. 1 lit. f DSGVO)."
              : "All'accesso, il provider di hosting tratta dati tecnicamente necessari (indirizzo IP, data/ora, pagina richiesta, tipo di browser). La base giuridica è il nostro legittimo interesse a un funzionamento sicuro e stabile (art. 6 par. 1 lett. f GDPR)."}
            <span className="text-ink-3"> {de ? "[Hosting-Anbieter eintragen, z. B. Vercel Inc.]" : "[Inserire il provider di hosting, ad es. Vercel Inc.]"}</span>
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-semibold text-ink">{de ? "3. Kontaktformular" : "3. Modulo di contatto"}</h2>
          <p>
            {de
              ? "Wenn du das Formular nutzt, verarbeiten wir die von dir angegebenen Daten (Name, Telefon/E-Mail, Nachricht) ausschließlich zur Bearbeitung deiner Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. lit. f (berechtigtes Interesse an der Anfragebearbeitung). Die Daten werden gelöscht, sobald sie nicht mehr benötigt werden."
              : "Se utilizzi il modulo, trattiamo i dati che fornisci (nome, telefono/e-mail, messaggio) esclusivamente per gestire la tua richiesta. La base giuridica è l'art. 6 par. 1 lett. b GDPR (misure precontrattuali) o lett. f (legittimo interesse alla gestione della richiesta). I dati vengono cancellati non appena non sono più necessari."}
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-semibold text-ink">{de ? "4. Kontakt per WhatsApp" : "4. Contatto tramite WhatsApp"}</h2>
          <p>
            {de
              ? "Über die WhatsApp-Buttons kannst du uns direkt schreiben. Dabei werden Daten an WhatsApp Ireland Ltd. / Meta übertragen; es gelten deren Datenschutzbestimmungen. Eine Übermittlung in Drittländer (USA) kann erfolgen. Wenn du das nicht möchtest, nutze bitte E-Mail oder Telefon."
              : "Tramite i pulsanti WhatsApp puoi scriverci direttamente. In questo caso i dati vengono trasmessi a WhatsApp Ireland Ltd. / Meta; si applicano le loro disposizioni sulla privacy. Può avvenire un trasferimento verso paesi terzi (USA). Se non lo desideri, utilizza l'e-mail o il telefono."}
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-semibold text-ink">{de ? "5. Cookies & Tracking" : "5. Cookie e tracciamento"}</h2>
          <p>
            {de
              ? "Diese Website setzt keine Tracking- oder Marketing-Cookies und bindet kein Analyse-Tool ein. Es werden nur technisch notwendige Funktionen verwendet."
              : "Questo sito non utilizza cookie di tracciamento o marketing e non integra alcuno strumento di analisi. Vengono utilizzate solo funzioni tecnicamente necessarie."}
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-semibold text-ink">{de ? "6. Deine Rechte" : "6. I tuoi diritti"}</h2>
          <p>
            {de
              ? "Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Wende dich dafür an die oben genannte E-Mail-Adresse. Außerdem hast du ein Beschwerderecht bei der Aufsichtsbehörde (in Italien: Garante per la protezione dei dati personali)."
              : "Hai il diritto di accesso, rettifica, cancellazione, limitazione del trattamento, portabilità dei dati e opposizione. Per esercitarli, rivolgiti all'indirizzo e-mail sopra indicato. Hai inoltre il diritto di proporre reclamo all'autorità di controllo (in Italia: il Garante per la protezione dei dati personali)."}
          </p>
        </section>

        <p className="rounded-lg border border-line bg-paper-2 p-4 text-sm text-ink-3">
          {de
            ? "Hinweis: Diese Datenschutzerklärung ist eine Vorlage. Vor dem Live-Gang bitte an deine tatsächlichen Tools/Dienste anpassen und rechtlich prüfen lassen."
            : "Nota: questa informativa è un modello. Prima della pubblicazione, adattala agli strumenti/servizi effettivamente utilizzati e falla verificare legalmente."}
        </p>
      </div>
    </Shell>
  );
}
