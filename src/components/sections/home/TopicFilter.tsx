"use client";

import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/cn";

type TopicFilterProps = {
  /** Topics grouped in rows, as laid out in the design. */
  rows: string[][];
  className?: string;
};

/** Topic "pills" above the course grid; the selected topic is highlighted in lime. */
export function TopicFilter({ rows, className }: TopicFilterProps) {
  const [selected, setSelected] = useState(rows[0][0]);

  return (
    <div
      role="group"
      aria-label="Filter courses by topic"
      className={cn("flex flex-col items-center gap-3 xl:gap-[21px]", className)}
    >
      {rows.map((row, rowIndex) => (
        <ul key={rowIndex} className="flex flex-wrap items-center justify-center gap-3 xl:flex-nowrap xl:gap-4">
          {row.map((topic) => {
            const isSelected = topic === selected;
            return (
              <li key={topic}>
                <button
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelected(topic)}
                  className={cn(
                    "block rounded-3xl px-4 py-3 type-label-m whitespace-nowrap transition-colors duration-200",
                    isSelected
                      ? "bg-electric-lime-400 text-shuttle-gray-950"
                      : "bg-shuttle-gray-50 text-shuttle-gray-700 hover:bg-shuttle-gray-100",
                  )}
                >
                  {topic}
                </button>
              </li>
            );
          })}
          {rowIndex === rows.length - 1 ? (
            <li>
              <Link
                href="#categories"
                className="block type-label-m whitespace-nowrap text-persian-blue-800 hover:underline"
              >
                + More
              </Link>
            </li>
          ) : null}
        </ul>
      ))}
    </div>
  );
}
