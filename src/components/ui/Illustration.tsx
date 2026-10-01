import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/cn";

type IllustrationProps = {
  /** Size of the composition in the design, in px. Children are positioned inside it. */
  width: number;
  height: number;
  /** Sets `--scale` per breakpoint, e.g. "[--scale:0.5] md:[--scale:1]". Defaults to 1. */
  scaleClassName?: string;
  className?: string;
  children: ReactNode;
};

/**
 * A fixed-size, absolutely positioned composition (the design's collages) that scales
 * uniformly on small screens while reserving exactly the scaled space in the layout.
 */
export function Illustration({ width, height, scaleClassName, className, children }: IllustrationProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "relative h-[calc(var(--illustration-h)*var(--scale,1))] w-[calc(var(--illustration-w)*var(--scale,1))] shrink-0",
        scaleClassName,
        className,
      )}
      style={{ "--illustration-w": `${width}px`, "--illustration-h": `${height}px` } as CSSProperties}
    >
      <div className="absolute top-0 left-0 origin-top-left scale-(--scale,1)" style={{ width, height }}>
        {children}
      </div>
    </div>
  );
}
