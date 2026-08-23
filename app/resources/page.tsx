import Link from "next/link";
import { PageHeader } from "@/components/common/PageHeader";
import { CTA } from "@/components/common/CTA";

const resources = [
  ["Creative Library", "Creative intelligence", "Reference examples of hooks, offers, formats and conversion ideas.", "/creative-library"],
  ["Experiments", "Testing", "Structured marketing questions and learning-led experiments.", "/experiments"],
  ["Results Dashboard", "Reporting", "A practical view of paid media, organic visibility and lead flow.", "/results"],
  ["Industries", "Industry focus", "Growth approaches shaped around different market realities.", "/industries"],
  ["Insights & Blog", "Articles", "Notes on paid media, SEO, measurement and growth strategy.", "/blog"],
  ["Testimonials", "Feedback", "A dedicated place for client and collaborator feedback.", "/testimonials"],
];

export const metadata = { title: "Marketing Resources" };

export default function Resources() {
  return <><PageHeader eyebrow="RESOURCES" title="Useful ideas, systems and proof." description="Explore the working library behind Amol Kadam’s performance marketing, search and measurement practice." /><section className="listing shell">{resources.map(([title,tag,description,href], index) => <article key={title}><span>0{index + 1} · {tag}</span><h2>{title}</h2><p>{description}</p><Link href={href}>Explore resource ↗</Link></article>)}</section><CTA title="Want to apply one of these ideas?" /></>;
}
