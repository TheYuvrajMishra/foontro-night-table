"use client";

import { Reveal, SectionHead, TableCard } from "./ui";
import { pricing } from "@/lib/data";

export function Pricing() {
  return (
    <section id="pricing" className="rule-x" aria-label="Pricing">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionHead
          eyebrow="The rake"
          title={
            <>
              Simple money. <span className="text-(--primary)">No surprises.</span>
            </>
          }
          sub="Real plans from foontro.com, in rupees. No monthly/yearly toggle games — freelancers pick a lane, clients just pay for orders."
          align="center"
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          {pricing.freelancerPlans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <TableCard
                glow={p.name === "Foontro Pro"}
                className={`flex h-full flex-col p-8 ${p.name === "Foontro Pro" ? "border-(--primary)/60" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-[1.35rem]">{p.name}</h3>
                  <span
                    className={`rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] ${
                      p.name === "Foontro Pro"
                        ? "bg-(--primary) font-semibold text-[#0c0b09]"
                        : "border border-(--border) text-(--muted)"
                    }`}
                  >
                    {p.tag}
                  </span>
                </div>
                <p className="tabular font-display mt-4 text-[2.6rem] leading-none">
                  {p.price}
                  {p.price !== "Free" && (
                    <span className="font-sans text-base font-normal text-(--muted)"> / 30 days</span>
                  )}
                </p>
                <ul className="mt-6 flex flex-col gap-3">
                  {p.rows.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-[0.95rem] text-(--foreground)/90">
                      <span aria-hidden="true" className="mt-0.5 text-(--primary)">✓</span> {r}
                    </li>
                  ))}
                </ul>
                {p.footnote && (
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.1em] text-(--muted)/70">
                    {p.footnote}
                  </p>
                )}
                <a
                  href="#top"
                  className={`mt-8 rounded-full py-3.5 text-center font-mono text-[12px] font-semibold uppercase tracking-[0.12em] transition-transform hover:scale-[1.02] ${
                    p.name === "Foontro Pro"
                      ? "bg-(--primary) text-[#0c0b09]"
                      : "border border-(--border) text-(--foreground) hover:border-(--primary)"
                  }`}
                >
                  {p.name === "Foontro Pro" ? "Go Pro →" : "Start free →"}
                </a>
              </TableCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <div className="mx-auto mt-8 max-w-4xl rounded-(--radius) border border-(--border) bg-(--surface) p-6 lg:p-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-(--primary)">
              For clients
            </p>
            <p className="mt-2 leading-relaxed text-(--muted)">{pricing.clientNote}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
