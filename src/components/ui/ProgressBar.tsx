import { cn } from "@/lib/cn";

type ProgressBarProps = {
  /** 0 to 100 */
  value: number;
  className?: string;
  trackClassName?: string;
};

/** Decorative 8px progress bar (the adjacent label carries the value for assistive tech). */
export function ProgressBar({ value, className, trackClassName }: ProgressBarProps) {
  return (
    <div aria-hidden className={cn("h-2 overflow-hidden rounded-3xl", trackClassName, className)}>
      <div className="h-full rounded-3xl bg-electric-lime-400" style={{ width: `${value}%` }} />
    </div>
  );
}
