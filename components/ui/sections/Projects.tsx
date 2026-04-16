"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink, GitBranch, X, ArrowUpRight,
  Sparkles, Star, Eye,
} from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { portfolioData } from "@/data/portfolio";

// ── Types ──
type Project = (typeof portfolioData.projects)[number];

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

// ── Project Card ──
function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
}) {
  return (
    <AnimateOnScroll delay={index * 0.12}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="group relative h-full"
      >
        {/* Glow on hover */}
        <div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${project.color}30, transparent 70%)`,
          }}
        />

        {/* Card */}
        <div className="relative h-full glass border border-zinc-200/60 dark:border-zinc-700/40 rounded-3xl overflow-hidden flex flex-col shadow-lg group-hover:border-zinc-300 dark:group-hover:border-zinc-600 transition-all duration-500">

          {/* Top color bar */}
          <div
            className="h-1.5 w-full"
            style={{
              background: `linear-gradient(90deg, ${project.color}, ${project.color}88)`,
            }}
          />

          {/* Mock browser window */}
          <div className="relative overflow-hidden bg-zinc-100 dark:bg-zinc-800/80 mx-4 mt-4 rounded-xl h-40 flex items-center justify-center">
            {/* Browser dots */}
            <div className="absolute top-2.5 left-3 flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <div className="w-2 h-2 rounded-full bg-yellow-400" />
              <div className="w-2 h-2 rounded-full bg-green-400" />
            </div>

            {/* Project preview area */}
            <div className="flex flex-col items-center gap-3">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg text-white font-heading font-bold text-xl"
                style={{ background: `linear-gradient(135deg, ${project.color}, ${project.color}aa)` }}
              >
                {project.title.charAt(0)}
              </div>
              <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 font-mono-custom">
                {project.live !== "#" ? project.live.replace("https://", "") : "localhost:3000"}
              </span>
            </div>

            {/* Hover overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-black/50 flex items-center justify-center gap-3 rounded-xl"
            >
              <button
                onClick={() => onOpen(project)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/20 backdrop-blur-sm text-white text-xs font-medium hover:bg-white/30 transition-colors"
              >
                <Eye size={13} />
                Details
              </button>
              {project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/20 backdrop-blur-sm text-white text-xs font-medium hover:bg-white/30 transition-colors"
                >
                  <ExternalLink size={13} />
                  Live
                </a>
              )}
            </motion.div>
          </div>

          {/* Card content */}
          <div className="flex flex-col flex-1 p-5">
            {/* Title row */}
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="font-heading font-bold text-lg text-zinc-900 dark:text-white group-hover:text-[#C04828] transition-colors duration-300">
                {project.title}
              </h3>
              {project.featured && (
                <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 shrink-0">
                  <Star size={10} className="fill-current" />
                  Featured
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed flex-1 mb-4">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2 pt-4 border-t border-zinc-100 dark:border-zinc-800">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200"
              >
                <GitBranch size={14} />
                Code
              </a>
              {project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-200"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              )}
              <button
                onClick={() => onOpen(project)}
                className="ml-auto flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white transition-all duration-200 shadow-md hover:shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${project.color}, ${project.color}cc)`,
                }}
              >
                View Details
                <ArrowUpRight size={13} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimateOnScroll>
  );
}

// ── Project Modal ──
function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="relative w-full max-w-lg bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl overflow-hidden pointer-events-auto">

              {/* Top accent bar */}
              <div
                className="h-1.5 w-full"
                style={{
                  background: `linear-gradient(90deg, ${project.color}, ${project.color}66)`,
                }}
              />

              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {/* Project icon */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-heading font-bold text-2xl shadow-lg flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${project.color}, ${project.color}aa)`,
                      }}
                    >
                      {project.title.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-2xl text-zinc-900 dark:text-white">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 mt-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400">
                          <Star size={10} className="fill-current" />
                          Featured Project
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Close button */}
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="w-9 h-9 rounded-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors flex-shrink-0"
                  >
                    <X size={16} />
                  </motion.button>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-zinc-100 dark:bg-zinc-800 mx-6" />

              {/* Body */}
              <div className="p-6 space-y-5">
                {/* Description */}
                <div>
                  <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2">
                    About This Project
                  </h4>
                  <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech stack */}
                <div>
                  <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 rounded-xl text-xs font-semibold border"
                        style={{
                          backgroundColor: `${project.color}15`,
                          borderColor: `${project.color}40`,
                          color: project.color,
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div>
                  <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-3">
                    Links
                  </h4>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl border-2 border-zinc-200 dark:border-zinc-700 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:border-zinc-400 dark:hover:border-zinc-500 transition-all duration-200"
                    >
                      <GitBranch size={16} />
                      GitHub Repo
                    </a>
                    {project.live !== "#" ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105"
                        style={{
                          background: `linear-gradient(135deg, ${project.color}, ${project.color}cc)`,
                        }}
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    ) : (
                      <div className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-semibold text-zinc-400 bg-zinc-100 dark:bg-zinc-800 cursor-not-allowed">
                        <ExternalLink size={16} />
                        Coming Soon
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ── Main Export ──
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section
        id="projects"
        className="relative py-24 sm:py-32 bg-zinc-50 dark:bg-zinc-900 overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent" />
        <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-[#C04828]/5 blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-0 w-64 h-64 rounded-full bg-sky-500/5 blur-3xl pointer-events-none" />

        <AnimateOnScroll className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionTitle
            eyebrow="Projects"
            title="Things I've built"
            subtitle="A selection of projects I'm proud of — from side projects to full products."
          />

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.projects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onOpen={setSelectedProject}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <AnimateOnScroll delay={0.3}>
            <div className="mt-14 text-center">
              <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-4">
                Want to see more? Check out my GitHub for all projects.
              </p>
              <motion.a
                href={portfolioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl border-2 border-zinc-200 dark:border-zinc-700 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:border-[#C04828] hover:text-[#C04828] dark:hover:border-[#C04828] dark:hover:text-[#C04828] transition-all duration-300"
              >
                <GitBranch size={17} />
                View All on GitHub
                <ArrowUpRight size={15} />
              </motion.a>
            </div>
          </AnimateOnScroll>
        </AnimateOnScroll>
      </section>

      {/* Modal — rendered outside section so it overlays everything */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
