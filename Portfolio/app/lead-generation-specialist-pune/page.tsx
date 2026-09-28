import { pageMeta } from "@/lib/seo";
import { SeoLanding } from "@/components/sections/SeoLanding";

export const metadata = pageMeta({
  title: "Lead Generation Specialist in Pune | Amol Kadam",
  description: "Lead generation specialist in Pune for WhatsApp-first and form-based systems that can be qualified in a CRM.",
  path: "/lead-generation-specialist-pune",
});

export default function Page() {
  return <SeoLanding slug="lead-generation-specialist-pune" />;
}
