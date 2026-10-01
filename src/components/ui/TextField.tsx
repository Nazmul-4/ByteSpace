import { useId, type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

type TextFieldProps = ComponentPropsWithoutRef<"input"> & { label: string };

/** Labelled input used by the sign-in and sign-up forms. */
export function TextField({ label, className, id, ...props }: TextFieldProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div className={cn("flex w-full flex-col gap-2", className)}>
      <label htmlFor={inputId} className="type-label-s text-shuttle-gray-950">
        {label}
      </label>
      <input
        id={inputId}
        className={cn(
          "h-[52px] w-full rounded-xl border border-shuttle-gray-100 bg-white px-6 type-body-l text-shuttle-gray-950",
          "transition-colors placeholder:text-shuttle-gray-400 focus:border-persian-blue-800 focus:outline-none",
        )}
        {...props}
      />
    </div>
  );
}
