"use client";

import { useState } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { CTA } from "@/components/common/CTA";
import { creatives } from "@/data/site";

export default function CreativeLibrary() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Healthcare", "Real Estate", "Education", "SaaS", "Ecommerce", "Local Business"];
  const visible = filter === "All" ? creatives : creatives.filter((item) => item.category === filter);

  return (
    <>
      <PageHeader
        eyebrow="CREATIVE INTELLIGENCE LIBRARY"
        title="Creative decisions, captured."
        description="Reference patterns for hooks, offers and formats. These are teaching examples, not live client files."
      />
      <section className="ed-wrap">
        <div className="filter-row">
          {categories.map((x) => (
            <button onClick={() => setFilter(x)} className={filter === x ? "active" : ""} key={x}>
              {x}
            </button>
          ))}
        </div>
        <div className="creative-grid">
          {visible.map((item, i) => (
            <article key={`${item.category}${item.type}`}>
              <div className={`creative-art ca-${i}`}>
                <span>{item.type}</span>
                <i />
              </div>
              <p>
                {item.category} · {item.type}
              </p>
              <h2>{item.body}</h2>
              <em>{item.note}</em>
            </article>
          ))}
        </div>
      </section>
      <CTA title="Need creative that earns attention?" />
    </>
  );
}
