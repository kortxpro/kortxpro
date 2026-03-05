"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { GradientButton } from "@/components/ui/GradientButton";
import { Mail, Phone, MapPin } from "lucide-react";

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
    "w-full px-4 py-3 bg-bg-surface border border-white/[0.06] rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent/50 transition-colors text-sm";

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight gradient-text">
            {t("headline")}
          </h1>
          <p className="mt-4 text-lg text-text-secondary max-w-xl mx-auto">
            {t("sub")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-2"
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-8 rounded-2xl bg-bg-elevated border border-accent/20 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Mail size={28} className="text-accent" />
                </div>
                <p className="text-lg text-white font-medium">{t("form.success")}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder={t("form.name")}
                    className={inputClass}
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={t("form.email")}
                    className={inputClass}
                  />
                </motion.div>

                <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="company"
                    placeholder={t("form.company")}
                    className={inputClass}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder={t("form.phone")}
                    className={inputClass}
                  />
                </motion.div>

                <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <select name="service" className={inputClass}>
                    <option value="">{t("form.service")}</option>
                    {(["web", "mobile", "system", "ai", "design", "consulting", "other"] as const).map(
                      (opt) => (
                        <option key={opt} value={opt}>
                          {t(`form.serviceOptions.${opt}`)}
                        </option>
                      )
                    )}
                  </select>
                  <select name="budget" className={inputClass}>
                    <option value="">{t("form.budget")}</option>
                    {(["small", "medium", "large", "enterprise"] as const).map((opt) => (
                      <option key={opt} value={opt}>
                        {t(`form.budgetOptions.${opt}`)}
                      </option>
                    ))}
                  </select>
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder={t("form.message")}
                    className={`${inputClass} resize-none`}
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <GradientButton
                    type="submit"
                    size="lg"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? t("form.sending") : t("form.submit")}
                  </GradientButton>
                </motion.div>

                {status === "error" && (
                  <p className="text-sm text-red-400">{t("form.error")}</p>
                )}
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-6"
          >
            <motion.h3 variants={fadeInUp} className="text-lg font-semibold text-white">
              {t("info.headline")}
            </motion.h3>

            <motion.div variants={fadeInUp} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-accent" />
              </div>
              <div>
                <a href="mailto:contato@kortx.pro" className="text-sm text-text-secondary hover:text-white transition-colors font-mono">
                  {t("info.email")}
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Phone size={18} className="text-accent" />
              </div>
              <div>
                <span className="text-sm text-text-secondary font-mono">
                  {t("info.phone")}
                </span>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-accent" />
              </div>
              <div>
                <span className="text-sm text-text-secondary">
                  {t("info.address")}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
