import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Teach tailwind-merge about the custom `type-*` text-style utilities so that, e.g.,
// `type-heading-m md:type-heading-l` or overriding one text style with another merges correctly.
const twMerge = extendTailwindMerge<"text-style">({
  extend: {
    classGroups: {
      "text-style": [{ type: [(value: string) => /^(heading|display|label|body)-/.test(value)] }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
