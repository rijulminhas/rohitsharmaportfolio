import RevealOnScroll from "@/components/RevealOnScroll";
import SectionHeading from "@/components/SectionHeading";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl border-t border-line px-6 py-20 sm:px-10 sm:py-28"
    >
      <RevealOnScroll>
        <SectionHeading index="04" title="Skills" />
      </RevealOnScroll>

      <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <RevealOnScroll key={group.category} delayMs={(i % 3) * 60}>
            <h3 className="font-mono text-xs uppercase tracking-wide text-accent">
              {group.category}
            </h3>
            <ul className="mt-4 space-y-2 border-t border-line pt-4">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-sm leading-relaxed text-ink-soft"
                >
                  {item}
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
