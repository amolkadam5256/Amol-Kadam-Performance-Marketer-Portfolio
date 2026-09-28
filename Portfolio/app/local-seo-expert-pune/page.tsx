import { pageMeta } from "@/lib/seo";
import { SeoLanding } from "@/components/sections/SeoLanding";

export const metadata = pageMeta({
  title: "Local SEO Expert in Pune | Amol Kadam",
  description: "Local SEO expert in Pune for Google Business Profile, Map Pack visibility and nearby customer conversion.",
  path: "/local-seo-expert-pune",
});

export default function Page() {
  return <SeoLanding slug="local-seo-expert-pune" />;
}
