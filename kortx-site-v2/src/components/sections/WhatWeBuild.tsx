"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const items = ["sites", "apps", "systems", "landing", "ecommerce", "dashboards"] as const;

const icons = [
  /* Globe */ <svg key="globe" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  /* Phone */ <svg key="phone" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18.01"/></svg>,
  /* Cog */ <svg key="cog" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>,
  /* Pen */ <svg key="pen" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M12 20h9M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
  /* Spark */ <svg key="spark" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
  /* Chart */ <svg key="chart" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M21 21H3V3"/><path d="M18 9l-5 5-2-2-4 4"/></svg>,
];

export function WhatWeBuild() {
  const t = useTranslations("whatWeBuild");

  return (
    <section className="py-20 md:py-28 px-6 md:px-10 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black">{t("headline")}</h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">{t("sub")}</p>
        </motion.div>

        {/* Grid 3x2 */}
        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {items.map((item, i) => (
            <motion.div
              key={item}
              variants={fadeUp}
              className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center text-text-secondary group-hover:text-black transition-colors mb-6">
                {icons[i]}
              </div>
              <h3 className="text-lg font-semibold text-black">
                {t(`items.${item}.title`)}
              </h3>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                {t(`items.${item}.description`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
