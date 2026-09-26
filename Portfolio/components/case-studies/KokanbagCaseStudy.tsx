"use client";

import { motion } from "framer-motion";
import { CTA } from "@/components/common/CTA";
import { MessageSquare, Globe, Zap, Package, Target } from "lucide-react";

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 22 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.div>
);

/* ─── Data ─────────────────────────────────────────────────── */

const statCards = [
  { label: "Total Leads Generated", value: "1,714", sub: "June – Aug 2026", color: "#e6203b" },
  { label: "Total Meta Ads Spend", value: "₹22,338", sub: "June – Aug 2026", color: "#8b5cf6" },
  { label: "Avg. Cost Per Lead", value: "~₹13", sub: "Across all three months", color: "#ec4899" },
  { label: "States Reached", value: "20+", sub: "Pan-India WhatsApp coverage", color: "#14b8a6" },
];

const spendBreakdown = [
  { period: "June 2026", spend: "₹11,784.56", leads: "~900+", cpl: "~₹13" },
  { period: "July 2026", spend: "₹8,296.39", leads: "~600+", cpl: "~₹14" },
  { period: "Aug 2026 (1–20)", spend: "₹2,256.84", leads: "~200+", cpl: "~₹11" },
  { period: "Total", spend: "₹22,337.79", leads: "1,714", cpl: "~₹13 avg", bold: true },
];

// Qualified: New Lead + Follow Up + Sample + Delivered + Future
const qualifiedBreakdown = [
  { status: "New Lead", count: 90, pct: 5.3, color: "#3b82f6" },
  { status: "Need Follow Up", count: 496, pct: 28.9, color: "#f59e0b" },
  { status: "Sample Requested", count: 49, pct: 2.9, color: "#8b5cf6" },
  { status: "Delivered", count: 10, pct: 0.6, color: "#16875a" },
  { status: "Future Requirement", count: 93, pct: 5.4, color: "#06b6d4" },
];

// Uncontacted — attempted but unreachable
const uncontactedTotal = { count: 747, pct: 43.6, color: "#94a3b8" };

// Not Qualified — definitively closed
const notQualifiedBreakdown = [
  { status: "Not Interested", count: 130, pct: 7.6, color: "#ef4444" },
  { status: "Invalid / Fake Lead", count: 99, pct: 5.8, color: "#9ca3af" },
];

const qualifiedTotal = { count: 738, pct: 43.1 };
const notQualifiedTotal = { count: 229, pct: 13.3 };



const strategySteps = [
  {
    num: "01",
    title: "WhatsApp-First Lead Capture",
    desc: "Meta Ads were configured with a WhatsApp CTA button objective rather than a lead form. Every click opened a direct WhatsApp conversation with the business—enabling real-time B2B qualification of distributors, juice centres, ice cream shops, bakeries, hotels, and food manufacturers without any form friction.",
  },
  {
    num: "02",
    title: "Message Objective + Broad Audience",
    desc: "Campaigns ran on Meta's Message objective targeting food business owners, FMCG distributors, wholesale buyers, and home consumers across India. Broad demographic signals (Age 25–55, food & beverage interest, business owner) were used to let Meta's algorithm self-optimise delivery toward the highest-intent audiences.",
  },
  {
    num: "03",
    title: "Multi-Product Creative Strategy",
    desc: "Ad creatives differentiated two product lines — Mango Pulp (850 g and 3.1 kg) and Cashew — with B2B pricing tier messaging for wholesale buyers alongside retail-friendly single-tin pricing for home and gifting use.",
  },
  {
    num: "04",
    title: "CRM-Linked Lead Segmentation",
    desc: "All 1,714 inbound WhatsApp leads were manually logged and tagged: business type (Juice Shop, Bakery, Hotel, Distributor, Home Use, etc.), city/state, product interest, quantity intent, and temperature (Hot 🔴 / Warm 🟡 / Cold 🔵 / Dead ⚫). This created a prioritised daily follow-up queue.",
  },
  {
    num: "05",
    title: "Sample Order Trust Funnel",
    desc: "High-intent leads — distributors, juice centres, ice cream shops, bakeries, hotels — were offered low-quantity sample orders to build product trust before committing to bulk purchases. 10 sample-to-confirmed deliveries were completed across Pune, Bangalore, Mumbai, Surat, Goa, Kolhapur, Junagadh, Rajasthan, and Dwarka.",
  },
  {
    num: "06",
    title: "Pan-India Geographic Reach Validation",
    desc: "Despite being a Maharashtra-origin product (Kokan Hapus), WhatsApp engagement arrived from 20+ states including Gujarat, Rajasthan, Kerala, Karnataka, Telangana, Tamil Nadu, Delhi, Uttar Pradesh, and international inquiries from Dubai and the UK — validating genuine national demand.",
  },
];



const keyLearnings = [
  { icon: <MessageSquare size={20} style={{ color: "#e6203b" }} />, title: "WhatsApp outperforms lead forms for B2B food products", desc: "Direct messaging removed friction for wholesale buyers who prefer negotiating personally before committing to bulk orders." },
  { icon: <Globe size={20} style={{ color: "#e6203b" }} />, title: "Pan-India demand validated for Kokan Hapus", desc: "Leads from 20+ states confirm genuine national demand for authentic Alphonso Mango Pulp — not just a Maharashtra-regional product." },
  { icon: <Zap size={20} style={{ color: "#e6203b" }} />, title: "Follow-up speed is the biggest conversion lever", desc: "Leads contacted within 2 hours of their initial WhatsApp message had significantly higher sample-to-order conversion vs those followed up after 24+ hours." },
  { icon: <Package size={20} style={{ color: "#e6203b" }} />, title: "Sample order gap is the primary sales barrier", desc: "Logistics cost and brand trust are the main B2B friction points. Pre-paid sample campaigns with branded packaging are recommended to improve conversion." },
  { icon: <Target size={20} style={{ color: "#e6203b" }} />, title: "Product categories need dedicated campaigns", desc: "Running combined multi-product campaigns can cause category confusion and lower overall lead quality. Separate ad sets per SKU category are recommended for future seasons." },
];

/* ─── Component ─────────────────────────────────────────────── */

export function KokanbagCaseStudy() {
  return (
    <>
      {/* Hero */}
      <section className="study-hero">
        <div className="ed-wrap">
        <motion.p
          className="ed-kicker"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          CASE STUDY · Meta Ads + WhatsApp Engagement + CRM
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          KokanBag Mango Pulp — Srujan Campaign
        </motion.h1>
        <motion.p
          style={{ maxWidth: 620 }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
        >
          A full-cycle WhatsApp lead generation campaign generating 1,714 leads across India through Meta Ads Message campaigns — tracking distributors, juice centres, ice cream shops, bakeries, and retail buyers from June to August 2026.
        </motion.p>
        <motion.div
          style={{ display: "flex", gap: "10px", marginTop: "18px", flexWrap: "wrap" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {["Meta Ads", "WhatsApp CTA", "CRM Tracking", "B2B + B2C", "Pan-India Reach", "₹22K Spend"].map(tag => (
            <span
              key={tag}
              style={{
                background: "#f6f0e6",
                color: "#111",
                borderRadius: "999px",
                padding: "6px 12px",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {tag}
            </span>
          ))}
        </motion.div>
        </div>
      </section>

      {/* Body with sidebar nav */}
      <section className="study-body ed-wrap">
        <aside>
          <a href="#challenge">Challenge</a>
          <a href="#strategy">Strategy</a>
          <a href="#results">Results</a>
          <a href="#learn">Learnings</a>
        </aside>

        <div>
          {/* ── Challenge ── */}
          <section id="challenge">
            <Reveal>
              <h2>Challenge &amp; goal</h2>
              <p>
                Srujan Mango Pulp — a Kokan-origin Hapus (Alphonso) Mango Pulp brand — needed to reach wholesale buyers, distributors, ice cream manufacturers, juice shops, bakeries, and retail consumers across India without a dedicated sales team or established distribution network.
              </p>
              <p style={{ marginTop: "14px" }}>
                The challenge was threefold: build awareness for a new product in a crowded commodity market, qualify genuine B2B buyers at scale through a low-friction channel, and track every lead from first contact to delivery in a structured CRM pipeline.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <ul style={{ marginTop: "18px" }}>
                <li>No existing distribution — brand had to reach buyers nationally through digital ads alone</li>
                <li>High competition from established Mango Pulp brands with lower CPL benchmarks</li>
                <li>Bulk B2B buyers require relationship-building before committing to first orders</li>
                <li>Logistics and transport cost was a significant barrier for sample-to-order conversion</li>
                <li>CRM and follow-up had to be done manually via WhatsApp for 1,700+ contacts</li>
              </ul>
            </Reveal>
          </section>

          {/* ── Strategy ── */}
          <section id="strategy">
            <Reveal>
              <h2>Strategy &amp; execution</h2>
              <p>
                Rather than using traditional lead forms, the campaign was built entirely on Meta's Message (WhatsApp) campaign objective — driving direct one-on-one conversations with potential buyers. Every lead was then categorised, tagged, and managed through a manual CRM pipeline.
              </p>
            </Reveal>

            <div style={{ display: "flex", flexDirection: "column", gap: "0", marginTop: "28px" }}>
              {strategySteps.map((step, i) => (
                <Reveal key={step.num} delay={i * 0.07}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "52px 1fr",
                      gap: "16px",
                      paddingBottom: "24px",
                      borderBottom: i < strategySteps.length - 1 ? "1px solid #f0f0ee" : "none",
                      marginBottom: "24px",
                    }}
                  >
                    <span style={{ fontSize: "20px", fontWeight: 800, color: "#e6203b", letterSpacing: "-0.8px", paddingTop: "2px" }}>
                      {step.num}
                    </span>
                    <div>
                      <strong style={{ display: "block", fontSize: "15px", marginBottom: "7px" }}>{step.title}</strong>
                      <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* ── Results ── */}
          <section id="results">
            <Reveal>
              <h2>Results</h2>
            </Reveal>

            {/* KPI Cards */}
            <Reveal delay={0.04}>
              <p className="overline" style={{ marginTop: 0, marginBottom: "16px" }}>Overall campaign statistics</p>
            </Reveal>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "14px",
                marginBottom: "40px",
              }}
            >
              {statCards.map((card, i) => (
                <Reveal key={card.label} delay={i * 0.06}>
                  <div
                    style={{
                      background: "#fff",
                      border: "1px solid #e5e5e2",
                      borderTop: `3px solid ${card.color}`,
                      padding: "18px 20px",
                      borderRadius: "4px",
                    }}
                  >
                    <p style={{ fontSize: "10px", color: "#999", fontWeight: 700, margin: "0 0 8px", letterSpacing: "0.5px", textTransform: "uppercase" }}>
                      {card.label}
                    </p>
                    <strong style={{ fontSize: "26px", letterSpacing: "-1px", display: "block", margin: "0 0 4px" }}>
                      {card.value}
                    </strong>
                    <span style={{ fontSize: "11px", color: "#aaa" }}>{card.sub}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Monthly Spend */}
            <Reveal>
              <p className="overline" style={{ marginBottom: "14px" }}>Monthly Meta Ads spend breakdown</p>
            </Reveal>
            <Reveal delay={0.06}>
              <div style={{ overflowX: "auto", marginBottom: "40px" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
                  <thead>
                    <tr style={{ background: "#f4f4f1", textAlign: "left" }}>
                      {["Period", "Ad Spend", "Est. Leads", "Est. CPL"].map(h => (
                        <th key={h} style={{ padding: "11px 14px", fontSize: "10px", letterSpacing: "0.8px", color: "#666", fontWeight: 800, textTransform: "uppercase" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {spendBreakdown.map((row, i) => (
                      <tr
                        key={i}
                        style={{
                          borderBottom: "1px solid #f0f0ee",
                          background: (row as any).bold ? "#f4f4f1" : "transparent",
                          fontWeight: (row as any).bold ? 700 : 400,
                        }}
                      >
                        <td style={{ padding: "12px 14px" }}>{row.period}</td>
                        <td style={{ padding: "12px 14px", color: "#e6203b", fontWeight: 700 }}>{row.spend}</td>
                        <td style={{ padding: "12px 14px" }}>{row.leads}</td>
                        <td style={{ padding: "12px 14px" }}>{row.cpl}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            {/* Lead Qualification Breakdown */}
            <Reveal>
              <p className="overline" style={{ marginBottom: "18px" }}>Lead qualification breakdown — 1,714 total</p>
            </Reveal>

            <Reveal delay={0.04}>
              <div className="qualify-grid">
                <div style={{ background: "rgba(22,135,90,0.07)", border: "1px solid #16875a", borderRadius: "8px", padding: "22px 20px" }}>
                  <strong style={{ fontSize: "36px", letterSpacing: "-1.5px", color: "#16875a", display: "block" }}>{qualifiedTotal.count}</strong>
                  <span style={{ fontSize: "11px", fontWeight: 800, color: "#16875a", letterSpacing: "0.6px", textTransform: "uppercase", display: "block", marginTop: "5px" }}>Qualified pipeline</span>
                  <span style={{ fontSize: "20px", fontWeight: 800, display: "block", marginTop: "8px" }}>{qualifiedTotal.pct}%</span>
                  <span style={{ fontSize: "11px", color: "#888" }}>New, follow-up, sample, delivered, future</span>
                </div>
                <div style={{ background: "rgba(148,163,184,0.12)", border: "1px solid #94a3b8", borderRadius: "8px", padding: "22px 20px" }}>
                  <strong style={{ fontSize: "36px", letterSpacing: "-1.5px", color: "#64748b", display: "block" }}>{uncontactedTotal.count}</strong>
                  <span style={{ fontSize: "11px", fontWeight: 800, color: "#64748b", letterSpacing: "0.6px", textTransform: "uppercase", display: "block", marginTop: "5px" }}>Uncontacted</span>
                  <span style={{ fontSize: "20px", fontWeight: 800, display: "block", marginTop: "8px" }}>{uncontactedTotal.pct}%</span>
                  <span style={{ fontSize: "11px", color: "#888" }}>Attempted or queued — not yet a qualified win</span>
                </div>
                <div style={{ background: "rgba(239,68,68,0.06)", border: "1px solid #fca5a5", borderRadius: "8px", padding: "22px 20px" }}>
                  <strong style={{ fontSize: "36px", letterSpacing: "-1.5px", color: "#ef4444", display: "block" }}>{notQualifiedTotal.count}</strong>
                  <span style={{ fontSize: "11px", fontWeight: 800, color: "#ef4444", letterSpacing: "0.6px", textTransform: "uppercase", display: "block", marginTop: "5px" }}>Not qualified</span>
                  <span style={{ fontSize: "20px", fontWeight: 800, display: "block", marginTop: "8px" }}>{notQualifiedTotal.pct}%</span>
                  <span style={{ fontSize: "11px", color: "#888" }}>Not interested 130 · Invalid / fake 99</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.07}>
              <div style={{ marginBottom: "32px" }}>
                <div style={{ height: "10px", borderRadius: "6px", overflow: "hidden", display: "flex" }}>
                  <motion.div style={{ background: "#16875a", height: "100%" }}
                    initial={{ width: 0 }} whileInView={{ width: "43.1%" }} viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <motion.div style={{ background: "#94a3b8", height: "100%" }}
                    initial={{ width: 0 }} whileInView={{ width: "43.6%" }} viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <motion.div style={{ background: "#fca5a5", height: "100%", flex: 1 }}
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.95 }}
                  />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "6px", gap: "8px", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "11px", color: "#16875a", fontWeight: 700 }}>Qualified — 43.1%</span>
                  <span style={{ fontSize: "11px", color: "#64748b", fontWeight: 700 }}>Uncontacted — 43.6%</span>
                  <span style={{ fontSize: "11px", color: "#ef4444", fontWeight: 700 }}>Not qualified — 13.3%</span>
                </div>
              </div>
            </Reveal>
          </section>

          {/* ── Learnings ── */}
          <section id="learn">
            <Reveal>
              <h2>Key learnings</h2>
              <p>
                The Srujan Mango Pulp campaign validated a WhatsApp-native B2B lead generation model for perishable food products — with a cost-per-lead under ₹15 and genuine national reach from a single Meta Ads account.
              </p>
            </Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: "0", marginTop: "24px" }}>
              {keyLearnings.map((l, i) => (
                <Reveal key={l.title} delay={i * 0.07}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "36px 1fr",
                      gap: "14px",
                      paddingBottom: "22px",
                      borderBottom: i < keyLearnings.length - 1 ? "1px solid #f0f0ee" : "none",
                      marginBottom: "22px",
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "flex-start", paddingTop: "2px" }}>{l.icon}</span>
                    <div>
                      <strong style={{ display: "block", fontSize: "14px", marginBottom: "6px" }}>{l.title}</strong>
                      <p style={{ fontSize: "13px", color: "#666", lineHeight: 1.65, margin: 0 }}>{l.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        </div>
      </section>

      <CTA title="Ready to scale your product with performance marketing?" />
    </>
  );
}
