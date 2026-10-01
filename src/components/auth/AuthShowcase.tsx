import { CourseCard } from "@/components/cards/CourseCard";
import { HappyStudentsCard } from "@/components/cards/StatCards";
import { Shape3D } from "@/components/ui/Shape3D";
import { getCourse } from "@/data/courses";
import { cn } from "@/lib/cn";

type AuthShowcaseProps = {
  className?: string;
  reviewCountClassName?: string;
};

/** Decorative collage on the left of the sign-in / sign-up pages (548 x 585 in the design). */
export function AuthShowcase({ className, reviewCountClassName }: AuthShowcaseProps) {
  return (
    <div aria-hidden className={cn("relative h-[585px] w-[548px]", className)}>
      <CourseCard
        course={getCourse("build-digital-asset")}
        variant="showcase"
        headingLevel="h4"
        className="absolute top-[89px] left-[25px]"
      />
      <CourseCard
        course={getCourse("the-power-of-big-data")}
        variant="showcase"
        headingLevel="h4"
        className="absolute top-0 left-[136px]"
      />
      <HappyStudentsCard
        variant="lime"
        reviewCountClassName={reviewCountClassName}
        className="absolute top-[435px] left-[251px]"
      />
      <Shape3D shape="squiggle-white" size={175} mirrored className="top-[321px] left-[373px]" />
      <Shape3D shape="torus-lime" size={146} className="top-[15px] left-[54px]" />
      <Shape3D shape="pyramid-lime" size={188} className="top-[397px] left-0" />
    </div>
  );
}
