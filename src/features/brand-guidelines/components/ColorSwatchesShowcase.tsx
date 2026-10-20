"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { COLOR_TOKENS } from "@/config/designTokens";
import { Check, Copy, Search } from "lucide-react";

const CATEGORIES = ["Main", "All"] as const;

interface SwatchItem {
  step: string;
  hex: string;
  badge?: "BASE" | "DARK FROST" | "DARK SANDS";
  textColor: string;
}

const MAIN_FROST_BLUE_SWATCHES: SwatchItem[] = [
  { step: "100", hex: "#F4FBFC", textColor: "#15151E" },
  { step: "200", hex: "#EAF6FD", textColor: "#15151E" },
  { step: "300", hex: "#D9F1F8", textColor: "#15151E" },
  { step: "400", hex: "#BCDEED", badge: "BASE", textColor: "#15151E" },
];

const MAIN_SANDS_SWATCHES: SwatchItem[] = [
  { step: "100", hex: "#FDF8E5", textColor: "#15151E" },
  { step: "300", hex: "#F6E8BD", textColor: "#15151E" },
  { step: "400", hex: "#E6D29E", badge: "BASE", textColor: "#15151E" },
  { step: "700", hex: "#A18858", textColor: "#FFFFFF" },
];

const MAIN_GRAY_SWATCHES: SwatchItem[] = [
  { step: "100", hex: "#F5F5F5", textColor: "#15151E" },
  { step: "300", hex: "#E0E0E0", badge: "BASE", textColor: "#15151E" },
  { step: "500", hex: "#949494", textColor: "#FFFFFF" },
  { step: "700", hex: "#403B3C", textColor: "#FFFFFF" },
];

const ALL_FROST_BLUE_SWATCHES: SwatchItem[] = [
  { step: "100", hex: "#F4FBFC", textColor: "#15151E" },
  { step: "200", hex: "#EAF6FD", textColor: "#15151E" },
  { step: "300", hex: "#D9F1F8", textColor: "#15151E" },
  { step: "400", hex: "#BCDEED", badge: "BASE", textColor: "#15151E" },
  { step: "500", hex: "#9DC1D5", textColor: "#FFFFFF" },
  { step: "600", hex: "#83A9BF", textColor: "#FFFFFF" },
  { step: "700", hex: "#6E8FA6", textColor: "#FFFFFF" },
  { step: "800", hex: "#587185", badge: "DARK FROST", textColor: "#FFFFFF" },
  { step: "900", hex: "#495F72", textColor: "#FFFFFF" },
];

const ALL_SANDS_SWATCHES: SwatchItem[] = [
  { step: "100", hex: "#FDF8E5", textColor: "#15151E" },
  { step: "200", hex: "#FAF3D4", textColor: "#15151E" },
  { step: "300", hex: "#F6E8BD", textColor: "#15151E" },
  { step: "400", hex: "#E6D29E", badge: "BASE", textColor: "#15151E" },
  { step: "500", hex: "#CDB582", textColor: "#15151E" },
  { step: "600", hex: "#BAA16B", textColor: "#FFFFFF" },
  { step: "700", hex: "#A18858", textColor: "#FFFFFF" },
  { step: "800", hex: "#806D48", badge: "DARK SANDS", textColor: "#FFFFFF" },
  { step: "900", hex: "#675A44", textColor: "#FFFFFF" },
];

const ALL_GRAY_SWATCHES: SwatchItem[] = [
  { step: "50", hex: "#FAF9F9", textColor: "#15151E" },
  { step: "100", hex: "#F5F5F5", textColor: "#15151E" },
  { step: "300", hex: "#E0E0E0", badge: "BASE", textColor: "#15151E" },
  { step: "500", hex: "#949494", textColor: "#FFFFFF" },
  { step: "700", hex: "#403B3C", textColor: "#FFFFFF" },
];

const TURQUOISE_SWATCHES: SwatchItem[] = [
  { step: "100", hex: "#E5FCFA", textColor: "#15151E" },
  { step: "300", hex: "#BAF6ED", badge: "BASE", textColor: "#15151E" },
  { step: "500", hex: "#5EB7A9", textColor: "#FFFFFF" },
  { step: "700", hex: "#3F8074", textColor: "#FFFFFF" },
];

const CORAL_SWATCHES: SwatchItem[] = [
  { step: "100", hex: "#FDEAEC", textColor: "#15151E" },
  { step: "300", hex: "#FBC9C9", badge: "BASE", textColor: "#15151E" },
  { step: "500", hex: "#BC787A", textColor: "#FFFFFF" },
  { step: "700", hex: "#825050", textColor: "#FFFFFF" },
];

export default function ColorSwatchesShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Main");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const filteredTokens = COLOR_TOKENS.filter((token) => {
    return (
      token.token.toLowerCase().includes(searchQuery.toLowerCase()) ||
      token.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      token.hex.toLowerCase().includes(searchQuery.toLowerCase()) ||
      token.usage.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const getContrastTextColor = (hex: string, explicitTextColor?: string) => {
    if (explicitTextColor) return explicitTextColor;
    try {
      const clean = hex.replace("#", "");
      const r = parseInt(clean.substring(0, 2), 16) / 255;
      const g = parseInt(clean.substring(2, 4), 16) / 255;
      const b = parseInt(clean.substring(4, 6), 16) / 255;
      const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      return lum > 0.52 ? "#0A3E6D" : "#FDFDFD";
    } catch {
      return "#0A3E6D";
    }
  };

  const isLightBackground = (hex: string) => {
    try {
      const clean = hex.replace("#", "");
      const r = parseInt(clean.substring(0, 2), 16) / 255;
      const g = parseInt(clean.substring(2, 4), 16) / 255;
      const b = parseInt(clean.substring(4, 6), 16) / 255;
      const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      return lum > 0.52;
    } catch {
      return true;
    }
  };

  const renderSwatchColumn = (swatch: SwatchItem) => {
    const hexDisplay = swatch.hex.replace("#", "");

    return (
      <button
        key={swatch.step}
        type="button"
        onClick={() => handleCopy(swatch.hex)}
        title={`Click to copy ${swatch.hex}`}
        className="group relative flex-1 flex flex-col justify-between items-center h-full pt-3 md:pt-4 pb-3 md:pb-5 cursor-pointer transition-transform hover:scale-[1.01] hover:z-10 focus:outline-none"
        style={{ backgroundColor: swatch.hex }}
      >
        <div className="h-6 flex items-center justify-center">
          {swatch.badge ? (
            <span className="px-1.5 md:px-2 py-0.5 rounded-full bg-white text-[#15151E] text-[8px] md:text-[9.5px] font-bold tracking-wider uppercase shadow-xs whitespace-nowrap">
              {swatch.badge}
            </span>
          ) : null}
        </div>

        <div className="flex-1 flex items-center justify-center">
          <span
            className="rotate-90 select-none font-mono font-medium text-xs md:text-sm tracking-wider uppercase"
            style={{ color: swatch.textColor }}
          >
            {hexDisplay}
          </span>
        </div>

        <div className="h-6 flex items-center justify-center">
          <span
            className="font-sans font-medium text-xs md:text-sm select-none"
            style={{ color: swatch.textColor }}
          >
            {swatch.step}
          </span>
        </div>
      </button>
    );
  };

  const renderTopRow = () => (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
      <div className="w-full lg:flex-[3] flex flex-col">
        <div className="w-full border-t border-[#C7CAD1]/60 shrink-0 h-0 mb-3" />
        <p className="text-[14px] md:text-[16px] text-[#606060] font-normal mb-3">
          Name: <span className="font-semibold text-black">Navy</span>
        </p>
        <button
          type="button"
          onClick={() => handleCopy("#0A3E6D")}
          title="Click to copy #0A3E6D"
          className="w-full h-[320px] md:h-[400px] bg-[#0A3E6D] rounded-[16px] flex flex-col items-center justify-center cursor-pointer transition-transform hover:scale-[1.005] focus:outline-none"
        >
          <span className="px-3 py-1 rounded-full bg-white text-[#15151E] text-xs font-semibold uppercase tracking-wider mb-3 shadow-xs">
            BASE
          </span>
          <span className="font-mono text-3xl md:text-4xl font-medium text-white tracking-wider">
            0A3E6D
          </span>
        </button>
      </div>

      <div className="w-full lg:flex-[1] flex flex-col">
        <div className="w-full border-t border-[#C7CAD1]/60 shrink-0 h-0 mb-3" />
        <p className="text-[14px] md:text-[16px] text-[#606060] font-normal mb-3">
          Name: <span className="font-semibold text-black">Neutral</span>
        </p>
        <div className="w-full h-[320px] md:h-[400px] rounded-[16px] border border-gray-200 overflow-hidden flex">
          <button
            type="button"
            onClick={() => handleCopy("#FDFDFD")}
            title="Click to copy #FDFDFD"
            className="flex-1 h-full flex flex-col justify-between items-center pt-6 md:pt-8 pb-4 md:pb-6 bg-[#FDFDFD] cursor-pointer transition-transform hover:scale-[1.01] focus:outline-none"
          >
            <div className="h-6" />
            <div className="flex-1 flex items-center justify-center">
              <span className="rotate-90 select-none font-mono font-medium text-xs md:text-sm tracking-wider uppercase text-[#2A2728]">
                FDFDFD
              </span>
            </div>
            <span className="font-sans font-medium text-xs md:text-sm text-[#2A2728]">
              White
            </span>
          </button>

          <button
            type="button"
            onClick={() => handleCopy("#2A2728")}
            title="Click to copy #2A2728"
            className="flex-1 h-full flex flex-col justify-between items-center pt-6 md:pt-8 pb-4 md:pb-6 bg-[#2A2728] cursor-pointer transition-transform hover:scale-[1.01] focus:outline-none"
          >
            <div className="h-6" />
            <div className="flex-1 flex items-center justify-center">
              <span className="rotate-90 select-none font-mono font-medium text-xs md:text-sm tracking-wider uppercase text-white">
                2A2728
              </span>
            </div>
            <span className="font-sans font-medium text-xs md:text-sm text-white">
              Black
            </span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section id="colors" className="scroll-mt-24">
      <div className="flex flex-col gap-2 mb-8">
        <h2 className="type-h2-bold text-black">Color Tokens & Swatches</h2>
        <p className="type-body2-regular text-gray-700 max-w-3xl">
          The palette is inspired by coastal landscapes, oceanic navy waters, and coastal mangroves. Click any swatch or Hex code to copy directly to your clipboard.
        </p>
      </div>

      <div className="sticky top-[50px] lg:top-0 z-20 bg-[#FAF9F9] -mx-4 px-4 md:-mx-6 md:px-6 pt-4 pb-3 mb-6">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-[20px] text-xs font-medium shrink-0 border transition-colors cursor-pointer ${
                    isActive
                      ? "bg-navy-900 text-white border-navy-900 shadow-xs"
                      : "bg-white text-gray-700 border-gray-300 hover:border-navy-900 hover:text-navy-900"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search token, hex, usage..."
              className="w-full h-9 pl-9 pr-3 rounded-[8px] border border-gray-300 bg-white text-xs text-black focus:outline-none focus:border-navy-900 transition-colors"
            />
          </div>
        </div>
      </div>

      {copiedHex && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0A3E6D] text-white shadow-xl text-xs font-medium animate-in fade-in slide-in-from-bottom-2 duration-200">
          <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
          <span>Hex {copiedHex} copied to clipboard!</span>
        </div>
      )}

      {searchQuery.trim() === "" && (
        <div className="space-y-8 md:space-y-10">
          {renderTopRow()}

          <AnimatePresence mode="popLayout" initial={false}>
            {selectedCategory === "Main" ? (
              <motion.div
                key="main-swatches-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start"
              >
                <motion.div
                  layoutId="block-frost-blue"
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full"
                >
                  <div className="w-full border-t border-[#C7CAD1]/60 shrink-0 h-0 mb-3" />
                  <p className="text-[14px] md:text-[16px] text-[#606060] font-normal mb-3">
                    Name: <span className="font-semibold text-black">Frost Blue</span>
                  </p>
                  <div className="rounded-[16px] border border-gray-200 overflow-hidden flex h-[280px] md:h-[340px]">
                    {MAIN_FROST_BLUE_SWATCHES.map((swatch) => renderSwatchColumn(swatch))}
                  </div>
                </motion.div>

                <motion.div
                  layoutId="block-sands"
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full"
                >
                  <div className="w-full border-t border-[#C7CAD1]/60 shrink-0 h-0 mb-3" />
                  <p className="text-[14px] md:text-[16px] text-[#606060] font-normal mb-3">
                    Name: <span className="font-semibold text-black">Sands</span>
                  </p>
                  <div className="rounded-[16px] border border-gray-200 overflow-hidden flex h-[280px] md:h-[340px]">
                    {MAIN_SANDS_SWATCHES.map((swatch) => renderSwatchColumn(swatch))}
                  </div>
                </motion.div>

                <motion.div
                  layoutId="block-gray"
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full"
                >
                  <div className="w-full border-t border-[#C7CAD1]/60 shrink-0 h-0 mb-3" />
                  <p className="text-[14px] md:text-[16px] text-[#606060] font-normal mb-3">
                    Name: <span className="font-semibold text-black">Gray</span>
                  </p>
                  <div className="rounded-[16px] border border-gray-200 overflow-hidden flex h-[280px] md:h-[340px]">
                    {MAIN_GRAY_SWATCHES.map((swatch) => renderSwatchColumn(swatch))}
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="all-swatches-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="space-y-8 md:space-y-10"
              >
                <motion.div
                  layoutId="block-frost-blue"
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full"
                >
                  <div className="w-full border-t border-[#C7CAD1]/60 shrink-0 h-0 mb-3" />
                  <p className="text-[14px] md:text-[16px] text-[#606060] font-normal mb-3">
                    Name: <span className="font-semibold text-black">Frost Blue</span>
                  </p>
                  <div className="rounded-[16px] border border-gray-200 overflow-hidden flex h-[320px] md:h-[400px]">
                    {ALL_FROST_BLUE_SWATCHES.map((swatch) => renderSwatchColumn(swatch))}
                  </div>
                </motion.div>

                <motion.div
                  layoutId="block-sands"
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full"
                >
                  <div className="w-full border-t border-[#C7CAD1]/60 shrink-0 h-0 mb-3" />
                  <p className="text-[14px] md:text-[16px] text-[#606060] font-normal mb-3">
                    Name: <span className="font-semibold text-black">Sands</span>
                  </p>
                  <div className="rounded-[16px] border border-gray-200 overflow-hidden flex h-[320px] md:h-[400px]">
                    {ALL_SANDS_SWATCHES.map((swatch) => renderSwatchColumn(swatch))}
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
                  <motion.div
                    layoutId="block-gray"
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full"
                  >
                    <div className="w-full border-t border-[#C7CAD1]/60 shrink-0 h-0 mb-3" />
                    <p className="text-[14px] md:text-[16px] text-[#606060] font-normal mb-3">
                      Name: <span className="font-semibold text-black">Gray</span>
                    </p>
                    <div className="rounded-[16px] border border-gray-200 overflow-hidden flex h-[280px] md:h-[340px]">
                      {ALL_GRAY_SWATCHES.map((swatch) => renderSwatchColumn(swatch))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 24, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 24, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full"
                  >
                    <div className="w-full border-t border-[#C7CAD1]/60 shrink-0 h-0 mb-3" />
                    <p className="text-[14px] md:text-[16px] text-[#606060] font-normal mb-3">
                      Name: <span className="font-semibold text-black">Turquoise</span>
                    </p>
                    <div className="rounded-[16px] border border-gray-200 overflow-hidden flex h-[280px] md:h-[340px]">
                      {TURQUOISE_SWATCHES.map((swatch) => renderSwatchColumn(swatch))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 24, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 24, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full"
                  >
                    <div className="w-full border-t border-[#C7CAD1]/60 shrink-0 h-0 mb-3" />
                    <p className="text-[14px] md:text-[16px] text-[#606060] font-normal mb-3">
                      Name: <span className="font-semibold text-black">Coral</span>
                    </p>
                    <div className="rounded-[16px] border border-gray-200 overflow-hidden flex h-[280px] md:h-[340px]">
                      {CORAL_SWATCHES.map((swatch) => renderSwatchColumn(swatch))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {searchQuery.trim() !== "" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredTokens.map((c) => {
            const isCopied = copiedHex === c.hex;
            const isLight = isLightBackground(c.hex);
            const swatchTextColor = getContrastTextColor(c.hex, c.textColor);

            return (
              <div
                key={c.token}
                onClick={() => handleCopy(c.hex)}
                className="group bg-white rounded-[8px] border border-gray-300 overflow-hidden cursor-pointer flex flex-col"
              >
                <div
                  className="h-28 w-full relative p-3 flex flex-col justify-between"
                  style={{
                    backgroundColor: c.hex,
                    borderBottom: isLight ? "1px solid rgba(0,0,0,0.08)" : "none",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="type-label-medium uppercase px-2 py-0.5 rounded-[6px] text-[10px] font-semibold"
                      style={{
                        backgroundColor: isLight ? "rgba(10,62,109,0.12)" : "rgba(255,255,255,0.22)",
                        color: swatchTextColor,
                      }}
                    >
                      {c.category}
                    </span>
                    <div
                      className="p-1 rounded-[6px] opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        backgroundColor: isLight ? "rgba(10,62,109,0.15)" : "rgba(255,255,255,0.3)",
                        color: swatchTextColor,
                      }}
                    >
                      {isCopied ? (
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </div>
                  </div>

                  <span
                    className="font-mono text-sm font-bold tracking-wider"
                    style={{
                      color: swatchTextColor,
                    }}
                  >
                    {c.hex}
                  </span>
                </div>

                <div className="p-4 flex flex-col flex-1 justify-between gap-2">
                  <div>
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-mono text-xs font-bold text-navy-900 truncate">
                        {c.token}
                      </span>
                      <span className="text-[11px] text-gray-500 font-medium shrink-0">
                        {c.name}
                      </span>
                    </div>
                    <p className="type-body3-regular text-gray-700 text-xs mt-1.5 line-clamp-2">
                      {c.usage}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[11px]">
                    <span className="text-gray-500 group-hover:text-navy-900 transition-colors">
                      {isCopied ? "✓ Hex Copied!" : "Click to copy hex"}
                    </span>
                    <span className="font-mono font-medium text-gray-500 group-hover:text-black">
                      {c.hex}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {searchQuery.trim() !== "" && filteredTokens.length === 0 && (
        <div className="p-12 text-center bg-white rounded-[8px] border border-gray-300">
          <p className="type-body2-regular text-gray-500">
            No color tokens matching &ldquo;{searchQuery}&rdquo;.
          </p>
        </div>
      )}
    </section>
  );
}
