"use client";

import React, { useState } from "react";
import TokenBadge from "./TokenBadge";
import { ArrowRight, Check, Copy } from "lucide-react";

export default function LinkHoverShowcase() {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const handleCopy = (text: string, token: string) => {
    navigator.clipboard.writeText(text);
    setCopiedToken(token);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  return (
    <section id="link-hover" className="scroll-mt-24 flex flex-col gap-8">
      {/* Section Header */}
      <div className="flex flex-col gap-2">
        <h2 className="type-h2-bold text-black">Link Hover Animations</h2>
        <p className="type-body2-regular text-gray-700 max-w-3xl">
          Signature interactive hyperlink states engineered with smooth CSS background-size expansions, supporting high contrast, dark inverted surfaces, and multi-line line wraps.
        </p>
      </div>

      {/* Main Container */}
      <div className="bg-white rounded-[8px] border border-gray-300 p-6 sm:p-8 shadow-xs flex flex-col gap-8">
        {/* Spec Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-300 gap-4">
          <div>
            <h3 className="type-title-medium text-navy-900">Hyperlink Animations</h3>
            <p className="type-label-regular text-gray-700 mt-0.5">
              Source: link-animations.css • Typeface: Public Sans • Easing: cubic-bezier(0.25, 1, 0.5, 1)
            </p>
          </div>
          <div className="flex items-center gap-2">
            <TokenBadge label="timing" value="0.25s - 0.3s" type="spacing" />
            <TokenBadge label="fill" value="#0A3E6D" type="color" />
            <TokenBadge label="dark" value="#FDFDFD" type="color" />
          </div>
        </div>

        {/* 3 Showcase Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1: Underline Fill Animation (Light Surface) */}
          <div className="p-6 rounded-[8px] border border-gray-300 bg-gray-50 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="type-body2-medium text-navy-900 font-semibold">
                  1. Underline Fill Up
                </span>
                <span className="text-[11px] font-mono text-gray-500">Light Surface</span>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed">
                Persistent 1px underline at rest. On hover, expands smoothly upward from bottom to 100% height in solid navy (<span className="font-mono text-navy-900 font-semibold">#0A3E6D</span>) with crisp white text.
              </p>

              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={() => handleCopy(".underline-fill-link", "fill-light")}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-700 hover:text-navy-900 transition-colors cursor-pointer font-semibold"
                  title="Click to copy CSS class"
                >
                  {copiedToken === "fill-light" ? (
                    <Check className="w-3.5 h-3.5 text-navy-900 stroke-[2.5]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-gray-400 hover:text-navy-900" />
                  )}
                  <span>.underline-fill-link</span>
                </button>
              </div>
            </div>

            {/* Interactive Live Demo */}
            <div className="p-4 bg-white rounded-[8px] border border-gray-200 flex flex-col gap-4">
              <p className="text-sm text-gray-700 leading-relaxed">
                Explore our verified{" "}
                <a
                  href="#link-hover"
                  onClick={(e) => e.preventDefault()}
                  className="underline-fill-link font-medium cursor-pointer"
                >
                  carbon credit methodology
                </a>{" "}
                engineered for institutional ESG integrity.
              </p>

              <div className="pt-1">
                <a
                  href="#link-hover"
                  onClick={(e) => e.preventDefault()}
                  className="underline-fill-link type-body2-medium font-medium inline-flex items-center cursor-pointer"
                >
                  <span>Explore Portfolio</span>
                  <ArrowRight className="w-4 h-4 inline-block ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Underline Fill Animation (Dark Navy Surface) */}
          <div className="p-6 rounded-[8px] border border-[#145388] bg-[#0A3E6D] text-white flex flex-col justify-between gap-6 shadow-sm">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="type-body2-medium text-white font-semibold">
                  2. Underline Fill (Dark)
                </span>
                <span className="text-[11px] font-mono text-white/70">Navy Surface</span>
              </div>

              <p className="text-xs text-white/80 leading-relaxed">
                Inverted variant for dark footers and navy hero banners. 1px white underline at rest, filling up to 100% white (<span className="font-mono text-white font-semibold">#FDFDFD</span>) with navy text on hover.
              </p>

              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={() => handleCopy(".underline-fill-link-dark", "fill-dark")}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-white/80 hover:text-white transition-colors cursor-pointer font-semibold"
                  title="Click to copy CSS class"
                >
                  {copiedToken === "fill-dark" ? (
                    <Check className="w-3.5 h-3.5 text-sand-300 stroke-[2.5]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-white/60 hover:text-white" />
                  )}
                  <span>.underline-fill-link-dark</span>
                </button>
              </div>
            </div>

            {/* Interactive Live Demo on Dark Navy */}
            <div className="p-4 bg-[#083258] rounded-[8px] border border-white/15 flex flex-col gap-4">
              <p className="text-sm text-white/90 leading-relaxed">
                Access the official{" "}
                <a
                  href="#link-hover"
                  onClick={(e) => e.preventDefault()}
                  className="underline-fill-link-dark font-medium cursor-pointer"
                >
                  Impact Verification Registry
                </a>{" "}
                and review audited certificates.
              </p>

              <div className="pt-1">
                <a
                  href="#link-hover"
                  onClick={(e) => e.preventDefault()}
                  className="underline-fill-link-dark type-body2-medium font-medium inline-flex items-center cursor-pointer"
                >
                  <span>Download Audit PDF</span>
                  <ArrowRight className="w-4 h-4 inline-block ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: Underline Appear Animation (Left-to-Right) */}
          <div className="p-6 rounded-[8px] border border-gray-300 bg-gray-50 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="type-body2-medium text-navy-900 font-semibold">
                  3. Underline Appear
                </span>
                <span className="text-[11px] font-mono text-gray-500">Left-to-Right</span>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed">
                No underline at rest. On hover, a smooth horizontal line expands from 0% to 100% width using <span className="font-mono text-navy-900 font-semibold">currentColor</span>. Used across footer navigation & papers.
              </p>

              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={() => handleCopy(".underline-appear-link", "appear")}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-700 hover:text-navy-900 transition-colors cursor-pointer font-semibold"
                  title="Click to copy CSS class"
                >
                  {copiedToken === "appear" ? (
                    <Check className="w-3.5 h-3.5 text-navy-900 stroke-[2.5]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-gray-400 hover:text-navy-900" />
                  )}
                  <span>.underline-appear-link</span>
                </button>
              </div>
            </div>

            {/* Interactive Live Demo */}
            <div className="p-4 bg-white rounded-[8px] border border-gray-200 flex flex-col gap-4">
              <div className="flex flex-col gap-2.5">
                <div>
                  <a
                    href="#link-hover"
                    onClick={(e) => e.preventDefault()}
                    className="text-navy-900 font-medium text-sm inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span className="underline-appear-link">Scientific Publications & Whitepapers</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-0.5 text-navy-900" />
                  </a>
                </div>

                <div className="p-3 bg-[#083258] rounded-[6px] text-white">
                  <span className="text-[11px] text-white/60 block mb-1">Footer Navigation Link</span>
                  <a
                    href="#link-hover"
                    onClick={(e) => e.preventDefault()}
                    className="text-white hover:text-frost-300 transition-colors font-medium text-sm"
                  >
                    <span className="underline-appear-link">Privacy Policy & Cookie Settings</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
