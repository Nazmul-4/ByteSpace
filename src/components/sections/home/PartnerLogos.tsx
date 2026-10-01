import { PartnerLogo } from "@/components/brand/PartnerLogo";
import { partnerLogos } from "@/components/brand/partner-logo-paths";
import { Container } from "@/components/layout/Container";

export function PartnerLogos() {
  return (
    <section aria-label="Trusted by" className="bg-shuttle-gray-50">
      <Container>
        <ul className="flex flex-wrap items-end justify-center gap-x-12 gap-y-8 py-14 xl:h-[202px] xl:flex-nowrap xl:gap-[72px] xl:py-0 xl:pb-20">
          {partnerLogos.map((logo, index) => (
            <li key={index} className="shrink-0">
              <PartnerLogo logo={logo} label="Logoipsum" className="h-auto w-[130px] text-shuttle-gray-400 xl:w-auto" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
