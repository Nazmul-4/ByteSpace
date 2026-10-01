import type { SVGProps } from "react";

import { iconPaths, type IconDefinition, type IconName } from "./icon-paths";

type IconProps = Omit<SVGProps<SVGSVGElement>, "children"> & {
  name: IconName;
  /** Rendered width and height in px. */
  size?: number;
  /** Accessible label. Icons are decorative (hidden from assistive tech) unless a title is given. */
  title?: string;
};

export function Icon({ name, size = 24, title, ...props }: IconProps) {
  const { viewBox, paths }: IconDefinition = iconPaths[name];
  return (
    <svg
      viewBox={viewBox}
      width={size}
      height={size}
      fill="currentColor"
      focusable="false"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {paths.map((path) => (
        <path key={path.d} d={path.d} fillRule={path.fillRule} />
      ))}
    </svg>
  );
}
