"use client";

import { stats } from "@/data/site";
import { BorderedBox, Counter, Reveal } from "./shared";

export default function Stats() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 pb-24 md:px-12 md:pb-32">
      <Reveal>
        <BorderedBox className="grid grid-cols-1 divide-y divide-grey-300 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-2 p-8 md:p-12">
              <span className="font-display text-6xl md:text-7xl">
                <Counter to={s.value} suffix={s.suffix} />
              </span>
              <span className="copy-mono text-[11px]">{s.label}</span>
            </div>
          ))}
        </BorderedBox>
      </Reveal>
    </section>
  );
}
