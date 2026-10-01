import { Icon } from "@/components/icons/Icon";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { happyStudents } from "@/data/people";
import { cn } from "@/lib/cn";

/*
 * Floating "widget" cards used in the hero and in the illustrations of the feature
 * sections. `showcase` reproduces the illustration copies, which use the older text
 * styles of the design file (taller line heights, 10px rating text).
 */

type WidgetProps = { className?: string };

export function LearningProgressCard({ className, variant = "hero" }: WidgetProps & { variant?: "hero" | "showcase" }) {
  return (
    <div className={cn("w-[232px] rounded-2xl bg-white p-4 text-shuttle-gray-950", className)}>
      <p className={cn("type-label-s", variant === "showcase" && "leading-6")}>Learning Progress</p>
      <p className="mt-2 font-heading text-[48px] leading-[58px] font-semibold tracking-[-0.01em]">55%</p>
      {/* 112 of 200px, as drawn in the design */}
      <ProgressBar value={56} className="mt-2 w-[200px]" trackClassName="bg-mist" />
    </div>
  );
}

const happyStudentsVariants = {
  hero: {
    card: "h-[121px] bg-white",
    title: "type-label-m",
    rating: "type-body-xs",
    score: "",
    star: "text-electric-lime-400",
    // "2K+" sits 2px right of / 0.5px below center in the design
    bubble: "bg-electric-lime-400 pt-px pl-1 text-shuttle-gray-950",
  },
  showcase: {
    card: "h-[123px] bg-white",
    title: "type-label-m leading-6",
    rating: "font-body text-[10px] leading-[15px]",
    score: "font-bold",
    star: "text-electric-lime-400",
    bubble: "bg-electric-lime-400 pt-px pl-1 text-shuttle-gray-950",
  },
  lime: {
    card: "h-[123px] bg-electric-lime-400",
    title: "type-label-m leading-6",
    rating: "font-body text-[10px] leading-[15px]",
    score: "font-bold",
    star: "text-persian-blue-800",
    bubble: "bg-shuttle-gray-950 pt-px pr-0.5 text-shuttle-gray-50",
  },
} as const;

export function HappyStudentsCard({
  className,
  variant = "hero",
  reviewCountClassName = "text-shuttle-gray-400",
}: WidgetProps & {
  variant?: keyof typeof happyStudentsVariants;
  /** Color of "(240)"; the sign-up page uses a darker gray than the other copies. */
  reviewCountClassName?: string;
}) {
  const v = happyStudentsVariants[variant];
  return (
    <div
      className={cn(
        "flex w-[258px] flex-col justify-center gap-2 rounded-2xl p-4 text-shuttle-gray-950",
        v.card,
        className,
      )}
    >
      <div>
        <p className={v.title}>Happy Students</p>
        <p className="flex items-center">
          <span className={v.rating}>
            <span className={v.score}>4.5</span> <span className={reviewCountClassName}>(240)</span>
          </span>
          <Icon name="starSoft" size={16} className={v.star} />
        </p>
      </div>
      <AvatarStack
        avatars={happyStudents}
        size={43}
        overlap={16}
        count="2K+"
        countClassName={cn("font-body text-xs leading-[18px] font-bold", v.bubble)}
      />
    </div>
  );
}

export function CourseSummaryCard({ className }: WidgetProps) {
  return (
    <div className={cn("w-[208px] rounded-2xl bg-white p-4", className)}>
      <p className="type-label-m text-shuttle-gray-950">UI/UX Design</p>
      <p className="flex items-start gap-2 text-shuttle-gray-400">
        <span className="type-body-xs">200 Courses</span>
        <span aria-hidden className="font-body text-[10px] leading-[15px]">
          •
        </span>
        <span className="type-body-xs">1000+ Students</span>
      </p>
    </div>
  );
}

function RevenueBadge({ children }: { children: string }) {
  return (
    <span className="rounded-3xl bg-electric-lime-500 px-2 py-0.5 font-body text-[10px] leading-5 font-medium text-shuttle-gray-950">
      {children}
    </span>
  );
}

function RevenueHeading({ title, period }: { title: string; period: string }) {
  return (
    <div>
      <p className="type-label-m">{title}</p>
      <p className="font-body text-[10px] leading-3">{period}</p>
    </div>
  );
}

const amountClassName = "font-heading text-2xl leading-8 font-semibold tracking-[-0.01em]";

export function TotalRevenueCard({ className }: WidgetProps) {
  return (
    <div
      className={cn(
        "flex w-[232px] flex-col gap-2 rounded-2xl bg-persian-blue-800 p-4 text-shuttle-gray-50",
        className,
      )}
    >
      <RevenueHeading title="Total Revenue" period="July 1-28" />
      <div className="flex items-center justify-between">
        <p className={amountClassName}>$120.29</p>
        <RevenueBadge>+12$</RevenueBadge>
      </div>
      <ProgressBar value={56} className="w-[200px]" trackClassName="bg-white" />
    </div>
  );
}

export function YearToDateCard({ className }: WidgetProps) {
  return (
    <div
      className={cn(
        "flex h-[135px] w-[134px] flex-col items-start gap-2 rounded-2xl bg-persian-blue-800 p-4 text-shuttle-gray-50",
        className,
      )}
    >
      <RevenueHeading title="Year to Date" period="2023" />
      <p className={amountClassName}>$1,200.38</p>
      <RevenueBadge>+12$</RevenueBadge>
    </div>
  );
}
