import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "Onahi Ijeh — Creative Director & Curator",
  description: "Creative Director, Curator, and Founder of Afronated. Amplifying African voices through powerful storytelling, media, and cultural excellence.",
  openGraph: {
    title: "Onahi Ijeh — Creative Director & Curator",
    description: "Amplifying African voices through powerful storytelling, media, and cultural excellence.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="grain" aria-hidden="true" />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
