"use client";

import React from "react";
import TokenBadge from "./TokenBadge";
import { ArrowButton } from "@/features/shared/components/ArrowButton";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  TreePine,
  Sparkles,
  TrendingUp,
  MapPin,
  Calendar,
} from "lucide-react";

export default function CardShowcase() {
  return (
    <section id="cards" className="scroll-mt-24 flex flex-col gap-12">
      {/* Section Header */}
      <div className="flex flex-col gap-2">
        <h2 className="type-h2-bold text-black">8 Standardized Card Archetypes</h2>
        <p className="type-body2-regular text-gray-700 max-w-3xl">
          Modular card designs for varied content densities, data visualization, hero highlights, and conversion funnels across desktop and mobile.
        </p>
      </div>

      {/* ================= CARD 1: IMAGE OVERLAY ================= */}
      <div className="bg-white rounded-[8px] border border-gray-300 p-6 sm:p-8 shadow-xs flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-200 gap-2">
          <div>
            <h3 className="type-title-medium text-navy-900">1. Card / Image (Image Overlay)</h3>
            <p className="type-label-regular text-gray-700">
              Full bleed image • Gradient overlay • Min-h 200px • Padding 16px • Radius 8px • White text
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <TokenBadge label="overlay" value="rgba(42,39,40,0.75)" type="color" />
            <TokenBadge label="radius" value="8px" type="radius" />
            <TokenBadge label="padding" value="16px" type="spacing" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Card Instance */}
          <div
            className="relative min-h-[240px] rounded-[8px] overflow-hidden p-4 flex flex-col justify-end shadow-md group cursor-pointer"
            style={{
              backgroundImage: "url('/image/website/about-us/1.webp'), url('https://images.unsplash.com/photo-1544365558-35aa4afcf11f?auto=format&fit=crop&w=800&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Gradient Overlay */}
            <div
              className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-90"
              style={{
                background: "linear-gradient(transparent, rgba(42, 39, 40, 0.75))",
              }}
            />

            {/* Content Area */}
            <div className="relative z-10 text-[#FDFDFD] flex flex-col gap-1.5">
              <span className="type-label-medium uppercase text-sand-300 tracking-wider">
                Mangrove Ecosystems
              </span>
              <h4 className="type-h4 text-[#FDFDFD] font-semibold drop-shadow-xs">
                Restoring Coastal Biodiversity in Karimunjawa
              </h4>
              <p className="type-body3-regular text-gray-200 line-clamp-2">
                Empowering island coastal communities to protect blue carbon stocks and nursery habitats.
              </p>
            </div>
          </div>

          {/* Specs breakdown */}
          <div className="bg-gray-50 rounded-[8px] p-5 border border-gray-200 flex flex-col justify-between text-xs text-gray-700">
            <div>
              <span className="font-semibold text-black uppercase tracking-wider text-[11px] block mb-2">
                Implementation Specs
              </span>
              <ul className="space-y-2 font-mono text-[11px]">
                <li>• Container: <code className="text-navy-900 bg-white px-1.5 py-0.5 rounded border border-gray-300">min-height: 200px; border-radius: 8px; padding: 16px;</code></li>
                <li>• Gradient: <code className="text-navy-900 bg-white px-1.5 py-0.5 rounded border border-gray-300">linear-gradient(transparent, rgba(42,39,40,0.75))</code></li>
                <li>• Typography: Title in <code className="text-navy-900 bg-white px-1.5 py-0.5 rounded border border-gray-300">type.h4</code> (24px/500), body in <code className="text-navy-900 bg-white px-1.5 py-0.5 rounded border border-gray-300">type.body3.regular</code></li>
                <li>• Color: White text (#FDFDFD) with high-contrast legibility over photos</li>
              </ul>
            </div>
            <div className="pt-3 border-t border-gray-200 text-gray-500">
              Use for high-impact visual stories, photo-led articles, and field report cards.
            </div>
          </div>
        </div>
      </div>

      {/* ================= CARD 2: IMAGE + CONTAINER ================= */}
      <div className="bg-white rounded-[8px] border border-gray-300 p-6 sm:p-8 shadow-xs flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-200 gap-2">
          <div>
            <h3 className="type-title-medium text-navy-900">2. Card / Image + Container</h3>
            <p className="type-label-regular text-gray-700">
              Top image (180-220px) • Bottom container white (#FDFDFD) • Border #E0E0E0 • Eyebrow #949494 • Accent badge #5EB7A9 • CTA #0A3E6D
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <TokenBadge label="badge" value="#5EB7A9" type="color" />
            <TokenBadge label="cta" value="#0A3E6D" type="color" />
            <TokenBadge label="border" value="#E0E0E0" type="color" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {/* Card Component Preview */}
          <div className="bg-[#FDFDFD] rounded-[8px] border border-[#E0E0E0] overflow-hidden shadow-xs hover:border-navy-900 transition-all flex flex-col">
            {/* Top Image */}
            <div
              className="h-[200px] w-full bg-cover bg-[center_20%] relative"
              style={{
                backgroundImage: "url('/image/website/about-us/10.webp?v=1'), url('https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=600&q=80')",
              }}
            >
              <span className="absolute top-3 right-3 bg-[#0A3E6D] text-white text-[11px] font-semibold px-2.5 py-1 rounded-[8px] shadow-xs">
                Verified VCUs
              </span>
            </div>

            {/* Bottom Container */}
            <div className="p-4 flex flex-col flex-1 justify-between gap-3 bg-[#FDFDFD]">
              <div>
                <span className="type-label-medium uppercase text-[#949494] tracking-wider block mb-1">
                  Nature-Based Carbon Project
                </span>
                <h4 className="type-title-medium text-[#2A2728] font-semibold line-clamp-1">
                  Sungkai Peatland Hydrology Restoration
                </h4>
                <p className="type-body3-regular text-gray-700 mt-1 line-clamp-2">
                  Rewetting dry peat canals and re-vegetating endemic native swamp tree species.
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-gray-500 font-mono">ID: NBCP-042</span>
                <button className="type-body2-medium text-[#0A3E6D] hover:underline inline-flex items-center gap-1 font-semibold">
                  <span>View Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Specs note */}
          <div className="md:col-span-1 lg:col-span-2 bg-gray-50 rounded-[8px] p-5 border border-gray-200 flex flex-col justify-between text-xs text-gray-700">
            <div>
              <span className="font-semibold text-black uppercase tracking-wider text-[11px] block mb-2">
                Component Token Mapping
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-[11px]">
                <div className="bg-white p-3 rounded-[6px] border border-gray-200">
                  <span className="text-gray-500 block mb-1">Top Media:</span>
                  Height: 180px–220px fixed, cover ratio.
                </div>
                <div className="bg-white p-3 rounded-[6px] border border-gray-200">
                  <span className="text-gray-500 block mb-1">Surface & Border:</span>
                  Bg: #FDFDFD, Border: #E0E0E0 (1px).
                </div>
                <div className="bg-white p-3 rounded-[6px] border border-gray-200">
                  <span className="text-gray-500 block mb-1">Eyebrow & Title:</span>
                  Eyebrow: #949494, Title: #2A2728 (type.title.medium).
                </div>
                <div className="bg-white p-3 rounded-[6px] border border-gray-200">
                  <span className="text-gray-500 block mb-1">Badges & Links:</span>
                  Accent Badge: #5EB7A9, CTA Link: #0A3E6D.
                </div>
              </div>
            </div>
            <p className="text-gray-500 mt-3 pt-2 border-t border-gray-200">
              Optimal for carbon project grids, CSR package lists, and knowledge publication articles.
            </p>
          </div>
        </div>
      </div>

      {/* ================= CARD 3: FLAT ================= */}
      <div className="bg-white rounded-[8px] border border-gray-300 p-6 sm:p-8 shadow-xs flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-200 gap-2">
          <div>
            <h3 className="type-title-medium text-navy-900">3. Card / Flat</h3>
            <p className="type-label-regular text-gray-700">
              Bg #FDFDFD • Border 0.5px #E0E0E0 • Padding 24px • Radius 8px • Icon 40x40px (#0A3E6D) • Title type.h4 • Desc type.body2.regular • CTA type.body2.medium
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <TokenBadge label="border" value="0.5px #E0E0E0" type="color" />
            <TokenBadge label="icon" value="40x40px" type="spacing" />
            <TokenBadge label="padding" value="24px" type="spacing" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {/* Flat Card Instance 1 */}
          <div className="bg-[#FDFDFD] border-[0.5px] border-[#E0E0E0] rounded-[8px] p-6 shadow-xs hover:border-navy-900 hover:shadow-md transition-all flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              <div className="w-[40px] h-[40px] rounded-[8px] bg-frost-200 text-[#0A3E6D] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="type-h4 text-[#2A2728] font-medium">
                Digital MRV System
              </h4>
              <p className="type-body2-regular text-gray-700">
                Continuous satellite telemetry, drone photogrammetry, and verifiable blockchain tracking data.
              </p>
            </div>
            <a href="#cards" className="type-body2-medium text-[#0A3E6D] hover:underline inline-flex items-center gap-1.5">
              <span>Learn about MRV</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Flat Card Instance 2 */}
          <div className="bg-[#FDFDFD] border-[0.5px] border-[#E0E0E0] rounded-[8px] p-6 shadow-xs hover:border-navy-900 hover:shadow-md transition-all flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              <div className="w-[40px] h-[40px] rounded-[8px] bg-frost-200 text-[#0A3E6D] flex items-center justify-center shrink-0">
                <TreePine className="w-5 h-5" />
              </div>
              <h4 className="type-h4 text-[#2A2728] font-medium">
                Biodiversity Safeguards
              </h4>
              <p className="type-body2-regular text-gray-700">
                Protecting endangered fauna and IUCN red-listed flora across all restoration zones.
              </p>
            </div>
            <a href="#cards" className="type-body2-medium text-[#0A3E6D] hover:underline inline-flex items-center gap-1.5">
              <span>Explore Safeguards</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Flat Card Instance 3 */}
          <div className="bg-[#FDFDFD] border-[0.5px] border-[#E0E0E0] rounded-[8px] p-6 shadow-xs hover:border-navy-900 hover:shadow-md transition-all flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              <div className="w-[40px] h-[40px] rounded-[8px] bg-frost-200 text-[#0A3E6D] flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="type-h4 text-[#2A2728] font-medium">
                High-Integrity Carbon
              </h4>
              <p className="type-body2-regular text-gray-700">
                Independently audited credits with strict additionality, permanence, and co-benefits.
              </p>
            </div>
            <a href="#cards" className="type-body2-medium text-[#0A3E6D] hover:underline inline-flex items-center gap-1.5">
              <span>View Carbon Standards</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* ================= CARD 4: HORIZONTAL FULL WIDTH ================= */}
      <div className="bg-white rounded-[8px] border border-gray-300 p-6 sm:p-8 shadow-xs flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-200 gap-2">
          <div>
            <h3 className="type-title-medium text-navy-900">4. Card / Horizontal Full Width</h3>
            <p className="type-label-regular text-gray-700">
              Left image (320-360px desktop, stack mobile) • Right content padding 24px • Title type.h3 • Pill tags (bg #F5F5F5, radius 8px) • Desc type.body2.regular • Primary Button
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <TokenBadge label="title" value="type.h3 (32px)" type="typography" />
            <TokenBadge label="pills" value="bg #F5F5F5" type="color" />
            <TokenBadge label="padding" value="24px" type="spacing" />
          </div>
        </div>

        {/* Horizontal Card Component */}
        <div className="bg-[#FDFDFD] rounded-[8px] border border-[#E0E0E0] overflow-hidden shadow-xs hover:border-navy-900 transition-all flex flex-col md:flex-row items-stretch">
          {/* Left Image (320-360px desktop) */}
          <div
            className="w-full md:w-[340px] shrink-0 min-h-[220px] md:min-h-[300px] bg-cover bg-center"
            style={{
              backgroundImage: "url('/image/website/about-us/11.webp'), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80')",
            }}
          />

          {/* Right Content */}
          <div className="p-6 md:p-8 flex flex-col justify-between flex-1 gap-6">
            <div className="flex flex-col gap-3">
              {/* Pill Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-[8px] bg-[#E6D29E] text-[#0A3E6D] text-xs font-semibold shadow-2xs">
                  Blue Carbon
                </span>
                <span className="px-3 py-1 rounded-[8px] bg-[#E6D29E] text-[#0A3E6D] text-xs font-semibold shadow-2xs">
                  Verra Verified VCS
                </span>
                <span className="px-3 py-1 rounded-[8px] bg-[#E6D29E] text-[#0A3E6D] text-xs font-semibold shadow-2xs">
                  SDG 13 • 14 • 15
                </span>
              </div>

              {/* Title */}
              <h3 className="type-h3 text-black font-medium">
                North Sumatra Coastal Mangrove Biosphere Program
              </h3>

              {/* Description */}
              <p className="type-body2-regular text-gray-700 max-w-2xl">
                Restoring over 4,500 hectares of degraded mangrove coastline to mitigate coastal abrasion, support artisanal fisherfolk cooperatives, and capture up to 1.8 million metric tons of CO2 equivalent over 30 years.
              </p>
            </div>

            {/* Action Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 border-t border-gray-100 gap-4">
              <div className="flex items-center gap-6 text-xs text-gray-500 font-mono">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-navy-900" />
                  Langkat, North Sumatra
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-navy-900" />
                  30-Year Crediting Period
                </span>
              </div>

              {/* Primary Button */}
              <ArrowButton
                variant="navy"
                animate
                className="!rounded-[20px] h-[52px] !text-[16px] whitespace-nowrap shrink-0 !w-auto"
              >
                View Full Portfolio
              </ArrowButton>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CARD 5: METRIC (3 VARIANTS) ================= */}
      <div className="bg-white rounded-[8px] border border-gray-300 p-6 sm:p-8 shadow-xs flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-200 gap-2">
          <div>
            <h3 className="type-title-medium text-navy-900">5. Card / Metric (3 Variants)</h3>
            <p className="type-label-regular text-gray-700">
              Padding 24px • Border #E0E0E0 • Number type.h2.bold (#2A2728) • Label type.body2.regular (#403B3C)
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <TokenBadge label="number" value="type.h2.bold (44px)" type="typography" />
            <TokenBadge label="label" value="#403B3C" type="color" />
            <TokenBadge label="border" value="#E0E0E0" type="color" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {/* Variant A: Simple with decorative icon 40x40px */}
          <div className="bg-[#FDFDFD] rounded-[8px] border border-[#E0E0E0] p-6 shadow-xs flex flex-col justify-between gap-4">
            <div className="flex items-center justify-between">
              <span className="type-label-medium uppercase text-gray-500 tracking-wider">
                Variant A • Simple
              </span>
              <div className="w-[40px] h-[40px] rounded-[8px] bg-frost-200 text-[#0A3E6D] flex items-center justify-center">
                <TreePine className="w-5 h-5" />
              </div>
            </div>

            <div>
              <div className="type-h2-bold text-[#2A2728]">3,840,000+</div>
              <p className="type-body2-regular text-[#403B3C] mt-1">
                Trees Planted & Monitored
              </p>
            </div>

            <div className="text-[11px] text-gray-500 pt-2 border-t border-gray-100 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#0A3E6D]" />
              Verified across 12 project sites
            </div>
          </div>

          {/* Variant B: With Unit */}
          <div className="bg-[#FDFDFD] rounded-[8px] border border-[#E0E0E0] p-6 shadow-xs flex flex-col justify-between gap-4">
            <div className="flex items-center justify-between">
              <span className="type-label-medium uppercase text-gray-500 tracking-wider">
                Variant B • With Unit
              </span>
              <div className="w-[40px] h-[40px] rounded-[8px] bg-sand-200 text-sand-900 flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
            </div>

            <div>
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="type-h2-bold text-[#2A2728]">24,500</span>
                <span className="type-title-medium text-[#0A3E6D] font-bold">tCO2e</span>
              </div>
              <p className="type-body2-regular text-[#403B3C] mt-1">
                Annual Emissions Mitigated
              </p>
            </div>

            <div className="text-[11px] text-gray-500 pt-2 border-t border-gray-100 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#0A3E6D]" />
              Calculated using IPCC Tier 3
            </div>
          </div>

          {/* Variant C: With Chart (Donut Chart 64x64px stroke 8px with #0A3E6D & #F4FBFC) */}
          <div className="bg-[#FDFDFD] rounded-[8px] border border-[#E0E0E0] p-6 shadow-xs flex flex-col justify-between gap-4">
            <div className="flex items-center justify-between">
              <span className="type-label-medium uppercase text-gray-500 tracking-wider">
                Variant C • With Chart
              </span>
              <span className="text-xs font-mono font-bold text-[#0A3E6D] bg-[#E6D29E] px-2.5 py-0.5 rounded-[6px] shadow-2xs">
                85% Target
              </span>
            </div>

            <div className="flex items-center gap-4">
              {/* Donut Chart SVG 64x64px */}
              <div className="w-[64px] h-[64px] shrink-0 relative flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                  {/* Background Track #F4FBFC / border-gray-300 */}
                  <path
                    className="text-frost-300 stroke-current"
                    strokeWidth="4"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  {/* Progress Arc #0A3E6D */}
                  <path
                    className="text-navy-900 stroke-current transition-all duration-500"
                    strokeDasharray="85, 100"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <span className="absolute text-[11px] font-bold text-navy-900 font-mono">
                  85%
                </span>
              </div>

              <div>
                <div className="type-h2-bold text-[#2A2728]">98.2%</div>
                <p className="type-body2-regular text-[#403B3C]">
                  Seedling Survival Rate
                </p>
              </div>
            </div>

            {/* Chart Legend */}
            <div className="pt-2 border-t border-gray-100 flex items-center gap-4 text-[11px] text-gray-700">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0A3E6D]" />
                Healthy Growth
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-frost-400" />
                Under Re-planting
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CARD 6: CTA (COMPACT & WIDE) ================= */}
      <div className="bg-white rounded-[8px] border border-gray-300 p-6 sm:p-8 shadow-xs flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-200 gap-2">
          <div>
            <h3 className="type-title-medium text-navy-900">6. Card / CTA (Compact & Wide)</h3>
            <p className="type-label-regular text-gray-700">
              Bg color.frost.100 (#F4FBFC) • Border #E0E0E0 • Padding 16px • Title #0A3E6D • Image height 100-120px • Full-width Primary Button
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <TokenBadge label="bg" value="frost.100 (#F4FBFC)" type="color" />
            <TokenBadge label="title" value="#0A3E6D" type="color" />
            <TokenBadge label="button" value="w-full" type="spacing" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
          {/* Variant 1: Compact CTA (4 cols) */}
          <div className="lg:col-span-5 bg-[#F4FBFC] rounded-[8px] border border-[#E0E0E0] p-4 flex flex-col justify-between gap-4">
            <div>
              {/* Image 100-120px */}
              <div
                className="w-full h-[110px] rounded-[6px] bg-cover bg-center mb-3"
                style={{
                  backgroundImage: "url('/image/website/about-us/12.webp'), url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80')",
                }}
              />
              <span className="type-label-medium uppercase text-sand-800 tracking-wider">
                Direct Climate Action
              </span>
              <h4 className="type-h4 text-[#0A3E6D] font-bold mt-1">
                Start Planting Today
              </h4>
              <p className="type-body3-regular text-gray-700 mt-1">
                Adopt verified mangrove seedlings and receive geotagged tracking updates.
              </p>
            </div>

            <ArrowButton
              variant="navy"
              animate
              className="w-full !rounded-[20px] h-[52px] !text-[16px]"
            >
              Plant a Tree
            </ArrowButton>
          </div>

          {/* Variant 2: Wide CTA (7 cols) */}
          <div className="lg:col-span-7 bg-[#F4FBFC] rounded-[8px] border border-[#E0E0E0] p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex-1 flex flex-col gap-2">
              <span className="type-label-medium uppercase text-sand-800 tracking-wider">
                Corporate ESG Partnership
              </span>
              <h3 className="type-h3 text-[#0A3E6D] font-bold">
                Offset Your Company Carbon Footprint
              </h3>
              <p className="type-body2-regular text-gray-700 max-w-md">
                Co-design high-impact conservation packages aligned with B-Corp standards and corporate sustainability directives.
              </p>
              <div className="pt-2">
                <ArrowButton
                  variant="navy"
                  animate
                  className="w-full sm:!w-auto !rounded-[20px] h-[52px] !text-[16px] whitespace-nowrap"
                >
                  Schedule Consultation
                </ArrowButton>
              </div>
            </div>

            {/* Side Image 100-120px */}
            <div
              className="w-full sm:w-[180px] h-[120px] rounded-[6px] bg-cover bg-center shrink-0 border border-frost-400"
              style={{
                backgroundImage: "url('/image/website/about-us/13.webp'), url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80')",
              }}
            />
          </div>
        </div>
      </div>

      {/* ================= CARD 7: QUOTE (DARK VARIANT) ================= */}
      <div className="bg-white rounded-[8px] border border-gray-300 p-6 sm:p-8 shadow-xs flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-200 gap-2">
          <div>
            <h3 className="type-title-medium text-navy-900">7. Card / Quote (Dark Variant)</h3>
            <p className="type-label-regular text-gray-700">
              Bg #0A3E6D • Padding 24px • Quote mark color.sand.700 (#A18858) • Text type.body1.regular white • Name type.body2.medium white • Role opacity 70%
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <TokenBadge label="bg" value="#0A3E6D" type="color" />
            <TokenBadge label="quote mark" value="#A18858" type="color" />
            <TokenBadge label="padding" value="24px" type="spacing" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Quote Card Instance 1 */}
          <div className="bg-[#0A3E6D] rounded-[8px] p-6 sm:p-8 text-[#FDFDFD] relative overflow-hidden shadow-md flex flex-col justify-between min-h-[220px]">
            {/* Decorative Quote Mark in color.sand.700 (#A18858) */}
            <div className="text-[96px] leading-[0.5] font-serif select-none text-[#A18858] opacity-60 absolute top-4 left-6 pointer-events-none">
              &ldquo;
            </div>

            {/* Quote Body */}
            <div className="relative z-10 pt-8 pb-4">
              <p className="type-body1-regular text-[#FDFDFD] leading-relaxed">
                CarbonEthics delivered credible carbon measurement and genuine community engagement that our leadership board trusted immediately.
              </p>
            </div>

            {/* Author Attribution */}
            <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <div className="type-body2-medium text-[#FDFDFD] font-semibold">
                  Maya Prasetyo
                </div>
                <div className="type-body3-regular text-white opacity-70">
                  Head of ESG, Regional Financial Corporation
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-[6px] bg-[#E6D29E] text-[#0A3E6D] text-[11px] font-mono font-bold shadow-2xs">
                Verified Partner
              </span>
            </div>
          </div>

          {/* Quote Card Instance 2 */}
          <div className="bg-[#0A3E6D] rounded-[8px] p-6 sm:p-8 text-[#FDFDFD] relative overflow-hidden shadow-md flex flex-col justify-between min-h-[220px]">
            <div className="text-[96px] leading-[0.5] font-serif select-none text-[#A18858] opacity-60 absolute top-4 left-6 pointer-events-none">
              &ldquo;
            </div>

            <div className="relative z-10 pt-8 pb-4">
              <p className="type-body1-regular text-[#FDFDFD] leading-relaxed">
                Coastal restoration isn&apos;t just about planting trees—it is about restoring life, stabilizing coastlines, and honoring the local stewards of nature.
              </p>
            </div>

            <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <div className="type-body2-medium text-[#FDFDFD] font-semibold">
                  Dr. Budi Santoso
                </div>
                <div className="type-body3-regular text-white opacity-70">
                  Senior Coastal Ecology Advisor, Marine Research Institute
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-[6px] bg-[#E6D29E] text-[#0A3E6D] text-[11px] font-mono font-bold shadow-2xs">
                Scientific Board
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CARD 8: LONG (PRICING/TIER) ================= */}
      <div className="bg-white rounded-[8px] border border-gray-300 p-6 sm:p-8 shadow-xs flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-200 gap-2">
          <div>
            <h3 className="type-title-medium text-navy-900">8. Card / Long (Pricing/Tier)</h3>
            <p className="type-label-regular text-gray-700">
              Padding 24px • Radius 8px • Free Tier (bg #FDFDFD, border #E0E0E0) • Paid Tier (bg #F4FBFC, border 2px #0A3E6D, tier badge bg #0A3E6D) • Checkmark #5EB7A9
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <TokenBadge label="paid border" value="2px #0A3E6D" type="color" />
            <TokenBadge label="badge bg" value="#0A3E6D" type="color" />
            <TokenBadge label="checkmark" value="#0A3E6D" type="color" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Variant A: Free Tier */}
          <div className="bg-[#FDFDFD] rounded-[8px] border border-[#E0E0E0] p-6 shadow-xs flex flex-col justify-between gap-6 hover:shadow-md transition-all">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="type-label-medium uppercase text-gray-500 tracking-wider">
                    Community Starter
                  </span>
                  <h4 className="type-h4 text-[#2A2728] font-bold mt-0.5">
                    Individual Tier
                  </h4>
                </div>
                <span className="text-xs font-mono font-bold text-white bg-[#0A3E6D] px-2.5 py-1 rounded-[6px] shadow-2xs">
                  Standard
                </span>
              </div>

              <div className="py-2 border-y border-gray-100 flex items-baseline gap-2">
                <span className="type-h2-bold text-[#2A2728]">Free</span>
                <span className="text-xs text-gray-500">/ forever personal access</span>
              </div>

              <ul className="space-y-3 type-body3-regular text-gray-700">
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-sand-100 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#A18858]" />
                  </span>
                  <span>Public carbon footprint calculator</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-sand-100 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#A18858]" />
                  </span>
                  <span>Adopt up to 10 trees per order</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-sand-100 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#A18858]" />
                  </span>
                  <span>Annual public restoration report</span>
                </li>
              </ul>
            </div>

            <ArrowButton
              variant="navy"
              animate
              className="w-full !rounded-[20px] h-[52px] !text-[16px]"
            >
              Get Started Free
            </ArrowButton>
          </div>

          {/* Variant B: Paid Tier */}
          <div className="bg-[#F4FBFC] rounded-[8px] border-2 border-[#0A3E6D] p-6 shadow-md flex flex-col justify-between gap-6 relative">
            {/* Top Badge */}
            <div className="absolute -top-3.5 right-6 bg-[#0A3E6D] text-white type-label-medium uppercase px-3 py-1 rounded-[8px] shadow-sm tracking-wider font-semibold">
              Recommended for ESG
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="type-label-medium uppercase text-sand-800 tracking-wider">
                    Corporate Partner
                  </span>
                  <h4 className="type-h4 text-[#0A3E6D] font-bold mt-0.5">
                    Enterprise Tier
                  </h4>
                </div>
              </div>

              <div className="py-2 border-y border-frost-300 flex items-baseline gap-2">
                <span className="type-h2-bold text-[#0A3E6D]">$1,200</span>
                <span className="text-xs text-gray-700">/ project cohort per quarter</span>
              </div>

              <ul className="space-y-3 type-body3-regular text-gray-700">
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#0A3E6D] flex items-center justify-center shrink-0 text-white">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span className="font-medium text-black">Live IoT Digital MRV Dashboard access</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#0A3E6D] flex items-center justify-center shrink-0 text-white">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span>Verra/VCS serial numbers & retirement certificates</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#0A3E6D] flex items-center justify-center shrink-0 text-white">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span>Custom corporate branding on tree nursery tags</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#0A3E6D] flex items-center justify-center shrink-0 text-white">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span>Quarterly high-resolution drone surveillance footage</span>
                </li>
              </ul>
            </div>

            <ArrowButton
              variant="navy"
              animate
              className="w-full !rounded-[20px] h-[52px] !text-[16px]"
            >
              Contact ESG Advisory
            </ArrowButton>
          </div>
        </div>
      </div>
    </section>
  );
}
