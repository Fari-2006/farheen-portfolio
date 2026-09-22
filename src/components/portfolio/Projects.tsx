import { motion, useReducedMotion } from "framer-motion";
import { Trophy } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

export function Projects() {
  const reduce = useReducedMotion();

  return (
    <section id="projects" className="section-pad border-t border-border">
      <div className="shell">
        <SectionHeading
          eyebrow="04 — Projects"
          title="Selected Work"
          lead="Academic and self-driven builds across web platforms, applied machine learning and embedded systems."
        />

        <div className="mt-16 flex flex-col gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.index} delay={0.04 * i}>
              <motion.article
                whileHover={reduce ? {} : { y: -4 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group rounded-xl border border-border bg-surface/40 p-6 text-center transition-colors duration-500 hover:border-primary/35 sm:p-9"
              >
                <div>
                  <div className="flex items-baseline justify-center gap-4">
                    <span className="font-mono text-sm text-primary">{p.index}</span>
                    <span className="h-px flex-1 bg-border transition-colors duration-500 group-hover:bg-primary/40" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl leading-tight text-foreground sm:text-3xl">
                    {p.title}
                  </h3>
                  {p.subtitle ? <p className="mt-2 text-sm text-primary/80">{p.subtitle}</p> : null}
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>
                  {p.extra ? (
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                      {p.extra}
                    </p>
                  ) : null}
                  {p.highlights ? (
                    <ul className="mx-auto mt-5 max-w-2xl space-y-2 text-left">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-foreground/85">
                          <Trophy className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                          {h}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <ul className="mt-6 flex flex-wrap justify-center gap-2">
                    {p.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-border px-3 py-1 font-mono text-[0.7rem] text-muted-foreground transition-colors duration-300 group-hover:border-border-strong group-hover:text-foreground/80"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
