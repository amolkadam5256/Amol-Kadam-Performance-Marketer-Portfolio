"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, useScroll, useSpring } from "framer-motion";

export function LoadingBar() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 450);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <motion.div
        style={{
          scaleX,
          transformOrigin: "0%",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          backgroundColor: "var(--red)",
          zIndex: 9999,
          pointerEvents: "none",
        }}
      />

      {/* Page Loading Transition Bar */}
      {loading && (
        <motion.div
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: 1, opacity: 0.9 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "linear-gradient(90deg, #e6203b 0%, #ff5268 50%, #151515 100%)",
            boxShadow: "0 0 10px rgba(230, 32, 59, 0.7)",
            zIndex: 10000,
            transformOrigin: "0%",
            pointerEvents: "none",
          }}
        />
      )}
    </>
  );
}
