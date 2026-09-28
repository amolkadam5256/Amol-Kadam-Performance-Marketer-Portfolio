import Image from "next/image";
import Link from "next/link";
import portrait from "@/assets/amol-kadam-portrait.png";
import { HomeHero } from "@/components/sections/HomeHero";
import { HomeTestimonials } from "@/components/sections/HomeTestimonials";
import { SocialLinks } from "@/components/common/SocialLinks";
import { FAQ } from "@/components/common/FAQ";
import { EditorialButton } from "@/components/ui/EditorialButton";
import { Metric } from "@/components/ui/Metric";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceRow } from "@/components/ui/ServiceRow";
import { articles, homepageResults, services, site, studies } from "@/data/site";
import { authorBio, brand, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Amol Kadam | Performance Marketer, SEO & Digital Marketing Specialist",
  description:
    "Amol Kadam is a Pune-based performance marketer specializing in Meta Ads, Google Ads, SEO, analytics, tracking and conversion-focused digital marketing.",
  path: "/",
});

const process = [
  ["01", "Diagnose", "Map the offer, the buyer and the capture path before spend or content is scaled."],
  ["02", "Build", "Connect campaigns, landing pages and tracking so the next action can be measured."],
  ["03", "Qualify", "Route WhatsApp, forms and CRM so the team can tell a useful lead from noise."],
  ["04", "Improve", "Tighten waste, creative and follow-up against qualified pipeline — not activity."],
] as const;

export default function Home() {
  return (
    <main className="ed-home">
      <HomeHero />

      <section className="home-about about-section" id="about">
        <div className="ed-wrap home-about-inner">
          <div className="home-about-visual">
            <div className="home-about-media about-image-wrapper">
              <Image
                src={portrait}
                alt="Amol Kadam, performance marketer based in Pune"
                fill
                sizes="(max-width: 860px) 90vw, (max-width: 1200px) 42vw, 520px"
                placeholder="blur"
                className="home-about-photo about-image"
              />
              <p className="home-about-caption">Paid media · Search · Measurement</p>
            </div>
            <div className="about-actions">
              <div className="ed-hero-actions">
                <EditorialButton href="/about" tone="ink">
                  Read the profile
                </EditorialButton>
                <EditorialButton href="/experience" tone="ghost">
                  View experience
                </EditorialButton>
              </div>
              <SocialLinks />
            </div>
          </div>
          <div className="home-about-copy about-content">
            <p className="about-label">About the work</p>
            <h2 className="about-title">Amol Kadam</h2>
            <p className="about-role">Digital Marketer &amp; Performance Marketer</p>
            <p className="about-description">
              I help businesses grow through performance marketing, paid advertising, SEO and data-driven digital strategies.
            </p>
            <p className="about-description">{authorBio}</p>
            <p className="about-description">
              His work combines Meta Ads, Google Ads, SEO, measurement and landing-page optimisation to help businesses generate measurable customer demand. He works across professional employment, freelance projects and marketing consulting.
            </p>
            <dl className="about-facts">
              <div>
                <dt>Experience</dt>
                <dd>1.5+ Years</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>Meta Ads · Google Ads · SEO · Local SEO · Analytics</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{brand.locality}, India</dd>
              </div>
            </dl>
            <p className="about-languages">Languages: {site.languages.join(" · ")}</p>
          </div>
        </div>
      </section>

      <section className="ed-section" id="expertise">
        <div className="ed-wrap">
          <Reveal>
            <SectionHeading
              kicker="02 — Capabilities"
              title="What I bring to a brief."
              copy="Paid media, search, tracking and conversion — used on the job and in freelance work. Open a capability, or go to contact to start a project."
            />
          </Reveal>
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.04}>
              <ServiceRow index={index + 1} name={service.name} blurb={service.blurb} href={`/services/${service.slug}`} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="ed-section alt" id="work">
        <div className="ed-wrap">
          <Reveal>
            <SectionHeading
              kicker="03 — Portfolio"
              title="Work from jobs and freelance."
              copy="Case studies from live roles and independent projects — Meta, Google, SEO, tracking and follow-up systems."
            />
          </Reveal>
          <div className="ed-work-grid">
            {studies.map((study, index) => (
              <Reveal key={study.slug} delay={index * 0.05}>
                <ProjectCard
                  href={`/work/${study.slug}`}
                  index={index + 1}
                  type={study.type}
                  title={study.title}
                  summary={study.summary}
                />
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div style={{ marginTop: 28 }}>
              <EditorialButton href="/work" tone="ink">
                View full portfolio
              </EditorialButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="ed-section" id="proof">
        <div className="ed-wrap">
          <Reveal>
            <SectionHeading
              kicker="04 — Published proof"
              title="KokanBag, WhatsApp-first Meta."
              copy="1,714 WhatsApp conversations from ₹22,338 spend, June to 20 August 2026. Other studies stay qualitative."
            />
          </Reveal>
          <div className="ed-metrics">
            {homepageResults.map((item) => (
              <Reveal key={item.label}>
                <Metric value={item.metric} label={item.label} note={item.note} />
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div style={{ marginTop: 28 }}>
              <EditorialButton href="/work/kokanbag-mango-pulp" tone="ink">
                Open the case study
              </EditorialButton>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="ed-section alt" id="process">
        <div className="ed-wrap">
          <Reveal>
            <SectionHeading kicker="05 — Process" title="How the system is built." />
          </Reveal>
          <div className="ed-process">
            {process.map(([num, title, copy], index) => (
              <Reveal key={num} delay={index * 0.05}>
                <article className="ed-step">
                  <span>{num}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <HomeTestimonials />

      <section className="ed-section alt" id="insights">
        <div className="ed-wrap">
          <Reveal>
            <SectionHeading kicker="07 — Insights" title="Notes from the growth desk." />
          </Reveal>
          <div className="ed-insights">
            {articles.map((article, index) => (
              <Reveal key={article.slug} delay={index * 0.05}>
                <Link href={`/blog/${article.slug}`} className="ed-insight">
                  <span>{article.category}</span>
                  <strong>{article.title}</strong>
                  <em>Read article</em>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FAQ />

      <section className="ed-cta" id="contact">
        <div className="ed-wrap">
          <Reveal>
            <p className="ed-kicker">08 — Next</p>
            <h2>Tell me the growth problem.</h2>
            <p>I will bring the system — Meta, Google, SEO, tracking and follow-up in one path.</p>
            <div className="ed-hero-actions">
              <EditorialButton href="/contact" tone="cream">
                Start a conversation
              </EditorialButton>
              <EditorialButton href="/results" tone="ghost">
                See published results
              </EditorialButton>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
