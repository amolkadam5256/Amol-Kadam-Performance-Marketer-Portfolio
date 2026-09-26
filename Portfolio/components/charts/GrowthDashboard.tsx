"use client";

import { Area, AreaChart, Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { motion } from "framer-motion";

const performance = [
  { m: "Jun", leads: 900, spend: 11.8 },
  { m: "Jul", leads: 600, spend: 8.3 },
  { m: "Aug", leads: 214, spend: 2.3 },
];

const quality = [
  { name: "Qualified", value: 43.1, color: "#16875a" },
  { name: "Uncontacted", value: 43.6, color: "#94a3b8" },
  { name: "Not qualified", value: 13.3, color: "#ef4444" },
];

export function GrowthDashboard() {
  return (
    <section className="growth-dashboard">
      <p className="dash-source">KokanBag · Meta Message ads · Jun–20 Aug 2026</p>
      <div className="dash-metrics">
        <motion.article whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
          <span>Total leads</span>
          <strong>1,714</strong>
          <b>WhatsApp conversations</b>
        </motion.article>
        <motion.article whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
          <span>Ad spend</span>
          <strong>₹22.3K</strong>
          <b>₹22,338 total</b>
        </motion.article>
        <motion.article whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
          <span>Cost per lead</span>
          <strong>~₹13</strong>
          <b>Across three months</b>
        </motion.article>
        <motion.article whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
          <span>Qualified pipeline</span>
          <strong>738</strong>
          <b>43.1% of leads</b>
        </motion.article>
      </div>

      <div className="rechart-grid">
        <motion.article whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
          <div>
            <p>Monthly leads</p>
            <span>Jun — Aug</span>
          </div>
          <ResponsiveContainer width="100%" height={210}>
            <AreaChart data={performance}>
              <defs>
                <linearGradient id="leadGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="#e6203b" stopOpacity={0.35} />
                  <stop offset="1" stopColor="#e6203b" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="m" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#888" }} />
              <YAxis hide />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="leads"
                stroke="#e6203b"
                strokeWidth={3}
                fill="url(#leadGradient)"
                isAnimationActive
                animationDuration={1200}
                animationEasing="ease-in-out"
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.article>

        <motion.article whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
          <div>
            <p>Monthly spend</p>
            <span>₹ thousands</span>
          </div>
          <ResponsiveContainer width="100%" height={210}>
            <BarChart data={performance}>
              <XAxis dataKey="m" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#888" }} />
              <YAxis hide />
              <Tooltip />
              <Bar
                dataKey="spend"
                fill="#151515"
                radius={[4, 4, 0, 0]}
                isAnimationActive
                animationDuration={1100}
                animationEasing="ease-out"
              />
            </BarChart>
          </ResponsiveContainer>
        </motion.article>

        <motion.article className="channel-chart" whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
          <div>
            <p>Lead quality</p>
            <span>1,714 total</span>
          </div>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie
                data={quality}
                dataKey="value"
                innerRadius={48}
                outerRadius={73}
                paddingAngle={4}
                isAnimationActive
                animationDuration={1200}
                animationEasing="ease-in-out"
              >
                {quality.map((c) => (
                  <Cell key={c.name} fill={c.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="channel-key">
            {quality.map((c) => (
              <span key={c.name}>
                <i style={{ background: c.color }} />
                {c.name} {c.value}%
              </span>
            ))}
          </div>
        </motion.article>
      </div>
    </section>
  );
}
