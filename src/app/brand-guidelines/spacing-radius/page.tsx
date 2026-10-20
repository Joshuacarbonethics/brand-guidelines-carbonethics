import SpacingRadiusVisualizer from "@/features/brand-guidelines/components/SpacingRadiusVisualizer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spacing & Radius Scale | CarbonEthics Design Style Guide",
  description:
    "Mathematical 8pt spatial grid scale and corner border-radius design tokens for CarbonEthics interfaces.",
};

export default function SpacingRadiusPage() {
  return <SpacingRadiusVisualizer />;
}
