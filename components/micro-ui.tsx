"use client";

import { motion, useReducedMotion } from "motion/react";
import { Reveal, SectionHead, TableCard } from "./ui";

/* Four micro-UIs. All demo data, labeled. */

function LedgerMini() {
  const rows = [
    { id: "#F-2049", state: "Sealed in escrow", amt: "₹2,400", tone: "text-(--primary)" },
    { id: "#F-2048", state: "Released on approval", amt: "₹6,000", tone: "text-(--foil)" },
    { id: "#F-2047", state: "Paid to freelancer", amt: "₹1,200", tone: "text-(--foreground)" },
  ];
  return (
    <div className="flex flex-col gap-2 font-mono text-[11px]">
      {rows.map((r, i) => (
        <motion.div
          key={r.id}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.4 }}
          className="flex items-center justify-between rounded-lg border border-(--border) bg-[#0c0b09] px-3 py-2.5"
        >
          <span className="text-(--muted)">{r.id}</span>
          <span className={r.tone}>{r.state}</span>
          <span className="tabular">{r.amt}</span>
        </motion.div>
      ))}
    </div>
  );
}

function StreakMini() {
  const reduce = useReducedMotion();
  const week = [true, true, true, true, true, true, false];
  return (
    <div className="flex items-center gap-4">
      <p className="font-display text-4xl text-(--foil)">▲6</p>
      <div className="flex gap-1.5">
        {week.map((on, i) => (
          <motion.div
            key={i}
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`h-8 w-8 rounded-md ${on ? "bg-(--foil)/80" : "border border-dashed border-(--border)"}`}
            aria-label={on ? `Day ${i + 1} logged` : `Day ${i + 1} pending`}
          />
        ))}
      </div>
    </div>
  );
}

function PushMini() {
  const notes = [
    { t: "Order delivered", s: "Review Shubhi's draft →", time: "2m" },
    { t: "Streak alive", s: "Day 24 — one tap to keep it", time: "1h" },
  ];
  return (
    <div className="flex flex-col gap-2">
      {notes.map((n, i) => (
        <motion.div
          key={n.t}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.18, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-xl border border-(--border) bg-[#0c0b09] p-3.5"
        >
          <div className="flex items-center justify-between">
            <p className="text-[13px] font-semibold">{n.t}</p>
            <span className="font-mono text-[10px] text-(--muted)">{n.time}</span>
          </div>
          <p className="mt-0.5 text-xs text-(--muted)">{n.s}</p>
        </motion.div>
      ))}
    </div>
  );
}

function DashMini() {
  const reduce = useReducedMotion();
  const bars = [34, 58, 44, 72, 60, 88, 76];
  return (
    <div className="flex h-28 items-end gap-2" aria-label="Demo earnings chart">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: reduce ? `${h}%` : "8%" }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`flex-1 rounded-t ${i === 5 ? "bg-(--primary)" : "bg-(--foreground)/15"}`}
        />
      ))}
    </div>
  );
}

const cards = [
  { title: "Payout ledger", copy: "Every rupee's journey — sealed, released, paid.", el: <LedgerMini /> },
  { title: "Streak tracker", copy: "Your chain, at a glance, in the app.", el: <StreakMini /> },
  { title: "Push notifications", copy: "Deliveries, approvals and streak saves.", el: <PushMini /> },
  { title: "Earnings dashboard", copy: "Orders, payouts and momentum, visualized.", el: <DashMini /> },
];

export function MicroUi() {
  return (
    <section className="rule-x" aria-label="More from the table">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionHead
          eyebrow="Around the table"
          title={
            <>
              Small cards, <span className="text-(--primary)">sharp edges</span>
            </>
          }
          sub="The quiet machinery that keeps the table honest. Demo visuals — the real ones live in your account."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <TableCard className="flex h-full min-h-[280px] flex-col p-5">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.14em]">{c.title}</h3>
                <p className="mb-4 mt-1.5 text-[13px] text-(--muted)">{c.copy}</p>
                <div className="mt-auto">{c.el}</div>
              </TableCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
