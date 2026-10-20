import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import BrandGuidelinesHeader from "@/features/brand-guidelines/components/BrandGuidelinesHeader";

export const metadata: Metadata = {
  title: "Brand Guidelines | CarbonEthics Design Style Guide",
  description:
    "Official CarbonEthics brand guidelines and living design system documentation: logo assets, typography scale, color tokens, and UI components.",
};

export default function BrandGuidelinesOverviewPage() {
  return (
    <div className="w-full flex flex-col">
      <BrandGuidelinesHeader />
      <div className="w-full flex flex-col">
        <h2 className="text-[28px] sm:text-[32px] leading-10 font-normal tracking-[-0.005em] text-[#2A2728]">
          What’s inside
        </h2>

        <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-[840px]">
          <div className="group flex flex-col w-full max-w-[402px]">
            <div className="w-full h-[260px] sm:h-[300px] bg-[#E0E0E0] rounded-t-[20px] overflow-hidden relative">
              <Image
                src="/images/guidelines/foundation-preview.png"
                alt="Foundation Guidelines Preview"
                fill
                priority
                className="object-cover object-left-top transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 402px"
              />
            </div>
            <div className="w-full bg-[#FDFDFD] border border-[#E0E0E0] rounded-[20px] p-8 sm:p-10 -mt-16 relative z-10 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-[24px] leading-8 font-normal tracking-[-0.005em] text-[#2A2728]">
                  Foundation
                </h3>
                <p className="text-[14px] leading-5 font-light tracking-[0.01em] text-[#949494]">
                  Core design tokens, brand identity, and visual language principles.
                </p>
              </div>
              <Link
                href="/brand-guidelines/logo"
                className="group/btn inline-flex items-center gap-2 text-[#0A3E6D] hover:opacity-80 transition-opacity w-fit"
              >
                <span className="text-[18px] leading-7 font-bold">
                  Explore More
                </span>
                <span className="w-6 h-6 rounded-full bg-[#0A3E6D] flex items-center justify-center text-[#FDFDFD] transition-transform group-hover/btn:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                </span>
              </Link>
            </div>
          </div>

          <div className="group flex flex-col w-full max-w-[402px]">
            <div className="w-full h-[260px] sm:h-[300px] bg-[#E0E0E0] rounded-t-[20px] overflow-hidden relative">
              <Image
                src="/images/guidelines/component-preview.png"
                alt="Component Guidelines Preview"
                fill
                className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 402px"
              />
            </div>
            <div className="w-full bg-[#FDFDFD] border border-[#E0E0E0] rounded-[20px] p-8 sm:p-10 -mt-16 relative z-10 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-[24px] leading-8 font-normal tracking-[-0.005em] text-[#2A2728]">
                  Component
                </h3>
                <p className="text-[14px] leading-5 font-light tracking-[0.01em] text-[#949494]">
                  Reusable UI component documented with tokens, variant, usage guidelines
                </p>
              </div>
              <Link
                href="/brand-guidelines/buttons"
                className="group/btn inline-flex items-center gap-2 text-[#0A3E6D] hover:opacity-80 transition-opacity w-fit"
              >
                <span className="text-[18px] leading-7 font-bold">
                  Explore More
                </span>
                <span className="w-6 h-6 rounded-full bg-[#0A3E6D] flex items-center justify-center text-[#FDFDFD] transition-transform group-hover/btn:translate-x-1">
                  <ArrowRight className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-16 sm:mt-24 pt-6 pb-6 border-t border-[#E0E0E0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <Image
              src="/logo/LogoWNameBlue.png"
              alt="CarbonEthics Logo"
              width={166}
              height={28}
              className="h-7 w-auto object-contain"
              style={{ width: "auto" }}
            />
            <span className="text-[#0A3E6D] text-[14px] leading-5 font-light tracking-[0.01em]">
              | Design System
            </span>
          </div>
          <p className="text-[12px] leading-4 font-light tracking-[0.03em] text-[#403B3C]">
            Copyright &copy; 2026 CarbonEthics. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col items-start sm:items-end gap-3">
          <a
            href="https://carbonethics.co"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-fill-link text-[18px] leading-7 font-light"
          >
            carbonethics.co
          </a>
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/company/carbonethics"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CarbonEthics LinkedIn"
              className="w-10 h-10 rounded-full border border-[#0A3E6D] flex items-center justify-center text-[#0A3E6D] hover:bg-[#0A3E6D] hover:text-white transition-all duration-200"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512" aria-hidden="true">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/carbonethics"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CarbonEthics Instagram"
              className="w-10 h-10 rounded-full border border-[#0A3E6D] flex items-center justify-center text-[#0A3E6D] hover:bg-[#0A3E6D] hover:text-white transition-all duration-200"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 448 512" aria-hidden="true">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@carbonethics"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CarbonEthics YouTube"
              className="w-10 h-10 rounded-full border border-[#0A3E6D] flex items-center justify-center text-[#0A3E6D] hover:bg-[#0A3E6D] hover:text-white transition-all duration-200"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 576 512" aria-hidden="true">
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
