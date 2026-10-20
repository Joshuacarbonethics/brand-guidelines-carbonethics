"use client";

import React from "react";
import Image from "next/image";
import { ArrowButton } from "@/features/shared/components/ArrowButton";
import { ExternalLink } from "lucide-react";

interface LogoItem {
  name: string;
  src: string;
  bgClass: string;
  isDark: boolean;
  driveLink?: string;
  description?: string;
}

const PRIMARY_LOGO: LogoItem = {
  name: "Full Horizontal Logo with Wordmark (Navy)",
  src: "/logo/LogoWNameBlue.png",
  bgClass: "bg-white",
  isDark: false,
};

const VERTICAL_LOGOS: LogoItem[] = [
  {
    name: "Vertical Full Logo (Navy)",
    src: "/logo/LogoVerticalBlue.png",
    bgClass: "bg-white",
    isDark: false,
    driveLink:
      "https://drive.google.com/file/d/1-IETG-jApMZ-Rk_MrrfUZgk_j2wjvB9z/view?usp=drive_link",
    description:
      "Stacked vertical format suited for center-aligned layouts, social media stories, vertical banners, and portrait media.",
  },
  {
    name: "Vertical Full Logo (White)",
    src: "/logo/LogoVerticalWhite.png",
    bgClass: "bg-[#0A3E6D]",
    isDark: true,
    driveLink:
      "https://drive.google.com/file/d/1YDIwII7a2XN8rwMu6_JwR02ZQcfxIS7H/view?usp=drive_link",
    description:
      "Inverted vertical lockup for dark backgrounds, photography overlays, and high-contrast dark surfaces.",
  },
];

const SECONDARY_LOGOS: LogoItem[] = [
  {
    name: "Full Logo with Wordmark (White)",
    src: "/logo/LogoWNameWhite.png",
    bgClass: "bg-[#0A3E6D]",
    isDark: true,
  },
  {
    name: "Logomark Symbol (Navy)",
    src: "/logo/LogoBlue.png",
    bgClass: "bg-white",
    isDark: false,
  },
  {
    name: "Logomark Symbol (White)",
    src: "/logo/LogoWhite.png",
    bgClass: "bg-[#0A3E6D]",
    isDark: true,
  },
];

const DRIVE_LINK =
  "https://drive.google.com/drive/folders/18B23mJYCYEgZIF2ZMPpCvDKLJvk0NTdV";

export default function LogoShowcase() {
  return (
    <section id="logo-assets" className="scroll-mt-24 flex flex-col gap-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="type-h2-bold text-black">Brand Logo &amp; Assets</h2>
          <p className="type-body2-regular text-gray-700 max-w-3xl">
            Our brand identity system centers on our primary horizontal full logo, supported by vertical lockups and standalone symbol variants engineered for versatile multi-channel applications.
          </p>
        </div>

        {/* CTA Button directly to Google Drive */}
        <div className="shrink-0">
          <ArrowButton
            variant="navy"
            href={DRIVE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="!rounded-[20px] h-[52px] !text-[15px] whitespace-nowrap"
          >
            <span>Download All Assets (Drive)</span>
          </ArrowButton>
        </div>
      </div>

      {/* 1. PRIMARY HERO LOGO - Dominant & Focused */}
      <div className="bg-white rounded-[16px] sm:rounded-[20px] border border-gray-300 overflow-hidden flex flex-col">
        {/* Header Bar without dividing line */}
        <div className="p-6 sm:p-7 pb-2 flex items-center justify-between">
          <span className="type-h3 text-navy-900 font-bold">
            {PRIMARY_LOGO.name}
          </span>
        </div>

        {/* Big Canvas Display with Overlay CTA at bottom-right */}
        <div className="w-full h-80 sm:h-96 md:h-[420px] bg-white flex items-center justify-center p-8 sm:p-14 pb-16 sm:pb-16 md:pb-16 relative overflow-hidden group">
          {/* Subtle Grid Backdrop */}
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(#0A3E6D 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />

          <div className="relative w-full h-full flex items-center justify-center max-w-2xl">
            <Image
              src={PRIMARY_LOGO.src}
              alt={PRIMARY_LOGO.name}
              width={520}
              height={260}
              priority
              className="max-h-36 sm:max-h-48 md:max-h-56 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              style={{ width: "auto" }}
            />
          </div>

          {/* Overlay Link at bottom-right over the image container */}
          <div className="absolute bottom-0 inset-x-0 z-10 flex items-center justify-end px-6 sm:px-8 py-3.5 bg-white/85 backdrop-blur-xs transition-colors border-t border-gray-100/80">
            <a
              href={DRIVE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-navy-900 hover:text-navy-900/80 transition-colors"
            >
              <span>Get Vector (SVG / EPS / PNG)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. VERTICAL LOCKUP VARIANTS */}
      <div>
        <div className="mb-4">
          <h3 className="type-title-medium text-gray-900 font-semibold">
            Vertical Lockup Variants
          </h3>
          <p className="type-body2-regular text-gray-600 mt-1 max-w-2xl">
            Stacked orientation tailored for center-aligned layouts, social media stories, vertical banners, merchandise, and portrait compositions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {VERTICAL_LOGOS.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-[16px] border border-gray-300 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="p-5 pb-3">
                <span className="type-body2-medium text-navy-900 font-semibold text-[15px] truncate block">
                  {item.name}
                </span>
              </div>

              {/* Logo Preview Canvas */}
              <div
                className={`w-full h-72 sm:h-80 ${item.bgClass} flex items-center justify-center p-8 pb-14 relative overflow-hidden transition-all mt-auto group`}
              >
                {!item.isDark && (
                  <div
                    className="absolute inset-0 opacity-[0.035] pointer-events-none"
                    style={{
                      backgroundImage:
                        "radial-gradient(#0A3E6D 1px, transparent 1px)",
                      backgroundSize: "16px 16px",
                    }}
                  />
                )}

                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={260}
                    height={200}
                    className="max-h-48 sm:max-h-56 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    style={{ width: "auto" }}
                  />
                </div>

                {/* Overlay link at the bottom */}
                <div
                  className={`absolute bottom-0 inset-x-0 z-10 flex items-center justify-end px-5 py-2.5 backdrop-blur-xs transition-colors border-t ${
                    item.isDark
                      ? "bg-[#0A3E6D]/85 border-white/10 text-white"
                      : "bg-white/85 border-gray-100/80 text-navy-900"
                  }`}
                >
                  <a
                    href={item.driveLink || DRIVE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold hover:opacity-80 transition-opacity ${
                      item.isDark ? "text-white" : "text-navy-900"
                    }`}
                  >
                    <span>Download (Google Drive)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. SECONDARY / COMPLEMENTARY VARIANTS */}
      <div>
        <div className="mb-4">
          <h3 className="type-title-medium text-gray-900 font-semibold">
            Secondary &amp; Alternative Variants
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SECONDARY_LOGOS.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-[14px] border border-gray-300 flex flex-col justify-between overflow-hidden"
            >
              <div className="p-5 pb-3">
                <span className="type-body2-medium text-navy-900 font-semibold text-[14px] truncate block">
                  {item.name}
                </span>
              </div>

              {/* Logo Preview Canvas */}
              <div
                className={`w-full h-52 sm:h-56 ${item.bgClass} flex items-center justify-center p-6 pb-14 relative overflow-hidden transition-all mt-auto`}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={220}
                    height={110}
                    className="max-h-20 sm:max-h-24 w-auto object-contain transition-transform duration-300 hover:scale-105"
                    style={{ width: "auto" }}
                  />
                </div>

                {/* Overlay link at the bottom */}
                <div
                  className={`absolute bottom-0 inset-x-0 z-10 flex items-center justify-end px-5 py-2.5 backdrop-blur-xs transition-colors ${
                    item.isDark
                      ? "bg-[#0A3E6D]/80 text-white"
                      : "bg-white/85 text-navy-900"
                  }`}
                >
                  <a
                    href={DRIVE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold ${
                      item.isDark ? "text-white" : "text-navy-900"
                    }`}
                  >
                    <span>Download</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
