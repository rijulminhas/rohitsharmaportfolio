import ExternalLink from "@/components/ExternalLink";
import RevealOnScroll from "@/components/RevealOnScroll";
import SectionHeading from "@/components/SectionHeading";
import { personal } from "@/data/site";

const links = [
  {
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    external: false,
  },
  {
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phoneHref}`,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "rohit-kumar",
    href: personal.linkedin,
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl border-t border-line px-6 py-20 sm:px-10 sm:py-28"
    >
      <RevealOnScroll>
        <SectionHeading
          index="05"
          title="Contact"
          description="Open to frontend and Shopify development roles, freelance work, and new conversations."
        />
      </RevealOnScroll>

      <RevealOnScroll className="flex flex-col">
        {links.map((link) =>
          link.external ? (
            <ExternalLink
              key={link.label}
              href={link.href}
              className="focus-ring group flex flex-col gap-2 border-b border-line px-3 py-6 transition-all duration-300 first:border-t hover:bg-paper-dim hover:px-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <span className="font-mono text-xs uppercase tracking-wide text-ink-soft">
                {link.label}
              </span>
              <span className="underline-link font-display text-ink transition-colors group-hover:text-accent wrap-anywhere text-xl sm:text-2xl md:text-3xl">
                {link.value}
              </span>
            </ExternalLink>
          ) : (
            <a
              key={link.label}
              href={link.href}
              className="focus-ring group flex flex-col gap-2 border-b border-line px-3 py-6 transition-all duration-300 first:border-t hover:bg-paper-dim hover:px-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <span className="font-mono text-xs uppercase tracking-wide text-ink-soft">
                {link.label}
              </span>
              <span className="underline-link font-display text-ink transition-colors group-hover:text-accent wrap-anywhere text-xl sm:text-2xl md:text-3xl">
                {link.value}
              </span>
            </a>
          )
        )}
      </RevealOnScroll>

      <RevealOnScroll
        delayMs={100}
        className="mt-8 font-mono text-xs uppercase tracking-wide text-ink-soft"
      >
        {personal.location}
      </RevealOnScroll>
    </section>
  );
}
