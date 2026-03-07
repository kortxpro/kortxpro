"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function AiFirstContent() {
  const t = useTranslations("aiFirst");

  return (
    <div className="pt-32 pb-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-black">{t("headline")}</h1>
          <p className="mt-6 text-lg text-text-secondary">{t("sub")}</p>
        </motion.div>

        {/* What it means */}
        <motion.section
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-20 border-t border-border pt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold text-black">
              {t("what.headline")}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-text-secondary leading-relaxed">
              {t("what.description")}
            </motion.p>
          </div>
        </motion.section>

        {/* Capabilities — 2x2 grid */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24"
        >
          {(["1", "2", "3", "4"] as const).map((key, i) => (
            <motion.div
              key={key}
              variants={fadeUp}
              className="bg-surface rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold mb-5">
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold text-black">
                {t(`what.items.${key}.title`)}
              </h3>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                {t(`what.items.${key}.description`)}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center border-t border-border pt-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black">{t("cta.headline")}</h2>
          <div className="mt-8">
            <Link
              href="/contato"
              className="inline-block bg-black text-white font-medium text-sm px-8 py-3 rounded-full hover:bg-black/80 transition-colors"
            >
              {t("cta.button")}
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
