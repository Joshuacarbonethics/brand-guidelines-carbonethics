"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Check, ImageIcon } from "lucide-react";

export default function DesignSystemCardsShowcase() {
  return (
    <div className="w-full flex flex-col gap-12 sm:gap-16">
      {/* ================= HEADER BANNER: Gray/100 Background (#F5F5F5) ================= */}
      <div className="w-full bg-[#F5F5F5] rounded-[20px] p-8 sm:p-14 lg:p-16 flex flex-col items-start gap-4">
        <h1 className="text-[36px] sm:text-[44px] font-normal leading-[48px] tracking-[-0.005em] text-[#2A2728]">
          Cards
        </h1>
        <p className="text-[17px] sm:text-[18px] font-light leading-[28px] text-[#403B3C] max-w-4xl">
          Cards organize concise content and actions around a single topic. Use them individually to highlight key details or in grids to display collections of related content.
        </p>
      </div>

      {/* ================= 1. VARIANTS (Overview Section with Gray Background Container) ================= */}
      <div className="w-full flex flex-col gap-6">
        <h2 className="text-[28px] sm:text-[32px] font-normal leading-[1.25] tracking-[-0.005em] text-[#2A2728]">
          Variants
        </h2>

        {/* Large Rounded Gray Background Container: Frame 1000003389 (Figma: #F5F5F5, radius 20px) */}
        <div className="w-full bg-[#F5F5F5] rounded-[20px] p-6 sm:p-12 lg:p-16 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
          {/* Variant Column 1: Image */}
          <div className="flex flex-col items-center gap-6 w-full max-w-[280px]">
            <h3 className="text-[20px] font-medium leading-[32px] text-[#0A3E6D] text-center">
              Image
            </h3>

            {/* Wireframe Card Placeholder */}
            <div className="w-full bg-[#FDFDFD] rounded-[25.5px] overflow-hidden flex flex-col border border-transparent">
              {/* Image Box with icon */}
              <div className="w-full h-[180px] sm:h-[210px] bg-[#E0E0E0] rounded-[13px] flex items-center justify-center">
                <ImageIcon className="w-7 h-7 text-[#949494] stroke-[1.8]" />
              </div>

              {/* Content Panel below overlapping */}
              <div className="bg-[#FDFDFD] border border-[#E0E0E0] rounded-[13px] p-5 -mt-6 relative z-10 flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <h4 className="text-[16px] font-medium leading-[24px] text-[#2A2728]">
                    Card Title
                  </h4>
                  <span className="text-[10px] font-light leading-[16px] tracking-[0.03em] text-[#0A3E6D]">
                    Supported Text
                  </span>
                </div>
                <p className="text-[12px] font-light leading-[16px] tracking-[0.03em] text-[#403B3C]">
                  Insert card body description here. Keep it concise, clear, and easy to scan for users.
                </p>
                <div className="inline-flex items-center gap-1.5 pt-1 text-[#0A3E6D]">
                  <span className="text-[11.5px] font-bold leading-[18px]">CTA Button</span>
                  <span className="w-4 h-4 rounded-full bg-[#0A3E6D] flex items-center justify-center text-white">
                    <ArrowRight className="w-2.5 h-2.5 text-white stroke-[2.5]" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Variant Column 2: Outline */}
          <div className="flex flex-col items-center gap-6 w-full max-w-[280px]">
            <h3 className="text-[20px] font-medium leading-[32px] text-[#0A3E6D] text-center">
              Outline
            </h3>

            {/* Outline Card Instance */}
            <div className="w-full bg-[#FDFDFD] border border-[#E0E0E0] rounded-[14.5px] p-6 flex flex-col gap-4">
              {/* 01 Circle Indicator */}
              <div className="w-[26px] h-[26px] rounded-full border border-[#0A3E6D] flex items-center justify-center text-[#0A3E6D] text-[11.5px] font-light">
                01
              </div>

              {/* Title & Description */}
              <div className="flex flex-col gap-1.5">
                <h4 className="text-[16px] font-medium leading-[24px] text-[#0A3E6D]">
                  Card Title
                </h4>
                <p className="text-[12px] font-light leading-[16px] tracking-[0.03em] text-[#403B3C]">
                  Insert card body description here. Keep it concise, clear, and easy to scan for users.
                </p>
              </div>

              {/* Divider Line */}
              <div className="w-full h-[1px] bg-[#E0E0E0]" />

              {/* Checkpoints */}
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-light leading-[16px] tracking-[0.03em] text-[#0A3E6D]">
                  Supported Text
                </span>
                <div className="flex flex-col gap-1.5">
                  {["Text Point", "Text Point", "Text Point", "Text Point"].map((txt, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 rounded-full bg-[#E5FCFA] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#5EB7A9] stroke-[2.5]" />
                      </span>
                      <span className="text-[10px] font-light leading-[14px] tracking-[0.01em] text-[#2A2728]">
                        {txt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 2. IMAGE SECTION (Container, Overlay, Featured) ================= */}
      <div className="w-full flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-[28px] sm:text-[32px] font-normal leading-[1.25] tracking-[-0.005em] text-[#2A2728]">
            Image
          </h2>
          <p className="text-[15px] sm:text-[16px] font-light leading-[24px] text-[#2A2728] max-w-4xl">
            Cards that use a visual element as a core part of the layout. The image either drives the narrative, provides context, or supports the written content — depending on the variant.
          </p>
        </div>

        {/* 3 Columns Grid: Container, Overlay, Featured */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: Container */}
          <div className="w-full bg-[#F5F5F5] rounded-[20px] p-6 flex flex-col gap-5">
            <div className="w-full bg-[#FDFDFD] rounded-[25.5px] overflow-hidden flex flex-col">
              {/* Photo Area */}
              <div className="w-full h-[190px] relative bg-[#0A3E6D]">
                <Image
                  src="/images/guidelines/card-image-container.png"
                  alt="Mangrove planting activity"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Overlapping Content Frame */}
              <div className="bg-[#FDFDFD] border border-[#E0E0E0] rounded-[13px] p-5 -mt-6 relative z-10 flex flex-col gap-2.5">
                <div className="flex flex-col gap-0.5">
                  <h4 className="text-[16px] font-medium leading-[24px] text-[#2A2728]">
                    Card Title
                  </h4>
                  <span className="text-[10px] font-light leading-[16px] tracking-[0.03em] text-[#0A3E6D]">
                    Supported Text
                  </span>
                </div>
                <p className="text-[12px] font-light leading-[16px] tracking-[0.03em] text-[#403B3C]">
                  Insert card body description here. Keep it concise, clear, and easy to scan for users.
                </p>
                <div className="inline-flex items-center gap-1.5 pt-1 text-[#0A3E6D]">
                  <span className="text-[12px] font-medium leading-[16px] tracking-[0.03em]">CTA Button</span>
                  <span className="w-4 h-4 rounded-full bg-[#0A3E6D] flex items-center justify-center text-white">
                    <ArrowRight className="w-2.5 h-2.5 text-white stroke-[2.5]" />
                  </span>
                </div>
              </div>
            </div>

            {/* Explanation text below card */}
            <div className="flex flex-col gap-1">
              <h5 className="text-[16px] font-medium leading-[24px] text-[#403B3C]">
                Container
              </h5>
              <p className="text-[12px] font-light leading-[16px] tracking-[0.03em] text-[#403B3C]">
                Example of a card with a contained image area and a structured content block below.
              </p>
            </div>
          </div>

          {/* Card 2: Overlay */}
          <div className="w-full bg-[#F5F5F5] rounded-[20px] p-6 flex flex-col gap-5">
            <div className="w-full h-[366px] rounded-[0px_80px_0px_80px] overflow-hidden relative flex flex-col justify-between p-6 sm:p-7 text-white">
              {/* Background Photo */}
              <Image
                src="/images/guidelines/card-image-overlay.jpg"
                alt="Mangrove farmer"
                fill
                className="object-cover"
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <div className="relative z-10 flex flex-col gap-2">
                <h4 className="text-[24px] font-normal leading-[32px] tracking-[-0.005em] text-[#FDFDFD]">
                  Card Title
                </h4>
                <p className="text-[12px] font-light leading-[16px] tracking-[0.03em] text-[#FDFDFD]">
                  Insert card body description here. Keep it concise, clear, and easy to scan for users.
                </p>
              </div>

              <div className="relative z-10 inline-flex items-center gap-2 text-white">
                <span className="text-[16px] font-bold leading-[28px]">CTA Button</span>
                <span className="w-5 h-5 rounded-full bg-[#FDFDFD] flex items-center justify-center text-[#0A3E6D]">
                  <ArrowRight className="w-3 h-3 text-[#0A3E6D] stroke-[2.5]" />
                </span>
              </div>
            </div>

            {/* Explanation text below card */}
            <div className="flex flex-col gap-1">
              <h5 className="text-[16px] font-medium leading-[24px] text-[#403B3C]">
                Overlay
              </h5>
              <p className="text-[12px] font-light leading-[16px] tracking-[0.03em] text-[#403B3C]">
                Example of a card with text and CTA placed directly over a full-bleed image.
              </p>
            </div>
          </div>

          {/* Card 3: Featured */}
          <div className="w-full bg-[#F5F5F5] rounded-[20px] p-6 flex flex-col gap-5">
            <div className="w-full h-[366px] bg-[#FDFDFD] border border-[#E0E0E0] rounded-[10px] p-6 pb-0 flex flex-col justify-between overflow-hidden">
              <div className="flex flex-col gap-1.5">
                <h4 className="text-[16px] font-medium leading-[24px] text-[#0A3E6D]">
                  Card Title
                </h4>
                <p className="text-[12px] font-light leading-[16px] tracking-[0.03em] text-[#403B3C]">
                  Insert card body description here. Keep it concise, clear, and easy to scan for users.
                </p>
              </div>

              {/* Anchored Smartphone visual preview flush directly against bottom border */}
              <div className="w-full flex items-end justify-center mt-auto">
                <div className="w-[125px] h-[190px] relative">
                  <Image
                    src="/images/guidelines/card-image-featured-phone.png"
                    alt="Mobile screen interface"
                    fill
                    className="object-contain object-bottom block"
                  />
                </div>
              </div>
            </div>

            {/* Explanation text below card */}
            <div className="flex flex-col gap-1">
              <h5 className="text-[16px] font-medium leading-[24px] text-[#403B3C]">
                Featured
              </h5>
              <p className="text-[12px] font-light leading-[16px] tracking-[0.03em] text-[#403B3C]">
                Example of a card with written content and a supporting visual anchored below.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 3. OUTLINE SECTION (Feature List, Callout, Blur) ================= */}
      <div className="w-full flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-[28px] sm:text-[32px] font-normal leading-[1.25] tracking-[-0.005em] text-[#2A2728]">
            Outline
          </h2>
          <p className="text-[15px] sm:text-[16px] font-light leading-[24px] text-[#2A2728] max-w-4xl">
            Cards where structure and written content take priority. Use for feature highlights, data points, or information that stands on its own without photography.
          </p>
        </div>

        {/* 3 Columns Grid: Feature List, Callout, Blur */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: Feature List */}
          <div className="w-full bg-[#F5F5F5] rounded-[20px] p-6 flex flex-col gap-5">
            <div className="w-full bg-[#FDFDFD] border border-[#E0E0E0] rounded-[12px] p-6 flex flex-col gap-3.5">
              <div className="w-[26px] h-[26px] rounded-full border border-[#0A3E6D] flex items-center justify-center text-[#0A3E6D] text-[11.5px] font-light">
                01
              </div>

              <div className="flex flex-col gap-1.5">
                <h4 className="text-[16px] font-medium leading-[24px] text-[#0A3E6D]">
                  Card Title
                </h4>
                <p className="text-[12px] font-light leading-[16px] tracking-[0.03em] text-[#403B3C]">
                  Insert card body description here. Keep it concise, clear, and easy to scan for users.
                </p>
              </div>

              <div className="w-full h-[1px] bg-[#E0E0E0]" />

              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-light leading-[16px] tracking-[0.03em] text-[#0A3E6D]">
                  Supported Text
                </span>
                <div className="flex flex-col gap-1.5">
                  {["Text Point", "Text Point"].map((txt, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 rounded-full bg-[#E5FCFA] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#5EB7A9] stroke-[2.5]" />
                      </span>
                      <span className="text-[10px] font-light leading-[14px] tracking-[0.01em] text-[#2A2728]">
                        {txt}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <h5 className="text-[16px] font-medium leading-[24px] text-[#403B3C]">
                Feature List
              </h5>
              <p className="text-[12px] font-light leading-[16px] tracking-[0.03em] text-[#403B3C]">
                Example of a card with a checklist of features, and supporting body content.
              </p>
            </div>
          </div>

          {/* Card 2: Callout */}
          <div className="w-full bg-[#F5F5F5] rounded-[20px] p-6 flex flex-col justify-between gap-5">
            <div className="w-full bg-[#FDFDFD] border border-[#E0E0E0] rounded-[12px] p-7 flex flex-col justify-center gap-4">
              {/* Emblem Logo */}
              <div className="w-[38px] h-[40px] relative">
                <Image
                  src="/logo/LogoBlue.png"
                  alt="CarbonEthics Logomark"
                  fill
                  className="object-contain object-left"
                />
              </div>

              <div className="flex flex-col gap-1">
                <h4 className="text-[20px] font-medium leading-[32px] text-[#0A3E6D]">
                  Card Title
                </h4>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <h5 className="text-[16px] font-medium leading-[24px] text-[#403B3C]">
                Callout
              </h5>
              <p className="text-[12px] font-light leading-[16px] tracking-[0.03em] text-[#403B3C]">
                Example of a card with a standalone title designed to make a section stand out.
              </p>
            </div>
          </div>

          {/* Card 3: Blur */}
          <div className="w-full bg-[#F5F5F5] rounded-[20px] p-6 flex flex-col justify-between gap-5">
            <div className="w-full h-[185px] rounded-[20px] overflow-hidden relative flex items-center justify-center p-4 text-white">
              {/* Forest Background */}
              <Image
                src="/images/guidelines/card-blur-forest.webp"
                alt="Forest landscape"
                fill
                className="object-cover"
              />

              {/* Glass Frosted Card */}
              <div className="relative z-10 w-full bg-white/20 backdrop-blur-md border border-white/60 rounded-[10px] p-4 flex flex-col gap-1">
                <div className="w-[22px] h-[22px] relative mb-1">
                  <Image
                    src="/images/guidelines/icon-leaf-blur.png"
                    alt="Leaf Icon"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-[12px] font-normal leading-[16px] tracking-[-0.005em] text-[#FDFDFD]">
                  Card Subtitle
                </span>
                <h4 className="text-[28px] font-medium leading-[33px] tracking-[-0.005em] text-[#FDFDFD]">
                  Card Title
                </h4>
                <span className="text-[12px] font-normal leading-[16px] tracking-[-0.005em] text-[#FDFDFD]">
                  Supporting Text
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <h5 className="text-[16px] font-medium leading-[24px] text-[#403B3C]">
                Blur
              </h5>
              <p className="text-[12px] font-light leading-[16px] tracking-[0.03em] text-[#403B3C]">
                Example of a card on a blurred background image.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 4. USAGE SECTION (Featured Information) ================= */}
      <div className="w-full flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-[28px] sm:text-[32px] font-normal leading-[1.25] tracking-[-0.005em] text-[#2A2728]">
            Usage
          </h2>
          <p className="text-[15px] sm:text-[16px] font-light leading-[24px] text-[#2A2728] max-w-4xl">
            Cards where structure and written content take priority. Use for feature highlights, data points, or information that stands on its own without photography.
          </p>
        </div>

        {/* Split Section: Text Left vs Large Gray Container Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <h3 className="text-[18px] font-medium leading-[28px] text-[#2A2728]">
              Featured Information
            </h3>
            <p className="text-[15px] sm:text-[16px] font-light leading-[24px] text-[#2A2728] leading-relaxed">
              A card presents one topic at a time, never mix unrelated content in a single card. Give users enough context to act or learn more, and arrange text and images to signal hierarchy clearly, so the most important information is always found first.
            </p>
          </div>

          {/* Right Large Gray Container: Frame 1000003389 with 3 Cards */}
          <div className="lg:col-span-7 bg-[#F5F5F5] rounded-[13px] p-6 sm:p-8 flex items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
              {/* Event Card 1: IISF 2026 */}
              <div className="bg-[#FDFDFD] rounded-[0px_32px_0px_32px] overflow-hidden flex flex-col border border-transparent shadow-none">
                <div className="w-full h-[110px] relative">
                  <Image
                    src="/images/guidelines/card-usage-1.jpg"
                    alt="IISF 2026"
                    fill
                    className="object-cover rounded-[0px_29px_0px_0px]"
                  />
                </div>
                <div className="bg-[#FDFDFD] rounded-[0px_29px] p-3 flex flex-col gap-1 -mt-4 relative z-10">
                  <span className="text-[8px] font-light leading-[10px] text-[#2A2728]">
                    October 2026
                  </span>
                  <h6 className="text-[10px] font-normal leading-[13px] tracking-[-0.005em] text-[#2A2728] line-clamp-3">
                    Carbon Talk at Indonesia International Sustainability Forum 2026: Unlocking...
                  </h6>
                </div>
              </div>

              {/* Event Card 2: Biodiversity Summit 2026 */}
              <div className="bg-[#FDFDFD] rounded-[29px_0px_29px_0px] overflow-hidden flex flex-col border border-transparent shadow-none">
                <div className="w-full h-[110px] relative">
                  <Image
                    src="/images/guidelines/card-usage-2.jpg"
                    alt="Biodiversity Summit 2026"
                    fill
                    className="object-cover rounded-[29px_0px]"
                  />
                </div>
                <div className="bg-[#FDFDFD] rounded-[29px_0px] p-3 flex flex-col gap-1 -mt-4 relative z-10">
                  <span className="text-[8px] font-light leading-[10px] text-[#2A2728]">
                    September 2026
                  </span>
                  <h6 className="text-[10px] font-normal leading-[13px] tracking-[-0.005em] text-[#2A2728] line-clamp-3">
                    CarbonEthics at the Indonesia Carbon and Biodiversity Summit 2026: Coast,...
                  </h6>
                </div>
              </div>

              {/* Event Card 3: IdeaFest 2026 */}
              <div className="bg-[#FDFDFD] rounded-[0px_32px_0px_32px] overflow-hidden flex flex-col border border-transparent shadow-none">
                <div className="w-full h-[110px] relative">
                  <Image
                    src="/images/guidelines/card-usage-3.jpg"
                    alt="IdeaFest 2026"
                    fill
                    className="object-cover rounded-[0px_32px]"
                  />
                </div>
                <div className="bg-[#FDFDFD] rounded-[0px_29px] p-3 flex flex-col gap-1 -mt-4 relative z-10">
                  <span className="text-[8px] font-light leading-[10px] text-[#2A2728]">
                    September 2026
                  </span>
                  <h6 className="text-[10px] font-normal leading-[13px] tracking-[-0.005em] text-[#2A2728] line-clamp-3">
                    CarbonEthics at IdeaFest 2026: The Human Core of Innovation
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
