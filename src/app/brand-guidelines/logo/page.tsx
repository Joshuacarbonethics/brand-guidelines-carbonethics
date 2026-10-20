import LogoShowcase from "@/features/brand-guidelines/components/LogoShowcase";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logo & Brand Assets | CarbonEthics Design Style Guide",
  description:
    "Official brand logos, clear space requirements, and downloadable SVG/PNG assets for CarbonEthics.",
};

export default function LogoPage() {
  return <LogoShowcase />;
}
