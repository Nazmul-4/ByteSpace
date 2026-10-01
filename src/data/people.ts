import type { StaticImageData } from "next/image";

import alex from "@/assets/images/avatars/alex.png";
import james from "@/assets/images/avatars/james.png";
import learner1 from "@/assets/images/avatars/learner-1.png";
import learner2 from "@/assets/images/avatars/learner-2.png";
import sarah from "@/assets/images/avatars/sarah.png";
import student1 from "@/assets/images/avatars/student-1.png";
import student2 from "@/assets/images/avatars/student-2.png";
import student3 from "@/assets/images/avatars/student-3.png";
import student4 from "@/assets/images/avatars/student-4.png";
import student5 from "@/assets/images/avatars/student-5.png";
import student6 from "@/assets/images/avatars/student-6.png";
import student7 from "@/assets/images/avatars/student-7.png";

/** Faces shown in the "Happy Students" widgets. */
export const happyStudents: StaticImageData[] = [student1, student2, student3, student4, student5, student6, student7];

/** Faces shown on course cards ("26+ enrolled"). */
export const courseLearners: StaticImageData[] = [student2, learner1, sarah, learner2];

export const testimonialAvatars = { sarah, james, alex };
