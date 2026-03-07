"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

const services = ["web", "mobile", "systems", "ai", "design", "consulting"] as const;

export function ServicesContent() {
  const t = useTranslations("services");

  return (
    <div className="pt-32 pb-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-black">{t("headline")}</h1>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">{t("sub")}</p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer(0.06)}
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
                className="bg-surface rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 group"
              >
                <span className="font-mono text-xs text-text-muted">{num}</span>
                <h2 className="text-xl font-semibold text-black mt-3">
                  {t(`items.${key}.title`)}
                </h2>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                  {t(`items.${key}.description`)}
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {(t.raw(`items.${key}.features`) as string[]).map((feature: string, j: number) => (
                    <span
                      key={j}
                      className="font-mono text-xs px-2.5 py-1 bg-white border border-border rounded-full text-text-muted"
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
        <div className="text-center">
          <Link
            href="/contato"
            className="inline-block bg-black text-white font-medium text-sm px-8 py-3 rounded-full hover:bg-black/80 transition-colors"
          >
            {t("headline") === "Nossos serviços" ? "Fale sobre seu projeto" : "Talk about your project"}
          </Link>
        </div>
      </div>
    </div>
  );
}
