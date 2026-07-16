"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/site";

/**
 * Intro cinématique : compteur 0 → 100, le nom se compose,
 * puis un rideau remonte (clip-path) et révèle le hero.
 */
export default function Preloader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDone(true);
      return;
    }

    document.body.style.overflow = "hidden";
    let n = 0;
    const id = setInterval(() => {
      n += Math.floor(Math.random() * 7) + 4;
      if (n >= 100) {
        n = 100;
        clearInterval(id);
        setTimeout(() => setDone(true), 600);
      }
      setCount(n);
    }, 95);

    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (done) document.body.style.overflow = "";
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink text-paper"
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-[12vw] leading-none tracking-tight md:text-[8vw]"
          >
            {profile.name}
          </motion.span>

          <div className="mt-6 h-px w-40 overflow-hidden bg-white/20">
            <motion.div
              className="h-full bg-paper"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: count / 100 }}
              style={{ transformOrigin: "left" }}
              transition={{ ease: "linear" }}
            />
          </div>

          <span className="font-display absolute bottom-8 right-6 text-[18vw] leading-none text-white/10 md:right-12 md:text-[12vw]">
            {count}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
