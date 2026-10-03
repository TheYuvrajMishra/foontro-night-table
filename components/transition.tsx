"use client";

import { Reveal, SplitWords } from "./ui";

export function Transition() {
  return (
    <section className="rule-x" aria-label="The escrow promise">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <Reveal>
          <h2 className="font-display max-w-[16ch] text-[clamp(2.2rem,6vw,4.8rem)] leading-[1.0] text-balance">
            <SplitWords text="Stop paying" />{" "}
            <span className="text-(--primary)">
              <SplitWords text="and hoping." />
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <blockquote className="mt-8 max-w-[62ch] border-l-2 border-(--primary) pl-6 text-[1.15rem] leading-relaxed text-(--foreground)">
            “As a client, your money is held safely and only released when you approve
            the delivery — <em>you never pay and hope.</em>”
            <footer className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-(--muted)">
              — Foontro&apos;s escrow promise, foontro.com
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
