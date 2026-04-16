"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Sparkles, Briefcase, GraduationCap,
  Calendar, MapPin, ArrowUpRight, Zap,
} from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { portfolioData } from "@/data/portfolio";

// ── Reusable Section Title ──
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

// ── Animated timeline line that draws as you scroll ──
function TimelineLine() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <div
      ref={ref}
      className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 hidden lg:block"
    >
      {/* Animated fill line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.2, 0.7, 0.3, 1] }}
        style={{ transformOrigin: "top" }}
        className="absolute inset-0 bg-gradient-to-b from-[#C04828] to-[#E8603A]"
      />
    </div>
  );
}

// ── Single timeline dot in the center ──
function TimelineDot({ index }: { index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center justify-center"
      style={{ top: "2rem" }}
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 20,
          delay: index * 0.15,
        }}
        className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#C04828] to-[#E8603A] flex items-center justify-center shadow-lg shadow-orange-500/30 z-10"
      >
        <Zap size={16} className="text-white fill-white" />

        {/* Pulse ring */}
        <motion.div
          animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.3 }}
          className="absolute inset-0 rounded-full bg-[#C04828]/40"
        />
      </motion.div>
    </div>
  );
}

// ── Experience Card ──
function ExperienceCard({
  item,
  index,
}: {
  item: (typeof portfolioData.experience)[number];
  index: number;
}) {
  // Alternate left / right on desktop
  const isLeft = index % 2 === 0;

  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 mb-12 last:mb-0">

      {/* Timeline dot (desktop center) */}
      <TimelineDot index={index} />

      {/* Left spacer OR card */}
      <div
        className={`${
          isLeft
            ? "lg:pr-16"
            : "lg:order-2 lg:pl-16"
        }`}
      >
        {isLeft ? (
          <AnimateOnScroll direction="left" delay={index * 0.1}>
            <CardContent item={item} index={index} />
          </AnimateOnScroll>
        ) : (
          // On desktop right side — spacer
          <div className="hidden lg:block" />
        )}
      </div>

      {/* Right spacer OR card */}
      <div
        className={`${
          isLeft
            ? "lg:order-2 lg:pl-16"
            : "lg:pr-16"
        }`}
      >
        {!isLeft ? (
          <AnimateOnScroll direction="right" delay={index * 0.1}>
            <CardContent item={item} index={index} />
          </AnimateOnScroll>
        ) : (
          // On desktop left side — spacer
          <div className="hidden lg:block" />
        )}
      </div>
    </div>
  );
}

// ── Card inner content ──
function CardContent({
  item,
  index,
}: {
  item: (typeof portfolioData.experience)[number];
  index: number;
}) {
  const colors = [
    { from: "#C04828", to: "#E8603A" },
    { from: "#0ea5e9", to: "#38bdf8" },
    { from: "#8b5cf6", to: "#a78bfa" },
    { from: "#10b981", to: "#34d399" },
  ];
  const color = colors[index % colors.length];

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="group relative glass border border-zinc-200/60 dark:border-zinc-700/40 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-600"
    >
      {/* Left accent border */}
      <div
        className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full"
        style={{
          background: `linear-gradient(180deg, ${color.from}, ${color.to})`,
        }}
      />

      {/* Header row */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          {/* Icon */}
          <div
            className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md"
            style={{
              background: `linear-gradient(135deg, ${color.from}20, ${color.to}20)`,
              border: `1.5px solid ${color.from}40`,
            }}
          >
            <Briefcase
              size={18}
              style={{ color: color.from }}
            />
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg text-zinc-900 dark:text-white leading-tight">
              {item.role}
            </h3>
            <p
              className="text-sm font-semibold mt-0.5"
              style={{ color: color.from }}
            >
              {item.company}
            </p>
          </div>
        </div>

        {/* Arrow icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `${color.from}20` }}
        >
          <ArrowUpRight size={14} style={{ color: color.from }} />
        </motion.div>
      </div>

      {/* Meta row */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-lg">
          <Calendar size={11} />
          {item.period}
        </span>
        <span className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-lg">
          <MapPin size={11} />
          {item.location ?? portfolioData.location}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
        {item.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {item.tags.map((tag, i) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="px-2.5 py-1 rounded-lg text-xs font-medium"
            style={{
              background: `${color.from}12`,
              border: `1px solid ${color.from}30`,
              color: color.from,
            }}
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

// ── Journey start card (top of timeline) ──
function JourneyStartCard() {
  return (
    <AnimateOnScroll className="flex justify-center mb-12">
      <motion.div
        whileHover={{ scale: 1.03 }}
        className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl glass border border-zinc-200/60 dark:border-zinc-700/40 shadow-lg"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C04828] to-[#E8603A] flex items-center justify-center">
          <GraduationCap size={15} className="text-white" />
        </div>
        <div>
          <p className="text-xs text-zinc-400 font-mono-custom tracking-wider uppercase">
            The journey begins
          </p>
          <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
            Started coding in 2023 🚀
          </p>
        </div>
      </motion.div>
    </AnimateOnScroll>
  );
}

// ── Journey end card (bottom of timeline) ──
function JourneyEndCard() {
  return (
    <AnimateOnScroll delay={0.2} className="flex justify-center mt-12">
      <motion.div
        whileHover={{ scale: 1.03 }}
        animate={{ boxShadow: ["0 0 0px #C0482800", "0 0 30px #C0482840", "0 0 0px #C0482800"] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#C04828] to-[#E8603A] shadow-lg shadow-orange-500/30"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
        </span>
        <p className="text-sm font-semibold text-white">
          Currently here — and growing every day ✦
        </p>
      </motion.div>
    </AnimateOnScroll>
  );
}

// ── Stats row ──
function StatsRow() {
  const stats = [
    { value: "2023", label: "Started Coding",   icon: "🚀" },
    { value: "10+",  label: "Projects Built",    icon: "🛠️" },
    { value: "5+",   label: "Tech Stacks Used",  icon: "💻" },
    { value: "∞",    label: "Problems Solved",   icon: "🧩" },
  ];

  return (
    <AnimateOnScroll delay={0.2}>
      <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4, scale: 1.03 }}
            className="glass border border-zinc-200/50 dark:border-zinc-700/40 rounded-2xl p-5 text-center cursor-default"
          >
            <div className="text-2xl mb-2">{stat.icon}</div>
            <div className="font-heading font-bold text-2xl text-zinc-900 dark:text-white">
              {stat.value}
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </AnimateOnScroll>
  );
}

// ── Main Export ──
export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 bg-white dark:bg-zinc-950 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent" />
      <div className="absolute top-1/4 left-0 w-72 h-72 rounded-full bg-[#C04828]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 rounded-full bg-sky-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          eyebrow="Experience"
          title="My journey so far"
          subtitle="Every project, every late night, every bug fixed — it all counts."
        />

        {/* Timeline container */}
        <div className="relative">
          {/* Animated vertical line */}
          <TimelineLine />

          {/* Journey start */}
          <JourneyStartCard />

          {/* Experience cards */}
          {portfolioData.experience.map((item, i) => (
            <ExperienceCard key={item.id} item={item} index={i} />
          ))}

          {/* Journey end */}
          <JourneyEndCard />
        </div>

        {/* Stats row */}
        <StatsRow />
      </div>
    </section>
  );
}
