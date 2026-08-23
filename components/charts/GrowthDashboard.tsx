"use client";

import { Area, AreaChart, Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { motion } from "framer-motion";

const performance = [
  { m: "Jan", leads: 68, revenue: 2.2 },
  { m: "Feb", leads: 77, revenue: 2.7 },
  { m: "Mar", leads: 72, revenue: 2.5 },
  { m: "Apr", leads: 91, revenue: 3.4 },
  { m: "May", leads: 104, revenue: 4.1 },
  { m: "Jun", leads: 123, revenue: 4.8 },
];

const channels = [
  { name: "Meta", value: 46, color: "#e6203b" },
  { name: "Google", value: 31, color: "#151515" },
  { name: "Organic", value: 23, color: "#a8c4b7" },
];

export function GrowthDashboard() {
  return (
    <section className="growth-dashboard">
      <div className="dash-metrics">
        <motion.article whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
          <span>Total leads</span>
          <strong>1,248</strong>
          <b>↗ 24%</b>
        </motion.article>
        <motion.article whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
          <span>Ad spend</span>
          <strong>₹2.8L</strong>
          <b>↗ 18%</b>
        </motion.article>
        <motion.article whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
          <span>ROAS</span>
          <strong>4.2x</strong>
          <b>↗ 12%</b>
        </motion.article>
        <motion.article whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
          <span>Revenue</span>
          <strong>₹18L</strong>
          <b>↗ 32%</b>
        </motion.article>
      </div>

      <div className="rechart-grid">
        <motion.article whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
          <div>
            <p>Monthly leads</p>
            <span>Jan — Jun</span>
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
                isAnimationActive={true}
                animationDuration={1200}
                animationEasing="ease-in-out"
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.article>

        <motion.article whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
          <div>
            <p>Revenue trend</p>
            <span>₹ lakhs</span>
          </div>
          <ResponsiveContainer width="100%" height={210}>
            <BarChart data={performance}>
              <XAxis dataKey="m" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: "#888" }} />
              <YAxis hide />
              <Tooltip />
              <Bar
                dataKey="revenue"
                fill="#151515"
                radius={[4, 4, 0, 0]}
                isAnimationActive={true}
                animationDuration={1100}
                animationEasing="ease-out"
              />
            </BarChart>
          </ResponsiveContainer>
        </motion.article>

        <motion.article className="channel-chart" whileHover={{ y: -3 }} transition={{ duration: 0.2 }}>
          <div>
            <p>Lead sources</p>
            <span>Channel mix</span>
          </div>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie
                data={channels}
                dataKey="value"
                innerRadius={48}
                outerRadius={73}
                paddingAngle={4}
                isAnimationActive={true}
                animationDuration={1200}
                animationEasing="ease-in-out"
              >
                {channels.map((c) => (
                  <Cell key={c.name} fill={c.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="channel-key">
            {channels.map((c) => (
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
