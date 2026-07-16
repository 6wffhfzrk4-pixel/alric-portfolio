"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useInView,
  useReducedMotion,
  animate,
} from "framer-motion";
import { projects, type Project, type ProjectCategory } from "@/data/site";
import { Pill, MaskText, ArrowButton, ImgFrame, useTilt } from "./shared";

/* Durée d'affichage de chaque projet avant le défilement automatique */
const AUTOPLAY_MS = 4000;

function Card({ p, active }: { p: Project; active: boolean }) {
  const { rx, ry, onMove, reset } = useTilt(7);
  return (
    <motion.article
      layout
      data-card=""
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: active ? 1 : 0.45, scale: active ? 1 : 0.94 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-[80vw] shrink-0 sm:w-[58vw] md:w-[42vw] lg:w-[33vw]"
    >
      <Link
        href={`/projets/${p.slug}`}
        draggable={false}
        className="group block"
        data-cursor="view"
      >
        <motion.div
          onMouseMove={onMove}
          onMouseLeave={reset}
          style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
          whileHover={{ scale: 1.01 }}
          className="preserve-3d group relative"
        >
          <ImgFrame
            src={p.image}
            alt={p.title}
            label={p.kicker}
            className={`pointer-events-none aspect-[4/3] w-full rounded-3xl transition-[filter] duration-700 group-hover:grayscale-0 ${
              active ? "grayscale-0" : "grayscale"
            }`}
          />
          {/* Aperçu façon streaming — uniquement sur la carte en avant */}
          <AnimatePresence>
            {active && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.2,
                }}
                className="pointer-events-none absolute inset-x-0 bottom-0 rounded-b-3xl bg-gradient-to-t from-ink/90 via-ink/50 to-transparent p-5 pt-16"
              >
                <p className="line-clamp-2 text-sm leading-relaxed text-paper/95">
                  {p.summary}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.services.slice(0, 3).map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-paper/35 px-2.5 py-0.5 text-[10px] tracking-widest text-paper/85 uppercase"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <p className="copy-mono text-[10px]">{p.kicker}</p>
            <h3 className="font-display mt-1 text-xl tracking-tight uppercase">
              {p.title}
            </h3>
          </div>
          <span
            className={`font-display mt-1 shrink-0 text-xs tracking-widest transition-colors group-hover:text-ink ${
              active ? "text-ink" : "text-grey-500"
            }`}
          >
            ÉTUDE DE CAS ↗
          </span>
        </div>
      </Link>
    </motion.article>
  );
}

export default function FeaturedProjects() {
  const [filter, setFilter] = useState<ProjectCategory>("APP MOBILE");
  const filtered = projects.filter((p) => p.category === filter);

  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [constraint, setConstraint] = useState(0);
  const [offsets, setOffsets] = useState<number[]>([]);
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [dragging, setDragging] = useState(false);

  const x = useMotionValue(0);
  const inView = useInView(sectionRef, { amount: 0.35 });
  const reducedMotion = useReducedMotion();

  /* Mesure : contrainte de drag + position de chaque carte */
  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      const cont = containerRef.current;
      if (!track || !cont) return;
      const diff = track.scrollWidth - cont.offsetWidth;
      setConstraint(diff > 0 ? diff : 0);
      const cards = Array.from(
        track.querySelectorAll<HTMLElement>("[data-card]")
      );
      const first = cards[0]?.offsetLeft ?? 0;
      setOffsets(cards.map((c) => c.offsetLeft - first));
    };
    const id = window.setTimeout(measure, 80);
    window.addEventListener("resize", measure);
    return () => {
      window.clearTimeout(id);
      window.removeEventListener("resize", measure);
    };
  }, [filter]);

  /* Changement de filtre → retour au premier projet */
  useEffect(() => {
    setActive(0);
  }, [filter]);

  const targetFor = useCallback(
    (i: number) => -Math.min(offsets[i] ?? 0, constraint),
    [offsets, constraint]
  );

  /* La piste glisse vers la carte active */
  useEffect(() => {
    if (!offsets.length || dragging) return;
    const controls = animate(x, targetFor(active), {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [active, offsets, dragging, targetFor, x]);

  /* Lecture automatique — en pause au survol, pendant le drag,
     hors écran ou si l'utilisateur préfère réduire les animations */
  const paused = hovered || dragging || !inView || !!reducedMotion;
  useEffect(() => {
    if (paused || filtered.length < 2) return;
    const id = window.setTimeout(() => {
      setActive((a) => (a + 1) % filtered.length);
    }, AUTOPLAY_MS);
    return () => window.clearTimeout(id);
  }, [active, paused, filtered.length, filter]);

  /* Fin de drag → recale sur la carte la plus proche */
  const onDragEnd = () => {
    setDragging(false);
    const cur = -x.get();
    let nearest = 0;
    let best = Infinity;
    offsets.forEach((o, i) => {
      const d = Math.abs(Math.min(o, constraint) - cur);
      if (d < best) {
        best = d;
        nearest = i;
      }
    });
    setActive(nearest);
    animate(x, targetFor(nearest), { duration: 0.5, ease: [0.22, 1, 0.36, 1] });
  };

  const next = () => setActive((a) => (a + 1) % filtered.length);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="overflow-hidden py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <h2 className="font-display text-[15vw] leading-none md:text-[7vw]">
          <MaskText text="PROJETS PHARES" />
        </h2>

        <div className="mt-8 flex items-center gap-3">
          {/* Toggle : WEB DESIGN chevauche légèrement APP MOBILE */}
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => setFilter("APP MOBILE")}
              data-cursor="link"
              className="relative z-0"
            >
              <Pill active={filter === "APP MOBILE"} className="pr-9">
                APP MOBILE
              </Pill>
            </button>
            <button
              type="button"
              onClick={() => setFilter("WEB DESIGN")}
              data-cursor="link"
              className="relative z-10 -ml-6"
            >
              <Pill active={filter === "WEB DESIGN"}>WEB DESIGN</Pill>
            </button>
          </div>

          <span className="copy-mono ml-auto hidden text-[11px] md:block">
            Glisser →
          </span>
          <span onClick={next} className="shrink-0">
            <ArrowButton label="Projet suivant" />
          </span>
        </div>
      </div>

      <div
        ref={containerRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="mt-12 cursor-grab active:cursor-grabbing"
      >
        <motion.div
          ref={trackRef}
          drag="x"
          style={{ x }}
          dragConstraints={{ left: -constraint, right: 0 }}
          dragElastic={0.08}
          onDragStart={() => setDragging(true)}
          onDragEnd={onDragEnd}
          className="flex w-max gap-6 px-6 md:px-12"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <Card key={p.id} p={p} active={i === active} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Indicateurs : un trait par projet + compteur */}
      <div className="mx-auto mt-10 flex max-w-[1280px] items-center gap-2 px-6 md:px-12">
        {filtered.map((p, i) => (
          <button
            key={p.id}
            type="button"
            aria-label={`Mettre en avant ${p.title}`}
            data-cursor="link"
            onClick={() => setActive(i)}
            className="flex h-6 items-center"
          >
            <motion.span
              animate={{
                width: i === active ? 40 : 20,
                backgroundColor: i === active ? "#0a0a0a" : "#d6d6d6",
              }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="block h-[2px] rounded-full"
            />
          </button>
        ))}
        <span className="copy-mono ml-3 text-[11px] text-grey-500">
          {String(active + 1).padStart(2, "0")} /{" "}
          {String(filtered.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}
