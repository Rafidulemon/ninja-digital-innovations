"use client";
import Link from "next/link";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/app/contants/navItems";

type MobileSideBarProps = {
  isMenuOpen: boolean;
  navItems: NavItem[];
  closeMenu: () => void;
  contactLabel: string;
};

const MobileSideBar = ({
  isMenuOpen,
  navItems,
  closeMenu,
  contactLabel,
}: MobileSideBarProps) => {
  const pathname = usePathname();

  const basePath = (href: string) => href.split("#")[0];

  return (
    <div
      className={`fixed inset-0 z-[110] transition duration-300 ease-in-out md:hidden ${
        isMenuOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <div
        className={`absolute inset-0 bg-slate-900/50 backdrop-blur-[2px] transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      <div
        className={`absolute left-0 top-0 flex h-full w-[82%] max-w-[420px] flex-col overflow-y-auto rounded-r-3xl bg-white shadow-[0_18px_70px_rgba(15,23,42,0.35)] transition-all duration-300 ease-in-out sm:w-[72%] ${
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0"
        }`}
      >
        <div className="relative overflow-hidden px-5 pt-5 pb-4">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0c1a38] via-[#0b2c5c] to-[#0f172a]" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.22), transparent 32%), radial-gradient(circle at 85% 20%, rgba(120,123,255,0.25), transparent 32%)",
            }}
          />
          <div className="relative flex items-center justify-between">
            <Link href="/" onClick={closeMenu} className="flex items-center gap-2">
              <Image
                src="/images/logo_white.png"
                alt="NDI logo"
                width={38}
                height={38}
                className="h-auto w-[38px]"
              />
              <span className="text-sm font-semibold text-white">Ninja Digital Innovations</span>
            </Link>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition hover:bg-white/15"
              onClick={closeMenu}
              aria-label="Close Menu"
            >
              <FaTimes size={18} />
            </button>
          </div>
          <div className="relative mt-5 flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white backdrop-blur-sm">
            <div className="flex flex-col">
              <span className="text-[11px] uppercase tracking-[0.28em] text-white/80">We reply fast</span>
              <span className="text-base font-semibold">Response in &lt; 24h</span>
            </div>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-primary shadow-[0_10px_30px_rgba(15,23,42,0.18)] transition hover:-translate-y-[1px]"
            >
              Book a call
            </Link>
          </div>
        </div>

        <nav className="flex flex-col gap-3 px-5 pb-6 pt-4 text-[15px] font-medium text-slate-700">
          {navItems.map((navItem) => {
            const parentPath = basePath(navItem.href);
            const isActive =
              pathname === parentPath || pathname.startsWith(`${parentPath}/`);
            return (
              <div
                key={navItem.href}
                className="flex flex-col gap-2 rounded-2xl border border-slate-100 bg-slate-50/70 px-4 py-3 shadow-[0_10px_28px_-18px_rgba(15,23,42,0.25)] transition hover:-translate-y-[1px] hover:shadow-[0_18px_40px_-22px_rgba(15,23,42,0.28)]"
              >
                <Link
                  href={navItem.href}
                  onClick={closeMenu}
                  className={`relative inline-flex items-center justify-between gap-3 transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-slate-700 hover:text-slate-900"
                  }`}
                >
                  <span>{navItem.label}</span>
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${
                      isActive ? "bg-primary/10 text-primary" : "bg-white text-slate-500"
                    }`}
                  >
                    ↗
                  </span>
                </Link>
                {navItem.children?.length ? (
                  <div className="flex flex-wrap gap-2 text-[13px] font-medium">
                    {navItem.children.map((child) => {
                      const childPath = basePath(child.href);
                      const isChildActive =
                        childPath !== parentPath &&
                        (pathname === childPath || pathname.startsWith(`${childPath}/`));
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={closeMenu}
                          className={`rounded-full border px-3 py-1 transition ${
                            isChildActive
                              ? "border-primary/40 bg-primary/10 text-primary"
                              : "border-slate-200 bg-white text-slate-600 hover:border-primary/30 hover:text-primary"
                          }`}
                        >
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="px-5 pb-7">
          <Link
            href="/contact"
            onClick={closeMenu}
            className="flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-[#5b2ae6] via-[#6d36dc] to-[#4b50e6] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(76,49,201,0.28)] transition hover:-translate-y-[1px]"
          >
            {contactLabel}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileSideBar;
