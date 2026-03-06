"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function AiFirstContent() {
  const t = useTranslations("aiFirst");

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
          <p className="mt-4 text-lg text-text-secondary max-w-2xl">{t("sub")}</p>
        </motion.div>

        {/* What it means */}
        <motion.section
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-16"
        >
          <motion.h2 variants={fadeUp} className="text-2xl font-bold text-white mb-4">
            {t("what.headline")}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-text-secondary leading-relaxed max-w-3xl">
            {t("what.description")}
          </motion.p>
        </motion.section>

        {/* Capabilities — 2x2 grid */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20"
        >
          {(["1", "2", "3", "4"] as const).map((key, i) => {
            const num = String(i + 1).padStart(2, "0");
            return (
              <motion.div
                key={key}
                variants={fadeUp}
                className="bg-surface border border-border rounded-xl p-6 hover:border-accent/30 transition-colors"
              >
                <span className="font-mono text-xs text-accent">{num}</span>
                <h3 className="text-lg font-semibold text-white mt-2">
                  {t(`what.items.${key}.title`)}
                </h3>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                  {t(`what.items.${key}.description`)}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center border-t border-border pt-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">{t("cta.headline")}</h2>
          <div className="mt-8">
            <Link
              href="/contato"
              className="inline-block bg-accent text-black font-medium text-sm px-8 py-3 rounded-md hover:bg-accent/90 transition-colors"
            >
              contato@kortx.pro
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
