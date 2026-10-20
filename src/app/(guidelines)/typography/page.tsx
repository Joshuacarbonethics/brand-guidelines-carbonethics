import TypographyShowcase from "@/features/brand-guidelines/components/TypographyShowcase";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Typography Hierarchy | CarbonEthics Design Style Guide",
  description:
    "Public Sans and Inter typography hierarchy, line heights, and digital layout specifications for CarbonEthics.",
};

export default function TypographyPage() {
  return <TypographyShowcase />;
}
