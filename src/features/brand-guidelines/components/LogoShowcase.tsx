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

const PRIMARY_LOGO_NAVY: LogoItem = {
  name: "Full Horizontal Logo with Wordmark (Navy)",
  src: "/logo/LogoWNameBlue.png",
  bgClass: "bg-white",
  isDark: false,
  driveLink:
    "https://drive.google.com/file/d/1E1CtK3rOFnCH1Fp8QszIXmAGCIY_3V8f/view?usp=drive_link",
};

const PRIMARY_LOGO_WHITE: LogoItem = {
  name: "Full Horizontal Logo with Wordmark (White)",
  src: "/logo/LogoWNameWhite.png",
  bgClass: "bg-[#0A3E6D]",
  isDark: true,
  driveLink:
    "https://drive.google.com/file/d/1Phh3tGEB_q-optm8pQ1Zh4jauGcZgxbK/view?usp=drive_link",
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

const SYMBOL_LOGOS: LogoItem[] = [
  {
    name: "Logomark Symbol (Navy)",
    src: "/logo/LogoBlue.png",
    bgClass: "bg-white",
    isDark: false,
    driveLink:
      "https://drive.google.com/file/d/1YhQpiHCB9yddULNhG8JJM3ZTGjFU-QHP/view?usp=drive_link",
  },
  {
    name: "Logomark Symbol (White)",
    src: "/logo/LogoWhite.png",
    bgClass: "bg-[#0A3E6D]",
    isDark: true,
    driveLink:
      "https://drive.google.com/file/d/1AGLl_c6bEO9IpIjxUGdPJESWzDGqCYfj/view?usp=drive_link",
  },
];

const DRIVE_LINK =
  "https://drive.google.com/drive/folders/18B23mJYCYEgZIF2ZMPpCvDKLJvk0NTdV";

export default function LogoShowcase() {
  return (
    <section id="logo-assets" className="scroll-mt-24 flex flex-col gap-6 sm:gap-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="flex flex-col gap-1.5">
          <h1 className="text-[26px] sm:text-[30px] lg:text-[34px] font-bold tracking-tight leading-tight text-black">
            Brand Logo &amp; Assets
          </h1>
          <p className="text-[14px] sm:text-[15px] leading-relaxed text-gray-700 max-w-2xl">
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
            className="!rounded-[16px] h-[44px] !text-[14px] whitespace-nowrap"
          >
            <span>Download All Assets</span>
          </ArrowButton>
        </div>
      </div>

      {/* 1. PRIMARY HORIZONTAL LOGOS - Full Width Stacked */}
      <div className="flex flex-col gap-4 sm:gap-5">
        {/* Navy Full Logo - Balanced Dominant Height */}
        <div className="bg-white rounded-[16px] border border-gray-300 overflow-hidden flex flex-col">
          <div className="px-5 pt-4 pb-1.5 flex items-center justify-between">
            <span className="text-[15px] sm:text-[17px] text-navy-900 font-bold">
              {PRIMARY_LOGO_NAVY.name}
            </span>
          </div>

          <div className="w-full h-44 sm:h-52 md:h-[220px] bg-white flex items-center justify-center p-6 sm:p-8 pb-11 relative overflow-hidden group">
            {/* Subtle Grid Backdrop */}
            <div
              className="absolute inset-0 opacity-[0.035] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(#0A3E6D 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />

            <div className="relative w-full h-full flex items-center justify-center max-w-xl">
              <Image
                src={PRIMARY_LOGO_NAVY.src}
                alt={PRIMARY_LOGO_NAVY.name}
                width={420}
                height={180}
                priority
                className="max-h-20 sm:max-h-24 md:max-h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                style={{ width: "auto" }}
              />
            </div>

            <div className="absolute bottom-0 inset-x-0 z-10 flex items-center justify-end px-5 sm:px-6 py-2.5 bg-white/85 backdrop-blur-xs transition-colors">
              <a
                href={PRIMARY_LOGO_NAVY.driveLink || DRIVE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-900 hover:text-navy-900/80 transition-colors"
              >
                <span>Download</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* White Full Logo - Compact Navy Blue Background */}
        <div className="bg-[#0A3E6D] rounded-[16px] overflow-hidden flex flex-col">
          <div className="px-5 pt-4 pb-1.5 flex items-center justify-between">
            <span className="text-[15px] sm:text-[17px] text-white font-bold">
              {PRIMARY_LOGO_WHITE.name}
            </span>
          </div>

          <div className="w-full h-36 sm:h-40 md:h-[165px] bg-[#0A3E6D] flex items-center justify-center p-5 sm:p-6 pb-10 relative overflow-hidden group">
            <div className="relative w-full h-full flex items-center justify-center max-w-lg">
              <Image
                src={PRIMARY_LOGO_WHITE.src}
                alt={PRIMARY_LOGO_WHITE.name}
                width={340}
                height={140}
                className="max-h-12 sm:max-h-16 md:max-h-[72px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                style={{ width: "auto" }}
              />
            </div>

            <div className="absolute bottom-0 inset-x-0 z-10 flex items-center justify-end px-5 sm:px-6 py-2.5 bg-[#0A3E6D] text-white">
              <a
                href={PRIMARY_LOGO_WHITE.driveLink || DRIVE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/90 hover:text-white transition-colors"
              >
                <span>Download</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. VERTICAL LOCKUP VARIANTS */}
      <div>
        <div className="mb-3.5">
          <h2 className="text-[18px] sm:text-[20px] text-gray-900 font-semibold">
            Vertical Lockup Variants
          </h2>
          <p className="text-[13.5px] sm:text-[14.5px] leading-relaxed text-gray-600 mt-0.5 max-w-2xl">
            Stacked orientation tailored for center-aligned layouts, social media stories, vertical banners, merchandise, and portrait compositions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {VERTICAL_LOGOS.map((item) => (
            <div
              key={item.name}
              className={`rounded-[16px] flex flex-col justify-between overflow-hidden ${
                item.isDark
                  ? "bg-[#0A3E6D]"
                  : "bg-white border border-gray-300"
              }`}
            >
              <div className="px-4 pt-3.5 pb-2">
                <span
                  className={`font-semibold text-[14px] sm:text-[15px] truncate block ${
                    item.isDark ? "text-white" : "text-navy-900"
                  }`}
                >
                  {item.name}
                </span>
              </div>

              {/* Logo Preview Canvas */}
              <div
                className={`w-full h-36 sm:h-40 md:h-[165px] ${item.bgClass} flex items-center justify-center p-5 sm:p-6 pb-10 relative overflow-hidden transition-all mt-auto group`}
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
                    width={180}
                    height={140}
                    className="max-h-14 sm:max-h-16 md:max-h-[76px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    style={{ width: "auto" }}
                  />
                </div>

                {/* Overlay link at the bottom */}
                <div
                  className={`absolute bottom-0 inset-x-0 z-10 flex items-center justify-end px-4 py-2 backdrop-blur-xs transition-colors ${
                    item.isDark
                      ? "bg-[#0A3E6D] text-white"
                      : "bg-white/85 text-navy-900"
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
                    <span>Download</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. LOGOMARK / STANDALONE SYMBOL VARIANTS */}
      <div>
        <div className="mb-3.5">
          <h2 className="text-[18px] sm:text-[20px] text-gray-900 font-semibold">
            Logomark &amp; Standalone Symbol Variants
          </h2>
          <p className="text-[13.5px] sm:text-[14.5px] leading-relaxed text-gray-600 mt-0.5 max-w-2xl">
            Independent brand symbol engineered for social avatars, app icons, favicons, watermarks, or minimal compact applications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {SYMBOL_LOGOS.map((item) => (
            <div
              key={item.name}
              className={`rounded-[16px] flex flex-col justify-between overflow-hidden ${
                item.isDark
                  ? "bg-[#0A3E6D]"
                  : "bg-white border border-gray-300"
              }`}
            >
              <div className="px-4 pt-3.5 pb-2">
                <span
                  className={`font-semibold text-[14px] sm:text-[15px] truncate block ${
                    item.isDark ? "text-white" : "text-navy-900"
                  }`}
                >
                  {item.name}
                </span>
              </div>

              {/* Logo Preview Canvas */}
              <div
                className={`w-full h-36 sm:h-40 md:h-[165px] ${item.bgClass} flex items-center justify-center p-5 sm:p-6 pb-10 relative overflow-hidden transition-all mt-auto group`}
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
                    width={160}
                    height={160}
                    className="max-h-14 sm:max-h-16 md:max-h-[76px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    style={{ width: "auto" }}
                  />
                </div>

                {/* Overlay link at the bottom */}
                <div
                  className={`absolute bottom-0 inset-x-0 z-10 flex items-center justify-end px-4 py-2 backdrop-blur-xs transition-colors ${
                    item.isDark
                      ? "bg-[#0A3E6D] text-white"
                      : "bg-white/85 text-navy-900"
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
