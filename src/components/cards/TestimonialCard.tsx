import Image from "next/image";

import type { Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/cn";

type TestimonialCardProps = {
  testimonial: Testimonial;
  /** The first card in the design uses the 24px name line height, the others 28px. */
  nameLeading?: "tight" | "relaxed";
  className?: string;
};

export function TestimonialCard({ testimonial, nameLeading = "relaxed", className }: TestimonialCardProps) {
  return (
    <article className={cn("flex w-full max-w-[374px] flex-col gap-6 rounded-3xl bg-white p-6", className)}>
      <Image src={testimonial.avatar} alt="" width={80} height={80} className="size-20 rounded-full object-cover" />
      <div>
        <h3 className={cn("type-heading-xs text-black", nameLeading === "relaxed" && "leading-7")}>
          {testimonial.name}
        </h3>
        <p className="type-body-l text-persian-blue-800">{testimonial.role}</p>
      </div>
      <blockquote className="type-body-l text-black-700">
        <p>&quot;{testimonial.quote}&quot;</p>
      </blockquote>
    </article>
  );
}
