"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function AboutContent() {
  const t = useTranslations("about");

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white">{t("headline")}</h1>
          <p className="mt-4 text-lg text-text-secondary max-w-xl">{t("sub")}</p>
        </motion.div>

        {/* Story */}
        <motion.section
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-20"
        >
          <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-6">
            {t("story.headline")}
          </motion.h2>
          <div className="space-y-4 max-w-3xl">
            <motion.p variants={fadeUp} className="text-text-secondary leading-relaxed">
              {t("story.p1")}
            </motion.p>
            <motion.p variants={fadeUp} className="text-text-secondary leading-relaxed">
              {t("story.p2")}
            </motion.p>
          </div>
        </motion.section>

        {/* Values — grid 2x2 */}
        <section className="mb-20">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-2xl font-bold text-white mb-8"
          >
            {t("values.headline")}
          </motion.h2>

          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {(["1", "2", "3", "4"] as const).map((key, i) => {
              const num = String(i + 1).padStart(2, "0");
              return (
                <motion.div
                  key={key}
                  variants={fadeUp}
                  className="bg-surface border border-border rounded-xl p-6"
                >
                  <span className="font-mono text-xs text-text-muted">{num}</span>
                  <h3 className="text-lg font-semibold text-white mt-2">
                    {t(`values.items.${key}.title`)}
                  </h3>
                  <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                    {t(`values.items.${key}.description`)}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* Team */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="border-t border-border pt-12"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            {t("team.headline")}
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-2xl">
            {t("team.description")}
          </p>
        </motion.section>
      </div>
    </div>
  );
}
