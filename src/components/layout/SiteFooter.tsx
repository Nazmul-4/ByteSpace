import Link from "next/link";

import { Logo } from "@/components/brand/Logo";
import { footerColumns, legalLinks } from "@/data/navigation";

import { Container } from "./Container";
import { NewsletterForm } from "./NewsletterForm";

const linkClassName = "text-shuttle-gray-950 transition-colors duration-200 hover:text-persian-blue-800";

export function SiteFooter() {
  return (
    <footer className="border-t border-shuttle-gray-200 bg-white">
      <Container className="pt-16 pb-12 xl:pt-[70px]">
        <div className="flex flex-col gap-12 xl:flex-row xl:gap-[92px]">
          <div className="flex w-full max-w-[528px] flex-col gap-[45px]">
            <div className="flex flex-col gap-4">
              <Link href="/" aria-label="ByteSpace home" className="self-start">
                <Logo variant="dark" />
              </Link>
              <p className="type-body-s text-shuttle-gray-950">
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>
            </div>
            <NewsletterForm />
          </div>

          {/* Column titles are not visible in the design; they stay available to assistive tech. */}
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-8 sm:grid-cols-3 xl:flex xl:gap-10">
            {footerColumns.map((column) => (
              <div key={column.title} className="xl:w-[167px] xl:last:w-auto">
                <h2 className="sr-only">{column.title}</h2>
                {/* Text style on the list so each row's line box is exactly 22px */}
                <ul className="flex flex-col gap-4 type-body-s xl:mt-12">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className={linkClassName}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col-reverse gap-4 border-t border-shuttle-gray-200 pt-[22px] sm:flex-row sm:items-start sm:justify-between xl:mt-[130px]">
          <p className="type-body-xs text-shuttle-gray-950">@ 2023 ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 type-body-xs">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={linkClassName}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
