"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  AtSign,
  Code2,
  Download,
  Globe,
  Layers,
  Mail,
  Sparkles,
  Zap,
} from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { portfolioData } from "@/data/portfolio";

function useRotatingText(words: string[], interval = 2600) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [interval, words.length]);

  return words[index];
}

const floatingOrbs = [
  "left-[8%] top-[18%] h-24 w-24 bg-white/8",
  "right-[12%] top-[10%] h-32 w-32 bg-[#F06A37]/18",
  "left-[20%] bottom-[18%] h-20 w-20 bg-[#F06A37]/15",
  "right-[30%] bottom-[16%] h-16 w-16 bg-white/6",
];

export default function Hero() {
  const currentRole = useRotatingText(portfolioData.roles);

  const scrollToSection = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen items-center overflow-hidden px-4 pt-28 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
        <div className="absolute left-1/2 top-20 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[#F06A37]/14 blur-[120px]" />
        <div className="absolute right-[-8rem] top-1/3 h-[22rem] w-[22rem] rounded-full bg-white/5 blur-[100px]" />
        <div className="absolute left-[-6rem] bottom-8 h-[18rem] w-[18rem] rounded-full bg-[#C04828]/16 blur-[110px]" />
        {floatingOrbs.map((orb, index) => (
          <motion.div
            key={orb}
            animate={{ y: [0, -18, 0], opacity: [0.45, 0.8, 0.45] }}
            transition={{
              duration: 5 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.35,
            }}
            className={`absolute rounded-full blur-3xl ${orb}`}
          />
        ))}
      </div>

      <AnimateOnScroll
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-14 lg:gap-20"
        delay={0.04}
      >
        <div className="grid items-end gap-10 lg:items-center lg:gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
          <div className="min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="eyebrow-chip"
            >
              <Sparkles size={13} className="text-[#F06A37]" />
              Available for freelance and full-time work
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="mt-7"
            >
              <p className="font-mono-custom text-[11px] uppercase tracking-[0.24em] text-zinc-500 sm:tracking-[0.42em]">
                {portfolioData.title} from Mathura
              </p>

              <h1 className="mt-5 font-heading font-extrabold uppercase tracking-[-0.06em] text-white">
                <span className="block text-[clamp(3.5rem,19vw,6.4rem)] leading-[0.85] sm:text-[clamp(4.8rem,14vw,7.2rem)] lg:text-[clamp(4.8rem,6.6vw,7.1rem)] xl:text-[7.6rem]">
                  Ravi
                </span>
                <span className="text-outline block text-[clamp(3.5rem,19vw,6.4rem)] leading-[0.85] sm:text-[clamp(4.8rem,14vw,7.2rem)] lg:text-[clamp(4.8rem,6.6vw,7.1rem)] xl:text-[7.6rem]">
                  Thakur
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-6 flex flex-wrap items-center gap-4"
            >
              <span className="font-mono-custom text-[11px] uppercase tracking-[0.34em] text-zinc-600">
                Current lens
              </span>
              <div className="h-px w-10 bg-white/10" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRole}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.28 }}
                  className="text-lg font-semibold text-[#F06A37] sm:text-2xl"
                >
                  {currentRole}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.62, delay: 0.24 }}
              className="mt-7 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg"
            >
              {portfolioData.about.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.62, delay: 0.32 }}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <motion.a
                href="#projects"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection("#projects");
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F06A37] px-7 py-4 text-sm font-semibold text-white shadow-2xl shadow-orange-500/20 transition-colors hover:bg-[#ff7a47]"
              >
                Explore Projects
                <ArrowUpRight size={16} />
              </motion.a>

              <motion.a
                href={portfolioData.resumeUrl}
                download
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white backdrop-blur-xl transition-colors hover:bg-white/[0.06]"
              >
                Download Resume
                <Download size={16} />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.62, delay: 0.42 }}
              className="mt-12 flex flex-wrap items-center gap-4"
            >
              {[
                { icon: Globe, href: portfolioData.social.github, label: "GitHub" },
                { icon: AtSign, href: portfolioData.social.linkedin, label: "LinkedIn" },
                { icon: Mail, href: `mailto:${portfolioData.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-[#F06A37]/40 hover:text-white"
                >
                  <Icon size={15} />
                  {label}
                </a>
              ))}
            </motion.div>
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.72, delay: 0.2 }}
            className="panel-surface relative z-30 min-w-0 rounded-[2rem] p-6 text-white sm:p-8 lg:ml-2"
          >
            <div className="flex items-center justify-between">
              <div className="min-w-0 pr-4">
                <p className="font-mono-custom text-[11px] uppercase tracking-[0.34em] text-zinc-500">
                  Snapshot
                </p>
                <p className="mt-3 max-w-[12ch] text-balance font-heading text-2xl font-bold leading-tight sm:text-[2rem]">
                  {portfolioData.title}
                </p>
              </div>
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F06A37]/15 text-[#F9A27D]">
                <Zap size={18} className="fill-current" />
              </span>
            </div>

            <div className="accent-line my-6" />

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "Current stack", value: "Next.js + MERN Foundations", icon: Code2 },
                { label: "Featured project", value: portfolioData.projects[0].title, icon: Layers },
                { label: "Based in", value: portfolioData.location, icon: Sparkles },
                { label: "Open for", value: "Frontend / Entry-level roles", icon: ArrowUpRight },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4"
                >
                  <item.icon size={16} className="text-[#F06A37]" />
                  <p className="mt-4 font-mono-custom text-[10px] uppercase tracking-[0.28em] text-zinc-500">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-zinc-100">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.6rem] border border-white/10 bg-black/25 p-5">
              <p className="font-mono-custom text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                Primary focus
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {portfolioData.about.techHighlights.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.62, delay: 0.46 }}
          className="panel-surface flex flex-col gap-6 rounded-[2rem] px-6 py-5 text-white sm:flex-row sm:items-center sm:justify-between sm:px-8"
        >
          <div className="flex flex-wrap items-center gap-6">
            {[
              { value: "10+", label: "Projects built" },
              { value: "2+", label: "Years learning" },
              { value: "100%", label: "Intentional craft" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-3xl font-bold">{stat.value}</p>
                <p className="font-mono-custom text-[10px] uppercase tracking-[0.28em] text-zinc-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollToSection("#about")}
            className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300 transition-colors hover:text-white sm:self-auto"
          >
            Scroll to explore
            <ArrowDown size={15} />
          </button>
        </motion.div>
      </AnimateOnScroll>
    </section>
  );
}
