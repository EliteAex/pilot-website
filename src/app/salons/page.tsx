import type { Metadata } from "next";
import OfferPage from "@/components/OfferPage";
import { offers } from "@/content/offers";

export const metadata: Metadata = {
  title: "TerminPilot — Voller Kalender für Südtiroler Salons",
  description:
    "Der WhatsApp-Assistent für Salons: antwortet 24/7 auf Deutsch & Italienisch, bucht Termine und füllt leere Stühle. Live in 7 Tagen.",
};

export default function SalonsPage() {
  return <OfferPage offerSet={offers.salons} />;
}
