"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Reveal, SectionHead, TableCard } from "./ui";
import { valueProps } from "@/lib/data";

/* The sealed pot: a playable escrow demo.
   Stage 0: chip with you → 1: chip sealed in the pot → 2: work delivered →
   3: you approve → seal breaks → chip slides to the freelancer. */

const STAGES = [
  { label: "Place order", hint: "₹2,400 leaves your hand — not your pocket." },
  { label: "Money sealed", hint: "Locked in Foontro's escrow. Nobody can touch it." },
  { label: "Work delivered", hint: "The freelancer delivers through the platform." },
  { label: "You approve", hint: "Seal breaks. Payment releases. Nobody gets cheated." },
];

function Chip({ stage }: { stage: number }) {
  // chip x: 0 = with you (left), 1 = in pot (center), 3 = with freelancer (right)
  const x = stage === 0 ? -110 : stage <= 2 ? 0 : 110;
  return (
    <motion.div
      animate={{ x }}
      transition={{ type: "spring", stiffness: 220, damping: 24 }}
      className="absolute left-1/2 top-1/2 z-10 -ml-9 -mt-9 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border-2 border-dashed border-(--primary) bg-[#0c0b09]"
      aria-hidden="true"
    >
      <span className="tabular font-mono text-[11px] font-semibold text-(--primary)">₹2.4k</span>
    </motion.div>
  );
}

export function Fixed() {
  const [stage, setStage] = useState(0);
  const reduce = useReducedMotion();
  const sealed = stage >= 1 && stage <= 2;

  return (
    <section id="fixed" className="rule-x" aria-label="Why Foontro">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionHead
          eyebrow="The house rules"
          title={<>{valueProps.headline}</>}
          sub={valueProps.sub}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* checklist */}
          <div className="flex flex-col gap-4">
            {valueProps.cards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.07}>
                <TableCard className="flex gap-4 p-6">
                  <span className="tabular font-display text-lg text-(--primary)">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold text-[1.05rem]">{c.title}</h3>
                    <p className="mt-1.5 text-[0.95rem] leading-relaxed text-(--muted)">{c.copy}</p>
                  </div>
                </TableCard>
              </Reveal>
            ))}
          </div>

          {/* sealed pot demo */}
          <Reveal delay={0.1}>
            <TableCard glow className="flex h-full flex-col p-6 lg:p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-(--muted)">
                Try it — the sealed pot
              </p>
              <p className="mt-2 text-sm text-(--muted)">
                The escrow mechanic, playable. Advance the deal and watch the money move.
              </p>

              <div className="relative mt-6 flex-1 rounded-(--radius) border border-(--border) bg-[#0c0b09] p-6">
                <div className="flex justify-between font-mono text-[10px] uppercase tracking-[0.12em] text-(--muted)">
                  <span>You</span>
                  <span>Escrow pot</span>
                  <span>Freelancer</span>
                </div>

                <div className="relative mt-8 h-36">
                  {/* the pot */}
                  <div
                    className={`absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-2xl border-2 transition-colors ${
                      sealed ? "border-(--primary)" : "border-(--border)"
                    } ${sealed ? "card-back" : "bg-(--surface)"}`}
                  />
                  {/* the seal */}
                  <AnimatePresence>
                    {sealed && (
                      <motion.div
                        initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.4, rotate: -30 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.6 }}
                        className="absolute left-1/2 top-1/2 z-20 -ml-5 -mt-5 flex h-10 w-10 items-center justify-center rounded-full bg-(--primary)"
                        aria-label="Sealed"
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                          <rect x="3" y="7" width="10" height="7" rx="1.5" fill="#0c0b09" />
                          <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" stroke="#0c0b09" strokeWidth="1.8" fill="none" />
                        </svg>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  {stage === 3 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
                      animate={{ opacity: 1, scale: 1, rotate: -8 }}
                      className="absolute bottom-2 right-2 rounded border-[2.5px] border-(--primary) px-2 py-0.5 font-display text-sm text-(--primary)"
                    >
                      PAID
                    </motion.div>
                  )}
                  <Chip stage={stage} />
                </div>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={stage}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="mt-4 min-h-[2.5rem] text-center text-sm text-(--muted)"
                  >
                    <span className="tabular mr-2 font-mono text-[11px] text-(--primary)">
                      {stage + 1}/4
                    </span>
                    {STAGES[stage].hint}
                  </motion.p>
                </AnimatePresence>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {STAGES.map((s, i) => (
                  <button
                    key={s.label}
                    onClick={() => setStage(i)}
                    aria-pressed={stage === i}
                    className={`rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.1em] transition-colors ${
                      stage === i
                        ? "bg-(--primary) font-semibold text-[#0c0b09]"
                        : "border border-(--border) text-(--muted) hover:border-(--primary) hover:text-(--foreground)"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </TableCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
