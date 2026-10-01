import type { Metadata } from "next";

import { AuthLayout } from "@/components/auth/AuthLayout";
import { SignUpForm } from "@/components/auth/SignUpForm";

export const metadata: Metadata = { title: "Create an Account" };

export default function SignUpPage() {
  return (
    <AuthLayout
      title="Sign up and come in"
      description="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost"
      showcaseReviewCountClassName="text-shuttle-gray-800"
    >
      <SignUpForm />
    </AuthLayout>
  );
}
