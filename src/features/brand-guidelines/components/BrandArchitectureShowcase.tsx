"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Eye,
  Target,
  Zap,
  FileText,
} from "lucide-react";

interface SectionItem {
  id: string;
  label: string;
}

const SECTIONS: SectionItem[] = [
  { id: "organization-ecosystem-explanation", label: "Ecosystem Explanation" },
  { id: "vertical-horizontal-logo", label: "Vertical & Horizontal Logo" },
  { id: "logo-grid", label: "Logo Grid" },
  { id: "initiative-project", label: "Carbon Policy Lab" },
  { id: "digital-product-falcon", label: "Falcon" },
  { id: "digital-monitoring-dashboard", label: "Digital Monitoring Dashboard" },
  { id: "internal-dashboard", label: "Internal Dashboard" },
  { id: "petani-app", label: "Petani App" },
];

export default function BrandArchitectureShowcase() {
  const [activeSection, setActiveSection] = useState<string>(SECTIONS[0].id);
  const isClickScrolling = useRef(false);
  const scrollEndTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // If currently programmatic scrolling from clicking a tab, ignore scrollspy updates to prevent flickering
      if (isClickScrolling.current) {
        return;
      }

      // Check if user scrolled near the bottom of the page
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80
      ) {
        setActiveSection(SECTIONS[SECTIONS.length - 1].id);
        return;
      }

      // Threshold line for section detection (matches sticky nav bar + padding)
      const threshold = 160;
      let current = SECTIONS[0].id;

      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= threshold) {
            current = section.id;
          }
        }
      }

      setActiveSection((prev) => (prev !== current ? current : prev));
    };

    const handleScrollEnd = () => {
      if (isClickScrolling.current) {
        isClickScrolling.current = false;
        if (scrollEndTimeout.current) clearTimeout(scrollEndTimeout.current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("scrollend", handleScrollEnd);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scrollend", handleScrollEnd);
      if (scrollEndTimeout.current) clearTimeout(scrollEndTimeout.current);
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      // Immediately set the active section tab
      setActiveSection(id);

      // Lock scrollspy from overriding the active state while smooth-scrolling through intermediate sections
      isClickScrolling.current = true;
      if (scrollEndTimeout.current) clearTimeout(scrollEndTimeout.current);

      el.scrollIntoView({ behavior: "smooth" });

      // Fallback timer to release lock once smooth scrolling has completed
      scrollEndTimeout.current = setTimeout(() => {
        isClickScrolling.current = false;
      }, 800);
    }
  };

  return (
    <section id="brand-architecture" className="scroll-mt-24 flex flex-col gap-6">
      {/* Page Title & Intro */}
      <div className="flex flex-col gap-2">
        <h1 className="text-[32px] sm:text-[38px] font-bold text-[#2A2728] tracking-tight leading-tight">
          Brand Architecture
        </h1>
        <p className="text-[15px] sm:text-[16px] text-gray-600 max-w-3xl leading-relaxed">
          The CarbonEthics brand architecture defines how the master brand connects with its organizational ecosystem, initiative projects, and digital products to maintain unified brand equity and coherent visual recognition.
        </p>
      </div>

      {/* Sticky Quick Nav Anchors */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md py-3 -mx-2 px-2 border-b border-gray-200 flex flex-wrap items-center gap-2">
        {SECTIONS.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              onClick={(e) => scrollToSection(e, sec.id)}
              className={`text-[13px] font-medium px-3.5 py-1.5 rounded-[8px] shrink-0 cursor-pointer transition-colors duration-150 ${
                isActive
                  ? "bg-[#0A3E6D] text-white border border-[#0A3E6D]"
                  : "bg-white text-[#0A3E6D] border border-gray-200 hover:bg-[#E9F6FE] hover:border-[#0A3E6D]"
              }`}
            >
              {sec.label}
            </a>
          );
        })}
      </div>

      {/* 1. Organization Ecosystem Explanation */}
      <div
        id="organization-ecosystem-explanation"
        className="scroll-mt-28 py-6 sm:py-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-4 flex flex-col gap-1.5 lg:sticky lg:top-28">
            <h2 className="text-[22px] sm:text-[26px] font-bold text-[#2A2728] leading-snug">
              Organization Ecosystem Explanation
            </h2>
            <span className="text-[14px] italic text-gray-500 font-normal">
              (Only Text)
            </span>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-5 text-[#0A3E6D] text-[16px] sm:text-[17px] leading-relaxed">
            <p>
              Beyond its core services, CarbonEthics develops ecosystems that advance our mission through collaborations. While each initiatives may have its own purpose, audience, and identity, they all operate under the CarbonEthics master brand. Thus these offerings are presented as{" "}
              <strong className="font-semibold text-[#806D48] bg-[#FDF8E5] px-1.5 py-0.5 rounded">
                extensions of the CarbonEthics brand
              </strong>{" "}
              rather than independent brands, maintaining a clear and cohesive identity.
            </p>
            <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
              Instead of creating standalone logos, each initiative and digital product is identified through a typographic lockup alongside the CarbonEthics logo,{" "}
              <strong className="font-semibold text-[#0A3E6D]">
                preserving the strength and recognition of the master brand
              </strong>{" "}
              while providing enough distinction for individual offerings. This approach strengthens brand equity, reduces visual fragmentation, and provides a flexible system that can scale with future growth.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] bg-gray-200" />

      {/* 2. Vertical & Horizontal Logo */}
      <div
        id="vertical-horizontal-logo"
        className="scroll-mt-28 py-6 sm:py-8 flex flex-col gap-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-4 flex flex-col gap-1.5 lg:sticky lg:top-28">
            <h2 className="text-[22px] sm:text-[26px] font-bold text-[#2A2728] leading-snug">
              Vertical &amp; Horizontal Logo
            </h2>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-5 text-[#0A3E6D] text-[16px] sm:text-[17px] leading-relaxed">
            <p>
              The Organizational Ecosystem represents the part of the brand architecture that is perceived to directly owned and led by CarbonEthics, covering the Legal Entity and Initiatives. While individual initiatives may develop their own names, they remain closely anchored to the CarbonEthics master brand.
            </p>
            <p>
              The visual hierarchy therefore emphasizes CarbonEthics as the primary identity, reinforcing consistency, recognition, and a clear sense of organizational ownership.
            </p>
          </div>
        </div>

        {/* Full-width image stretching to align with the left title */}
        <div className="w-full rounded-[12px] border border-gray-200 overflow-hidden bg-white">
          <Image
            src="/images/guidelines/brand-architecture-vertical-horizontal.png"
            alt="CarbonEthics Vertical and Horizontal Organization Ecosystem Logos"
            width={1920}
            height={1080}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      <div className="w-full h-[1px] bg-gray-200" />

      {/* 3. Logo Grid */}
      <div
        id="logo-grid"
        className="scroll-mt-28 py-6 sm:py-8 flex flex-col gap-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-4 flex flex-col gap-1.5 lg:sticky lg:top-28">
            <h2 className="text-[22px] sm:text-[26px] font-bold text-[#2A2728] leading-snug">
              Logo Grid
            </h2>
            <span className="text-[15px] italic text-[#0A3E6D] font-medium">
              Vertical Lockup
            </span>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* 3.1 Vertical Lockup */}
            <div className="flex flex-col gap-3">
              <h3 className="text-[18px] font-bold italic text-[#0A3E6D]">
                Vertical Lockup
              </h3>
              <div className="text-[14px] font-semibold text-gray-600 mb-1">Rules:</div>
              <ul className="flex flex-col gap-2.5">
                {[
                  "The divider line matches the width of the CarbonEthics logotype.",
                  'The divider line uses the same stroke weight as the "Organization Ecosystem" logotype.',
                  'The maximum width of the project name extends one "C" width beyond the CarbonEthics logotype on each side.',
                  "The Organization Ecosystem name uses a letter spacing value of 50.",
                  "The Organization Ecosystem name must always be presented in Title Case.",
                ].map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[15px] text-[#0A3E6D] leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0A3E6D] mt-2 shrink-0" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full h-[1px] bg-gray-100" />

            {/* 3.2 Horizontal Lockup */}
            <div className="flex flex-col gap-3">
              <h3 className="text-[18px] font-bold italic text-[#0A3E6D]">
                Horizontal Lockup
              </h3>
              <div className="text-[14px] font-semibold text-gray-600 mb-1">Rules:</div>
              <ul className="flex flex-col gap-2.5">
                {[
                  'The divider line matches the width of the "E" in the CarbonEthics logotype.',
                  "The divider line uses the same stroke weight as the Organization Ecosystem name.",
                  "The maximum width of the Organization Ecosystem name must not exceed the width of the CarbonEthics logo.",
                  "The Organization Ecosystem name uses a letter spacing value of 50.",
                  "The Organization Ecosystem name must always be presented in Title Case.",
                ].map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[15px] text-[#0A3E6D] leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0A3E6D] mt-2 shrink-0" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full h-[1px] bg-gray-100" />

            {/* 3.3 Stacked Lockup */}
            <div className="flex flex-col gap-3">
              <h3 className="text-[18px] font-bold italic text-[#0A3E6D]">
                Stacked Lockup
              </h3>
              <div className="text-[14px] font-semibold text-gray-600 mb-1">Rules:</div>
              <ul className="flex flex-col gap-2.5">
                {[
                  "The divider line matches the height of the Organization Ecosystem name.",
                  "The divider line uses the same stroke weight as the Organization Ecosystem name.",
                  "The leading between the two lines of the Organization Ecosystem name is ½ of the CarbonEthics logotype height.",
                  "The Organization Ecosystem name uses a letter spacing value of 50.",
                  "The Organization Ecosystem name must always be presented in Title Case.",
                ].map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[15px] text-[#0A3E6D] leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0A3E6D] mt-2 shrink-0" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Full-width image stretching to align with the left title */}
        <div className="w-full rounded-[12px] border border-gray-200 overflow-hidden bg-white">
          <Image
            src="/images/guidelines/brand-architecture-logo-grid.png"
            alt="CarbonEthics Logo Grid - Vertical, Horizontal, and Stacked Lockup Construction"
            width={1920}
            height={740}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      <div className="w-full h-[1px] bg-gray-200" />

      {/* 4. Initiative Project: Carbon Policy Lab */}
      <div
        id="initiative-project"
        className="scroll-mt-28 pt-6 sm:pt-8 pb-0 -mb-6 relative"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Title at top with sticky constraint, Book Image at bottom directly touching horizontal line */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            {/* Title track container */}
            <div className="flex-1 w-full pb-8">
              <div className="flex flex-col gap-1.5 lg:sticky lg:top-28">
                <span className="text-[14px] italic text-[#0A3E6D] font-medium">
                  Initiative Project
                </span>
                <h2 className="text-[22px] sm:text-[26px] font-bold text-[#2A2728] leading-snug">
                  Carbon Policy Lab
                </h2>
              </div>
            </div>

            {/* Book Image positioned flush directly against horizontal divider line, scaled to full container width */}
            <div className="w-full mt-auto flex items-end shrink-0 pt-4">
              <Image
                src="/images/guidelines/brand-architecture-falcon-book.png"
                alt="CarbonEthics Carbon Policy Lab publication preview"
                width={1023}
                height={538}
                className="w-full h-auto object-contain object-left-bottom block drop-shadow-none"
              />
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-5 text-[#0A3E6D] text-[16px] sm:text-[17px] leading-relaxed pb-6 sm:pb-8">
            <p>
              Carbon Policy and Legal is a research and advisory unit that helps various stakeholders address climate-related issues and promote sustainability policy and regulations.
            </p>
            <p>
              Whether you are a business, a policymaker, or an advocate, we can assist you through our consultancy services, legal compliance enhancement, and policy development and advocacy expertise in carbon and climate change policy development and regulatory studies.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] bg-gray-200" />

      {/* 5. Digital Product: Falcon */}
      <div
        id="digital-product-falcon"
        className="scroll-mt-28 pt-6 sm:pt-8 pb-0 -mb-6 relative"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Title at top with sticky constraint, Falcon Dashboard Image at bottom directly touching horizontal line */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            {/* Title track container: height is constrained so sticky stops before reaching the dashboard image */}
            <div className="flex-1 w-full pb-8">
              <div className="flex flex-col gap-1.5 lg:sticky lg:top-28">
                <span className="text-[14px] italic text-[#0A3E6D] font-medium">
                  Digital Product
                </span>
                <h2 className="text-[22px] sm:text-[26px] font-bold text-[#2A2728] leading-snug">
                  Falcon
                </h2>
              </div>
            </div>

            {/* Falcon Dashboard Image positioned flush directly against horizontal divider line, scaled to full container width */}
            <div className="w-full mt-auto flex items-end shrink-0 pt-4">
              <Image
                src="/images/guidelines/brand-architecture-falcon-dashboard.png"
                alt="CarbonEthics Falcon DMRV Hotspot Monitoring Map Dashboard"
                width={1024}
                height={530}
                className="w-full h-auto object-contain object-left-bottom block drop-shadow-none rounded-t-[10px] border border-b-0 border-gray-200"
              />
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-6 pb-6 sm:pb-8">
            <div className="flex flex-col gap-4 text-[#0A3E6D] text-[16px] sm:text-[17px] leading-relaxed">
              <p>
                A falcon is known for its exceptional vision, precision, and ability to observe vast landscapes from above. The name FALCON reflects the capabilities at the core of CarbonEthics’ DMRV: sharp vision to detect environmental changes, precision to generate reliable measurements, and an aerial perspective that connects site-level data with landscape-scale insights.
              </p>
              <p className="font-medium text-[#2A2728]">
                Falcon is built around four core capabilities:
              </p>
            </div>

            {/* 4 Core Capabilities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {/* Sharp Vision */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-[#E9F6FE] text-[#0A3E6D] flex items-center justify-center shrink-0">
                    <Eye className="w-4 h-4 stroke-[2.2]" />
                  </span>
                  <h4 className="text-[16px] font-bold text-[#0A3E6D]">
                    Sharp vision
                  </h4>
                </div>
                <p className="text-[14px] text-gray-600 leading-relaxed pl-9">
                  Detecting and documenting changes across every part of the landscape with high-resolution aerial data.
                </p>
              </div>

              {/* Precision */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-[#E9F6FE] text-[#0A3E6D] flex items-center justify-center shrink-0">
                    <Target className="w-4 h-4 stroke-[2.2]" />
                  </span>
                  <h4 className="text-[16px] font-bold text-[#0A3E6D]">
                    Precision
                  </h4>
                </div>
                <p className="text-[14px] text-gray-600 leading-relaxed pl-9">
                  Generating consistent, measurable evidence to strengthen the accuracy and credibility of project monitoring.
                </p>
              </div>

              {/* Speed */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-[#E9F6FE] text-[#0A3E6D] flex items-center justify-center shrink-0">
                    <Zap className="w-4 h-4 stroke-[2.2]" />
                  </span>
                  <h4 className="text-[16px] font-bold text-[#0A3E6D]">
                    Speed
                  </h4>
                </div>
                <p className="text-[14px] text-gray-600 leading-relaxed pl-9">
                  Making monitoring more frequent and responsive, so project performance can be tracked closer to real time.
                </p>
              </div>

              {/* Clarity */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-lg bg-[#E9F6FE] text-[#0A3E6D] flex items-center justify-center shrink-0">
                    <FileText className="w-4 h-4 stroke-[2.2]" />
                  </span>
                  <h4 className="text-[16px] font-bold text-[#0A3E6D]">
                    Clarity
                  </h4>
                </div>
                <p className="text-[14px] text-gray-600 leading-relaxed pl-9">
                  Turning spatial and environmental data into clear evidence for reporting, verification, and decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] bg-gray-200" />

      {/* 6. Digital Product: Digital Monitoring Dashboard */}
      <div
        id="digital-monitoring-dashboard"
        className="scroll-mt-28 py-6 sm:py-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-4 flex flex-col gap-1.5 lg:sticky lg:top-28">
            <span className="text-[14px] italic text-[#0A3E6D] font-medium">
              Digital Product
            </span>
            <h2 className="text-[22px] sm:text-[26px] font-bold text-[#2A2728] leading-snug">
              Digital Monitoring Dashboard
            </h2>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-5 text-[#0A3E6D] text-[16px] sm:text-[17px] leading-relaxed">
            <p>
              The Digital Monitoring Dashboard provides a live view of planting and monitoring data from CarbonEthics’ CSR sites. It bridges field data collected from planting activities with clients, allowing them to follow project progress, access up-to-date information, and download relevant reports.
            </p>
            <p>
              The dashboard translates field-level data into a clear and accessible digital experience that strengthens transparency and engagement with CSR partners.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] bg-gray-200" />

      {/* 7. Digital Product: Internal Dashboard */}
      <div
        id="internal-dashboard"
        className="scroll-mt-28 py-6 sm:py-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-4 flex flex-col gap-1.5 lg:sticky lg:top-28">
            <span className="text-[14px] italic text-[#0A3E6D] font-medium">
              Digital Product
            </span>
            <h2 className="text-[22px] sm:text-[26px] font-bold text-[#2A2728] leading-snug">
              Internal Dashboard
            </h2>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-5 text-[#0A3E6D] text-[16px] sm:text-[17px] leading-relaxed">
            <p>
              The Internal Dashboard is an internal digital platform designed to support CarbonEthics’ business-as-usual operations as the organization continues to grow. It centralizes key information and workflows across teams, helping reduce fragmented processes and establish a shared source of truth.
            </p>
            <p>
              The platform enables teams to work more consistently and efficiently while providing a scalable foundation for future organizational growth.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] bg-gray-200" />

      {/* 8. Digital Product: Petani App */}
      <div
        id="petani-app"
        className="scroll-mt-28 pt-6 sm:pt-8 pb-0 -mb-6 relative"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Title at top with sticky constraint, Phone Image at bottom flush */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            {/* Title track container: height is constrained so sticky stops before reaching the phone image */}
            <div className="flex-1 w-full pb-8">
              <div className="flex flex-col gap-1.5 lg:sticky lg:top-28">
                <span className="text-[14px] italic text-[#0A3E6D] font-medium">
                  Digital Product
                </span>
                <h2 className="text-[22px] sm:text-[26px] font-bold text-[#2A2728] leading-snug">
                  Petani App
                </h2>
              </div>
            </div>

            {/* Petani App Phone Mockup positioned flush directly against bottom boundary, scaled to full container width */}
            <div className="w-full mt-auto flex items-end shrink-0 pt-4">
              <Image
                src="/images/guidelines/brand-architecture-petani-app.png"
                alt="CarbonEthics Petani App mobile UI mockup"
                width={826}
                height={1024}
                className="w-full h-auto object-contain object-left-bottom block drop-shadow-none"
              />
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-5 text-[#0A3E6D] text-[16px] sm:text-[17px] leading-relaxed pb-6 sm:pb-8">
            <p>
              The Petani App supports CarbonEthics’ CSR mangrove farmers in collecting and submitting field data from planting sites. The information gathered through the app is processed by the CarbonEthics team and subsequently integrated into the Digital Monitoring Dashboard.
            </p>
            <p>
              By connecting farmers, field activities, and clients through a shared data flow, the app helps create a more efficient and traceable monitoring process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
