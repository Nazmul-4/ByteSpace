/**
 * Top section of all course detail pages: title, stats badges, video thumbnail,
 * and the About / Lessons / Reviews tab navigation.
 */

import Link from "next/link";

import { Icon } from "@/components/icons/Icon";
import { cn } from "@/lib/cn";
import type { CourseDetail } from "@/data/course-detail";

type Tab = "about" | "lessons" | "reviews";

const tabs: { label: string; value: Tab; href: (slug: string) => string }[] = [
  { label: "About", value: "about", href: (slug) => `/courses/${slug}` },
  { label: "Lessons", value: "lessons", href: (slug) => `/courses/${slug}/lessons` },
  { label: "Reviews", value: "reviews", href: (slug) => `/courses/${slug}/reviews` },
];

type CourseDetailHeaderProps = {
  detail: CourseDetail;
  activeTab: Tab;
};

export function CourseDetailHeader({ detail, activeTab }: CourseDetailHeaderProps) {
  return (
    <>
      {/* Hero meta */}
      <div className="flex items-start justify-between gap-4 mb-5">
        <div>
          <h1 className="type-heading-s text-white mb-1">{detail.fullTitle}</h1>
          <p className="type-body-s text-shuttle-gray-200 mb-3">{detail.subtitle}</p>
          <p className="type-body-s text-white">
            by{" "}
            <Link
              href={`/creators/purepearl-studio`}
              className="text-electric-lime-400 hover:underline"
            >
              {detail.author}
            </Link>
          </p>
        </div>

        {/* Share button */}
        <button
          type="button"
          className="flex shrink-0 items-center gap-2 rounded-3xl bg-electric-lime-400 px-4 py-2 type-label-s text-shuttle-gray-950 transition-colors hover:bg-electric-lime-500"
        >
          <Icon name="connect" size={16} />
          Share
        </button>
      </div>

      {/* Badges */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span className="flex items-center gap-1.5 rounded-3xl border border-white/30 px-3 py-1.5 type-body-xs text-white">
          <Icon name="signalCellular" size={16} />
          {detail.level}
        </span>
        <span className="flex items-center gap-1.5 rounded-3xl border border-white/30 px-3 py-1.5 type-body-xs text-white">
          <Icon name="starRounded" size={16} className="text-electric-lime-400" />
          {detail.rating} ({detail.reviewCount} reviews)
        </span>
        <span className="flex items-center gap-1.5 rounded-3xl border border-white/30 px-3 py-1.5 type-body-xs text-white">
          <Icon name="connect" size={16} />
          {detail.students} Students
        </span>
      </div>
    </>
  );
}

/** Tab bar rendered below the video player — shared across all 3 detail tabs. */
export function CourseDetailTabs({
  activeTab,
  slug,
}: {
  activeTab: Tab;
  slug: string;
}) {
  return (
    <div className="flex gap-2">
      {tabs.map((tab) => {
        const isActive = tab.value === activeTab;
        return (
          <Link
            key={tab.value}
            href={tab.href(slug)}
            className={cn(
              "rounded-3xl px-5 py-2 type-label-s transition-colors",
              isActive
                ? "bg-electric-lime-400 text-shuttle-gray-950"
                : "border border-shuttle-gray-200 text-shuttle-gray-700 hover:bg-shuttle-gray-50",
            )}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}
