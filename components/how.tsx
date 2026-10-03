"use client";

import { Reveal, SectionHead, TableCard } from "./ui";
import { realFlow } from "@/lib/data";

function RoundVisual({ n }: { n: string }) {
  if (n === "01")
    return (
      <div className="flex h-full flex-col justify-center gap-3 p-6" aria-hidden="true">
        <div className="flex items-center gap-2 rounded-full border border-(--border) bg-[#0c0b09] px-4 py-2.5">
          <span className="text-(--muted)">⌕</span>
          <span className="font-mono text-xs text-(--muted)">logo designer under ₹2k…</span>
        </div>
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-16 flex-1 rounded-lg border border-(--border) bg-[#0c0b09]" style={{ opacity: 1 - i * 0.25 }} />
          ))}
        </div>
      </div>
    );
  if (n === "02")
    return (
      <div className="flex h-full items-center justify-center p-6" aria-hidden="true">
        <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl border-2 border-(--primary) card-back">
          <span className="tabular font-mono text-xs font-semibold text-(--primary)">₹2.4k</span>
          <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-(--primary)">
            <svg width="12" height="12" viewBox="0 0 16 16"><rect x="3" y="7" width="10" height="7" rx="1.5" fill="#0c0b09"/><path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" stroke="#0c0b09" strokeWidth="1.8" fill="none"/></svg>
          </div>
        </div>
      </div>
    );
  if (n === "03")
    return (
      <div className="flex h-full flex-col justify-center gap-2 p-6" aria-hidden="true">
        <div className="max-w-[80%] rounded-2xl rounded-bl-sm border border-(--border) bg-[#0c0b09] px-4 py-2.5 text-sm">First draft is in ✓✓</div>
        <div className="max-w-[80%] self-end rounded-2xl rounded-br-sm bg-(--primary) px-4 py-2.5 text-sm font-medium text-[#0c0b09]">Love it. One tweak →</div>
        <div className="max-w-[80%] rounded-2xl rounded-bl-sm border border-(--border) bg-[#0c0b09] px-4 py-2.5 text-sm">On it, tonight.</div>
      </div>
    );
  return (
    <div className="flex h-full items-center justify-center p-6" aria-hidden="true">
      <div className="-rotate-6 rounded border-[3px] border-(--primary) px-6 py-2 font-display text-2xl text-(--primary)">
        PAID
      </div>
    </div>
  );
}

export function How() {
  return (
    <section id="how" className="rule-x" aria-label="How it works">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionHead
          eyebrow="Four rounds, one table"
          title={
            <>
              How the <span className="text-(--primary)">game</span> is played
            </>
          }
          sub="The official flow from foontro.com — exact words, no improvisation."
        />

        <ol className="mt-14 flex flex-col gap-5">
          {realFlow.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06}>
              <li>
                <TableCard className="grid overflow-hidden md:grid-cols-[1fr_320px]">
                  <div className="flex gap-6 p-7 lg:p-9">
                    <span className="tabular font-display text-4xl text-(--primary)/90 lg:text-5xl">
                      {s.n}
                    </span>
                    <div>
                      <h3 className="font-display text-[1.5rem]">{s.title}</h3>
                      <p className="mt-2 max-w-[52ch] leading-relaxed text-(--muted)">{s.copy}</p>
                      <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                        {s.points.map((p) => (
                          <li key={p} className="flex items-center gap-2 text-sm text-(--foreground)/85">
                            <span aria-hidden="true" className="text-(--primary)">✓</span> {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="border-t border-(--border) md:border-l md:border-t-0">
                    <RoundVisual n={s.n} />
                  </div>
                </TableCard>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
