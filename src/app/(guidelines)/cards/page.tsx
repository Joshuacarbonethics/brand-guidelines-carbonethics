import React from "react";
import type { Metadata } from "next";
import DesignSystemCardsShowcase from "@/features/brand-guidelines/components/DesignSystemCardsShowcase";

export const metadata: Metadata = {
  title: "Cards | CarbonEthics Design Style Guide",
  description:
    "Official CarbonEthics Design System Card components: Image variants, Outline variants, alert toast cards, and real-world event card layouts.",
};

export default function CardsPage() {
  return <DesignSystemCardsShowcase />;
}
