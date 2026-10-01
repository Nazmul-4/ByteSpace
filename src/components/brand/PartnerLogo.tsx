import type { PartnerLogoDefinition } from "./partner-logo-paths";

type PartnerLogoProps = { logo: PartnerLogoDefinition; label: string; className?: string };

export function PartnerLogo({ logo, label, className }: PartnerLogoProps) {
  return (
    <svg
      viewBox={`0 0 ${logo.width} ${logo.height}`}
      width={logo.width}
      height={logo.height}
      fill="currentColor"
      role="img"
      aria-label={label}
      className={className}
    >
      {logo.paths.map((path) => (
        <path key={path.d} d={path.d} fillRule={path.fillRule} />
      ))}
    </svg>
  );
}
