export type Project = {
  name: string;
  url?: string;
  category: string;
  description: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    name: "English Brands",
    url: "https://english-brands.co.uk/",
    category: "Shopify Storefront",
    description:
      "A multi-brand retail storefront built on Shopify. Contributed to frontend development and storefront customization.",
    featured: true,
  },
  {
    name: "Pure Spectrum CBD",
    url: "https://purespectrumcbd.com/",
    category: "Shopify Storefront",
    description:
      "An e-commerce storefront for a CBD wellness brand. Contributed to frontend development and storefront customization.",
    featured: true,
  },
  {
    name: "Casa Fika",
    url: "https://casafika.it/en",
    category: "Shopify Storefront",
    description:
      "An Italian lifestyle and home goods storefront. Contributed to frontend development and storefront customization.",
    featured: true,
  },
  {
    name: "Kind Lights",
    url: "https://kindlights.co/",
    category: "Shopify Storefront",
    description:
      "A storefront for a candle and home fragrance brand. Contributed to frontend development and storefront customization.",
    featured: true,
  },
  {
    name: "Sonya Moda",
    url: "https://sonya.moda/",
    category: "Shopify Storefront",
    description:
      "A fashion and apparel e-commerce storefront. Contributed to frontend development and storefront customization.",
    featured: false,
  },
  {
    name: "Kumiukoo",
    url: "https://kumiukoo.fi/",
    category: "Shopify Storefront",
    description:
      "A Finnish e-commerce storefront. Contributed to frontend development and storefront customization.",
    featured: false,
  },
  {
    name: "Rubio Monocoat",
    url: "https://www.rubiomonocoat.com/",
    category: "Shopify Storefront",
    description:
      "A storefront for a wood-finishing products brand. Contributed to frontend development and storefront customization.",
    featured: false,
  },
  {
    name: "Musical Breathwork",
    category: "Project",
    description: "Live link and project details to be confirmed.",
    featured: false,
  },
];
