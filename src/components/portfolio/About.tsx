import { aboutCards } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

export function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <SectionHeading eyebrow="01 — About" title="About Me" />
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              I’m a third-year CSE-IoT student who enjoys learning by building practical projects.
              My experience so far comes from academic work, hands-on development, and hackathons,
              where I’ve worked on web applications, AI-powered solutions, and data-driven projects.
            </p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              I’ve worked with technologies such as Python, Flask, FastAPI, SQL, and modern web
              technologies. I enjoy exploring new technologies, solving problems, and turning ideas
              into working applications. I’m excited to begin my career in an entry-level role where
              I can contribute to real-world projects, learn from experienced professionals, and
              continue developing my skills.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {aboutCards.map((card, i) => (
            <Reveal key={card.label} delay={0.08 * i}>
              <div className="group h-full rounded-lg border border-border bg-surface/50 p-6 transition-colors duration-300 hover:border-primary/40">
                <p className="eyebrow">{card.label}</p>
                <p className="mt-3 font-display text-lg leading-snug text-foreground">
                  {card.value}
                </p>
                <div className="mt-5 h-px w-8 bg-primary/50 transition-all duration-300 group-hover:w-16" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
