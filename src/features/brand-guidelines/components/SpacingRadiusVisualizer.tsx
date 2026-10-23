"use client";

import React, { useState } from "react";
import { SPACING_TOKENS, RADIUS_TOKENS } from "@/config/designTokens";
import { Check, Copy } from "lucide-react";

const SPACING_NAMES: Record<string, string> = {
  "spacing.none": "None",
  "spacing.micro": "Micro",
  "spacing.2xs": "2X Small",
  "spacing.xs": "Extra Small",
  "spacing.s": "Small",
  "spacing.m": "Medium",
  "spacing.l": "Large",
  "spacing.xl": "Extra Large",
  "spacing.2xl": "2X Large",
  "spacing.3xl": "3X Large",
  "spacing.4xl": "4X Large",
  "spacing.5xl": "5X Large",
  "spacing.6xl": "6X Large",
};

const RADIUS_NAMES: Record<string, string> = {
  "radius.button": "Button Radius",
  "radius.card.standard": "Standard Card Radius",
  "radius.card.large": "Large Card Radius",
  "radius.input": "Input Field Radius",
  "radius.badge": "Badge & Pill Radius",
  "radius.modal": "Modal Radius",
};

export default function SpacingRadiusVisualizer() {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const handleCopy = (token: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedToken(token);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  return (
    <section id="spacing-radius" className="scroll-mt-24 flex flex-col gap-12">
      {/* ================= SPACING SCALE ================= */}
      <div>
        <div className="flex flex-col gap-2 mb-8">
          <h2 className="type-h2-bold text-black">Spacing Scale (0px – 128px)</h2>
          <p className="type-body2-regular text-gray-700 max-w-3xl">
            A standardized linear-to-geometric spacing rhythm based on 4px increments. Maintains structural consistency across micro UI padding, component margins, and page containers.
          </p>
        </div>

        <div className="bg-white rounded-[8px] border border-gray-300 overflow-hidden">
          <div className="p-5 border-b border-[#083258] bg-[#0A3E6D] text-white flex items-center justify-between">
            <div>
              <h3 className="type-title-medium text-white font-semibold">13 Spacing Increments</h3>
              <p className="type-label-regular text-white/75 mt-0.5">
                From micro hair-lines to grand section spacers.
              </p>
            </div>
          </div>

          <div className="divide-y divide-gray-200 bg-white">
            {SPACING_TOKENS.map((sp) => {
              const isCopied = copiedToken === sp.token;
              const barWidth = Math.max(sp.px, 2);

              return (
                <div
                  key={sp.token}
                  className="p-4 sm:p-5 bg-white flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  {/* Left Specs */}
                  <div className="w-full md:w-[350px] shrink-0 flex items-center justify-between md:justify-start gap-4 whitespace-nowrap">
                    <div className="flex items-center gap-2 whitespace-nowrap shrink-0">
                      <span className="type-body2-medium text-black font-semibold whitespace-nowrap">
                        {SPACING_NAMES[sp.token] || sp.token}
                      </span>
                      <button
                        onClick={() => handleCopy(sp.token, `${sp.px}px`)}
                        className="inline-flex items-center gap-1 text-xs font-mono text-gray-700 font-medium hover:text-navy-900 bg-gray-100 hover:bg-frost-200 px-2 py-0.5 rounded transition-colors cursor-pointer whitespace-nowrap shrink-0"
                        title="Click to copy CSS token"
                      >
                        {isCopied ? (
                          <Check className="w-3 h-3 text-navy-900" />
                        ) : (
                          <Copy className="w-3 h-3 text-gray-500" />
                        )}
                        <span>.{sp.token}</span>
                      </button>
                    </div>

                    <div className="flex items-center gap-1.5 font-mono text-xs text-gray-700 whitespace-nowrap shrink-0 ml-auto md:ml-0">
                      <span className="font-bold text-black">{sp.px}px</span>
                      <span className="text-gray-400">/</span>
                      <span className="text-gray-700 font-medium">{sp.rem}</span>
                    </div>
                  </div>

                  {/* Visual Bar representation */}
                  <div className="flex-1 flex items-center gap-4">
                    <div className="w-full max-w-md bg-gray-100 rounded-[4px] h-8 relative p-1 flex items-center overflow-hidden border border-gray-200">
                      <div
                        className="h-full bg-navy-900 rounded-[3px] transition-all duration-300"
                        style={{ width: `${Math.min((barWidth / 128) * 100, 100)}%` }}
                      />
                    </div>
                  </div>

                  {/* Usage explanation */}
                  <div className="text-xs text-gray-700 md:w-56 shrink-0 md:text-right">
                    {sp.usage}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= CORNER RADIUS SCALE ================= */}
      <div>
        <div className="flex flex-col gap-2 mb-8">
          <h2 className="type-h2-bold text-black">Corner Radius Scale</h2>
          <p className="type-body2-regular text-gray-700 max-w-3xl">
            Controlled border curvature provides visual softness while maintaining crisp structural integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {RADIUS_TOKENS.map((rad) => {
            return (
              <div
                key={rad.token}
                className="bg-white rounded-[8px] border border-gray-300 p-6 flex flex-col"
              >
                {/* Visual Rounded Block Preview */}
                <div className="h-36 bg-[#EAF6FD] rounded-[8px] border border-dashed border-[#BCDEED] p-4 flex items-center justify-center mb-4 relative overflow-hidden">
                  <div
                    className={`w-36 h-24 bg-[#EAF6FD] border-2 border-navy-900 flex items-center justify-center ${rad.previewClass}`}
                  >
                    <span className="font-mono text-sm font-bold text-navy-900">
                      {rad.value}
                    </span>
                  </div>
                </div>

                {/* Token Specs */}
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="type-body3-medium text-black font-semibold">
                        {RADIUS_NAMES[rad.token] || rad.token}
                      </span>
                      <span className="text-xs font-mono text-gray-700 font-medium bg-gray-100 px-2 py-0.5 rounded border border-gray-200">
                        .{rad.token}
                      </span>
                    </div>

                    <span className="font-mono text-xs font-bold text-black shrink-0">
                      {rad.value}
                    </span>
                  </div>
                  <p className="type-body3-regular text-gray-700 text-xs mt-3">
                    {rad.usage}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
