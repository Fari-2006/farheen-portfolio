import { skillGroups } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="section-pad border-t border-border">
      <div className="shell">
        <SectionHeading
          eyebrow="03 — Skills"
          title="Tools I Work With"
          lead="Languages, frameworks and tools used across coursework and project work."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={0.06 * i} className="bg-background">
              <div className="group h-full bg-surface/40 p-7 transition-colors duration-300 hover:bg-surface/80">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <p className="eyebrow">{group.title}</p>
                </div>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      tabIndex={0}
                      className="cursor-default rounded-md border border-border px-3 py-1.5 text-sm text-foreground/85 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary focus-visible:-translate-y-0.5"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
