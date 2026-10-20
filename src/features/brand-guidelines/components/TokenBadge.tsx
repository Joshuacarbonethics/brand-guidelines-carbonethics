"use client";
import React, { useState } from "react";
import { Check } from "lucide-react";

interface TokenBadgeProps {
  label: string;
  value?: string;
  type?: "color" | "typography" | "spacing" | "radius" | "default" | "navy" | "sand";
  copyable?: boolean;
}

export default function TokenBadge({
  label,
  value,
  type = "default",
  copyable = false,
}: TokenBadgeProps) {
  const [copied, setCopied] = useState(false);

  const getBadgeStyle = () => {
    switch (type) {
      case "color":
      case "typography":
      case "navy":
        return "bg-[#0A3E6D] text-[#FDFDFD]";
      case "spacing":
      case "radius":
      case "sand":
        return "bg-[#E6D29E] text-[#0A3E6D]";
      default:
        return "bg-[#0A3E6D] text-[#FDFDFD]";
    }
  };

  const handleClick = () => {
    if (!copyable || !value) return;
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <span
      onClick={copyable ? handleClick : undefined}
      title={copyable ? `Click to copy ${value}` : undefined}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] text-[11px] font-mono font-medium ${getBadgeStyle()} ${
        copyable ? "cursor-pointer hover:opacity-90 active:scale-95 transition-all select-none" : ""
      }`}
    >
      <span className="opacity-80">{label}</span>
      {value && (
        <span className="font-bold inline-flex items-center gap-1">
          {copied && <Check className="w-3 h-3 stroke-[2.5]" />}
          <span>{value}</span>
        </span>
      )}
    </span>
  );
}
