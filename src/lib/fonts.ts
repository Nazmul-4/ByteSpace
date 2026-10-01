import { Poppins } from "next/font/google";
import localFont from "next/font/local";

/** Headings: Poppins (Google Fonts) */
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

/**
 * Body copy and labels: Satoshi by Indian Type Foundry (Fontshare).
 * The files are fetched by `scripts/fetch-fonts.mjs` rather than committed (see the script for why).
 */
export const satoshi = localFont({
  src: [
    { path: "../fonts/satoshi/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/satoshi/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "../fonts/satoshi/Satoshi-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});
