import type { IconName } from "@/components/icons/icon-paths";

/** Topic filters above the course grid, grouped in the same rows as the design. */
export const topicRows: string[][] = [
  [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
  ],
  ["Digital Illustration", "Film & Video", "Crafts", "Freelance & Entrepreneurship", "Graphic Design", "Photography"],
  ["Productivity", "Web Development", "Data Science", "Cooking"],
];

export type LearningPath = { label: string; icon: IconName; href: string };

export const learningPaths: LearningPath[] = [
  { label: "Design", icon: "designTools", href: "#courses" },
  { label: "Development", icon: "developerMode", href: "#courses" },
  { label: "IT & Software", icon: "computer", href: "#courses" },
  { label: "Business", icon: "business", href: "#courses" },
  { label: "Marketing", icon: "connect", href: "#courses" },
  { label: "Photography", icon: "cameraFront", href: "#courses" },
];
