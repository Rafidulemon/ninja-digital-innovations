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
      className={`fixed inset-0 z-[110] transition md:hidden ${
        isMenuOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <div
        className="absolute inset-0 bg-slate-900/20"
        onClick={closeMenu}
        aria-hidden="true"
      />
      <div
        className={`absolute left-0 top-0 flex h-full w-[80%] max-w-[360px] flex-col overflow-y-auto bg-white shadow-2xl transition-transform duration-300 sm:w-[70%] ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <Link href="/" onClick={closeMenu}>
            <Image
              src="/images/ndi.logo.png"
              alt="NDI logo"
              width={90}
              height={34}
              className="h-auto w-[90px]"
            />
          </Link>
          <button
            className="text-primary"
            onClick={closeMenu}
            aria-label="Close Menu"
          >
            <FaTimes size={20} />
          </button>
        </div>

        <nav className="flex flex-col gap-5 px-6 py-6 text-[15px] font-medium text-slate-700">
          {navItems.map((navItem) => {
            const parentPath = basePath(navItem.href);
            const isActive =
              pathname === parentPath || pathname.startsWith(`${parentPath}/`);
            return (
              <div key={navItem.href} className="flex flex-col gap-2">
                <Link
                  href={navItem.href}
                  onClick={closeMenu}
                  className={`relative inline-flex items-center transition-colors ${
                    isActive
                      ? "text-primary after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-gradient-to-r after:from-primary after:via-[#6d36dc] after:to-[#4b50e6]"
                      : "text-slate-700 hover:text-slate-900"
                  }`}
                >
                  {navItem.label}
                </Link>
                {navItem.children?.length ? (
                  <div className="ml-3 flex flex-col gap-2 border-l border-slate-200 pl-3 text-[14px] font-normal text-slate-600">
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
                          className={`transition-colors ${
                            isChildActive ? "text-primary" : "hover:text-slate-800"
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

        <div className="px-6 pb-8">
          <Link
            href="/contact"
            onClick={closeMenu}
            className="flex w-full items-center justify-center rounded-[10px] bg-gradient-to-r from-[#5b2ae6] via-[#6d36dc] to-[#4b50e6] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(76,49,201,0.28)]"
          >
            {contactLabel}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileSideBar;
