"use client";

import { useId, type FormEvent } from "react";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

// Front-end only: there is no backend, so submitting just stays on the page.
const preventSubmit = (event: FormEvent<HTMLFormElement>) => event.preventDefault();

export function NewsletterForm() {
  const inputId = useId();

  return (
    <form onSubmit={preventSubmit} className="flex max-w-[504px] flex-col gap-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-6">
        <label htmlFor={inputId} className="sr-only">
          Email address
        </label>
        <input
          id={inputId}
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="Enter your email"
          className={cn(
            "h-[52px] w-full rounded-[100px] border border-shuttle-gray-200 bg-white px-6 type-body-m text-shuttle-gray-950 sm:w-[376px]",
            "placeholder:text-shuttle-gray-950 focus:border-persian-blue-800 focus:outline-none",
          )}
        />
        {/* The design labels this button "Search". */}
        <Button type="submit" className="self-start">
          Search
        </Button>
      </div>
      <p className="type-body-xs text-shuttle-gray-950">
        By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
      </p>
    </form>
  );
}
