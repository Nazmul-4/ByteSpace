/**
 * Shared sidebar shown on all three course detail tabs (About, Lessons, Reviews).
 * Contains the lesson list preview, price, enroll CTA, course includes, and creator info.
 */

import Link from "next/link";
import Image from "next/image";

import { Icon } from "@/components/icons/Icon";
import { Button } from "@/components/ui/Button";
import type { CourseDetail } from "@/data/course-detail";
import type { IconName } from "@/components/icons/icon-paths";
import creatorPortrait from "@/assets/images/people/creator-portrait.png";

type CourseDetailSidebarProps = {
  detail: CourseDetail;
  slug: string;
};

const includeIcons: Record<string, IconName> = {
  "Learning Resources": "business",
  "Quality Lesson Videos": "computer",
  "Certificate of Completion": "cameraFront",
  "Private Consultation": "connect",
};

export function CourseDetailSidebar({ detail, slug }: CourseDetailSidebarProps) {
  return (
    <aside className="w-full max-w-[360px] shrink-0 rounded-3xl border border-shuttle-gray-200 bg-white p-6 self-start">
      {/* Lesson count */}
      <h2 className="type-heading-xs text-black mb-4">
        {detail.lessonCount} Lessons ({detail.totalHours} hours)
      </h2>

      {/* Preview lessons */}
      <ol className="flex flex-col gap-3 mb-1">
        {detail.previewLessons.map((lesson) => (
          <li key={lesson.id} className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-2">
              <span className="type-body-xs text-shuttle-gray-400 w-5 shrink-0 pt-0.5">
                {lesson.id}
              </span>
              <span className="type-body-s text-black">{lesson.title}</span>
            </div>
            <span className="type-body-xs text-persian-blue-800 shrink-0">{lesson.duration}</span>
          </li>
        ))}
      </ol>

      <p className="type-body-xs text-shuttle-gray-400 mb-4">
        {detail.lessonCount - detail.previewLessons.length} more videos
      </p>

      <p className="type-body-s text-shuttle-gray-500 mb-4">
        Ready to Dive In? Enroll Now and Start Building Your Digital Future!
      </p>

      {/* Price */}
      <p className="flex items-end gap-0.5 mb-4">
        <span className="type-heading-s text-persian-blue-800">
          <span className="type-heading-xs">$</span>
          {detail.price}
        </span>
        <span className="type-body-s text-shuttle-gray-400">/lifetime</span>
      </p>

      {/* Enroll CTA */}
      <Button className="w-full mb-6">Enroll Now</Button>

      {/* Course includes */}
      <h3 className="type-label-m text-black mb-3">This course include</h3>
      <ul className="flex flex-col gap-3 mb-6">
        {detail.includes.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <Icon
              name={includeIcons[item] ?? "checkCircle"}
              size={20}
              className="text-shuttle-gray-700 shrink-0"
            />
            <span className="type-body-s text-shuttle-gray-700">{item}</span>
          </li>
        ))}
      </ul>

      {/* Divider */}
      <div className="h-px bg-shuttle-gray-200 mb-6" />

      {/* Creator */}
      <div className="flex items-center gap-3 mb-3">
        <Image
          src={creatorPortrait}
          alt="PurePearl Studio"
          width={48}
          height={48}
          className="rounded-full object-cover shrink-0"
        />
        <div>
          <p className="type-label-s text-black">PurePearl Studio</p>
          <p className="type-body-xs text-shuttle-gray-400">Professional Creator</p>
        </div>
      </div>

      <p className="type-body-s text-shuttle-gray-500 mb-4">
        Ready to Dive In? Enroll Now and Start Building Your Digital Future!
      </p>

      <Link
        href={`/creators/purepearl-studio`}
        className="inline-flex items-center rounded-3xl border border-shuttle-gray-200 px-5 py-2 type-body-s text-shuttle-gray-950 transition-colors hover:bg-shuttle-gray-50"
      >
        See Full Profile
      </Link>
    </aside>
  );
}
