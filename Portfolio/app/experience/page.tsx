import Link from "next/link";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { CTA } from "@/components/common/CTA";
import { FAQ } from "@/components/common/FAQ";
import { PageHeader } from "@/components/common/PageHeader";
import { careerTimeline } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Amol Kadam Experience | Digital Marketing & Performance Marketing",
  description:
    "Professional experience of Amol Kadam across Sateri Digital, Majestic Realties and Shabdbramhand Co — Meta Ads, Google Ads, SEO, tracking and CRM.",
  path: "/experience",
});

const relatedByCompany: Record<string, { label: string; href: string }[]> = {
  "Sateri Digital": [
    { label: "KokanBag mango pulp case study", href: "/work/kokanbag-mango-pulp" },
    { label: "ElintOm CRM project", href: "/work/elintom-crm" },
  ],
  "Majestic Realties": [{ label: "Real estate lead generation", href: "/work/real-estate-lead-generation" }],
  "Shabdbramhand Co": [{ label: "Freelance web and SEO work", href: "/freelance" }],
};

const experienceFaqs: [string, string][] = [
  [
    "What is Amol Kadam’s professional experience?",
    "Amol Kadam has worked as a Digital Marketing Executive (Media Buyer) at Sateri Digital, as a Digital Marketing & Web Executive at Majestic Realties, and part-time as a Web Developer & SEO Specialist at Shabdbramhand Co.",
  ],
  [
    "What tools has Amol Kadam used in professional roles?",
    "His marketing toolkit on the job includes Meta Ads Manager, Google Ads, GA4, Google Tag Manager, Meta Pixel, Looker Studio, Privyr CRM, WordPress, Elementor, React and Next.js.",
  ],
  [
    "Does Amol Kadam also take freelance work?",
    "Yes. Alongside professional employment, Amol Kadam works on freelance and consulting projects in performance marketing, SEO, lead generation and conversion systems.",
  ],
];

export default function Experience() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Professional experience"
        description="Roles in paid media, SEO, web and CRM — documented from live work rather than invented titles."
      />
      <Breadcrumb items={[{ label: "Experience", href: "/experience" }]} />

      <section className="profile-section">
        <div className="ed-wrap">
          {careerTimeline.map((item) => (
            <article key={item.company} className="experience-card">
              <p className="ed-kicker">{item.date}</p>
              <h2>{item.company}</h2>
              <h3>{item.role}</h3>
              <p>
                {item.location ? `${item.location} · ` : ""}
                {item.description}
              </p>
              {"items" in item && item.items ? (
                <>
                  <p className="ed-kicker" style={{ marginTop: 24 }}>
                    Responsibilities
                  </p>
                  <ul className="timeline-items">
                    {item.items.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </>
              ) : null}
              {relatedByCompany[item.company] ? (
                <p style={{ marginTop: 20 }}>
                  Related work:{" "}
                  {relatedByCompany[item.company].map((link, index) => (
                    <span key={link.href}>
                      {index > 0 ? " · " : ""}
                      <Link className="text-link" href={link.href}>
                        {link.label}
                      </Link>
                    </span>
                  ))}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <FAQ
        items={experienceFaqs}
        title="Questions about Amol Kadam’s experience."
        eyebrow="Experience FAQs"
        description="Direct answers about roles, tools and freelance work."
      />
      <CTA title="Discuss a role or a brief." copy="Recruiters can start with the resume. Clients can start with the work." />
    </>
  );
}
