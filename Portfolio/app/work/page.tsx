import { Breadcrumb } from "@/components/common/Breadcrumb";
import { CTA } from "@/components/common/CTA";
import { FAQ } from "@/components/common/FAQ";
import { PageHeader } from "@/components/common/PageHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { studies } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Amol Kadam Portfolio | Digital Marketing, SEO & Performance Marketing",
  description:
    "Selected work by Amol Kadam across paid media, SEO, analytics, lead generation, CRM and freelance digital marketing projects.",
  path: "/work",
});

const groups: { label: string; match: (type: string) => boolean }[] = [
  { label: "Paid Media", match: (type: string) => /meta|google|performance|paid/i.test(type) },
  { label: "SEO", match: (type: string) => /seo/i.test(type) },
  { label: "Lead Generation", match: (type: string) => /lead|performance/i.test(type) },
  { label: "CRM", match: (type: string) => /crm|automation/i.test(type) },
  { label: "Freelance", match: (type: string) => /freelance/i.test(type) },
] as const;

export default function Work() {
  const used = new Set<string>();
  const grouped = groups
    .map((group) => {
      const items = studies.filter((study) => group.match(study.type) && !used.has(study.slug));
      items.forEach((study) => used.add(study.slug));
      return { label: group.label, items };
    })
    .filter((group) => group.items.length);

  const remainder = studies.filter((study) => !used.has(study.slug));
  if (remainder.length) grouped.push({ label: "More work", items: remainder });

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Selected work"
        description="Case studies from live roles and independent projects — Meta Ads, Google Ads, SEO, tracking and follow-up systems applied in the field."
      />
      <Breadcrumb items={[{ label: "Work", href: "/work" }]} />
      <section className="ed-section">
        <div className="ed-wrap">
          {grouped.map((group) => (
            <div key={group.label} style={{ marginBottom: 48 }}>
              <p className="ed-kicker">{group.label}</p>
              <div className="ed-work-grid">
                {group.items.map((study, i) => (
                  <Reveal key={study.slug} delay={i * 0.05}>
                    <ProjectCard
                      href={`/work/${study.slug}`}
                      index={i + 1}
                      type={study.type}
                      title={study.title}
                      summary={study.summary}
                    />
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <FAQ />
      <CTA title="Have a similar challenge?" />
    </>
  );
}
