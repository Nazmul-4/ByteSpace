/**
 * Creator Profile page
 * Route: /creators/[handle]
 * Design reference: "Creator Profile.png"
 */

import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Container } from "@/components/layout/Container";
import { GridPattern, REGULAR_GRID_ROWS } from "@/components/ui/GridPattern";
import { CourseCard } from "@/components/cards/CourseCard";
import { Icon } from "@/components/icons/Icon";
import { courses } from "@/data/courses";
import { Button } from "@/components/ui/Button";

/** Minimal creator record — extend with a real data layer as needed. */
type Creator = {
  handle: string;
  name: string;
  badge: string;
  tagline: string;
  bio: string;
  products: number;
  followers: number;
  avatarColor: string;
};

const creators: Creator[] = [
  {
    handle: "purepearl-studio",
    name: "PurePearl Studio",
    badge: "Creator",
    tagline: "Passionate UI/UX, Web designer",
    bio: "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!\n\nDive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
    products: 3,
    followers: 12,
    avatarColor: "#E8B89A",
  },
];

const getCreator = (handle: string) =>
  creators.find((c) => c.handle === handle);

type PageProps = { params: Promise<{ handle: string }> };

export async function generateStaticParams() {
  return creators.map((c) => ({ handle: c.handle }));
}

export async function generateMetadata({ params }: PageProps) {
  const { handle } = await params;
  const creator = getCreator(handle);
  return { title: creator?.name ?? "Creator Profile" };
}

export default async function CreatorProfilePage({ params }: PageProps) {
  const { handle } = await params;
  const creator = getCreator(handle);
  if (!creator) notFound();

  return (
    <>
      <SiteHeader currentPath="/creators" />
      <main>
        {/* Blue hero */}
        <section className="relative bg-persian-blue-800 pt-[120px] pb-12 overflow-hidden">
          <GridPattern rows={REGULAR_GRID_ROWS} />
          <Container className="relative z-10">
            <div className="flex items-start gap-6">
              {/* Avatar */}
              <span
                className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl type-heading-xs text-white"
                style={{ backgroundColor: creator.avatarColor }}
              >
                {creator.name.charAt(0)}
              </span>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <h1 className="type-heading-xs text-white">{creator.name}</h1>
                  <span className="rounded-3xl bg-electric-lime-400 px-3 py-1 type-label-xs text-shuttle-gray-950">
                    {creator.badge}
                  </span>
                </div>
                <p className="type-body-s text-shuttle-gray-300 mb-4">{creator.tagline}</p>

                {creator.bio.split("\n\n").map((para, i) => (
                  <p key={i} className="type-body-s text-shuttle-gray-200 mb-2 max-w-[860px]">
                    {para}
                  </p>
                ))}

                <div className="mt-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-2 rounded-3xl border border-white/30 px-4 py-2 type-body-s text-white">
                      {creator.products} Products
                    </span>
                    <span className="flex items-center gap-2 rounded-3xl border border-white/30 px-4 py-2 type-body-s text-white">
                      {creator.followers} Followers
                    </span>
                  </div>
                  <Button>Follow</Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Courses section */}
        <section className="bg-white py-10">
          <Container>
            {/* Filter bar */}
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {["Filter", "Level", "Category"].map((label, i) => (
                  <button
                    key={label}
                    type="button"
                    className="flex items-center gap-1.5 rounded-3xl border border-shuttle-gray-200 px-4 py-2 type-body-xs text-shuttle-gray-700 transition-colors hover:bg-shuttle-gray-50"
                  >
                    {i === 0 && <Icon name="designTools" size={16} />}
                    {i === 1 && <Icon name="signalCellular" size={16} />}
                    {i === 2 && <Icon name="business" size={16} />}
                    {label}
                  </button>
                ))}
              </div>
              <button
                type="button"
                className="flex items-center gap-1.5 rounded-3xl border border-shuttle-gray-200 px-4 py-2 type-body-xs text-shuttle-gray-700 transition-colors hover:bg-shuttle-gray-50"
              >
                <Icon name="signalCellular" size={16} />
                Most relevant
              </button>
            </div>

            {/* Course grid */}
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <li key={course.slug}>
                  <CourseCard course={course} headingLevel="h3" />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
