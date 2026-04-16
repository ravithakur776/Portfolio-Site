"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Sparkles, Layers, Server, Wrench, TrendingUp } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { portfolioData } from "@/data/portfolio";

// ── Types ──
type TabKey = "frontend" | "backend" | "tools";

// ── Reusable Section Title (same as About) ──
function SectionTitle({
  eyebrow, title, subtitle,
}: {
  eyebrow: string; title: string; subtitle?: string;
}) {
  return (
    <div className="text-center mb-16">
      <AnimateOnScroll>
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase text-[#C04828] bg-[#C04828]/10 border border-[#C04828]/20 mb-4">
          <Sparkles size={10} />
          {eyebrow}
        </span>
      </AnimateOnScroll>
      <AnimateOnScroll delay={0.1}>
        <h2 className="font-heading font-bold text-4xl sm:text-5xl text-zinc-900 dark:text-white mt-2">
          {title}
        </h2>
      </AnimateOnScroll>
      {subtitle && (
        <AnimateOnScroll delay={0.2}>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto text-base sm:text-lg">
            {subtitle}
          </p>
        </AnimateOnScroll>
      )}
    </div>
  );
}

// ── Animated progress bar ──
function SkillBar({
  name,
  level,
  index,
}: {
  name: string;
  level: number;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group"
    >
      {/* Label row */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          {name}
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.08 + 0.4 }}
          className="text-xs font-semibold text-[#C04828] font-mono-custom"
        >
          {level}%
        </motion.span>
      </div>

      {/* Track */}
      <div className="h-2 w-full rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
        {/* Fill */}
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{
            duration: 1.2,
            delay: index * 0.08 + 0.2,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          className="h-full rounded-full relative overflow-hidden"
          style={{
            background: `linear-gradient(90deg, #C04828, #E8603A)`,
          }}
        >
          {/* Shimmer effect on the bar */}
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

// ── Tab Button ──
function TabButton({
  active,
  onClick,
  icon: Icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ElementType;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
        active
          ? "text-white"
          : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200"
      }`}
    >
      {active && (
        <motion.div
          layoutId="skills-active-tab"
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#C04828] to-[#E8603A] shadow-lg shadow-orange-500/25"
          transition={{ type: "spring", stiffness: 420, damping: 32 }}
        />
      )}
      <span className="relative flex items-center gap-2">
        <Icon size={15} />
        {label}
      </span>
    </button>
  );
}

// ── Tech icon grid ──
const techStack = [
  { name: "Next.js",     bg: "bg-black",          text: "text-white",         abbr: "N" },
  { name: "React",       bg: "bg-sky-500",         text: "text-white",         abbr: "R" },
  { name: "Firebase",    bg: "bg-amber-500",       text: "text-white",         abbr: "F" },
  { name: "Tailwind",    bg: "bg-teal-500",        text: "text-white",         abbr: "T" },
  { name: "JavaScript",  bg: "bg-yellow-400",      text: "text-black",         abbr: "JS" },
  { name: "Node.js",     bg: "bg-green-600",       text: "text-white",         abbr: "N" },
  { name: "Git",         bg: "bg-orange-600",      text: "text-white",         abbr: "G" },
  { name: "Figma",       bg: "bg-purple-500",      text: "text-white",         abbr: "F" },
  { name: "Vercel",      bg: "bg-zinc-900",        text: "text-white",         abbr: "V" },
  { name: "MongoDB",     bg: "bg-green-700",       text: "text-white",         abbr: "M" },
  { name: "TypeScript",  bg: "bg-blue-600",        text: "text-white",         abbr: "TS" },
  { name: "VS Code",     bg: "bg-blue-500",        text: "text-white",         abbr: "VS" },
];

function TechGrid() {
  return (
    <AnimateOnScroll delay={0.2}>
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
        {techStack.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: i * 0.05,
              type: "spring",
              stiffness: 300,
            }}
            whileHover={{ scale: 1.12, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="group flex flex-col items-center gap-2 cursor-default"
          >
            {/* Icon box */}
            <div
              className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${tech.bg} ${tech.text} flex items-center justify-center font-heading font-bold text-sm shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
            >
              {tech.abbr}
            </div>
            <span className="text-xs text-zinc-500 dark:text-zinc-400 text-center leading-tight">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </AnimateOnScroll>
  );
}

// ── Currently learning strip ──
const learning = [
  "Data Structures", "Algorithms", "MongoDB",
  "Express.js", "REST APIs", "Problem Solving",
];

function LearningStrip() {
  return (
    <AnimateOnScroll delay={0.3}>
      <div className="mt-12 p-5 rounded-2xl glass border border-zinc-200/50 dark:border-zinc-700/40">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp size={16} className="text-[#C04828]" />
          <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
            Currently exploring
          </span>
          <span className="relative flex h-2 w-2 ml-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C04828] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C04828]" />
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {learning.map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#C04828]/10 text-[#C04828] border border-[#C04828]/20"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </AnimateOnScroll>
  );
}

// ── Main Export ──
export default function Skills() {
  const [activeTab, setActiveTab] = useState<TabKey>("frontend");

  const tabs: { key: TabKey; label: string; icon: React.ElementType }[] = [
    { key: "frontend", label: "Frontend",  icon: Layers },
    { key: "backend",  label: "Backend",   icon: Server },
    { key: "tools",    label: "Tools",     icon: Wrench },
  ];

  const currentSkills = portfolioData.skills[activeTab];

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 bg-white dark:bg-zinc-950 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent" />
      <div className="absolute bottom-1/3 left-0 w-64 h-64 rounded-full bg-[#C04828]/5 blur-3xl pointer-events-none" />

      <AnimateOnScroll className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          eyebrow="Skills"
          title="What I bring to the table"
          subtitle="A constantly growing toolkit — here's where I stand right now."
        />

        {/* ── Two column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left — Tabbed skill bars */}
          <div>
            <AnimateOnScroll direction="left">
              {/* Tab switcher */}
              <div className="inline-flex items-center gap-1 p-1 rounded-2xl bg-zinc-100 dark:bg-zinc-800/80 mb-8">
                {tabs.map((tab) => (
                  <TabButton
                    key={tab.key}
                    active={activeTab === tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    icon={tab.icon}
                    label={tab.label}
                  />
                ))}
              </div>
            </AnimateOnScroll>

            {/* Skill bars with tab transition */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="space-y-5"
              >
                {currentSkills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    index={i}
                  />
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Learning strip */}
            <LearningStrip />
          </div>

          {/* Right — Tech icon grid */}
          <div>
            <AnimateOnScroll direction="right">
              <div className="mb-6">
                <h3 className="font-heading font-bold text-xl text-zinc-900 dark:text-white mb-2">
                  My Tech Universe
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Tools and technologies I use regularly or have worked with.
                </p>
              </div>
            </AnimateOnScroll>

            <TechGrid />

            {/* Stats cards */}
            <AnimateOnScroll delay={0.4}>
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { value: "10+", label: "Projects", color: "text-[#C04828]" },
                  { value: "12+", label: "Technologies", color: "text-sky-500" },
                  { value: "2+",  label: "Years",  color: "text-emerald-500" },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="glass border border-zinc-200/50 dark:border-zinc-700/40 rounded-2xl p-4 text-center cursor-default"
                  >
                    <div className={`font-heading font-bold text-2xl ${stat.color}`}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
