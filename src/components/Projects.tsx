import ExternalLink from "@/components/ExternalLink";
import ProjectVisual from "@/components/ProjectVisual";
import RevealOnScroll from "@/components/RevealOnScroll";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/projects";

export default function Projects() {
  const featured = projects.filter((project) => project.featured);
  const supporting = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-28"
    >
      <RevealOnScroll>
        <SectionHeading
          index="02"
          title="Selected Work"
          description="E-commerce storefronts and web projects Rohit has contributed to, drawn from his Shopify and frontend development work."
        />
      </RevealOnScroll>

      <div className="flex flex-col gap-16">
        {featured.map((project, i) => (
          <RevealOnScroll key={project.name} delayMs={i * 60}>
            <article className="grid grid-cols-1 items-center gap-8 border-b border-line pb-16 last:border-none last:pb-0 md:grid-cols-2 md:gap-14">
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="aspect-[4/3]">
                  <ProjectVisual name={project.name} url={project.url} index={i} />
                </div>
              </div>

              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <span className="font-mono text-xs uppercase tracking-wide text-accent">
                  {project.category}
                </span>
                <h3 className="font-display mt-3 text-3xl text-ink sm:text-4xl">
                  {project.name}
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
                  {project.description}
                </p>
                {project.url ? (
                  <ExternalLink
                    href={project.url}
                    className="underline-link focus-ring mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-ink"
                  >
                    Visit Website
                    <span aria-hidden="true">&#8599;</span>
                  </ExternalLink>
                ) : null}
              </div>
            </article>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll className="mt-16">
        <h3 className="font-mono text-xs uppercase tracking-wide text-ink-soft">
          More Projects
        </h3>
        <ul className="mt-6 divide-y divide-line border-y border-line">
          {supporting.map((project) => (
            <li
              key={project.name}
              className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
            >
              <div>
                <p className="font-display text-xl text-ink">{project.name}</p>
                <p className="mt-1 max-w-lg text-sm leading-relaxed text-ink-soft">
                  {project.description}
                </p>
              </div>
              {project.url ? (
                <ExternalLink
                  href={project.url}
                  className="underline-link focus-ring shrink-0 font-mono text-xs uppercase tracking-wide text-ink"
                >
                  Visit Website &#8599;
                </ExternalLink>
              ) : (
                <span className="shrink-0 font-mono text-xs uppercase tracking-wide text-ink-soft/70">
                  Link pending
                </span>
              )}
            </li>
          ))}
        </ul>
      </RevealOnScroll>
    </section>
  );
}
