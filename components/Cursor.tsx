"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";

type Variant = "default" | "view" | "link";

/**
 * Curseur sur-mesure : un point net + un anneau magnétique avec inertie.
 * Morphe selon l'élément survolé via l'attribut data-cursor :
 *   data-cursor="view"  -> anneau large + label "VOIR"
 *   data-cursor="link"  -> anneau réduit (boutons / liens)
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState<Variant>("default");
  const [hidden, setHidden] = useState(true);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const ringX = useSpring(x, { stiffness: 220, damping: 26, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 220, damping: 26, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!fine || reduced) return;

    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);

      const el = (e.target as HTMLElement)?.closest("[data-cursor]");
      const v = el?.getAttribute("data-cursor") as Variant | null;
      setVariant(v ?? "default");
    };
    const leave = () => setHidden(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  const ringSize = variant === "view" ? 96 : variant === "link" ? 56 : 36;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[90] hidden md:block"
    >
      {/* Point net */}
      <motion.div
        className="fixed top-0 left-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ink"
        style={{ x, y }}
        animate={{ opacity: hidden || variant === "view" ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />
      {/* Anneau magnétique */}
      <motion.div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink mix-blend-difference"
        style={{ x: ringX, y: ringY }}
        animate={{
          width: ringSize,
          height: ringSize,
          opacity: hidden ? 0 : 1,
          backgroundColor:
            variant === "view" ? "rgba(10,10,10,1)" : "rgba(10,10,10,0)",
          borderColor: "rgba(10,10,10,1)",
        }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
      >
        <AnimatePresence>
          {variant === "view" && (
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="font-display absolute inset-0 flex items-center justify-center text-[11px] tracking-widest text-paper"
            >
              VOIR
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
