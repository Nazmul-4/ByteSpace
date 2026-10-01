import Link from "next/link";
import type { ReactNode } from "react";

import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/layout/Container";
import { GridPattern, REGULAR_GRID_ROWS } from "@/components/ui/GridPattern";

import { AuthShowcase } from "./AuthShowcase";

type AuthLayoutProps = {
  /** Heading and copy shown above the showcase on the left. */
  title: string;
  description: string;
  /** Form card content. */
  children: ReactNode;
  showcaseReviewCountClassName?: string;
};

/**
 * Shared frame of the sign-in and sign-up pages: blue grid background, the logo mark
 * (the wordmark is not visible in these designs), a showcase on the left and the form card.
 */
export function AuthLayout({ title, description, children, showcaseReviewCountClassName }: AuthLayoutProps) {
  return (
    <div className="relative isolate min-h-dvh overflow-hidden bg-persian-blue-800">
      <GridPattern rows={REGULAR_GRID_ROWS} />

      <Container className="relative pb-16 xl:pb-[120px]">
        <header className="h-24 pt-7 xl:h-[120px] xl:pt-[35px] xl:pl-0.5">
          <Link href="/" aria-label="ByteSpace home" className="inline-block">
            <Logo variant="mark" />
          </Link>
        </header>

        <div className="flex flex-col items-center xl:flex-row-reverse xl:items-start xl:justify-between">
          <main className="w-full max-w-[579px] rounded-3xl bg-white px-6 py-10 sm:px-[63px] sm:pt-[61px] sm:pb-10 xl:min-h-[784px]">
            {children}
          </main>

          <aside aria-label={title} className="relative hidden h-[770px] w-[523px] pl-0.5 xl:block">
            <h2 className="type-heading-xs text-shuttle-gray-50">{title}</h2>
            <p className="mt-4 max-w-[475px] type-body-l text-shuttle-gray-50">{description}</p>
            <AuthShowcase
              reviewCountClassName={showcaseReviewCountClassName}
              className="absolute top-[185px] left-[-23px]"
            />
          </aside>
        </div>
      </Container>
    </div>
  );
}
