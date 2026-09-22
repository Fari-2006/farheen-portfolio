import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { profile } from "@/data/portfolio";
import { SystemVisual } from "./SystemVisual";
import { MagneticButton } from "./MagneticButton";

export function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 26 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-40">
      <div className="grid-faint pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[38rem] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="shell relative grid items-center gap-14 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28">
        <div>
          <motion.h1 {...rise(0.08)} className="title-xl">
            Hi, I&apos;m <span className="text-primary">Farheen.</span>
          </motion.h1>

          <motion.p
            {...rise(0.16)}
            className="mt-6 max-w-xl font-display text-xl leading-snug text-foreground/85 sm:text-2xl"
          >
            CSE-IoT Student
          </motion.p>

          <motion.p
            {...rise(0.24)}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground"
          >
            I&apos;m a third-year CSE-IoT student who enjoys turning ideas into practical projects. Through academic work, hands-on development, and hackathons, I&apos;ve explored software development, data science, and AI/ML. I work with Python, Flask, FastAPI, SQL, and modern web technologies. I&apos;m excited to start my career in an entry-level role where I can contribute to real-world projects, learn from experienced professionals, and continue growing my technical skills.
          </motion.p>

          <motion.div {...rise(0.32)} className="mt-9 flex flex-wrap items-center gap-3">
            <MagneticButton as="a" href="#projects" variant="solid">
              View My Work
            </MagneticButton>
            <MagneticButton as="a" href="#contact" variant="outline">
              Contact Me
            </MagneticButton>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-1 px-2 py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              GitHub
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <SystemVisual />
        </motion.div>
      </div>

      <div className="shell relative flex items-center gap-3 pb-10 text-muted-foreground">
        <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden />
        <span className="font-mono text-[0.7rem] tracking-[0.25em] uppercase">Scroll</span>
      </div>
    </section>
  );
}
