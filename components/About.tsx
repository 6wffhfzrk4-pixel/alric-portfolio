"use client";

import { profile } from "@/data/site";
import { MaskText, ArrowButton, Reveal } from "./shared";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-[1280px] px-6 py-24 md:px-12 md:py-32"
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-start">
        <div className="flex items-center gap-5">
          <h2 className="font-display text-[18vw] leading-none md:text-[10vw]">
            <MaskText text="À PROPOS" />
          </h2>
          <ArrowButton size="lg" label="À propos" />
        </div>
        <Reveal className="md:pt-4">
          <p className="copy-mono text-sm leading-relaxed md:text-base">
            {profile.aboutText}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
