"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import MobileSideBar from "./MobileSidebar";
import type { NavItem } from "@/app/contants/navItems";
import { getNavItems } from "@/app/contants/navItems";

type HeaderProps = {
  isDark?: boolean;
};

const Header = ({ isDark = false }: HeaderProps) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isServiceRoute =
    pathname === "/services" || pathname.startsWith("/services/");
  const isContactRoute = pathname === "/contact";
  const isAboutRoute = pathname === "/about" || pathname.startsWith("/about/");
  const isProductsRoute = pathname === "/products";
  const isProductDetailRoute =
    pathname.startsWith("/products/") && pathname !== "/products";
  const isAiRoute = pathname === "/ai";
  const isBlogsRoute = pathname === "/blogs";
  const isCareerRoute = pathname === "/career";
  const [isHeroActive, setIsHeroActive] = useState(
    pathname === "/" ||
      isServiceRoute ||
      isContactRoute ||
      isAboutRoute ||
      isProductsRoute ||
      isProductDetailRoute ||
      isAiRoute ||
      isBlogsRoute ||
      isCareerRoute
  );
  const isDarkHeader = isDark || isHeroActive;

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
            : isAboutRoute
              ? "about-hero"
              : isProductsRoute || isProductDetailRoute
                ? "product-hero"
              : isAiRoute
                ? "ai-hero"
                : isBlogsRoute
                  ? "blogs-hero"
                  : isCareerRoute
                    ? "career-hero"
                    : null;
    if (!heroId) {
      setIsHeroActive(false);
      return;
    }

    const heroSection = document.getElementById(heroId);
    if (!heroSection) {
      setIsHeroActive(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroActive(entry.isIntersecting);
      },
      { threshold: 0.2, rootMargin: "-80px 0px 0px 0px" }
    );

    observer.observe(heroSection);
    return () => observer.disconnect();
  }, [
    isAboutRoute,
    isContactRoute,
    isDark,
    isProductsRoute,
    isProductDetailRoute,
    isServiceRoute,
    isAiRoute,
    isBlogsRoute,
    isCareerRoute,
    pathname,
  ]);

  const navItems: NavItem[] = getNavItems();

  const heroLogoSrc = "/images/ndi.logo.png";

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

  return (
    <>
      <header
        className={`header-reveal ${headerPositionClass} z-[100] w-full transition-colors duration-300 ${headerThemeClass}`}
      >
        <div className="relative mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-4 md:h-20 md:px-8">
          <div className="flex items-center gap-3">
            <button
              className={`md:hidden ${isDarkHeader ? "text-white" : "text-primary"}`}
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
                  isDarkHeader ? "text-white" : "text-slate-900"
                }`}
              >
                Ninja Digital Innovations
              </span>
            </Link>
          </div>
          <Link
            href="/"
            className="absolute left-1/2 flex -translate-x-1/2 items-center md:hidden"
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
            </Link>
          <nav
            className={`hidden flex-1 items-center justify-center gap-6 text-[15px] font-medium md:flex md:gap-6 ${
              isDarkHeader ? "text-white/80" : "text-slate-600"
            }`}
          >
            {navItems.map((navItem: any) => {
              const isActive =
                pathname === navItem.href ||
                (navItem.href === "/services" &&
                  pathname.startsWith("/services/"));
              return (
                <Link
                  key={navItem.href}
                  href={navItem.href}
                  className={`relative inline-flex items-center transition-colors ${
                    isActive ? navActiveClass : navInactiveClass
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
              className="cursor-pointer rounded-[10px] bg-gradient-to-r from-primary via-[#6d36dc] to-[#4b50e6] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(76,49,201,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(76,49,201,0.32)]"
            >
              Contact
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
