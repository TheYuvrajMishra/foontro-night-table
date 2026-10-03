"use client";

import { Marquee, Reveal } from "./ui";
import { categories, REAL } from "@/lib/data";

const stats = [
  `${REAL.creators} creators and teams`,
  `${REAL.acceptanceRate} acceptance rate`,
  "Manual human review",
  "Escrow-protected payments",
  "UPI · cards · netbanking",
];

export function ProofStrip() {
  return (
    <section aria-label="Proof" className="rule-x">
      <Reveal>
        <Marquee label="Foontro proof points and categories" fast>
          {[...stats, ...categories.map((c) => c.title)].map((t, i) => (
            <span key={i} className="flex items-center">
              <span className="whitespace-nowrap px-6 font-mono text-[12px] uppercase tracking-[0.14em] text-(--muted)">
                {t}
              </span>
              <span aria-hidden="true" className="text-(--primary)">◆</span>
            </span>
          ))}
        </Marquee>
      </Reveal>
      <p className="mt-2 pb-6 text-center font-mono text-[10px] uppercase tracking-[0.12em] text-(--muted)/50">
        Real numbers from foontro.com — no rented logos
      </p>
    </section>
  );
}
