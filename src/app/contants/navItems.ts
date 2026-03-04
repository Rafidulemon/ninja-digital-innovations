export type NavChild = {
  href: string;
  label: string;
};

export type NavItem = {
  href: string;
  label: string;
  children?: NavChild[];
};

export const getNavItems = (): NavItem[] => [
  { href: "/", label: "Home" },
  {
    href: "/company/about",
    label: "Company",
    children: [
      { href: "/company/about", label: "About" },
      { href: "/company/vision", label: "Vision" },
      { href: "/company/ventures", label: "Ventures" },
      { href: "/company/team", label: "Our Team" },
    ],
  },
  { href: "/services", label: "Services" },
  { href: "/ai", label: "AI" },
  { href: "/products", label: "Products" },
  { href: "/blogs", label: "Blogs" },
  { href: "/career", label: "Career" },
];
