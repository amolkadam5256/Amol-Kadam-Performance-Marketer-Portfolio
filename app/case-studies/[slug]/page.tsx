import { notFound } from "next/navigation";
import { CTA } from "@/components/common/CTA";
import { PerformanceChart } from "@/components/charts/PerformanceChart";
import { studies } from "@/data/site";
import { KokanbagCaseStudy } from "@/components/case-studies/KokanbagCaseStudy";

export function generateStaticParams() {
  return studies.map(({ slug }) => ({ slug }));
}

export default async function Study({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = studies.find(s => s.slug === slug);
  if (!study) return notFound();

  if (slug === "kokanbag-mango-pulp") {
    return <KokanbagCaseStudy />;
  }

  return (
    <>
      <section className="study-hero shell">
        <p className="overline">CASE STUDY · {study.type}</p>
        <h1>{study.title}</h1>
        <p>{study.summary}</p>
      </section>
      <section className="study-body shell">
        <aside>
          <a href="#challenge">Challenge</a>
          <a href="#strategy">Strategy</a>
          <a href="#results">Results</a>
          <a href="#learn">Learnings</a>
        </aside>
        <div>
          <section id="challenge">
            <h2>Challenge & goal</h2>
            <p>Create a clearer route from marketing activity to qualified business action, while keeping the measurement framework useful for future optimisation.</p>
          </section>
          <section id="strategy">
            <h2>Strategy & execution</h2>
            <p>Work combined channel-specific setup, audience or keyword research, conversion-focused messaging and reliable tracking through the appropriate campaign and analytics tools.</p>
            <ul>
              <li>Research and audience or search-intent definition</li>
              <li>Campaign structure and creative or landing-page alignment</li>
              <li>GA4, GTM and platform event tracking review</li>
              <li>Ongoing observation, learning and iteration</li>
            </ul>
          </section>
          <section id="results">
            <h2>Reporting view</h2>
            <PerformanceChart title="Illustrative campaign reporting view" />
          </section>
          <section id="learn">
            <h2>Key learning</h2>
            <p>Strong performance systems make it easier to understand what happens after the click—then connect that insight back into the next media, message or conversion decision.</p>
          </section>
        </div>
      </section>
      <CTA title="Talk through your next growth system." />
    </>
  );
}
