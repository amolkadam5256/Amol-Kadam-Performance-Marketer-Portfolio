import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Amol Kadam",
  description: "Pune-based performance marketer working across Meta Ads, Google Ads, SEO, analytics and conversion systems.",
  alternates: { canonical: "/about-amol-kadam" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
