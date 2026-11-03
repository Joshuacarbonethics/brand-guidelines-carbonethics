"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check, ImageIcon } from "lucide-react";
import { ArrowButton } from "@/features/shared/components/ArrowButton";

const regularCardsData = [
  {
    image: "/images/guidelines/spec-regular-1.png",
    date: "April, 2023",
    title: "New Presidential Regulation Reinforces Indonesia’s Carbon Market Framework",
    description:
      "Comprehensive regulatory overview establishing the legal framework for carbon economic value and national registry.",
  },
  {
    image: "/images/guidelines/spec-regular-2.png",
    date: "April, 2023",
    title: "Mechanism of Carbon Trading through Carbon Exchange Established",
    description:
      "Financial Services Authority regulation outlining technical requirements and trading mechanisms for Indonesia's Carbon Exchange.",
  },
  {
    image: "/images/guidelines/spec-regular-3.png",
    date: "April, 2023",
    title: "Newly Issued Minister of Environment and Forestry Decree",
    description:
      "Detailed operational guidelines and procedural decree regarding carbon trading participation and forestry sector emission reduction.",
  },
];

const leafCardsData = [
  {
    title: "Nature-based Carbon Project",
    boldDescription: "Access nature-based carbon projects",
    description:
      "across blue and green carbon ecosystems, from coastal mangroves to peatlands.",
    checkmarks: ["Verified Global Standards", "Digital Monitoring (DMRV)"],
    cta: "Explore More",
    image: "/images/guidelines/spec-leaf-1.png",
    leafRadius:
      "rounded-tr-[36px] sm:rounded-tr-[52px] md:rounded-tr-[64px] rounded-bl-[36px] sm:rounded-bl-[52px] md:rounded-bl-[64px] rounded-tl-0 rounded-br-0",
    initialFlex: 1.6,
  },
  {
    title: "Landscape Restoration",
    boldDescription: "Restore degraded ecosystems",
    description:
      "through replanting, habitat rehabilitation, and long-term monitoring.",
    checkmarks: ["Established Restoration Site", "Community Partnership & FPIC"],
    cta: "Explore More",
    image: "/images/guidelines/spec-leaf-2.png",
    leafRadius:
      "rounded-tl-[36px] sm:rounded-tl-[52px] md:rounded-tl-[64px] rounded-br-[36px] sm:rounded-br-[52px] md:rounded-br-[64px] rounded-tr-0 rounded-bl-0",
    initialFlex: 1,
  },
  {
    title: "Tree Planting",
    boldDescription: "Community-based tree planting",
    description:
      "for companies starting or strengthening their sustainability journey.",
    checkmarks: ["On-the-Ground Management", "Regular Reporting & Guarantee"],
    cta: "Explore More",
    image: "/images/guidelines/spec-leaf-3.png",
    leafRadius:
      "rounded-tr-[36px] sm:rounded-tr-[52px] md:rounded-tr-[64px] rounded-bl-[36px] sm:rounded-bl-[52px] md:rounded-bl-[64px] rounded-tl-0 rounded-br-0",
    initialFlex: 1,
  },
];

export default function DesignSystemCardsShowcase() {
  const [isOverlayHovered, setIsOverlayHovered] = useState(false);
  const [hoveredLeafSolution, setHoveredLeafSolution] = useState<number | null>(null);
  const overlayCardRef = useRef<HTMLDivElement>(null);
  const pointerPos = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    let rafId: number | null = null;
    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        if (!overlayCardRef.current || !pointerPos.current) return;
        const rect = overlayCardRef.current.getBoundingClientRect();
        const { x, y } = pointerPos.current;
        const inside =
          x >= rect.left &&
          x <= rect.right &&
          y >= rect.top &&
          y <= rect.bottom;
        if (!inside) setIsOverlayHovered(false);
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="w-full flex flex-col gap-10 sm:gap-12">
      {/* Page Title & Intro */}
      <div className="flex flex-col gap-1.5 sm:gap-2">
        <h1 className="text-[26px] sm:text-[30px] lg:text-[34px] font-bold tracking-tight leading-tight text-[#2A2728]">
          Cards
        </h1>
        <p className="text-[14px] sm:text-[15px] leading-relaxed text-[#403B3C] max-w-3xl">
          Cards organize concise content and actions around a single topic. Use them individually to highlight key details or in grids to display collections of related content.
        </p>
      </div>

      {/* ================= 1. VARIANTS (Overview Section with Gray Background Container) ================= */}
      <div className="w-full flex flex-col gap-4 sm:gap-5">
        <h2 className="text-[24px] sm:text-[28px] font-normal leading-[1.25] tracking-[-0.005em] text-[#2A2728]">
          Variants
        </h2>

        {/* Rounded Gray Background Container */}
        <div className="w-full bg-[#F5F5F5] rounded-[18px] p-5 sm:p-8 lg:p-10 flex flex-col sm:flex-row items-center sm:items-start justify-center gap-6 sm:gap-10 lg:gap-12">
          {/* Variant Column 1: Image */}
          <div className="flex flex-col items-center gap-4 w-full max-w-[245px]">
            <h3 className="text-[18px] font-medium leading-[26px] text-[#0A3E6D] text-center">
              Image
            </h3>

            {/* Wireframe Card Placeholder */}
            <div className="w-full bg-[#FDFDFD] rounded-[13px] overflow-hidden flex flex-col">
              {/* Image Box with icon */}
              <div className="w-full h-[145px] sm:h-[160px] bg-[#E0E0E0] rounded-t-[13px] flex items-center justify-center">
                <ImageIcon className="w-6 h-6 text-[#949494] stroke-[1.8]" />
              </div>

              {/* Content Panel below overlapping */}
              <div className="bg-[#FDFDFD] border border-[#E0E0E0] rounded-[13px] p-4 -mt-5 relative z-10 flex flex-col gap-2.5">
                <div className="flex flex-col gap-0.5">
                  <h4 className="text-[15px] font-medium leading-[22px] text-[#2A2728]">
                    Card Title
                  </h4>
                  <span className="text-[10px] font-light leading-[15px] tracking-[0.03em] text-[#0A3E6D]">
                    Supported Text
                  </span>
                </div>
                <p className="text-[11.5px] font-light leading-[16px] tracking-[0.02em] text-[#403B3C]">
                  Insert card body description here. Keep it concise, clear, and easy to scan for users.
                </p>
                <div className="inline-flex items-center gap-1.5 pt-0.5 text-[#0A3E6D]">
                  <span className="text-[11.5px] font-bold leading-[18px]">CTA Button</span>
                  <span className="w-4 h-4 rounded-full bg-[#0A3E6D] flex items-center justify-center text-white">
                    <ArrowRight className="w-2.5 h-2.5 text-white stroke-[2.5]" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Variant Column 2: Outline */}
          <div className="flex flex-col items-center gap-4 w-full max-w-[245px]">
            <h3 className="text-[18px] font-medium leading-[26px] text-[#0A3E6D] text-center">
              Outline
            </h3>

            {/* Outline Card Instance */}
            <div className="w-full bg-[#FDFDFD] border border-[#E0E0E0] rounded-[14px] p-5 flex flex-col gap-3.5">
              <div className="w-[24px] h-[24px] rounded-full border border-[#0A3E6D] flex items-center justify-center text-[#0A3E6D] text-[11px] font-light">
                01
              </div>

              <div className="flex flex-col gap-1">
                <h4 className="text-[15px] font-medium leading-[22px] text-[#0A3E6D]">
                  Card Title
                </h4>
                <p className="text-[11.5px] font-light leading-[16px] tracking-[0.02em] text-[#403B3C]">
                  Insert card body description here. Keep it concise, clear, and easy to scan for users.
                </p>
              </div>

              <div className="w-full h-[1px] bg-[#E0E0E0]" />

              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-light leading-[15px] tracking-[0.03em] text-[#0A3E6D]">
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
      <div className="w-full flex flex-col gap-4 sm:gap-5">
        <div className="flex flex-col gap-1.5">
          <h2 className="text-[24px] sm:text-[28px] font-normal leading-[1.25] tracking-[-0.005em] text-[#2A2728]">
            Image
          </h2>
          <p className="text-[14px] sm:text-[15px] font-light leading-relaxed text-[#2A2728] max-w-3xl">
            Cards that use a visual element as a core part of the layout. The image either drives the narrative, provides context, or supports the written content — depending on the variant.
          </p>
        </div>

        {/* 3 Columns Flex Row (expands Overlay horizontally on hover like Homepage Solutions) */}
        <div className="flex flex-col md:flex-row gap-4 lg:gap-5 w-full items-stretch">
          {/* Card 1: Container */}
          <div
            className="w-full max-w-[420px] md:max-w-none mx-auto md:mx-0 md:w-auto md:basis-0 min-w-0 bg-[#F5F5F5] rounded-[18px] p-3.5 sm:p-4 flex flex-col gap-2.5 sm:gap-3 [will-change:flex-grow] [transform:translateZ(0)]"
            style={{
              flexGrow: isOverlayHovered ? 0.76 : 1,
              transition: "flex-grow 0.25s cubic-bezier(0.2, 0, 0, 1)",
            }}
          >
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full h-[305px] sm:h-[315px] bg-[#FDFDFD] rounded-[12px] overflow-hidden flex flex-col group cursor-pointer"
            >
              {/* Photo Area */}
              <div className="w-full h-[148px] sm:h-[155px] shrink-0 relative bg-[#0B3F69] rounded-t-[12px] overflow-hidden">
                <Image
                  src="/images/guidelines/card-image-container.png?v=2"
                  alt="Mangrove planting activity"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Overlapping Content Frame */}
              <div className="flex-1 bg-[#FDFDFD] border border-[#E0E0E0] rounded-[12px] p-3.5 sm:p-4 -mt-4 relative z-10 flex flex-col justify-between overflow-hidden">
                <div className="flex flex-col gap-0.5">
                  <div className="flex flex-col">
                    <h4 className="text-[15px] font-medium leading-[20px] text-[#2A2728] line-clamp-1">
                      Card Title
                    </h4>
                    <span className="text-[10px] font-light leading-[14px] tracking-[0.03em] text-[#0A3E6D] line-clamp-1">
                      Supported Text
                    </span>
                  </div>
                  <p className="text-[11.5px] font-light leading-[15.5px] tracking-[0.02em] text-[#403B3C] line-clamp-2 sm:line-clamp-3">
                    Insert card body description here. Keep it concise, clear, and easy to scan for users.
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 pt-1 text-[#0A3E6D] group/link w-fit">
                  <span className="text-[11.5px] font-medium leading-[15px] tracking-[0.02em] whitespace-nowrap">
                    CTA Button
                  </span>
                  <span className="w-3.5 h-3.5 rounded-full bg-[#0A3E6D] flex items-center justify-center text-white shrink-0 transition-transform duration-300 group-hover/link:translate-x-1">
                    <ArrowRight className="w-2 h-2 text-white stroke-[2.5]" />
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Explanation text below card */}
            <div className="flex flex-col gap-0.5">
              <h5 className="text-[14px] sm:text-[15px] font-medium leading-[20px] text-[#403B3C]">
                Container
              </h5>
              <p className="text-[11.5px] font-light leading-[15px] tracking-[0.02em] text-[#403B3C] line-clamp-2 min-h-[30px]">
                Example of a card with a contained image area and a structured content block below.
              </p>
            </div>
          </div>

          {/* Card 2: Overlay */}
          <div
            className="w-full max-w-[420px] md:max-w-none mx-auto md:mx-0 md:w-auto md:basis-0 min-w-0 bg-[#F5F5F5] rounded-[18px] p-3.5 sm:p-4 flex flex-col gap-2.5 sm:gap-3 [will-change:flex-grow] [transform:translateZ(0)]"
            style={{
              flexGrow: isOverlayHovered ? 2.15 : 1,
              transition: "flex-grow 0.25s cubic-bezier(0.2, 0, 0, 1)",
            }}
          >
            <div
              ref={overlayCardRef}
              onMouseEnter={() => setIsOverlayHovered(true)}
              onMouseMove={(e) => {
                pointerPos.current = { x: e.clientX, y: e.clientY };
              }}
              onMouseLeave={() => setIsOverlayHovered(false)}
              onClick={() => setIsOverlayHovered((prev) => !prev)}
              className={`w-full ${
                isOverlayHovered ? "h-[360px] md:h-[305px] lg:h-[315px]" : "h-[305px] sm:h-[315px]"
              } rounded-[0px_42px_0px_42px] xl:rounded-[0px_52px_0px_52px] overflow-hidden relative cursor-pointer bg-[#E9F6FE] [transform:translateZ(0)]`}
              style={{
                transition: "height 0.25s cubic-bezier(0.2, 0, 0, 1)",
              }}
            >
              {/* Left / Full-Bleed Image Container */}
              <div
                className={`absolute left-0 top-0 z-20 overflow-hidden bg-[#071F36] rounded-[0px_42px_0px_42px] xl:rounded-[0px_52px_0px_52px] ${
                  isOverlayHovered ? "h-[140px] md:h-full w-full md:w-[40%]" : "h-full w-full"
                }`}
                style={{
                  transition:
                    "width 0.25s cubic-bezier(0.2, 0, 0, 1), height 0.25s cubic-bezier(0.2, 0, 0, 1)",
                }}
              >
                <Image
                  src="/images/guidelines/card-image-overlay.jpg"
                  alt="Mangrove farmer"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 pointer-events-none" />

                {/* Resting Overlaid Text & CTA */}
                <div
                  className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-between text-white z-30 pointer-events-none"
                  style={{
                    opacity: isOverlayHovered ? 0 : 1,
                    transition: "opacity 0.2s ease",
                  }}
                >
                  <div className="flex flex-col gap-1">
                    <h4 className="text-[18px] sm:text-[20px] font-normal leading-[25px] tracking-[-0.005em] text-[#FDFDFD]">
                      Card Title
                    </h4>
                    <p className="text-[11.5px] font-light leading-[16px] tracking-[0.02em] text-[#FDFDFD] line-clamp-2">
                      Insert card body description here. Keep it concise, clear, and easy to scan for users.
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-white">
                    <span className="text-[13px] font-bold leading-[20px]">CTA Button</span>
                    <span className="w-4 h-4 rounded-full bg-[#FDFDFD] flex items-center justify-center text-[#0A3E6D]">
                      <ArrowRight className="w-2.5 h-2.5 text-[#0A3E6D] stroke-[2.5]" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Expanded Detail Panel (#E9F6FE, 60% width on hover) */}
              <div
                className={`flex absolute left-0 right-0 bottom-0 md:top-0 md:left-auto md:h-full w-full md:w-[60%] overflow-hidden flex-col justify-center z-10 transition-opacity duration-250 ease-out ${
                  isOverlayHovered
                    ? "top-[140px] md:top-0 opacity-100 pointer-events-auto"
                    : "top-[100%] md:top-0 opacity-0 pointer-events-none"
                }`}
              >
                <div className="flex flex-col justify-center w-full h-full bg-[#E9F6FE] p-3.5 lg:p-4">
                  <div className="flex flex-col mb-2">
                    <h4 className="text-[#2A2728] text-[15px] lg:text-[17px] font-semibold mb-0.5 leading-tight">
                      Card Title
                    </h4>
                    <p className="text-[#403B3C] text-[11px] lg:text-[11.5px] leading-[15px] line-clamp-2">
                      Insert card body description here. Keep it concise, clear, and easy to scan for users.
                    </p>
                    <p className="text-[#0A3E6D] text-[10.5px] leading-[14px] mt-1">
                      <span className="font-bold">Best for:</span> Supporting context and key use cases
                    </p>
                  </div>

                  <div className="flex flex-col gap-1 mb-2.5">
                    {["Text Point", "Text Point", "Text Point"].map((point, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-[#3F8074] text-white flex items-center justify-center shrink-0">
                          <svg className="w-1.5 h-1.5" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-[10.5px] font-medium text-[#0A3E6D] leading-[13px] truncate">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  <ArrowButton
                    variant="navy"
                    type="button"
                    onClick={(e) => e.stopPropagation()}
                    className="!py-1.5 !pl-3.5 !pr-2 !text-[11.5px] !rounded-[12px] font-bold !w-max whitespace-nowrap"
                  >
                    CTA Button
                  </ArrowButton>
                </div>
              </div>
            </div>

            {/* Explanation text below card */}
            <div className="flex flex-col gap-0.5">
              <h5 className="text-[14px] sm:text-[15px] font-medium leading-[20px] text-[#403B3C]">
                Overlay
              </h5>
              <p className="text-[11.5px] font-light leading-[15px] tracking-[0.02em] text-[#403B3C] line-clamp-2 min-h-[30px]">
                Example of a card with text and CTA placed directly over a full-bleed image.
              </p>
            </div>
          </div>

          {/* Card 3: Featured */}
          <div
            className="w-full max-w-[420px] md:max-w-none mx-auto md:mx-0 md:w-auto md:basis-0 min-w-0 bg-[#F5F5F5] rounded-[18px] p-3.5 sm:p-4 flex flex-col gap-2.5 sm:gap-3 [will-change:flex-grow] [transform:translateZ(0)]"
            style={{
              flexGrow: isOverlayHovered ? 0.76 : 1,
              transition: "flex-grow 0.25s cubic-bezier(0.2, 0, 0, 1)",
            }}
          >
            <div className="w-full h-[305px] sm:h-[315px] bg-[#FDFDFD] border border-[#E0E0E0] rounded-[10px] pt-4 px-4 pb-0 flex flex-col justify-between overflow-hidden">
              <div className="flex flex-col gap-0.5">
                <h4 className="text-[15px] font-medium leading-[20px] text-[#0A3E6D] line-clamp-1">
                  Card Title
                </h4>
                <p className="text-[11.5px] font-light leading-[15.5px] tracking-[0.02em] text-[#403B3C] line-clamp-2 sm:line-clamp-3">
                  Insert card body description here. Keep it concise, clear, and easy to scan for users.
                </p>
              </div>

              {/* Anchored Smartphone visual preview flush directly against bottom border */}
              <div className="w-full flex items-end justify-center mt-auto">
                <div className="w-[125px] max-w-full h-[170px] sm:h-[180px] relative">
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
            <div className="flex flex-col gap-0.5">
              <h5 className="text-[14px] sm:text-[15px] font-medium leading-[20px] text-[#403B3C]">
                Featured
              </h5>
              <p className="text-[11.5px] font-light leading-[15px] tracking-[0.02em] text-[#403B3C] line-clamp-2 min-h-[30px]">
                Example of a card with written content and a supporting visual anchored below.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 3. OUTLINE SECTION (Feature List, Callout, Blur) ================= */}
      <div className="w-full flex flex-col gap-4 sm:gap-5">
        <div className="flex flex-col gap-1.5">
          <h2 className="text-[24px] sm:text-[28px] font-normal leading-[1.25] tracking-[-0.005em] text-[#2A2728]">
            Outline
          </h2>
          <p className="text-[14px] sm:text-[15px] font-light leading-relaxed text-[#2A2728] max-w-3xl">
            Cards where structure and written content take priority. Use for feature highlights, data points, or information that stands on its own without photography.
          </p>
        </div>

        {/* 3 Columns Grid: Feature List, Callout, Blur */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {/* Card 1: Feature List */}
          <div className="w-full max-w-[420px] md:max-w-none mx-auto bg-[#F5F5F5] rounded-[18px] p-4 sm:p-5 flex flex-col justify-between gap-4">
            <div className="w-full bg-[#FDFDFD] border border-[#E0E0E0] rounded-[12px] p-4 sm:p-5 flex flex-col gap-3">
              <div className="w-[24px] h-[24px] rounded-full border border-[#0A3E6D] flex items-center justify-center text-[#0A3E6D] text-[11px] font-light">
                01
              </div>

              <div className="flex flex-col gap-1">
                <h4 className="text-[15px] font-medium leading-[22px] text-[#0A3E6D]">
                  Card Title
                </h4>
                <p className="text-[11.5px] font-light leading-[16px] tracking-[0.02em] text-[#403B3C]">
                  Insert card body description here. Keep it concise, clear, and easy to scan for users.
                </p>
              </div>

              <div className="w-full h-[1px] bg-[#E0E0E0]" />

              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-light leading-[15px] tracking-[0.03em] text-[#0A3E6D]">
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

            <div className="flex flex-col gap-0.5">
              <h5 className="text-[15px] font-medium leading-[22px] text-[#403B3C]">
                Feature List
              </h5>
              <p className="text-[12px] font-light leading-[16px] tracking-[0.02em] text-[#403B3C]">
                Example of a card with a checklist of features, and supporting body content.
              </p>
            </div>
          </div>

          {/* Card 2: Callout */}
          <div className="w-full max-w-[420px] md:max-w-none mx-auto bg-[#F5F5F5] rounded-[18px] p-4 sm:p-5 flex flex-col justify-between gap-4">
            <div className="w-full bg-[#FDFDFD] border border-[#E0E0E0] rounded-[12px] p-5 sm:p-6 flex flex-col justify-center gap-3">
              <div className="w-[34px] h-[36px] relative">
                <Image
                  src="/logo/LogoBlue.png"
                  alt="CarbonEthics Logomark"
                  fill
                  className="object-contain object-left"
                />
              </div>

              <div className="flex flex-col gap-1">
                <h4 className="text-[18px] sm:text-[19px] font-medium leading-[26px] text-[#0A3E6D]">
                  Card Title
                </h4>
              </div>
            </div>

            <div className="flex flex-col gap-0.5">
              <h5 className="text-[15px] font-medium leading-[22px] text-[#403B3C]">
                Callout
              </h5>
              <p className="text-[12px] font-light leading-[16px] tracking-[0.02em] text-[#403B3C]">
                Example of a card with a standalone title designed to make a section stand out.
              </p>
            </div>
          </div>

          {/* Card 3: Blur */}
          <div className="w-full max-w-[420px] md:max-w-none mx-auto bg-[#F5F5F5] rounded-[18px] p-4 sm:p-5 flex flex-col justify-between gap-4">
            <div className="w-full h-[165px] rounded-[16px] overflow-hidden relative flex items-center justify-center p-3.5 text-white">
              <Image
                src="/images/guidelines/card-blur-forest.webp"
                alt="Forest landscape"
                fill
                className="object-cover"
              />

              {/* Glass Frosted Card */}
              <div className="relative z-10 w-full bg-white/20 backdrop-blur-md border border-white/60 rounded-[10px] p-3.5 flex flex-col gap-0.5">
                <div className="w-[20px] h-[20px] relative mb-0.5">
                  <Image
                    src="/images/guidelines/icon-leaf-blur.png"
                    alt="Leaf Icon"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-[11px] font-normal leading-[15px] tracking-[-0.005em] text-[#FDFDFD]">
                  Card Subtitle
                </span>
                <h4 className="text-[20px] sm:text-[22px] font-medium leading-[26px] tracking-[-0.005em] text-[#FDFDFD]">
                  Card Title
                </h4>
                <span className="text-[11px] font-normal leading-[15px] tracking-[-0.005em] text-[#FDFDFD]">
                  Supporting Text
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-0.5">
              <h5 className="text-[15px] font-medium leading-[22px] text-[#403B3C]">
                Blur
              </h5>
              <p className="text-[12px] font-light leading-[16px] tracking-[0.02em] text-[#403B3C]">
                Example of a card on a blurred background image.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 4. USAGE SECTION ================= */}
      <div className="w-full flex flex-col gap-8 sm:gap-10">
        <div className="flex flex-col gap-1.5">
          <h2 className="text-[24px] sm:text-[28px] font-normal leading-[1.25] tracking-[-0.005em] text-[#2A2728]">
            Usage
          </h2>
          <p className="text-[14px] sm:text-[15px] font-light leading-relaxed text-[#2A2728] max-w-3xl">
            Cards where structure and written content take priority. Use for feature highlights, data points, or information that stands on its own without photography.
          </p>
        </div>

        {/* 4.1 Featured Information */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 xl:gap-8 items-start">
          {/* Left Text (Aligned Top) */}
          <div className="xl:col-span-4 flex flex-col gap-2">
            <h3 className="text-[18px] sm:text-[19px] font-medium leading-[26px] text-[#2A2728]">
              Featured Information
            </h3>
            <p className="text-[14px] sm:text-[15px] font-light leading-relaxed text-[#2A2728]">
              A card presents one topic at a time, never mix unrelated content in a single card. Give users enough context to act or learn more, and arrange text and images to signal hierarchy clearly, so the most important information is always found first.
            </p>
          </div>

          {/* Right Gray Container: 2 Cards */}
          <div className="xl:col-span-8 w-full max-w-[660px] xl:max-w-none bg-[#F5F5F5] rounded-[18px] p-4 sm:p-6 flex items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full">
              {/* Card 1: Digital Monitoring Dashboard */}
              <div className="bg-[#FDFDFD] border border-[#E0E0E0] rounded-[18px] overflow-hidden flex flex-col h-full shadow-none">
                <div className="w-full h-[130px] sm:h-[140px] bg-[#E9F6FE] flex items-end justify-center pt-3 px-3 pb-0 relative overflow-hidden">
                  <div className="relative w-full max-w-[250px] aspect-[1998/903] rounded-t-[8px] rounded-b-none overflow-hidden border border-b-0 border-black/5 shadow-xs bg-white">
                    <Image
                      src="/images/guidelines/usage-dashboard.webp"
                      alt="Digital Monitoring Dashboard"
                      fill
                      className="object-contain object-bottom"
                    />
                  </div>
                </div>
                <div className="p-4 sm:p-5 flex flex-col gap-1.5 bg-[#FDFDFD] flex-1">
                  <h4 className="text-[15px] font-medium leading-[22px] text-[#2A2728]">
                    Digital Monitoring Dashboard
                  </h4>
                  <p className="text-[11.5px] sm:text-[12px] font-light leading-[17px] text-[#403B3C]">
                    Gain full transparency with real-time access to your trees&apos; progress, including growth updates, precise geotags, and verified CO&#8322;e absorption data through your personalized member portal.
                  </p>
                </div>
              </div>

              {/* Card 2: CarbonEthics Planting Certificate */}
              <div className="bg-[#FDFDFD] border border-[#E0E0E0] rounded-[18px] overflow-hidden flex flex-col h-full shadow-none">
                <div className="w-full h-[130px] sm:h-[140px] bg-[#E9F6FE] flex items-end justify-center pt-3 px-3 pb-0 relative overflow-hidden">
                  <div className="relative w-[66%] sm:w-[64%] max-w-[175px] aspect-[1122/796] rounded-t-[8px] rounded-b-none overflow-hidden border border-b-0 border-black/5 shadow-xs bg-white">
                    <Image
                      src="/images/guidelines/usage-certificate.webp"
                      alt="CarbonEthics Planting Certificate"
                      fill
                      className="object-contain object-bottom"
                    />
                  </div>
                </div>
                <div className="p-4 sm:p-5 flex flex-col gap-1.5 bg-[#FDFDFD] flex-1">
                  <h4 className="text-[15px] font-medium leading-[22px] text-[#2A2728]">
                    CarbonEthics Planting Certificate
                  </h4>
                  <p className="text-[11.5px] sm:text-[12px] font-light leading-[17px] text-[#403B3C]">
                    Receive your certificate instantly and automatically generated with the name taken from your shipping details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4.2 Navigation */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 xl:gap-8 items-start">
          {/* Left Text (Aligned Top) */}
          <div className="xl:col-span-4 flex flex-col gap-2">
            <h3 className="text-[18px] sm:text-[19px] font-medium leading-[26px] text-[#2A2728]">
              Navigation
            </h3>
            <p className="text-[14px] sm:text-[15px] font-light leading-relaxed text-[#2A2728]">
              Use navigation cards when you need to direct users to specific pages or workflows. Their visual weight and clear actions make primary destinations easy to scan and access.
            </p>
          </div>

          {/* Right Gray Container: 2 Cards */}
          <div className="xl:col-span-8 w-full max-w-[660px] xl:max-w-none bg-[#F5F5F5] rounded-[18px] p-4 sm:p-6 flex items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full">
              {/* Navigation Card 1: Mangrove Trees Planting */}
              <div className="bg-[#FDFDFD] rounded-[18px] overflow-hidden flex flex-col h-full shadow-none group cursor-pointer">
                <div className="w-full h-[145px] sm:h-[155px] bg-[#0A3E6D] rounded-t-[18px] relative overflow-hidden flex items-center justify-center">
                  <Image
                    src="/images/guidelines/usage-nav-mangrove.webp"
                    alt="Mangrove Trees Planting"
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="bg-[#FDFDFD] border border-[#E0E0E0] rounded-[18px] p-4 sm:p-5 flex flex-col gap-1 relative -mt-4 z-10 flex-1">
                  <h4 className="text-[15px] font-medium leading-[22px] text-[#2A2728]">
                    Mangrove Trees Planting
                  </h4>
                  <span className="text-[11px] font-normal text-[#0A3E6D]">
                    Absorb up to 16,500 kg CO&#8322;e
                  </span>
                  <p className="text-[11.5px] font-light leading-[16.5px] text-[#403B3C] mt-0.5">
                    Fund mangrove planting at a scale that matches your needs, with measurable carbon impact.
                  </p>
                  <div className="flex items-center gap-1.5 mt-auto pt-3 text-[11.5px] font-bold text-[#0A3E6D] group/cta">
                    <span>View details</span>
                    <div className="w-4 h-4 rounded-full bg-[#0A3E6D] flex items-center justify-center transition-transform group-hover:translate-x-1">
                      <svg
                        width="9"
                        height="9"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Card 2: Blue Carbon Package */}
              <div className="bg-[#FDFDFD] rounded-[18px] overflow-hidden flex flex-col h-full shadow-none group cursor-pointer">
                <div className="w-full h-[145px] sm:h-[155px] bg-[#0A3E6D] rounded-t-[18px] relative overflow-hidden flex items-center justify-center">
                  <Image
                    src="/images/guidelines/usage-nav-bcp.webp"
                    alt="Blue Carbon Package"
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="bg-[#FDFDFD] border border-[#E0E0E0] rounded-[18px] p-4 sm:p-5 flex flex-col gap-1 relative -mt-4 z-10 flex-1">
                  <h4 className="text-[15px] font-medium leading-[22px] text-[#2A2728]">
                    Blue Carbon Package
                  </h4>
                  <span className="text-[11px] font-normal text-[#0A3E6D]">
                    Absorb up to 110 kg CO&#8322;e
                  </span>
                  <p className="text-[11.5px] font-light leading-[16.5px] text-[#403B3C] mt-0.5">
                    Adopt a mangrove tree, planted and cared for by our farmer partners, with a shareable certificate to mark your contribution.
                  </p>
                  <div className="flex items-center gap-1.5 mt-auto pt-3 text-[11.5px] font-bold text-[#0A3E6D] group/cta">
                    <span>View details</span>
                    <div className="w-4 h-4 rounded-full bg-[#0A3E6D] flex items-center justify-center transition-transform group-hover:translate-x-1">
                      <svg
                        width="9"
                        height="9"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 5. CONTENT FLEXIBILITY SECTION ================= */}
      <div className="w-full flex flex-col gap-4 sm:gap-5">
        <div className="flex flex-col gap-1.5">
          <h2 className="text-[24px] sm:text-[28px] font-normal leading-[1.25] tracking-[-0.005em] text-[#2A2728]">
            Content Flexibility
          </h2>
          <div className="flex flex-col gap-2 text-[14px] sm:text-[15px] font-light leading-relaxed text-[#2A2728] max-w-3xl">
            <p>
              Cards are flexible and support additional combinations using optional media, body, and footer to accommodate different use cases. Every card includes a required title, while all other elements are optional. Body content is placed in the body (block) slot when extended or structured content is needed.
            </p>
            <p>
              The examples below represent the most common recommended configurations. Always evaluate context and choose the structure that best fits your experience.
            </p>
          </div>
        </div>

        {/* 3 Columns Grid: Button, Media & Body, Body Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 items-stretch">
          {/* Column 1: Card with Button */}
          <div className="w-full max-w-[420px] md:max-w-none mx-auto bg-[#F5F5F5] rounded-[18px] p-4 sm:p-5 flex flex-col md:justify-end gap-3.5 md:min-h-[360px]">
            <div className="w-full bg-[#FDFDFD] border border-[#E0E0E0] rounded-[13px] p-4 sm:p-5 flex flex-col gap-2.5 shadow-none">
              <div className="flex flex-col gap-1">
                <h4 className="text-[15px] font-medium leading-[22px] text-[#2A2728]">
                  Card Title
                </h4>
                <p className="text-[11.5px] font-light leading-[16px] tracking-[0.02em] text-[#403B3C]">
                  Insert card body description here. Keep it concise, clear, and easy to scan for users.
                </p>
              </div>

              <div className="inline-flex items-center gap-1.5 pt-0.5 text-[#0A3E6D]">
                <span className="text-[11.5px] font-medium leading-[16px]">CTA Button</span>
                <span className="w-3.5 h-3.5 rounded-full bg-[#0A3E6D] flex items-center justify-center text-white">
                  <ArrowRight className="w-2 h-2 text-white stroke-[2.5]" />
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-0.5">
              <h5 className="text-[15px] font-medium leading-[22px] text-[#403B3C]">
                Example of a card with button
              </h5>
              <p className="text-[12.5px] sm:text-[13px] font-light leading-[18px] text-[#2A2728]">
                Use when a card needs a clear action placed (e.g. button) in the footer.
              </p>
            </div>
          </div>

          {/* Column 2: Card with Media and Body Content (taller center card flush to top) */}
          <div className="w-full max-w-[420px] md:max-w-none mx-auto bg-[#F5F5F5] rounded-[18px] p-4 sm:p-5 flex flex-col justify-between gap-3.5 md:min-h-[360px]">
            <div className="w-full bg-[#FDFDFD] rounded-[13px] overflow-hidden flex flex-col">
              {/* Media Image */}
              <div className="w-full h-[170px] sm:h-[180px] relative rounded-t-[13px] overflow-hidden bg-[#0A3E6D]">
                <Image
                  src="/images/guidelines/card-flexibility-mangrove.webp"
                  alt="Card Media Preview"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Overlapping Content Box */}
              <div className="bg-[#FDFDFD] border border-[#E0E0E0] rounded-[13px] p-4 sm:p-5 -mt-5 relative z-10 flex flex-col gap-1 shadow-none">
                <h4 className="text-[15px] font-medium leading-[22px] text-[#2A2728]">
                  Card Title
                </h4>
                <p className="text-[11.5px] font-light leading-[16px] tracking-[0.02em] text-[#403B3C]">
                  Insert card body description here. Keep it concise, clear, and easy to scan for users.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-0.5 mt-auto">
              <h5 className="text-[15px] font-medium leading-[22px] text-[#403B3C]">
                Example of a card with media and body content
              </h5>
              <p className="text-[12.5px] sm:text-[13px] font-light leading-[18px] text-[#2A2728]">
                Use for richer content where imagery and supporting text help convey context.
              </p>
            </div>
          </div>

          {/* Column 3: Card with Body Content */}
          <div className="w-full max-w-[420px] md:max-w-none mx-auto bg-[#F5F5F5] rounded-[18px] p-4 sm:p-5 flex flex-col md:justify-end gap-3.5 md:min-h-[360px]">
            <div className="w-full bg-[#FDFDFD] border border-[#E0E0E0] rounded-[13px] p-4 sm:p-5 flex flex-col gap-1 shadow-none">
              <h4 className="text-[15px] font-medium leading-[22px] text-[#2A2728]">
                Card Title
              </h4>
              <p className="text-[11.5px] font-light leading-[16px] tracking-[0.02em] text-[#403B3C]">
                Insert card body description here. Keep it concise, clear, and easy to scan for users.
              </p>
            </div>

            <div className="flex flex-col gap-0.5">
              <h5 className="text-[15px] font-medium leading-[22px] text-[#403B3C]">
                Example of a card with body content
              </h5>
              <p className="text-[12.5px] sm:text-[13px] font-light leading-[18px] text-[#2A2728]">
                Use for text&#8209;focused content that does not require media or footer actions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 6. SPECIFICATIONS SECTION (Corner Radius & Spacing) ================= */}
      <div className="w-full flex flex-col gap-8 sm:gap-10">
        <div className="flex flex-col gap-1.5">
          <h2 className="text-[24px] sm:text-[28px] font-normal leading-[1.25] tracking-[-0.005em] text-[#2A2728]">
            Specifications
          </h2>
        </div>

        {/* 6.1 Corner Radius */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h3 className="text-[18px] sm:text-[19px] font-medium leading-[26px] text-[#2A2728]">
              Corner Radius
            </h3>
            <div className="flex flex-col gap-2.5 text-[14px] sm:text-[15px] font-light leading-relaxed text-[#2A2728] max-w-3xl">
              <p>
                Card radius scales dynamically based on the component size. Always use increments of{" "}
                <strong className="font-medium text-[#2A2728]">4px</strong> (ranging from{" "}
                <strong className="font-medium text-[#2A2728]">4px</strong> to a maximum of{" "}
                <strong className="font-medium text-[#2A2728]">80px</strong>) to maintain alignment with our spatial system (e.g., 4px, 8px, 12px, 16px, up to 80px).
              </p>
              <p>
                For rows of exactly 3 Image cards showcasing high-value content, apply the leaf-shaped border-radius (80px per corner, varying by position) to echo CarbonEthics&apos; organic leaf motif. Applying this leaf-shaped border-radius only one in a page, don’t overuse this in a page.
              </p>
            </div>
          </div>

          {/* 2 Comparison Containers Stacked in 2 Rows: Regular card radius & Leaf-shaped border-radius */}
          <div className="flex flex-col gap-5 sm:gap-6 w-full">
            {/* Row 1: Regular card radius (Publication hover animation) */}
            <div className="w-full bg-[#F5F5F5] rounded-[18px] p-4 sm:p-6 lg:p-8 flex flex-col gap-4 sm:gap-5">
              <h4 className="text-[15px] sm:text-[16px] font-medium leading-[22px] text-[#403B3C] text-center">
                Regular card radius
              </h4>

              <div className="grid grid-cols-3 gap-2.5 sm:gap-4 lg:gap-5 w-full h-[250px] sm:h-[310px] md:h-[345px] items-stretch">
                {regularCardsData.map((card, idx) => (
                  <div
                    key={idx}
                    className="bg-[#FDFDFD] rounded-[12px] sm:rounded-[16px] overflow-hidden relative h-full group cursor-pointer shadow-none flex flex-col justify-between"
                  >
                    {/* Top Visual Frame */}
                    <div className="w-full h-[142px] sm:h-[180px] md:h-[200px] bg-[#BCDEED] rounded-t-[12px] sm:rounded-t-[16px] pt-2 px-2 sm:pt-3.5 sm:px-3.5 md:pt-4 md:px-4 pb-0 flex items-end justify-center relative overflow-hidden shrink-0">
                      <div className="relative w-full h-full rounded-t-[8px] sm:rounded-t-[10px] overflow-hidden shadow-xs">
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                      </div>
                    </div>

                    {/* Bottom Content Frame / Sliding Panel (Publication animation) */}
                    <div className="absolute left-0 right-0 bottom-0 top-[128px] sm:top-[162px] md:top-[180px] group-hover:top-0 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] z-10 bg-[#FDFDFD] rounded-[12px] sm:rounded-[16px] p-2.5 sm:p-4 md:p-5 flex flex-col justify-between overflow-hidden border border-[#E0E0E0]">
                      <div className="w-full flex flex-col gap-1 sm:gap-1.5 shrink-0">
                        <span className="text-[9px] sm:text-[11px] md:text-[12px] font-light leading-[14px] text-[#0A3E6D] block">
                          {card.date}
                        </span>
                        <h5 className="text-[10.5px] sm:text-[13px] md:text-[14.5px] font-medium leading-[14.5px] sm:leading-[18.5px] md:leading-[20px] text-[#2A2728] line-clamp-3">
                          {card.title}
                        </h5>
                      </div>

                      {/* Description: Appears on hover */}
                      <div className="flex-1 max-h-0 group-hover:max-h-[120px] overflow-hidden opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100 ease-out my-0 group-hover:my-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        <p className="text-[8.5px] sm:text-[11.5px] md:text-[12.5px] font-normal leading-[13px] sm:leading-[17px] text-[#403B3C]/85 line-clamp-4">
                          {card.description}
                        </p>
                      </div>

                      <div className="w-fit inline-flex items-center gap-1.5 text-[9px] sm:text-[11.5px] md:text-[12.5px] font-bold text-[#0A3E6D] mt-auto shrink-0">
                        <span>View Details</span>
                        <div className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 rounded-full bg-[#0A3E6D] flex items-center justify-center text-white shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                          <ArrowRight className="w-2 h-2 sm:w-2.5 sm:h-2.5 stroke-[2.5]" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2: Leaf-shaped border-radius (Homepage Solutions hover animation) */}
            <div className="w-full bg-[#F5F5F5] rounded-[18px] p-4 sm:p-6 lg:p-8 flex flex-col gap-4 sm:gap-5">
              <h4 className="text-[15px] sm:text-[16px] font-medium leading-[22px] text-[#403B3C] text-center">
                Leaf-shaped border-radius
              </h4>

              <div
                className="flex items-stretch gap-2.5 sm:gap-4 lg:gap-5 w-full h-[250px] sm:h-[310px] md:h-[345px]"
                onMouseLeave={() => setHoveredLeafSolution(null)}
              >
                {leafCardsData.map((item, index) => {
                  const isHovered = hoveredLeafSolution === index;
                  const isMinimized = hoveredLeafSolution !== null && !isHovered;

                  const flexGrow =
                    hoveredLeafSolution === null
                      ? item.initialFlex
                      : isHovered
                        ? 3.4
                        : 0.55;

                  return (
                    <div
                      key={index}
                      onMouseEnter={() => setHoveredLeafSolution(index)}
                      onClick={() =>
                        setHoveredLeafSolution((prev) => (prev === index ? null : index))
                      }
                      className={`relative cursor-pointer bg-[#E9F6FE] overflow-hidden min-w-0 ${item.leafRadius} h-full shadow-xs [will-change:flex-grow] [transform:translateZ(0)]`}
                      style={{
                        flexGrow,
                        flexBasis: 0,
                        transition: "flex-grow 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                      }}
                    >
                      {/* Image Layer */}
                      <div
                        className={`absolute left-0 top-0 h-full overflow-hidden bg-[#071F36] ${item.leafRadius} transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] z-10 ${
                          isHovered ? "w-[44%] sm:w-[42%]" : "w-full"
                        }`}
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />

                        {/* Base Top-to-Bottom Black Gradient Overlay */}
                        <div
                          className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[opacity] ${
                            isHovered ? "opacity-25" : "opacity-100"
                          }`}
                          style={{
                            background:
                              "linear-gradient(180deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.32) 38%, rgba(0,0,0,0) 75%)",
                          }}
                        />

                        {/* Smooth Minimized Darkening Gradient Overlay */}
                        <div
                          className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[opacity] backdrop-blur-[1px] ${
                            isMinimized ? "opacity-100" : "opacity-0"
                          }`}
                          style={{
                            background:
                              "linear-gradient(180deg, rgba(0,0,0,0.48) 0%, rgba(0,0,0,0.44) 50%, rgba(0,0,0,0.58) 100%)",
                          }}
                        />

                        {/* Default Unhovered Text */}
                        <div
                          className={`absolute inset-0 p-3.5 sm:p-5 md:p-6 flex flex-col justify-start z-20 pointer-events-none transition-opacity duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                            hoveredLeafSolution !== null ? "opacity-0" : "opacity-100"
                          }`}
                        >
                          <h5 className="text-[12px] sm:text-[16px] md:text-[18px] font-normal leading-[16px] sm:leading-[22px] md:leading-[24px] text-white max-w-[175px] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                            {item.title}
                          </h5>
                          <div className="inline-flex items-center gap-1.5 text-[9px] sm:text-[11.5px] md:text-[12.5px] font-bold text-white mt-2.5 group/btn">
                            <span>{item.cta}</span>
                            <div className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 rounded-full bg-white flex items-center justify-center text-[#2A2728]">
                              <ArrowRight className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-[#2A2728] stroke-[2.5]" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Vertical Title on Minimized Card */}
                      <div
                        className={`absolute inset-0 z-30 flex items-center justify-center pointer-events-none transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] px-1 ${
                          isMinimized ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <h5
                          className="text-white text-[11px] sm:text-[13.5px] md:text-[15px] font-semibold leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] tracking-wider text-center"
                          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                        >
                          {item.title}
                        </h5>
                      </div>

                      {/* Expanded Content Panel on Hovered Card */}
                      <div
                        className={`absolute right-0 top-0 bottom-0 w-[56%] sm:w-[58%] h-full bg-[#E9F6FE] p-3.5 sm:p-5 md:p-6 flex flex-col justify-between overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isHovered
                            ? "opacity-100 translate-x-0 pointer-events-auto"
                            : "opacity-0 translate-x-2 pointer-events-none"
                        }`}
                      >
                        <div className="flex flex-col gap-1.5">
                          <h5 className="text-[#2A2728] text-[11.5px] sm:text-[15px] md:text-[17px] font-semibold leading-tight line-clamp-2">
                            {item.title}
                          </h5>
                          <p className="text-[#403B3C] text-[9px] sm:text-[11.5px] md:text-[12.5px] leading-[13px] sm:leading-[16.5px] md:leading-[18px] line-clamp-3">
                            <span className="font-bold text-[#2A2728]">{item.boldDescription}</span>{" "}
                            {item.description}
                          </p>
                        </div>

                        <div className="flex flex-col gap-2 my-auto">
                          {item.checkmarks.map((check, cIdx) => (
                            <div key={cIdx} className="flex items-center gap-1.5 sm:gap-2">
                              <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#038575] text-white flex items-center justify-center shrink-0">
                                <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5 stroke-[3]" />
                              </div>
                              <span className="text-[8.5px] sm:text-[11px] md:text-[12px] font-medium text-[#0A3E6D] truncate leading-none">
                                {check}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="inline-flex items-center gap-1.5 text-[9px] sm:text-[11.5px] md:text-[12.5px] font-bold text-[#0A3E6D] mt-auto">
                          <span>{item.cta}</span>
                          <div className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 rounded-full bg-[#0A3E6D] flex items-center justify-center text-white shrink-0">
                            <ArrowRight className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white stroke-[2.5]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* 6.2 Spacing */}
        <div className="flex flex-col gap-5 sm:gap-6">
          <div className="flex flex-col gap-2.5">
            <h3 className="text-[18px] sm:text-[19px] font-medium leading-[26px] text-[#2A2728]">
              Spacing
            </h3>
            <div className="flex flex-col gap-2 text-[14px] sm:text-[15px] font-light leading-relaxed text-[#2A2728] max-w-3xl">
              <p>
                Spacing within and around cards is flexible based on content density and component size, but must strictly adhere to the 4px grid system:
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-1">
                <li>
                  <strong className="font-medium text-[#2A2728]">Outer padding</strong>: Flexible, must use{" "}
                  <strong className="font-medium text-[#2A2728]">4px</strong> increments (
                  <strong className="font-medium text-[#2A2728]">e.g., 16px, 24px, 32px</strong>).
                </li>
                <li>
                  <strong className="font-medium text-[#2A2728]">Internal gaps</strong>: Flexible, must use{" "}
                  <strong className="font-medium text-[#2A2728]">4px</strong> increments (
                  <strong className="font-medium text-[#2A2728]">e.g., 8px, 12px, 16px</strong>).
                </li>
                <li>
                  <strong className="font-medium text-[#2A2728]">Grid System</strong>:{" "}
                  <strong className="font-medium text-[#2A2728]">20px</strong> spacing grid
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full overflow-hidden rounded-[13px]">
            <Image
              src="/images/guidelines/card-spacing-spec.png"
              alt="Card spacing specification"
              width={4408}
              height={2093}
              unoptimized
              className="w-full h-auto block"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
