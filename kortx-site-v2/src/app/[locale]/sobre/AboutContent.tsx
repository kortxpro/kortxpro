"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { Code2, Crosshair, CheckCircle, Eye } from "lucide-react";

const valueIcons = [Code2, Crosshair, CheckCircle, Eye];

export function AboutContent() {
  const t = useTranslations("about");

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight gradient-text">
            {t("headline")}
          </h1>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            {t("sub")}
          </p>
        </motion.div>

        {/* Story */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-24"
        >
          <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-bold text-white mb-8">
            {t("story.headline")}
          </motion.h2>
          <div className="space-y-4">
            <motion.p variants={fadeInUp} className="text-text-secondary leading-relaxed text-lg">
              {t("story.p1")}
            </motion.p>
            <motion.p variants={fadeInUp} className="text-text-secondary leading-relaxed text-lg">
              {t("story.p2")}
            </motion.p>
          </div>
        </motion.section>

        {/* Values */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-24"
        >
          <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-bold text-white mb-12">
            {t("values.headline")}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(["1", "2", "3", "4"] as const).map((key, i) => {
              const Icon = valueIcons[i];
              return (
                <motion.div
                  key={key}
                  variants={fadeInUp}
                  className="p-6 rounded-2xl bg-bg-elevated border border-white/[0.06] hover:border-accent/20 transition-colors duration-500"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {t(`values.items.${key}.title`)}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {t(`values.items.${key}.description`)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Team */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="p-8 md:p-12 rounded-2xl bg-bg-elevated border border-white/[0.06] text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {t("team.headline")}
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-xl mx-auto">
            {t("team.description")}
          </p>
        </motion.section>
      </div>
    </div>
  );
}
