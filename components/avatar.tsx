/* Deterministic geometric avatars — illustrated, never photos of real people. */

function prng(seed: number) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

const PALETTES = [
  ["#f36938", "#f2eee3", "#c9a227"],
  ["#c9a227", "#f36938", "#f2eee3"],
  ["#f2eee3", "#8a6d1f", "#f36938"],
  ["#f36938", "#7a4a2b", "#f2eee3"],
];

export function Avatar({ seed, size = 56, label }: { seed: number; size?: number; label: string }) {
  const rand = prng(seed * 7919 + 13);
  const [a, b, c] = PALETTES[Math.floor(rand() * PALETTES.length)];
  const shape = Math.floor(rand() * 4);
  const r1 = 18 + rand() * 22;
  const cx = 20 + rand() * 60;
  const cy = 20 + rand() * 60;
  const rot = Math.floor(rand() * 90);
  const id = `av-${seed}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label={label}
      className="shrink-0 rounded-full"
    >
      <defs>
        <clipPath id={id}>
          <circle cx="50" cy="50" r="50" />
        </clipPath>
      </defs>
      <rect width="100" height="100" fill="#1a1712" />
      <g clipPath={`url(#${id})`}>
        <circle cx={cx} cy={cy} r={r1} fill={a} opacity="0.9" />
        {shape === 0 && <rect x={100 - cx} y={100 - cy} width={r1 * 1.4} height={r1 * 1.4} fill={b} opacity="0.75" transform={`rotate(${rot} ${100 - cx} ${100 - cy})`} />}
        {shape === 1 && <circle cx={100 - cx} cy={100 - cy} r={r1 * 0.6} fill={b} opacity="0.8" />}
        {shape === 2 && <rect x="0" y={cy - 8} width="100" height="16" fill={b} opacity="0.7" transform={`rotate(${rot - 45} 50 50)`} />}
        {shape === 3 && <polygon points={`50,${cy - r1} ${50 + r1},${cy + r1 * 0.7} ${50 - r1},${cy + r1 * 0.7}`} fill={b} opacity="0.8" />}
        <circle cx={100 - cx} cy={cy} r={r1 * 0.32} fill={c} opacity="0.85" />
      </g>
      <circle cx="50" cy="50" r="49" fill="none" stroke="#f2eee3" strokeOpacity="0.25" strokeWidth="2" />
    </svg>
  );
}
