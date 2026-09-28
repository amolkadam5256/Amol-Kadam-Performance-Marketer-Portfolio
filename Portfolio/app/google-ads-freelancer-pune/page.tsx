import { pageMeta } from "@/lib/seo";
import { SeoLanding } from "@/components/sections/SeoLanding";

export const metadata = pageMeta({
  title: "Google Ads Freelancer in Pune | Amol Kadam",
  description: "Google Ads freelancer in Pune for high-intent search campaigns, keyword control and conversion measurement.",
  path: "/google-ads-freelancer-pune",
});

export default function Page() {
  return <SeoLanding slug="google-ads-freelancer-pune" />;
}
