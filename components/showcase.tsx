"use client";

import { Reveal, SectionHead, TableCard } from "./ui";
import { Avatar } from "./avatar";
import { trendingServices } from "@/lib/data";

export function Showcase() {
  return (
    <section id="showcase" className="rule-x" aria-label="Trending services">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <SectionHead
          eyebrow="On the table right now"
          title={
            <>
              Tonight&apos;s <span className="text-(--primary)">trending</span> hands
            </>
          }
          sub="Real public listings from foontro.com — names, taglines and prices exactly as listed. Avatars are illustrated placeholders."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {trendingServices.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.08}>
              <TableCard className="flex h-full flex-col p-6 transition-transform hover:-translate-y-1.5">
                <div className="flex items-start justify-between">
                  <Avatar seed={s.name.length * 31 + i * 17} size={52} label={`Illustrated avatar for ${s.name}`} />
                  <span className="rounded-full bg-(--primary)/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-(--primary)">
                    {s.badge}
                  </span>
                </div>
                <h3 className="mt-4 font-semibold text-[1.1rem]">{s.name}</h3>
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-(--muted)">“{s.tagline}”</p>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-(--muted)/70">
                  {s.meta}
                </p>
                <div className="mt-auto flex items-center justify-between pt-6">
                  <p className="tabular font-display text-2xl text-(--primary)">{s.price}</p>
                  <a
                    href="#pricing"
                    className="rounded-full border border-(--border) px-4 py-2 font-mono text-[11px] uppercase tracking-[0.1em] transition-colors hover:border-(--primary) hover:text-(--primary)"
                  >
                    Order →
                  </a>
                </div>
              </TableCard>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-[0.12em] text-(--muted)/50">
          TODO: outcome metrics per gig — publish only verified delivery stats
        </p>
      </div>
    </section>
  );
}
