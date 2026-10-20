import ColorSwatchesShowcase from "@/features/brand-guidelines/components/ColorSwatchesShowcase";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Color Palette & Swatches | CarbonEthics Design Style Guide",
  description:
    "Coastal-inspired design system color palette: Primary Navy, Frost Blue, Sands, and Neutral tokens with click-to-copy hex codes.",
};

export default function ColorsPage() {
  return <ColorSwatchesShowcase />;
}
