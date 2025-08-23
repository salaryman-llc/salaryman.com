type ProductDetails = {
  title: string;
  href: string;
  description: string;
  releaseDate?: string;
  status: string;
  platforms: string;
  engines: string;
  steamLink?: string;
  epicGamesStoreLink?: string;
  itchIOLink?: string;
};

export const allProducts: ProductDetails[] = [
  {
    title: "AI Translations",
    href: "/product/translations",
    description: "This tool provides an in editor menu to gather and translate all localization strings in your project. It works directly with the Unreal/Unity Localization systems to discover strings.",
    status: "In Development",
    platforms: "Windows, MacOS, Linux",
    engines: "Unreal Engine, Unity",
  },
];
