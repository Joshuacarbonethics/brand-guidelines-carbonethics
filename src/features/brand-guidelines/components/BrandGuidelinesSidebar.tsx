"use client";

import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useSidebar } from "../context/SidebarContext";
import {
  Home,
  Layers,
  LayoutGrid,
  ChevronRight,
  ChevronDown,
  PanelLeftClose,
  PanelLeftOpen,
  Menu,
  X,
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
    label: "Foundation",
    icon: Layers,
    items: [
      { id: "logo", label: "Logo & Brand Assets", href: "/logo" },
      { id: "typography", label: "Typography Hierarchy", href: "/typography" },
      { id: "colors", label: "Color Palette & Swatches", href: "/colors" },
      { id: "spacing-radius", label: "Spacing & Radius Scale", href: "/spacing-radius" },
    ],
  },
  {
    id: "components",
    label: "Components",
    icon: LayoutGrid,
    items: [
      { id: "buttons", label: "Button Components", href: "/buttons" },
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

  const getActiveFromPath = () => {
    if (pathname.includes("/buttons")) return { section: "buttons", category: "components" as CategoryId };
    if (pathname.includes("/typography")) return { section: "typography", category: "foundation" as CategoryId };
    if (pathname.includes("/colors")) return { section: "colors", category: "foundation" as CategoryId };
    if (pathname.includes("/spacing-radius")) return { section: "spacing-radius", category: "foundation" as CategoryId };
    if (pathname.includes("/logo")) return { section: "logo", category: "foundation" as CategoryId };
    return { section: "overview", category: null };
  };

  const { section: activeSection, category: currentRouteCategory } = getActiveFromPath();
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>(currentRouteCategory || "foundation");
  const { isSubPanelOpen, setIsSubPanelOpen } = useSidebar();
  const [isSubPanelExpanded, setIsSubPanelExpanded] = useState<boolean>(activeSection !== "overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [mobileExpandedCats, setMobileExpandedCats] = useState<Record<CategoryId, boolean>>({
    foundation: true,
    components: true,
  });

  useEffect(() => {
    if (currentRouteCategory) {
      setSelectedCategory(currentRouteCategory);
    }
    if (activeSection === "overview") {
      setIsSubPanelOpen(false);
      setIsSubPanelExpanded(false);
    } else {
      setIsSubPanelOpen(true);
      setIsSubPanelExpanded(true);
    }
  }, [activeSection, currentRouteCategory, setIsSubPanelOpen]);

  const sidebarRef = useRef<HTMLElement>(null);

  const navigateTo = (href: string, categoryId?: CategoryId) => {
    setMobileMenuOpen(false);
    if (href === "/" || href === "/brand-guidelines" || href.endsWith("/brand-guidelines")) {
      setIsSubPanelOpen(false);
      setIsSubPanelExpanded(false);
    }
    if (categoryId) {
      setSelectedCategory(categoryId);
    }
    router.push(href);
  };

  const handleCategoryClick = (catId: CategoryId) => {
    if (activeSection === "overview") {
      setSelectedCategory(catId);
      setIsSubPanelOpen(true);
      return;
    }

    if (selectedCategory === catId) {
      if (isSubPanelOpen) {
        setIsSubPanelExpanded(false);
        setIsSubPanelOpen(false);
      } else {
        setIsSubPanelOpen(true);
      }
    } else {
      setSelectedCategory(catId);
      setIsSubPanelOpen(true);
    }
  };

  const toggleMobileCat = (catId: CategoryId) => {
    setMobileExpandedCats((prev) => ({ ...prev, [catId]: !prev[catId] }));
  };

  const currentCategory = CATEGORIES.find((c) => c.id === selectedCategory) || CATEGORIES[0];

  return (
    <>
      <div className="lg:hidden sticky top-0 z-30 w-full bg-white/95 backdrop-blur-md border-b border-gray-300 px-4 py-3 flex items-center justify-between">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[12px] bg-white border border-gray-200 text-xs font-semibold text-navy-900"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          <span>Design System Menu</span>
        </button>

        <span className="text-xs font-mono text-gray-500 truncate">
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
            className="lg:hidden fixed inset-x-4 top-[60px] z-40 bg-white rounded-[24px] border border-gray-300 p-4 flex flex-col gap-3 max-h-[75vh] overflow-y-auto"
          >
            {/* Overview & Hub (Home) in mobile menu */}
            <button
              onClick={() => navigateTo(HOME_NAV_ITEM.href)}
              className={`flex items-center justify-between px-3 py-2.5 rounded-[12px] text-left transition-colors ${
                activeSection === "overview"
                  ? "bg-navy-900 text-white font-semibold"
                  : "hover:bg-gray-50 text-gray-700 font-medium"
              }`}
            >
              <div className="flex items-center gap-3">
                <Home
                  className={`w-5 h-5 ${
                    activeSection === "overview" ? "text-white" : "text-gray-500"
                  }`}
                />
                <span className="text-[15px]">{HOME_NAV_ITEM.label}</span>
              </div>
              <ChevronRight
                className={`w-4 h-4 ${
                  activeSection === "overview" ? "text-white/80" : "text-gray-400"
                }`}
              />
            </button>

            <div className="w-full h-[1px] bg-gray-100 my-0.5" />

            {/* Category Groups in mobile menu */}
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isCatActive = selectedCategory === cat.id;
              const isExpanded = mobileExpandedCats[cat.id];

              return (
                <div key={cat.id} className="flex flex-col gap-1">
                  <button
                    onClick={() => toggleMobileCat(cat.id)}
                    className="relative flex items-center justify-between px-3 py-2.5 rounded-[12px] text-left transition-colors hover:bg-gray-50"
                  >
                    {isCatActive && activeSection !== "overview" && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[#2A2728] rounded-full" />
                    )}
                    <div className="flex items-center gap-3">
                      <Icon
                        className={`w-5 h-5 ${
                          isCatActive && activeSection !== "overview" ? "text-[#2A2728]" : "text-gray-500"
                        }`}
                      />
                      <span
                        className={`text-[15px] ${
                          isCatActive && activeSection !== "overview"
                            ? "font-semibold text-[#2A2728]"
                            : "font-normal text-gray-600"
                        }`}
                      >
                        {cat.label}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                        isExpanded ? "rotate-0" : "-rotate-90"
                      }`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="flex flex-col gap-0.5 pl-9 pr-2 py-1">
                      {cat.items.map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                          <button
                            key={item.id}
                            onClick={() => navigateTo(item.href, cat.id)}
                            className={`text-left px-3 py-2 rounded-[10px] text-[14px] flex items-center justify-between transition-colors ${
                              isActive
                                ? "text-[#0A3E6D] font-semibold bg-[#0A3E6D]/5"
                                : "text-gray-600 hover:text-[#2A2728] hover:bg-gray-50 font-normal"
                            }`}
                          >
                            <span>{item.label}</span>
                            <ChevronRight
                              className={`w-4 h-4 ${
                                isActive ? "text-[#0A3E6D]" : "text-gray-400"
                              }`}
                            />
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <aside
        ref={sidebarRef}
        className="hidden lg:flex items-start shrink-0 sticky top-12 lg:top-14 h-fit"
      >
        <div className="w-[64px] bg-white rounded-[24px] border border-gray-300 py-5 px-2.5 flex flex-col items-center justify-between min-h-[260px] shrink-0">
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
                className={`w-[22px] h-[22px] shrink-0 ${
                  activeSection === "overview"
                    ? "text-white stroke-[2]"
                    : "stroke-[1.75]"
                }`}
              />
            </button>

            {/* Category Icons (Foundation, Components) with tight uniform gap */}
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isSelected = activeSection !== "overview" && selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  aria-label={cat.label}
                  title={cat.label}
                  className={`w-10 h-10 rounded-[12px] flex items-center justify-center transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-navy-900 text-white"
                      : "text-gray-500 hover:text-navy-900 hover:bg-gray-100/60"
                  }`}
                >
                  <Icon
                    className={`w-[22px] h-[22px] shrink-0 ${
                      isSelected
                        ? "text-white stroke-[2]"
                        : "stroke-[1.75]"
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          <div className="pt-4">
            <button
              onClick={() => {
                if (isSubPanelOpen) {
                  setIsSubPanelExpanded(false);
                  setIsSubPanelOpen(false);
                } else {
                  setIsSubPanelOpen(true);
                }
              }}
              title={isSubPanelOpen ? "Collapse submenu" : "Expand submenu"}
              aria-label={isSubPanelOpen ? "Collapse submenu" : "Expand submenu"}
              className="w-9 h-9 rounded-[10px] flex items-center justify-center text-gray-500 hover:text-navy-900 transition-colors cursor-pointer"
            >
              {isSubPanelOpen ? (
                <PanelLeftClose className="w-[19px] h-[19px] stroke-[1.75]" />
              ) : (
                <PanelLeftOpen className="w-[19px] h-[19px] stroke-[1.75]" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isSubPanelOpen && (
            <motion.div
              key="extended-subpanel"
              initial={{ width: 0, opacity: 0, marginLeft: 0 }}
              animate={{
                width: 250,
                opacity: 1,
                marginLeft: 12,
                transitionEnd: { overflow: "visible" },
              }}
              exit={{
                width: 0,
                opacity: 0,
                marginLeft: 0,
                overflow: "hidden",
              }}
              transition={{
                width: { duration: 0.28, ease: [0.32, 0.72, 0, 1] },
                marginLeft: { duration: 0.28, ease: [0.32, 0.72, 0, 1] },
                opacity: { duration: 0.18, ease: "easeInOut" },
              }}
              onAnimationComplete={() => {
                if (isSubPanelOpen) {
                  setIsSubPanelExpanded(true);
                }
              }}
              className={`shrink-0 ${
                isSubPanelExpanded ? "overflow-visible" : "overflow-hidden"
              }`}
            >
              <div className="w-[250px] bg-white rounded-[24px] border border-gray-300 py-6 px-5 flex flex-col min-h-[260px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentCategory.id}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.14, ease: "easeOut" }}
                    className="flex flex-col"
                  >
                    <div className="px-2.5 pb-3 mb-2">
                      <span className="text-[13px] font-bold text-[#2A2728] tracking-tight block">
                        {currentCategory.label}
                      </span>
                    </div>

                    <nav className="flex flex-col gap-1">
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
                            className={`group w-full text-left px-2.5 py-2.5 rounded-[12px] transition-colors text-[14px] flex items-center justify-between cursor-pointer ${
                              isActive
                                ? "text-[#2A2728] font-semibold bg-gray-100/80"
                                : "text-gray-600 hover:text-[#2A2728] hover:bg-gray-50 font-normal"
                            }`}
                          >
                            <span className="truncate pr-2">{item.label}</span>
                            <ChevronRight
                              className={`w-4 h-4 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5 ${
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
            </motion.div>
          )}
        </AnimatePresence>
      </aside>
    </>
  );
}
