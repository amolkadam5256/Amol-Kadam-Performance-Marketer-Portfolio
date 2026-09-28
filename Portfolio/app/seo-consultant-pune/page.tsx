import { pageMeta } from "@/lib/seo";
import { SeoLanding } from "@/components/sections/SeoLanding";

export const metadata = pageMeta({
  title: "SEO Consultant in Pune | Amol Kadam",
  description: "SEO consultant in Pune for technical, on-page and commercial search that can be measured against enquiries.",
  path: "/seo-consultant-pune",
});

export default function Page() {
  return <SeoLanding slug="seo-consultant-pune" />;
}
