"use client";

import { motion, useReducedMotion } from "motion/react";
import { SwipeDeck } from "./swipe-deck";
import { DealerButton, Eyebrow, Ticker } from "./ui";
import { REAL } from "@/lib/data";

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="top" className="lamp relative overflow-hidden" aria-label="Hero">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10 lg:pt-20">
        
        <div>
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Eyebrow>
              <span className="text-(--primary)">{"///"}</span> {REAL.tagline}
            </Eyebrow>
          </motion.div>

          <motion.h1
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display mt-5 font-semibold text-[clamp(2.7rem,7vw,5.4rem)] leading-[0.98] tracking-[-0.01em] text-balance"
          >
            5,000+ creators.
            <br />
            <span className="text-(--primary)">21%</span> get{" "}
            <em className="font-sans font-light italic">seated.</em>
          </motion.h1>

          <motion.p
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-[54ch] text-[1.08rem] leading-relaxed text-(--muted)"
          >
            Browse verified services. Order in minutes. Chat, collaborate, and pay only
            when the work is done right — your money sealed in escrow until you approve.
          </motion.p>

          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <DealerButton href="#showcase">Browse services →</DealerButton>
            <DealerButton href="#how" variant="ghost">How the table works</DealerButton>
          </motion.div>

          <motion.dl
            initial={reduce ? { opacity: 0 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-(--border) pt-6"
          >
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-(--muted)">Creators</dt>
              <dd className="tabular font-display mt-1 text-xl"><Ticker value={5000} suffix="+" /></dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-(--muted)">Accepted</dt>
              <dd className="tabular font-display mt-1 text-xl text-(--primary)"><Ticker value={21} suffix="%" /></dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-(--muted)">To browse</dt>
              <dd className="font-display mt-1 text-xl">₹0</dd>
            </div>
          </motion.dl>
        </div>

        
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40, rotate: 1.5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-8 rounded-[2rem] border border-(--border)/60"
          />
          <SwipeDeck />
        </motion.div>
      </div>
    </section>
  );
}
