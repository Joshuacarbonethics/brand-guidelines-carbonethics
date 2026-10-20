"use client";

import React, { useState } from "react";
import TokenBadge from "./TokenBadge";
import { ArrowButton } from "@/features/shared/components/ArrowButton";

export default function TabsShowcase() {
  // State for Tabs / Vertical Dark
  const [activeVerticalDark, setActiveVerticalDark] = useState(0);
  // State for Tabs / Vertical Light
  const [activeVerticalLight, setActiveVerticalLight] = useState(0);
  // State for Tabs / Content
  const [activeContentTab, setActiveContentTab] = useState(0);
  // State for Tab / Horizontal Dark
  const [activeHorizDark, setActiveHorizDark] = useState(0);
  // State for Tab / Horizontal Light
  const [activeHorizLight, setActiveHorizLight] = useState(0);
  // State for Tab / Pill
  const [activePill, setActivePill] = useState(0);

  const verticalItems = [
    {
      title: "Overview & Mission",
      desc: "Accelerating natural climate solutions through community stewardship, scientific integrity, and technological verification.",
      tag: "CORE PRINCIPLE",
    },
    {
      title: "Restoration Standards",
      desc: "Strict adherence to Verra VCS, CCB gold standards, and Plan Vivo methodologies across all project landscapes.",
      tag: "VERIFICATION",
    },
    {
      title: "Community Equity",
      desc: "50%+ of economic value distributed directly to coastal village guardians, women-led nurseries, and ranger teams.",
      tag: "IMPACT",
    },
  ];

  const contentTabItems = [
    {
      label: "Mangrove Restoration",
      title: "Coastal Blue Carbon Sinks",
      desc: "Mangroves store up to 5 times more carbon per hectare than terrestrial tropical rainforests, locking carbon in deep waterlogged sediment for centuries.",
      img: "/image/website/about-us/1.webp",
      fallbackImg: "https://images.unsplash.com/photo-1544365558-35aa4afcf11f?auto=format&fit=crop&w=800&q=80",
      stats: "4,500 Hectares Under Protection",
    },
    {
      label: "Peatland Rewetting",
      title: "Hydrological Swamp Recovery",
      desc: "Blocking drainage canals to raise the water table, extinguishing underground smoldering fires, and restoring endemic dipterocarp ecosystems.",
      img: "/image/website/about-us/10.webp",
      fallbackImg: "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=800&q=80",
      stats: "12,000 Hectares Rewetted",
    },
    {
      label: "Coral Reef Seeding",
      title: "Marine Biome Resiliency",
      desc: "Deploying artificial reef structures (Reef Stars) seeded with heat-resilient coral micro-fragments to protect coastlines from tidal storm surges.",
      img: "/image/website/about-us/14.webp",
      fallbackImg: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80",
      stats: "85,000 Coral Fragments Seeded",
    },
  ];

  const horizontalNavItems = [
    "Project Architecture",
    "Digital MRV Telemetry",
    "Carbon Accounting",
    "Audits & Disclosures",
  ];

  const pillItems = [
    "All Ecosystems",
    "Blue Carbon",
    "Peatlands",
    "Coral Reefs",
    "Community Forestry",
  ];

  return (
    <section id="tabs" className="scroll-mt-24 flex flex-col gap-12">
      {/* Section Header */}
      <div className="flex flex-col gap-2">
        <h2 className="type-h2-bold text-black">4 Interactive Tab Components</h2>
        <p className="type-body2-regular text-gray-700 max-w-3xl">
          Designed for fluid section pivoting, content layering, and high-density information discovery. All tab variants are fully clickable and stateful.
        </p>
      </div>

      {/* ================= 1. TABS / VERTICAL (DARK & LIGHT) ================= */}
      <div className="bg-white rounded-[8px] border border-gray-300 p-6 sm:p-8 shadow-xs flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-200 gap-2">
          <div>
            <h3 className="type-title-medium text-navy-900">1. Tabs / Vertical</h3>
            <p className="type-label-regular text-gray-700">
              List width 220-280px • Active left border 2px • Gap to content 32px • Dark (#0A3E6D, indicator #A18858) & Light (#FDFDFD, indicator #0A3E6D)
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <TokenBadge label="list width" value="220-280px" type="spacing" />
            <TokenBadge label="active border" value="2px left" type="spacing" />
            <TokenBadge label="gap" value="32px" type="spacing" />
          </div>
        </div>

        {/* 1A: Dark Variant */}
        <div className="flex flex-col gap-2">
          <span className="type-label-medium uppercase text-navy-900 tracking-wider">
            Variant 1A: Dark Style (bg #0A3E6D • indicator #A18858)
          </span>

          <div className="bg-[#0A3E6D] rounded-[8px] p-6 text-white flex flex-col lg:flex-row items-stretch gap-[32px] shadow-sm">
            {/* Left Nav List (220-280px) */}
            <div className="w-full lg:w-[260px] shrink-0 flex flex-col gap-1 border-b lg:border-b-0 lg:border-r border-white/10 pb-4 lg:pb-0">
              {verticalItems.map((item, idx) => {
                const isActive = activeVerticalDark === idx;
                return (
                  <button
                    key={item.title}
                    onClick={() => setActiveVerticalDark(idx)}
                    className={`text-left px-4 py-3 rounded-r-[6px] transition-all text-sm font-medium flex items-center justify-between cursor-pointer relative ${
                      isActive
                        ? "bg-white/10 text-white font-semibold"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                    style={{
                      borderLeft: isActive ? "2px solid #A18858" : "2px solid transparent",
                    }}
                  >
                    <span>{item.title}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#A18858]" />}
                  </button>
                );
              })}
            </div>

            {/* Content Area */}
            <div className="flex-1 flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-2">
                <span className="type-label-medium text-sand-400 uppercase tracking-wider">
                  {verticalItems[activeVerticalDark].tag}
                </span>
                <h4 className="type-h4 text-white font-semibold">
                  {verticalItems[activeVerticalDark].title}
                </h4>
                <p className="type-body2-regular text-white/80 leading-relaxed max-w-xl">
                  {verticalItems[activeVerticalDark].desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                <span>Tab active index: {activeVerticalDark + 1} of 3</span>
                <span className="text-[#A18858] font-mono font-medium">Indicator: #A18858</span>
              </div>
            </div>
          </div>
        </div>

        {/* 1B: Light Variant */}
        <div className="flex flex-col gap-2 pt-4">
          <span className="type-label-medium uppercase text-navy-900 tracking-wider">
            Variant 1B: Light Style (bg #FDFDFD • indicator #0A3E6D)
          </span>

          <div className="bg-[#FDFDFD] rounded-[8px] border border-[#E0E0E0] p-6 flex flex-col lg:flex-row items-stretch gap-[32px] shadow-xs">
            {/* Left Nav List (220-280px) */}
            <div className="w-full lg:w-[260px] shrink-0 flex flex-col gap-1 border-b lg:border-b-0 lg:border-r border-gray-200 pb-4 lg:pb-0">
              {verticalItems.map((item, idx) => {
                const isActive = activeVerticalLight === idx;
                return (
                  <button
                    key={item.title}
                    onClick={() => setActiveVerticalLight(idx)}
                    className={`text-left px-4 py-3 rounded-r-[6px] transition-all text-sm font-medium flex items-center justify-between cursor-pointer relative ${
                      isActive
                        ? "bg-frost-200 text-[#0A3E6D] font-semibold"
                        : "text-gray-700 hover:text-black hover:bg-gray-100"
                    }`}
                    style={{
                      borderLeft: isActive ? "2px solid #0A3E6D" : "2px solid transparent",
                    }}
                  >
                    <span>{item.title}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#0A3E6D]" />}
                  </button>
                );
              })}
            </div>

            {/* Content Area */}
            <div className="flex-1 flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-2">
                <span className="type-label-medium text-[#0A3E6D] uppercase tracking-wider font-semibold">
                  {verticalItems[activeVerticalLight].tag}
                </span>
                <h4 className="type-h4 text-[#2A2728] font-semibold">
                  {verticalItems[activeVerticalLight].title}
                </h4>
                <p className="type-body2-regular text-gray-700 leading-relaxed max-w-xl">
                  {verticalItems[activeVerticalLight].desc}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500">
                <span>Tab active index: {activeVerticalLight + 1} of 3</span>
                <span className="text-[#0A3E6D] font-mono font-medium">Indicator: #0A3E6D</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 2. TABS / CONTENT ================= */}
      <div className="bg-white rounded-[8px] border border-gray-300 p-6 sm:p-8 shadow-xs flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-200 gap-2">
          <div>
            <h3 className="type-title-medium text-navy-900">2. Tabs / Content</h3>
            <p className="type-label-regular text-gray-700">
              Bg #0A3E6D • Padding item 24px x 16px • Active bottom border 2px white • Title, description, and preview image (200-240px)
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <TokenBadge label="bg" value="#0A3E6D" type="color" />
            <TokenBadge label="border" value="2px bottom white" type="color" />
            <TokenBadge label="image height" value="200-240px" type="spacing" />
          </div>
        </div>

        {/* Tabs / Content Container */}
        <div className="bg-[#0A3E6D] rounded-[8px] p-6 md:p-8 text-white flex flex-col gap-8 shadow-sm">
          {/* Top Horizontal Tab Row (padding item 24px x 16px) */}
          <div className="flex items-center gap-2 border-b border-white/20 overflow-x-auto no-scrollbar">
            {contentTabItems.map((tab, idx) => {
              const isActive = activeContentTab === idx;
              return (
                <button
                  key={tab.label}
                  onClick={() => setActiveContentTab(idx)}
                  className={`px-6 py-4 transition-all text-sm md:text-base font-medium whitespace-nowrap cursor-pointer relative -mb-[2px] ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-white/60 hover:text-white"
                  }`}
                  style={{
                    borderBottom: isActive ? "2px solid #FFFFFF" : "2px solid transparent",
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Active Content & Preview Image (200-240px) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col gap-3">
              <span className="type-label-medium text-sand-400 uppercase tracking-wider">
                {contentTabItems[activeContentTab].stats}
              </span>
              <h3 className="type-h3 text-white font-semibold">
                {contentTabItems[activeContentTab].title}
              </h3>
              <p className="type-body1-regular text-white/80 max-w-xl leading-relaxed">
                {contentTabItems[activeContentTab].desc}
              </p>
              <div className="pt-2">
                <ArrowButton
                  variant="outline"
                  animate
                  className="!rounded-[20px] h-[48px] !text-[15px] !w-auto"
                >
                  Explore Methodology
                </ArrowButton>
              </div>
            </div>

            {/* Preview Image (height 200-240px) */}
            <div className="lg:col-span-5">
              <div
                className="w-full h-[220px] rounded-[8px] bg-cover bg-center border border-white/20 shadow-md relative overflow-hidden"
                style={{
                  backgroundImage: `url('${contentTabItems[activeContentTab].img}'), url('${contentTabItems[activeContentTab].fallbackImg}')`,
                }}
              >
                <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-[6px] bg-black/60 backdrop-blur-xs text-[11px] text-white font-mono">
                  Live Site Telemetry
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 3. TAB / HORIZONTAL (DARK & LIGHT) ================= */}
      <div className="bg-white rounded-[8px] border border-gray-300 p-6 sm:p-8 shadow-xs flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-200 gap-2">
          <div>
            <h3 className="type-title-medium text-navy-900">3. Tab / Horizontal</h3>
            <p className="type-label-regular text-gray-700">
              Bar height 48px • Padding-h 24px • Active bottom border 2px • Dark variant (#0A3E6D) & Light variant (color.frost.400 #BCDEED)
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <TokenBadge label="height" value="48px" type="spacing" />
            <TokenBadge label="padding-h" value="24px" type="spacing" />
            <TokenBadge label="border" value="2px bottom" type="spacing" />
          </div>
        </div>

        {/* 3A: Dark Variant */}
        <div className="flex flex-col gap-2">
          <span className="type-label-medium uppercase text-navy-900 tracking-wider">
            Variant 3A: Dark Horizontal Bar (bg #0A3E6D)
          </span>

          <div className="h-[48px] px-6 bg-[#0A3E6D] rounded-[8px] flex items-center gap-6 overflow-x-auto no-scrollbar shadow-xs">
            {horizontalNavItems.map((item, idx) => {
              const isActive = activeHorizDark === idx;
              return (
                <button
                  key={item}
                  onClick={() => setActiveHorizDark(idx)}
                  className={`h-full flex items-center type-body3-medium whitespace-nowrap cursor-pointer transition-colors relative ${
                    isActive ? "text-white font-semibold" : "text-white/60 hover:text-white"
                  }`}
                  style={{
                    borderBottom: isActive ? "2px solid #FFFFFF" : "2px solid transparent",
                  }}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3B: Light Variant */}
        <div className="flex flex-col gap-2 pt-2">
          <span className="type-label-medium uppercase text-navy-900 tracking-wider">
            Variant 3B: Light Horizontal Bar (bg color.frost.400 #BCDEED)
          </span>

          <div className="h-[48px] px-6 bg-[#BCDEED] rounded-[8px] flex items-center gap-6 overflow-x-auto no-scrollbar shadow-xs">
            {horizontalNavItems.map((item, idx) => {
              const isActive = activeHorizLight === idx;
              return (
                <button
                  key={item}
                  onClick={() => setActiveHorizLight(idx)}
                  className={`h-full flex items-center type-body3-medium whitespace-nowrap cursor-pointer transition-colors relative ${
                    isActive ? "text-[#0A3E6D] font-bold" : "text-[#495F72] hover:text-[#0A3E6D]"
                  }`}
                  style={{
                    borderBottom: isActive ? "2px solid #0A3E6D" : "2px solid transparent",
                  }}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= 4. TAB / PILL ================= */}
      <div className="bg-white rounded-[8px] border border-gray-300 p-6 sm:p-8 shadow-xs flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-200 gap-2">
          <div>
            <h3 className="type-title-medium text-navy-900">4. Tab / Pill</h3>
            <p className="type-label-regular text-gray-700">
              Radius 20px • Padding 16px x 4px (px-4 py-2) • Border 1.5px #0A3E6D • Gap 8px • Font type.body3.medium • Filled #0A3E6D active / Ghost default
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <TokenBadge label="radius" value="20px" type="radius" />
            <TokenBadge label="border" value="1.5px #0A3E6D" type="color" />
            <TokenBadge label="font" value="type.body3.medium" type="typography" />
          </div>
        </div>

        {/* Tab / Pill Row */}
        <div className="p-6 rounded-[8px] bg-gray-50 border border-gray-200 flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {pillItems.map((item, idx) => {
              const isActive = activePill === idx;
              return (
                <button
                  key={item}
                  onClick={() => setActivePill(idx)}
                  className={`px-4 py-2 rounded-[20px] border-[1.5px] border-[#0A3E6D] type-body3-medium transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#0A3E6D] text-white shadow-xs font-semibold"
                      : "bg-transparent text-[#0A3E6D] hover:bg-frost-200"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-gray-200 flex items-center justify-between text-xs text-gray-700">
            <span>
              Active Filter: <strong className="text-navy-900">{pillItems[activePill]}</strong>
            </span>
            <span className="font-mono text-gray-500">
              State: {activePill === 0 ? "Default Active" : "Filter Active"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
