"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedCounter } from "@/components/motion/AnimatedCounter";
import { Reveal } from "@/components/motion/Reveal";
import { MiniBarChart } from "@/components/charts/MiniBarChart";
import { FAQ } from "@/components/common/FAQ";
import amolKadamHero from "../assets/Amolkadam-1.webp";

const Arrow = () => <span aria-hidden="true">↗</span>;

const results = [
  {
    metric: "2.4x",
    label: "Qualified leads",
    note: "in 90 days",
    type: "Meta Ads",
    color: "blue",
    barValues: [25, 45, 38, 72, 55, 84, 100],
    barColor: "#7a9c8e",
  },
  {
    metric: "46%",
    label: "Lower cost per lead",
    note: "after 6 weeks",
    type: "Google Ads",
    color: "orange",
    barValues: [30, 52, 40, 78, 62, 88, 98],
    barColor: "#d89f67",
  },
  {
    metric: "187%",
    label: "Organic growth",
    note: "year over year",
    type: "SEO",
    color: "green",
    barValues: [35, 55, 45, 82, 68, 92, 100],
    barColor: "#8fb676",
  },
];

const services = [
  ["01", "Meta Ads", "Full-funnel campaigns engineered for reliable pipeline, not vanity reach."],
  ["02", "Google Ads", "High-intent search campaigns that turn demand into revenue."],
  ["03", "SEO & Local SEO", "Sustainable visibility for searches that drive commercial action."],
  ["04", "Analytics & Tracking", "Clean measurement systems to make every decision accountable."],
];

const testimonials = [
  { quote: "Amol sees the business behind the brief. He didn't just improve our paid performance—he changed how we thought about growth.", initials: "RM", name: "Rohan Mehta", role: "Founder, Casa Studios" },
  { quote: "The work brought structure to our acquisition efforts. We could finally see what was working, what needed attention, and what to test next.", initials: "SK", name: "Sonal Kulkarni", role: "Marketing Lead, HealthFirst" },
  { quote: "Amol connected the ads, landing page and reporting into one clear system. The team moved faster because the decisions became easier to trust.", initials: "AP", name: "Amit Patil", role: "Director, Urbanly" },
];

export default function Home() {
  const [activeMetric, setActiveMetric] = useState<"Leads" | "Spend" | "ROAS">("Leads");
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveTestimonial(current => (current + 1) % testimonials.length), 6000);
    return () => window.clearInterval(timer);
  }, []);

  const values = activeMetric === "Leads" ? [42, 57, 46, 66, 59, 76, 68, 90, 84, 97, 113, 126] : activeMetric === "Spend" ? [34, 40, 48, 44, 55, 58, 62, 73, 70, 80, 92, 101] : [32, 47, 42, 61, 56, 72, 67, 85, 78, 94, 108, 118];
  const primary = activeMetric === "Leads" ? "1,284" : activeMetric === "Spend" ? "₹8.6L" : "5.2x";
  const testimonial = testimonials[activeTestimonial];

  const areaPath = `M0,180 ${values.map((v, i) => `L${i * 54.5},${185 - v * 1.4}`).join(" ")} L600,190 L0,190 Z`;
  const linePath = `M0,180 ${values.map((v, i) => `L${i * 54.5},${185 - v * 1.4}`).join(" ")}`;

  return (
    <main>
      <nav className="nav shell">
        <a href="#top" className="brand"><i />AMOL<span>.</span></a>
        <div className="navlinks"><a href="#work">Case studies</a><a href="#services">Services</a><a href="#insights">Insights</a><a href="/about-amol-kadam">About</a></div>
        <a href="#contact" className="button button-dark nav-cta">Let&apos;s talk <Arrow /></a>
      </nav>

      <section id="top" className="hero shell">
        <motion.div className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="pulse" /> Independent growth partner · Pune, India
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 24, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          Growth systems for<br /><em>ambitious</em> businesses.
        </motion.h1>
        <motion.p className="hero-copy" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16, ease: "easeOut" }}>
          I help category-defining teams acquire customers with performance marketing, search, and measurement that compounds.
        </motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.28, ease: "easeOut" }}>
          <a href="#work" className="button button-red">Explore the work <Arrow /></a>
          <a href="#contact" className="text-link">Book a consultation <Arrow /></a>
        </motion.div>
        <motion.div className="hero-foot" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.38 }}>
          <div className="avatars"><b>AK</b><b>RS</b><b>SP</b><b>+</b></div>
          <p>Trusted by growth-minded teams<br /><strong>across India & beyond</strong></p>
        </motion.div>
        <motion.div className="hero-art" aria-label="Portrait of Amol Kadam" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}>
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <Image className="hero-photo" src={amolKadamHero} alt="Amol Kadam" priority sizes="(max-width: 760px) 380px, 480px" />
          <div className="hero-stamp">
            <span>Independent</span>
            <strong>Growth<br />Partner</strong>
            <i>↗</i>
          </div>
        </motion.div>
      </section>

      {/* Trusted section with scroll reveal */}
      <section className="trusted">
        <motion.div
          className="shell trusted-row"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p>BUILDING GROWTH FOR</p>
          <div>HealthFirst</div>
          <div className="serif">casa.</div>
          <div>BRIGHTER</div>
          <div className="thin">NEXA</div>
          <div className="script">Urbanly</div>
        </motion.div>
      </section>

      {/* Metric strip with scroll reveal */}
      <section className="metric-strip">
        <div className="shell">
          <Reveal><article><strong><AnimatedCounter end={50} prefix="₹" suffix="L+"/></strong><span>Ad spend framework</span></article></Reveal>
          <Reveal delay={.08}><article><strong><AnimatedCounter end={1200} suffix="+"/></strong><span>Lead-generation signals</span></article></Reveal>
          <Reveal delay={.16}><article><strong><AnimatedCounter end={4.2} suffix="x" decimals={1}/></strong><span>Illustrative ROAS view</span></article></Reveal>
          <Reveal delay={.24}><article><strong><AnimatedCounter end={8} suffix="+"/></strong><span>Industries explored</span></article></Reveal>
        </div>
      </section>

      {/* Selected Results with scroll stagger */}
      <section className="proof shell" id="work">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div><p className="overline">SELECTED RESULTS</p><h2>The numbers tell<br />the story.</h2></div>
          <a className="text-link" href="#contact">View all case studies <Arrow /></a>
        </motion.div>
        <div className="result-grid">
          {results.map((item, index) => (
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`result-card ${item.color}`}
              key={item.type}
            >
              <p>{item.type}</p>
              <strong>{item.metric}</strong>
              <h3>{item.label}</h3>
              <span>{item.note}</span>

              <div style={{ position: "absolute", right: "22px", top: "32px" }}>
                <MiniBarChart values={item.barValues} barColor={item.barColor} />
              </div>

              <a href="#contact">View case study <Arrow /></a>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Dashboard Section with scroll reveal */}
      <section className="dashboard-wrap">
        <div className="dashboard shell">
          <motion.div
            className="dash-intro"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="overline">CLARITY OVER CHAOS</p>
            <h2>Every move<br />measured.</h2>
            <p>Growth feels different when your data is a decision-making system, not another dashboard to ignore.</p>
            <a href="#contact" className="button button-light">See my approach <Arrow /></a>
          </motion.div>

          <motion.div
            className="dash-card"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="dash-top">
              <div><span>Growth overview</span><strong>Jan — Dec 2024</strong></div>
              <button>•••</button>
            </div>

            <div className="metric-tabs">
              {(["Leads", "Spend", "ROAS"] as const).map((tab) => (
                <button key={tab} className={activeMetric === tab ? "active" : ""} onClick={() => setActiveMetric(tab)}>
                  {tab}
                </button>
              ))}
            </div>

            <div className="dash-value">
              <AnimatePresence mode="wait">
                <motion.strong
                  key={primary}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.2 }}
                >
                  {primary}
                </motion.strong>
              </AnimatePresence>
              <span>↗ 24.8% <small>vs previous period</small></span>
            </div>

            <div className="chart">
              <div className="chart-grid">
                <span>120</span><span>80</span><span>40</span><span>0</span>
              </div>
              <svg viewBox="0 0 600 190" preserveAspectRatio="none" aria-label={`${activeMetric} performance chart`}>
                <defs>
                  <linearGradient id="fade" x1="0" x2="0" y1="0" y2="1">
                    <stop stopColor="#e6203b" stopOpacity=".23" />
                    <stop offset="1" stopColor="#e6203b" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <motion.path
                  className="area"
                  d={areaPath}
                  animate={{ d: areaPath }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
                <motion.path
                  className="line"
                  d={linePath}
                  animate={{ d: linePath }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />
              </svg>
              <div className="months">
                <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services List Section with scroll reveal */}
      <section className="services shell" id="services">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div><p className="overline">WHAT I DO</p><h2>Built for the<br />whole funnel.</h2></div>
          <p className="side-copy">Not a collection of tactics. A connected growth practice—designed around the moments that make customers act.</p>
        </motion.div>
        <div className="services-list">
          {services.map(([num, title, desc], idx) => (
            <motion.a
              href="#contact"
              key={num}
              className="service-row"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
            >
              <span>{num}</span><h3>{title}</h3><p>{desc}</p><b><Arrow /></b>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Testimonials with scroll reveal */}
      <section className="quote-section" aria-label="Testimonials">
        <motion.div
          className="quote-card shell"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="quote-mark">“</div>
          <blockquote key={testimonial.name}>{testimonial.quote}</blockquote>
          <div className="quote-person">
            <div className="person-initial">{testimonial.initials}</div>
            <p><strong>{testimonial.name}</strong><br />{testimonial.role}</p>
            <div className="testimonial-controls">
              <button type="button" onClick={() => setActiveTestimonial(current => (current - 1 + testimonials.length) % testimonials.length)} aria-label="Previous testimonial">←</button>
              <span>{String(activeTestimonial + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}</span>
              <button type="button" onClick={() => setActiveTestimonial(current => (current + 1) % testimonials.length)} aria-label="Next testimonial">→</button>
            </div>
          </div>
          <div className="testimonial-dots" role="tablist" aria-label="Choose testimonial">
            {testimonials.map((item, index) => (
              <button key={item.name} type="button" className={index === activeTestimonial ? "active" : ""} onClick={() => setActiveTestimonial(index)} role="tab" aria-selected={index === activeTestimonial} aria-label={`Show testimonial ${index + 1}`} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Insights Articles Section with scroll reveal */}
      <section className="insights shell" id="insights">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div><p className="overline">FROM THE LAB</p><h2>Notes on growth.</h2></div>
          <a className="text-link" href="#contact">All insights <Arrow /></a>
        </motion.div>
        <div className="article-grid">
          <motion.article
            className="feature-article"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
          >
            <p>EXPERIMENTS · 8 MIN READ</p>
            <h3>Why your best ad is probably not your highest converting one.</h3>
            <a href="#contact">Read article <Arrow /></a>
            <div className="article-graphic"><span>CONVERSION<br />IS A SYSTEM</span></div>
          </motion.article>

          <motion.article
            className="small-article"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <p>MARKETING STRATEGY · 6 MIN READ</p>
            <h3>The difference between demand capture and demand creation.</h3>
            <a href="#contact">Read article <Arrow /></a>
          </motion.article>

          <motion.article
            className="small-article red-article"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <p>ANALYTICS · 5 MIN READ</p>
            <h3>Three tracking questions to ask before scaling spend.</h3>
            <a href="#contact">Read article <Arrow /></a>
          </motion.article>
        </div>
      </section>

      {/* 14 FAQs Section */}
      <FAQ />

      {/* Contact banner section with scroll reveal */}
      <section className="contact" id="contact">
        <motion.div
          className="shell contact-inner"
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="overline">HAVE A GROWTH PROBLEM?</p>
          <h2>Let&apos;s make<br /><em>progress.</em></h2>
          <p>Tell me where you want to go. I&apos;ll bring the strategy to get there.</p>
          <a href="mailto:hello@amolkadam.com" className="button button-red">Start a conversation <Arrow /></a>
        </motion.div>
      </section>

      <footer className="shell footer">
        <a className="brand" href="#top"><i />AMOL<span>.</span></a>
        <p>© 2025 Amol Kadam. Built with intent.</p>
        <div><a href="#contact">LinkedIn</a><a href="#contact">Instagram</a></div>
      </footer>
    </main>
  );
}
