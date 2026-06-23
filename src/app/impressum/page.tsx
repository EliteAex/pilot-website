import type { Metadata } from "next";
import { ImpressumContent } from "@/components/LegalPages";

export const metadata: Metadata = {
  title: "Impressum · Note legali — amstudio",
  robots: { index: false },
};

export default function Impressum() {
  return <ImpressumContent />;
}
