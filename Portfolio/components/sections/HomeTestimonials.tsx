"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EditorialButton } from "@/components/ui/EditorialButton";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/data/site";

export function HomeTestimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % testimonials.length), 6000);
    return () => window.clearInterval(timer);
  }, []);

  const quote = testimonials[active];

  return (
    <section className="ed-section" id="clients">
      <div className="ed-wrap ed-quote">
        <Reveal>
          <p className="ed-kicker">06 — Client say</p>
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={quote.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              {quote.quote}
            </motion.blockquote>
          </AnimatePresence>
          <div className="ed-people">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                className={index === active ? "on" : ""}
                onClick={() => setActive(index)}
              >
                <i>{item.initials}</i>
                <span>
                  {item.name}
                  <small>{item.role}</small>
                </span>
              </button>
            ))}
          </div>
          <EditorialButton href="/testimonials" tone="ghost">
            All testimonials
          </EditorialButton>
        </Reveal>
      </div>
    </section>
  );
}
