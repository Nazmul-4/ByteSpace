/**
 * Course Detail – Lessons tab
 * Route: /courses/[slug]/lessons
 * Design reference: "Course Lessons.png"
 */

import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Container } from "@/components/layout/Container";
import { GridPattern, REGULAR_GRID_ROWS } from "@/components/ui/GridPattern";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { CourseDetailHeader, CourseDetailTabs } from "@/components/sections/course/CourseDetailHeader";
import { CourseDetailSidebar } from "@/components/sections/course/CourseDetailSidebar";
import { CourseVideoPlayer } from "@/components/sections/course/CourseVideoPlayer";
import { getCourseDetail } from "@/data/course-detail";
import { courses } from "@/data/courses";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const detail = getCourseDetail(slug);
  return { title: detail ? `${detail.fullTitle} – Lessons` : "Course Lessons" };
}

export default async function CourseLessonsPage({ params }: PageProps) {
  const { slug } = await params;
  const detail = getCourseDetail(slug);
  if (!detail) notFound();

  return (
    <>
      <SiteHeader currentPath="/courses" />
      <main>
        {/* Blue hero */}
        <section className="relative bg-persian-blue-800 pt-[120px] pb-10 overflow-hidden">
          <GridPattern rows={REGULAR_GRID_ROWS} />
          <Container className="relative z-10">
            <CourseDetailHeader detail={detail} activeTab="lessons" />

            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
              <div className="flex-1 min-w-0">
                <CourseVideoPlayer />
              </div>
              <CourseDetailSidebar detail={detail} slug={slug} />
            </div>
          </Container>
        </section>

        {/* White content area */}
        <section className="bg-white py-10">
          <Container>
            <CourseDetailTabs activeTab="lessons" slug={slug} />

            <div className="mt-8 max-w-[740px]">
              {/* Explore the Modules */}
              <h2 className="type-heading-xs text-black mb-2">Explore the Modules</h2>
              <p className="type-body-s text-shuttle-gray-500 mb-6">
                Immerse yourself in the course content as we break down each module into comprehensive lessons,
                providing practical insights and hands-on experiences.
              </p>

              {/* Lesson List */}
              <h3 className="type-label-m text-black mb-4">Lesson List</h3>
              <ul className="flex flex-col gap-4 mb-10">
                {detail.modules.map((module) => (
                  <li key={module.id} className="flex items-start gap-4">
                    {/* Video icon */}
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-electric-lime-400">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6 text-shuttle-gray-950"
                        aria-hidden
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                    <div>
                      <p className="type-label-s text-black mb-0.5">{module.title}</p>
                      <p className="type-body-xs text-shuttle-gray-500">{module.description}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Lesson Content */}
              <h3 className="type-label-m text-black mb-2">Lesson Content</h3>
              <p className="type-body-s text-shuttle-gray-500 mb-8">
                Engage with each lesson through captivating video content, detailed textual explanations, and
                interactive elements. Download resources, complete assignments, and test your understanding with
                quizzes.
              </p>

              {/* Lesson Progress Tracking */}
              <h3 className="type-label-m text-black mb-2">Lesson Progress Tracking</h3>
              <p className="type-body-s text-shuttle-gray-500 mb-6">
                Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you
                through your learning journey.
              </p>

              {/* Progress card */}
              <div className="rounded-2xl border border-shuttle-gray-200 p-5">
                <p className="type-body-xs text-shuttle-gray-400 mb-1">Learning Progress</p>
                <p className="type-heading-xs text-black mb-3">{detail.lessonProgress}%</p>
                <ProgressBar
                  value={detail.lessonProgress}
                  trackClassName="bg-shuttle-gray-100"
                />
              </div>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
