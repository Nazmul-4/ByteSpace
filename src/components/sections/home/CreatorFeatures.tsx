import Image from "next/image";

import creatorPortraitShadow from "@/assets/images/people/creator-portrait-shadow.webp";
import creatorPortrait from "@/assets/images/people/creator-portrait.png";
import heroStudentShadow from "@/assets/images/people/hero-student-shadow.webp";
import heroStudent from "@/assets/images/people/hero-student.png";
import { CourseCard } from "@/components/cards/CourseCard";
import {
  HappyStudentsCard,
  LearningProgressCard,
  TotalRevenueCard,
  YearToDateCard,
} from "@/components/cards/StatCards";
import { Icon } from "@/components/icons/Icon";
import { CenteredStage } from "@/components/layout/CenteredStage";
import { Container } from "@/components/layout/Container";
import { GlowOrb } from "@/components/ui/GlowOrb";
import { Illustration } from "@/components/ui/Illustration";
import { Shape3D } from "@/components/ui/Shape3D";
import { getCourse } from "@/data/courses";

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const creatorBenefits = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export function CreatorFeatures() {
  return (
    <section aria-label="Why ByteSpace" className="relative isolate overflow-hidden bg-snow py-20 xl:py-[120px]">
      <CenteredStage>
        <GlowOrb tone="blue" size={1137} intensity={0.24} className="top-[788px] left-[722px]" />
        <GlowOrb tone="lime" size={1137} intensity={0.4} className="top-[-466px] left-[-152px]" />
        <GlowOrb tone="blue" size={1137} intensity={0.16} className="top-[183px] left-[-508px]" />
        <GlowOrb tone="blue" size={1137} intensity={0.08} className="top-[-458px] left-[811px]" />
        <GlowOrb tone="lime" size={672} intensity={0.6} className="top-[946px] left-[-287px]" />
      </CenteredStage>

      <Container className="relative flex flex-col gap-20 xl:gap-[72px]">
        {/* Growth: copy left, illustration right */}
        <div className="flex flex-col items-center gap-12 xl:flex-row xl:gap-[63px] xl:pl-px">
          {/* The illustration bleeds past the 1200px column in the design, so the copy must not shrink */}
          <div className="flex w-full max-w-[574px] flex-col gap-8 xl:shrink-0 xl:gap-10">
            <h2 className="type-heading-s text-shuttle-gray-950 md:type-heading-m">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="max-w-[477px] type-body-l text-shuttle-gray-700">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career
              journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new
              career path entirely, we have the resources you need.
            </p>
            <dl className="flex flex-wrap items-end gap-x-14 gap-y-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse">
                  <dt className="type-body-l text-shuttle-gray-700">{stat.label}</dt>
                  <dd className="type-display-xs text-persian-blue-800">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <Illustration width={621} height={552} scaleClassName="[--scale:0.52] sm:[--scale:0.9] md:[--scale:1]">
            <CourseCard
              course={getCourse("learn-figma-from-basic")}
              variant="showcase"
              headingLevel="h4"
              className="absolute top-0 left-0"
            />
            <Image
              src={heroStudentShadow}
              alt=""
              width={897}
              height={860}
              className="absolute top-[-148px] left-[-160px] max-w-none"
            />
            <Image src={heroStudent} alt="" width={577} height={540} className="absolute top-3 left-0 max-w-none" />
            <LearningProgressCard variant="showcase" className="absolute top-[213px] left-[345px]" />
            <Shape3D shape="spring-lime" size={215} className="top-[67px] left-[406px]" />
          </Illustration>
        </div>

        {/* Course creation: illustration left, copy right */}
        <div
          id="creators"
          className="flex scroll-mt-6 flex-col-reverse items-center gap-12 xl:flex-row xl:gap-[79px] xl:pl-px"
        >
          <Illustration width={541} height={596} scaleClassName="[--scale:0.6] sm:[--scale:1]">
            <TotalRevenueCard className="absolute top-11 left-0" />
            <YearToDateCard className="absolute top-[194px] left-0" />
            <Image
              src={creatorPortraitShadow}
              alt=""
              width={755}
              height={916}
              className="absolute top-[-160px] left-[-132px] max-w-none"
            />
            <Image
              src={creatorPortrait}
              alt=""
              width={435}
              height={596}
              className="absolute top-0 left-7 h-[596px] w-[435px] max-w-none"
            />
            <HappyStudentsCard variant="showcase" className="absolute top-[413px] left-[283px]" />
            <Shape3D shape="squiggle-lime" size={215} className="top-[114px] left-[305px]" />
          </Illustration>

          <div className="flex w-full max-w-[580px] flex-col gap-8 xl:shrink-0 xl:gap-10">
            <h2 className="max-w-[391px] type-heading-s text-shuttle-gray-950 md:type-heading-m">
              Create &amp; Manage Courses Easily.
            </h2>
            <p className="max-w-[574px] type-body-l text-shuttle-gray-700">
              <strong className="font-bold text-shuttle-gray-950">ByteSpace</strong> supports individuals or entities in
              the creation, publication, and administration of educational courses.
            </p>
            <ul className="flex flex-col gap-4">
              {creatorBenefits.map((benefit) => (
                <li key={benefit} className="flex items-end gap-2">
                  <Icon name="checkCircle" className="shrink-0 text-persian-blue-800" />
                  <span className="type-label-l text-shuttle-gray-950">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
