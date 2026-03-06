"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const items = ["sites", "apps", "systems", "landing", "ecommerce", "dashboards"] as const;

export function WhatWeBuild() {
  const t = useTranslations("whatWeBuild");

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
          <h2 className="text-3xl md:text-4xl font-bold text-white">{t("headline")}</h2>
          <p className="mt-3 text-text-secondary max-w-xl">{t("sub")}</p>
        </motion.div>

        {/* Grid 2x3 */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((item, i) => {
            const num = String(i + 1).padStart(2, "0");
            return (
              <motion.div
                key={item}
                variants={fadeUp}
                className="bg-surface border border-border rounded-xl p-6 hover:border-accent/30 transition-colors group"
              >
                <span className="font-mono text-xs text-text-muted">{num}</span>
                <h3 className="text-xl font-semibold text-white mt-2">
                  {t(`items.${item}.title`)}
                </h3>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                  {t(`items.${item}.description`)}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
