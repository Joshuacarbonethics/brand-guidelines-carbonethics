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
    <div className="w-full bg-white min-h-screen text-[#2A2728]">
      {/* Container wrapper matching other pages */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pt-0 lg:pt-10 pb-16 sm:pb-20">
        {/* Top Header Hero */}
        <BrandGuidelinesHeader />

        {/* 2-Column Layout: Sticky Sidebar (Left) + Content (Right) */}
        <div className="flex flex-col lg:flex-row items-start gap-5 lg:gap-8 xl:gap-10">
          {/* Sticky Left Sidebar Navigation */}
          <BrandGuidelinesSidebar />

          {/* Main Content Sections (Right) */}
          <main className="flex-1 w-full min-w-0 max-w-[980px] flex flex-col gap-14 sm:gap-16">
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
