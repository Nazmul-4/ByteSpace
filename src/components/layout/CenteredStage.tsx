import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type CenteredStageProps = {
  children: ReactNode;
  /** Width of the design frame the children are positioned in. */
  width?: number;
  className?: string;
};

/**
 * A layer as wide as the 1440px design frame, centered on the page. Decorative children
 * are absolutely positioned with the design's own coordinates, so they stay anchored to the
 * content on any viewport width (the parent section clips whatever overflows).
 */
export function CenteredStage({ children, width = 1440, className }: CenteredStageProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2", className)}
      style={{ width }}
    >
      {children}
    </div>
  );
}
