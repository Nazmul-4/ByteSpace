"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";

import { buttonClassName } from "@/components/ui/Button";
import { authNav, primaryNav } from "@/data/navigation";
import { cn } from "@/lib/cn";

/** Navigation for viewports below `lg` (the design only defines the desktop header). */
export function MobileMenu({ currentPath, className }: { currentPath: string; className?: string }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className={className}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
        className="relative z-50 flex size-11 items-center justify-center rounded-full bg-electric-lime-400 text-shuttle-gray-950"
      >
        <span aria-hidden className="relative block h-3.5 w-5">
          <span
            className={cn(
              "absolute left-0 h-0.5 w-5 rounded bg-current transition-all duration-300",
              open ? "top-1.5 rotate-45" : "top-0",
            )}
          />
          <span
            className={cn(
              "absolute top-1.5 left-0 h-0.5 w-5 rounded bg-current transition-opacity duration-200",
              open && "opacity-0",
            )}
          />
          <span
            className={cn(
              "absolute left-0 h-0.5 w-5 rounded bg-current transition-all duration-300",
              open ? "top-1.5 -rotate-45" : "top-3",
            )}
          />
        </span>
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="fixed inset-0 z-40 flex flex-col bg-persian-blue-800 px-5 pt-28 pb-10 sm:px-8"
      >
        <nav aria-label="Mobile">
          <ul className="flex flex-col gap-2">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  aria-current={item.href === currentPath ? "page" : undefined}
                  className="block py-3 type-heading-s text-shuttle-gray-50 transition-colors hover:text-electric-lime-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto flex flex-col gap-3 sm:flex-row">
          <Link
            href={authNav.signIn.href}
            onClick={close}
            className="inline-flex items-center justify-center rounded-3xl border border-shuttle-gray-50/40 px-6 py-3 type-label-l text-shuttle-gray-50"
          >
            {authNav.signIn.label}
          </Link>
          <Link href={authNav.signUp.href} onClick={close} className={buttonClassName}>
            {authNav.signUp.label}
          </Link>
        </div>
      </div>
    </div>
  );
}
