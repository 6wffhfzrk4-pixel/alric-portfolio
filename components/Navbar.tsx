"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { nav, socials, profile } from "@/data/site";
import { cn } from "./shared";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.8, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-[80] transition-all duration-300",
        scrolled
          ? "border-b border-grey-300 bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-3 px-6 py-4 md:px-12">
        {/* Gauche : wordmark */}
        <a
          href="#home"
          data-cursor="link"
          className="font-display text-lg tracking-tight"
        >
          {profile.wordmark}
          <span className="text-ink">.</span>
        </a>

        {/* Centre : liens dans une pilule */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-2">
            {nav.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  data-cursor="link"
                  className="block rounded-full border border-grey-300 bg-paper px-4 py-2 text-[11px] font-medium tracking-widest uppercase text-grey-700 transition-colors hover:border-ink hover:bg-ink hover:text-paper"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Droite : icônes sociales + menu */}
        <div className="flex items-center gap-1.5">
          <div className="hidden items-center gap-1.5 md:flex">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                data-cursor="link"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-grey-300 text-[10px] font-semibold tracking-wider transition-colors hover:bg-ink hover:text-paper"
              >
                {s.short}
              </a>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            data-cursor="link"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-grey-300 transition-colors hover:bg-ink hover:text-paper"
          >
            <div className="space-y-1">
              <span className="block h-px w-4 bg-current" />
              <span className="block h-px w-4 bg-current" />
            </div>
          </button>
        </div>
      </div>

      {/* Menu déroulant */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-2 max-w-[1280px] px-4 md:px-8"
          >
            <div className="rounded-3xl border border-grey-300 bg-paper p-4 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
              <ul className="flex flex-col">
                {nav.map((n) => (
                  <li key={n.href}>
                    <a
                      href={n.href}
                      onClick={() => setOpen(false)}
                      className="font-display block py-2.5 text-2xl uppercase md:text-3xl"
                    >
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex gap-2 border-t border-grey-300 pt-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-grey-300 text-xs"
                  >
                    {s.short}
                  </a>
                ))}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
