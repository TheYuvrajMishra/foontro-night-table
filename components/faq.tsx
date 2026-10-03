"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Reveal, SectionHead } from "./ui";
import { faqs } from "@/lib/data";

function Item({ q, a, open, onToggle, index }: { q: string; a: string; open: boolean; onToggle: () => void; index: number }) {
  const reduce = useReducedMotion();
  return (
    <div className="border-b border-(--border)">
      <button
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`faq-panel-${index}`}
        id={`faq-button-${index}`}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="flex items-baseline gap-4">
          <span className="tabular font-mono text-[11px] text-(--primary)">{String(index + 1).padStart(2, "0")}</span>
          <span className="font-display text-[1.1rem] lg:text-[1.25rem]">{q}</span>
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          aria-hidden="true"
          className="shrink-0 font-display text-2xl text-(--primary)"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-panel-${index}`}
            role="region"
            aria-labelledby={`faq-button-${index}`}
            initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-[70ch] pb-7 pl-9 pr-4 leading-relaxed text-(--muted)">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="rule-x" aria-label="Frequently asked questions">
      <div className="mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionHead
          eyebrow="Fine print, big type"
          title={
            <>
              Asked at <span className="text-(--primary)">every table</span>
            </>
          }
          sub="Straight from foontro.com's FAQ — exact answers, no paraphrasing."
        />
        <Reveal delay={0.1}>
          <div className="mt-10 border-t border-(--border)">
            {faqs.map((f, i) => (
              <Item
                key={f.q}
                index={i}
                q={f.q}
                a={f.a}
                open={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
