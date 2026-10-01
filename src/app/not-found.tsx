import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { GridPattern } from "@/components/ui/GridPattern";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

export const metadata = {
  title: "404 Not Found",
};

export default function NotFoundPage() {
  return (
    <>
      <SiteHeader currentPath="/" />
      <main>
        {/* Blue hero section with 404 */}
        <section className="relative min-h-[720px] bg-persian-blue-800 overflow-hidden flex items-center">
          <GridPattern rows={[120, 240, 360, 480, 600, 720]} />

          {/* Giant 404 background text */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
          >
            <span
              className="font-heading font-semibold leading-none"
              style={{
                fontSize: "clamp(200px, 40vw, 480px)",
                background:
                  "linear-gradient(180deg, #d4fb20 0%, rgba(212, 251, 32, 0.2) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              404
            </span>
          </div>

          {/* Content */}
          <Container className="relative z-10 flex flex-col items-center gap-6 pt-32 pb-24 text-center">
            <h1 className="type-heading-s md:type-heading-m text-white max-w-[740px]">
              The page you are looking for doesn&apos;t exist
            </h1>
            <p className="type-body-m text-shuttle-gray-300 max-w-[480px]">
              Try to use a correct url or go back to homepage to start again
            </p>
            <ButtonLink href="/" className="mt-2 bg-white text-shuttle-gray-950 hover:bg-shuttle-gray-100 active:bg-shuttle-gray-200">
              Back to Home
            </ButtonLink>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
