import React from "react";
import type { Metadata } from "next";
import BrandArchitectureShowcase from "@/features/brand-guidelines/components/BrandArchitectureShowcase";

export const metadata: Metadata = {
  title: "Brand Architecture | CarbonEthics Design Style Guide",
  description:
    "Official CarbonEthics brand architecture, organizational ecosystem, lockup rules, initiative projects, and digital product hierarchy.",
};

export default function BrandArchitecturePage() {
  return <BrandArchitectureShowcase />;
}
