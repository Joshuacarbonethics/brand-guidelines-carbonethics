import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

const arrowPaths = {
  right: "M5 12h14M12 5l7 7-7 7",
  up: "M12 19V5M5 12l7-7 7 7",
  down: "M12 5v14M19 12l-7 7-7-7",
} as const;

type ArrowDirection = keyof typeof arrowPaths;

type ArrowButtonBase = {
  variant?: "navy" | "outline" | "frost" | "secondary";
  showArrow?: boolean;
  arrowDirection?: ArrowDirection;
  animate?: boolean;
  noHoverTextColor?: boolean;
  noHoverIcon?: boolean;
  centerContent?: boolean;
  gap?: string;
  children: ReactNode;
  className?: string;
};

type ArrowButtonAsButton = ArrowButtonBase &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ArrowButtonBase> & {
    href?: undefined;
  };

type ArrowButtonAsLink = ArrowButtonBase &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ArrowButtonBase> & {
    href: string;
  };

type ArrowButtonProps = ArrowButtonAsButton | ArrowButtonAsLink;

export function ArrowButton({
  variant = "navy",
  showArrow = true,
  arrowDirection = "right",
  animate = false,
  centerContent = false,
  noHoverTextColor = false,
  noHoverIcon = false,
  gap,
  children,
  className,
  href,
  ...rest
}: ArrowButtonProps) {
  const isSolid = variant === "navy" || variant === "frost" || variant === "outline";

  const buttonVariant: Record<string, string> = {
    navy: "text-white [background-image:linear-gradient(to_left,var(--color-navy-900)_50%,transparent_50%)] bg-[length:250%_100%] bg-[position:92%_0] bg-no-repeat",
    frost: "text-white [background-image:linear-gradient(to_left,var(--color-navy-900)_50%,transparent_50%)] bg-[length:250%_100%] bg-[position:92%_0] bg-no-repeat",
    outline: "text-white [background-image:linear-gradient(to_left,transparent_50%,white_50%)] bg-[length:250%_100%] bg-[position:92%_0] bg-no-repeat",
    secondary: "text-navy-900 [background-image:linear-gradient(to_left,white_50%,var(--color-navy-900)_50%)] bg-[length:250%_100%] bg-[position:92%_0] bg-no-repeat",
  };

  const hoverTextVariant: Record<string, string> = {
    navy: "group-hover:text-navy-900",
    frost: "group-hover:text-navy-900",
    outline: "group-hover:text-navy-900",
    secondary: "group-hover:text-white",
  };

  const borderVariant: Record<string, string> = {
    navy: "border-navy-900",
    frost: "border-navy-900",
    outline: "border-white",
    secondary: "border-transparent",
  };

  const buttonClasses = cn(
    "group relative inline-flex items-center justify-between gap-2 pl-5 pr-4 py-3 rounded-[17px] w-full sm:w-max border text-[15px] md:text-[16px] font-semibold transition-[background-position] duration-300 ease-in-out hover:bg-[position:8%_0]",
    !showArrow && "justify-center px-6",
    animate && "active:scale-[0.98]",
    buttonVariant[variant],
    borderVariant[variant],
    className,
  );

  const circleClasses = isSolid
    ? (noHoverIcon ? "bg-white" : "bg-white group-hover:bg-navy-900")
    : (noHoverIcon ? "bg-navy-900" : "bg-navy-900 group-hover:bg-white");

  const arrowClasses = isSolid
    ? (noHoverIcon ? "stroke-navy-900" : "stroke-navy-900 group-hover:stroke-white")
    : (noHoverIcon ? "stroke-white" : "stroke-white group-hover:stroke-navy-900");

  const content = (
      <span className={cn("flex items-center w-full transition-colors duration-300", gap || "gap-2", (centerContent || !showArrow) ? "justify-center" : "justify-between")}>
        <span className={cn("transition-colors duration-300", (centerContent || !showArrow) ? "text-center" : "w-full text-center sm:text-left", !noHoverTextColor && hoverTextVariant[variant])}>
        {children}
      </span>
      {showArrow && (
        <div className={cn("w-7 h-7 flex items-center justify-center rounded-full shrink-0 transition-colors duration-300", circleClasses)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn("transition-colors duration-300", arrowClasses)}>
            <path d={arrowPaths[arrowDirection]} />
          </svg>
        </div>
      )}
    </span>
  );

  if (href) {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    const isExternalOrDownload = Boolean(
      anchorProps.download ||
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("//") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:")
    );

    if (isExternalOrDownload) {
      return (
        <a href={href} className={buttonClasses} {...anchorProps}>
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={buttonClasses} {...anchorProps}>
        {content}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}

export type { ArrowButtonProps };
