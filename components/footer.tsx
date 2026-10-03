"use client";

import { motion, useReducedMotion } from "motion/react";
import { Reveal, DealerButton, Eyebrow } from "./ui";
import { categories, footerCols, REAL } from "@/lib/data";

export function Footer() {
  const reduce = useReducedMotion();
  return (
    <footer className="rule-x relative overflow-hidden" aria-label="Footer">
      <div className="mx-auto max-w-7xl px-6 pt-24 lg:px-10">
        {/* closing CTA */}
        <div className="text-center">
          <Reveal>
            <Eyebrow className="text-center">Last call</Eyebrow>
            <h2 className="font-display mx-auto mt-5 max-w-[18ch] text-[clamp(2rem,5.5vw,4.2rem)] leading-[1.02] text-balance">
              {REAL.finalCta}
            </h2>
            <p className="mx-auto mt-4 max-w-[56ch] leading-relaxed text-(--muted)">{REAL.finalCtaSub}</p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <DealerButton href="#showcase">Take your seat →</DealerButton>
              <DealerButton href="#how" variant="ghost">How it works</DealerButton>
            </div>
          </Reveal>
        </div>

        {/* link columns */}
        <nav aria-label="Footer" className="mt-20 grid gap-10 border-t border-(--border) pt-12 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-(--primary)">Categories</p>
            <ul className="mt-4 grid grid-cols-1 gap-2.5">
              {categories.map((c) => (
                <li key={c.slug}>
                  <a href="#showcase" className="text-sm text-(--muted) transition-colors hover:text-(--foreground)">
                    {c.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {footerCols.slice(0, 3).map((col) => (
            <div key={col.title}>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-(--primary)">{col.title}</p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#top" className="text-sm text-(--muted) transition-colors hover:text-(--foreground)">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-(--border) py-8 font-mono text-[11px] uppercase tracking-[0.12em] text-(--muted)/70 md:flex-row">
          <p>© 2026 Foontro · Concept redesign</p>
          <p>Made at the night table · Kolkata, India</p>
        </div>
      </div>

      {/* ghost wordmark */}
      <div aria-hidden="true" className="pointer-events-none relative select-none overflow-hidden">
        <motion.p
          initial={reduce ? { opacity: 0 } : { y: "38%", opacity: 0 }}
          whileInView={{ y: "22%", opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-ghost font-display whitespace-nowrap text-center text-[clamp(4rem,17.5vw,17rem)] leading-[0.85] tracking-tight"
        >
          FOONTRO
        </motion.p>
      </div>
    </footer>
  );
}
