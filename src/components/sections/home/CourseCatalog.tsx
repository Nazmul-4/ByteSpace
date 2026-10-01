import { CourseCard } from "@/components/cards/CourseCard";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { topicRows } from "@/data/catalog";
import { courses } from "@/data/courses";

import { TopicFilter } from "./TopicFilter";

export function CourseCatalog() {
  return (
    <section id="courses" aria-labelledby="courses-title" className="scroll-mt-6 pt-16 xl:pt-[72px]">
      <Container>
        <SectionHeading
          id="courses-title"
          title="Discover Your Passion, Build Your Skills"
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
          titleClassName="max-w-[588px]"
        />
        <TopicFilter rows={topicRows} className="mt-10 xl:mt-[42px]" />
        <ul className="mt-12 grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 md:gap-10 xl:mt-[77px] xl:grid-cols-[repeat(3,373px)] xl:justify-items-start">
          {courses.map((course) => (
            <li key={course.slug} className="w-full max-w-[373px]">
              <CourseCard course={course} href={`/courses/${course.slug}`} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

