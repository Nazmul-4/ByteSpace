import type { Metadata, Viewport } from "next";

import { poppins, satoshi } from "@/lib/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ByteSpace | Online Courses",
    template: "%s | ByteSpace",
  },
  description:
    "Get access to hundreds of courses. Unlock your creativity, gain valuable knowledge, and grow your business with ByteSpace.",
};

export const viewport: Viewport = {
  themeColor: "#003be2",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} ${satoshi.variable}`}>
      <body className="bg-white text-shuttle-gray-950">{children}</body>
    </html>
  );
}
