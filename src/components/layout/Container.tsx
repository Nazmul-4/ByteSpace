import type { ComponentPropsWithoutRef, ElementType } from "react";

import { cn } from "@/lib/cn";

type ContainerProps<T extends ElementType> = { as?: T } & ComponentPropsWithoutRef<T>;

/** Centers content in the design's 1200px column (x = 120px on the 1440px frame). */
export function Container<T extends ElementType = "div">({ as, className, ...props }: ContainerProps<T>) {
  const Component = as ?? "div";
  return <Component className={cn("mx-auto w-full max-w-[1264px] px-5 sm:px-8", className)} {...props} />;
}
