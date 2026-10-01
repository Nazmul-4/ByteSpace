/**
 * Video player placeholder used in the course detail pages.
 * In production this would be replaced with an actual video player.
 */

import Image from "next/image";
import creatorPortrait from "@/assets/images/people/creator-portrait.png";

export function CourseVideoPlayer() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-black aspect-video max-h-[390px]">
      {/* Thumbnail image */}
      <Image
        src={creatorPortrait}
        alt="Course preview"
        fill
        className="object-cover opacity-70"
        sizes="(max-width: 1024px) 100vw, 700px"
      />

      {/* Play button */}
      <button
        type="button"
        aria-label="Play course preview video"
        className="absolute inset-0 flex items-center justify-center group"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/80 transition-all duration-200 group-hover:bg-white group-hover:scale-110">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-7 w-7 translate-x-0.5 text-shuttle-gray-950"
            aria-hidden
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </button>
    </div>
  );
}
