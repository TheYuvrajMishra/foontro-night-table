"use client";

import { useEffect, useRef, type ReactNode } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  animate,
} from "motion/react";
import Lenis from "lenis";

/* ---------------- Lenis smooth scroll ---------------- */
export function LenisRoot({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, [reduce]);
  return <>{children}</>;
}

/* ---------------- Scroll reveal ---------------- */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- Mono eyebrow ---------------- */
export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={`font-mono text-[11px] uppercase tracking-[0.14em] text-(--muted) ${className}`}
    >
      {children}
    </p>
  );
}

/* ---------------- Section heading ---------------- */
export function SectionHead({
  eyebrow,
  title,
  sub,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "text-center" : ""}>
      <Reveal>
        <Eyebrow className={centered ? "text-center" : ""}>
          <span className="text-(--primary)">{"///"}</span> {eyebrow}
        </Eyebrow>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display mt-4 text-[clamp(1.9rem,4.5vw,3.6rem)] leading-[1.02] tracking-[-0.01em] text-balance">
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.14}>
          <p className={`mt-4 max-w-[62ch] text-[1.05rem] leading-relaxed text-(--muted) ${centered ? "mx-auto" : ""}`}>
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ---------------- Marquee ---------------- */
export function Marquee({
  children,
  fast = false,
  className = "",
  label,
}: {
  children: ReactNode;
  fast?: boolean;
  className?: string;
  label: string;
}) {
  const reduce = useReducedMotion();
  return (
    <div className={`overflow-hidden ${className}`} role="marquee" aria-label={label}>
      <div
        className={`flex w-max items-center gap-0 ${reduce ? "" : fast ? "animate-marquee-fast" : "animate-marquee"}`}
      >
        <div className="flex items-center">{children}</div>
        <div className="flex items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

/* ---------------- Number ticker ---------------- */
export function Ticker({
  value,
  prefix = "",
  suffix = "",
  className = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  useEffect(() => {
    if (!inView || !ref.current) return;
    if (reduce) {
      ref.current.textContent = `${prefix}${value.toLocaleString("en-IN")}${suffix}`;
      return;
    }
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (ref.current)
          ref.current.textContent = `${prefix}${Math.round(v).toLocaleString("en-IN")}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, value, prefix, suffix, reduce]);
  return (
    <span ref={ref} className={`tabular ${className}`}>
      {prefix}0{suffix}
    </span>
  );
}

/* ---------------- Dealer button ---------------- */
export function DealerButton({
  children,
  href = "#",
  variant = "primary",
  className = "",
}: {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 22 });
  const sy = useSpring(y, { stiffness: 300, damping: 22 });
  return (
    <motion.a
      href={href}
      style={reduce ? undefined : { x: sx, y: sy }}
      onMouseMove={(e) => {
        if (reduce) return;
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * 0.25);
        y.set((e.clientY - (r.top + r.height / 2)) * 0.25);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={
        variant === "primary"
          ? `inline-flex items-center gap-2 rounded-full bg-(--primary) px-7 py-3.5 font-mono text-[12px] font-semibold uppercase tracking-[0.12em] text-[#0c0b09] transition-transform ${className}`
          : `inline-flex items-center gap-2 rounded-full border border-(--border) px-7 py-3.5 font-mono text-[12px] uppercase tracking-[0.12em] text-(--foreground) transition-colors hover:border-(--primary) hover:text-(--primary) ${className}`
      }
    >
      {children}
    </motion.a>
  );
}

/* ---------------- Card shell ---------------- */
export function TableCard({
  children,
  className = "",
  glow = false,
}: {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}) {
  return (
    <div
      className={`rounded-(--radius) border border-(--border) bg-(--surface) ${glow ? "shadow-[0_0_60px_-18px_var(--primary)]" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------------- Split headline (masked rise) ---------------- */
export function SplitWords({ text, className = "" }: { text: string; className?: string }) {
  const reduce = useReducedMotion();
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em] align-bottom" aria-hidden="true">
          <motion.span
            className="inline-block"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: "110%" }}
            whileInView={{ opacity: 1, y: "0%" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.035, ease: [0.16, 1, 0.3, 1] }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

