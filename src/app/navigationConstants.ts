export type NavItem = {
  label: string;
  url: string;
  subNav?: NavItem[];
};

const gamesNavItems: NavItem[] = [
  { label: 'All Games', url: '/games' },
  { label: 'Backcountry', url: '/games/backcountry' },
];

export const navItems: NavItem[] = [
  { label: 'Home', url: '/' },
  { label: 'Games', url: '/games', subNav: gamesNavItems },
  { label: 'Products', url: '/products' },
  { label: 'Services', url: '/services' },
  { label: 'Blog', url: '/blog' },
  { label: 'Contact', url: '/contact' },
];
