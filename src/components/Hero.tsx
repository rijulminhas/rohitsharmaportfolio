import type { CSSProperties } from "react";
import ExternalLink from "@/components/ExternalLink";
import { personal } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex max-w-6xl flex-col gap-10 overflow-hidden px-6 pt-16 pb-24 sm:px-10 sm:pt-24 sm:pb-32"
    >
      <div
        aria-hidden="true"
        className="dot-grid pointer-events-none absolute inset-x-0 top-0 -z-10 h-128"
      />

      <div
        className="rise-in flex items-center gap-3 font-mono text-xs uppercase tracking-wide text-ink-soft"
        style={{ "--rise-delay": "0ms" } as CSSProperties}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        {personal.location}
      </div>

      <h1 className="font-display max-w-4xl text-5xl leading-[1.05] text-ink sm:text-7xl">
        <span
          className="rise-in block"
          style={{ "--rise-delay": "90ms" } as CSSProperties}
        >
          Frontend developer
        </span>
        <span
          className="rise-in block"
          style={{ "--rise-delay": "180ms" } as CSSProperties}
        >
          building thoughtful
        </span>
        <span
          className="rise-in block"
          style={{ "--rise-delay": "270ms" } as CSSProperties}
        >
          web experiences.
        </span>
      </h1>

      <p
        className="rise-in max-w-xl text-lg leading-relaxed text-ink-soft"
        style={{ "--rise-delay": "380ms" } as CSSProperties}
      >
        I&apos;m Rohit Kumar Sharma, a frontend and Shopify developer focused
        on responsive interfaces, e-commerce storefronts, and practical web
        experiences. I currently work at{" "}
        <ExternalLink
          href={personal.currentEmployerUrl}
          className="underline-link font-medium text-ink"
        >
          {personal.currentEmployer}
        </ExternalLink>
        .
      </p>

      <div
        className="rise-in flex flex-wrap items-center gap-4 pt-2"
        style={{ "--rise-delay": "460ms" } as CSSProperties}
      >
        <a
          href="#projects"
          className="focus-ring rounded-sm bg-ink px-6 py-3 font-mono text-xs uppercase tracking-wide text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:shadow-[0_14px_30px_-14px_rgba(193,68,14,0.65)]"
        >
          Explore My Work
        </a>
        <a
          href="#contact"
          className="focus-ring underline-link rounded-sm px-2 py-3 font-mono text-xs uppercase tracking-wide text-ink"
        >
          Get in Touch
        </a>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="focus-ring scroll-cue mx-auto mt-6 hidden h-9 w-9 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-accent hover:text-accent sm:flex"
      >
        <span aria-hidden="true">&#8595;</span>
      </a>
    </section>
  );
}
