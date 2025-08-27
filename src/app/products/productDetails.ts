type ProductDetails = {
  title: string;
  href: string;
  description: string;
  status: string;
  platforms: string;
  engines: string;
  storeLinks?: {
    name: string;
    href: string;
  }[];
};

export const allProducts: ProductDetails[] = [
  {
    title: 'AI Translations',
    href: '/product/translations',
    description:
      'This tool provides an in editor menu to gather and translate all localization strings in your project. It integrates directly with the default Unreal/Unity Localization systems to discover strings.',
    status: 'In Development',
    platforms: 'Windows, MacOS, Linux',
    engines: 'Unreal Engine, Unity',
  },
];
