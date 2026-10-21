import ExternalLink from "@/components/ExternalLink";
import RevealOnScroll from "@/components/RevealOnScroll";
import SectionHeading from "@/components/SectionHeading";
import { personal } from "@/data/site";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl border-t border-line px-6 py-20 sm:px-10 sm:py-28"
    >
      <RevealOnScroll>
        <SectionHeading index="01" title="About" />
      </RevealOnScroll>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr]">
        <RevealOnScroll className="space-y-6 text-lg leading-relaxed text-ink-soft">
          <p>
            Rohit is a frontend developer with hands-on experience across
            Shopify storefront development, WordPress, and modern JavaScript
            interfaces. His day-to-day work covers responsive layouts, custom
            Shopify sections, product and collection page customization, and
            the cross-browser polish that makes a site hold together in the
            real world.
          </p>
          <p>
            Before that, six months of focused frontend development training
            laid the groundwork — HTML, CSS, JavaScript, and React
            fundamentals — along with the habits that carried into his first
            professional role: attention to detail, clear communication with
            clients, and a bias toward shipping things that actually work.
          </p>
          <p>
            He currently works at{" "}
            <ExternalLink
              href={personal.currentEmployerUrl}
              className="underline-link font-medium text-ink"
            >
              {personal.currentEmployer}
            </ExternalLink>
            , building and customizing e-commerce storefronts and web
            interfaces for clients across industries.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delayMs={120}>
          <dl className="space-y-6 border-t border-line pt-6 font-mono text-sm md:border-t-0 md:border-l md:pt-0 md:pl-8">
            <div>
              <dt className="uppercase tracking-wide text-ink-soft">
                Based in
              </dt>
              <dd className="mt-1 text-ink">{personal.location}</dd>
            </div>
            <div>
              <dt className="uppercase tracking-wide text-ink-soft">
                Currently
              </dt>
              <dd className="mt-1 text-ink">
                Frontend &amp; Shopify Developer at{" "}
                {personal.currentEmployer}
              </dd>
            </div>
            <div>
              <dt className="uppercase tracking-wide text-ink-soft">
                Education
              </dt>
              <dd className="mt-1 text-ink">
                Bachelor of Computer Applications (BCA)
              </dd>
            </div>
            <div>
              <dt className="uppercase tracking-wide text-ink-soft">
                Languages
              </dt>
              <dd className="mt-1 text-ink">
                {personal.languages.join(", ")}
              </dd>
            </div>
          </dl>
        </RevealOnScroll>
      </div>
    </section>
  );
}
