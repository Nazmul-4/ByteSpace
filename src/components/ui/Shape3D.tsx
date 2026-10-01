import Image from "next/image";

import coneWhite from "@/assets/images/shapes/cone-white.webp";
import cylinderLime from "@/assets/images/shapes/cylinder-lime.webp";
import cylinderWhite from "@/assets/images/shapes/cylinder-white.webp";
import pyramidLime from "@/assets/images/shapes/pyramid-lime.webp";
import pyramidWhite from "@/assets/images/shapes/pyramid-white.webp";
import springLime from "@/assets/images/shapes/spring-lime.webp";
import springWhite from "@/assets/images/shapes/spring-white.webp";
import squiggleLime from "@/assets/images/shapes/squiggle-lime.webp";
import squiggleWhite from "@/assets/images/shapes/squiggle-white.webp";
import torusLime from "@/assets/images/shapes/torus-lime.webp";
import torusWhite from "@/assets/images/shapes/torus-white.webp";
import { cn } from "@/lib/cn";

const SHAPES = {
  "cone-white": coneWhite,
  "cylinder-lime": cylinderLime,
  "cylinder-white": cylinderWhite,
  "pyramid-lime": pyramidLime,
  "pyramid-white": pyramidWhite,
  "spring-lime": springLime,
  "spring-white": springWhite,
  "squiggle-lime": squiggleLime,
  "squiggle-white": squiggleWhite,
  "torus-lime": torusLime,
  "torus-white": torusWhite,
} as const;

export type ShapeName = keyof typeof SHAPES;

type Shape3DProps = {
  shape: ShapeName;
  /** Edge length in px (the shapes are square). */
  size: number;
  /** Horizontally flipped, as some instances are in the design. */
  mirrored?: boolean;
  /** Position/offset classes. */
  className?: string;
  preload?: boolean;
};

/** Decorative 3D ornament (tinted render exported from the Figma file). */
export function Shape3D({ shape, size, mirrored, className, preload }: Shape3DProps) {
  return (
    <Image
      src={SHAPES[shape]}
      alt=""
      aria-hidden
      width={size}
      height={size}
      draggable={false}
      preload={preload}
      className={cn("pointer-events-none absolute max-w-none select-none", mirrored && "-scale-x-100", className)}
    />
  );
}
