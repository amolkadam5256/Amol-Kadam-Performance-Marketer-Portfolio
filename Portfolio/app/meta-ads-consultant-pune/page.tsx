import type { Metadata } from "next";
import { SeoLanding } from "@/components/sections/SeoLanding";

export const metadata: Metadata = {
  title: "Meta Ads Consultant Pune",
  description: "Meta Ads consultant in Pune for Facebook and Instagram lead systems, WhatsApp capture and conversion tracking.",
  alternates: { canonical: "/meta-ads-consultant-pune" },
};

export default function Page() {
  return <SeoLanding slug="meta-ads-consultant-pune" />;
}
