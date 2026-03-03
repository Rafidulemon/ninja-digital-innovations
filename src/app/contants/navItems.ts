export type NavItem = {
  href: string;
  label: string;
};

export const getNavItems = (): NavItem[] => [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/ai", label: "AI" },
  { href: "/products", label: "Products" },
  { href: "/blogs", label: "Blogs" },
  { href: "/career", label: "Career" },
];
