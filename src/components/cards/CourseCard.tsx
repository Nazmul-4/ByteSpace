import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/icons/Icon";
import { AvatarStack } from "@/components/ui/AvatarStack";
import type { Course } from "@/data/courses";
import { courseLearners } from "@/data/people";
import { cn } from "@/lib/cn";

type CourseCardVariant = "catalog" | "showcase";

const variants = {
  catalog: {
    chips: "left-[13px]",
    chipText: "type-label-xs",
    title: "type-heading-xs",
    meta: "type-body-xs",
    badgeText: "type-label-xs",
    bubble: "bg-electric-lime-400 text-shuttle-gray-950",
    currency: "",
    rating: "type-body-l",
    star: { name: "starRounded", className: "text-shuttle-gray-200" },
  },
  showcase: {
    chips: "left-3",
    chipText: "type-label-xs leading-5",
    title: "type-heading-xs leading-7",
    meta: "type-body-xs leading-5",
    badgeText: "type-label-xs leading-5",
    bubble: "bg-black text-white",
    currency: "font-medium",
    rating: "type-label-l leading-7",
    star: { name: "starFilled", className: "text-electric-lime-400" },
  },
} as const;

type CourseCardProps = {
  course: Course;
  variant?: CourseCardVariant;
  className?: string;
  headingLevel?: "h3" | "h4";
  href?: string;
};

export function CourseCard({
  course,
  variant = "catalog",
  className,
  headingLevel: Heading = "h3",
  href,
}: CourseCardProps) {
  const v = variants[variant];
  return (
    <article
      className={cn(
        "relative flex h-[384px] w-full max-w-[373px] flex-col rounded-3xl border border-shuttle-gray-200 bg-white p-[15px]",
        "transition-shadow duration-300 hover:shadow-[0_16px_40px_rgb(4_8_25/0.08)]",
        href && "cursor-pointer",
        className,
      )}
    >
      {href && (
        <Link
          href={href}
          className="absolute inset-0 z-10 rounded-3xl"
          aria-label={course.title}
        />
      )}

      <div className="relative h-[195px] shrink-0 overflow-hidden rounded-xl bg-[#443131]">
        <Image src={course.image} alt="" fill sizes="341px" className="object-cover" />
        <ul className={cn("absolute top-[150px] flex gap-3", v.chips)} aria-label="Course details">
          {[`${course.lessons} Lessons`, course.duration, `${course.comments} Comments`].map((label) => (
            <li
              key={label}
              className={cn(
                "rounded-3xl bg-[rgb(246_246_246/0.6)] px-3 py-1.5 whitespace-nowrap text-black-700 backdrop-blur-[4px]",
                v.chipText,
              )}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-[21px] flex items-start justify-between">
        <div className="flex min-w-0 flex-col gap-4">
          <div className="min-w-0">
            <Heading className={cn("max-w-[280px] truncate text-black", v.title)} title={course.title}>
              {course.title}
            </Heading>
            <p className={cn("text-black-700", v.meta)}>
              by <span className="text-persian-blue-800">{course.author}</span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 rounded-3xl bg-shuttle-gray-50 px-3 py-1.5 text-shuttle-gray-700">
              <Icon name="signalCellular" size={20} />
              <span className={v.badgeText}>{course.level}</span>
            </span>
            <AvatarStack
              avatars={courseLearners}
              size={32}
              overlap={8}
              count={course.enrolled}
              countClassName={cn("type-label-xs leading-5", v.bubble)}
            />
          </div>

          <p className="flex items-end">
            <span className="type-heading-xs text-persian-blue-800">
              <span className={v.currency}>$</span>
              {course.price}
            </span>
            <span className={cn("text-black-700", v.meta)}>/lifetime</span>
          </p>
        </div>

        <p className="mr-px flex shrink-0 items-center text-black-700">
          <span className="sr-only">Rated </span>
          <span className={v.rating}>{course.rating}</span>
          <span className="sr-only"> out of 5</span>
          <Icon name={v.star.name} className={v.star.className} />
        </p>
      </div>
    </article>
  );
}