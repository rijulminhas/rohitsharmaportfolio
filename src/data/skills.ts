export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend Development",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Responsive Web Design",
      "UI Development",
    ],
  },
  {
    category: "Shopify Development",
    items: [
      "Shopify",
      "Shopify Liquid",
      "Theme Customization",
      "Custom Sections",
      "Product Page Customization",
      "Collection Page Customization",
      "E-commerce Storefront Development",
    ],
  },
  {
    category: "CMS & Styling",
    items: ["WordPress", "Bootstrap", "Tailwind CSS"],
  },
  {
    category: "APIs & Interactive Features",
    items: [
      "REST API Integration",
      "React Context API",
      "Shopping Cart Functionality",
      "Wishlist Functionality",
    ],
  },
  {
    category: "Tools & Maintenance",
    items: [
      "Git",
      "GitHub",
      "Website Maintenance",
      "Cross-browser Compatibility",
      "Mobile-first Design",
      "UI Styling",
      "Troubleshooting",
    ],
  },
  {
    category: "Professional Strengths",
    items: [
      "Problem-solving",
      "Attention to detail",
      "Responsive design",
      "Understanding client requirements",
      "Teamwork",
      "Adaptability",
      "Quick learning",
      "Time management",
    ],
  },
];
