"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { REAL } from "@/lib/data";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* announcement pill strip */}
      <div className="relative z-40 flex justify-center px-4 pt-4">
        <a
          href="#streaks"
          className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--surface)/80 py-1.5 pl-2 pr-4 font-mono text-[10px] uppercase tracking-[0.12em] text-(--muted) backdrop-blur transition-colors hover:border-(--primary) hover:text-(--foreground)"
        >
          <span className="rounded-full bg-(--primary) px-2 py-0.5 font-semibold text-[#0c0b09]">New</span>
          {REAL.streakNote}
          <span aria-hidden="true">→</span>
        </a>
      </div>

      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`sticky top-0 z-40 mt-3 transition-all ${scrolled ? "backdrop-blur-md" : ""}`}
        style={scrolled ? { background: "color-mix(in srgb, #0c0b09 82%, transparent)" } : undefined}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10"
        >
          <a href="#top" className="font-display text-lg tracking-tight" aria-label="Foontro home">
            FOONTRO<span className="text-(--primary)">.</span>
          </a>
          <div className="hidden items-center gap-8 font-mono text-[11px] uppercase tracking-[0.14em] text-(--muted) md:flex">
            <a href="#how" className="transition-colors hover:text-(--foreground)">How it works</a>
            <a href="#fixed" className="transition-colors hover:text-(--foreground)">Why Foontro</a>
            <a href="#pricing" className="transition-colors hover:text-(--foreground)">Pricing</a>
            <a href="#faq" className="transition-colors hover:text-(--foreground)">FAQ</a>
          </div>
          <a
            href="#showcase"
            className="rounded-full bg-(--primary) px-5 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0c0b09] transition-transform hover:scale-[1.03]"
          >
            Browse services
          </a>
        </nav>
      </motion.header>
    </>
  );
}
