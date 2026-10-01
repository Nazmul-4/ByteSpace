"use client";

import type { FormEvent } from "react";

import { Icon } from "@/components/icons/Icon";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

export function HeroSearch({ className }: { className?: string }) {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    document.getElementById("courses")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <form
      role="search"
      onSubmit={onSubmit}
      className={cn("flex w-full max-w-[581px] items-start gap-2 sm:gap-4", className)}
    >
      <label className="flex h-[52px] min-w-0 flex-1 items-center gap-2 rounded-3xl bg-white px-4 ring-electric-lime-400 focus-within:ring-2 sm:px-6">
        <span className="sr-only">Search courses</span>
        <Icon name="search" className="shrink-0 text-shuttle-gray-400" />
        <input
          type="search"
          name="q"
          placeholder="Course, topic, creator"
          autoComplete="off"
          className="w-full min-w-0 bg-transparent type-body-l text-shuttle-gray-950 placeholder:text-shuttle-gray-400 focus:outline-none [&::-webkit-search-cancel-button]:appearance-none"
        />
      </label>
      <Button type="submit">Search</Button>
    </form>
  );
}
