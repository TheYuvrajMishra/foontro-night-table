"use client";

import { Reveal, SectionHead, TableCard } from "./ui";

/* Integrations — only what exists: payouts, payment rails, the Android app. */

const rails = [
  {
    name: "UPI",
    desc: "Pay or get paid straight from your UPI ID — the way India already moves money.",
    tag: "IN / OUT",
  },
  {
    name: "Cards",
    desc: "Debit and credit cards on a secure gateway. Checkout shows the exact fee first.",
    tag: "IN",
  },
  {
    name: "Netbanking",
    desc: "Every major Indian bank, same secure gateway, same transparent checkout.",
    tag: "IN",
  },
  {
    name: "Payouts",
    desc: "Freelancer earnings released from escrow on approval — withdrawn to your account.",
    tag: "OUT",
  },
];

export function Money() {
  return (
    <section className="rule-x" aria-label="Payments and the app">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionHead
          eyebrow="Money in, money out"
          title={
            <>
              The table runs on <span className="text-(--primary)">real rails</span>
            </>
          }
          sub="Foontro supports all major Indian payment methods, processed securely through a secure payment gateway. No crypto, no credits, no funny money."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {rails.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.06}>
              <TableCard className="h-full p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-[1.15rem]">{r.name}</h3>
                  <span className="rounded-full border border-(--border) px-2.5 py-1 font-mono text-[10px] tracking-[0.1em] text-(--muted)">
                    {r.tag}
                  </span>
                </div>
                <p className="mt-3 text-[0.93rem] leading-relaxed text-(--muted)">{r.desc}</p>
              </TableCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <TableCard className="mt-6 flex flex-col items-start justify-between gap-6 p-7 lg:flex-row lg:items-center lg:p-9">
            <div className="flex items-center gap-5">
              <div
                aria-hidden="true"
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-(--primary)/15 font-display text-xl text-(--primary)"
              >
                ▷
              </div>
              <div>
                <h3 className="font-display text-[1.3rem]">The table fits in your pocket</h3>
                <p className="mt-1 max-w-[52ch] text-[0.95rem] text-(--muted)">
                  Foontro&apos;s Android app is on the Play Store — orders, chat, deliveries and
                  streak-saving push notifications, wherever you are.
                </p>
              </div>
            </div>
            <a
              href="#top"
              className="shrink-0 rounded-full border border-(--border) px-6 py-3 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors hover:border-(--primary) hover:text-(--primary)"
            >
              Get the app →
            </a>
          </TableCard>
        </Reveal>
      </div>
    </section>
  );
}
