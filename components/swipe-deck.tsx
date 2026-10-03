"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  useReducedMotion,
  animate,
} from "motion/react";
import { Avatar } from "./avatar";
import { Eyebrow } from "./ui";
import {
  deckFreelancers,
  deckGigs,
  type DeckFreelancer,
  type DeckGig,
} from "@/lib/data";

type Mode = "hire" | "get-hired";

const TIER_LABEL: Record<string, string> = {
  gold: "GOLD FRAME",
  silver: "SILVER FRAME",
  bronze: "BRONZE FRAME",
};

function tierClass(tier: DeckFreelancer["tier"]) {
  if (tier === "gold") return "foil-frame";
  if (tier === "silver") return "border border-[#c0c5ce]";
  if (tier === "bronze") return "border border-[#b0793f]";
  return "border border-(--border)";
}

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-label="Verified freelancer">
      <circle cx="7" cy="7" r="7" fill="#f36938" />
      <path d="M4 7.2 6.2 9.4 10 4.8" stroke="#0c0b09" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function FreelancerCard({ f }: { f: DeckFreelancer }) {
  return (
    <div className={`flex h-full flex-col rounded-[1.4rem] bg-(--surface) p-6 ${tierClass(f.tier)}`}>
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <Avatar seed={f.seed} size={54} label={`Illustrated avatar for ${f.name}`} />
          <div>
            <p className="flex items-center gap-1.5 font-semibold">
              {f.name} <Check />
            </p>
            <p className="text-sm text-(--muted)">{f.role}</p>
          </div>
        </div>
        {f.tier && (
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-(--foil)">
            {TIER_LABEL[f.tier]}
          </span>
        )}
      </div>

      <p className="mt-5 font-display text-[1.05rem] leading-snug">“{f.line}”</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {f.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-(--border) px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-(--muted)"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-auto grid grid-cols-3 gap-2 pt-6">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-(--muted)">Rate</p>
          <p className="tabular mt-1 font-semibold">{f.rate}</p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-(--muted)">Rating</p>
          <p className="tabular mt-1 font-semibold">★ {f.rating}</p>
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-(--muted)">Streak</p>
          <p className="tabular mt-1 font-semibold text-(--primary)">▲ {f.streak}d</p>
        </div>
      </div>
      <p className="tabular mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-(--muted)">
        {f.orders} orders delivered
      </p>
    </div>
  );
}

function GigCard({ g }: { g: DeckGig }) {
  return (
    <div className="flex h-full flex-col rounded-[1.4rem] border border-(--border) bg-(--surface) p-6">
      <div className="flex items-start justify-between gap-3">
        <span className="rounded-full bg-(--primary)/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-(--primary)">
          {g.category}
        </span>
        <Avatar seed={g.seed} size={40} label="Illustrated client avatar" />
      </div>
      <h3 className="font-display mt-5 text-[1.35rem] leading-tight">{g.title}</h3>
      <p className="mt-2 text-sm text-(--muted)">“{g.line}”</p>
      <div className="mt-auto pt-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-(--muted)">Budget</p>
        <p className="tabular font-display mt-1 text-[1.9rem] text-(--primary)">{g.budget}</p>
        <p className="mt-3 text-sm text-(--muted)">
          {g.client} · <span className="tabular">deliver in {g.delivery}</span>
        </p>
      </div>
    </div>
  );
}

export function SwipeDeck() {
  const [mode, setMode] = useState<Mode>("hire");
  const [index, setIndex] = useState(0);
  const [shortlisted, setShortlisted] = useState<string[]>([]);
  const [leaving, setLeaving] = useState<0 | 1 | -1>(0);
  const reduce = useReducedMotion();
  const inViewRef = useRef(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const rotate = useTransform(x, [-320, 320], [-14, 14]);
  const skipOp = useTransform(x, [-170, -60], [1, 0]);
  const shortOp = useTransform(x, [60, 170], [0, 1]);

  const deck = mode === "hire" ? deckFreelancers : deckGigs;
  const total = deck.length;
  const done = index >= total;
  const top = !done ? deck[index] : null;

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => (inViewRef.current = e.isIntersecting), {
      threshold: 0.3,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const deal = useCallback(
    (dir: 1 | -1) => {
      if (leaving || done) return;
      const card = deck[index];
      if (dir === 1) {
        const label = mode === "hire" ? (card as DeckFreelancer).name : (card as DeckGig).title;
        setShortlisted((s) => [...s, label]);
      }
      if (reduce) {
        setIndex((i) => i + 1);
        x.set(0);
        return;
      }
      setLeaving(dir);
      animate(x, dir * 560, { duration: 0.32, ease: [0.16, 1, 0.3, 1] }).then(() => {
        setIndex((i) => i + 1);
        x.set(0);
        setLeaving(0);
      });
    },
    [deck, done, index, leaving, mode, reduce, x]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!inViewRef.current || leaving || done) return;
      if (e.key === "ArrowRight") deal(1);
      if (e.key === "ArrowLeft") deal(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [deal, leaving, done]);

  const switchMode = (m: Mode) => {
    setMode(m);
    setIndex(0);
    setShortlisted([]);
    setLeaving(0);
    x.set(0);
  };

  const reset = () => {
    setIndex(0);
    setShortlisted([]);
    setLeaving(0);
    x.set(0);
  };

  const cardLabel = (c: DeckFreelancer | DeckGig) =>
    mode === "hire" ? (c as DeckFreelancer).name : (c as DeckGig).title;

  return (
    <div ref={wrapRef} className="w-full">
      {/* role toggle */}
      <div
        className="mb-5 inline-flex rounded-full border border-(--border) bg-(--surface) p-1"
        role="tablist"
        aria-label="Choose your side of the table"
      >
        {(["hire", "get-hired"] as Mode[]).map((m) => (
          <button
            key={m}
            role="tab"
            aria-selected={mode === m}
            onClick={() => switchMode(m)}
            className={`rounded-full px-5 py-2 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors ${
              mode === m ? "bg-(--primary) text-[#0c0b09] font-semibold" : "text-(--muted) hover:text-(--foreground)"
            }`}
          >
            {m === "hire" ? "Hire talent" : "Get hired"}
          </button>
        ))}
      </div>

      {/* the table */}
      <div className="relative mx-auto h-[480px] w-full max-w-[360px] select-none" style={{ touchAction: "pan-y" }}>
        <AnimatePresence>
          {!done && top && (
            <motion.div
              key={`${mode}-${index}`}
              drag={reduce ? false : "x"}
              style={reduce ? undefined : { x, rotate }}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.75}
              onDragEnd={(_, info) => {
                if (info.offset.x > 120) deal(1);
                else if (info.offset.x < -120) deal(-1);
                else if (!reduce) animate(x, 0, { type: "spring", stiffness: 400, damping: 28 });
              }}
              className="absolute inset-0 cursor-grab active:cursor-grabbing"
              aria-label={`${mode === "hire" ? "Freelancer" : "Gig"} card ${index + 1} of ${total}: ${cardLabel(top)}. Drag or use arrow keys.`}
            >
              {mode === "hire" ? (
                <FreelancerCard f={top as DeckFreelancer} />
              ) : (
                <GigCard g={top as DeckGig} />
              )}

              {/* SKIP / SHORTLIST stamps */}
              <motion.div
                style={{ opacity: skipOp }}
                className="pointer-events-none absolute left-4 top-6 -rotate-12 rounded-lg border-[3px] border-[#ff5d5d] px-3 py-1 font-display text-lg text-[#ff5d5d]"
                aria-hidden="true"
              >
                SKIP
              </motion.div>
              <motion.div
                style={{ opacity: shortOp }}
                className="pointer-events-none absolute right-4 top-6 rotate-12 rounded-lg border-[3px] border-(--primary) px-3 py-1 font-display text-lg text-(--primary)"
                aria-hidden="true"
              >
                {mode === "hire" ? "SHORTLIST" : "APPLY"}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* peek stack */}
        {!done &&
          [2, 1].map((d) => {
            const c = deck[index + d];
            if (!c) return null;
            return (
              <div
                key={`${mode}-peek-${index + d}`}
                aria-hidden="true"
                className="absolute inset-0 rounded-[1.4rem] border border-(--border) bg-(--surface)"
                style={{
                  transform: `translateY(${d * 12}px) scale(${1 - d * 0.045})`,
                  opacity: 1 - d * 0.25,
                  zIndex: -d,
                }}
              >
                <div className="card-back flex h-full items-center justify-center rounded-[1.4rem]">
                  <span className="font-display text-2xl text-(--foreground)/25">F</span>
                </div>
              </div>
            );
          })}

        {/* done state */}
        {done && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center rounded-[1.4rem] border border-(--border) bg-(--surface) p-8 text-center"
          >
            <Eyebrow>Table cleared</Eyebrow>
            <p className="font-display mt-4 text-3xl">
              You shortlisted <span className="text-(--primary)">{shortlisted.length}</span> of {total}
            </p>
            <p className="mt-3 text-sm text-(--muted)">
              On the real table, every shortlist opens a chat — and money moves only when you approve.
            </p>
            <button
              onClick={reset}
              className="mt-6 rounded-full bg-(--primary) px-6 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#0c0b09]"
            >
              Deal again
            </button>
          </motion.div>
        )}
      </div>

      {/* controls */}
      {!done && (
        <div className="mt-5 flex items-center justify-center gap-4">
          <button
            onClick={() => deal(-1)}
            aria-label="Skip this card"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-(--border) text-xl text-(--muted) transition-colors hover:border-[#ff5d5d] hover:text-[#ff5d5d]"
          >
            ✕
          </button>
          <p className="tabular font-mono text-[11px] uppercase tracking-[0.14em] text-(--muted)">
            {index + 1} / {total}
          </p>
          <button
            onClick={() => deal(1)}
            aria-label={mode === "hire" ? "Shortlist this freelancer" : "Apply to this gig"}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-(--primary) text-xl text-[#0c0b09] transition-transform hover:scale-105"
          >
            ♥
          </button>
        </div>
      )}
      <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.12em] text-(--muted)/70">
        ← drag · arrow keys · buttons →
      </p>

      {/* shortlist tray */}
      <div className="mt-5 min-h-[44px] rounded-(--radius) border border-dashed border-(--border) p-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-(--muted)">
          Your tray · <span className="tabular text-(--primary)">{shortlisted.length}</span> shortlisted
        </p>
        {shortlisted.length > 0 ? (
          <div className="mt-2 flex flex-wrap gap-2">
            {shortlisted.map((s) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-full bg-(--primary)/15 px-3 py-1 text-xs text-(--primary)"
              >
                {s}
              </motion.span>
            ))}
          </div>
        ) : (
          <p className="mt-1 text-xs text-(--muted)/60">Swipe right on the ones you want. They land here.</p>
        )}
      </div>

      <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.1em] text-(--muted)/50">
        Seeded demo deck — fictional people &amp; gigs. The real table seats {`21%`} of applicants.
      </p>
    </div>
  );
}
