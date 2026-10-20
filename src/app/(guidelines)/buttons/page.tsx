import FormButtonsShowcase from "@/features/brand-guidelines/components/FormButtonsShowcase";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Button Components | CarbonEthics Design Style Guide",
  description:
    "Interactive button component ecosystem: Primary Navy, Secondary Outline, Text link animations, and arrow states.",
};

export default function ButtonsPage() {
  return <FormButtonsShowcase />;
}
