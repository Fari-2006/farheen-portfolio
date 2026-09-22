import { Trophy, Diamond } from "lucide-react";
import { achievements } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

export function Achievements() {
  return (
    <section id="achievements" className="section-pad border-t border-border">
      <div className="shell">
        <SectionHeading eyebrow="05 — Achievements" title="Wins & Participation" />

        <ul className="mt-14 divide-y divide-border border-y border-border">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={0.05 * i}>
              <li className="group flex flex-col gap-2 py-6 transition-colors duration-300 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <span
                    className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border ${
                      a.kind === "win"
                        ? "border-primary/40 bg-primary/10 text-primary"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    {a.kind === "win" ? (
                      <Trophy className="h-4 w-4" aria-hidden />
                    ) : (
                      <Diamond className="h-3.5 w-3.5" aria-hidden />
                    )}
                  </span>
                  <p className="font-display text-lg text-foreground transition-transform duration-300 group-hover:translate-x-1 sm:text-xl">
                    {a.title}
                  </p>
                </div>
                <p className="pl-12 text-sm text-muted-foreground sm:pl-0 sm:text-right">
                  {a.org}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
