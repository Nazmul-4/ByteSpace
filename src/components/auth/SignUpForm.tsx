"use client";

import Link from "next/link";
import type { FormEvent } from "react";

import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/TextField";

// Front-end only: there is no backend, so submitting just stays on the page.
const preventSubmit = (event: FormEvent<HTMLFormElement>) => event.preventDefault();

export function SignUpForm() {
  return (
    <div className="flex flex-col gap-12 sm:gap-[122px]">
      <div className="flex flex-col gap-10">
        <div>
          <p className="type-body-l text-persian-blue-800">Create an Account</p>
          <h1 className="type-heading-s text-shuttle-gray-950 sm:type-heading-m">Welcome to ByteSpace</h1>
        </div>
        <form onSubmit={preventSubmit} className="flex flex-col items-end gap-6">
          <TextField label="Full Name" name="name" autoComplete="name" placeholder="Jamie Davis" required />
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
            autoComplete="new-password"
            placeholder="********"
            required
          />
          <Button type="submit">Continue</Button>
        </form>
      </div>

      <p className="flex flex-wrap justify-center gap-1 type-body-m">
        <span className="text-shuttle-gray-700">Already have an account?</span>
        <Link href="/login" className="text-persian-blue-800 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}
