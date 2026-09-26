"use client";

import { motion } from "framer-motion";

interface MiniBarChartProps {
  values?: number[];
  colorClass?: string;
  barColor?: string;
}

const defaultValues = [25, 45, 38, 72, 55, 84, 100];

export function MiniBarChart({ values = defaultValues, barColor }: MiniBarChartProps) {
  const maxVal = Math.max(...values, 100);

  return (
    <div className="mini-chart" style={{ display: "flex", alignItems: "flex-end", gap: "5px", height: "150px" }}>
      {values.map((val, idx) => {
        const heightPct = Math.max(15, Math.round((val / maxVal) * 100));
        return (
          <motion.i
            key={idx}
            style={{
              width: "9px",
              height: `${heightPct}%`,
              borderRadius: "3px 3px 0 0",
              backgroundColor: barColor || undefined,
              transformOrigin: "bottom",
              display: "block",
            }}
            initial={{ scaleY: 0, opacity: 0.2 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: idx * 0.07,
              ease: [0.34, 1.56, 0.64, 1],
            }}
            whileHover={{
              scaleY: 1.15,
              filter: "brightness(1.15)",
              transition: { duration: 0.2 },
            }}
            animate={{
              y: [0, -3, 0],
            }}
            /* @ts-ignore */
            transition={{
              y: {
                duration: 2.2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: idx * 0.18 + 0.6,
              },
            }}
          />
        );
      })}
    </div>
  );
}
