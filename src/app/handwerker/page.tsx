import type { Metadata } from "next";
import OfferPage from "@/components/OfferPage";
import { offers } from "@/content/offers";

export const metadata: Metadata = {
  title: "AuftragsPilot — Kein verlorener Auftrag mehr",
  description:
    "Das Angebots-Nachfass-System für Südtiroler Handwerker: jede Anfrage erfasst, jedes Angebot automatisch nachgefasst. Live in 7 Tagen.",
};

export default function HandwerkerPage() {
  return <OfferPage offer={offers.handwerker} />;
}
