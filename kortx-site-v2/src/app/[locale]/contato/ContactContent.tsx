"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { clipReveal, fadeUp, viewportOnce } from "@/lib/animations";

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
    "w-full bg-transparent border-b border-border py-3 text-text placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors text-sm";

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] min-h-[80vh]">
        {/* LEFT — Form */}
        <div className="bg-black px-6 md:px-10 lg:px-16 py-16">
          <div className="max-w-xl">
            <motion.h1
              variants={clipReveal}
              initial="hidden"
              animate="visible"
              className="font-display text-display-lg text-white mb-4"
            >
              {t("headline")}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-text-secondary mb-12"
            >
              {t("sub")}
            </motion.p>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-12"
              >
                <p className="font-display text-xl text-accent">{t("form.success")}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <input type="text" name="name" required placeholder={t("form.name")} className={inputClass} />
                  <input type="email" name="email" required placeholder={t("form.email")} className={inputClass} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <input type="text" name="company" placeholder={t("form.company")} className={inputClass} />
                  <input type="tel" name="phone" placeholder={t("form.phone")} className={inputClass} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <select name="service" className={`${inputClass} bg-black`}>
                    <option value="">{t("form.service")}</option>
                    {(["web", "mobile", "system", "ai", "design", "consulting", "other"] as const).map((opt) => (
                      <option key={opt} value={opt}>{t(`form.serviceOptions.${opt}`)}</option>
                    ))}
                  </select>
                  <select name="budget" className={`${inputClass} bg-black`}>
                    <option value="">{t("form.budget")}</option>
                    {(["small", "medium", "large", "enterprise"] as const).map((opt) => (
                      <option key={opt} value={opt}>{t(`form.budgetOptions.${opt}`)}</option>
                    ))}
                  </select>
                </div>
                <textarea
                  name="message"
                  rows={4}
                  placeholder={t("form.message")}
                  className={`${inputClass} resize-none`}
                />
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="font-mono text-sm text-accent inline-flex items-center gap-2 group disabled:opacity-50"
                >
                  <span>{status === "sending" ? t("form.sending") : t("form.submit")}</span>
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </button>
                {status === "error" && (
                  <p className="text-sm text-red-400">{t("form.error")}</p>
                )}
              </form>
            )}
          </div>
        </div>

        {/* RIGHT — Info */}
        <div className="bg-surface px-6 md:px-10 lg:px-16 py-16 flex flex-col justify-center">
          <div>
            <a
              href="mailto:contato@kortx.pro"
              className="font-display text-display-sm text-white hover:text-accent transition-colors block mb-8"
            >
              contato@kortx.pro
            </a>
            <div className="space-y-4 font-mono text-sm text-text-secondary">
              <p>{t("info.phone")}</p>
              <p>{t("info.address")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
