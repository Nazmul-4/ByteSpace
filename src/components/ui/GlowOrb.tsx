import type { CSSProperties } from "react";

import { cn } from "@/lib/cn";

const TONES = { blue: "0 59 226", lime: "203 252 1" } as const;

type GlowOrbProps = {
  tone: keyof typeof TONES;
  /** Diameter in px. */
  size: number;
  /** Peak opacity at the center (the Figma paint opacity). */
  intensity: number;
  className?: string;
  style?: CSSProperties;
};

/** Soft radial glow behind the light sections (same stops as the Figma radial gradients). */
export function GlowOrb({ tone, size, intensity, className, style }: GlowOrbProps) {
  const rgb = TONES[tone];
  const stop = (alpha: number, at: string) => `rgb(${rgb} / ${+(intensity * alpha).toFixed(4)}) ${at}`;
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute", className)}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(closest-side, ${stop(1, "0%")}, ${stop(59 / 255, "53%")}, ${stop(15 / 255, "75%")}, ${stop(0, "100%")})`,
        ...style,
      }}
    />
  );
}
