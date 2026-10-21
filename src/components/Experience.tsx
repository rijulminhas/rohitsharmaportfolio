import ExternalLink from "@/components/ExternalLink";
import RevealOnScroll from "@/components/RevealOnScroll";
import SectionHeading from "@/components/SectionHeading";
import { experience, experienceNote } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl border-t border-line px-6 py-20 sm:px-10 sm:py-28"
    >
      <RevealOnScroll>
        <SectionHeading
          index="03"
          title="Experience"
          description={experienceNote}
        />
      </RevealOnScroll>

      <div className="flex flex-col">
        {experience.map((entry, i) => (
          <RevealOnScroll key={entry.role + entry.org} delayMs={i * 80}>
            <div className="grid grid-cols-1 gap-6 border-b border-line py-10 first:pt-0 last:border-none md:grid-cols-[1fr_2fr] md:gap-14">
              <div>
                <span className="font-mono text-xs uppercase tracking-wide text-accent">
                  {entry.type === "work" ? entry.period : "Training"}
                </span>
                <h3 className="font-display mt-2 text-2xl text-ink sm:text-3xl">
                  {entry.orgUrl ? (
                    <ExternalLink
                      href={entry.orgUrl}
                      className="underline-link"
                    >
                      {entry.org}
                    </ExternalLink>
                  ) : (
                    entry.org
                  )}
                </h3>
                <p className="mt-1 text-sm text-ink-soft">{entry.role}</p>
              </div>

              <div>
                <p className="text-base leading-relaxed text-ink-soft">
                  {entry.summary}
                </p>
                <ul className="mt-5 space-y-2">
                  {entry.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-ink-soft"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
