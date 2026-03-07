"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function ContactContent() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-surface border border-border rounded-xl px-4 py-3 text-text text-sm placeholder:text-text-muted focus:outline-none focus:border-black transition-colors";

  return (
    <div className="pt-32 pb-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-black">{t("headline")}</h1>
          <p className="mt-4 text-text-secondary max-w-lg mx-auto">{t("sub")}</p>
        </motion.div>

        {/* Form + Info */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 max-w-5xl mx-auto"
        >
          {/* Form */}
          <motion.div variants={fadeUp}>
            {status === "success" ? (
              <div className="bg-surface rounded-2xl p-12 text-center">
                <p className="text-xl font-semibold text-black">{t("form.success")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" name="name" required placeholder={t("form.name")} className={inputClass} />
                  <input type="email" name="email" required placeholder={t("form.email")} className={inputClass} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" name="company" placeholder={t("form.company")} className={inputClass} />
                  <input type="tel" name="phone" placeholder={t("form.phone")} className={inputClass} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select name="service" className={inputClass}>
                    <option value="">{t("form.service")}</option>
                    {(["web", "mobile", "system", "ai", "design", "consulting", "other"] as const).map((opt) => (
                      <option key={opt} value={opt}>{t(`form.serviceOptions.${opt}`)}</option>
                    ))}
                  </select>
                  <select name="budget" className={inputClass}>
                    <option value="">{t("form.budget")}</option>
                    {(["small", "medium", "large", "enterprise"] as const).map((opt) => (
                      <option key={opt} value={opt}>{t(`form.budgetOptions.${opt}`)}</option>
                    ))}
                  </select>
                </div>
                <textarea
                  name="message"
                  rows={5}
                  placeholder={t("form.message")}
                  className={`${inputClass} resize-none`}
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="bg-black text-white font-medium text-sm px-8 py-3 rounded-full hover:bg-black/80 transition-colors disabled:opacity-50"
                >
                  {status === "sending" ? t("form.sending") : t("form.submit")}
                </button>
                {status === "error" && (
                  <p className="text-sm text-red-500">{t("form.error")}</p>
                )}
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div variants={fadeUp} className="bg-surface rounded-2xl p-8">
            <h3 className="text-lg font-semibold text-black mb-6">{t("info.headline")}</h3>
            <div className="space-y-5">
              <div>
                <p className="font-mono text-xs text-text-muted uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:contato@kortx.pro" className="text-sm text-black hover:text-text-secondary transition-colors">
                  contato@kortx.pro
                </a>
              </div>
              <div>
                <p className="font-mono text-xs text-text-muted uppercase tracking-wider mb-1">Phone</p>
                <span className="text-sm text-black">{t("info.phone")}</span>
              </div>
              <div className="pt-4 border-t border-border">
                <p className="font-mono text-xs text-text-muted uppercase tracking-wider mb-3">Locations</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm text-black font-medium">Orlando</p>
                    <p className="text-sm text-text-muted">Florida, United States</p>
                  </div>
                  <div>
                    <p className="text-sm text-black font-medium">Rio de Janeiro</p>
                    <p className="text-sm text-text-muted">RJ, Brasil</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
