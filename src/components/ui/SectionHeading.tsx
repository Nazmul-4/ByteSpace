import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  id: string;
  title: string;
  description: string;
  /** `m` = Heading M (44px), `s` = Heading S (36px) */
  size?: "m" | "s";
  className?: string;
  titleClassName?: string;
};

/** Centered section title with its intro paragraph. */
export function SectionHeading({ id, title, description, size = "m", className, titleClassName }: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto flex max-w-[917px] flex-col items-center gap-4 text-center", className)}>
      <h2
        id={id}
        className={cn(
          "text-vulcan-950",
          size === "m" ? "type-heading-s md:type-heading-m" : "type-heading-s",
          titleClassName,
        )}
      >
        {title}
      </h2>
      <p className="type-body-m text-shuttle-gray-400 md:type-body-l">{description}</p>
    </div>
  );
}
