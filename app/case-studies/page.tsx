import { PageHeader } from "@/components/common/PageHeader";
import { CTA } from "@/components/common/CTA";
import { FAQ } from "@/components/common/FAQ";
import { studies } from "@/data/site";

export const metadata = { title: "Performance Marketing Case Studies" };

export default function CaseStudies() {
  return (
    <>
      <PageHeader
        eyebrow="CASE STUDIES"
        title="The thinking behind the work."
        description="A growing library of campaign, tracking, SEO and lead-management systems applied across different business contexts."
      />
      <section className="case-grid shell">
        {studies.map((s, i) => (
          <a href={`/case-studies/${s.slug}`} className={`case-card cc-${i}`} key={s.slug}>
            <div>
              <span>{s.type}</span>
              <b>{String(i + 1).padStart(2, "0")}</b>
            </div>
            <h2>{s.title}</h2>
            <p>{s.summary}</p>
            <em>Explore case study ↗</em>
          </a>
        ))}
      </section>
      <FAQ />
      <CTA title="Have a similar challenge?" />
    </>
  );
}
