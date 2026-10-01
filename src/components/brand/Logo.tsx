import { cn } from "@/lib/cn";

import { LOGO_HEIGHT, LOGO_MARK_WIDTH, LOGO_WIDTH, logoMarkPaths, logoWordmarkPath } from "./logo-paths";

type LogoProps = {
  /** `light` for blue backgrounds, `dark` for white ones, `mark` renders the symbol only. */
  variant?: "light" | "dark" | "mark";
  className?: string;
};

/** ByteSpace logo: the lime mark plus the wordmark (outlined, so it needs no font). */
export function Logo({ variant = "light", className }: LogoProps) {
  const isMark = variant === "mark";
  return (
    <svg
      viewBox={`0 0 ${isMark ? LOGO_MARK_WIDTH : LOGO_WIDTH} ${isMark ? 31.5 : LOGO_HEIGHT}`}
      width={isMark ? LOGO_MARK_WIDTH : LOGO_WIDTH}
      height={isMark ? 31.5 : LOGO_HEIGHT}
      className={cn(variant === "dark" ? "text-shuttle-gray-950" : "text-shuttle-gray-50", className)}
      role="img"
      aria-label="ByteSpace"
    >
      {logoMarkPaths.map((d) => (
        <path key={d} d={d} className="fill-electric-lime-400" />
      ))}
      {isMark ? null : <path d={logoWordmarkPath} fill="currentColor" />}
    </svg>
  );
}
