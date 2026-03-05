"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, slideInLeft, viewportOnce } from "@/lib/animations";

const items = ["sites", "apps", "systems", "landing", "ecommerce", "dashboards"] as const;

export function WhatWeBuild() {
  const t = useTranslations("whatWeBuild");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24 md:py-32 bg-bg-primary dot-grid overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Heading */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight gradient-text">
              {t("headline")}
            </h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              {t("sub")}
            </p>
          </motion.div>

          {/* Right: List */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-8"
          >
            {items.map((item, i) => (
              <motion.div
                key={item}
                variants={fadeInUp}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group border-b border-white/[0.06] last:border-b-0"
              >
                <div className="py-5 md:py-6 flex items-start justify-between gap-4 cursor-default">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      {/* Accent line */}
                      <div
                        className={`h-[2px] bg-accent transition-all duration-500 ${
                          hoveredIndex === i ? "w-8" : "w-0"
                        }`}
                      />
                      <h3
                        className={`text-xl md:text-2xl font-light transition-colors duration-300 ${
                          hoveredIndex === i ? "text-white" : "text-white/60"
                        }`}
                      >
                        {t(`items.${item}.title`)}
                      </h3>
                    </div>
                    {/* Description - shows on hover */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        hoveredIndex === i ? "max-h-20 opacity-100 mt-2" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-sm text-text-secondary pl-11">
                        {t(`items.${item}.description`)}
                      </p>
                    </div>
                  </div>
                  {/* Number */}
                  <span className="font-mono text-sm text-text-muted/50 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
