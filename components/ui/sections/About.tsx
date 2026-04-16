"use client";

import { motion } from "framer-motion";
import {
  MapPin, Coffee, Code2, Sparkles,
  ArrowUpRight, CheckCircle2,
} from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { portfolioData } from "@/data/portfolio";

// Section title reused across all sections
function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
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

// Profile card on the left
function ProfileCard() {
  const { about, name, location } = portfolioData;

  return (
    <AnimateOnScroll direction="left" className="w-full lg:w-auto">
      <div className="relative mx-auto w-full max-w-sm">

        {/* Glow ring behind card */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#C04828]/30 to-[#E8603A]/10 blur-2xl scale-110 pointer-events-none" />

        {/* Main card */}
        <div className="relative glass border border-zinc-200/50 dark:border-zinc-700/40 rounded-3xl p-6 shadow-2xl">

          {/* Avatar area */}
          <div className="relative w-24 h-24 mx-auto mb-4">
            {/* Spinning gradient ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full bg-gradient-to-br from-[#C04828] via-[#E8603A] to-transparent p-[3px]"
            >
              <div className="w-full h-full rounded-full bg-white dark:bg-zinc-900" />
            </motion.div>

            {/* Initials avatar */}
            <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-[#C04828] to-[#E8603A] flex items-center justify-center">
              <span className="font-heading font-bold text-2xl text-white">
                {name.split(" ").map((n) => n[0]).join("")}
              </span>
            </div>

            {/* Online badge */}
            <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-emerald-400 border-2 border-white dark:border-zinc-900 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white" />
            </div>
          </div>

          {/* Name + location */}
          <div className="text-center mb-6">
            <h3 className="font-heading font-bold text-xl text-zinc-900 dark:text-white">
              {name}
            </h3>
            <p className="text-sm text-[#C04828] font-medium mt-1">
              {portfolioData.title}
            </p>
            <div className="flex items-center justify-center gap-1 mt-2 text-xs text-zinc-500 dark:text-zinc-400">
              <MapPin size={11} />
              {location}
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-3">
            {about.highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i + 0.3 }}
                className="flex items-center justify-between py-2 px-3 rounded-xl bg-zinc-100/80 dark:bg-zinc-800/50"
              >
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  {item.label}
                </span>
                <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                  {item.value}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Fun facts */}
          <div className="mt-5 grid grid-cols-2 gap-2">
            {about.funFacts.map((fact, i) => (
              <motion.div
                key={fact.fact}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i + 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 p-2 rounded-xl glass border border-zinc-200/50 dark:border-zinc-700/30"
              >
                <span className="text-base">{fact.emoji}</span>
                <span className="text-xs text-zinc-600 dark:text-zinc-400 leading-tight">
                  {fact.fact}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating coffee badge */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-4 -right-4 glass border border-zinc-200/50 dark:border-zinc-700/50 rounded-2xl px-3 py-2 shadow-lg flex items-center gap-2"
        >
          <Coffee size={14} className="text-[#C04828]" />
          <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
            Coffee → Code
          </span>
        </motion.div>

        {/* Floating code badge */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-4 -left-4 glass border border-zinc-200/50 dark:border-zinc-700/50 rounded-2xl px-3 py-2 shadow-lg flex items-center gap-2"
        >
          <Code2 size={14} className="text-emerald-500" />
          <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
            Always learning
          </span>
        </motion.div>
      </div>
    </AnimateOnScroll>
  );
}

// Right side text content
function AboutContent() {
  const { about } = portfolioData;

  return (
    <div className="flex-1 space-y-8">

      {/* Intro text */}
      <AnimateOnScroll direction="right">
        <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed font-medium">
          {about.intro}
        </p>
      </AnimateOnScroll>

      <AnimateOnScroll direction="right" delay={0.1}>
        <p className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed">
          {about.description}
        </p>
      </AnimateOnScroll>

      {/* Tech highlights */}
      <AnimateOnScroll direction="right" delay={0.2}>
        <div>
          <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-3 flex items-center gap-2">
            <CheckCircle2 size={16} className="text-[#C04828]" />
            Technologies I work with
          </p>
          <div className="flex flex-wrap gap-2">
            {about.techHighlights.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i + 0.3 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="px-3 py-1.5 rounded-lg text-sm font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 hover:border-[#C04828]/50 hover:text-[#C04828] transition-all duration-200 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </AnimateOnScroll>

      {/* CTA row */}
      <AnimateOnScroll direction="right" delay={0.3}>
        <div className="flex flex-wrap gap-4 pt-2">
          <motion.a
            href={portfolioData.resumeUrl}
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#C04828] to-[#E8603A] text-white font-semibold text-sm shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300"
          >
            Download Resume
            <ArrowUpRight size={16} />
          </motion.a>

          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-semibold text-sm hover:border-[#C04828] hover:text-[#C04828] transition-all duration-300"
          >
            Let&apos;s Talk
            <ArrowUpRight size={16} />
          </motion.a>
        </div>
      </AnimateOnScroll>
    </div>
  );
}

// ── Main Export ──
export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 bg-zinc-50 dark:bg-zinc-900 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent" />
      <div className="absolute top-1/2 right-0 w-72 h-72 rounded-full bg-[#C04828]/5 blur-3xl pointer-events-none" />

      <AnimateOnScroll className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          eyebrow="About Me"
          title="The person behind the code"
          subtitle="A little bit about who I am, what I do, and what drives me."
        />

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          <ProfileCard />
          <AboutContent />
        </div>
      </AnimateOnScroll>
    </section>
  );
}
