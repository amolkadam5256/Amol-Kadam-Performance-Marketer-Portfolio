"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const data = {
  Leads: [25, 36, 29, 50, 43, 58, 54, 70, 64, 76, 84, 92],
  Spend: [20, 26, 34, 31, 42, 45, 50, 58, 55, 63, 70, 77],
  ROAS: [21, 30, 27, 38, 36, 47, 43, 55, 51, 62, 70, 76],
};

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function PerformanceChart({ title = "Performance overview" }: { title?: string }) {
  const [active, setActive] = useState<keyof typeof data>("Leads");
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const series = data[active];
  const d = `M0,162 ${series.map((v, i) => `L${i * 54.5},${172 - v * 1.55}`).join(" ")}`;
  const areaD = `${d} L600,180 L0,180 Z`;

  const primaryValue = active === "Leads" ? "1,284" : active === "Spend" ? "₹8.6L" : "5.2x";

  return (
    <div className="report-chart">
      <div className="report-head">
        <div>
          <p>{title}</p>
          <AnimatePresence mode="wait">
            <motion.strong
              key={active}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.25 }}
            >
              {primaryValue}
            </motion.strong>
          </AnimatePresence>
        </div>
        <span>↗ 24.8% vs last month</span>
      </div>

      <div className="report-tabs">
        {(Object.keys(data) as Array<keyof typeof data>).map((k) => (
          <button
            key={k}
            onClick={() => setActive(k)}
            className={active === k ? "on" : ""}
          >
            {k}
          </button>
        ))}
      </div>

      <div className="svg-chart" style={{ position: "relative" }}>
        <svg viewBox="0 0 600 180" preserveAspectRatio="none" style={{ overflow: "visible" }}>
          <defs>
            <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
              <stop stopColor="#e6203b" stopOpacity=".26" />
              <stop offset="1" stopColor="#e6203b" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Area fill animated path */}
          <motion.path
            d={areaD}
            fill="url(#chartFill)"
            animate={{ d: areaD }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Line stroke animated path */}
          <motion.path
            d={d}
            fill="none"
            stroke="#e6203b"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ d }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Data point dots */}
          {series.map((val, idx) => {
            const cx = idx * 54.5;
            const cy = 172 - val * 1.55;
            const isHovered = hoveredIdx === idx;

            return (
              <g key={idx} onMouseEnter={() => setHoveredIdx(idx)} onMouseLeave={() => setHoveredIdx(null)}>
                <motion.circle
                  cx={cx}
                  cy={cy}
                  r={isHovered ? 7 : 4}
                  fill="#e6203b"
                  stroke="#fff"
                  strokeWidth={2}
                  animate={{ cx, cy, r: isHovered ? 7 : 4 }}
                  transition={{ duration: 0.3 }}
                  style={{ cursor: "pointer" }}
                />
              </g>
            );
          })}
        </svg>

        {/* Hover Tooltip display */}
        {hoveredIdx !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              position: "absolute",
              left: `${(hoveredIdx / 11) * 90 + 3}%`,
              top: "10px",
              background: "#171717",
              color: "#fff",
              padding: "4px 10px",
              borderRadius: "4px",
              fontSize: "11px",
              fontWeight: 700,
              pointerEvents: "none",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              zIndex: 10,
            }}
          >
            {months[hoveredIdx]}: {active === "Spend" ? `₹${series[hoveredIdx]}k` : active === "ROAS" ? `${(series[hoveredIdx] / 15).toFixed(1)}x` : `${series[hoveredIdx]} leads`}
          </motion.div>
        )}

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "8px", fontSize: "10px", color: "#888" }}>
          {["Jan", "Mar", "May", "Jul", "Sep", "Nov"].map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
