/**
 * Extended course detail data used across the course detail pages
 * (About, Lessons, Reviews).
 */

export type CourseModule = {
  id: string;
  title: string;
  description: string;
};

export type LessonListItem = {
  id: string;
  title: string;
  duration: string;
};

export type ReviewItem = {
  id: string;
  author: string;
  role: string;
  /** Avatar placeholder color */
  avatarColor: string;
  rating: number;
  text: string;
  timeAgo: string;
};

export type CourseDetail = {
  slug: string;
  fullTitle: string;
  subtitle: string;
  author: string;
  level: string;
  rating: number;
  reviewCount: number;
  students: number;
  videoPreviewSrc?: string;
  lessonCount: number;
  totalHours: number;
  previewLessons: LessonListItem[];
  price: number;
  includes: string[];
  description: string;
  sneakPeakImages: string[];
  keyPoints: string[];
  modules: CourseModule[];
  lessonProgress: number;
  ratingBreakdown: { stars: number; count: number }[];
  overallRating: number;
  reviews: ReviewItem[];
};

export const digitalAssetDetail: CourseDetail = {
  slug: "build-digital-asset",
  fullTitle: "Build Digital Asset: A Comprehensive Guide",
  subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
  author: "purepearl studio",
  level: "Intermediate",
  rating: 4.8,
  reviewCount: 172,
  students: 199,
  lessonCount: 112,
  totalHours: 24,
  price: 25,
  previewLessons: [
    { id: "01", title: "Introduction to Digital Assets", duration: "12 mins" },
    { id: "02", title: "Design Principles for Impacts", duration: "21 mins" },
    {
      id: "03",
      title: "Advanced Techniques in Digital Creation",
      duration: "16 mins",
    },
  ],
  includes: [
    "Learning Resources",
    "Quality Lesson Videos",
    "Certificate of Completion",
    "Private Consultation",
  ],
  description:
    "Embark on an enlightening exploration into the world of digital creation with our comprehensive course, \u201cBuild Digital Assets: A Comprehensive Guide.\u201d This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.\n\nIn the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.\n\nAs you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
  sneakPeakImages: [],
  keyPoints: [
    "Foundational Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio",
  ],
  modules: [
    {
      id: "1",
      title: "Module 1: Introduction to Digital Assets",
      description:
        "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
    },
    {
      id: "2",
      title: "Module 2: Design Principles for Impact",
      description:
        "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
    },
    {
      id: "4",
      title: "Module 4: User-Centric Design Strategies",
      description:
        "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
    },
    {
      id: "5",
      title: "Module 5: Interactive Media and Engagement",
      description:
        "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
    },
    {
      id: "6",
      title: "Module 6: Project Showcase and Critique",
      description:
        "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
    },
    {
      id: "7",
      title: "Module 7: Optimizing Digital Assets for Various Platforms",
      description:
        "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
    },
  ],
  lessonProgress: 55,
  overallRating: 4.7,
  ratingBreakdown: [
    { stars: 5, count: 720 },
    { stars: 4, count: 120 },
    { stars: 3, count: 21 },
    { stars: 2, count: 12 },
    { stars: 1, count: 16 },
  ],
  reviews: [
    {
      id: "1",
      author: "PurePearl Studio",
      role: "UI/UX Designer",
      avatarColor: "#E8D5C0",
      rating: 5,
      text: '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
      timeAgo: "a year ago",
    },
    {
      id: "2",
      author: "Albert Flores",
      role: "UI/UX Designer",
      avatarColor: "#C0D5E8",
      rating: 5,
      text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world feedback made it a truly enriching experience. Excited to implement what I've learned!",
      timeAgo: "a year ago",
    },
    {
      id: "3",
      author: "Cody Fisher",
      role: "UI/UX Designer",
      avatarColor: "#D5C0E8",
      rating: 5,
      text: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
      timeAgo: "a year ago",
    },
    {
      id: "4",
      author: "Brooklyn Simmons",
      role: "UI/UX Designer",
      avatarColor: "#C0E8D5",
      rating: 5,
      text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
      timeAgo: "a year ago",
    },
  ],
};

/** Map of all detailed course data, keyed by slug. */
export const courseDetails: Record<string, CourseDetail> = {
  "build-digital-asset": digitalAssetDetail,
};

export const getCourseDetail = (slug: string): CourseDetail | undefined =>
  courseDetails[slug];
