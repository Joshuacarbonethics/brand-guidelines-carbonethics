"use client";

import React from "react";
import Image from "next/image";
import { useSidebar } from "../context/SidebarContext";

export default function BrandGuidelinesHeader() {
  const { isSubPanelOpen } = useSidebar();

  return (
    <div className="w-full bg-[#0A3E6D] text-white py-10 sm:py-14 lg:py-16 px-6 sm:px-10 lg:px-12 rounded-[16px] mb-12 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]">
      <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-6 lg:gap-8">
        <div className="flex-1 flex flex-col gap-3 sm:gap-4 min-w-0">
          <h1
            className={`font-medium tracking-tight text-white transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] whitespace-nowrap overflow-visible ${
              isSubPanelOpen
                ? "text-xl sm:text-2xl md:text-[26px] lg:text-[28px] xl:text-[33px] 2xl:text-[36px] leading-tight"
                : "text-2xl sm:text-3xl md:text-[38px] lg:text-[44px] xl:text-[48px] 2xl:text-[52px] leading-tight"
            }`}
          >
            <span className="text-[#E6D29E]">CarbonEthics</span>{" "}
            <span>Design Style Guide</span>
          </h1>
          <p
            className={`type-body1-regular text-white/80 leading-relaxed transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] max-w-2xl lg:max-w-3xl ${
              isSubPanelOpen
                ? "text-xs sm:text-[12.5px] md:text-[13px] lg:text-[13.5px] xl:text-[14px]"
                : "text-xs sm:text-sm md:text-[14.5px] lg:text-[15.5px] xl:text-[16px]"
            }`}
          >
            Interactive living documentation encoding CarbonEthics&apos; visual identity, token architecture, and accessible UI component patterns. Designed for engineering speed, visual integrity, and environmental clarity.
          </p>
        </div>

        <div className="shrink-0 flex items-center justify-start md:justify-end">
          <Image
            src="/logo/LogoWhite.png"
            alt="CarbonEthics Logo"
            width={192}
            height={192}
            className={`h-auto object-contain transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              isSubPanelOpen
                ? "w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36"
                : "w-24 sm:w-32 md:w-36 lg:w-40 xl:w-44"
            }`}
            style={{ height: "auto" }}
            priority
          />
        </div>
      </div>
    </div>
  );
}
