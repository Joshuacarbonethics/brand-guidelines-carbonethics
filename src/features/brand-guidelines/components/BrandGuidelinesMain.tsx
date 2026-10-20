"use client";

import React from "react";
import BrandGuidelinesHeader from "./BrandGuidelinesHeader";
import BrandGuidelinesSidebar from "./BrandGuidelinesSidebar";
import TypographyShowcase from "./TypographyShowcase";
import ColorSwatchesShowcase from "./ColorSwatchesShowcase";
import SpacingRadiusVisualizer from "./SpacingRadiusVisualizer";
import FormButtonsShowcase from "./FormButtonsShowcase";
import LogoShowcase from "./LogoShowcase";
// [ARCHIVED / TAKEN OUT TEMPORARILY]
// import CardShowcase from "./CardShowcase";
// import TabsShowcase from "./TabsShowcase";
// import LinkHoverShowcase from "./LinkHoverShowcase";

export default function BrandGuidelinesMain() {
  return (
    <div className="w-full bg-[#FAF9F9] min-h-screen text-[#2A2728]">
      {/* Container wrapper matching other pages */}
      <div className="max-w-[1700px] mx-auto px-6 md:px-12 xl:px-18 pt-8 sm:pt-12 lg:pt-14 pb-24">
        {/* Top Header Hero */}
        <BrandGuidelinesHeader />

        {/* 2-Column Layout: Sticky Sidebar (Left) + Content (Right) */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
          {/* Sticky Left Sidebar Navigation */}
          <BrandGuidelinesSidebar />

          {/* Main Content Sections (Right) */}
          <main className="flex-1 w-full min-w-0 flex flex-col gap-20">
            {/* 1. Brand Logo & Assets */}
            <LogoShowcase />

            {/* 2. Typography Hierarchy */}
            <TypographyShowcase />

            {/* 2. Color Palette & Swatches */}
            <ColorSwatchesShowcase />

            {/* 3. Spacing & Radius Visualizer */}
            <SpacingRadiusVisualizer />

            {/* 4. Button Components */}
            <FormButtonsShowcase />

            {/* [ARCHIVED / TAKEN OUT TEMPORARILY]
            5. Hyperlink Hover Animations
            <LinkHoverShowcase />

            6. Card Component Ecosystem
            <CardShowcase />

            7. Tabs & Navigation Components
            <TabsShowcase />
            */}
          </main>
        </div>
      </div>
    </div>
  );
}
