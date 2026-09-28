import { PageHeader } from "@/components/common/PageHeader";
import { CTA } from "@/components/common/CTA";
import { FAQ } from "@/components/common/FAQ";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { EditorialButton } from "@/components/ui/EditorialButton";
import { freelanceStudies } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Amol Kadam Freelance Digital Marketer | SEO, Meta Ads & Google Ads",
  description:
    "Freelance digital marketing by Amol Kadam in Pune: performance marketing, Meta Ads, Google Ads, SEO, analytics, tracking, landing pages and lead generation.",
  path: "/freelance",
});

const freelanceFaqs: [string, string][] = [
  [
    "Does Amol Kadam work as a freelancer?",
    "Yes. Amol Kadam takes freelance and consulting projects in performance marketing, SEO, paid ads, analytics and conversion systems alongside professional marketing work.",
  ],
  [
    "What freelance digital marketing services are available?",
    "Meta Ads, Google Ads, SEO, local SEO, analytics and tracking, landing pages, lead generation, CRM follow-up and marketing consulting.",
  ],
  [
    "Is Amol Kadam a digital marketing freelancer in Pune?",
    "Yes. He is based in Pune, Maharashtra, India, and works with local and remote briefs.",
  ],
];

export default function Freelance() {
  return (
    <>
      <PageHeader
        eyebrow="Freelance"
        title="Independent work, judged by pipeline."
        description="Freelance campaigns, measurement and follow-up systems for businesses that need an operator — not a retainer theatre."
      >
        <EditorialButton href="/contact" tone="cream">
          Start a freelance brief
        </EditorialButton>
      </PageHeader>
      <Breadcrumb items={[{ label: "Freelance", href: "/freelance" }]} />

      <section className="ed-section">
        <div className="ed-wrap ed-detail">
          <article>
            <h2>Freelance Digital Marketing by Amol Kadam</h2>
            <p>
              Freelance work covers performance marketing, Meta Ads, Google Ads, SEO, local SEO, analytics, tracking, landing pages, lead generation, CRM follow-up and consulting. The brief stays close to acquisition and conversion so the next decision is easier to trust.
            </p>
          </article>
        </div>
      </section>

      <section className="ed-section alt">
        <div className="ed-wrap ed-work-grid">
          {freelanceStudies.map((study, i) => (
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
      </section>

      <section className="profile-section alt-section">
        <div className="ed-wrap">
          <div className="profile-heading">
            <div>
              <p className="ed-kicker">How freelance runs</p>
              <h2>A clear brief. A working system.</h2>
            </div>
            <p>Scope stays close to acquisition, measurement and conversion — so the next decision is easier to trust.</p>
          </div>
          <div className="snapshot-grid">
            {[
              ["01", "Brief", "Offer, audience, capture path and what a qualified lead actually looks like."],
              ["02", "Build", "Campaigns, events, landing or WhatsApp flow, and a reporting view the team will use."],
              ["03", "Qualify", "Leads tagged by intent and follow-up speed — volume is not treated as pipeline."],
              ["04", "Iterate", "Creative, targeting and the after-click path change from the numbers, not from habit."],
            ].map(([n, t, b]) => (
              <article key={n}>
                <span>{n}</span>
                <h3>{t}</h3>
                <p>{b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FAQ
        items={freelanceFaqs}
        title="Questions about freelance work."
        eyebrow="Freelance FAQs"
        description="How independent performance marketing, SEO and paid ads engagements run."
      />
      <CTA title="Have a freelance brief?" copy="Tell me the offer, the market and the follow-up path. I’ll bring a system that can be judged." />
    </>
  );
}
