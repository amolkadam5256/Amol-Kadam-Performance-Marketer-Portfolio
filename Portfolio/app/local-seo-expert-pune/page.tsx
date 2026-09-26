import type { Metadata } from "next";
import { SeoLanding } from "@/components/sections/SeoLanding";

export const metadata: Metadata = {
  title: "Local SEO Expert Pune",
  description: "Local SEO expert in Pune for Google Business Profile, Map Pack visibility and nearby customer conversion.",
  alternates: { canonical: "/local-seo-expert-pune" },
};

export default function Page() {
  return <SeoLanding slug="local-seo-expert-pune" />;
}
