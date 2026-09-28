"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { FAQ } from "@/components/common/FAQ";
import { PortraitHead, PORTRAIT_SRC } from "@/components/common/PortraitHead";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { careerTimeline, certifications, education, skillGroups, site, studies } from "@/data/site";
import { SocialLinks } from "@/components/common/SocialLinks";

const capabilities = {
  Acquisition: ["Meta Ads Manager", "Google Ads", "Media buying", "Remarketing"],
  Measurement: ["Google Analytics 4", "Google Tag Manager", "Meta Pixel", "Looker Studio"],
  Organic: ["On-page SEO", "Technical SEO", "Local SEO", "Keyword research"],
  Conversion: ["WordPress & Elementor", "Landing pages", "CRM workflows", "Lead management"],
};

const projectMeta: Record<string, [string, string]> = {
  "hydrella-beauty-science": ["PAID SEARCH + SEO", "H"],
  "real-estate-lead-generation": ["META ADS + TRACKING", "RE"],
  "kokanbag-mango-pulp": ["PERFORMANCE + CRM", "KB"],
  "elintom-crm": ["AUTOMATION + OUTREACH", "EO"],
};

export function AboutMagazine() {
  const [active, setActive] = useState<keyof typeof capabilities>("Acquisition");
  const bars = active === "Acquisition" ? [90, 82, 76, 73] : active === "Measurement" ? [88, 85, 80, 72] : active === "Organic" ? [80, 72, 69, 84] : [82, 77, 75, 74];

  return (
    <main className="profile-page">
      <section className="about-spread">
        <div className="about-spread-inner">
          <div className="about-spread-visual">
            <h1 className="about-spread-title">
              <span>About</span>
              <span>Me</span>
            </h1>
            <div className="about-spread-portrait">
              <PortraitHead className="about-head" alt="Amol Kadam" src={PORTRAIT_SRC} priority />
            </div>
          </div>

          <div className="about-spread-copy">
            <p className="about-spread-num">02</p>
            <p className="about-spread-first">Amol</p>
            <h2 className="about-spread-last">Kadam</h2>
            <p className="about-spread-bio">
              Performance marketer with 1.5+ years managing Meta Ads and Google Ads for lead generation across real estate, ecommerce, AI and digital agency projects. Skilled in campaign optimisation, conversion tracking, SEO, and WordPress, Elementor, React and Next.js landing pages.
            </p>
            <p className="about-spread-label">Core Expertise:</p>
            <ul className="about-spread-skills">
              <li>Meta Ads &amp; Google Ads</li>
              <li>SEO &amp; Landing Pages</li>
              <li>GA4, GTM &amp; Meta Pixel</li>
              <li>CRM, WhatsApp &amp; Automation</li>
            </ul>
            <SocialLinks className="about-spread-socials" />
          </div>
        </div>
      </section>

      <section className="profile-section shell" id="amol-kadam">
        <div className="profile-heading">
          <div>
            <p className="ed-kicker">Who I am</p>
            <h2>A Pune-based performance marketer.</h2>
          </div>
          <p>
            Amol Kadam is a digital marketer and performance marketer based in Pune, Maharashtra, India. His work focuses on paid advertising, SEO, analytics, tracking and conversion systems.
          </p>
        </div>
        <dl className="entity-facts">
          <div>
            <dt>Name</dt>
            <dd>Amol Kadam</dd>
          </div>
          <div>
            <dt>Profession</dt>
            <dd>Performance Marketer</dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>{site.location}</dd>
          </div>
          <div>
            <dt>Specialization</dt>
            <dd>Performance marketing, SEO, Meta Ads, Google Ads, analytics and tracking</dd>
          </div>
          <div>
            <dt>Work model</dt>
            <dd>Professional employment, freelance and consulting</dd>
          </div>
        </dl>
        <p className="ed-copy" style={{ marginTop: 24, maxWidth: "46rem" }}>
          He has professional experience working with Meta Ads, Google Ads, SEO, Google Analytics 4, Google Tag Manager and conversion-focused websites. He also works independently on freelance and consulting projects involving performance marketing, SEO, lead generation, CRM follow-up and digital growth.
        </p>
        <div className="ed-hero-actions" style={{ marginTop: 28 }}>
          <Link href="/experience" className="ed-btn ink">View experience</Link>
          <Link href="/journey" className="ed-btn ghost">Career journey</Link>
          <Link href="/work" className="ed-btn ghost">Selected work</Link>
          <Link href="/resume" className="ed-btn ghost">Resume</Link>
        </div>
      </section>

      <section className="profile-section alt-section">
        <div className="shell">
          <div className="profile-heading">
            <div><p className="ed-kicker">Professional snapshot</p><h2>Where strategy meets execution.</h2></div>
            <p>From campaign build to follow-up workflows, the work stays close to commercial outcomes—and close to the data needed to improve them.</p>
          </div>
          <div className="snapshot-grid">
            {[
              ["01", "Acquire", "Meta and Google campaigns shaped around audience quality, creative intent and conversion paths."],
              ["02", "Measure", "GA4, GTM and pixel-based event tracking configured for clearer performance reporting."],
              ["03", "Improve", "SEO, landing-page optimisation, segmentation and follow-up systems that reduce friction."],
              ["04", "Activate", "CRM, WhatsApp, email and LinkedIn workflows for more responsive lead nurturing."]
            ].map(([n, t, b]) => (
              <article key={n}><span>{n}</span><h3>{t}</h3><p>{b}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="profile-section shell">
          <div className="profile-heading">
            <div><p className="ed-kicker">Capability report</p><h2>A connected marketing toolkit.</h2></div>
          <p>Explore the areas I actively bring together when planning and running a growth programme.</p>
        </div>
        <div className="capability-panel">
          <div className="cap-tabs">
            {(Object.keys(capabilities) as (keyof typeof capabilities)[]).map(key => (
              <button onClick={() => setActive(key)} className={key === active ? "selected" : ""} key={key}>{key}</button>
            ))}
          </div>
          <div className="cap-content">
            <div>
              <p className="cap-label">ACTIVE DISCIPLINE</p>
              <h3>{active}</h3>
              <p className="cap-copy">The components are designed to work together, so insight can move from a performance report into the next campaign decision.</p>
              <ul>{capabilities[active].map(skill => <li key={skill}>{skill}</li>)}</ul>
            </div>
            <div className="bar-report" aria-label={`${active} capability chart`}>
              {capabilities[active].map((skill, i) => (
                <div className="bar-row" key={skill}>
                  <span>{skill}</span>
                  <div>
                    <motion.i
                      initial={{ width: 0 }}
                      animate={{ width: `${bars[i]}%` }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      style={{ display: "block", height: "100%", background: "var(--red)", borderRadius: "5px" }}
                    />
                  </div>
                  <b>{bars[i]}%</b>
                </div>
              ))}
              <p>Capability map · hands-on tools and practices</p>
            </div>
          </div>
        </div>
      </section>

      <section className="profile-section dark-profile">
        <div className="shell">
          <div className="profile-heading">
            <div><p className="ed-kicker">Career timeline</p><h2>Learning through live work.</h2></div>
            <p>Experience across real estate, FMCG, retail, SaaS, web and agency projects — from Shabdbramhand Co and Majestic Realties to media buying at Sateri Digital.</p>
          </div>
          <div className="timeline">
            {careerTimeline.map((item) => (
              <article key={item.company}>
                <p className="timeline-date">{item.date}</p>
                <div className="timeline-dot" />
                <div>
                  <h3>
                    <a href={item.companyHref} target="_blank" rel="noreferrer">{item.company}</a>
                  </h3>
                  <h4>{item.role}{item.location ? ` · ${item.location}` : ""}</h4>
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

      <section className="profile-section shell">
        <div className="profile-heading">
            <div><p className="ed-kicker">Portfolio</p><h2>Work from jobs and freelance.</h2></div>
          <Link href="/work" className="text-link">View all work <span>↗</span></Link>
        </div>
        <div className="ed-work-grid">
          {studies.map((study, index) => (
            <ProjectCard
              key={study.slug}
              href={`/work/${study.slug}`}
              index={index + 1}
              type={projectMeta[study.slug]?.[0] ?? study.type}
              title={study.title}
              summary={study.summary}
            />
          ))}
        </div>
      </section>

      <section className="profile-section tools-section">
        <div className="shell">
          <div className="profile-heading">
            <div><p className="ed-kicker">Platforms & craft</p><h2>The tools behind the work.</h2></div>
          </div>
          <div className="tool-groups">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <p>{group.title.toUpperCase()}</p>
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            ))}
          </div>
          <p className="about-extra">
            <strong>Languages:</strong> {site.languages.join(", ")}
            <span> · </span>
            <strong>Interests:</strong> {site.interests.join(", ")}
          </p>
        </div>
      </section>

      <section className="profile-section shell credentials">
        <div className="profile-heading">
          <div><p className="ed-kicker">Education & credentials</p><h2>Grounded in practice and study.</h2></div>
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
                  <a href={item.href}>View certificate <span>↗</span></a>
                ) : null}
              </div>
            ))}
          </article>
        </div>
      </section>

      <FAQ />

      <section className="profile-contact">
        <div className="shell">
          <p className="ed-kicker">Next conversation</p>
          <h2>Bring the brief.<br />I&apos;ll bring the system.</h2>
          <p>For freelance projects, consulting, or the right marketing opportunity.</p>
          <Link href="/contact" className="ed-btn cream">Contact Amol</Link>
          <Link href="/freelance" className="ed-btn ghost" style={{ marginLeft: 12 }}>Freelance work</Link>
          <SocialLinks className="about-contact-socials" />
        </div>
      </section>
    </main>
  );
}
