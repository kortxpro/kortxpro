"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function GlobalPresence() {
  const t = useTranslations("global");

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {t("orlando.city")} & {t("rio.city")}
          </h2>
        </motion.div>

        {/* 2 cards side by side */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Orlando */}
          <motion.div
            variants={fadeUp}
            className="bg-surface border border-border rounded-xl p-6 flex items-start gap-4"
          >
            <div className="relative mt-1 shrink-0">
              <div className="w-3 h-3 rounded-full bg-accent" />
              <div
                className="absolute inset-0 w-3 h-3 rounded-full bg-accent"
                style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">{t("orlando.city")}</h3>
              <p className="text-sm text-text-secondary mt-1">{t("orlando.country")}</p>
              <p className="font-mono text-xs text-text-muted mt-2">{t("orlando.coords")}</p>
            </div>
          </motion.div>

          {/* Rio */}
          <motion.div
            variants={fadeUp}
            className="bg-surface border border-border rounded-xl p-6 flex items-start gap-4"
          >
            <div className="relative mt-1 shrink-0">
              <div className="w-3 h-3 rounded-full bg-accent" />
              <div
                className="absolute inset-0 w-3 h-3 rounded-full bg-accent"
                style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">{t("rio.city")}</h3>
              <p className="text-sm text-text-secondary mt-1">{t("rio.country")}</p>
              <p className="font-mono text-xs text-text-muted mt-2">{t("rio.coords")}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
