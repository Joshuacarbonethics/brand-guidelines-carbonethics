"use client";

import React, { useState } from "react";
import { TYPOGRAPHY_TOKENS } from "@/config/designTokens";
import { ArrowButton } from "@/features/shared/components/ArrowButton";
import { Check, Copy, RefreshCw } from "lucide-react";

export default function TypographyShowcase() {
  const [customTexts, setCustomTexts] = useState<Record<string, string>>({});
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const handleCopy = (text: string, token: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(token);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  const handleCustomTextChange = (token: string, value: string) => {
    setCustomTexts((prev) => ({
      ...prev,
      [token]: value,
    }));
  };

  const getStyleName = (token: string) => {
    const map: Record<string, string> = {
      "type.display": "Display",
      "type.h1": "Heading 1",
      "type.h2.bold": "Heading 2 (Bold)",
      "type.h2.regular": "Heading 2 (Regular)",
      "type.h3": "Heading 3",
      "type.h4": "Heading 4",
      "type.title.medium": "Title (Medium)",
      "type.title.regular": "Title (Regular)",
      "type.body1.medium": "Body 1 (Medium)",
      "type.body1.regular": "Body 1 (Regular)",
      "type.body2.medium": "Body 2 (Medium)",
      "type.body2.regular": "Body 2 (Regular)",
      "type.body3.medium": "Body 3 (Medium)",
      "type.body3.regular": "Body 3 (Regular)",
      "type.label.medium": "Label (Medium)",
      "type.label.regular": "Label (Regular)",
    };
    return map[token] || token;
  };

  const getResponsivePreviewSizing = (token: string, defaultSize: string, defaultLineHeight: string) => {
    switch (token) {
      case "type.display":
        return { fontSize: "clamp(40px, 6vw, 84px)", lineHeight: "1.06" };
      case "type.h1":
        return { fontSize: "clamp(30px, 4.2vw, 48px)", lineHeight: "1.15" };
      case "type.h2.bold":
        return { fontSize: "clamp(24px, 3.3vw, 38px)", lineHeight: "1.2" };
      case "type.h2.regular":
        return { fontSize: "clamp(22px, 3.1vw, 36px)", lineHeight: "1.2" };
      case "type.h3":
        return { fontSize: "clamp(20px, 2.5vw, 28px)", lineHeight: "1.3" };
      default:
        return { fontSize: defaultSize, lineHeight: defaultLineHeight };
    }
  };

  return (
    <section id="typography" className="scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col gap-1.5 mb-6">
        <h1 className="text-[26px] sm:text-[30px] lg:text-[34px] font-bold tracking-tight leading-tight text-black">
          Typeface &amp; Scale Hierarchy
        </h1>
        <p className="text-[14px] sm:text-[15px] leading-relaxed text-gray-700 max-w-3xl">
          CarbonEthics uses <strong className="font-semibold text-black">Public Sans</strong> as its primary typeface. It delivers clean geometric proportion, excellent screen legibility across dense data tables, and a grounded human tone.
        </p>
      </div>

      {/* Typeface Overview Card */}
      <div className="bg-white rounded-[12px] border border-gray-300 p-5 sm:p-6 mb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="text-[52px] sm:text-[64px] font-medium leading-none tracking-tight text-navy-900 select-none">
              Aa
            </div>
            <div className="text-[20px] sm:text-[22px] text-black mt-1.5 font-semibold">
              Public Sans
            </div>
            <div className="text-[13px] text-gray-700 mt-1 mb-4 font-normal">
              Primary brand font • Designed for optimal digital clarity
            </div>

            {/* Download Public Sans Font Files Button */}
            <ArrowButton
              variant="navy"
              href="https://drive.google.com/drive/folders/1o2Q10wz_EZnIFWhVMpoih7LRs46KElBf"
              target="_blank"
              rel="noopener noreferrer"
              className="!rounded-[16px] h-[44px] !text-[14px] whitespace-nowrap"
            >
              <span>Download Public Sans</span>
            </ArrowButton>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="type-label-medium uppercase text-gray-700 font-semibold tracking-wider">
              Character Set Preview
            </div>
            <div className="text-[16px] sm:text-[18px] font-normal tracking-wide text-gray-700 leading-relaxed font-sans break-all">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ
              <br />
              abcdefghijklmnopqrstuvwxyz
              <br />
              0123456789 • !@#$%^&amp;*()_+-=[]{`{}`}
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-[8px] border border-gray-300">
                Regular 400
              </span>
              <span className="px-3 py-1 bg-frost-200 text-navy-900 text-xs rounded-[8px] border border-frost-400 font-medium">
                Medium 500
              </span>
              <span className="px-3 py-1 bg-sand-200 text-sand-900 text-xs rounded-[8px] border border-sand-400 font-bold">
                Bold 700
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Typography Tokens Table & Live Renderers */}
      <div className="bg-white rounded-[12px] border border-gray-300 overflow-hidden">
        {/* Header: Hanya bagian ini yang warna background-nya biru */}
        <div className="px-4 py-3.5 sm:px-5 sm:py-4 bg-[#0A3E6D] text-white flex items-center justify-between border-b border-[#083258]">
          <div>
            <h2 className="text-[17px] sm:text-[19px] text-white font-semibold">
              16 Strict Typography Tokens
            </h2>
            <p className="type-label-regular text-white/80 mt-0.5">
              Exact sizes, line heights, letter spacings, and token aliases.
            </p>
          </div>
        </div>

        {/* Token Items: Tetap putih */}
        <div className="divide-y divide-gray-200 bg-white">
          {TYPOGRAPHY_TOKENS.map((item) => {
            const previewSizing = getResponsivePreviewSizing(
              item.token,
              item.size,
              item.lineHeight
            );

            return (
              <div
                key={item.token}
                className="p-4 sm:p-5 flex flex-col gap-2.5 bg-white"
              >
                {/* Token Specs Bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopy(`.${item.className}`, item.token)}
                      title="Copy CSS class"
                      className="inline-flex items-center gap-1.5 font-mono text-gray-700 hover:text-navy-900 transition-colors cursor-pointer text-xs font-semibold"
                    >
                      {copiedToken === item.token ? (
                        <Check className="w-3.5 h-3.5 text-navy-900 stroke-[2.5]" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-gray-400 hover:text-navy-900" />
                      )}
                      <span>.{item.className}</span>
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-gray-700 font-mono text-[11px] sm:text-xs">
                    <span>
                      Size: <strong className="text-black font-semibold">{item.size}</strong>
                    </span>
                    <span className="text-gray-400">•</span>
                    <span>
                      Weight: <strong className="text-black font-semibold">{item.weight} ({item.weightName})</strong>
                    </span>
                    <span className="text-gray-400">•</span>
                    <span>
                      LH: <strong className="text-black font-semibold">{item.lineHeight}</strong>
                    </span>
                    <span className="text-gray-400">•</span>
                    <span>
                      Spacing: <strong className="text-black font-semibold">{item.letterSpacing}</strong>
                    </span>
                  </div>
                </div>

                {/* Usage hint */}
                <div className="text-xs text-gray-700">
                  <span className="font-semibold text-navy-900">Usage: </span>
                  <span>{item.usage}</span>
                </div>

                {/* Live Rendered Preview */}
                <div className="px-0.5 py-1.5 overflow-hidden">
                  <div
                    className={`${item.className} text-black break-words select-text`}
                    style={{
                      fontSize: previewSizing.fontSize,
                      fontWeight: item.weight,
                      lineHeight: previewSizing.lineHeight,
                      letterSpacing:
                        item.letterSpacing === "-2%"
                          ? "-0.02em"
                          : item.letterSpacing === "-0.5%"
                          ? "-0.005em"
                          : "0",
                    }}
                  >
                    {customTexts[item.token] || getStyleName(item.token)}
                  </div>
                </div>

                {/* Interactive Custom Preview Input Per Scale */}
                <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
                  <input
                    type="text"
                    value={customTexts[item.token] || ""}
                    onChange={(e) => handleCustomTextChange(item.token, e.target.value)}
                    placeholder={`Type custom text to preview ${getStyleName(item.token)} live...`}
                    className="flex-1 h-8.5 px-3 text-xs bg-gray-50 border border-gray-200 rounded-[6px] text-black focus:bg-white focus:border-navy-900 focus:outline-none transition-all placeholder:text-gray-500"
                  />
                  {customTexts[item.token] && (
                    <button
                      onClick={() => handleCustomTextChange(item.token, "")}
                      title="Reset to default text"
                      className="h-8.5 px-3 text-xs text-gray-700 hover:text-navy-900 bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-[6px] transition-colors cursor-pointer flex items-center gap-1.5 shrink-0 font-medium"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Reset</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= TYPOGRAPHY IN ACTION (ABOUT US HERO ANNOTATED) ================= */}
      <div className="mt-7 flex flex-col gap-3.5">
        <div className="flex flex-col gap-1">
          <h2 className="text-[18px] sm:text-[20px] text-black font-bold">
            Typography in Production: About Us Hero
          </h2>
          <p className="text-[13.5px] sm:text-[14.5px] text-gray-700 max-w-3xl leading-relaxed">
            Live implementation breakdown illustrating headline hierarchy, contrast weight pairing, and responsive leading on production surfaces.
          </p>
        </div>

        {/* Visual Callout Container */}
        <div className="bg-white rounded-[14px] border border-gray-300 p-4 sm:p-6 flex flex-col gap-4 overflow-hidden">
          {/* Screenshot Display with Callout Overlay Pins (shown on xl+ where container is roomy) */}
          <div className="relative w-full rounded-[10px] border border-gray-200 overflow-hidden bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/guidelines/about-us-hero.png"
              alt="About Us Hero Typography In Action"
              className="w-full h-auto object-cover block select-none"
            />

            {/* Interactive SVG Callout Lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none hidden xl:block"
              viewBox="0 0 1440 430"
            >
              <polyline
                points="185,175 255,100 365,100"
                fill="none"
                stroke="#0A3E6D"
                strokeWidth="2.5"
                strokeDasharray="5 4"
              />
              <circle cx="185" cy="175" r="4.5" fill="#0A3E6D" />

              <polyline
                points="1020,126 960,205 890,205"
                fill="none"
                stroke="#0A3E6D"
                strokeWidth="2.5"
                strokeDasharray="5 4"
              />
              <circle cx="1020" cy="126" r="4.5" fill="#0A3E6D" />
            </svg>

            {/* Label 1 Pin: H1 Spec */}
            <div className="absolute hidden xl:flex flex-col gap-0.5 left-[25.5%] top-[13%] bg-navy-900 text-white px-2.5 py-1.5 rounded-[8px] border border-white/20 z-10">
              <span className="text-[11px] font-bold tracking-tight text-white">H1 Hero Headline</span>
              <span className="text-[10px] text-white/95 font-mono">
                Public Sans • Medium (500) • 44px
              </span>
              <span className="text-[10px] text-white/90">
                Leading: 1.1 • Token: <code className="text-[#E6D29E] font-semibold">hero.title</code>
              </span>
            </div>

            {/* Label 2 Pin: Subtitle Spec */}
            <div className="absolute hidden xl:flex flex-col gap-0.5 left-[48%] top-[42%] bg-navy-900 text-white px-2.5 py-1.5 rounded-[8px] border border-white/20 z-10">
              <span className="text-[11px] font-bold tracking-tight text-white">Lead Description Subtitle</span>
              <span className="text-[10px] text-white/95 font-mono">
                Public Sans • Regular / Light • 19px
              </span>
              <span className="text-[10px] text-white/90">
                Leading: 1.6 • Token: <code className="text-[#71CDBF] font-semibold">hero.description</code>
              </span>
            </div>
          </div>

          {/* Compact Spec Bar below screenshot */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-0">
            {/* Spec 1: Eyebrow Badge */}
            <div className="px-3 py-2 rounded-[8px] bg-gray-50 border border-gray-200 flex items-center justify-between gap-2">
              <div className="flex flex-col min-w-0">
                <span className="text-[10.5px] font-semibold text-navy-900 uppercase tracking-wider truncate">
                  Badge: &ldquo;About CarbonEthics&rdquo;
                </span>
                <span className="text-[11px] text-gray-700 font-mono font-medium truncate">
                  Public Sans SemiBold
                </span>
              </div>
              <span className="text-[11px] font-mono font-bold text-gray-700 shrink-0">15px / 600</span>
            </div>

            {/* Spec 2: H1 Title */}
            <div className="px-3 py-2 rounded-[8px] bg-gray-50 border border-gray-200 flex items-center justify-between gap-2">
              <div className="flex flex-col min-w-0">
                <span className="text-[10.5px] font-semibold text-navy-900 uppercase tracking-wider truncate">
                  H1: &ldquo;Welcome To CarbonEthics&rdquo;
                </span>
                <span className="text-[11px] text-gray-700 font-mono font-medium truncate">
                  Public Sans Medium
                </span>
              </div>
              <span className="text-[11px] font-mono font-bold text-gray-700 shrink-0">44px / 500</span>
            </div>

            {/* Spec 3: Subtitle Body */}
            <div className="px-3 py-2 rounded-[8px] bg-gray-50 border border-gray-200 flex items-center justify-between gap-2">
              <div className="flex flex-col min-w-0">
                <span className="text-[10.5px] font-semibold text-navy-900 uppercase tracking-wider truncate">
                  Lead: &ldquo;Your Climate Solution...&rdquo;
                </span>
                <span className="text-[11px] text-gray-700 font-mono font-medium truncate">
                  Public Sans Regular
                </span>
              </div>
              <span className="text-[11px] font-mono font-bold text-gray-700 shrink-0">19px / 400</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
