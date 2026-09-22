import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="shell flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-lg text-foreground">{profile.name}</p>
          <p className="mt-1 font-mono text-[0.7rem] tracking-[0.2em] uppercase text-muted-foreground">
            {profile.positioning}
          </p>
        </div>

        <nav aria-label="Footer" className="flex gap-6 text-sm text-muted-foreground">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors hover:text-primary"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors hover:text-primary"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-primary"
          >
            Email
          </a>
        </nav>
      </div>
    </footer>
  );
}
