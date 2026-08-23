import { PageHeader } from "@/components/common/PageHeader";
import { PerformanceChart } from "@/components/charts/PerformanceChart";
import { GrowthDashboard } from "@/components/charts/GrowthDashboard";
import { CTA } from "@/components/common/CTA";
import { FAQ, resultsFaqs } from "@/components/common/FAQ";

export const metadata = { title: "Growth Reporting & Results" };

export default function Results() {
  return (
    <>
      <PageHeader
        eyebrow="RESULTS DASHBOARD"
        title="A clearer view of the growth system."
        description="A reporting framework spanning paid media, lead flow, organic visibility and conversion measurement."
      />
      <section className="shell dashboard-reveal">
        <GrowthDashboard />
      </section>
      <section className="results-layout shell">
        <PerformanceChart />
        <div className="result-notes">
          <article>
            <span>PAID MEDIA</span>
            <h2>Meta & Google Ads</h2>
            <p>Campaign reporting designed to surface cost, quality and volume together.</p>
          </article>
          <article>
            <span>ORGANIC</span>
            <h2>Search & local visibility</h2>
            <p>Keyword, landing-page and traffic trends connected to commercial intent.</p>
          </article>
          <article>
            <span>CONVERSION</span>
            <h2>Lead management</h2>
            <p>Tracking the handoff from capture to follow-up across CRM workflows.</p>
          </article>
        </div>
      </section>
      <FAQ
        items={resultsFaqs}
        title="Questions about growth reporting & attribution."
        eyebrow="REPORTING FAQS"
        description="Clear details on campaign metrics, single-source dashboard tracking, and blended ROAS calculations."
      />
      <CTA title="Need reporting you can actually use?" />
    </>
  );
}
