import type { Metadata } from "next";
import { PageHeader } from "@/components/common/PageHeader";
import { CTA } from "@/components/common/CTA";
import { testimonials } from "@/data/site";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Client feedback on Amol Kadam’s performance marketing, measurement and growth systems.",
  alternates: { canonical: "/testimonials" },
};

export default function Testimonials() {
  return (
    <>
      <PageHeader
        eyebrow="TESTIMONIALS"
        title="Trust is built through the work."
        description="Feedback from teams who used the same operating approach: ads, pages, tracking and follow-up in one system."
      />
      <section className="testimonial-grid ed-wrap">
        {testimonials.map((item) => (
          <article key={item.name} className="testimonial-card">
            <p className="quote-mark">“</p>
            <blockquote>{item.quote}</blockquote>
            <div className="quote-person">
              <div className="person-initial">{item.initials}</div>
              <p>
                <strong>{item.name}</strong>
                <br />
                {item.role}
              </p>
            </div>
          </article>
        ))}
      </section>
      <CTA title="Let’s build the next strong result." />
    </>
  );
}
