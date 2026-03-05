"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

const steps = ["1", "2", "3", "4"] as const;

export function Approach() {
  const t = useTranslations("approach");

  return (
    <section className="relative py-24 md:py-32 bg-bg-elevated overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight gradient-text">
            {t("headline")}
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            {t("sub")}
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6"
        >
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step}
              variants={fadeInUp}
              className="relative text-center"
            >
              {/* Step number */}
              <div className="font-mono text-6xl md:text-7xl font-bold text-accent/[0.15] leading-none">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Dot on the line */}
              <div className="hidden md:block absolute top-[60px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-bg-elevated border-2 border-accent/40 z-10" />

              {/* Title */}
              <h3 className="mt-4 text-xl font-semibold text-white">
                {t(`steps.${step}.title`)}
              </h3>

              {/* Description */}
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
