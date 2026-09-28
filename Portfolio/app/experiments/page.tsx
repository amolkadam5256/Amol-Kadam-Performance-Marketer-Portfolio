import { pageMeta } from "@/lib/seo";
import { PageHeader } from "@/components/common/PageHeader";
import { CTA } from "@/components/common/CTA";
import { experiments } from "@/data/site";

export const metadata = pageMeta({
  title: "Marketing Experiments | Amol Kadam",
  description: "Structured tests on creative format, audience design and messaging — written as operating notes, not invented winners.",
  path: "/experiments",
});

export default function Experiments() {
  return (
    <>
      <PageHeader
        eyebrow="MARKETING EXPERIMENT LAB"
        title="Learning is a growth asset."
        description="Structured questions and documented signals. These are operating notes for how tests should be read — not claimed client scoreboards."
      />
      <section className="experiment-list ed-wrap">
        {experiments.map((item, i) => (
          <article key={item.title}>
            <span>
              TEST 0{i + 1} · {item.type}
            </span>
            <h2>{item.title}</h2>
            <p>{item.copy}</p>
            <div className="experiment-notes">
              <p>
                <b>Problem</b>
                {item.problem}
              </p>
              <p>
                <b>Hypothesis</b>
                {item.hypothesis}
              </p>
              <p>
                <b>Execution</b>
                {item.execution}
              </p>
              <p>
                <b>Insight</b>
                {item.insight}
              </p>
            </div>
          </article>
        ))}
      </section>
      <CTA title="Turn a question into a useful test." />
    </>
  );
}
