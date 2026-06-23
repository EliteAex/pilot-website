import type { Metadata } from "next";
import { DatenschutzContent } from "@/components/LegalPages";

export const metadata: Metadata = {
  title: "Datenschutz · Privacy — amstudio",
  robots: { index: false },
};

export default function Datenschutz() {
  return <DatenschutzContent />;
}
