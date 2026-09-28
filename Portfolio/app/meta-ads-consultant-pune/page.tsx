import { pageMeta } from "@/lib/seo";
import { SeoLanding } from "@/components/sections/SeoLanding";

export const metadata = pageMeta({
  title: "Meta Ads Consultant in Pune | Amol Kadam",
  description: "Meta Ads consultant in Pune for Facebook and Instagram lead systems, WhatsApp capture and conversion tracking.",
  path: "/meta-ads-consultant-pune",
});

export default function Page() {
  return <SeoLanding slug="meta-ads-consultant-pune" />;
}
