import type { Metadata } from "next";

import { AuthLayout } from "@/components/auth/AuthLayout";
import { SignInForm } from "@/components/auth/SignInForm";

export const metadata: Metadata = { title: "Sign In" };

export default function LoginPage() {
  return (
    <AuthLayout
      title="Sign in with ease"
      description="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <SignInForm />
    </AuthLayout>
  );
}
