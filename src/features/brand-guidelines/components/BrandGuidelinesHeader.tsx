"use client";

import React from "react";
import Image from "next/image";

export default function BrandGuidelinesHeader() {
  return (
    <div className="w-full bg-[#0A3E6D] text-white py-12 sm:py-16 px-6 sm:px-10 lg:px-12 rounded-[8px] mb-12">
      <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="type-h1 text-white font-medium tracking-tight">
            <span className="text-[#E6D29E]">CarbonEthics</span> Design Style Guide
          </h1>
          <p className="type-body1-regular text-white/80 max-w-3xl leading-relaxed">
            Interactive living documentation encoding CarbonEthics&apos; visual identity, token architecture, and accessible UI component patterns. Designed for engineering speed, visual integrity, and environmental clarity.
          </p>
        </div>

        <div className="shrink-0 flex items-center justify-start md:justify-end">
          <Image
            src="/logo/LogoWhite.png"
            alt="CarbonEthics Logo"
            width={192}
            height={192}
            className="w-28 sm:w-36 md:w-44 lg:w-48 h-auto object-contain" style={{ height: "auto" }}
            priority
          />
        </div>
      </div>
    </div>
  );
}
