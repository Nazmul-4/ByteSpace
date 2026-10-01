import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

/** The design's single button style: lime pill, 46px tall, Label L text. */
export const buttonClassName = cn(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-3xl bg-electric-lime-400 px-6 py-3",
  "type-label-l whitespace-nowrap text-shuttle-gray-950 transition-colors duration-200",
  "hover:bg-electric-lime-500 active:bg-electric-lime-300 disabled:pointer-events-none disabled:opacity-60",
);

export function Button({ className, type = "button", ...props }: ComponentPropsWithoutRef<"button">) {
  return <button type={type} className={cn(buttonClassName, className)} {...props} />;
}

export function ButtonLink({ className, ...props }: ComponentPropsWithoutRef<typeof Link>) {
  return <Link className={cn(buttonClassName, className)} {...props} />;
}
