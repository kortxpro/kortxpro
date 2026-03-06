"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const steps = ["1", "2", "3", "4"] as const;

export function Approach() {
  const t = useTranslations("approach");

  return (
    <section className="py-20 px-6 bg-surface">
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

        {/* 4 cards in row */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          {steps.map((step) => (
            <motion.div
              key={step}
              variants={fadeUp}
              className="bg-black border border-border rounded-xl p-6"
            >
              <span className="text-2xl font-bold text-accent">
                {String(Number(step)).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold text-white mt-3">
                {t(`steps.${step}.title`)}
              </h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                {t(`steps.${step}.description`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
