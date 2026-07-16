"use client";

import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
  type Variants,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

/* ------------------------------------------------------------------ */
/* Reveal — apparition au scroll (fondu + montée)                      */
/* ------------------------------------------------------------------ */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "li" | "span";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });
  const Comp = motion[as];
  return (
    <Comp
      ref={ref as never}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Comp>
  );
}

/* ------------------------------------------------------------------ */
/* MaskText — titres révélés par masque montant, mot par mot           */
/* ------------------------------------------------------------------ */
const wordVariants: Variants = {
  hidden: { y: "110%" },
  show: (i: number) => ({
    y: "0%",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 },
  }),
};

export function MaskText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const words = text.split(" ");
  return (
    <span ref={ref} className={cn("inline-block", className)}>
      {words.map((w, i) => (
        <span
          key={i}
          className="mr-[0.25em] inline-block overflow-hidden align-bottom"
        >
          <motion.span
            className="inline-block"
            custom={i}
            variants={wordVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Magnetic — attire l'élément vers le curseur                         */
/* ------------------------------------------------------------------ */
export function Magnetic({
  children,
  strength = 0.35,
  className,
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 18 });
  const sy = useSpring(y, { stiffness: 260, damping: 18 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={cn("inline-block", className)}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={reset}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* ArrowButton — bouton circulaire signature (rotation + inversion)    */
/* ------------------------------------------------------------------ */
export function ArrowButton({
  direction = "up-right",
  size = "md",
  dark = false,
  className,
  label = "En savoir plus",
  href,
}: {
  direction?: "up-right" | "down-right";
  size?: "sm" | "md" | "lg";
  dark?: boolean;
  className?: string;
  label?: string;
  href?: string;
}) {
  const dims =
    size === "lg" ? "h-16 w-16" : size === "sm" ? "h-10 w-10" : "h-12 w-12";
  const glyph = direction === "down-right" ? "↘" : "↗";

  const Inner = (
    <motion.span
      className={cn(
        "group relative flex items-center justify-center rounded-full border transition-colors",
        dims,
        dark
          ? "border-white/30 bg-transparent text-paper hover:bg-paper hover:text-ink"
          : "border-grey-300 bg-transparent text-ink hover:bg-ink hover:text-paper",
        className
      )}
      whileHover="hover"
      whileTap={{ scale: 0.92 }}
      data-cursor="link"
    >
      <motion.span
        className="text-xl leading-none"
        variants={{ hover: { rotate: 45 } }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
      >
        {glyph}
      </motion.span>
    </motion.span>
  );

  if (href) {
    return (
      <Magnetic strength={0.4}>
        <a href={href} aria-label={label}>
          {Inner}
        </a>
      </Magnetic>
    );
  }
  return (
    <Magnetic strength={0.4}>
      <button type="button" aria-label={label}>
        {Inner}
      </button>
    </Magnetic>
  );
}

/* ------------------------------------------------------------------ */
/* Pill — conteneur arrondi (clair / sombre)                           */
/* ------------------------------------------------------------------ */
export function Pill({
  children,
  active = false,
  className,
  as = "div",
  ...rest
}: {
  children: React.ReactNode;
  active?: boolean;
  className?: string;
  as?: "div" | "button" | "span";
} & React.HTMLAttributes<HTMLElement>) {
  const Comp = as as "div";
  return (
    <Comp
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-medium tracking-widest uppercase transition-colors",
        active
          ? "bg-ink text-paper"
          : "border border-grey-300 bg-paper text-ink",
        className
      )}
      {...rest}
    >
      {children}
    </Comp>
  );
}

/* ------------------------------------------------------------------ */
/* BorderedBox                                                         */
/* ------------------------------------------------------------------ */
export function BorderedBox({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-grey-300 bg-paper",
        className
      )}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Counter — compteur animé au spring (stats)                          */
/* ------------------------------------------------------------------ */
export function Counter({
  to,
  suffix = "",
  className,
}: {
  to: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref} className={className}>
      {val}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* useParallax — translation Y liée au scroll                          */
/* ------------------------------------------------------------------ */
export function useTilt(max = 8) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [max, -max]), {
    stiffness: 200,
    damping: 20,
  });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-max, max]), {
    stiffness: 200,
    damping: 20,
  });

  const onMove = (e: React.MouseEvent) => {
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return { rx, ry, onMove, reset };
}

/* ------------------------------------------------------------------ */
/* ImgFrame — image avec fallback "placeholder" monochrome élégant     */
/* (affiche le visuel si présent dans /public, sinon un cadre labellisé)*/
/* ------------------------------------------------------------------ */
export function ImgFrame({
  src,
  alt,
  label,
  className,
}: {
  src: string;
  alt: string;
  label?: string;
  className?: string;
}) {
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Filet de sécurité SSR : si l'image a déjà échoué avant l'hydratation,
  // l'événement onError est manqué — on le détecte au montage.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setError(true);
  }, [src]);

  return (
    <div className={cn("relative overflow-hidden bg-grey-100", className)}>
      {!error ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          onError={() => setError(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="bg-grid flex h-full w-full flex-col items-center justify-center gap-2 text-grey-500">
          <span className="font-display text-[11px] tracking-widest uppercase">
            {label ?? alt}
          </span>
        </div>
      )}
    </div>
  );
}
