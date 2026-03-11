"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import MobileSideBar from "./MobileSidebar";
import type { NavItem } from "@/app/contants/navItems";
import { getNavItems } from "@/app/contants/navItems";
import Button from "@/components/button/Button";

type HeaderProps = {
  isDark?: boolean;
};

const Header = ({ isDark = false }: HeaderProps) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isServiceRoute =
    pathname === "/services" || pathname.startsWith("/services/");
  const isContactRoute = pathname === "/contact";
  const isCompanyRoute = pathname === "/company" || pathname.startsWith("/company");
  const isProductsRoute = pathname === "/products";
  const isProductDetailRoute =
    pathname.startsWith("/products/") && pathname !== "/products";
  const isAiRoute = pathname === "/ai";
  const isNewsRoute = pathname === "/news";
  const isBlogsRoute = pathname === "/blogs";
  const isCareerRoute = pathname === "/career";
  const isProjectsRoute = pathname === "/projects" || pathname.startsWith("/projects/");
  const [isHeroActive, setIsHeroActive] = useState(
    pathname === "/" ||
      isServiceRoute ||
      isContactRoute ||
      isCompanyRoute ||
      isProductsRoute ||
      isProductDetailRoute ||
      isAiRoute ||
      isNewsRoute ||
      isBlogsRoute ||
      isCareerRoute ||
      isProjectsRoute
  );
  const isDarkHeader = isDark || isHeroActive;
  const setHeroActive = React.useCallback((val: boolean) => {
    requestAnimationFrame(() => setIsHeroActive(val));
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (!isMenuOpen) return;
    const { style } = document.body;
    const previousOverflow = style.overflow;
    style.overflow = "hidden";
    return () => {
      style.overflow = previousOverflow;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isDark) return;
    const heroId =
      pathname === "/"
        ? "home-hero"
        : isServiceRoute
          ? "service-hero"
          : isContactRoute
            ? "contact-hero"
            : isCompanyRoute
              ? "company-hero"
              : isProductsRoute || isProductDetailRoute
                ? "product-hero"
                : isAiRoute
                  ? "ai-hero"
                  : isNewsRoute
                    ? "news-hero"
                    : isBlogsRoute
                      ? "blogs-hero"
                      : isCareerRoute
                        ? "career-hero"
                        : isProjectsRoute
                          ? pathname.startsWith("/projects/") ? "project-detail-hero" : "projects-hero"
                          : null;
    if (!heroId) {
      setHeroActive(false);
      return;
    }

    const heroSection = document.getElementById(heroId);
    if (!heroSection) {
      setHeroActive(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroActive(entry.isIntersecting);
      },
      { threshold: 0.2, rootMargin: "-80px 0px 0px 0px" }
    );

    observer.observe(heroSection);
    return () => observer.disconnect();
  }, [
    isCompanyRoute,
    isContactRoute,
    isDark,
    isProductsRoute,
    isProductDetailRoute,
    isServiceRoute,
    isAiRoute,
    isBlogsRoute,
    isCareerRoute,
    isProjectsRoute,
    isNewsRoute,
    pathname,
    setHeroActive,
  ]);

  const navItems: NavItem[] = getNavItems();
  const basePath = (href: string) => href.split("#")[0];

  const heroLogoSrc = isDarkHeader ? "/images/logo_white.png" : "/images/ndi.logo.png";

  const headerPositionClass = isDark ? "relative" : "fixed top-0";
  const headerThemeClass = isDark
    ? "home-hero-header"
    : isHeroActive
      ? "home-hero-header"
      : "bg-white/95 backdrop-blur-xl shadow-[0_14px_30px_rgba(15,23,42,0.08)]";
  const navActiveClass = isDarkHeader
    ? "text-white after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-white/80"
    : "text-primary after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-gradient-to-r after:from-primary after:via-[#6d36dc] after:to-[#4b50e6]";
  const navInactiveClass = isDarkHeader
    ? "text-white/70 hover:text-white"
    : "text-slate-600 hover:text-slate-900";

  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const hoverCloseTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleNavEnter = (href: string) => {
    if (hoverCloseTimer.current) clearTimeout(hoverCloseTimer.current);
    setHoveredNav(href);
  };

  const handleNavLeave = () => {
    hoverCloseTimer.current = setTimeout(() => setHoveredNav(null), 140);
  };

  return (
    <>
      <header
        className={`header-reveal ${headerPositionClass} z-[100] w-full transition-colors duration-300 ${headerThemeClass}`}
      >
        <div className="relative mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-4 md:h-20 md:px-8">
          <div className="flex items-center gap-3">
            <button
              className={`md:hidden inline-flex h-11 w-11 items-center justify-center text-base transition-all duration-200 ${
                isDarkHeader
                  ? "text-white shadow-[0_12px_32px_rgba(0,0,0,0.25)] backdrop-blur"
                  : "text-primary shadow-[0_14px_32px_rgba(15,23,42,0.14)]"
              } ${isMenuOpen ? "scale-95" : ""}`}
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={20} />}
            </button>
            <Link href="/" className="hidden items-center gap-3 md:flex">
              <Image
                src={heroLogoSrc}
                alt="Ninja Digital Innovations logo"
                width={40}
                height={40}
                className="h-auto w-[40px]"
                sizes="(min-width: 68px) 120px, 120px"
                priority
              />
              <span
                className={`text-base font-semibold tracking-tight ${
                  isDarkHeader ? "text-white" : "text-primary"
                }`}
              >
                Ninja Digital Innovations
              </span>
            </Link>
          </div>
          <Link
            href="/"
            className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2 md:hidden"
          >
              <Image
                src={heroLogoSrc}
                alt="Ninja Digital Innovations logo"
                width={38}
                height={38}
                className="h-auto w-[38px]"
                sizes="38px"
                priority
              />
              <span
                className={`whitespace-nowrap text-[13px] font-semibold ${
                  isDarkHeader ? "text-white" : "text-primary"
                }`}
              >
                Ninja Digital Innovations
              </span>
            </Link>
          <nav
            className={`hidden flex-1 items-center justify-center gap-6 text-[15px] font-medium md:flex md:gap-6 ${
              isDarkHeader ? "text-white/80" : "text-slate-600"
            }`}
          >
            {navItems.map((navItem) => {
              const parentPath = basePath(navItem.href);
              const isParentActive =
                pathname === parentPath ||
                pathname.startsWith(`${parentPath}/`) ||
                navItem.children?.some((child) => {
                  const childPath = basePath(child.href);
                  return (
                    pathname === childPath || pathname.startsWith(`${childPath}/`)
                  );
                });

              if (navItem.children?.length) {
                return (
                  <div
                    key={navItem.href}
                    className="relative"
                    onMouseEnter={() => handleNavEnter(navItem.href)}
                    onMouseLeave={handleNavLeave}
                  >
                    <Link
                      href={navItem.href}
                      className={`relative inline-flex items-center gap-1 transition-colors ${
                        isParentActive ? navActiveClass : navInactiveClass
                      }`}
                    >
                      {navItem.label}
                      <FiChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          isParentActive ? "translate-y-[1px]" : ""
                        } ${hoveredNav === navItem.href ? "-translate-y-[1px]" : ""}`}
                        aria-hidden="true"
                      />
                    </Link>
                    <div
                      className={`absolute left-1/2 top-[115%] z-[999] -translate-x-1/2 transition duration-150 ease-out ${
                        hoveredNav === navItem.href ? "pointer-events-auto opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2"
                      }`}
                    >
                      <div
                        className={`w-56 overflow-hidden rounded-2xl border bg-white/95 shadow-[0_18px_60px_rgba(15,23,42,0.18)] backdrop-blur ${
                          isDarkHeader ? "border-white/15" : "border-slate-200"
                        }`}
                      >
                        {navItem.children.map((child) => {
                          const childPath = basePath(child.href);
                          const isChildActive =
                            childPath !== parentPath &&
                            (pathname === childPath || pathname.startsWith(`${childPath}/`));
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`flex items-center justify-between px-4 py-3 text-sm transition-colors ${
                                isChildActive
                                  ? "bg-primary/10 text-primary"
                                  : "text-slate-700 hover:bg-slate-100"
                              }`}
                            >
                              <span>{child.label}</span>
                              <span className="text-xs text-slate-400">↗</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={navItem.href}
                  href={navItem.href}
                  className={`relative inline-flex items-center transition-colors ${
                    isParentActive ? navActiveClass : navInactiveClass
                  }`}
                >
                  {navItem.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/contact"
              className="group"
            >
              <Button
                theme="dark"
                className="px-5 py-2.5 text-sm font-semibold"
              >
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <MobileSideBar
        isMenuOpen={isMenuOpen}
        navItems={navItems}
        closeMenu={closeMenu}
        contactLabel="Contact"
      />
    </>
  );
};

export default Header;
