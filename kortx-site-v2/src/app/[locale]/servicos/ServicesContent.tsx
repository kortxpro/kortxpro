"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { TextButton } from "@/components/ui/TextButton";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const services = ["web", "mobile", "systems", "ai", "design", "consulting"] as const;

export function ServicesContent() {
  const t = useTranslations("services");

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

        {/* Grid 2x3 */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {services.map((key, i) => {
            const num = String(i + 1).padStart(2, "0");
            return (
              <motion.div
                key={key}
                variants={fadeUp}
                className="bg-surface border border-border rounded-xl p-6 hover:border-accent/30 transition-colors"
              >
                <span className="font-mono text-xs text-text-muted">{num}</span>
                <h2 className="text-xl font-semibold text-white mt-2">
                  {t(`items.${key}.title`)}
                </h2>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                  {t(`items.${key}.description`)}
                </p>
                {/* Feature tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {(t.raw(`items.${key}.features`) as string[]).map((feature: string, j: number) => (
                    <span
                      key={j}
                      className="font-mono text-xs px-2 py-1 bg-surface-elevated border border-border rounded text-text-secondary"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <TextButton href="/contato">
          {t("headline") === "Nossos serviços" ? "Fale sobre seu projeto" : "Talk about your project"}
        </TextButton>
      </div>
    </div>
  );
}
