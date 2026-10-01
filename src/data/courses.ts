import type { StaticImageData } from "next/image";

import bigData from "@/assets/images/courses/big-data.jpg";
import digitalAsset from "@/assets/images/courses/digital-asset.jpg";
import learnFigma from "@/assets/images/courses/learn-figma.jpg";
import moneyManagement from "@/assets/images/courses/money-management.jpg";
import productivity from "@/assets/images/courses/productivity.jpg";
import startupSuccess from "@/assets/images/courses/startup-success.jpg";

export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export type Course = {
  slug: string;
  title: string;
  author: string;
  image: StaticImageData;
  lessons: number;
  duration: string;
  comments: number;
  level: CourseLevel;
  price: number;
  rating: number;
  enrolled: string;
};

const defaults = {
  author: "purepearl studio",
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  level: "Beginner",
  price: 25,
  rating: 4.5,
  enrolled: "26+",
} satisfies Partial<Course>;

export const courses: Course[] = [
  { ...defaults, slug: "learn-figma-from-basic", title: "Learn Figma from Basic", image: learnFigma },
  { ...defaults, slug: "build-digital-asset", title: "Build Digital Asset", image: digitalAsset },
  { ...defaults, slug: "the-power-of-big-data", title: "the Power of Big Data", image: bigData },
  {
    ...defaults,
    slug: "balancing-productivity-and-self-care",
    title: "Balancing Productivity and Self-Care",
    image: productivity,
  },
  { ...defaults, slug: "mastering-money-management", title: "Mastering Money Management", image: moneyManagement },
  { ...defaults, slug: "from-idea-to-startup-success", title: "From Idea to Startup Success", image: startupSuccess },
];

export const getCourse = (slug: string) => {
  const course = courses.find((c) => c.slug === slug);
  if (!course) throw new Error(`Unknown course: ${slug}`);
  return course;
};
