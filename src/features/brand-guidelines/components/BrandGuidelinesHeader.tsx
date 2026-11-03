"use client";

import React from "react";
import Image from "next/image";

export default function BrandGuidelinesHeader() {
  return (
    <div className="w-full bg-[#0A3E6D] text-white py-6 sm:py-8 lg:py-9 px-5 sm:px-7 lg:px-9 rounded-[16px] mb-8 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]">
      <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-5 lg:gap-8">
        <div className="flex-1 flex flex-col gap-2.5 sm:gap-3 min-w-0">
          <h1 className="font-medium tracking-tight text-white text-[22px] sm:text-[26px] md:text-[30px] xl:text-[32px] leading-tight">
            <span className="text-[#E6D29E]">CarbonEthics</span>{" "}
            <span>Design Style Guide</span>
          </h1>
          <p className="type-body1-regular text-white/80 leading-relaxed max-w-2xl text-[13px] sm:text-[14px] lg:text-[14.5px]">
            Interactive living documentation encoding CarbonEthics&apos; visual identity, token architecture, and accessible UI component patterns. Designed for engineering speed, visual integrity, and environmental clarity.
          </p>
        </div>

        <div className="shrink-0 flex items-center justify-start sm:justify-end">
          <Image
            src="/logo/LogoWhite.png"
            alt="CarbonEthics Logo"
            width={160}
            height={160}
            className="h-auto object-contain w-16 sm:w-20 md:w-24 lg:w-28"
            style={{ height: "auto" }}
            priority
          />
        </div>
      </div>
    </div>
  );
}
