import { pageMeta } from "@/lib/seo";
import { SeoLanding } from "@/components/sections/SeoLanding";

export const metadata = pageMeta({
  title: "Performance Marketer in Pune | Amol Kadam",
  description: "Performance marketer in Pune connecting Meta, Google, SEO, landing pages and tracking into one operating system.",
  path: "/performance-marketer-pune",
});

export default function Page() {
  return <SeoLanding slug="performance-marketer-pune" />;
}
