export type NavLink = { label: string; href: string };

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/#courses" },
  { label: "Creators", href: "/#creators" },
];

export const authNav = {
  signIn: { label: "Sign In", href: "/login" },
  signUp: { label: "Join Us", href: "/signup" },
} satisfies Record<string, NavLink>;

export type FooterColumn = { title: string; links: NavLink[] };

export const footerColumns: FooterColumn[] = [
  {
    title: "Browse",
    links: [
      { label: "Featured Courses", href: "/#courses" },
      { label: "Featured Categories", href: "/#categories" },
      { label: "Business", href: "/#categories" },
      { label: "IT", href: "/#categories" },
      { label: "Design", href: "/#categories" },
    ],
  },
  {
    title: "Categories",
    links: [
      { label: "Development", href: "/#categories" },
      { label: "Marketing", href: "/#categories" },
      { label: "Photography", href: "/#categories" },
      { label: "Finance", href: "/#categories" },
      { label: "Sport", href: "/#categories" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Become a Creator", href: "/signup" },
      { label: "Affiliate Program", href: "/#creators" },
      { label: "Contact", href: "#contact" },
      { label: "Help", href: "#help" },
      { label: "About", href: "#about" },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms of Service", href: "#terms" },
  { label: "Cookies Settings", href: "#cookies" },
];
