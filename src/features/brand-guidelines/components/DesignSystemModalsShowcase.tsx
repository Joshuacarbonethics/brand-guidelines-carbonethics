"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowButton } from "@/features/shared/components/ArrowButton";
import {
  Bell,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Check,
  Eye,
  Filter,
  PanelLeftClose,
  Search,
  ArrowUpDown,
  X,
} from "lucide-react";

const DMRV_TABLE_ROWS = [
  { id: "HTSP-45123", type: "Hotspot", subdistrict: "Sabangau", cluster: "CA-001", time: "21-01-2026\n11:46 WIB", checked: true },
  { id: "DFRS-12123", type: "Deforestation", subdistrict: "Kahayan Hilir", cluster: "CA-002", time: "21-01-2026\n11:46 WIB", checked: true },
  { id: "WTRL-12442", type: "IoT", subdistrict: "Maliku", cluster: "CA-003", time: "21-01-2026\n11:46 WIB", checked: false },
  { id: "HTSP-45124", type: "Hotspot", subdistrict: "Pandih Batu", cluster: "CA-004", time: "21-01-2026\n11:46 WIB", checked: false },
  { id: "HTSP-45125", type: "Hotspot", subdistrict: "Sebangau Kuala", cluster: "CA-005", time: "21-01-2026\n11:46 WIB", checked: false },
  { id: "HTSP-45126", type: "Hotspot", subdistrict: "Jabiren Raya", cluster: "CA-006", time: "21-01-2026\n11:46 WIB", checked: false },
];

function CheckoutModalBody({
  isInteractive = false,
  onClose,
}: {
  isInteractive?: boolean;
  onClose?: () => void;
}) {
  const [certType, setCertType] = useState<"community" | "gifting">("gifting");
  const [recipientName, setRecipientName] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState(1);

  const unitPrice = 125000;
  const formattedTotal = `Rp${(unitPrice * quantity).toLocaleString("id-ID")}`;

  if (!isInteractive) {
    // Scaled Variant Showcase version matching Figma 11427:37840 (width 633.333px)
    return (
      <div className="bg-[#FDFDFD] flex flex-col items-start overflow-hidden relative rounded-[14.78px] w-full max-w-[633.33px] shadow-[0px_10.5px_16px_-2px_rgba(16,24,40,0.12)]">
        {/* Top bar */}
        <div className="border-b border-[#E0E0E0] flex items-center justify-between p-[14px] sm:p-[16.89px] w-full">
          <p className="font-normal leading-[16.89px] text-[12.67px] text-[#1D1B20] tracking-[-0.063px]">
            Checkout
          </p>
          <div className="relative shrink-0 size-[12.67px] flex items-center justify-center text-[#1D1B20]">
            <X className="w-[12.67px] h-[12.67px] stroke-[1.75]" />
          </div>
        </div>

        {/* Main 2-column content */}
        <div className="flex flex-col sm:flex-row gap-[14px] sm:gap-[16.89px] items-stretch sm:items-start p-[14px] sm:p-[16.89px] w-full">
          {/* Left Column: Product Options & Personal Information */}
          <div className="flex-1 flex flex-col gap-[16px] sm:gap-[21.11px] py-[4px] sm:py-[12.67px] min-w-0">
            {/* Product Options */}
            <div className="flex flex-col gap-[10.56px] items-start w-full">
              <p className="font-medium leading-[12.67px] text-[#949494] text-[8.44px] w-full">
                Product Options
              </p>

              <div className="flex flex-col gap-[10.56px] items-start w-full">
                {/* Certificate radio */}
                <div className="flex flex-col gap-[6.33px] items-start w-full max-w-[219.56px]">
                  <p className="font-semibold leading-[8.44px] text-[#2A2728] text-[6.33px] tracking-[0.19px]">
                    Certificate
                  </p>
                  <div className="flex flex-wrap gap-[8px] sm:gap-[6.33px] items-center">
                    <div className="flex gap-[4.22px] items-center">
                      <span className="size-[8.44px] rounded-full border border-[#727272] inline-block shrink-0" />
                      <span className="font-light leading-[8.44px] text-[#2A2728] text-[6.33px] tracking-[0.19px]">
                        Support Coastal Community
                      </span>
                    </div>
                    <div className="flex gap-[4.22px] items-center">
                      <span className="size-[8.44px] rounded-full border-[1.2px] border-[#0A3E6D] flex items-center justify-center shrink-0">
                        <span className="size-[4.22px] rounded-full bg-[#0A3E6D]" />
                      </span>
                      <span className="font-light leading-[8.44px] text-[#403B3C] text-[6.33px] tracking-[0.19px]">
                        Gifting
                      </span>
                    </div>
                  </div>
                </div>

                {/* Recipient Name & Email */}
                <div className="flex flex-col gap-[6.33px] items-start w-full max-w-[219.56px]">
                  <div className="flex flex-col gap-[3.17px] items-start w-full">
                    <p className="font-semibold leading-[8.44px] text-[#403B3C] text-[6.33px] tracking-[0.19px]">
                      Name
                    </p>
                    <div className="bg-[#FDFDFD] border border-[#E0E0E0] flex h-[23.22px] items-center px-[6.33px] py-[4.22px] rounded-[4.22px] w-full">
                      <span className="font-normal leading-[11.61px] text-[#ADAAAA] text-[7.39px] tracking-[0.074px]">
                        Recipient’s Name
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-[3.17px] items-start w-full">
                    <p className="font-semibold leading-[8.44px] text-[#403B3C] text-[6.33px] tracking-[0.19px]">
                      Email
                    </p>
                    <div className="bg-[#FDFDFD] border border-[#E0E0E0] flex h-[23.22px] items-center px-[6.33px] py-[4.22px] rounded-[4.22px] w-full">
                      <span className="font-normal leading-[11.61px] text-[#ADAAAA] text-[7.39px] tracking-[0.074px]">
                        Recipient’s Email
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div className="flex flex-col gap-[10.56px] items-start w-full">
              <p className="font-medium leading-[12.67px] text-[#949494] text-[8.44px] w-full">
                Personal Information
              </p>

              <div className="flex flex-col gap-[10.56px] items-start w-full">
                <div className="flex gap-[10.56px] items-start w-full">
                  <div className="flex-1 flex flex-col gap-[3.17px] items-start min-w-0">
                    <p className="font-semibold leading-[8.44px] text-[#2A2728] text-[6.33px] tracking-[0.19px]">
                      First Name
                    </p>
                    <div className="bg-[#FDFDFD] border border-[#E0E0E0] h-[20.06px] px-[6.33px] py-[4.22px] rounded-[4.22px] w-full" />
                  </div>
                  <div className="flex-1 flex flex-col gap-[3.17px] items-start min-w-0">
                    <p className="font-semibold leading-[8.44px] text-[#2A2728] text-[6.33px] tracking-[0.19px]">
                      Last Name
                    </p>
                    <div className="bg-[#FDFDFD] border border-[#E0E0E0] h-[20.06px] px-[6.33px] py-[4.22px] rounded-[4.22px] w-full" />
                  </div>
                </div>

                <div className="flex gap-[10.56px] items-start w-full">
                  <div className="flex-1 flex flex-col gap-[3.17px] items-start min-w-0">
                    <p className="font-semibold leading-[8.44px] text-[#2A2728] text-[6.33px] tracking-[0.19px]">
                      Email
                    </p>
                    <div className="bg-[#FDFDFD] border border-[#E0E0E0] h-[20.06px] px-[6.33px] py-[4.22px] rounded-[4.22px] w-full" />
                  </div>
                  <div className="flex-1 flex flex-col gap-[3.17px] items-start min-w-0">
                    <p className="font-semibold leading-[8.44px] text-[#2A2728] text-[6.33px] tracking-[0.19px]">
                      Phone Number
                    </p>
                    <div className="bg-[#FDFDFD] border border-[#E0E0E0] h-[20.06px] px-[6.33px] py-[4.22px] rounded-[4.22px] w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="flex-1 bg-[#F1F5F9] flex flex-col p-[14px] sm:p-[16.89px] rounded-[10.56px] min-w-0">
            <div className="flex flex-col gap-[14px] sm:gap-[16.89px] items-end w-full">
              <p className="font-medium leading-[12.67px] text-[#2A2728] text-[8.44px] w-full">
                Order Summary <span className="font-light">(1 item)</span>
              </p>

              <div className="flex flex-col gap-[10.56px] items-start w-full">
                {/* Item Row */}
                <div className="flex gap-[10.56px] items-center w-full">
                  <div className="relative size-[45.22px] rounded-[4.22px] overflow-hidden shrink-0">
                    <Image
                      src="/images/guidelines/modals/bcp-thumb.png"
                      alt="Blue Carbon Package"
                      fill
                      sizes="46px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-[2.11px] min-w-0">
                    <p className="font-medium leading-[14.78px] text-[#2A2728] text-[9.5px] truncate">
                      Blue Carbon Package
                    </p>
                    <p className="font-light leading-[14.78px] text-[#0A3E6D] text-[9.5px]">
                      Rp125.000
                    </p>
                    <p className="font-light leading-[10.56px] text-[#727272] text-[7.39px] tracking-[0.074px] truncate">
                      SKU: CSR-PL-MNG-BCP_NOV23-TWD-BC-1
                    </p>
                  </div>
                </div>

                {/* Certificate Card */}
                <div className="bg-[#FDFDFD] border border-[#E0E0E0] rounded-[4.22px] p-[8.44px] flex flex-col gap-[8.44px] w-full">
                  <div className="flex items-center justify-between gap-[6.33px] w-full">
                    <span className="font-light leading-[8.44px] text-[#0A3E6D] text-[6.33px] tracking-[0.19px]">
                      CERTIFICATE
                    </span>
                    <span className="bg-[#EAF6FD] border border-[#0A3E6D] px-[6.33px] py-[3px] rounded-[10.56px] font-light leading-[8.44px] text-[#0A3E6D] text-[6.33px] tracking-[0.19px]">
                      Gifting
                    </span>
                  </div>

                  <div className="w-full h-[0.5px] bg-[#E0E0E0]" />

                  <div className="flex flex-col gap-[5px] w-full">
                    <p className="font-light leading-[8.44px] text-[#0A3E6D] text-[6.33px] tracking-[0.19px]">
                      CERTIFICATES GOES TO
                    </p>
                    <div className="flex items-center justify-between w-full">
                      <span className="font-light leading-[10.56px] text-[#727272] text-[7.39px]">
                        Recipients
                      </span>
                      <span className="font-medium leading-[11.61px] text-[#2A2728] text-[7.39px]">
                        John Doe
                      </span>
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <span className="font-light leading-[10.56px] text-[#727272] text-[7.39px]">
                        Email
                      </span>
                      <span className="font-medium leading-[11.61px] text-[#2A2728] text-[7.39px]">
                        johndoe@gmail.com
                      </span>
                    </div>
                  </div>
                </div>

                {/* Quantity & Subtotal */}
                <div className="flex flex-col gap-[5px] w-full">
                  <div className="flex items-center justify-between w-full">
                    <span className="font-light leading-[12.67px] text-[#727272] text-[8.44px]">
                      Quantity
                    </span>
                    <span className="font-medium leading-[12.67px] text-[#2A2728] text-[8.44px]">
                      1
                    </span>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <span className="font-light leading-[12.67px] text-[#727272] text-[8.44px]">
                      Subtotal
                    </span>
                    <span className="font-medium leading-[12.67px] text-[#2A2728] text-[8.44px]">
                      Rp125.000
                    </span>
                  </div>
                </div>

                <div className="w-full h-[0.5px] bg-[#E0E0E0]" />

                {/* Total */}
                <div className="flex items-center justify-between w-full">
                  <span className="font-normal leading-[16.89px] text-[#2A2728] text-[12.67px] tracking-[-0.063px]">
                    Total
                  </span>
                  <span className="font-normal leading-[16.89px] text-[#0A3E6D] text-[12.67px] tracking-[-0.063px]">
                    Rp125.000
                  </span>
                </div>
              </div>

              {/* Stepper + Continue Button */}
              <div className="flex gap-[10.56px] items-center w-full">
                <div className="bg-[#FDFDFD] border border-[#E0E0E0] flex flex-1 items-center justify-between rounded-[10.56px] h-[27.44px] overflow-hidden">
                  <span className="flex-1 flex items-center justify-center font-light text-[#949494] text-[9.5px]">
                    -
                  </span>
                  <span className="flex-1 flex items-center justify-center font-medium text-[#0A3E6D] text-[7.39px]">
                    1
                  </span>
                  <span className="flex-1 flex items-center justify-center font-light text-[#0A3E6D] text-[9.5px]">
                    +
                  </span>
                </div>

                <div className="bg-[#0A3E6D] flex gap-[4.22px] items-center justify-center px-[10.56px] py-[6.33px] rounded-[10.56px] w-[133.53px] shrink-0">
                  <span className="font-bold leading-[14.78px] text-[#FDFDFD] text-[9.5px]">
                    Continue
                  </span>
                  <Image
                    src="/images/guidelines/modals/icon-arrow-circle.svg"
                    alt=""
                    width={12}
                    height={12}
                    className="size-[11.61px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Full-scale interactive modal for Usage -> Task Completion ("Plant Now")
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="bg-[#FDFDFD] flex flex-col items-start overflow-hidden relative rounded-[20px] sm:rounded-[28px] w-full max-w-[920px] max-h-[90vh] shadow-2xl"
    >
      {/* Top Bar */}
      <div className="border-b border-[#E0E0E0] flex items-center justify-between px-6 sm:px-8 py-5 sm:py-6 w-full shrink-0">
        <h3 className="font-normal text-[20px] sm:text-[24px] leading-[32px] text-[#1D1B20] tracking-[-0.005em]">
          Checkout
        </h3>
        <button
          type="button"
          onClick={onClose}
          className="size-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-[#1D1B20] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Scrollable Body */}
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-stretch lg:items-start p-6 sm:p-8 w-full overflow-y-auto">
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-6 sm:gap-8 py-2 min-w-0">
          {/* Product Options */}
          <div className="flex flex-col gap-4 items-start w-full">
            <h4 className="font-medium text-[15px] sm:text-[16px] leading-[24px] text-[#949494]">
              Product Options
            </h4>

            <div className="flex flex-col gap-4 items-start w-full">
              {/* Certificate Radio */}
              <div className="flex flex-col gap-2.5 items-start w-full">
                <span className="font-semibold text-[12px] leading-[16px] tracking-[0.03em] text-[#2A2728]">
                  Certificate
                </span>
                <div className="flex flex-wrap gap-4 items-center">
                  <button
                    type="button"
                    onClick={() => setCertType("community")}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <span
                      className={`size-4 rounded-full border flex items-center justify-center ${
                        certType === "community"
                          ? "border-[#0A3E6D] border-[1.5px]"
                          : "border-[#727272]"
                      }`}
                    >
                      {certType === "community" && (
                        <span className="size-2 rounded-full bg-[#0A3E6D]" />
                      )}
                    </span>
                    <span className="font-light text-[12px] leading-[16px] tracking-[0.03em] text-[#2A2728]">
                      Support Coastal Community
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCertType("gifting")}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <span
                      className={`size-4 rounded-full border flex items-center justify-center ${
                        certType === "gifting"
                          ? "border-[#0A3E6D] border-[1.5px]"
                          : "border-[#727272]"
                      }`}
                    >
                      {certType === "gifting" && (
                        <span className="size-2 rounded-full bg-[#0A3E6D]" />
                      )}
                    </span>
                    <span className="font-light text-[12px] leading-[16px] tracking-[0.03em] text-[#403B3C]">
                      Gifting
                    </span>
                  </button>
                </div>
              </div>

              {/* Recipient Inputs */}
              <div className="flex flex-col gap-3 items-start w-full max-w-[380px]">
                <label className="flex flex-col gap-1.5 items-start w-full">
                  <span className="font-semibold text-[12px] leading-[16px] tracking-[0.03em] text-[#403B3C]">
                    Name
                  </span>
                  <input
                    type="text"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    placeholder="Recipient’s Name"
                    className="bg-[#FDFDFD] border border-[#E0E0E0] focus:border-[#0A3E6D] outline-none h-[42px] px-3 py-2 rounded-[8px] w-full text-[14px] text-[#2A2728] placeholder:text-[#ADAAAA]"
                  />
                </label>

                <label className="flex flex-col gap-1.5 items-start w-full">
                  <span className="font-semibold text-[12px] leading-[16px] tracking-[0.03em] text-[#403B3C]">
                    Email
                  </span>
                  <input
                    type="email"
                    value={recipientEmail}
                    onChange={(e) => setRecipientEmail(e.target.value)}
                    placeholder="Recipient’s Email"
                    className="bg-[#FDFDFD] border border-[#E0E0E0] focus:border-[#0A3E6D] outline-none h-[42px] px-3 py-2 rounded-[8px] w-full text-[14px] text-[#2A2728] placeholder:text-[#ADAAAA]"
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="flex flex-col gap-4 items-start w-full">
            <h4 className="font-medium text-[15px] sm:text-[16px] leading-[24px] text-[#949494]">
              Personal Information
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <label className="flex flex-col gap-1.5 items-start w-full">
                <span className="font-semibold text-[12px] leading-[16px] tracking-[0.03em] text-[#2A2728]">
                  First Name
                </span>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="bg-[#FDFDFD] border border-[#E0E0E0] focus:border-[#0A3E6D] outline-none h-[38px] px-3 py-2 rounded-[8px] w-full text-[14px] text-[#2A2728]"
                />
              </label>

              <label className="flex flex-col gap-1.5 items-start w-full">
                <span className="font-semibold text-[12px] leading-[16px] tracking-[0.03em] text-[#2A2728]">
                  Last Name
                </span>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="bg-[#FDFDFD] border border-[#E0E0E0] focus:border-[#0A3E6D] outline-none h-[38px] px-3 py-2 rounded-[8px] w-full text-[14px] text-[#2A2728]"
                />
              </label>

              <label className="flex flex-col gap-1.5 items-start w-full">
                <span className="font-semibold text-[12px] leading-[16px] tracking-[0.03em] text-[#2A2728]">
                  Email
                </span>
                <input
                  type="email"
                  value={buyerEmail}
                  onChange={(e) => setBuyerEmail(e.target.value)}
                  className="bg-[#FDFDFD] border border-[#E0E0E0] focus:border-[#0A3E6D] outline-none h-[38px] px-3 py-2 rounded-[8px] w-full text-[14px] text-[#2A2728]"
                />
              </label>

              <label className="flex flex-col gap-1.5 items-start w-full">
                <span className="font-semibold text-[12px] leading-[16px] tracking-[0.03em] text-[#2A2728]">
                  Phone Number
                </span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-[#FDFDFD] border border-[#E0E0E0] focus:border-[#0A3E6D] outline-none h-[38px] px-3 py-2 rounded-[8px] w-full text-[14px] text-[#2A2728]"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Right Column: Order Summary */}
        <div className="flex-1 bg-[#F1F5F9] flex flex-col p-6 sm:p-8 rounded-[20px] min-w-0">
          <div className="flex flex-col gap-6 items-end w-full">
            <p className="font-medium text-[16px] leading-[24px] text-[#2A2728] w-full">
              Order Summary <span className="font-light">({quantity} {quantity > 1 ? "items" : "item"})</span>
            </p>

            <div className="flex flex-col gap-4 items-start w-full">
              {/* Item Row */}
              <div className="flex gap-4 items-center w-full">
                <div className="relative size-[76px] rounded-[8px] overflow-hidden shrink-0">
                  <Image
                    src="/images/guidelines/modals/bcp-thumb.png"
                    alt="Blue Carbon Package"
                    fill
                    sizes="76px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-1 min-w-0">
                  <p className="font-medium text-[18px] leading-[28px] text-[#2A2728]">
                    Blue Carbon Package
                  </p>
                  <p className="font-light text-[18px] leading-[28px] text-[#0A3E6D]">
                    Rp125.000
                  </p>
                  <p className="font-light text-[13px] leading-[18px] text-[#727272] truncate">
                    SKU: CSR-PL-MNG-BCP_NOV23-TWD-BC-1
                  </p>
                </div>
              </div>

              {/* Certificate Summary Box */}
              <div className="bg-[#FDFDFD] border border-[#E0E0E0] rounded-[8px] p-4 flex flex-col gap-3.5 w-full">
                <div className="flex items-center justify-between gap-3 w-full">
                  <span className="font-light text-[12px] leading-[16px] tracking-[0.03em] text-[#0A3E6D]">
                    CERTIFICATE
                  </span>
                  <span className="bg-[#EAF6FD] border border-[#0A3E6D] px-3 py-1.5 rounded-[20px] font-light text-[12px] leading-[16px] tracking-[0.03em] text-[#0A3E6D]">
                    {certType === "gifting" ? "Gifting" : "Support Coastal Community"}
                  </span>
                </div>

                <div className="w-full h-[1px] bg-[#E0E0E0]" />

                <div className="flex flex-col gap-2 w-full">
                  <p className="font-light text-[12px] leading-[16px] tracking-[0.03em] text-[#0A3E6D]">
                    CERTIFICATES GOES TO
                  </p>
                  <div className="flex items-center justify-between w-full">
                    <span className="font-light text-[14px] leading-[20px] text-[#727272]">
                      Recipients
                    </span>
                    <span className="font-medium text-[14px] leading-[22px] text-[#2A2728]">
                      {recipientName.trim() || "John Doe"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <span className="font-light text-[14px] leading-[20px] text-[#727272]">
                      Email
                    </span>
                    <span className="font-medium text-[14px] leading-[22px] text-[#2A2728]">
                      {recipientEmail.trim() || "johndoe@gmail.com"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quantity & Subtotal */}
              <div className="flex flex-col gap-2.5 w-full">
                <div className="flex items-center justify-between w-full">
                  <span className="font-light text-[16px] leading-[24px] text-[#727272]">
                    Quantity
                  </span>
                  <span className="font-medium text-[16px] leading-[24px] text-[#2A2728]">
                    {quantity}
                  </span>
                </div>
                <div className="flex items-center justify-between w-full">
                  <span className="font-light text-[16px] leading-[24px] text-[#727272]">
                    Subtotal
                  </span>
                  <span className="font-medium text-[16px] leading-[24px] text-[#2A2728]">
                    {formattedTotal}
                  </span>
                </div>
              </div>

              <div className="w-full h-[1px] bg-[#E0E0E0]" />

              {/* Total */}
              <div className="flex items-center justify-between w-full">
                <span className="font-normal text-[22px] sm:text-[24px] leading-[32px] text-[#2A2728] tracking-[-0.005em]">
                  Total
                </span>
                <span className="font-normal text-[22px] sm:text-[24px] leading-[32px] text-[#0A3E6D] tracking-[-0.005em]">
                  {formattedTotal}
                </span>
              </div>
            </div>

            {/* Stepper + Continue */}
            <div className="flex gap-4 items-center w-full">
              <div className="bg-[#FDFDFD] border border-[#E0E0E0] flex flex-1 items-center justify-between rounded-[20px] h-[52px] overflow-hidden">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="flex-1 h-full flex items-center justify-center font-light text-[#949494] hover:text-[#2A2728] hover:bg-gray-50 text-[18px] transition-colors cursor-pointer"
                >
                  -
                </button>
                <span className="flex-1 flex items-center justify-center font-medium text-[#0A3E6D] text-[14px]">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="flex-1 h-full flex items-center justify-center font-light text-[#0A3E6D] hover:bg-gray-50 text-[18px] transition-colors cursor-pointer"
                >
                  +
                </button>
              </div>

              <ArrowButton
                variant="navy"
                type="button"
                animate
                centerContent
                gap="gap-2.5"
                onClick={onClose}
                className="w-[190px] sm:w-[230px] h-[52px] px-5 py-3 rounded-[20px] text-[18px] md:text-[18px] leading-[28px] font-bold shrink-0 cursor-pointer"
              >
                Continue
              </ArrowButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DesignSystemModalsShowcase() {
  const [activeModal, setActiveModal] = useState<"task-completion" | "action-feedback" | null>(
    null
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModal(null);
      }
    };
    if (activeModal) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModal]);

  return (
    <div className="w-full flex flex-col gap-10 sm:gap-12">
      {/* Page Title & Intro */}
      <div className="flex flex-col gap-1.5 sm:gap-2">
        <h1 className="text-[26px] sm:text-[30px] lg:text-[34px] font-bold tracking-tight leading-tight text-[#2A2728]">
          Modal
        </h1>
        <p className="text-[14px] sm:text-[15px] leading-relaxed text-[#403B3C] max-w-3xl">
          A modal is a dialog that temporarily blocks the main experience to show critical information or user confirmation or action completion before proceeding.
        </p>
      </div>

      {/* ================= 1. VARIANTS SECTION ================= */}
      <div className="w-full flex flex-col gap-4 sm:gap-5">
        <h2 className="text-[24px] sm:text-[28px] font-normal leading-[1.25] tracking-[-0.005em] text-[#2A2728]">
          Variants
        </h2>

        {/* Gray Container holding Navy and White Variant Previews */}
        <div className="w-full bg-[#F5F5F5] rounded-[20px] p-5 sm:p-8 lg:p-[64px] flex flex-col items-center gap-12 lg:gap-[64px]">
          {/* ---------- Variant 1: Navy ---------- */}
          <div className="w-full max-w-[790px] flex flex-col items-center gap-5 sm:gap-[24px]">
            <h3 className="text-[20px] font-medium leading-[32px] text-[#0A3E6D] text-center">
              Navy
            </h3>

            {/* Navy Preview Frame (790 x 513.082) */}
            <div className="w-full min-h-[420px] sm:h-[513.08px] bg-[#EFF2F5] rounded-[4.18px] overflow-hidden relative flex items-center justify-center p-4">
              {/* Background DMRV Dashboard UI */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none select-none overflow-hidden"
              >
                {/* Top Navigation Bar */}
                <div className="absolute top-0 left-0 right-0 h-[43.89px] bg-white border-b border-[#EAECF0] px-[20.9px] flex items-center justify-between">
                  <div className="flex items-center gap-[45px]">
                    <div className="flex items-center gap-[8.36px]">
                      <div className="relative w-[84.65px] h-[20.38px]">
                        <Image
                          src="/images/guidelines/modals/ce-logo-blue.png"
                          alt=""
                          fill
                          sizes="85px"
                          className="object-contain"
                        />
                      </div>
                      <div className="w-[0.5px] h-[11.5px] bg-[#0A3E6D]" />
                      <span className="font-bold text-[10.45px] text-[#0A3E6D]">DMRV</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-[20.9px]">
                      <span className="font-semibold text-[9.4px] text-[#0A3E6D]">Dashboard</span>
                      <span className="font-light text-[9.4px] text-[#949494]">Project</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-[10.45px]">
                    <Bell className="size-[12.54px] text-[#2A2728]" />
                    <div className="w-[0.5px] h-[16.72px] bg-[#E0E0E0]" />
                    <span className="font-medium text-[8.36px] text-[#2A2728]">
                      Kevin CarbonEthics
                    </span>
                    <ChevronDown className="size-[10.45px] text-[#2A2728]" />
                  </div>
                </div>

                {/* Navy Banner */}
                <div className="absolute left-0 right-0 top-[44.41px] h-[104.5px] bg-[#0A3E6D]" />

                {/* Left Sidebar */}
                <div className="hidden sm:flex absolute left-0 top-[43.89px] bottom-0 w-[156.75px] bg-white border-r border-[#EAECF0] py-[16.72px] flex-col gap-[20.9px]">
                  <div className="px-[20.9px] flex items-center justify-between">
                    <span className="font-semibold text-[12.54px] text-[#2A2728]">FS v2</span>
                    <PanelLeftClose className="size-[12.54px] text-[#2A2728]" />
                  </div>
                  <div className="px-[10.45px] flex flex-col gap-[6px] text-[7.31px] text-[#2A2728]">
                    <div className="px-[10.45px] py-[6.27px]">Dashboard Overview</div>
                    <div className="px-[10.45px] py-[6.27px] flex items-center justify-between">
                      <span>Data Collection</span>
                      <ChevronUp className="size-[8.36px] rotate-180" />
                    </div>
                    <div className="px-[10.45px] py-[6.27px] flex items-center justify-between font-medium">
                      <span>Early Warning System</span>
                      <ChevronUp className="size-[8.36px]" />
                    </div>
                    <div className="pl-[16.72px] pr-[10.45px] py-[6.27px] text-[#403B3C]">Map</div>
                    <div className="pl-[16.72px] pr-[10.45px] py-[6.27px] bg-[#EAF6FD] text-[#0A3E6D] rounded-[4.18px]">
                      Ticket
                    </div>
                    <div className="pl-[16.72px] pr-[10.45px] py-[6.27px] text-[#403B3C]">
                      Patrol Management
                    </div>
                    <div className="pl-[16.72px] pr-[10.45px] py-[6.27px] text-[#403B3C]">Log</div>
                    <div className="px-[10.45px] py-[6.27px] flex items-center justify-between">
                      <span>User Membership</span>
                      <ChevronUp className="size-[8.36px] rotate-180" />
                    </div>
                    <div className="px-[10.45px] py-[6.27px] flex items-center justify-between">
                      <span>Reporting</span>
                      <ChevronUp className="size-[8.36px] rotate-180" />
                    </div>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="absolute left-0 sm:left-[171.38px] right-[14px] top-[58.52px] flex flex-col gap-[16.72px]">
                  <div className="flex flex-col gap-[8.36px]">
                    <div className="flex items-center gap-[4.18px] text-[6.27px] text-[#F0EEEE]">
                      <span>Project</span>
                      <ChevronRight className="size-[8.36px]" />
                      <span>Katingan Mentaya</span>
                      <ChevronRight className="size-[8.36px]" />
                      <span>FS v2</span>
                      <ChevronRight className="size-[8.36px]" />
                      <span className="font-semibold text-[#FDFDFD]">Early Warning System</span>
                    </div>
                    <p className="font-semibold text-[12.54px] text-[#FDFDFD]">Ticket</p>
                  </div>

                  {/* White Card Table */}
                  <div className="bg-white rounded-[8.36px] p-[12.54px] shadow-sm flex flex-col gap-[12.54px]">
                    <div className="flex gap-[4.18px]">
                      <span className="px-[16.72px] py-[5.22px] rounded-[5.22px] bg-[#0A3E6D] text-white text-[6.27px] font-semibold">
                        Unassigned (6)
                      </span>
                      <span className="px-[16.72px] py-[5.22px] rounded-[5.22px] border border-[#0A3E6D] text-[#0A3E6D] text-[6.27px] font-semibold">
                        Assigned (5)
                      </span>
                    </div>

                    <div className="flex gap-[8.36px]">
                      <div className="flex-1 flex flex-col gap-[3.13px]">
                        <span className="text-[6.27px] text-[#2A2728]">Search</span>
                        <div className="border border-[#E0E0E0] rounded-[4.18px] px-[7.31px] py-[5.22px] flex items-center gap-[4.18px] text-[7.31px] text-[#ADAAAA]">
                          <Search className="size-[10.45px]" />
                          <span>Search by Ticket ID</span>
                        </div>
                      </div>
                      <div className="w-[109.7px] flex flex-col gap-[3.13px]">
                        <span className="text-[6.27px] text-[#2A2728]">Filter</span>
                        <div className="border border-[#E0E0E0] rounded-[4.18px] px-[7.31px] py-[5.22px] flex items-center gap-[4.18px] text-[7.31px] text-[#ADAAAA]">
                          <Filter className="size-[10.45px]" />
                          <span>Filter by</span>
                        </div>
                      </div>
                    </div>

                    {/* Table Rows */}
                    <div className="flex flex-col text-[7.31px]">
                      <div className="flex items-center border-b border-[#E0E0E0] py-[6.27px] text-[#403B3C]">
                        <div className="w-[24px] flex justify-center">
                          <div className="size-[8.36px] border border-[#0A3E6D] rounded-[2px]" />
                        </div>
                        <div className="w-[100px] flex items-center justify-between pr-2">
                          <span>Ticket ID</span>
                          <ArrowUpDown className="size-[8.36px]" />
                        </div>
                        <div className="w-[100px]">Type</div>
                        <div className="w-[100px]">Subdistrict</div>
                        <div className="w-[90px]">Cluster Area</div>
                        <div className="w-[95px]">Acquired Time</div>
                        <div className="flex-1 text-center">Action</div>
                      </div>
                      {DMRV_TABLE_ROWS.map((row) => (
                        <div
                          key={row.id}
                          className="flex items-center border-b border-[#E0E0E0] py-[8px] text-[#2A2728]"
                        >
                          <div className="w-[24px] flex justify-center">
                            <div
                              className={`size-[8.36px] rounded-[2px] border flex items-center justify-center ${
                                row.checked
                                  ? "border-[#0A3E6D] bg-[#F8F7F8]"
                                  : "border-[#D6D6D6] bg-white"
                              }`}
                            >
                              {row.checked && <Check className="size-[6px] text-[#0A3E6D]" />}
                            </div>
                          </div>
                          <div className="w-[100px] font-semibold">{row.id}</div>
                          <div className="w-[100px] text-[#403B3C]">{row.type}</div>
                          <div className="w-[100px] text-[#403B3C]">{row.subdistrict}</div>
                          <div className="w-[90px] text-[#403B3C]">{row.cluster}</div>
                          <div className="w-[95px] text-[6.27px] text-[#403B3C] whitespace-pre-line">
                            {row.time}
                          </div>
                          <div className="flex-1 flex justify-center">
                            <span className="size-[11.5px] rounded-[2.6px] bg-[#71CDC0] flex items-center justify-center text-white">
                              <Eye className="size-[7.3px]" />
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Floating Bar */}
                <div className="absolute left-[calc(50%+78.11px)] -translate-x-1/2 top-[422.17px] bg-[#0A3E6D] px-[10.45px] py-[5.22px] rounded-[5.22px] flex items-center gap-[20.9px]">
                  <span className="text-white text-[8.36px]">
                    <strong className="font-semibold">2 Ticket</strong> Selected
                  </span>
                  <span className="bg-[#FDFDFD] text-[#0A3E6D] font-semibold text-[6.27px] px-[7.84px] py-[4.18px] rounded-[5.22px]">
                    Create Patrol
                  </span>
                </div>
              </div>

              {/* Frosted Dark Backdrop Overlay */}
              <div className="absolute inset-0 backdrop-blur-[4.18px] bg-[rgba(64,59,60,0.6)]" />

              {/* Centered Navy Modal ("Keep in Touch" - 271.693px x 337.526px) */}
              <div className="relative z-10 bg-white rounded-[10.45px] shadow-[0px_10.45px_12.54px_-2.09px_rgba(16,24,40,0.08),0px_4.18px_4.18px_-2.09px_rgba(16,24,40,0.03)] overflow-hidden w-[271.69px]">
                <div className="bg-[#0A3E6D] flex flex-col items-center w-full">
                  {/* Navy Header */}
                  <div className="bg-[#0A3E6D] p-[16.72px] w-full flex flex-col gap-[2.09px] items-end">
                    <div className="relative size-[12.54px] shrink-0">
                      <Image
                        src="/images/guidelines/modals/icon-close-circle.svg"
                        alt=""
                        width={13}
                        height={13}
                        className="size-full"
                      />
                    </div>

                    <div className="flex flex-col gap-[6.27px] items-start w-full">
                      <div className="flex flex-col gap-[10.45px] items-start w-full">
                        <div className="relative size-[25.08px] shrink-0">
                          <Image
                            src="/images/guidelines/modals/icon-mail-circle.svg"
                            alt=""
                            width={25}
                            height={25}
                            className="size-full"
                          />
                        </div>
                        <p className="font-semibold leading-[14.63px] text-[#FDFDFD] text-[9.405px]">
                          Keep in Touch
                        </p>
                      </div>

                      <p className="font-light leading-[8.36px] text-[#E0E0E0] text-[6.27px] tracking-[0.188px]">
                        You will subscribe to our exclusive content on all our carbon conservation efforts and gain access to our newsletter!
                      </p>
                    </div>
                  </div>

                  {/* White Body with rounded top corners */}
                  <div className="bg-white rounded-t-[10.45px] px-[12.54px] py-[16.72px] h-[216.31px] w-full flex flex-col justify-between items-end">
                    <div className="flex flex-col gap-[14.63px] items-start w-full">
                      {/* First Name & Last Name Row */}
                      <div className="flex gap-[12.54px] items-start w-full">
                        <div className="flex-1 flex flex-col gap-[3.135px] items-start min-w-0">
                          <p className="font-light text-[7.315px] leading-[10.45px] tracking-[0.073px] text-[#564E50]">
                            First Name <span className="text-[#BC787A]">*</span>
                          </p>
                          <div className="bg-[#FDFDFD] border-[0.522px] border-[#E0E0E0] rounded-[4.18px] px-[7.315px] py-[5.225px] w-full">
                            <p className="font-light text-[8.36px] leading-[12.54px] text-[#ADAAAA]">
                              First name
                            </p>
                          </div>
                        </div>

                        <div className="flex-1 flex flex-col gap-[3.135px] items-start min-w-0">
                          <p className="font-light text-[7.315px] leading-[10.45px] tracking-[0.073px] text-[#564E50]">
                            Last Name <span className="text-[#BC787A]">*</span>
                          </p>
                          <div className="bg-[#FDFDFD] border-[0.522px] border-[#E0E0E0] rounded-[4.18px] px-[7.315px] py-[5.225px] w-full">
                            <p className="font-light text-[8.36px] leading-[12.54px] text-[#ADAAAA]">
                              Last name
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Email Row */}
                      <div className="flex flex-col gap-[3.135px] items-start w-full">
                        <p className="font-light text-[7.315px] leading-[10.45px] tracking-[0.073px] text-[#564E50]">
                          Email <span className="text-[#BC787A]">*</span>
                        </p>
                        <div className="bg-[#FDFDFD] border-[0.522px] border-[#E0E0E0] rounded-[4.18px] px-[7.315px] py-[5.225px] w-full">
                          <p className="font-light text-[8.36px] leading-[12.54px] text-[#ADAAAA]">
                            name@example.com
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="bg-[#0A3E6D] flex gap-[2.61px] items-center justify-center px-[8.36px] py-[4.18px] rounded-[6.27px]">
                      <span className="font-bold leading-[12.54px] text-[#FDFDFD] text-[8.36px]">
                        Submit
                      </span>
                      <Image
                        src="/images/guidelines/modals/icon-arrow-circle.svg"
                        alt=""
                        width={11}
                        height={11}
                        className="size-[10.45px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ---------- Variant 2: White ---------- */}
          <div className="w-full max-w-[798px] flex flex-col items-center gap-5 sm:gap-[24px]">
            <h3 className="text-[20px] font-medium leading-[32px] text-[#0A3E6D] text-center">
              White
            </h3>

            {/* White Preview Frame (798 x 518.28) */}
            <div className="w-full min-h-[460px] sm:h-[518.28px] bg-[#FDFDFD] rounded-[4.22px] overflow-hidden relative flex items-center justify-center p-3 sm:p-6">
              {/* Background Product Page UI */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none select-none overflow-hidden"
              >
                {/* Navy Website Header */}
                <div className="h-[52.78px] bg-[#0A3E6D] px-[55px] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="size-4 rounded-full bg-white/90" />
                    <span className="text-white font-semibold text-[11px]">CarbonEthics</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-4 text-[7.39px] text-white/90 font-semibold">
                    <span>Climate Solutions</span>
                    <span>Our Projects &amp; Impacts</span>
                    <span>Climate Resources</span>
                    <span>About Us</span>
                  </div>
                  <div className="bg-[#F8F7F8] px-[10.56px] py-[6.33px] rounded-[10.56px] flex items-center gap-1.5 text-[#0A3E6D] font-bold text-[9.5px]">
                    <span>Act Now</span>
                  </div>
                </div>

                {/* Product Grid & Details */}
                <div className="px-[48.5px] py-[38px] flex gap-[33.78px] items-start">
                  {/* 2x2 Image Grid */}
                  <div className="w-[444.39px] flex flex-col gap-[8.44px] shrink-0">
                    <div className="flex gap-[8.44px] h-[182.08px]">
                      <div className="flex-1 bg-[#0A3E6D] rounded-[4.22px] p-3 flex flex-col items-center justify-center relative overflow-hidden">
                        <div className="flex gap-1.5 w-[135px] h-[112px]">
                          <div className="flex-1 relative rounded-bl-[21px] overflow-hidden">
                            <Image
                              src="/images/guidelines/modals/bcp-img-2.png"
                              alt=""
                              fill
                              sizes="68px"
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1 relative rounded-tr-[21px] overflow-hidden">
                            <Image
                              src="/images/guidelines/modals/bcp-img-1.png"
                              alt=""
                              fill
                              sizes="68px"
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <p className="text-white font-extrabold text-[11px] mt-2">
                          500 Mangrove Trees
                        </p>
                      </div>
                      <div className="flex-1 relative rounded-[4.22px] overflow-hidden">
                        <Image
                          src="/images/guidelines/modals/bcp-img-2.png"
                          alt=""
                          fill
                          sizes="218px"
                          className="object-cover"
                        />
                      </div>
                    </div>

                    <div className="flex gap-[8.44px] h-[182.08px]">
                      <div className="flex-1 relative rounded-[4.22px] overflow-hidden">
                        <Image
                          src="/images/guidelines/modals/bcp-img-3.png"
                          alt=""
                          fill
                          sizes="218px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 bg-[#BAE1FF] rounded-[4.22px] relative overflow-hidden p-3">
                        <div className="relative w-full h-full rounded-[4px] overflow-hidden">
                          <Image
                            src="/images/guidelines/modals/bcp-dashboard.png"
                            alt=""
                            fill
                            sizes="218px"
                            className="object-cover object-left-top"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Product Description */}
                  <div className="flex-1 flex flex-col gap-4">
                    <div>
                      <p className="text-[19px] text-[#2A2728]">Mangrove Trees Planting</p>
                      <p className="text-[8.44px] text-[#403B3C] font-light">
                        Absorb up to 16,500 kg CO₂e
                      </p>
                    </div>
                    <p className="text-[12.67px] text-[#0A3E6D]">
                      Rp19.000.000 <span className="text-[7.39px] text-[#949494]">/ 500 trees</span>
                    </p>
                    <div className="flex gap-2">
                      <div className="flex-1 bg-[#EAF6FD] rounded-[6px] p-2 text-center">
                        <p className="text-[12px] text-[#0A3E6D]">3</p>
                        <p className="text-[5px] text-[#0A3E6D]">Total Location</p>
                      </div>
                      <div className="flex-1 bg-[#EAF6FD] rounded-[6px] p-2 text-center">
                        <p className="text-[12px] text-[#0A3E6D]">400+</p>
                        <p className="text-[5px] text-[#0A3E6D]">Beneficiaries</p>
                      </div>
                      <div className="flex-1 bg-[#EAF6FD] rounded-[6px] p-2 text-center">
                        <p className="text-[12px] text-[#0A3E6D]">80</p>
                        <p className="text-[5px] text-[#0A3E6D]">Biodiversity</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Frosted Backdrop Overlay */}
              <div className="absolute inset-0 backdrop-blur-[4.222px] bg-[rgba(64,59,60,0.4)]" />

              {/* Centered White Checkout Modal */}
              <div className="relative z-10 w-full flex items-center justify-center">
                <CheckoutModalBody isInteractive={false} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= 2. USAGE SECTION ================= */}
      <div className="w-full flex flex-col gap-6 sm:gap-8">
        <h2 className="text-[24px] sm:text-[28px] font-normal leading-[1.25] tracking-[-0.005em] text-[#2A2728]">
          Usage
        </h2>

        <div className="flex flex-col gap-10 lg:gap-[48px] w-full">
          {/* ---------- Row 1: Task Completion ---------- */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-[64px] items-start w-full">
            {/* Left Description */}
            <div className="flex-1 flex flex-col gap-3 items-start min-w-0">
              <h3 className="text-[18px] font-medium leading-[28px] text-[#2A2728]">
                Task Completion
              </h3>
              <div className="flex flex-col gap-4 text-[16px] font-light leading-[24px] text-[#2A2728]">
                <p>
                  Use modals for critical tasks that require completion or acknowledgment. Modals are designed to interrupt a user’s flow and tend to remove the user from an experience.
                </p>
                <p>
                  When a modal is triggered, an overlay blocks the user from viewing the page’s content, keeping them from returning to the previous workflow until the task is completed or the user dismisses the modal.
                </p>
              </div>
              <div className="bg-[#F5F5F5] border border-[#E0E0E0] rounded-[10px] p-[8px] flex items-center gap-[10px] w-full">
                <Image
                  src="/images/guidelines/modals/icon-info-rounded.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="size-4 shrink-0"
                />
                <span className="text-[12px] font-normal leading-[16px] tracking-[0.36px] text-[#403B3C]">
                  Click “Plant Now” button to see how the modals appear
                </span>
              </div>
            </div>

            {/* Right Interactive Trigger Box */}
            <div className="w-full lg:w-[600px] h-[280px] sm:h-[400px] bg-[#F5F5F5] rounded-[12.79px] flex items-center justify-center shrink-0 p-6">
              <ArrowButton
                variant="navy"
                type="button"
                animate
                centerContent
                gap="gap-2.5"
                onClick={() => setActiveModal("task-completion")}
                className="w-max px-[20px] py-[12px] rounded-[20px] text-[18px] md:text-[18px] leading-[28px] font-bold cursor-pointer"
              >
                Plant Now
              </ArrowButton>
            </div>
          </div>

          {/* ---------- Row 2: Action Feedback ---------- */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-[64px] items-start w-full">
            {/* Left Description */}
            <div className="flex-1 flex flex-col gap-3 items-start min-w-0">
              <h3 className="text-[18px] font-medium leading-[28px] text-[#2A2728]">
                Action Feedback
              </h3>
              <p className="text-[16px] font-light leading-[24px] text-[#2A2728]">
                Use modals to provide immediate system feedback after a user completes an action, such as confirming success, reporting critical errors, or displaying status updates that require acknowledgement.
              </p>
              <div className="bg-[#F5F5F5] border border-[#E0E0E0] rounded-[10px] p-[8px] flex items-center gap-[10px] w-full">
                <Image
                  src="/images/guidelines/modals/icon-info-rounded.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="size-4 shrink-0"
                />
                <span className="text-[12px] font-normal leading-[16px] tracking-[0.36px] text-[#403B3C]">
                  Click “Submit” button to see how the modals appear
                </span>
              </div>
            </div>

            {/* Right Interactive Trigger Box */}
            <div className="w-full lg:w-[600px] h-[280px] sm:h-[400px] bg-[#F5F5F5] rounded-[12.79px] flex items-center justify-center shrink-0 p-6">
              <ArrowButton
                variant="navy"
                type="button"
                animate
                centerContent
                gap="gap-2.5"
                onClick={() => setActiveModal("action-feedback")}
                className="w-max px-[20px] py-[12px] rounded-[20px] text-[18px] md:text-[18px] leading-[28px] font-bold cursor-pointer"
              >
                Submit
              </ArrowButton>
            </div>
          </div>
        </div>
      </div>

      {/* ================= INTERACTIVE MODAL OVERLAYS ================= */}
      <AnimatePresence>
        {activeModal === "task-completion" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActiveModal(null)}
            className="fixed inset-0 z-50 backdrop-blur-[6px] bg-[rgba(64,59,60,0.5)] flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="w-full flex items-center justify-center"
            >
              <CheckoutModalBody
                isInteractive={true}
                onClose={() => setActiveModal(null)}
              />
            </motion.div>
          </motion.div>
        )}

        {activeModal === "action-feedback" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActiveModal(null)}
            className="fixed inset-0 z-50 backdrop-blur-[6px] bg-[rgba(64,59,60,0.5)] flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[20px] p-6 sm:p-[32px] w-full max-w-[600px] shadow-2xl flex flex-col items-end"
            >
              {/* Top-right Close Button */}
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="size-6 flex items-center justify-center text-[#949494] hover:text-[#2A2728] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <Image
                  src="/images/guidelines/modals/icon-x-close.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="size-6"
                />
              </button>

              {/* Content Body */}
              <div className="flex flex-col gap-[32px] items-center px-2 sm:px-[16px] py-[16px] w-full">
                <div className="flex flex-col gap-[20px] items-center w-full">
                  <Image
                    src="/images/guidelines/modals/icon-check-circle-navy.svg"
                    alt=""
                    width={64}
                    height={64}
                    className="size-[64px]"
                  />

                  <div className="flex flex-col gap-[12px] items-center text-center w-full">
                    <h3 className="font-normal text-[26px] sm:text-[32px] leading-[1.2] tracking-[-0.16px] text-[#2A2728]">
                      Thanks for reaching out
                    </h3>
                    <div className="font-light text-[15px] sm:text-[16px] leading-[24px] text-[#727272]">
                      <p>We do not accept job applications via this form.</p>
                      <p>Please apply through our official Career Page</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <ArrowButton
                  variant="navy"
                  type="button"
                  animate
                  centerContent
                  gap="gap-2.5"
                  onClick={() => setActiveModal(null)}
                  className="w-max px-[20px] py-[12px] rounded-[20px] text-[16px] md:text-[16px] leading-[24px] tracking-[0.16px] font-bold cursor-pointer"
                >
                  See open roles
                </ArrowButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
