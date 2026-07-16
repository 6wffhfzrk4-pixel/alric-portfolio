"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useInView,
} from "framer-motion";
import { processSteps, processIntro, type ProcessStep } from "@/data/site";
import { MaskText, Reveal, Pill } from "./shared";

/* Bloc d'étape (colonne droite) — signale quand il passe au centre */
function StepBlock({
  step,
  index,
  onActive,
}: {
  step: ProcessStep;
  index: number;
  onActive: (i: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const centered = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (centered) onActive(index);
  }, [centered, index, onActive]);

  return (
    <div
      ref={ref}
      className="flex min-h-[46vh] flex-col justify-center border-t border-grey-300 py-10 md:min-h-[66vh]"
    >
      <Reveal>
        {/* Grand numéro (mobile uniquement, le desktop l'affiche en sticky) */}
        <span className="font-display text-chrome block text-6xl leading-none md:hidden">
          {step.num}
        </span>
        <h3 className="font-display mt-3 text-3xl tracking-tight uppercase md:mt-0 md:text-5xl">
          {step.title}
        </h3>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-grey-700">
          {step.desc}
        </p>
      </Reveal>
    </div>
  );
}

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const fill = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <section
      ref={sectionRef}
      id="process"
      className="mx-auto max-w-[1280px] px-6 py-24 md:px-12 md:py-32"
    >
      {/* En-tête */}
      <Reveal>
        <Pill>Comment je travaille</Pill>
      </Reveal>
      <h2 className="font-display mt-6 text-[12vw] leading-[0.95] md:text-[6vw]">
        <MaskText text="MON PROCESSUS" />
      </h2>
      <Reveal delay={0.1}>
        <p className="copy-mono mt-5 max-w-md text-xs md:text-sm">
          {processIntro}
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-10 md:mt-8 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
        {/* Colonne gauche : numéro chrome + barre de progression (sticky) */}
        <div className="hidden md:block">
          <div className="sticky top-28 flex gap-6">
            {/* Piste de progression */}
            <div className="relative h-[60vh] w-px shrink-0 bg-grey-300">
              <motion.div
                style={{ scaleY: fill }}
                className="absolute inset-0 origin-top bg-ink"
              />
            </div>

            {/* Numéro + titre actif */}
            <div className="flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -28 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="font-display text-chrome block text-[10rem] leading-[0.8] lg:text-[13rem]">
                    {processSteps[active].num}
                  </span>
                  <span className="font-display mt-2 block text-2xl tracking-tight uppercase text-grey-500">
                    {processSteps[active].title}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* compteur d'étapes */}
              <div className="mt-8 flex gap-2">
                {processSteps.map((s, i) => (
                  <span
                    key={s.num}
                    className={
                      "h-1.5 w-8 rounded-full transition-colors duration-300 " +
                      (i <= active ? "bg-ink" : "bg-grey-300")
                    }
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Colonne droite : étapes */}
        <div className="flex flex-col">
          {processSteps.map((step, i) => (
            <StepBlock
              key={step.num}
              step={step}
              index={i}
              onActive={setActive}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
