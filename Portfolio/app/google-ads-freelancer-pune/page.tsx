import type { Metadata } from "next";
import { SeoLanding } from "@/components/sections/SeoLanding";

export const metadata: Metadata = {
  title: "Google Ads Freelancer Pune",
  description: "Google Ads freelancer in Pune for high-intent search campaigns, keyword control and conversion measurement.",
  alternates: { canonical: "/google-ads-freelancer-pune" },
};

export default function Page() {
  return <SeoLanding slug="google-ads-freelancer-pune" />;
}
