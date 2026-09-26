import type { Metadata } from "next";
import { SeoLanding } from "@/components/sections/SeoLanding";

export const metadata: Metadata = {
  title: "Lead Generation Specialist Pune",
  description: "Lead generation specialist in Pune for WhatsApp-first and form-based systems that can be qualified in a CRM.",
  alternates: { canonical: "/lead-generation-specialist-pune" },
};

export default function Page() {
  return <SeoLanding slug="lead-generation-specialist-pune" />;
}
