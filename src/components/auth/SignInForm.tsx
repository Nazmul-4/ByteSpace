"use client";

import Link from "next/link";
import type { FormEvent } from "react";

import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/TextField";

import { SocialSignIn } from "./SocialSignIn";

// Front-end only: there is no backend, so submitting just stays on the page.
const preventSubmit = (event: FormEvent<HTMLFormElement>) => event.preventDefault();

export function SignInForm() {
  return (
    <div className="flex flex-col gap-12 sm:gap-[73px]">
      <div className="flex flex-col gap-10">
        <div>
          <p className="type-body-l text-persian-blue-800">Sign In</p>
          <h1 className="type-heading-s text-shuttle-gray-950 sm:type-heading-m">Welcome Back</h1>
        </div>
        <form onSubmit={preventSubmit} className="flex flex-col items-end gap-6">
          <TextField
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="designer@example.com"
            required
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            autoComplete="current-password"
            placeholder="********"
            required
          />
          <Button type="submit">Sign In</Button>
        </form>
      </div>

      <SocialSignIn action="Sign in" />

      <p className="flex flex-wrap justify-center gap-1 type-body-m">
        <span className="text-black-400">New user?</span>
        <Link href="/signup" className="text-persian-blue-800 hover:underline">
          Create an account
        </Link>
      </p>
    </div>
  );
}
