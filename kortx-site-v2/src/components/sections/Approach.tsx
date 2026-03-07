"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const steps = ["1", "2", "3", "4"] as const;

export function Approach() {
  const t = useTranslations("approach");

  return (
    <section className="py-20 md:py-28 px-6 md:px-10 bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black">{t("headline")}</h2>
            <p className="mt-3 text-text-secondary max-w-xl">{t("sub")}</p>
          </motion.div>

          {/* 4 steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step, i) => (
              <motion.div key={step} variants={fadeUp} className="relative">
                {/* Number */}
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold mb-5">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-black">
                  {t(`steps.${step}.title`)}
                </h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  {t(`steps.${step}.description`)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
