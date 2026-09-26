"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { articles, industries, seoLandings, services, studies } from "@/data/site";

const names: Record<string, string> = {
  "about-amol-kadam": "About",
  "case-studies": "Case Studies",
  "creative-library": "Creative Library",
  experiments: "Experiments",
  results: "Results",
  testimonials: "Testimonials",
  services: "Services",
  industries: "Industries",
  contact: "Contact",
  blog: "Blog",
  resources: "Resources",
  "privacy-policy": "Privacy Policy",
  "terms-and-conditions": "Terms & Conditions",
  ...Object.fromEntries(services.map((s) => [s.slug, s.name])),
  ...Object.fromEntries(studies.map((s) => [s.slug, s.title])),
  ...Object.fromEntries(industries.map((s) => [s.slug, s.name])),
  ...Object.fromEntries(seoLandings.map((s) => [s.slug, s.service])),
  ...Object.fromEntries(articles.map((s) => [s.slug, s.title])),
};

export function Breadcrumb() {
  const path = usePathname();
  if (!path || path === "/") return null;

  const parts = path.split("/").filter(Boolean);
  return (
    <div className="breadcrumb-wrap">
      <nav className="breadcrumb shell" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        {parts.map((part, i) => {
          const href = "/" + parts.slice(0, i + 1).join("/");
          return (
            <span key={href}>
              <b>/</b>
              <Link href={href}>{names[part] || part.replaceAll("-", " ")}</Link>
            </span>
          );
        })}
      </nav>
    </div>
  );
}
