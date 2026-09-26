import type { Metadata } from "next";
import { SeoLanding } from "@/components/sections/SeoLanding";

export const metadata: Metadata = {
  title: "Performance Marketer Pune",
  description: "Performance marketer in Pune connecting Meta, Google, SEO, landing pages and tracking into one operating system.",
  alternates: { canonical: "/performance-marketer-pune" },
};

export default function Page() {
  return <SeoLanding slug="performance-marketer-pune" />;
}
