import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";
import { MagneticButton } from "./MagneticButton";
import { Reveal } from "./Reveal";

const details = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Github, label: "GitHub", value: "github.com/Fari-2006", href: profile.github },
  { icon: Linkedin, label: "LinkedIn", value: "bit.ly/shaik-farheen", href: profile.linkedin },
  { icon: MapPin, label: "Location", value: profile.location },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone}` },
];

export function Contact() {
  return (
    <section id="contact" className="section-pad relative border-t border-border">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-linear-to-t from-primary/8 to-transparent" />
      <div className="shell relative grid gap-14 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <Reveal>
            <p className="eyebrow">06 — Contact</p>
            <h2 className="title-lg mt-4">
              Let&apos;s <span className="text-primary">Connect.</span>
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Have a project, opportunity, or just want to say hello? Feel free to reach out.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-9 flex flex-wrap gap-3">
              <MagneticButton as="a" href={`mailto:${profile.email}`} variant="solid">
                Email Me
              </MagneticButton>
              <MagneticButton
                as="a"
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                variant="outline"
              >
                GitHub
              </MagneticButton>
              <MagneticButton
                as="a"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                variant="outline"
              >
                LinkedIn
              </MagneticButton>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <ul className="divide-y divide-border rounded-xl border border-border bg-surface/40">
            {details.map(({ icon: Icon, label, value, href }) => (
              <li key={label}>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer noopener"
                    className="flex items-center gap-4 px-6 py-5 transition-colors duration-300 hover:bg-muted/40"
                  >
                    <Icon className="h-4 w-4 text-primary" aria-hidden />
                    <span className="eyebrow w-24 shrink-0">{label}</span>
                    <span className="truncate text-sm text-foreground/85">{value}</span>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 px-6 py-5">
                    <Icon className="h-4 w-4 text-primary" aria-hidden />
                    <span className="eyebrow w-24 shrink-0">{label}</span>
                    <span className="text-sm text-foreground/85">{value}</span>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
