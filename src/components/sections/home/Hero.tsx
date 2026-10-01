import Image from "next/image";

import heroStudentShadow from "@/assets/images/people/hero-student-shadow.webp";
import heroStudent from "@/assets/images/people/hero-student.png";
import { CourseSummaryCard, HappyStudentsCard, LearningProgressCard } from "@/components/cards/StatCards";
import { CenteredStage } from "@/components/layout/CenteredStage";
import { Container } from "@/components/layout/Container";
import { GridPattern } from "@/components/ui/GridPattern";
import { Shape3D } from "@/components/ui/Shape3D";

import { HeroSearch } from "./HeroSearch";

/** Horizontal grid lines as placed in the design (the fifth one sits at 606px, not 600px). */
const HERO_GRID_ROWS = [120, 240, 360, 480, 606, 720, 840, 960];

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-persian-blue-800">
      <GridPattern rows={HERO_GRID_ROWS} />

      {/*
        3D ornaments, positioned on the 1440px frame. As in the design they sit above the lime arc;
        they never overlap the copy, the student or the cards, and they don't take pointer events.
      */}
      <CenteredStage className="z-10 hidden md:block">
        <Shape3D shape="squiggle-lime" size={385} className="top-[221px] left-[-118px]" preload />
        <Shape3D shape="squiggle-white" size={175} mirrored className="top-[477px] left-[183px]" />
        <Shape3D shape="torus-white" size={342} className="top-[682px] left-[18px]" />
        <Shape3D shape="cylinder-lime" size={370} className="top-[221px] left-[1231px]" preload />
        <Shape3D shape="pyramid-white" size={188} className="top-[464px] left-[1106px]" />
        <Shape3D shape="spring-white" size={330} className="top-[672px] left-[1127px]" />
      </CenteredStage>

      <Container className="relative pt-32 lg:pt-[169px]">
        <div className="mx-auto flex max-w-[935px] flex-col items-center gap-6 text-center lg:gap-8">
          <h1 id="hero-title" className="type-heading-s text-white sm:type-heading-m lg:type-heading-l">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="type-body-m text-shuttle-gray-100 sm:type-body-l">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>
        </div>
        <HeroSearch className="mx-auto mt-10 lg:mt-[60px]" />
      </Container>

      <HeroIllustration />
    </section>
  );
}

/**
 * The student, lime arc and floating stat cards: the lower 512px of the 1440px hero frame.
 * Rendered at design size on desktop and scaled down (from the top center) on smaller screens.
 */
function HeroIllustration() {
  return (
    <div
      aria-hidden
      className="relative mx-auto mt-6 h-[calc(512px*var(--hero-scale))] [--hero-scale:0.46] sm:[--hero-scale:0.7] md:[--hero-scale:0.82] lg:-mt-0.5 lg:[--hero-scale:1]"
    >
      <div className="absolute top-0 left-1/2 h-[512px] w-[1440px] origin-top -translate-x-1/2 scale-(--hero-scale)">
        {/* Lime arc: a 1149px circle with a 320px inside stroke */}
        <div className="absolute top-[70px] left-[145px] size-[1149px] rounded-full border-[320px] border-electric-lime-500" />
        <Image
          src={heroStudentShadow}
          alt=""
          width={898}
          height={861}
          className="absolute top-[-160px] left-[271px] max-w-none"
        />
        <Image
          src={heroStudent}
          alt=""
          width={578}
          height={541}
          loading="eager"
          fetchPriority="high"
          className="absolute top-0 left-[431px] max-w-none"
        />
        <LearningProgressCard className="absolute top-[139px] left-[842px]" />
        <HappyStudentsCard className="absolute top-[325px] left-[328px]" />
        <CourseSummaryCard className="absolute top-[127px] left-[404px]" />
      </div>
    </div>
  );
}
