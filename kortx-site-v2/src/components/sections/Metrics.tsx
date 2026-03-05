"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function Metrics() {
  const t = useTranslations("metrics");

  const metrics = [
    { value: t("projectsValue"), label: t("projects") },
    { value: t("satisfactionValue"), label: t("satisfaction") },
    { value: t("yearsValue"), label: t("years") },
    { value: t("officesValue"), label: t("offices") },
  ];

  return (
    <section className="relative py-16 bg-bg-elevated border-y border-white/[0.06]">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {metrics.map((metric, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            className="text-center relative"
          >
            {/* Divider (not on first) */}
            {i > 0 && (
              <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/[0.06]" />
            )}
            <div
              className="font-mono text-4xl md:text-5xl font-bold text-white"
              style={{ textShadow: "0 0 40px rgba(99,102,241,0.3)" }}
            >
              {metric.value}
            </div>
            <div className="mt-2 font-mono text-xs uppercase tracking-wider text-white/40">
              {metric.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
