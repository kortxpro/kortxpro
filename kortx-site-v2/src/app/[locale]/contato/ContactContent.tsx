"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, slideFromRight } from "@/lib/animations";

export function ContactContent() {
  const t = useTranslations("contactPage");
  const serviceOptions = t.raw("form.serviceOptions") as string[];
  const budgetOptions = t.raw("form.budgetOptions") as string[];
  const locations = t.raw("info.locations") as string[];

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", phone: "", service: "", budget: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full bg-card border border-border rounded-xl px-4 py-3.5 text-text text-sm placeholder:text-text-muted focus:outline-none focus:border-indigo focus:ring-1 focus:ring-indigo/30 transition-all duration-300";

  return (
    <div className="pt-32 pb-20">
      <div className="mx-auto max-w-[1560px] px-6 lg:px-10">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-16 lg:mb-20 max-w-2xl"
        >
          <motion.h1
            variants={fadeUp}
            className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-[-0.04em] leading-[1] mb-6"
          >
            {t("title")}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-xl text-text-secondary leading-relaxed"
          >
            {t("subtitle")}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
          {/* Form */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={fadeUp}>
                  <label className="block text-xs font-mono uppercase tracking-widest text-text-muted mb-2">
                    {t("form.name")} *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClasses}
                  />
                </motion.div>
                <motion.div variants={fadeUp}>
                  <label className="block text-xs font-mono uppercase tracking-widest text-text-muted mb-2">
                    {t("form.email")} *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClasses}
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={fadeUp}>
                  <label className="block text-xs font-mono uppercase tracking-widest text-text-muted mb-2">
                    {t("form.company")}
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className={inputClasses}
                  />
                </motion.div>
                <motion.div variants={fadeUp}>
                  <label className="block text-xs font-mono uppercase tracking-widest text-text-muted mb-2">
                    {t("form.phone")}
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputClasses}
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={fadeUp}>
                  <label className="block text-xs font-mono uppercase tracking-widest text-text-muted mb-2">
                    {t("form.service")}
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className={inputClasses}
                  >
                    <option value="">—</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </motion.div>
                <motion.div variants={fadeUp}>
                  <label className="block text-xs font-mono uppercase tracking-widest text-text-muted mb-2">
                    {t("form.budget")}
                  </label>
                  <select
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    className={inputClasses}
                  >
                    <option value="">—</option>
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </motion.div>
              </div>

              <motion.div variants={fadeUp}>
                <label className="block text-xs font-mono uppercase tracking-widest text-text-muted mb-2">
                  {t("form.message")}
                </label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClasses} resize-none`}
                />
              </motion.div>

              <motion.div variants={fadeUp}>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-sm text-white mesh-gradient hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-400 disabled:opacity-50 cursor-pointer"
                >
                  {status === "sending" ? t("form.sending") : t("form.submit")}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </motion.div>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-green-400"
                >
                  {t("form.success")}
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-red-400"
                >
                  {t("form.error")}
                </motion.p>
              )}
            </form>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            variants={slideFromRight}
            initial="hidden"
            animate="visible"
            className="space-y-10"
          >
            {/* Email */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-text-muted mb-3">
                Email
              </h3>
              <a
                href={`mailto:${t("info.email")}`}
                className="text-lg text-text hover:text-indigo transition-colors gradient-underline"
              >
                {t("info.email")}
              </a>
            </div>

            {/* Phone */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-text-muted mb-3">
                Telefone
              </h3>
              <a
                href={`tel:${t("info.phone")}`}
                className="text-lg text-text hover:text-indigo transition-colors"
              >
                {t("info.phone")}
              </a>
            </div>

            {/* Locations */}
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-text-muted mb-4">
                Escritórios
              </h3>
              <ul className="space-y-3">
                {locations.map((loc) => (
                  <li key={loc} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-gradient shrink-0" />
                    <span className="text-text-secondary">{loc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
