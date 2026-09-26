import { PageHeader } from "@/components/common/PageHeader";
import { CTA } from "@/components/common/CTA";
import { FAQ } from "@/components/common/FAQ";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { studies } from "@/data/site";

export const metadata = {
  title: "Performance Marketing Case Studies",
  description: "Campaign, tracking, SEO and lead-management systems — including the published KokanBag WhatsApp study.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudies() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="The thinking behind the work."
        description="A growing library of campaign, tracking, SEO and lead-management systems applied across different business contexts."
      />
      <section className="ed-section">
        <div className="ed-wrap ed-work-grid">
          {studies.map((study, i) => (
            <Reveal key={study.slug} delay={i * 0.05}>
              <ProjectCard
                href={`/case-studies/${study.slug}`}
                index={i + 1}
                type={study.type}
                title={study.title}
                summary={study.summary}
              />
            </Reveal>
          ))}
        </div>
      </section>
      <FAQ />
      <CTA title="Have a similar challenge?" />
    </>
  );
}
