"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  AtSign,
  Code2,
  Download,
  Heart,
  Mail,
  MapPin,
  Phone,
  Zap,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Code2, href: portfolioData.social.github, label: "GitHub" },
  { icon: AtSign, href: portfolioData.social.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${portfolioData.email}`, label: "Email" },
];

export default function Footer() {
  const phoneHref = `tel:${portfolioData.phone.replace(/[^\d+]/g, "")}`;

  const scrollToSection = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden px-4 pb-8 pt-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="panel-surface relative overflow-hidden rounded-[2.4rem] p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F06A37]/80 to-transparent" />
          <div className="pointer-events-none absolute left-[-6rem] top-8 h-40 w-40 rounded-full bg-white/5 blur-[80px]" />
          <div className="pointer-events-none absolute right-[-5rem] top-[-4rem] h-52 w-52 rounded-full bg-[#F06A37]/14 blur-[100px]" />

          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl lg:min-w-0">
                <div className="eyebrow-chip">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Available for internships, roles, and freelance work
                </div>
                <h2 className="mt-6 font-heading text-4xl font-extrabold uppercase tracking-[-0.05em] text-white sm:text-6xl">
                  Crafting digital experiences that leave a lasting impression.
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
                  If you have a role, project brief, or collaboration idea, I&apos;m
                  easy to reach and quick to respond. Let&apos;s build something
                  clean, thoughtful, and memorable.
                </p>
              </div>

              <div className="grid w-full gap-3 sm:grid-cols-3 lg:w-auto lg:max-w-[32rem] lg:min-w-0">
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 transition-colors hover:bg-white/[0.07]"
                >
                  <Mail size={16} className="text-[#F06A37]" />
                  <p className="mt-4 font-mono-custom text-[10px] uppercase tracking-[0.26em] text-zinc-500">
                    Email
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white break-all">
                    {portfolioData.email}
                  </p>
                </a>

                <a
                  href={phoneHref}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 transition-colors hover:bg-white/[0.07]"
                >
                  <Phone size={16} className="text-[#F06A37]" />
                  <p className="mt-4 font-mono-custom text-[10px] uppercase tracking-[0.26em] text-zinc-500">
                    Phone
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white">
                    {portfolioData.phone}
                  </p>
                </a>

                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4">
                  <MapPin size={16} className="text-[#F06A37]" />
                  <p className="mt-4 font-mono-custom text-[10px] uppercase tracking-[0.26em] text-zinc-500">
                    Location
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white">
                    {portfolioData.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[1.8rem] border border-white/10 bg-black/20 p-5 sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-mono-custom text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                      Quick links
                    </p>
                    <p className="mt-2 text-sm text-zinc-300">
                      Jump where you want without scrolling forever.
                    </p>
                  </div>

                  <motion.a
                    href={portfolioData.resumeUrl}
                    download
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/[0.07]"
                  >
                    Download Resume
                    <Download size={15} />
                  </motion.a>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => scrollToSection(link.href)}
                      className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-left text-sm font-medium text-zinc-200 transition-colors hover:border-[#F06A37]/20 hover:bg-white/[0.06]"
                    >
                      {link.label}
                      <ArrowUpRight size={15} className="text-zinc-500" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.8rem] border border-white/10 bg-black/20 p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#C04828] to-[#F07B48] text-white shadow-lg shadow-orange-500/20">
                      <Zap size={17} className="fill-current" />
                    </span>
                    <div>
                      <p className="font-heading text-xl font-bold tracking-tight">
                        {portfolioData.name}
                      </p>
                      <p className="mt-1 text-sm text-zinc-400">
                        {portfolioData.tagline}
                      </p>
                    </div>
                  </div>

                  <span className="hidden rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] font-medium text-emerald-300 sm:inline-flex">
                    Open to opportunities
                  </span>
                </div>

                <div className="accent-line my-5" />

                <div className="flex flex-wrap items-center gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-[#F06A37]/40 hover:text-white"
                    >
                      <social.icon size={15} />
                      {social.label}
                    </a>
                  ))}
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <motion.a
                    href="#contact"
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection("#contact");
                    }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F06A37] px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-orange-500/20 transition-colors hover:bg-[#ff7a47]"
                  >
                    Start a Conversation
                    <ArrowUpRight size={15} />
                  </motion.a>

                  <a
                    href={phoneHref}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/[0.07]"
                  >
                    Call Now
                    <Phone size={15} />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-white/8 pt-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
              <p className="inline-flex items-center gap-2">
                Crafted with <Heart size={14} className="fill-[#F06A37] text-[#F06A37]" /> using Next.js, Tailwind, and Framer Motion
              </p>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center gap-2 text-zinc-400 transition-colors hover:text-white"
              >
                Back to top
                <ArrowUpRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
