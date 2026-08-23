"use client";

import { motion } from "framer-motion";

export function CTA({
  title = "Have a growth problem?",
  copy = "Tell me where you want to go. I’ll bring a clear path to get there.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="inline-cta">
      <motion.div
        className="shell"
        initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="overline">LET’S TALK</p>
        <h2>{title}</h2>
        <p>{copy}</p>
        <a className="button button-red" href="/contact">
          Book consultation <span>↗</span>
        </a>
      </motion.div>
    </section>
  );
}
