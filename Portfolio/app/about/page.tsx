import { AboutMagazine } from "@/components/pages/AboutMagazine";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMeta, personJsonLd } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About Amol Kadam | Digital Marketer & Performance Marketer",
  description:
    "About Amol Kadam, a Pune-based performance marketer working across Meta Ads, Google Ads, SEO, analytics, tracking and conversion-focused digital marketing.",
  path: "/about",
});

export default function About() {
  return (
    <>
      <JsonLd data={personJsonLd()} />
      <AboutMagazine />
    </>
  );
}
