"use client";

import { motion, useReducedMotion } from "motion/react";
import { Reveal, SectionHead, TableCard, Ticker, Eyebrow } from "./ui";
import { REAL } from "@/lib/data";

/* Streak calendar micro-UI — demo counts, clearly marked. */
function StreakCalendar() {
  const reduce = useReducedMotion();
  const days = Array.from({ length: 30 }, (_, i) => i < 23);
  return (
    <div aria-label="Demo 30-day streak calendar: 23 days logged">
      <div className="grid grid-cols-10 gap-1.5">
        {days.map((on, i) => (
          <motion.div
            key={i}
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.02, duration: 0.25 }}
            className={`aspect-square rounded-[4px] ${on ? "bg-(--primary)" : "bg-(--foreground)/8"}`}
          />
        ))}
      </div>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-(--muted)/60">
        Demo calendar — your real streak lives in the app
      </p>
    </div>
  );
}

const benefits = [
  {
    title: "Frames you earn, not buy",
    copy: "Metallic profile frames in gold, silver and bronze — unlocked by showing up, never purchased.",
  },
  {
    title: "Ranked higher",
    copy: "Streaks boost your search visibility. Consistency is the algorithm.",
  },
  {
    title: "Never break the chain",
    copy: "The Play Store app pings you with push notifications, so one tap keeps the streak alive.",
  },
  {
    title: "Compounding proof",
    copy: "Every logged day is public proof you're reliable — clients read streaks like reviews.",
  },
];

export function Streaks() {
  return (
    <section id="streaks" className="rule-x relative overflow-hidden" aria-label="Login streaks">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 20%, color-mix(in srgb, #c9a227 8%, transparent), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHead
              eyebrow="The regulars' table"
              title={
                <>
                  Show up. <span className="text-(--foil)">Shine.</span>
                </>
              }
              sub={REAL.streakNote + ". Streaks turn daily check-ins into metallic tier frames — shine you earn at the table."}
            />
            <Reveal delay={0.15}>
              <div className="mt-8 flex items-end gap-4">
                <p className="tabular font-display text-[4.5rem] leading-none text-(--foil)">
                  <Ticker value={23} />
                </p>
                <p className="pb-2 font-mono text-[11px] uppercase tracking-[0.14em] text-(--muted)">
                  day streak
                  <br />
                  <span className="text-(--muted)/60">demo count</span>
                </p>
              </div>
              <div className="mt-6 max-w-sm">
                <StreakCalendar />
              </div>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.07}>
                <TableCard className="h-full p-6">
                  <Eyebrow className="text-(--foil)">0{i + 1}</Eyebrow>
                  <h3 className="mt-3 font-semibold text-[1.02rem]">{b.title}</h3>
                  <p className="mt-2 text-[0.93rem] leading-relaxed text-(--muted)">{b.copy}</p>
                </TableCard>
              </Reveal>
            ))}
          </div>
        </div>
        <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.12em] text-(--muted)/50">
          TODO: confirm tier thresholds &amp; frame names with the Foontro team before launch
        </p>
      </div>
    </section>
  );
}
