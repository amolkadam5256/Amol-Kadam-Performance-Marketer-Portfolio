import type { Metadata } from "next";
import { SeoLanding } from "@/components/sections/SeoLanding";

export const metadata: Metadata = {
  title: "SEO Consultant Pune",
  description: "SEO consultant in Pune for technical, on-page and commercial search that can be measured against enquiries.",
  alternates: { canonical: "/seo-consultant-pune" },
};

export default function Page() {
  return <SeoLanding slug="seo-consultant-pune" />;
}
