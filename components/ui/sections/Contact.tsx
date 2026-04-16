"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles, Mail, MapPin, Send,
  Code2, AtSign,
  Copy, Check, MessageSquare,
  Loader2,
} from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { portfolioData } from "@/data/portfolio";

// ── Section Title ──
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

// ── Copy email button ──
function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(portfolioData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.button
      onClick={handleCopy}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className="group w-full flex items-center justify-between gap-3 p-4 rounded-2xl glass border border-zinc-200/60 dark:border-zinc-700/40 hover:border-[#C04828]/40 transition-all duration-300"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#C04828]/10 flex items-center justify-center">
          <Mail size={17} className="text-[#C04828]" />
        </div>
        <div className="text-left">
          <p className="text-xs text-zinc-400 mb-0.5">Email me at</p>
          <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
            {portfolioData.email}
          </p>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {copied ? (
          <motion.div
            key="check"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center"
          >
            <Check size={14} className="text-emerald-500" />
          </motion.div>
        ) : (
          <motion.div
            key="copy"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Copy size={14} className="text-zinc-500" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

// ── Social links ──
const socials = [
  {
    label: "GitHub",
    icon: Code2,
    href: portfolioData.social.github,
    bg: "bg-zinc-900 dark:bg-zinc-700",
  },
  {
    label: "LinkedIn",
    icon: AtSign,
    href: portfolioData.social.linkedin,
    bg: "bg-[#0077b5]",
  },
  {
    label: "Email",
    icon: Mail,
    href: `mailto:${portfolioData.email}`,
    bg: "bg-[#C04828]",
  },
];

function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {socials.map((s, i) => (
        <motion.a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ scale: 1.12, y: -3 }}
          whileTap={{ scale: 0.95 }}
          aria-label={s.label}
          className={`w-11 h-11 rounded-2xl ${s.bg} flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow duration-300`}
        >
          <s.icon size={18} />
        </motion.a>
      ))}
    </div>
  );
}

// ── Left info panel ──
function ContactInfo() {
  return (
    <AnimateOnScroll direction="left" className="space-y-6">

      {/* Heading */}
      <div>
        <h3 className="font-heading font-bold text-2xl sm:text-3xl text-zinc-900 dark:text-white mb-3">
          Let&apos;s build something{" "}
          <span className="gradient-text">amazing</span> together
        </h3>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
          Whether you have a project in mind, want to collaborate, or just want to say hi — my inbox is always open. I&apos;ll get back to you within 24 hours.
        </p>
      </div>

      {/* Email copy */}
      <CopyEmail />

      {/* Location */}
      <div className="flex items-center gap-3 p-4 rounded-2xl glass border border-zinc-200/60 dark:border-zinc-700/40">
        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
          <MapPin size={17} className="text-emerald-500" />
        </div>
        <div>
          <p className="text-xs text-zinc-400 mb-0.5">Based in</p>
          <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
            {portfolioData.location}
          </p>
        </div>
        <span className="ml-auto text-xl">🇮🇳</span>
      </div>

      {/* Response time */}
      <div className="flex items-center gap-3 p-4 rounded-2xl glass border border-zinc-200/60 dark:border-zinc-700/40">
        <div className="w-10 h-10 rounded-xl bg-[#C04828]/10 flex items-center justify-center">
          <MessageSquare size={17} className="text-[#C04828]" />
        </div>
        <div>
          <p className="text-xs text-zinc-400 mb-0.5">Response time</p>
          <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
            Usually within 24 hours
          </p>
        </div>
        <span className="relative flex h-2.5 w-2.5 ml-auto">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
        </span>
      </div>

      {/* Socials */}
      <div>
        <p className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-3">
          Find me on
        </p>
        <SocialLinks />
      </div>
    </AnimateOnScroll>
  );
}

// ── Contact Form ──
type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "", email: "", subject: "", message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("loading");

    // Simulate sending (replace with your real email service later)
    await new Promise((r) => setTimeout(r, 1800));
    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus("idle"), 4000);
  };

  const fields = [
    { name: "name",    label: "Your Name",     type: "text",  placeholder: "Enter your full name" },
    { name: "email",   label: "Email Address", type: "email", placeholder: "name@example.com" },
    { name: "subject", label: "Subject",       type: "text",  placeholder: "Project, role, or collaboration" },
  ];

  return (
    <AnimateOnScroll direction="right">
      <div className="glass border border-zinc-200/60 dark:border-zinc-700/40 rounded-3xl p-6 sm:p-8 shadow-xl">

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#C04828] to-[#E8603A] flex items-center justify-center shadow-lg shadow-orange-500/25">
            <Send size={17} className="text-white" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg text-zinc-900 dark:text-white">
              Send a message
            </h3>
            <p className="text-xs text-zinc-400">I&apos;ll reply within 24hrs</p>
          </div>
        </div>

        <div className="space-y-4">

          {/* Text fields */}
          {fields.map((field) => (
            <div key={field.name}>
              <label className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-1.5 uppercase tracking-wider">
                {field.label}
                {field.name !== "subject" && (
                  <span className="text-[#C04828] ml-0.5">*</span>
                )}
              </label>
              <motion.div
                animate={{
                  boxShadow: focusedField === field.name
                    ? "0 0 0 2px #C04828"
                    : "0 0 0 1px transparent",
                }}
                className="rounded-xl overflow-hidden"
              >
                <input
                  type={field.type}
                  name={field.name}
                  value={form[field.name as keyof FormState]}
                  onChange={handleChange}
                  onFocus={() => setFocusedField(field.name)}
                  onBlur={() => setFocusedField(null)}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 text-sm text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-400 outline-none border border-zinc-200 dark:border-zinc-700 focus:border-[#C04828] transition-colors duration-200"
                />
              </motion.div>
            </div>
          ))}

          {/* Message textarea */}
          <div>
            <label className="block text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-1.5 uppercase tracking-wider">
              Message <span className="text-[#C04828]">*</span>
            </label>
            <motion.div
              animate={{
                boxShadow: focusedField === "message"
                  ? "0 0 0 2px #C04828"
                  : "0 0 0 1px transparent",
              }}
              className="rounded-xl overflow-hidden"
            >
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                placeholder="Tell me about your project, opportunity, or what you want to build..."
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 text-sm text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-400 outline-none border border-zinc-200 dark:border-zinc-700 focus:border-[#C04828] transition-colors duration-200 resize-none"
              />
            </motion.div>
          </div>

          {/* Submit button */}
          <motion.button
            onClick={handleSubmit}
            disabled={status === "loading" || status === "success"}
            whileHover={status === "idle" ? { scale: 1.02 } : {}}
            whileTap={status === "idle" ? { scale: 0.97 } : {}}
            className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-lg ${
              status === "success"
                ? "bg-emerald-500 text-white shadow-emerald-500/25"
                : status === "error"
                ? "bg-red-500 text-white"
                : "bg-gradient-to-r from-[#C04828] to-[#E8603A] text-white shadow-orange-500/25 hover:shadow-orange-500/40"
            }`}
          >
            <AnimatePresence mode="wait">
              {status === "loading" && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </motion.div>
              )}
              {status === "success" && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  <Check size={16} />
                  Message sent! I&apos;ll be in touch soon 🎉
                </motion.div>
              )}
              {(status === "idle" || status === "error") && (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  <Send size={16} />
                  Send Message
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          <p className="text-xs text-center text-zinc-400">
            * Required fields. No spam — ever.
          </p>
        </div>
      </div>
    </AnimateOnScroll>
  );
}

// ── Main Export ──
export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 bg-zinc-50 dark:bg-zinc-900 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-300 dark:via-zinc-700 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C04828]/5 blur-3xl pointer-events-none" />

      <AnimateOnScroll className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionTitle
          eyebrow="Contact"
          title="Get in touch"
          subtitle="Have a project in mind or want to connect? I'd love to hear from you."
        />

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <ContactInfo />
          <ContactForm />
        </div>
      </AnimateOnScroll>
    </section>
  );
}
