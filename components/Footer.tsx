"use client";

import { footer, profile } from "@/data/site";
import { MaskText, Magnetic, cn } from "./shared";

export default function Footer() {
  return (
    <footer id="contact" className="bg-grid-dark bg-ink-soft text-paper">
      <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-12 md:py-28">
        <div className="flex flex-wrap gap-x-6 gap-y-2 border-b border-white/10 pb-8 text-[10px] tracking-widest uppercase text-white/50">
          {footer.labels.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </div>

        <h2 className="font-display mt-12 text-center text-[clamp(2.5rem,14vw,11rem)] leading-[0.85]">
          <MaskText text={footer.title} />
        </h2>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {footer.contacts.map((c) => (
            <Magnetic key={c.label} strength={0.3}>
              <a
                href={c.href}
                data-cursor="link"
                className={cn(
                  "inline-flex rounded-full px-6 py-3 text-xs tracking-widest uppercase transition-colors",
                  c.filled
                    ? "bg-paper text-ink hover:bg-paper/85"
                    : "border border-white/40 text-paper hover:bg-paper hover:text-ink"
                )}
              >
                {c.label}
              </a>
            </Magnetic>
          ))}
        </div>

        <p className="mt-16 text-center text-[10px] tracking-widest uppercase text-white/30">
          © {new Date().getFullYear()} {profile.fullName} · UI/UX Designer ·
          Cotonou, Bénin
        </p>
      </div>
    </footer>
  );
}
