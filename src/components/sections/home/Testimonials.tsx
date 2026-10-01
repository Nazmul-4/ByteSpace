import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { CenteredStage } from "@/components/layout/CenteredStage";
import { Container } from "@/components/layout/Container";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="relative isolate overflow-hidden bg-snow pt-16 pb-16 xl:pt-[74px] xl:pb-[57px]"
    >
      <CenteredStage>
        <GlowOrb tone="lime" size={1137} intensity={0.4} className="top-[-241px] left-[842px]" />
        <GlowOrb tone="lime" size={672} intensity={0.6} className="top-[-138px] left-[395px]" />
        <GlowOrb tone="blue" size={1137} intensity={0.24} className="top-[149px] left-[-442px]" />
      </CenteredStage>

      {/* The design places this block 2px left of the 1200px column and 4px wider */}
      <Container className="relative">
        <div className="flex flex-col gap-12 xl:-ml-0.5 xl:w-[1204px] xl:gap-[72px]">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:gap-[43px]">
            <h2
              id="testimonials-title"
              className="max-w-[577px] type-heading-s text-black md:type-heading-m xl:w-[577px]"
            >
              Discover What Our Community Is Saying
            </h2>
            <p className="max-w-[580px] type-body-l text-black-700">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly
              from those who have experienced the transformative journey of learning and creating on our platform.
              Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished
              creators.
            </p>
          </div>
          <ul className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 xl:flex xl:items-start xl:gap-[41px]">
            {testimonials.map((testimonial, index) => (
              <li key={testimonial.name} className="w-full max-w-[374px] xl:w-[374px]">
                <TestimonialCard testimonial={testimonial} nameLeading={index === 0 ? "tight" : "relaxed"} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
