"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { FAQ } from "@/components/common/FAQ";
import { PortraitHead } from "@/components/common/PortraitHead";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { studies } from "@/data/site";

const capabilities = {
  Acquisition: ["Meta Ads Manager", "Google Ads", "Media buying", "Remarketing"],
  Measurement: ["Google Analytics 4", "Google Tag Manager", "Meta Pixel", "Looker Studio"],
  Organic: ["On-page SEO", "Technical SEO", "Local SEO", "Keyword research"],
  Conversion: ["WordPress & Elementor", "Landing pages", "CRM workflows", "Lead management"],
};

const timeline = [
  ["Jun 2026 — Present", "Sateri Digital", "Performance Marketing Consultant", "Meta Ads for FMCG, retail and SaaS; lead management, marketing automation and omnichannel reporting."],
  ["Nov 2025 — Jun 2026", "Digital AIML", "Digital Marketing Executive", "Paid social for AI, real estate, restaurant and skincare brands, alongside SEO, landing pages and tracking."],
  ["May 2025 — Nov 2025", "Majestic Realties", "Digital Marketing & Web Executive · Internship", "Real-estate lead generation, website optimisation, SEO and social content production."],
];

const projectMeta: Record<string, [string, string]> = {
  "hydrella-beauty-science": ["PAID SEARCH + SEO", "H"],
  "real-estate-lead-generation": ["META ADS + TRACKING", "RE"],
  "kokanbag-mango-pulp": ["PERFORMANCE + CRM", "KB"],
  "elintom-crm": ["AUTOMATION + OUTREACH", "EO"],
};

export default function AboutAmolKadam() {
  const [active, setActive] = useState<keyof typeof capabilities>("Acquisition");
  const bars = active === "Acquisition" ? [90, 82, 76, 73] : active === "Measurement" ? [88, 85, 80, 72] : active === "Organic" ? [80, 72, 69, 84] : [82, 77, 75, 74];

  return (
    <main className="profile-page">
      <section className="profile-hero">
        <div className="ed-wrap ed-about-hero">
        <div>
          <p className="ed-kicker">About Amol Kadam</p>
          <h1>Performance marketing, built with <em>intent.</em></h1>
          <p className="profile-lede">A digital and performance marketing specialist helping businesses connect media, search, conversion experiences and reporting into one accountable growth system.</p>
          <div className="profile-actions">
            <Link href="/contact" className="ed-btn cream">Start a conversation</Link>
            <a href="https://www.linkedin.com/in/amolkadam77" className="text-link">Connect on LinkedIn</a>
          </div>
        </div>
        <aside className="profile-card">
          <PortraitHead className="profile-head" alt="Amol Kadam" />
          <p>BASED IN</p><strong>Pune, Maharashtra</strong>
          <hr /><p>FOCUS</p><strong>Paid media · Search · Measurement</strong>
          <hr /><p>EXPERIENCE</p><strong>1.5+ years in performance marketing</strong>
          <div className="availability"><i /> Available for consulting & opportunities</div>
        </aside>
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
            <p>Experience across real estate, AI, retail, FMCG, SaaS, ecommerce and digital agency projects.</p>
          </div>
          <div className="timeline">
            {timeline.map(([date, company, role, description]) => (
              <article key={company}>
                <p className="timeline-date">{date}</p>
                <div className="timeline-dot" />
                <div><h3>{company}</h3><h4>{role}</h4><p>{description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="profile-section shell">
        <div className="profile-heading">
            <div><p className="ed-kicker">Selected project work</p><h2>Systems applied in the field.</h2></div>
          <Link href="/case-studies" className="text-link">View case studies <span>↗</span></Link>
        </div>
        <div className="ed-work-grid">
          {studies.map((study, index) => (
            <ProjectCard
              key={study.slug}
              href={`/case-studies/${study.slug}`}
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
            <div><p>MEDIA & MEASUREMENT</p><span>Meta Ads Manager</span><span>Google Ads</span><span>GA4</span><span>GTM</span><span>Looker Studio</span><span>Meta Events Manager</span></div>
            <div><p>SEARCH & CONVERSION</p><span>Search Console</span><span>SEMrush</span><span>Ahrefs</span><span>WordPress</span><span>Elementor</span><span>Keyword Planner</span></div>
            <div><p>BUILD & CREATIVE</p><span>Next.js</span><span>React.js</span><span>Tailwind CSS</span><span>Canva</span><span>Adobe Photoshop</span><span>CapCut</span></div>
          </div>
        </div>
      </section>

      <section className="profile-section shell credentials">
        <div className="profile-heading">
          <div><p className="ed-kicker">Education & credentials</p><h2>Grounded in practice and study.</h2></div>
        </div>
        <div className="credentials-grid">
          <article>
            <p>EDUCATION</p>
            <h3>Master of Science in Computer Science</h3><span>Bharati Vidyapeeth Deemed University · Pursuing, Sep 2025 — Present</span>
            <h3>Bachelor of Science in Computer Science</h3><span>Bharati Vidyapeeth Deemed University · Sep 2022 — Jul 2025</span>
          </article>
          <article>
            <p>CERTIFICATIONS</p>
            <h3>Meta Advertising Certification</h3><span>IIDE — The Digital School · Meta Ads, audience targeting, Meta Pixel and conversion tracking</span>
            <a href="https://drive.google.com/file/d/15bHHqUw-bdM8e1GrcyRmC4P_6K4qQtZm/view?usp=sharing">View certificate <span>↗</span></a>
            <h3>CSMS-DEEP Diploma</h3><span>Digital education and professional development in web and content creation</span>
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
        </div>
      </section>
    </main>
  );
}
