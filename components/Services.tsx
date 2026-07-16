"use client";

import { services, servicesIntro, type Service } from "@/data/site";
import { MaskText, Reveal, cn } from "./shared";

function Row({ s, i }: { s: Service; i: number }) {
  return (
    <Reveal as="li" delay={i * 0.04}>
      <div
        className={cn(
          "group relative overflow-hidden rounded-[1.75rem] border",
          s.featured ? "border-ink" : "border-grey-300"
        )}
        data-cursor="link"
      >
        {/* Remplissage noir depuis la gauche */}
        <span
          aria-hidden
          className={cn(
            "absolute inset-0 origin-left bg-ink transition-transform duration-500 ease-out",
            s.featured ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
          )}
        />
        <div
          className={cn(
            "relative px-4 py-4 transition-colors duration-300 md:px-5 md:py-5",
            s.featured ? "text-paper" : "text-ink group-hover:text-paper"
          )}
        >
          <div className="flex items-center justify-between gap-4">
            {/* Numéro dans un cercle */}
            <span className="font-display flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-current/30 text-xs md:h-10 md:w-10">
              {s.num}
            </span>

            {/* Intitulé centré */}
            <span className="font-display flex-1 text-center text-lg tracking-tight uppercase md:text-3xl">
              {s.title}
            </span>

            {/* Flèche : bas par défaut, droite au survol */}
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-current/30 md:h-10 md:w-10">
              <span className="text-lg leading-none transition-transform duration-300 group-hover:-rotate-90">
                ↓
              </span>
            </span>
          </div>

          {/* Description (accordéon) */}
          <div
            className={cn(
              "grid transition-[grid-template-rows] duration-500 ease-out",
              s.featured
                ? "grid-rows-[1fr]"
                : "grid-rows-[0fr] group-hover:grid-rows-[1fr]"
            )}
          >
            <div className="overflow-hidden">
              <p className="mx-auto max-w-xl px-4 pt-4 text-center text-xs leading-relaxed tracking-wide text-current/75 md:text-sm">
                {s.desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="mx-auto max-w-[1280px] px-6 py-24 md:px-12 md:py-32"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-end">
        <h2 className="font-display text-[12vw] leading-[0.95] md:text-[5.5vw]">
          <MaskText text="LES SERVICES QUE JE PROPOSE" />
        </h2>
        <Reveal>
          <p className="copy-mono text-xs md:ml-auto md:max-w-md md:text-right md:text-sm">
            {servicesIntro}
          </p>
        </Reveal>
      </div>

      <ul className="mt-12 flex flex-col gap-3 md:gap-4">
        {services.map((s, i) => (
          <Row key={s.num} s={s} i={i} />
        ))}
      </ul>
    </section>
  );
}
