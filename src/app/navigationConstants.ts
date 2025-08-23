export type NavItem = {
  label: string;
  url: string;
  subNav?: NavItem[];
};

const gamesNavItems: NavItem[] = [
  { label: 'All Games', url: '/games' },
  { label: 'Backcountry', url: '/games/backcountry' },
];

const productsNavItems: NavItem[] = [
  { label: 'All Products', url: '/products' },
  { label: 'AI Translations', url: '/products/translations' },
];

const servicesNavItems: NavItem[] = [
  // { label: "All Services", url: "/services" },
  // { label: "Game Engine Plugins", url: "/services/plugins" },
  // { label: "Web Development", url: "/services/webdev" },
  // { label: "AI Integration", url: "/services/ai" },
  // { label: "Automation", url: "/services/automation" },
];

export const navItems: NavItem[] = [
  { label: 'Home', url: '/' },
  { label: 'Games', url: '/games', subNav: gamesNavItems },
  { label: 'Products', url: '/products', subNav: productsNavItems },
  { label: 'Services', url: '/services', subNav: servicesNavItems },
  // { label: "Blog", url: "/blog" },
  { label: 'Contact', url: '/contact' },
];
