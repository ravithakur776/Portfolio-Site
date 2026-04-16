"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Download, Mail, Menu, Phone, X, Zap } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#about");

  const phoneHref = useMemo(
    () => `tel:${portfolioData.phone.replace(/[^\d+]/g, "")}`,
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };

    const sectionElements = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveSection(`#${visibleEntry.target.id}`);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6],
      }
    );

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    sectionElements.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setActiveSection(href);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between gap-3 rounded-[1.8rem] border px-4 py-3 transition-all duration-500 sm:px-5 ${
              scrolled
                ? "border-white/12 bg-black/78 shadow-2xl shadow-black/30 backdrop-blur-2xl"
                : "border-white/8 bg-black/38 backdrop-blur-xl"
            }`}
          >
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex min-w-0 items-center gap-3 text-left"
              aria-label="Back to top"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#C04828] to-[#F07B48] text-white shadow-lg shadow-orange-500/25">
                <Zap size={17} className="fill-current" />
              </span>
              <span className="min-w-0">
                <span className="flex items-center gap-2 font-mono-custom text-[10px] uppercase tracking-[0.32em] text-zinc-500">
                  Ravi Thakur
                  <span className="hidden h-1.5 w-1.5 rounded-full bg-emerald-400 sm:inline-block" />
                </span>
                <span className="block truncate font-heading text-lg font-bold tracking-tight text-white">
                  Portfolio
                </span>
              </span>
            </button>

            <nav className="hidden items-center gap-1 rounded-full border border-white/8 bg-white/[0.03] p-1.5 lg:flex">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;

                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive ? "text-white" : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="active-desktop-nav"
                        className="absolute inset-0 rounded-full bg-white/[0.08] ring-1 ring-white/10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </button>
                );
              })}
            </nav>

            <div className="hidden items-center gap-2 md:flex">
              <a
                href={phoneHref}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 transition-colors hover:text-white"
                aria-label="Call Ravi"
              >
                <Phone size={16} />
              </a>
              <motion.a
                href={portfolioData.resumeUrl}
                download
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/[0.07]"
              >
                Resume
                <Download size={15} />
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(event) => {
                  event.preventDefault();
                  handleNavClick("#contact");
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full bg-[#F06A37] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-colors hover:bg-[#ff7a47]"
              >
                Let&apos;s Talk
                <ArrowUpRight size={15} />
              </motion.a>
            </div>

            <button
              onClick={() => setMobileOpen((open) => !open)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white lg:hidden"
              aria-label="Toggle navigation"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={18} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={18} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/45 backdrop-blur-sm lg:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.24 }}
              className="fixed inset-x-4 top-20 z-50 rounded-[2rem] border border-white/10 bg-[#0d0d0d]/96 p-5 shadow-2xl shadow-black/40 backdrop-blur-2xl lg:hidden"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono-custom text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                    Navigate
                  </p>
                  <p className="mt-2 text-sm text-zinc-300">
                    Quick access to every important section.
                  </p>
                </div>
                <a
                  href={portfolioData.resumeUrl}
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-white"
                >
                  Resume
                  <Download size={14} />
                </a>
              </div>

              <div className="space-y-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href;

                  return (
                    <button
                      key={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm font-medium transition-colors ${
                        isActive
                          ? "border-[#F06A37]/30 bg-[#F06A37]/10 text-white"
                          : "border-transparent text-zinc-200 hover:border-white/10 hover:bg-white/[0.04]"
                      }`}
                    >
                      {link.label}
                      <ArrowUpRight size={15} className="text-zinc-500" />
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white"
                >
                  <Mail size={15} />
                  Email
                </a>
                <a
                  href={phoneHref}
                  className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white"
                >
                  <Phone size={15} />
                  Call
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
