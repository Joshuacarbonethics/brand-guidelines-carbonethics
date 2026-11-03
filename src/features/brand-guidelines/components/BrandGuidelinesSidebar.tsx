"use client";

import React, { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "@/i18n/navigation";
import {
  Home,
  Layers,
  LayoutGrid,
  ChevronRight,
  Menu,
  X,
  Ampersand,
} from "lucide-react";

type CategoryId = "foundation" | "components";

interface SubNavItem {
  id: string;
  label: string;
  href: string;
}

interface CategoryConfig {
  id: CategoryId;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  items: SubNavItem[];
}

const HOME_NAV_ITEM: SubNavItem = {
  id: "overview",
  label: "Overview & Hub",
  href: "/",
};

const CATEGORIES: CategoryConfig[] = [
  {
    id: "foundation",
    label: "Brand Foundation",
    icon: Layers,
    items: [
      { id: "brand-architecture", label: "Brand Architecture", href: "/brand-architecture" },
      { id: "logo", label: "Logo & Brand Assets", href: "/logo" },
      { id: "typography", label: "Typography Hierarchy", href: "/typography" },
      { id: "colors", label: "Color Palette & Swatches", href: "/colors" },
      { id: "spacing-radius", label: "Spacing & Radius Scale", href: "/spacing-radius" },
    ],
  },
  {
    id: "components",
    label: "Design System & Guidelines",
    icon: LayoutGrid,
    items: [
      { id: "buttons", label: "Button Components", href: "/buttons" },
      { id: "cards", label: "Card Components", href: "/cards" },
    ],
  },
];

const ALL_NAV_ITEMS = [
  { ...HOME_NAV_ITEM, categoryId: null },
  ...CATEGORIES.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, categoryId: cat.id }))
  ),
];

export default function BrandGuidelinesSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const getActiveFromPath = (targetPath: string) => {
    if (targetPath.includes("/buttons")) return { section: "buttons", category: "components" as CategoryId };
    if (targetPath.includes("/cards")) return { section: "cards", category: "components" as CategoryId };
    if (targetPath.includes("/brand-architecture")) return { section: "brand-architecture", category: "foundation" as CategoryId };
    if (targetPath.includes("/typography")) return { section: "typography", category: "foundation" as CategoryId };
    if (targetPath.includes("/colors")) return { section: "colors", category: "foundation" as CategoryId };
    if (targetPath.includes("/spacing-radius")) return { section: "spacing-radius", category: "foundation" as CategoryId };
    if (targetPath.includes("/logo")) return { section: "logo", category: "foundation" as CategoryId };
    return { section: "overview", category: null };
  };

  const [navState, setNavState] = useState<{
    fromPath: string;
    pendingPath: string | null;
    overrideCategory: CategoryId | null;
  }>({
    fromPath: pathname,
    pendingPath: null,
    overrideCategory: null,
  });

  const isSameRoute = navState.fromPath === pathname;
  const effectivePath = isSameRoute && navState.pendingPath ? navState.pendingPath : pathname;
  const { section: activeSection, category: currentRouteCategory } = getActiveFromPath(effectivePath);

  const selectedCategory: CategoryId =
    (isSameRoute && navState.overrideCategory) ||
    currentRouteCategory ||
    navState.overrideCategory ||
    "foundation";
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const sidebarRef = useRef<HTMLElement>(null);

  const navigateTo = (href: string, categoryId?: CategoryId) => {
    setMobileMenuOpen(false);
    setNavState({
      fromPath: pathname,
      pendingPath: href,
      overrideCategory: categoryId ?? selectedCategory,
    });
    router.push(href);
  };

  const handleCategoryClick = (catId: CategoryId) => {
    setNavState((prev) => ({
      fromPath: pathname,
      pendingPath: prev.fromPath === pathname ? prev.pendingPath : null,
      overrideCategory: catId,
    }));
  };

  const currentCategory = CATEGORIES.find((c) => c.id === selectedCategory) || CATEGORIES[0];

  return (
    <>
      <div className="lg:hidden sticky top-0 z-30 -mx-4 sm:-mx-6 md:-mx-8 w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] md:w-[calc(100%+4rem)] bg-white/95 backdrop-blur-md border-b border-gray-200 px-4 sm:px-6 md:px-8 py-2.5 flex items-center justify-between">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[10px] bg-white border border-gray-200 text-xs font-semibold text-navy-900 cursor-pointer"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          <span>Design System Menu</span>
        </button>

        <span className="text-xs font-mono text-gray-500 truncate max-w-[50%]">
          {ALL_NAV_ITEMS.find((n) => n.id === activeSection)?.label}
        </span>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden fixed inset-x-4 top-[56px] z-40 bg-white rounded-[20px] border border-gray-300 shadow-lg p-3.5 flex flex-col gap-2.5 max-h-[78vh] overflow-y-auto"
          >
            {/* Overview & Hub (Home) in mobile menu */}
            <button
              onClick={() => navigateTo(HOME_NAV_ITEM.href)}
              className={`flex items-center justify-between px-3 py-2 rounded-[10px] text-left transition-colors cursor-pointer ${
                activeSection === "overview"
                  ? "bg-navy-900 text-white font-semibold"
                  : "hover:bg-gray-50 text-gray-700 font-medium"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Home
                  className={`w-4 h-4 ${
                    activeSection === "overview" ? "text-white" : "text-gray-500"
                  }`}
                />
                <span className="text-[14px]">{HOME_NAV_ITEM.label}</span>
              </div>
              <ChevronRight
                className={`w-4 h-4 ${
                  activeSection === "overview" ? "text-white/80" : "text-gray-400"
                }`}
              />
            </button>

            <div className="w-full h-[1px] bg-gray-100" />

            {/* Category Groups in mobile menu — always expanded */}
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isCatActive = selectedCategory === cat.id && activeSection !== "overview";

              return (
                <div key={cat.id} className="flex flex-col gap-1">
                  <div className="relative flex items-center gap-2.5 px-3 py-1.5">
                    {isCatActive && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-4 bg-[#2A2728] rounded-full" />
                    )}
                    <Icon
                      className={`w-4 h-4 shrink-0 ${
                        isCatActive ? "text-[#2A2728]" : "text-gray-500"
                      }`}
                    />
                    <span
                      className={`text-[13.5px] flex items-center gap-1 ${
                        isCatActive
                          ? "font-semibold text-[#2A2728]"
                          : "font-semibold text-gray-600"
                      }`}
                    >
                      {cat.id === "components" ? (
                        <>
                          <span>Design System</span>
                          <Ampersand className="w-3.5 h-3.5 inline-block shrink-0 stroke-[2.2]" />
                          <span>Guidelines</span>
                        </>
                      ) : (
                        cat.label
                      )}
                    </span>
                  </div>

                  <div className="flex flex-col gap-0.5 pl-8 pr-1 pb-1">
                    {cat.items.map((item) => {
                      const isActive = activeSection === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => navigateTo(item.href, cat.id)}
                          className={`text-left px-3 py-1.5 rounded-[10px] text-[13.5px] flex items-center justify-between transition-colors cursor-pointer ${
                            isActive
                              ? "text-[#0A3E6D] font-semibold bg-[#0A3E6D]/5"
                              : "text-gray-600 hover:text-[#2A2728] hover:bg-gray-50 font-normal"
                          }`}
                        >
                          <span>{item.label}</span>
                          <ChevronRight
                            className={`w-3.5 h-3.5 shrink-0 ${
                              isActive ? "text-[#0A3E6D]" : "text-gray-400"
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar: Always Expanded */}
      <aside
        ref={sidebarRef}
        className="hidden lg:flex items-start shrink-0 sticky top-10 h-fit"
      >
        {/* Left Icon Rail */}
        <div className="w-[56px] bg-white rounded-[20px] border border-gray-300 py-3 px-2 flex flex-col items-center shrink-0 h-fit">
          <nav className="flex flex-col items-center gap-1.5 w-full">
            {/* Overview & Hub (Home) Icon Button */}
            <button
              onClick={() => navigateTo(HOME_NAV_ITEM.href)}
              aria-label={HOME_NAV_ITEM.label}
              title={HOME_NAV_ITEM.label}
              className={`w-10 h-10 rounded-[12px] flex items-center justify-center transition-colors cursor-pointer ${
                activeSection === "overview"
                  ? "bg-navy-900 text-white"
                  : "text-gray-500 hover:text-navy-900 hover:bg-gray-100/60"
              }`}
            >
              <Home
                className={`w-[20px] h-[20px] shrink-0 ${
                  activeSection === "overview"
                    ? "stroke-[2]"
                    : "stroke-[1.75]"
                }`}
              />
            </button>

            {/* Category Icons (Foundation, Components) */}
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isRouteActiveCategory = activeSection !== "overview" && selectedCategory === cat.id;
              const isPreviewSelectedOnOverview = activeSection === "overview" && selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  aria-label={cat.label}
                  title={cat.label}
                  className={`w-10 h-10 rounded-[12px] flex items-center justify-center transition-colors cursor-pointer ${
                    isRouteActiveCategory
                      ? "bg-navy-900 text-white"
                      : isPreviewSelectedOnOverview
                      ? "bg-gray-100 text-navy-900"
                      : "text-gray-500 hover:text-navy-900 hover:bg-gray-100/60"
                  }`}
                >
                  <Icon
                    className={`w-[20px] h-[20px] shrink-0 ${
                      isRouteActiveCategory || isPreviewSelectedOnOverview
                        ? "stroke-[2]"
                        : "stroke-[1.75]"
                    }`}
                  />
                </button>
              );
            })}
          </nav>
        </div>

        {/* Permanently Expanded Subpanel */}
        <div className="ml-2.5 xl:ml-3 w-[220px] xl:w-[236px] bg-white rounded-[20px] border border-gray-300 py-4 px-3.5 flex flex-col shrink-0 min-h-[156px] h-fit">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCategory.id}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.14, ease: "easeOut" }}
              className="flex flex-col"
            >
              <div className="px-2.5 pb-2.5 mb-1 border-b border-gray-100">
                <span className="text-[12.5px] font-bold text-[#2A2728] tracking-tight flex items-center gap-1">
                  {currentCategory.id === "components" ? (
                    <>
                      <span>Design System</span>
                      <Ampersand className="w-3.5 h-3.5 inline-block text-[#2A2728] shrink-0 stroke-[2.2]" />
                      <span>Guidelines</span>
                    </>
                  ) : (
                    currentCategory.label
                  )}
                </span>
              </div>

              <nav className="flex flex-col gap-0.5 pt-1">
                {currentCategory.items.map((item, idx) => {
                  const isActive = activeSection === item.id;

                  return (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -4 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.16,
                        delay: idx * 0.025,
                        ease: "easeOut",
                      }}
                      onClick={() => navigateTo(item.href, currentCategory.id)}
                      className={`group w-full text-left px-2.5 py-2 rounded-[10px] transition-colors text-[13.5px] flex items-center justify-between cursor-pointer ${
                        isActive
                          ? "text-[#2A2728] font-semibold bg-gray-100/90"
                          : "text-gray-600 hover:text-[#2A2728] hover:bg-gray-50 font-normal"
                      }`}
                    >
                      <span className="truncate pr-2">{item.label}</span>
                      <ChevronRight
                        className={`w-3.5 h-3.5 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5 ${
                          isActive
                            ? "text-[#2A2728]"
                            : "text-gray-400 group-hover:text-[#2A2728]"
                        }`}
                      />
                    </motion.button>
                  );
                })}
              </nav>
            </motion.div>
          </AnimatePresence>
        </div>
      </aside>
    </>
  );
}
