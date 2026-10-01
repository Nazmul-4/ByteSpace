import { cn } from "@/lib/cn";

type GridPatternProps = {
  /** y positions (px from the top) where each 2px horizontal line ends, as placed in the design. */
  rows: readonly number[];
  className?: string;
};

/** Every 120px, as on the 1440px design frame. */
export const REGULAR_GRID_ROWS = [120, 240, 360, 480, 600, 720, 840, 960] as const;

/**
 * The faint 120px grid on blue sections. Lines are solid white inside a 12% opacity group
 * (as in Figma), so intersections don't get brighter. Columns stay aligned to the page center.
 */
export function GridPattern({ rows, className }: GridPatternProps) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 opacity-[0.12]", className)}>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-white)_2px,transparent_2px)] bg-size-[120px_100%] bg-position-[calc(50%+60px)_0]" />
      {rows.map((y) => (
        <div key={y} className="absolute inset-x-0 h-0.5 bg-white" style={{ top: y - 2 }} />
      ))}
    </div>
  );
}
