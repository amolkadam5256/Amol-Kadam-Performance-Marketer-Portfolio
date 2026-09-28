import Link from "next/link";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { CTA } from "@/components/common/CTA";
import { careerTimeline, certifications, education, skillGroups, site, studies } from "@/data/site";
import { authorBio, brand, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Amol Kadam Resume | Performance Marketer",
  description:
    "HTML resume of Amol Kadam — performance marketer in Pune specializing in Meta Ads, Google Ads, SEO, analytics and conversion systems.",
  path: "/resume",
});

export default function Resume() {
  return (
    <>
      <header className="ed-page-hero">
        <div className="ed-wrap">
          <p className="ed-kicker">Resume</p>
          <h1>Amol Kadam</h1>
          <p className="ed-lead">
            {brand.jobTitle} · {brand.location}
          </p>
        </div>
      </header>
      <Breadcrumb items={[{ label: "Resume", href: "/resume" }]} />

      <article className="resume-page ed-wrap">
        <section>
          <h2>Summary</h2>
          <p>{authorBio}</p>
          <p>
            Professional employment, freelance projects and a Computer Science background sit in one operating model: diagnose the offer, build the capture path, qualify the lead, then improve from measurement.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            {site.name}
            <br />
            {site.location}
            <br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <br />
            <a href={site.phoneHref}>{site.phone}</a>
            <br />
            <a href={site.linkedin}>LinkedIn</a>
            {" · "}
            <a href={site.github}>GitHub</a>
          </p>
        </section>

        <section>
          <h2>Experience</h2>
          {careerTimeline.map((item) => (
            <div key={item.company}>
              <h3>
                {item.role} — {item.company}
              </h3>
              <p>
                {item.date}
                {item.location ? ` · ${item.location}` : ""}
              </p>
              <p>{item.description}</p>
              {"items" in item && item.items ? (
                <ul>
                  {item.items.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </section>

        <section>
          <h2>Projects</h2>
          <ul>
            {studies.map((study) => (
              <li key={study.slug}>
                <Link href={`/work/${study.slug}`}>{study.title}</Link> — {study.summary}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Skills</h2>
          {skillGroups.map((group) => (
            <p key={group.title}>
              <strong>{group.title}:</strong> {group.items.join(", ")}
            </p>
          ))}
        </section>

        <section>
          <h2>Education</h2>
          {education.map((item) => (
            <p key={item.title}>
              <strong>{item.title}</strong>
              <br />
              {item.detail}
            </p>
          ))}
        </section>

        <section>
          <h2>Certifications</h2>
          {certifications.map((item) => (
            <p key={item.title}>
              <strong>{item.title}</strong>
              <br />
              {item.detail}
            </p>
          ))}
        </section>
      </article>
      <CTA title="Open a conversation." copy="Share the role, the brief or the growth problem." />
    </>
  );
}
