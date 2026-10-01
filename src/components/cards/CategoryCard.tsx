import Link from "next/link";

import { Icon } from "@/components/icons/Icon";
import type { LearningPath } from "@/data/catalog";
import { cn } from "@/lib/cn";

export function CategoryCard({ path, className }: { path: LearningPath; className?: string }) {
  return (
    <Link
      href={path.href}
      className={cn(
        "group flex size-[167px] flex-col items-center justify-center gap-3 rounded-3xl border border-shuttle-gray-200",
        "transition-colors duration-200 hover:border-persian-blue-800 hover:bg-shuttle-gray-50",
        className,
      )}
    >
      <span className="flex size-[60px] items-center justify-center rounded-full bg-electric-lime-400 text-shuttle-gray-950 transition-transform duration-200 group-hover:scale-105">
        <Icon name={path.icon} size={36} />
      </span>
      <span className="type-label-xl text-shuttle-gray-950">{path.label}</span>
    </Link>
  );
}
