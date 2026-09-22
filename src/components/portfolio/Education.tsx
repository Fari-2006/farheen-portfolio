import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { education } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

export function Education() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const scaleY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    stiffness: 90,
    damping: 24,
  });

  return (
    <section id="education" className="section-pad border-t border-border">
      <div className="shell">
        <SectionHeading eyebrow="02 — Education" title="Academic Track" />

        <div ref={ref} className="relative mt-14 pl-8 sm:pl-12">
          <div className="absolute left-[3px] top-2 h-full w-px bg-border" />
          <motion.div
            style={{ scaleY }}
            className="absolute left-[3px] top-2 h-full w-px origin-top bg-primary"
          />

          <div className="flex flex-col gap-10 sm:gap-14">
            {education.map((item, i) => (
              <Reveal key={item.degree} delay={0.05 * i}>
                <div className="group relative">
                  <span className="absolute -left-8 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background transition-transform duration-300 group-hover:scale-125 sm:-left-12" />
                  <p className="font-mono text-xs tracking-[0.2em] text-primary">
                    {item.period}
                  </p>
                  <h3 className="mt-2 font-display text-xl text-foreground sm:text-2xl">
                    {item.degree}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.school}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {item.details.map((d) => (
                      <li
                        key={d}
                        className="rounded-full border border-border bg-surface/60 px-3 py-1 font-mono text-[0.7rem] text-foreground/80"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
