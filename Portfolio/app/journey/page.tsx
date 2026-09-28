import Link from "next/link";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { PageHeader } from "@/components/common/PageHeader";
import { pageMeta } from "@/lib/seo";
import { careerTimeline, certifications, education } from "@/data/site";

export const metadata = pageMeta({
  title: "Amol Kadam Career & Learning Journey | Digital Marketing & Computer Science",
  description:
    "Amol Kadam’s career and learning journey: Computer Science education, digital marketing roles, freelance projects and continuous learning in ads, SEO and analytics.",
  path: "/journey",
});

export default function Journey() {
  return (
    <>
      <PageHeader
        eyebrow="Journey"
        title="Learning through live work."
        description="Roles across real estate, FMCG, retail, SaaS and web — from Shabdbramhand Co and Majestic Realties to media buying at Sateri Digital."
      />
      <Breadcrumb items={[{ label: "Journey", href: "/journey" }]} />

      <section className="profile-section dark-profile">
        <div className="ed-wrap">
          <div className="profile-heading">
            <div>
              <p className="ed-kicker">Career timeline</p>
              <h2>The path so far.</h2>
            </div>
            <p>Each role was a live operating problem: leads, pages, tracking, or the conversation after the click.</p>
          </div>
          <div className="timeline">
            {careerTimeline.map((item) => (
              <article key={item.company}>
                <p className="timeline-date">{item.date}</p>
                <div className="timeline-dot" />
                <div>
                  <h3>
                    <a href={item.companyHref} target="_blank" rel="noreferrer">
                      {item.company}
                    </a>
                  </h3>
                  <h4>{item.role}</h4>
                  <p>{item.description}</p>
                  {"items" in item && item.items ? (
                    <ul className="timeline-items">
                      {item.items.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="profile-section">
        <div className="ed-wrap credentials">
          <div className="profile-heading">
            <div>
              <p className="ed-kicker">Education & credentials</p>
              <h2>Grounded in practice and study.</h2>
            </div>
          </div>
          <div className="credentials-grid">
            <article>
              <p>EDUCATION</p>
              {education.map((item) => (
                <div key={item.title}>
                  <h3>{item.title}</h3>
                  <span>{item.detail}</span>
                </div>
              ))}
            </article>
            <article>
              <p>CERTIFICATIONS</p>
              {certifications.map((item) => (
                <div key={item.title}>
                  <h3>{item.title}</h3>
                  <span>{item.detail}</span>
                  {"href" in item && item.href ? (
                    <a href={item.href}>
                      View certificate <span>↗</span>
                    </a>
                  ) : null}
                </div>
              ))}
            </article>
          </div>
        </div>
      </section>

      <section className="profile-section alt-section">
        <div className="ed-wrap">
          <div className="profile-heading">
            <div>
              <p className="ed-kicker">Continuous learning</p>
              <h2>Marketing, measurement and the web.</h2>
            </div>
            <p>Computer Science study supports the professional work. It does not replace it.</p>
          </div>
          <ul className="ed-list">
            <li>2022–2025 — Bachelor of Science in Computer Science</li>
            <li>2025–Present — Digital marketing and performance marketing practice</li>
            <li>2025–Present — Professional marketing roles</li>
            <li>2025–Present — Master’s in Computer Science</li>
            <li>2026–Present — Freelance and consulting projects</li>
            <li>Present — Ongoing learning in performance marketing, SEO, Google Ads, Meta Ads, GA4, GTM, AI, automation, web technologies and analytics</li>
          </ul>
        </div>
      </section>

      <section className="profile-contact">
        <div className="ed-wrap">
          <p className="ed-kicker">Next chapter</p>
          <h2>
            Open for freelance,
            <br />
            consulting and the right brief.
          </h2>
          <p>Read the work, or start a conversation.</p>
          <div className="ed-hero-actions">
            <Link href="/contact" className="ed-btn cream">
              Contact Amol
            </Link>
            <Link href="/work" className="ed-btn ghost">
              View work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
