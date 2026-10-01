/**
 * Course Detail – Reviews tab
 * Route: /courses/[slug]/reviews
 * Design reference: "Course Reviews.png"
 */

import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Container } from "@/components/layout/Container";
import { GridPattern, REGULAR_GRID_ROWS } from "@/components/ui/GridPattern";
import { Icon } from "@/components/icons/Icon";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { CourseDetailHeader, CourseDetailTabs } from "@/components/sections/course/CourseDetailHeader";
import { CourseDetailSidebar } from "@/components/sections/course/CourseDetailSidebar";
import { CourseVideoPlayer } from "@/components/sections/course/CourseVideoPlayer";
import { getCourseDetail } from "@/data/course-detail";
import { courses } from "@/data/courses";
import { cn } from "@/lib/cn";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const detail = getCourseDetail(slug);
  return { title: detail ? `${detail.fullTitle} – Reviews` : "Course Reviews" };
}

const ratingFilters = ["All rating", "★ 5", "★ 4", "★ 3", "★ 2", "★ 1"];

export default async function CourseReviewsPage({ params }: PageProps) {
  const { slug } = await params;
  const detail = getCourseDetail(slug);
  if (!detail) notFound();

  const totalReviews = detail.ratingBreakdown.reduce((s, r) => s + r.count, 0);

  return (
    <>
      <SiteHeader currentPath="/courses" />
      <main>
        {/* Blue hero */}
        <section className="relative bg-persian-blue-800 pt-[120px] pb-10 overflow-hidden">
          <GridPattern rows={REGULAR_GRID_ROWS} />
          <Container className="relative z-10">
            <CourseDetailHeader detail={detail} activeTab="reviews" />

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
            <CourseDetailTabs activeTab="reviews" slug={slug} />

            <div className="mt-8 max-w-[740px]">
              {/* Section heading */}
              <h2 className="type-heading-xs text-black mb-2">What Learners Are Saying</h2>
              <p className="type-body-s text-shuttle-gray-500 mb-8">
                Discover what our learners have to say about their experience with &apos;Build Digital Assets: A
                Comprehensive Guide.&apos; Read reviews and ratings from individuals who have embarked on the
                transformative journey of mastering digital asset creation.
              </p>

              {/* Rating summary */}
              <div className="flex items-start gap-6 mb-8">
                {/* Big number */}
                <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-2xl bg-electric-lime-400">
                  <span className="type-body-xs text-shuttle-gray-700 leading-4">Ratings</span>
                  <span className="type-heading-s text-shuttle-gray-950">{detail.overallRating}</span>
                </div>

                {/* Breakdown bars */}
                <div className="flex flex-1 flex-col gap-2">
                  {detail.ratingBreakdown.map((row) => {
                    const pct = totalReviews > 0 ? (row.count / totalReviews) * 100 : 0;
                    return (
                      <div key={row.stars} className="flex items-center gap-3">
                        <ProgressBar
                          value={pct}
                          className="flex-1"
                          trackClassName="bg-shuttle-gray-100"
                        />
                        <div className="flex items-center gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Icon
                              key={i}
                              name="starRounded"
                              size={14}
                              className={i < row.stars ? "text-electric-lime-400" : "text-shuttle-gray-200"}
                            />
                          ))}
                        </div>
                        <span className="w-8 text-right type-body-xs text-shuttle-gray-500">
                          {row.count}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Individual reviews */}
              <h3 className="type-label-m text-black mb-4">Individual Reviews:</h3>

              {/* Filter chips */}
              <div className="flex flex-wrap gap-2 mb-6">
                {ratingFilters.map((f, i) => (
                  <button
                    key={f}
                    type="button"
                    className={cn(
                      "rounded-3xl px-4 py-1.5 type-body-xs transition-colors",
                      i === 0
                        ? "bg-electric-lime-400 text-shuttle-gray-950"
                        : "border border-shuttle-gray-200 text-shuttle-gray-700 hover:bg-shuttle-gray-50",
                    )}
                  >
                    {f}
                  </button>
                ))}
              </div>

              {/* Review cards */}
              <ul className="flex flex-col gap-4">
                {detail.reviews.map((review) => (
                  <li
                    key={review.id}
                    className="rounded-2xl border border-shuttle-gray-200 p-5"
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-3">
                        {/* Avatar placeholder */}
                        <span
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full type-label-s text-white"
                          style={{ backgroundColor: review.avatarColor }}
                        >
                          {review.author.charAt(0)}
                        </span>
                        <div>
                          <p className="type-label-s text-black">{review.author}</p>
                          <p className="type-body-xs text-shuttle-gray-400">{review.role}</p>
                        </div>
                      </div>
                      <span className="type-body-xs text-shuttle-gray-400 shrink-0">
                        {review.timeAgo}
                      </span>
                    </div>

                    {/* Stars */}
                    <div className="flex items-center gap-0.5 mb-3" aria-label={`Rated ${review.rating} out of 5`}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Icon
                          key={i}
                          name="starRounded"
                          size={16}
                          className={i < review.rating ? "text-electric-lime-400" : "text-shuttle-gray-200"}
                        />
                      ))}
                    </div>

                    <p className="type-body-s text-shuttle-gray-700">{review.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
