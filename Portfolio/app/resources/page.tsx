import { PageHeader } from "@/components/common/PageHeader";
import { CTA } from "@/components/common/CTA";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceRow } from "@/components/ui/ServiceRow";

const resources = [
  ["Creative Library", "Creative intelligence", "Reference examples of hooks, offers, formats and conversion ideas.", "/creative-library"],
  ["Experiments", "Testing", "Structured marketing questions and learning-led experiments.", "/experiments"],
  ["Results Dashboard", "Reporting", "A practical view of paid media, organic visibility and lead flow.", "/results"],
  ["Industries", "Industry focus", "Growth approaches shaped around different market realities.", "/industries"],
  ["Insights & Blog", "Articles", "Notes on paid media, SEO, measurement and growth strategy.", "/blog"],
  ["Testimonials", "Feedback", "A dedicated place for client and collaborator feedback.", "/testimonials"],
] as const;

export const metadata = {
  title: "Marketing Resources",
  description: "Creative patterns, experiments, results, industries and writing from Amol Kadam’s growth practice.",
  alternates: { canonical: "/resources" },
};

export default function Resources() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title="Useful ideas, systems and proof."
        description="Explore the working library behind Amol Kadam’s performance marketing, search and measurement practice."
      />
      <section className="ed-section">
        <div className="ed-wrap">
          {resources.map(([title, tag, description, href], index) => (
            <Reveal key={title} delay={index * 0.04}>
              <ServiceRow index={index + 1} name={title} blurb={`${tag}. ${description}`} href={href} />
            </Reveal>
          ))}
        </div>
      </section>
      <CTA title="Want to apply one of these ideas?" />
    </>
  );
}
