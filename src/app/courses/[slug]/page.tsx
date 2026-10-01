/**
 * Course Detail – About tab
 * Route: /courses/[slug]
 * Design reference: "Course Details.png"
 */

import { notFound } from "next/navigation";
import Image from "next/image";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Container } from "@/components/layout/Container";
import { GridPattern, REGULAR_GRID_ROWS } from "@/components/ui/GridPattern";
import { Icon } from "@/components/icons/Icon";
import { CourseDetailHeader, CourseDetailTabs } from "@/components/sections/course/CourseDetailHeader";
import { CourseDetailSidebar } from "@/components/sections/course/CourseDetailSidebar";
import { CourseVideoPlayer } from "@/components/sections/course/CourseVideoPlayer";
import { getCourseDetail } from "@/data/course-detail";
import { courses } from "@/data/courses";

import digitalAsset from "@/assets/images/courses/digital-asset.jpg";
import learnFigma from "@/assets/images/courses/learn-figma.jpg";
import bigData from "@/assets/images/courses/big-data.jpg";
import productivity from "@/assets/images/courses/productivity.jpg";

const sneakPeakImages = [digitalAsset, learnFigma, bigData, productivity];

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const detail = getCourseDetail(slug);
  return { title: detail?.fullTitle ?? "Course" };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const detail = getCourseDetail(slug);

  // Fall back for courses without extended data — use generic data
  if (!detail) notFound();

  return (
    <>
      <SiteHeader currentPath="/courses" />
      <main>
        {/* Blue hero with header + video */}
        <section className="relative bg-persian-blue-800 pt-[120px] pb-10 overflow-hidden">
          <GridPattern rows={REGULAR_GRID_ROWS} />
          <Container className="relative z-10">
            <CourseDetailHeader detail={detail} activeTab="about" />

            {/* Two-column layout: video + sidebar */}
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
            {/* Tab nav */}
            <CourseDetailTabs activeTab="about" slug={slug} />

            {/* About content — left column only (sidebar is sticky above on mobile) */}
            <div className="mt-8 max-w-[740px]">
              {/* Description */}
              <h2 className="type-heading-xs text-black mb-4">Description</h2>
              {detail.description.split("\n\n").map((para, i) => (
                <p key={i} className="type-body-s text-shuttle-gray-700 mb-4">
                  {para}
                </p>
              ))}

              {/* Sneak Peek */}
              <h2 className="type-heading-xs text-black mt-8 mb-4">Sneak Peak</h2>
              <div className="grid grid-cols-4 gap-3">
                {sneakPeakImages.map((img, i) => (
                  <div key={i} className="relative aspect-square overflow-hidden rounded-xl">
                    <Image src={img} alt="" fill className="object-cover" sizes="200px" />
                  </div>
                ))}
              </div>

              {/* Key Points */}
              <h2 className="type-heading-xs text-black mt-8 mb-4">Key Points</h2>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {detail.keyPoints.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <Icon name="checkCircle" size={20} className="text-persian-blue-800 shrink-0" />
                    <span className="type-body-s text-shuttle-gray-700">{point}</span>
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
