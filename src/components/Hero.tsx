import ExternalLink from "@/components/ExternalLink";
import { personal } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pt-16 pb-20 sm:px-10 sm:pt-24 sm:pb-28"
    >
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-wide text-ink-soft">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        {personal.location}
      </div>

      <h1 className="font-display max-w-4xl text-5xl leading-[1.05] text-ink sm:text-7xl">
        Frontend developer
        <br />
        building thoughtful
        <br />
        web experiences.
      </h1>

      <p className="max-w-xl text-lg leading-relaxed text-ink-soft">
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

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <a
          href="#projects"
          className="focus-ring rounded-sm bg-ink px-6 py-3 font-mono text-xs uppercase tracking-wide text-paper transition-colors hover:bg-accent"
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
    </section>
  );
}
