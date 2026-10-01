import Image, { type StaticImageData } from "next/image";

import { cn } from "@/lib/cn";

type AvatarStackProps = {
  avatars: StaticImageData[];
  /** Avatar diameter in px. */
  size: number;
  /** How much each avatar overlaps the previous one, in px. */
  overlap: number;
  /** Label of the trailing "+N" bubble. */
  count: string;
  /** Colors and typography of the bubble. */
  countClassName?: string;
  className?: string;
};

export function AvatarStack({ avatars, size, overlap, count, countClassName, className }: AvatarStackProps) {
  return (
    <div className={cn("flex shrink-0 items-start", className)}>
      {avatars.map((avatar, index) => (
        <Image
          key={avatar.src}
          src={avatar}
          alt=""
          width={size}
          height={size}
          className="shrink-0 rounded-full object-cover"
          style={{ width: size, height: size, marginLeft: index === 0 ? 0 : -overlap }}
        />
      ))}
      <span
        className={cn("flex shrink-0 items-center justify-center rounded-full", countClassName)}
        style={{ width: size, height: size, marginLeft: -overlap }}
      >
        {count}
      </span>
    </div>
  );
}
