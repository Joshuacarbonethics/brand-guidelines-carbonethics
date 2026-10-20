import BrandGuidelinesSidebar from "@/features/brand-guidelines/components/BrandGuidelinesSidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CarbonEthics Design Style Guide",
  description:
    "Interactive brand guidelines and living design system documentation for CarbonEthics: typography hierarchy, color tokens, spacing scale, interactive form controls, and card archetypes.",
  openGraph: {
    title: "CarbonEthics Design Style Guide",
    description:
      "Interactive living design system documentation encoding CarbonEthics' visual identity, token architecture, and UI component patterns.",
    url: "https://www.carbonethics.org/brand-guidelines",
  },
};

export default function BrandGuidelinesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full bg-[#FAF9F9] min-h-screen text-[#2A2728]">
      <div className="max-w-[1700px] mx-auto px-6 md:px-12 xl:px-18 pt-8 sm:pt-12 lg:pt-14 pb-24">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
          <BrandGuidelinesSidebar />
          <main className="flex-1 w-full min-w-0">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
