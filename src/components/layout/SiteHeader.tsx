import Link from "next/link";

import { Logo } from "@/components/brand/Logo";
import { Icon } from "@/components/icons/Icon";
import { authNav, primaryNav } from "@/data/navigation";
import { cn } from "@/lib/cn";

import { Container } from "./Container";
import { MobileMenu } from "./MobileMenu";

const linkClassName = "text-shuttle-gray-50 transition-colors duration-200 hover:text-electric-lime-400";

/** Transparent header laid over the blue hero. The current page is set in Label M (medium). */
export function SiteHeader({ currentPath = "/" }: { currentPath?: string }) {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <Container className="relative flex h-[88px] items-start justify-between lg:h-[120px]">
        <Link href="/" aria-label="ByteSpace home" className="relative z-50 mt-6 lg:mt-[35px] lg:ml-0.5">
          <Logo variant="light" className="h-[30px] w-auto lg:h-[37px]" />
        </Link>

        <nav aria-label="Primary" className="absolute top-[47px] left-1/2 hidden -translate-x-1/2 lg:block">
          <ul className="flex items-start gap-6">
            {primaryNav.map((item) => {
              const isCurrent = item.href === currentPath;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isCurrent ? "page" : undefined}
                    className={cn("block", isCurrent ? "type-label-m" : "type-body-m", linkClassName)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-12 hidden items-start gap-6 lg:flex">
          <Link href={authNav.signIn.href} className={cn("type-body-m leading-6", linkClassName)}>
            {authNav.signIn.label}
          </Link>
          <Link href={authNav.signUp.href} className={cn("type-body-m leading-6", linkClassName)}>
            {authNav.signUp.label}
          </Link>
          <button type="button" aria-label="Shopping cart" className={cn("size-6", linkClassName)}>
            <Icon name="shoppingBag" />
          </button>
        </div>

        <MobileMenu currentPath={currentPath} className="mt-5 lg:hidden" />
      </Container>
    </header>
  );
}
