"use client";

import React, { useState, useRef, useEffect } from "react";
import TokenBadge from "./TokenBadge";
import { ArrowButton } from "@/features/shared/components/ArrowButton";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  AlertCircle,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

interface DropdownOption {
  value: string;
  label: string;
}

interface CustomDropdownFieldProps {
  label: string;
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  state?: "default" | "active" | "disabled" | "success" | "error";
  errorText?: string;
  successText?: string;
  disabled?: boolean;
}

// Custom Premium Select Component (matching website ContactForm)
function CustomDropdownField({
  label,
  options,
  value,
  onChange,
  placeholder = "Select an option...",
  state = "default",
  errorText,
  successText,
  disabled = false,
}: CustomDropdownFieldProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);

  let triggerClasses = "border-[#E0E0E0] bg-[#FDFDFD] text-[#2A2728] hover:border-navy-900/40";
  let labelClasses = "text-[#403B3C]";
  let chevronColor = "text-gray-500";

  if (state === "active") {
    triggerClasses = "border-2 border-[#0A3E6D] bg-[#FDFDFD] text-[#2A2728] shadow-xs";
    labelClasses = "text-[#0A3E6D] font-medium";
    chevronColor = "text-navy-900";
  } else if (state === "disabled" || disabled) {
    triggerClasses = "border-[#E0E0E0] bg-[#E0E0E0] text-[#706E6B] cursor-not-allowed";
    labelClasses = "text-[#403B3C]";
    chevronColor = "text-gray-400";
  } else if (state === "success") {
    triggerClasses = "border border-[#5EB7A9] bg-[#FDFDFD] text-[#5EB7A9]";
    labelClasses = "text-[#5EB7A9] font-medium";
    chevronColor = "text-[#5EB7A9]";
  } else if (state === "error") {
    triggerClasses = "border border-[#BC787A] bg-[#FDFDFD] text-[#BC787A]";
    labelClasses = "text-[#BC787A] font-medium";
    chevronColor = "text-[#BC787A]";
  }

  const handleSelect = (optValue: string) => {
    if (disabled || state === "disabled") return;
    onChange(optValue);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col gap-1.5 relative" ref={containerRef}>
      <label className={`type-label-regular ${labelClasses} flex items-center justify-between`}>
        <span>{label}</span>
        {state === "success" && successText && (
          <span className="inline-flex items-center gap-1 text-[11px] text-turquoise-700">
            <CheckCircle2 className="w-3 h-3 text-[#5EB7A9]" />
            {successText}
          </span>
        )}
        {state === "error" && errorText && (
          <span className="inline-flex items-center gap-1 text-[11px] text-[#BC787A]">
            <AlertCircle className="w-3 h-3 text-[#BC787A]" />
            {errorText}
          </span>
        )}
      </label>

      <div className="relative">
        <button
          type="button"
          disabled={disabled || state === "disabled"}
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full h-[38px] px-4 py-2 rounded-[8px] border text-[14px] type-body3-medium outline-none flex items-center justify-between text-left transition-all ${triggerClasses}`}
        >
          <span className={`truncate ${!selectedOption ? "text-[#949494]" : "text-inherit"}`}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className={`shrink-0 ml-2 ${chevronColor}`}
          >
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.96 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute left-0 right-0 top-full mt-1.5 bg-white/95 backdrop-blur-md rounded-[8px] border border-gray-200 shadow-xl overflow-hidden z-[100] py-1 max-h-[220px] overflow-y-auto"
            >
              {options.map((opt) => {
                const isSelected = value === opt.value;
                return (
                  <div
                    key={opt.value}
                    onClick={() => handleSelect(opt.value)}
                    className={`px-4 py-2.5 text-[14px] cursor-pointer transition-all flex items-center justify-between hover:bg-navy-900/5 ${
                      isSelected ? "bg-navy-900/10 text-navy-900 font-semibold" : "text-gray-700"
                    }`}
                  >
                    <span>{opt.label}</span>
                    {isSelected && (
                      <motion.svg
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-navy-900 shrink-0 ml-2"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </motion.svg>
                    )}
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

const ORG_OPTIONS: DropdownOption[] = [
  { value: "enterprise", label: "Enterprise ESG Partner" },
  { value: "ngo", label: "NGO / Foundation" },
  { value: "public", label: "Government Agency" },
];

const DISABLED_OPTIONS: DropdownOption[] = [
  { value: "enterprise", label: "Immutable Account Tier" },
];

const PROJECT_OPTIONS: DropdownOption[] = [
  { value: "mangrove", label: "Mangrove Restoration (VCS-341)" },
  { value: "peatland", label: "Peatland Hydrology (VCS-280)" },
  { value: "agroforestry", label: "Community Agroforestry (VCS-112)" },
];

const COUNTRY_OPTIONS: DropdownOption[] = [
  { value: "id", label: "Indonesia (Primary Hub)" },
  { value: "sg", label: "Singapore (Regional Base)" },
  { value: "my", label: "Malaysia" },
];

const PLAYGROUND_OPTIONS: DropdownOption[] = [
  { value: "nature", label: "Nature-Based Carbon Project" },
  { value: "blue-carbon", label: "Blue Carbon Ecosystem" },
  { value: "tree-planting", label: "Tree Planting Program" },
];

export default function FormButtonsShowcase() {
  const [, setClickCount] = useState(0);
  const [interactiveInputVal, setInteractiveInputVal] = useState("contact@carbonethics.org");
  const [state1Dropdown, setState1Dropdown] = useState("");
  const [state2Dropdown, setState2Dropdown] = useState("enterprise");
  const [state3Dropdown, setState3Dropdown] = useState("enterprise");
  const [state4Dropdown, setState4Dropdown] = useState("mangrove");
  const [state5Dropdown, setState5Dropdown] = useState("");
  const [playgroundDropdown, setPlaygroundDropdown] = useState("nature");

  return (
    <section id="forms-buttons" className="scroll-mt-24 flex flex-col gap-12">
      {/* Section Header */}
      <div className="flex flex-col gap-2">
        <h2 className="type-h2-bold text-black">Button Components</h2>
        <p className="type-body2-regular text-gray-700 max-w-3xl">
          Standardized action triggers engineered with 52px heights, 20px button radiuses, signature sliding hover animations, and explicit interaction states.
        </p>
      </div>

      {/* ================= BUTTONS SHOWCASE ================= */}
      <div className="bg-white rounded-[8px] border border-gray-300 p-6 sm:p-8 flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-300 gap-4">
          <div>
            <h3 className="type-title-medium text-navy-900">Button Variants</h3>
            <p className="type-label-regular text-gray-700 mt-0.5">
              Height: 52px • Padding: 16px 24px • Radius: 20px • Font: type.body1.medium
            </p>
          </div>
          <div className="flex items-center gap-2">
            <TokenBadge label="height" value="52px" type="spacing" />
            <TokenBadge label="radius" value="20px" type="radius" />
            <TokenBadge label="font" value="18px / 500" type="typography" />
          </div>
        </div>

        {/* 4 Button Archetypes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Variant 1: Primary Button */}
          <div className="p-6 rounded-[8px] border border-gray-300 bg-gray-50 flex flex-col justify-start gap-2">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="type-body2-medium text-navy-900 font-semibold">1. Primary Button</span>
                <span className="text-xs font-mono text-gray-500">Arrow & No Arrow</span>
              </div>
              <p className="text-xs text-gray-600 mb-4">
                Primary conversion calls-to-action with horizontal sliding gradient hover animation.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-0">
                <TokenBadge label="bg" value="#0A3E6D" type="color" copyable />
                <TokenBadge label="text" value="#FDFDFD" type="color" copyable />
                <TokenBadge label="radius" value="20px" type="radius" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch gap-4 w-full mt-auto pt-4">
              {/* With Arrow */}
              <div className="flex-1 flex flex-col gap-1.5">
                <span className="text-sm font-normal uppercase tracking-wider text-gray-500">
                  ARROW
                </span>
                <ArrowButton
                  variant="navy"
                  animate
                  onClick={() => setClickCount((c) => c + 1)}
                  className="w-full !rounded-[20px] h-[52px] !text-[15px] whitespace-nowrap"
                >
                  <span>Explore Projects</span>
                </ArrowButton>
              </div>

              {/* No Arrow */}
              <div className="flex-1 flex flex-col gap-1.5">
                <span className="text-sm font-normal uppercase tracking-wider text-gray-500">
                  NO ARROW
                </span>
                <ArrowButton
                  variant="navy"
                  showArrow={false}
                  animate
                  onClick={() => setClickCount((c) => c + 1)}
                  className="w-full !rounded-[20px] h-[52px] !text-[15px] whitespace-nowrap"
                >
                  <span>Explore Projects</span>
                </ArrowButton>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-[8px] border border-gray-300 bg-navy-900 text-white flex flex-col justify-start gap-2">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="type-body2-medium text-white font-semibold">2. Secondary Button</span>
                <span className="text-xs font-mono text-white/70">Arrow & No Arrow</span>
              </div>
              <p className="text-xs text-white/80 mb-4">
                White outline on dark navy surface, sliding into solid white with navy text on hover.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-0">
                <TokenBadge label="border" value="1.5px #FDFDFD" type="color" copyable />
                <TokenBadge label="text" value="#FDFDFD" type="color" copyable />
                <TokenBadge label="hover bg" value="#FDFDFD" type="color" copyable />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch gap-4 w-full mt-auto pt-4">
              <div className="flex-1 flex flex-col gap-1.5">
                <span className="text-sm font-normal uppercase tracking-wider text-gray-300">
                  ARROW
                </span>
                <ArrowButton
                  variant="outline"
                  animate
                  onClick={() => setClickCount((c) => c + 1)}
                  className="w-full !rounded-[20px] h-[52px] !text-[15px] whitespace-nowrap"
                >
                  <span>Download Report</span>
                </ArrowButton>
              </div>

              <div className="flex-1 flex flex-col gap-1.5">
                <span className="text-sm font-normal uppercase tracking-wider text-gray-300">
                  NO ARROW
                </span>
                <ArrowButton
                  variant="outline"
                  showArrow={false}
                  animate
                  onClick={() => setClickCount((c) => c + 1)}
                  className="w-full !rounded-[20px] h-[52px] !text-[15px] whitespace-nowrap"
                >
                  <span>Download Report</span>
                </ArrowButton>
              </div>
            </div>
          </div>

          {/* Variant 3: Outline Button (White border on dark/navy background) */}
          <div className="p-6 rounded-[8px] border border-gray-300 bg-navy-900 text-white flex flex-col justify-start gap-2">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="type-body2-medium text-white font-semibold">3. Outline Button</span>
                <span className="text-xs font-mono text-white/70">Arrow & No Arrow</span>
              </div>
              <p className="text-xs text-white/80 mb-4">
                White border with transparent fill for dark surfaces, sliding into solid white on hover.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-0">
                <TokenBadge label="border" value="1.5px #FDFDFD" type="color" copyable />
                <TokenBadge label="text" value="#FDFDFD" type="color" copyable />
                <TokenBadge label="hover bg" value="#FDFDFD" type="color" copyable />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch gap-4 w-full mt-auto pt-4">
              {/* With Arrow */}
              <div className="flex-1 flex flex-col gap-1.5">
                <span className="text-sm font-normal uppercase tracking-wider text-gray-300">
                  ARROW
                </span>
                <ArrowButton
                  variant="outline"
                  animate
                  onClick={() => setClickCount((c) => c + 1)}
                  className="w-full !rounded-[20px] h-[52px] !text-[15px] whitespace-nowrap"
                >
                  <span>View Methodology</span>
                </ArrowButton>
              </div>

              {/* Without Arrow */}
              <div className="flex-1 flex flex-col gap-1.5">
                <span className="text-sm font-normal uppercase tracking-wider text-gray-300">
                  NO ARROW
                </span>
                <ArrowButton
                  variant="outline"
                  showArrow={false}
                  animate
                  onClick={() => setClickCount((c) => c + 1)}
                  className="w-full !rounded-[20px] h-[52px] !text-[15px] whitespace-nowrap"
                >
                  <span>View Methodology</span>
                </ArrowButton>
              </div>
            </div>
          </div>

          {/* Variant 4: Text Button */}
          <div className="p-6 rounded-[8px] border border-gray-300 bg-gray-50 flex flex-col justify-start gap-2">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="type-body2-medium text-navy-900 font-semibold">4. Text Button</span>
                <span className="text-xs font-mono text-gray-500">Underline & No Underline</span>
              </div>
              <p className="text-xs text-gray-600 mb-4">
                Inline link buttons with signature upward-fill or smooth sliding-in underline animations.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-0">
                <TokenBadge label="text" value="#0A3E6D" type="color" copyable />
                <TokenBadge label="underline" value="Fill Up / Slide In" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch gap-4 w-full mt-auto pt-4">
              {/* With Underline (underline-fill-link) */}
              <div className="flex-1 flex flex-col gap-1.5">
                <span className="text-sm font-normal uppercase tracking-wider text-gray-500">
                  UNDERLINE
                </span>
                <div className="h-[52px] px-4 bg-white rounded-[12px] border border-gray-200 flex items-center justify-center">
                  <a
                    href="#forms-buttons"
                    onClick={(e) => {
                      e.preventDefault();
                      setClickCount((c) => c + 1);
                    }}
                    className="underline-fill-link text-[15px] font-medium inline-flex items-center gap-1 cursor-pointer whitespace-nowrap"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4 inline-block ml-0.5 shrink-0" />
                  </a>
                </div>
              </div>

              {/* Without Underline at rest (underline-appear-link) */}
              <div className="flex-1 flex flex-col gap-1.5">
                <span className="text-sm font-normal uppercase tracking-wider text-gray-500">
                  NO UNDERLINE
                </span>
                <div className="h-[52px] px-4 bg-white rounded-[12px] border border-gray-200 flex items-center justify-center">
                  <a
                    href="#forms-buttons"
                    onClick={(e) => {
                      e.preventDefault();
                      setClickCount((c) => c + 1);
                    }}
                    className="underline-appear-link text-[#0A3E6D] text-[15px] font-medium inline-flex items-center gap-1 cursor-pointer whitespace-nowrap"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4 inline-block ml-0.5 shrink-0" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= ARCHIVED / TAKEN OUT TEMPORARILY: TEXT FIELD & DROPDOWN SHOWCASE ================= */}
      {false && (
      <div className="bg-white rounded-[8px] border border-gray-300 p-6 sm:p-8 shadow-xs flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-300 gap-4">
          <div>
            <h3 className="type-title-medium text-navy-900">Text Field & Dropdown (5 States)</h3>
            <p className="type-label-regular text-gray-700 mt-0.5">
              Radius: 8px • Padding: 16px horiz, 8px vert • Label: type.label.regular • Input: type.body3.medium
            </p>
          </div>
          <div className="flex items-center gap-2">
            <TokenBadge label="radius" value="8px" type="radius" />
            <TokenBadge label="label" value="12px / 400" type="typography" />
            <TokenBadge label="input" value="14px / 500" type="typography" />
          </div>
        </div>

        {/* 5 States Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* State 1: Default */}
          <div className="p-5 rounded-[8px] border border-gray-300 bg-white flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="type-body3-medium text-navy-900 font-semibold">State 1: Default</span>
              <TokenBadge label="border" value="#E0E0E0" type="color" />
            </div>

            {/* Input */}
            <div className="flex flex-col gap-1.5">
              <label className="type-label-regular text-[#403B3C]">
                Corporate Email Address
              </label>
              <input
                type="email"
                defaultValue=""
                placeholder="name@company.com"
                className="h-[38px] px-4 py-2 rounded-[8px] border border-[#E0E0E0] bg-[#FDFDFD] text-[#2A2728] placeholder-[#949494] type-body3-medium focus:outline-none focus:border-[#0A3E6D] transition-colors"
              />
            </div>

            {/* Custom Select Dropdown */}
            <CustomDropdownField
              label="Organization Type"
              options={ORG_OPTIONS}
              value={state1Dropdown}
              onChange={setState1Dropdown}
              placeholder="Select organization..."
              state="default"
            />
          </div>

          {/* State 2: Active / Focused */}
          <div className="p-5 rounded-[8px] border border-navy-900 bg-frost-100 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="type-body3-medium text-navy-900 font-semibold">State 2: Active / Focused</span>
              <TokenBadge label="border" value="#0A3E6D" type="color" />
            </div>

            {/* Input */}
            <div className="flex flex-col gap-1.5">
              <label className="type-label-regular text-[#0A3E6D] font-medium">
                Corporate Email Address
              </label>
              <input
                type="email"
                defaultValue="joshua@carbonethics.org"
                className="h-[38px] px-4 py-2 rounded-[8px] border-2 border-[#0A3E6D] bg-[#FDFDFD] text-[#2A2728] type-body3-medium focus:outline-none shadow-xs"
              />
            </div>

            {/* Custom Select Dropdown */}
            <CustomDropdownField
              label="Organization Type"
              options={ORG_OPTIONS}
              value={state2Dropdown}
              onChange={setState2Dropdown}
              placeholder="Select organization..."
              state="active"
            />
          </div>

          {/* State 3: Disabled */}
          <div className="p-5 rounded-[8px] border border-gray-300 bg-gray-100 flex flex-col gap-4 opacity-80">
            <div className="flex items-center justify-between">
              <span className="type-body3-medium text-gray-500 font-semibold">State 3: Disabled</span>
              <TokenBadge label="bg" value="#E0E0E0" type="color" />
            </div>

            {/* Input */}
            <div className="flex flex-col gap-1.5">
              <label className="type-label-regular text-[#403B3C]">
                Corporate Email Address
              </label>
              <input
                disabled
                defaultValue="locked-account@partner.org"
                className="h-[38px] px-4 py-2 rounded-[8px] border border-[#E0E0E0] bg-[#E0E0E0] text-[#403B3C] type-body3-medium cursor-not-allowed"
              />
            </div>

            {/* Custom Select Dropdown */}
            <CustomDropdownField
              label="Organization Type"
              options={DISABLED_OPTIONS}
              value={state3Dropdown}
              onChange={setState3Dropdown}
              placeholder="Select organization..."
              state="disabled"
              disabled
            />
          </div>

          {/* State 4: Success */}
          <div className="p-5 rounded-[8px] border border-turquoise-500 bg-turquoise-100/40 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="type-body3-medium text-turquoise-700 font-semibold">State 4: Success</span>
              <TokenBadge label="border/text" value="#5EB7A9" type="color" />
            </div>

            {/* Input */}
            <div className="flex flex-col gap-1.5">
              <label className="type-label-regular text-[#5EB7A9] font-medium flex items-center justify-between">
                <span>Corporate Email Address</span>
                <span className="inline-flex items-center gap-1 text-[11px] text-turquoise-700">
                  <CheckCircle2 className="w-3 h-3 text-[#5EB7A9]" />
                  Verified
                </span>
              </label>
              <input
                type="email"
                defaultValue="verified.client@esg.org"
                className="h-[38px] px-4 py-2 rounded-[8px] border border-[#5EB7A9] bg-[#FDFDFD] text-[#5EB7A9] type-body3-medium focus:outline-none"
              />
            </div>

            {/* Custom Select Dropdown */}
            <CustomDropdownField
              label="Verified Project Category"
              options={PROJECT_OPTIONS}
              value={state4Dropdown}
              onChange={setState4Dropdown}
              placeholder="Select project..."
              state="success"
              successText="Verified"
            />
          </div>

          {/* State 5: Error */}
          <div className="p-5 rounded-[8px] border border-coral-500 bg-coral-100/40 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="type-body3-medium text-coral-700 font-semibold">State 5: Error</span>
              <TokenBadge label="border/text" value="#BC787A" type="color" />
            </div>

            {/* Input */}
            <div className="flex flex-col gap-1.5">
              <label className="type-label-regular text-[#BC787A] font-medium flex items-center justify-between">
                <span>Corporate Email Address</span>
                <span className="inline-flex items-center gap-1 text-[11px] text-[#BC787A]">
                  <AlertCircle className="w-3 h-3 text-[#BC787A]" />
                  Invalid Domain
                </span>
              </label>
              <input
                type="email"
                defaultValue="invalid-format-missing-at"
                className="h-[38px] px-4 py-2 rounded-[8px] border border-[#BC787A] bg-[#FDFDFD] text-[#BC787A] type-body3-medium focus:outline-none"
              />
            </div>

            {/* Custom Select Dropdown */}
            <CustomDropdownField
              label="Country Selection Required"
              options={COUNTRY_OPTIONS}
              value={state5Dropdown}
              onChange={setState5Dropdown}
              placeholder="Please select a target country"
              state="error"
              errorText="Required"
            />
          </div>

          {/* Interactive Live Playground */}
          <div className="p-5 rounded-[8px] border border-frost-400 bg-frost-100 flex flex-col justify-between gap-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="type-body3-medium text-navy-900 font-semibold">Live Input Playground</span>
                <span className="text-[10px] font-mono bg-white px-2 py-0.5 rounded border border-gray-300 text-navy-900">
                  Interactive
                </span>
              </div>
              <p className="text-xs text-gray-700">
                Type in real-time to preview dynamic focus ring transitions and responsive state formatting.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="type-label-regular text-navy-900 font-medium">
                  Test Live Field
                </label>
                <input
                  type="text"
                  value={interactiveInputVal}
                  onChange={(e) => setInteractiveInputVal(e.target.value)}
                  className="h-[38px] px-4 py-2 rounded-[8px] border border-[#0A3E6D] bg-white text-black type-body3-medium focus:ring-2 focus:ring-[#0A3E6D]/20 focus:outline-none"
                />
              </div>

              <CustomDropdownField
                label="Test Custom Dropdown"
                options={PLAYGROUND_OPTIONS}
                value={playgroundDropdown}
                onChange={setPlaygroundDropdown}
                placeholder="Choose program..."
                state="default"
              />
            </div>

            <div className="text-[11px] text-gray-500 font-mono flex flex-col gap-0.5">
              <span>Text: {interactiveInputVal || "(empty)"}</span>
              <span>Dropdown: {playgroundDropdown}</span>
            </div>
          </div>
        </div>
      </div>
      )}
    </section>
  );
}
