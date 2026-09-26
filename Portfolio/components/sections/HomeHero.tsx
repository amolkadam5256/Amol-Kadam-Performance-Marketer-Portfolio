"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { PortraitHead } from "@/components/common/PortraitHead";

const ease = [0.22, 1, 0.36, 1] as const;
const springSoft = { stiffness: 95, damping: 24, mass: 0.7 };

function interactionStrength() {
  if (typeof window === "undefined") return 0;
  if (window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 720) return 0;
  if (window.innerWidth < 1024) return 0.55;
  return 1;
}

export function HomeHero() {
  const reduce = useReducedMotion();
  const strength = useRef(0);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const lightX = useMotionValue(50);
  const lightY = useMotionValue(42);

  const springX = useSpring(rawX, springSoft);
  const springY = useSpring(rawY, springSoft);

  const bgX = useTransform(springX, (value) => value * 2);
  const bgY = useTransform(springY, (value) => value * 2);
  const wordX = useTransform(springX, (value) => value * 10);
  const wordY = useTransform(springY, (value) => value * 6);
  const wordScale = useTransform(springX, (value) => 1 + Math.abs(value) * 0.012);
  const personX = useTransform(springX, (value) => value * 25);
  const personY = useTransform(springY, (value) => value * 15);
  const personRotateY = useTransform(springX, (value) => value * 4);
  const personRotateX = useTransform(springY, (value) => value * -3);
  const personScale = useTransform([springX, springY], ([x, y]) => 1 + Math.min(1, Math.hypot(x, y)) * 0.025);
  const spotlight = useMotionTemplate`radial-gradient(circle at ${lightX}% ${lightY}%, rgba(255,255,255,0.07), transparent 26%)`;

  useEffect(() => {
    const sync = () => {
      strength.current = reduce ? 0 : interactionStrength();
    };
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, [reduce]);

  function onMove(event: React.MouseEvent<HTMLElement>) {
    const power = strength.current;
    if (!power) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const nx = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const ny = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    rawX.set(nx * power);
    rawY.set(ny * power);
    lightX.set(((event.clientX - rect.left) / rect.width) * 100);
    lightY.set(((event.clientY - rect.top) / rect.height) * 100);
  }

  function onLeave() {
    rawX.set(0);
    rawY.set(0);
    lightX.set(50);
    lightY.set(42);
  }

  return (
    <section className="poster-hero" id="top" onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className="poster-stage">
        <motion.div className="poster-bg" style={{ x: bgX, y: bgY }} aria-hidden="true">
          <div className="poster-paper" />
          <div className="poster-grain" />
          <motion.div className="poster-light" style={{ backgroundImage: spotlight }} />
        </motion.div>

        <h1 className="poster-word">
          <motion.b
            className="poster-word-inner"
            style={{ x: wordX, y: wordY, scale: wordScale }}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.08, duration: 0.9, ease }}
          >
            <motion.span
              className="poster-script"
              style={{ rotate: -10 }}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={reduce ? { opacity: 1, y: 0 } : { opacity: 1, y: [0, -4, 0] }}
              transition={reduce
                ? { delay: 0.28, duration: 0.5 }
                : { opacity: { delay: 0.28, duration: 0.5 }, y: { delay: 0.55, duration: 6.2, repeat: Infinity, ease: "easeInOut" } }}
            >
              Creative
            </motion.span>
            PORTFOLIO
          </motion.b>
        </h1>

        <div className="poster-person">
          <motion.div
            className="poster-head-float"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={reduce ? { opacity: 1, y: 0 } : { opacity: 1, y: [0, -6, 0] }}
            transition={reduce
              ? { delay: 0.16, duration: 0.6 }
              : { opacity: { delay: 0.16, duration: 0.8 }, y: { delay: 0.85, duration: 6.2, repeat: Infinity, ease: "easeInOut" } }}
          >
            <motion.div
              className="poster-head-wrap"
              style={{
                x: personX,
                y: personY,
                rotateX: personRotateX,
                rotateY: personRotateY,
                scale: personScale,
              }}
            >
              <i className="poster-depth" aria-hidden="true" />
              <PortraitHead priority className="hero-head" />
            </motion.div>
          </motion.div>
        </div>

      </div>

      <div className="poster-bar">
        <motion.div
          className="poster-meta left"
          initial={reduce ? false : { opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.42, duration: 0.7, ease }}
        >
          <motion.strong
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? { opacity: 1, y: 0 } : { opacity: 1, y: [0, -3, 0] }}
            transition={reduce
              ? { delay: 0.5, duration: 0.5 }
              : { opacity: { delay: 0.5, duration: 0.55 }, y: { delay: 1.1, duration: 5.6, repeat: Infinity, ease: "easeInOut" } }}
          >
            Amol Kadam
          </motion.strong>
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.64, duration: 0.55, ease }}
          >
            Digital Marketer
          </motion.span>
        </motion.div>

        <motion.div
          className="poster-cta"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.62, duration: 0.6, ease }}
        >
          <Link href="/case-studies" className="poster-work">
            View My Work <i>→</i>
          </Link>
          <Link href="/contact" className="poster-talk">Let&apos;s Talk</Link>
        </motion.div>

        <motion.div
          className="poster-meta right"
          initial={reduce ? false : { opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease }}
        >
          <motion.em
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={reduce ? { opacity: 1, y: 0 } : { opacity: 1, y: [0, -3, 0] }}
            transition={reduce
              ? { delay: 0.58, duration: 0.5 }
              : { opacity: { delay: 0.58, duration: 0.5 }, y: { delay: 1.2, duration: 5.8, repeat: Infinity, ease: "easeInOut" } }}
          >
            Performance
          </motion.em>
          <motion.strong
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.66, duration: 0.55, ease }}
          >
            Marketer
          </motion.strong>
          <motion.ul
            className="poster-tags"
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.78, duration: 0.5, ease }}
          >
            <li>SEO</li>
            <li>Ads</li>
            <li>Growth</li>
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
