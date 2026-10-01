import { CategoryCard } from "@/components/cards/CategoryCard";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { learningPaths } from "@/data/catalog";

export function LearningPaths() {
  return (
    <section
      id="categories"
      aria-labelledby="paths-title"
      className="scroll-mt-6 pt-16 pb-20 xl:pt-[72px] xl:pb-[120px]"
    >
      <Container>
        <SectionHeading
          id="paths-title"
          size="s"
          title="Explore Diverse Learning Paths at Bytespace"
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />
        <ul className="mx-auto mt-12 flex max-w-[549px] flex-wrap justify-center gap-4 sm:gap-6 xl:mt-[68px] xl:max-w-none xl:flex-nowrap xl:gap-10">
          {learningPaths.map((path) => (
            <li key={path.label}>
              <CategoryCard path={path} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
