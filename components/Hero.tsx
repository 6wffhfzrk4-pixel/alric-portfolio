"use client";

import { motion, type Variants } from "framer-motion";
import { profile } from "@/data/site";
import { ArrowButton, useTilt } from "./shared";

const parent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 1.7 } },
};
const line: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const { rx, ry, onMove, reset } = useTilt(6);

  return (
    <section
      id="home"
      className="relative mx-auto max-w-[1280px] overflow-hidden px-6 pt-32 pb-16 md:px-12 md:pt-0"
    >
      {/* Titre — calque arrière, centré, recouvert par le portrait */}
      <motion.h1
        variants={parent}
        initial="hidden"
        animate="show"
        style={{ transform: "translateZ(0)", willChange: "transform" }}
        className="font-display text-chrome relative z-0 text-center text-[clamp(1.9rem,9vw,9rem)] leading-[0.85] md:absolute md:inset-x-0 md:top-[106px] md:px-12"
      >
        {profile.heroLines.map((l, i) => (
          <span
            key={i}
            className="block overflow-hidden whitespace-nowrap pb-[0.06em]"
          >
            <motion.span variants={line} className="block">
              {l}
            </motion.span>
          </span>
        ))}
      </motion.h1>

      {/* Texte gauche · portrait (devant le titre) · texte droite */}
      <div className="relative z-10 mt-10 grid grid-cols-1 items-center gap-8 md:mt-0 md:grid-cols-[1fr_auto_1fr] md:gap-6 md:pt-[20vw]">
        {/* Gauche */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.6 }}
          className="z-20 flex items-center justify-between md:flex-col md:items-start md:gap-10"
        >
          <p className="copy-mono text-[11px]">{profile.baseline}</p>
          <ArrowButton direction="down-right" label="Faire défiler" href="#about" />
        </motion.div>

        {/* Portrait détouré */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          onMouseMove={onMove}
          onMouseLeave={reset}
          style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
          className="preserve-3d order-first mx-auto -mt-4 w-full max-w-[260px] md:order-none md:mt-3 md:max-w-[305px]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={profile.portrait}
            alt="Hononta Alric — portrait en noir et blanc détouré"
            className="h-auto w-full select-none"
            draggable={false}
            style={{
              filter: "grayscale(1) contrast(1.05)",
              WebkitMaskImage:
                "linear-gradient(to bottom, #000 78%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, #000 78%, transparent 100%)",
            }}
          />
        </motion.div>

        {/* Droite */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.6 }}
          className="z-20 flex flex-col gap-6 md:items-end md:text-right"
        >
          <p className="copy-mono max-w-xs text-[11px] md:ml-auto">
            {profile.heroIntro}
          </p>
          <ul className="flex flex-col gap-1.5 md:items-end">
            {profile.skills.map((s) => (
              <li
                key={s}
                className="font-display text-sm tracking-wide text-ink"
              >
                {s}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
