import React from "react";
import type { Metadata } from "next";
import DesignSystemModalsShowcase from "@/features/brand-guidelines/components/DesignSystemModalsShowcase";

export const metadata: Metadata = {
  title: "Modal | CarbonEthics Design Style Guide",
  description:
    "Official CarbonEthics Design System Modal components: Navy and White dialog variants, task completion checkout modals, and action feedback dialogs.",
};

export default function ModalsPage() {
  return <DesignSystemModalsShowcase />;
}
