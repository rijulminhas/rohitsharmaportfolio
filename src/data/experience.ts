export type ExperienceEntry = {
  role: string;
  org: string;
  orgUrl?: string;
  period: string;
  type: "work" | "training";
  summary: string;
  responsibilities: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Frontend Developer | Web Designer | Shopify & WordPress Developer",
    org: "The Fabcode Solutions LLP",
    orgUrl: "https://thefabcode.com/",
    period: "Present",
    type: "work",
    summary:
      "Currently working on frontend development, Shopify storefront customization, and responsive web experiences.",
    responsibilities: [
      "Design, develop, and customize responsive websites for desktop, tablet, and mobile devices.",
      "Customize Shopify themes using Shopify Liquid, HTML, CSS, and JavaScript.",
      "Develop and modify custom Shopify sections, product pages, collection pages, and storefront layouts.",
      "Implement responsive user interfaces with attention to typography, spacing, visual consistency, and usability.",
      "Customize WordPress websites, page layouts, and website content according to project requirements.",
      "Convert design references and mockups into functional, responsive web pages.",
      "Integrate APIs and implement interactive website features using JavaScript and React.js.",
      "Troubleshoot layout, styling, and functionality issues across browsers and screen sizes.",
      "Perform website maintenance, storefront updates, and ongoing design improvements.",
    ],
  },
  {
    role: "Front-End Developer Training",
    org: "Mohali, Punjab",
    period: "6 months",
    type: "training",
    summary:
      "Hands-on training in frontend fundamentals that preceded his first professional role.",
    responsibilities: [
      "Completed practical training in HTML, CSS, and JavaScript.",
      "Practiced responsive website development and frontend layout implementation.",
      "Gained practical experience in website styling, maintenance, and user interface development.",
    ],
  },
];

export const experienceNote =
  "1 year and 1 month of professional experience, plus 6 months of frontend development training.";
