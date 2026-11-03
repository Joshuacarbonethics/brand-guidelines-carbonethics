"use client";

import React, { useState, useRef, useEffect } from "react";
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

function CopyHexIndicator({
  isCopied,
  textColor,
  size = "md",
  compactOnMobile = false,
}: {
  isCopied: boolean;
  textColor?: string;
  size?: "sm" | "md" | "lg";
  compactOnMobile?: boolean;
}) {
  const sizeClasses = {
    sm: "text-[10px] md:text-[11.5px] gap-1",
    md: "text-xs md:text-[13px] gap-1.5",
    lg: "text-xs md:text-sm gap-1.5",
  }[size];

  const iconSizes = {
    sm: "w-3 h-3 md:w-3.5 md:h-3.5",
    md: "w-3.5 h-3.5 md:w-4 md:h-4",
    lg: "w-3.5 h-3.5 md:w-4 md:h-4",
  }[size];

  return (
    <div className="relative flex items-center justify-center overflow-hidden py-0.5 select-none bg-transparent">
      <AnimatePresence mode="popLayout" initial={false}>
        {isCopied ? (
          <motion.span
            key="copied"
            initial={{ y: 14, opacity: 0, filter: "blur(2px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: -14, opacity: 0, filter: "blur(2px)" }}
            transition={{ type: "spring", stiffness: 450, damping: 26, mass: 0.6 }}
            className={`font-mono font-bold tracking-wider whitespace-nowrap inline-flex items-center justify-center ${sizeClasses}`}
            style={textColor ? { color: textColor } : undefined}
          >
            <motion.span
              initial={{ scale: 0, rotate: -25 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 20, delay: 0.04 }}
              className="inline-flex items-center justify-center"
            >
              <Check className={`${iconSizes} stroke-[3] shrink-0`} />
            </motion.span>
            <span className={compactOnMobile ? "hidden md:inline" : ""}>COPIED!</span>
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            initial={{ y: 14, opacity: 0, filter: "blur(2px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: -14, opacity: 0, filter: "blur(2px)" }}
            transition={{ type: "spring", stiffness: 450, damping: 26, mass: 0.6 }}
            className={`font-mono font-bold tracking-wider whitespace-nowrap inline-flex items-center justify-center ${sizeClasses}`}
            style={textColor ? { color: textColor } : undefined}
          >
            <Copy className={`${iconSizes} stroke-[2.2] shrink-0 opacity-80`} />
            <span className={compactOnMobile ? "hidden md:inline" : ""}>COPY HEX</span>
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
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
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleCopy = (hex: string) => {
    try {
      navigator.clipboard.writeText(hex);
    } catch {
      // Fallback if clipboard API is restricted
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setCopiedHex(hex);

    timeoutRef.current = setTimeout(() => {
      setCopiedHex(null);
      timeoutRef.current = null;
    }, 1500);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

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

  const renderSwatchColumn = (swatch: SwatchItem, isDenseRow = false) => {
    const hexDisplay = swatch.hex.replace("#", "");
    const isCopied = copiedHex === swatch.hex;

    return (
      <button
        key={swatch.step}
        type="button"
        onClick={() => handleCopy(swatch.hex)}
        title={`Click to copy ${swatch.hex}`}
        className="group relative flex-1 min-w-0 h-full cursor-pointer focus:outline-none hover:z-10 first:rounded-l-[14px] last:rounded-r-[14px]"
      >
        {/* Expanding Color Card */}
        <div
          className="absolute inset-0 rounded-[inherit] transition-all duration-300 ease-out group-hover:-top-2 group-hover:-bottom-1 group-hover:-inset-x-1 pointer-events-none"
          style={{ backgroundColor: swatch.hex }}
        />

        {/* Content Layer */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between items-center pt-2.5 md:pt-3 pb-2.5 md:pb-3.5 transition-transform duration-300 ease-out group-hover:-translate-y-2 [backface-visibility:hidden] [transform:translateZ(0)]">
          <div className="relative h-6 w-full flex items-center justify-center px-0.5">
            {swatch.badge ? (
              <span
                className={`px-1 md:px-1.5 py-0.5 rounded-full bg-white text-[#15151E] ${
                  isDenseRow ? "text-[6.5px] sm:text-[7.5px] md:text-[8.5px]" : "text-[7.5px] md:text-[9px]"
                } font-bold tracking-wider uppercase whitespace-nowrap max-w-full truncate transition-opacity duration-200 ${
                  isCopied ? "opacity-0" : "group-hover:opacity-0"
                }`}
              >
                {swatch.badge}
              </span>
            ) : null}

            {/* COPY HEX / COPIED inside container */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 pointer-events-none ${
                isCopied ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            >
              <CopyHexIndicator
                isCopied={isCopied}
                textColor={swatch.textColor}
                size="sm"
                compactOnMobile={isDenseRow}
              />
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <span
              className="rotate-90 select-none font-mono font-medium text-[11px] md:text-xs tracking-wider uppercase"
              style={{ color: swatch.textColor }}
            >
              {hexDisplay}
            </span>
          </div>

          <div className="h-5 flex items-center justify-center">
            <span
              className="font-sans font-medium text-[11px] md:text-xs select-none"
              style={{ color: swatch.textColor }}
            >
              {swatch.step}
            </span>
          </div>
        </div>
      </button>
    );
  };

  const renderTopRow = () => (
    <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-stretch">
      {/* Navy - Brand Color */}
      <div className="w-full sm:flex-[2] lg:flex-[3] flex flex-col">
        <div className="w-full border-t border-[#C7CAD1]/60 shrink-0 h-0 mb-2.5" />
        <p className="text-[13.5px] md:text-[15px] text-[#606060] font-normal mb-2.5">
          Name: <span className="font-semibold text-black">Navy</span>
        </p>
        <button
          type="button"
          onClick={() => handleCopy("#0A3E6D")}
          title="Click to copy #0A3E6D"
          className="group relative w-full h-[180px] sm:h-[200px] lg:h-[215px] cursor-pointer focus:outline-none hover:z-10 rounded-[15px]"
        >
          {/* Expanding Navy Background */}
          <div className="absolute inset-0 bg-[#0A3E6D] rounded-[inherit] transition-all duration-300 ease-out group-hover:-top-2 group-hover:-bottom-1 group-hover:-inset-x-1 pointer-events-none" />

          {/* Content Layer */}
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out group-hover:-translate-y-2 [backface-visibility:hidden] [transform:translateZ(0)]">
            <div
              className={`absolute top-4 left-1/2 -translate-x-1/2 transition-opacity duration-200 pointer-events-none ${
                copiedHex === "#0A3E6D" ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            >
              <CopyHexIndicator
                isCopied={copiedHex === "#0A3E6D"}
                textColor="#FFFFFF"
                size="lg"
              />
            </div>

            <span className="px-2.5 py-0.5 rounded-full bg-white text-[#15151E] text-[10.5px] font-semibold uppercase tracking-wider mb-2">
              BRAND COLOR
            </span>
            <span className="font-mono text-2xl md:text-3xl font-medium text-white tracking-wider">
              0A3E6D
            </span>
          </div>
        </button>
      </div>

      {/* Neutral - White and Black */}
      <div className="w-full sm:flex-[1] flex flex-col">
        <div className="w-full border-t border-[#C7CAD1]/60 shrink-0 h-0 mb-2.5" />
        <p className="text-[13.5px] md:text-[15px] text-[#606060] font-normal mb-2.5">
          Name: <span className="font-semibold text-black">Neutral</span>
        </p>
        <div className="w-full h-[180px] sm:h-[200px] lg:h-[215px] rounded-[15px] border border-gray-200 flex relative">
          <button
            type="button"
            onClick={() => handleCopy("#FDFDFD")}
            title="Click to copy #FDFDFD"
            className="group relative flex-1 h-full cursor-pointer focus:outline-none hover:z-10 rounded-l-[14px]"
          >
            <div className="absolute inset-0 bg-[#FDFDFD] rounded-[inherit] transition-all duration-300 ease-out group-hover:-top-2 group-hover:-bottom-1 group-hover:-inset-x-1 pointer-events-none" />

            <div className="relative z-10 w-full h-full flex flex-col justify-between items-center pt-3 pb-3 transition-transform duration-300 ease-out group-hover:-translate-y-2 [backface-visibility:hidden] [transform:translateZ(0)]">
              <div className="relative h-6 w-full flex items-center justify-center">
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 pointer-events-none ${
                    copiedHex === "#FDFDFD" ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  <CopyHexIndicator
                    isCopied={copiedHex === "#FDFDFD"}
                    textColor="#15151E"
                    size="sm"
                  />
                </div>
              </div>

              <div className="flex-1 flex items-center justify-center">
                <span className="rotate-90 select-none font-mono font-medium text-[11px] md:text-xs tracking-wider uppercase text-[#2A2728]">
                  FDFDFD
                </span>
              </div>
              <span className="font-sans font-medium text-[11px] md:text-xs text-[#2A2728]">
                White
              </span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => handleCopy("#2A2728")}
            title="Click to copy #2A2728"
            className="group relative flex-1 h-full cursor-pointer focus:outline-none hover:z-10 rounded-r-[14px]"
          >
            <div className="absolute inset-0 bg-[#2A2728] rounded-[inherit] transition-all duration-300 ease-out group-hover:-top-2 group-hover:-bottom-1 group-hover:-inset-x-1 pointer-events-none" />

            <div className="relative z-10 w-full h-full flex flex-col justify-between items-center pt-3 pb-3 transition-transform duration-300 ease-out group-hover:-translate-y-2 [backface-visibility:hidden] [transform:translateZ(0)]">
              <div className="relative h-6 w-full flex items-center justify-center">
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 pointer-events-none ${
                    copiedHex === "#2A2728" ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                >
                  <CopyHexIndicator
                    isCopied={copiedHex === "#2A2728"}
                    textColor="#FFFFFF"
                    size="sm"
                  />
                </div>
              </div>

              <div className="flex-1 flex items-center justify-center">
                <span className="rotate-90 select-none font-mono font-medium text-[11px] md:text-xs tracking-wider uppercase text-white">
                  2A2728
                </span>
              </div>
              <span className="font-sans font-medium text-[11px] md:text-xs text-white">
                Black
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section id="colors" className="scroll-mt-24">
      <div className="flex flex-col gap-1.5 mb-5">
        <h1 className="text-[26px] sm:text-[30px] lg:text-[34px] font-bold tracking-tight leading-tight text-black">
          Color Tokens &amp; Swatches
        </h1>
        <p className="text-[14px] sm:text-[15px] leading-relaxed text-gray-700 max-w-3xl">
          The palette is inspired by coastal landscapes, oceanic navy waters, and coastal mangroves. Click any swatch or Hex code to copy directly to your clipboard.
        </p>
      </div>

      <div className="sticky top-[47px] lg:top-0 z-20 bg-[#FFFFFF]/95 backdrop-blur-md py-2.5 mb-5 border-b border-gray-100">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-[20px] text-xs font-medium shrink-0 border transition-colors cursor-pointer ${
                    isActive
                      ? "bg-navy-900 text-white border-navy-900"
                      : "bg-white text-gray-700 border-gray-300 hover:border-navy-900 hover:text-navy-900"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="relative sm:w-[240px]">
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

      {searchQuery.trim() === "" && (
        <div className="relative z-0 space-y-6 sm:space-y-8">
          {renderTopRow()}

          <AnimatePresence mode="popLayout" initial={false}>
            {selectedCategory === "Main" ? (
              <motion.div
                key="main-swatches-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 items-start"
              >
                <motion.div
                  layoutId="block-frost-blue"
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full"
                >
                  <div className="w-full border-t border-[#C7CAD1]/60 shrink-0 h-0 mb-2.5" />
                  <p className="text-[13.5px] md:text-[15px] text-[#606060] font-normal mb-2.5">
                    Name: <span className="font-semibold text-black">Frost Blue</span>
                  </p>
                  <div className="rounded-[15px] border border-gray-200 flex relative h-[175px] sm:h-[195px] lg:h-[205px]">
                    {MAIN_FROST_BLUE_SWATCHES.map((swatch) => renderSwatchColumn(swatch))}
                  </div>
                </motion.div>

                <motion.div
                  layoutId="block-sands"
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full"
                >
                  <div className="w-full border-t border-[#C7CAD1]/60 shrink-0 h-0 mb-2.5" />
                  <p className="text-[13.5px] md:text-[15px] text-[#606060] font-normal mb-2.5">
                    Name: <span className="font-semibold text-black">Sands</span>
                  </p>
                  <div className="rounded-[15px] border border-gray-200 flex relative h-[175px] sm:h-[195px] lg:h-[205px]">
                    {MAIN_SANDS_SWATCHES.map((swatch) => renderSwatchColumn(swatch))}
                  </div>
                </motion.div>

                <motion.div
                  layoutId="block-gray"
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full"
                >
                  <div className="w-full border-t border-[#C7CAD1]/60 shrink-0 h-0 mb-2.5" />
                  <p className="text-[13.5px] md:text-[15px] text-[#606060] font-normal mb-2.5">
                    Name: <span className="font-semibold text-black">Gray</span>
                  </p>
                  <div className="rounded-[15px] border border-gray-200 flex relative h-[175px] sm:h-[195px] lg:h-[205px]">
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
                className="space-y-6 sm:space-y-8"
              >
                <motion.div
                  layoutId="block-frost-blue"
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full"
                >
                  <div className="w-full border-t border-[#C7CAD1]/60 shrink-0 h-0 mb-2.5" />
                  <p className="text-[13.5px] md:text-[15px] text-[#606060] font-normal mb-2.5">
                    Name: <span className="font-semibold text-black">Frost Blue</span>
                  </p>
                  <div className="rounded-[15px] border border-gray-200 flex relative h-[185px] sm:h-[200px] lg:h-[215px]">
                    {ALL_FROST_BLUE_SWATCHES.map((swatch) => renderSwatchColumn(swatch, true))}
                  </div>
                </motion.div>

                <motion.div
                  layoutId="block-sands"
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full"
                >
                  <div className="w-full border-t border-[#C7CAD1]/60 shrink-0 h-0 mb-2.5" />
                  <p className="text-[13.5px] md:text-[15px] text-[#606060] font-normal mb-2.5">
                    Name: <span className="font-semibold text-black">Sands</span>
                  </p>
                  <div className="rounded-[15px] border border-gray-200 flex relative h-[185px] sm:h-[200px] lg:h-[215px]">
                    {ALL_SANDS_SWATCHES.map((swatch) => renderSwatchColumn(swatch, true))}
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 items-start">
                  <motion.div
                    layoutId="block-gray"
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full"
                  >
                    <div className="w-full border-t border-[#C7CAD1]/60 shrink-0 h-0 mb-2.5" />
                    <p className="text-[13.5px] md:text-[15px] text-[#606060] font-normal mb-2.5">
                      Name: <span className="font-semibold text-black">Gray</span>
                    </p>
                    <div className="rounded-[15px] border border-gray-200 flex relative h-[175px] sm:h-[195px] lg:h-[205px]">
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
                    <div className="w-full border-t border-[#C7CAD1]/60 shrink-0 h-0 mb-2.5" />
                    <p className="text-[13.5px] md:text-[15px] text-[#606060] font-normal mb-2.5">
                      Name: <span className="font-semibold text-black">Turquoise</span>
                    </p>
                    <div className="rounded-[15px] border border-gray-200 flex relative h-[175px] sm:h-[195px] lg:h-[205px]">
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
                    <div className="w-full border-t border-[#C7CAD1]/60 shrink-0 h-0 mb-2.5" />
                    <p className="text-[13.5px] md:text-[15px] text-[#606060] font-normal mb-2.5">
                      Name: <span className="font-semibold text-black">Coral</span>
                    </p>
                    <div className="rounded-[15px] border border-gray-200 flex relative h-[175px] sm:h-[195px] lg:h-[205px]">
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
        <div className="relative z-0 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredTokens.map((c) => {
            const isCopied = copiedHex === c.hex;
            const isLight = isLightBackground(c.hex);
            const swatchTextColor = getContrastTextColor(c.hex, c.textColor);

            return (
              <div
                key={c.token}
                onClick={() => handleCopy(c.hex)}
                className="group relative bg-white rounded-[10px] border border-gray-300 overflow-hidden cursor-pointer flex flex-col transition-all duration-200 hover:-translate-y-0.5 hover:border-navy-900"
              >
                <div
                  className="h-24 w-full relative p-3 flex flex-col justify-between"
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

                <div className="p-3.5 flex flex-col flex-1 justify-between gap-2">
                  <div>
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-mono text-xs font-bold text-navy-900 truncate">
                        {c.token}
                      </span>
                      <span className="text-[11px] text-gray-500 font-medium shrink-0">
                        {c.name}
                      </span>
                    </div>
                    <p className="type-body3-regular text-gray-700 text-xs mt-1 line-clamp-2">
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
        <div className="p-10 text-center bg-white rounded-[10px] border border-gray-300">
          <p className="text-sm text-gray-500">
            No color tokens matching &ldquo;{searchQuery}&rdquo;.
          </p>
        </div>
      )}
    </section>
  );
}
