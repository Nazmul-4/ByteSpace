import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { CourseCatalog } from "@/components/sections/home/CourseCatalog";
import { CreatorCta } from "@/components/sections/home/CreatorCta";
import { CreatorFeatures } from "@/components/sections/home/CreatorFeatures";
import { Hero } from "@/components/sections/home/Hero";
import { LearningPaths } from "@/components/sections/home/LearningPaths";
import { PartnerLogos } from "@/components/sections/home/PartnerLogos";
import { Testimonials } from "@/components/sections/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <SiteHeader currentPath="/" />
      <main>
        <Hero />
        <PartnerLogos />
        <CourseCatalog />
        <LearningPaths />
        <CreatorFeatures />
        <CreatorCta />
        <Testimonials />
      </main>
      <SiteFooter />
    </>
  );
}
