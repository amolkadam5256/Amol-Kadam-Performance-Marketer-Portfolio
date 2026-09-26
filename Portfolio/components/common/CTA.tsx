"use client";

import { motion } from "framer-motion";
import { EditorialButton } from "@/components/ui/EditorialButton";

export function CTA({
  title = "Have a growth problem?",
  copy = "Tell me where you want to go. I’ll bring a clear path to get there.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="ed-cta">
      <motion.div
        className="ed-wrap"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="ed-kicker">Let’s talk</p>
        <h2>{title}</h2>
        <p>{copy}</p>
        <div className="ed-hero-actions">
          <EditorialButton href="/contact" tone="cream">
            Book a consultation
          </EditorialButton>
        </div>
      </motion.div>
    </section>
  );
}
