"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Reveal, SectionHead, TableCard } from "./ui";

type Tab = "freelancers" | "clients";

const TABS: Record<
  Tab,
  { label: string; cards: { title: string; copy: string; stat: string }[] }
> = {
  freelancers: {
    label: "Freelancers",
    cards: [
      {
        title: "Keep more of every order",
        copy: "Basic starts free at a 10% commission. Go Pro at ₹499 and keep 100% of your service price — plus priority ranking and a gold frame.",
        stat: "100% payout on Pro",
      },
      {
        title: "Get discovered, not buried",
        copy: "A verified badge, streak frames and ranking boosts put consistent freelancers in front of clients who are ready to order.",
        stat: "21% get verified",
      },
      {
        title: "Never chase a payment",
        copy: "The client's money is sealed in escrow before you start. Deliver, get approved, get paid — no invoices into the void.",
        stat: "0 payment chase",
      },
    ],
  },
  clients: {
    label: "Clients",
    cards: [
      {
        title: "Hire from the 21%",
        copy: "Every freelancer is manually reviewed by the Foontro team — portfolio, work samples, pricing clarity, intro video. 4 in 5 are turned away.",
        stat: "Human-reviewed",
      },
      {
        title: "Money sealed till approval",
        copy: "Your payment sits in escrow and reaches the freelancer only when you approve the delivery. Disputes get reviewed; valid claims get refunded.",
        stat: "Escrow-protected",
      },
      {
        title: "One thread per project",
        copy: "Browse, order, chat, revise and approve in a single shared thread. Clear deliverables, secure checkout, zero chaos.",
        stat: "4-step flow",
      },
    ],
  },
};

export function Audiences() {
  const [tab, setTab] = useState<Tab>("freelancers");
  const reduce = useReducedMotion();

  return (
    <section className="rule-x" aria-label="Who the table is for">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionHead
          eyebrow="Two sides, one table"
          title={
            <>
              Pick your <span className="text-(--primary)">seat</span>
            </>
          }
          align="center"
        />

        <Reveal delay={0.1}>
          <div
            className="mx-auto mt-10 flex w-fit rounded-full border border-(--border) bg-(--surface) p-1"
            role="tablist"
            aria-label="Audience"
          >
            {(Object.keys(TABS) as Tab[]).map((t) => (
              <button
                key={t}
                role="tab"
                aria-selected={tab === t}
                onClick={() => setTab(t)}
                className={`relative rounded-full px-8 py-3 font-mono text-[12px] uppercase tracking-[0.12em] transition-colors ${
                  tab === t ? "text-[#0c0b09] font-semibold" : "text-(--muted) hover:text-(--foreground)"
                }`}
              >
                {tab === t && (
                  <motion.span
                    layoutId="audience-pill"
                    className="absolute inset-0 rounded-full bg-(--primary)"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{TABS[t].label}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-5 md:grid-cols-3"
              role="tabpanel"
            >
              {TABS[tab].cards.map((c) => (
                <TableCard key={c.title} className="flex flex-col p-7">
                  <p className="tabular font-display text-sm text-(--primary)">{c.stat}</p>
                  <h3 className="mt-3 font-display text-[1.25rem] leading-tight">{c.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-(--muted)">{c.copy}</p>
                </TableCard>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-[0.12em] text-(--muted)/50">
          TODO: third tab (Studios / tenants) pending confirmation of the tenant offering
        </p>
      </div>
    </section>
  );
}
