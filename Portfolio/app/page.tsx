"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { PortraitHead } from "@/components/common/PortraitHead";
import { HomeHero } from "@/components/sections/HomeHero";
import { EditorialButton } from "@/components/ui/EditorialButton";
import { Metric } from "@/components/ui/Metric";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceRow } from "@/components/ui/ServiceRow";
import { articles, homepageResults, services, studies, testimonials } from "@/data/site";

const process = [
  ["01", "Diagnose", "Map the offer, the buyer and the capture path before spend or content is scaled."],
  ["02", "Build", "Connect campaigns, landing pages and tracking so the next action can be measured."],
  ["03", "Qualify", "Route WhatsApp, forms and CRM so the team can tell a useful lead from noise."],
  ["04", "Improve", "Tighten waste, creative and follow-up against qualified pipeline — not activity."],
] as const;

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveTestimonial((current) => (current + 1) % testimonials.length), 6000);
    return () => window.clearInterval(timer);
  }, []);

  const quote = testimonials[activeTestimonial];

  return (
    <main className="ed-home">
      <HomeHero />

      <section className="ed-intro" id="about">
        <div className="ed-pane cream">
          <Reveal>
            <p className="ed-kicker">01 — Intro</p>
            <h2>About the work</h2>
            <p className="ed-copy">
              A performance marketer who connects ads, landing pages, tracking and follow-up into one operating system — judged by qualified pipeline, not activity.
            </p>
            <ul className="ed-list">
              <li>1.5+ years in paid media, search and measurement</li>
              <li>Based in Taleranwadi, Pune</li>
              <li>Open for freelance, consulting and the right full-time brief</li>
            </ul>
            <EditorialButton href="/about-amol-kadam" tone="ink">
              Read the profile
            </EditorialButton>
          </Reveal>
        </div>
        <div className="ed-pane red">
          <Reveal>
            <figure className="ed-cutout">
              <PortraitHead alt="Amol Kadam" />
            </figure>
            <p className="ed-caption">Paid media · Search · Measurement</p>
          </Reveal>
        </div>
      </section>

      <section className="ed-section" id="expertise">
        <div className="ed-wrap">
          <Reveal>
            <SectionHeading
              kicker="02 — Expertise"
              title="Connected systems, not isolated tactics."
              copy="Specialist support from first campaign structure to clearer reporting and conversion."
            />
          </Reveal>
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.04}>
              <ServiceRow index={index + 1} name={service.name} blurb={service.blurb} href={service.href} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="ed-section alt" id="work">
        <div className="ed-wrap">
          <Reveal>
            <SectionHeading
              kicker="03 — Selected work"
              title="The thinking behind the work."
              copy="Campaign, tracking, SEO and lead-management systems. Only KokanBag publishes a public scoreboard."
            />
          </Reveal>
          <div className="ed-work-grid">
            {studies.map((study, index) => (
              <Reveal key={study.slug} delay={index * 0.05}>
                <ProjectCard
                  href={`/case-studies/${study.slug}`}
                  index={index + 1}
                  type={study.type}
                  title={study.title}
                  summary={study.summary}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="ed-section" id="proof">
        <div className="ed-wrap">
          <Reveal>
            <SectionHeading
              kicker="04 — Published proof"
              title="KokanBag, WhatsApp-first Meta."
              copy="1,714 leads from ₹22,338 spend, June to 20 August 2026. Other studies stay qualitative."
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
              <EditorialButton href="/case-studies/kokanbag-mango-pulp" tone="ink">
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

      <section className="ed-section" id="clients">
        <div className="ed-wrap ed-quote">
          <Reveal>
            <p className="ed-kicker">06 — Client say</p>
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={quote.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                {quote.quote}
              </motion.blockquote>
            </AnimatePresence>
            <div className="ed-people">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  className={index === activeTestimonial ? "on" : ""}
                  onClick={() => setActiveTestimonial(index)}
                >
                  <i>{item.initials}</i>
                  <span>
                    {item.name}
                    <small>{item.role}</small>
                  </span>
                </button>
              ))}
            </div>
            <EditorialButton href="/testimonials" tone="ghost">
              All testimonials
            </EditorialButton>
          </Reveal>
        </div>
      </section>

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
