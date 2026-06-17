import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pilot — KI-Systeme für Südtiroler Betriebe",
  description:
    "Pilot baut WhatsApp-KI-Systeme für Südtiroler Salons und Handwerker: jede Anfrage beantwortet, jeder Termin gebucht, jedes Angebot nachgefasst. Auf Deutsch und Italienisch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full">
      <head>
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
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
