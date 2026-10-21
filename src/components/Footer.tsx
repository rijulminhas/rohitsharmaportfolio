import ExternalLink from "@/components/ExternalLink";
import { navLinks, personal } from "@/data/site";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:px-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-xl text-ink">{personal.name}</p>
          <p className="mt-1 text-sm text-ink-soft">
            Frontend, Shopify &amp; WordPress Developer
          </p>
        </div>

        <nav
          className="flex flex-wrap gap-x-6 gap-y-2"
          aria-label="Footer"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="underline-link focus-ring font-mono text-xs uppercase tracking-wide text-ink-soft hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <ExternalLink
            href={personal.linkedin}
            className="underline-link focus-ring font-mono text-xs uppercase tracking-wide text-ink-soft hover:text-ink"
          >
            LinkedIn
          </ExternalLink>
        </nav>
      </div>

      <div className="border-t border-line px-6 py-6 sm:px-10">
        <p className="font-mono text-xs text-ink-soft">
          &copy; {year} {personal.name}. Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
