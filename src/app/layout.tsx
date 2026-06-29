import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

export const metadata: Metadata = {
  title: "amstudio: AI Receptionist Salons Südtirol – Weniger Handyzeit",
  description:
    "amstudio baut den AI & Phone Receptionist für Salons in Südtirol: jede Anfrage beantwortet, jeder Termin gebucht. Weniger Zeit am Handy, mehr Zeit für Kunden.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full">
      <head>
        <meta name="msvalidate.01" content="A759E7C10662156C9EF667CE8747D18E" />
        <meta name="google-site-verification" content="MkU-7gS5uIgIZu1NrWuNwmUTGOBPhrGP7Eld_KXv2Yo" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..600&family=JetBrains+Mono:wght@400;500;600&family=Schibsted+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
