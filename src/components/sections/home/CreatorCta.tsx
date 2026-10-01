import { CenteredStage } from "@/components/layout/CenteredStage";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { GridPattern, REGULAR_GRID_ROWS } from "@/components/ui/GridPattern";
import { Shape3D } from "@/components/ui/Shape3D";

export function CreatorCta() {
  return (
    <section aria-labelledby="cta-title" className="relative isolate overflow-hidden bg-persian-blue-800">
      <GridPattern rows={REGULAR_GRID_ROWS} />

      <Container className="relative flex flex-col items-center py-24 text-center xl:h-[488px] xl:py-0 xl:pt-[85px]">
        <h2 id="cta-title" className="max-w-[710px] type-heading-s text-shuttle-gray-50 md:type-heading-m">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="mt-8 max-w-[964px] type-body-m text-shuttle-gray-50 md:type-body-l xl:mt-10">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and
          become a part of a community comprising over 10,000 local and international creators. Utilize our Course
          Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <ButtonLink href="/signup" className="mt-8 xl:mt-10">
          Join as Creator
        </ButtonLink>
      </Container>

      {/* 3D ornaments, above the copy as in the design */}
      <CenteredStage className="hidden md:block">
        <Shape3D shape="pyramid-lime" size={188} className="top-0 left-[1080px]" />
        <Shape3D shape="spring-lime" size={330} className="top-[289px] left-[1110px]" />
        <Shape3D shape="squiggle-lime" size={385} className="top-[-162px] left-[-118px]" />
        <Shape3D shape="squiggle-white" size={175} mirrored className="top-[5px] left-[178px]" />
        <Shape3D shape="cone-white" size={188} className="top-[225px] left-[-48px]" />
        <Shape3D shape="torus-lime" size={342} className="top-[299px] left-5" />
        <Shape3D shape="cylinder-white" size={370} className="top-[6px] left-[1226px]" />
      </CenteredStage>
    </section>
  );
}
