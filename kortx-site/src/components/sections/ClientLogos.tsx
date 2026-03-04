"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { CountUp } from "@/components/effects/CountUp";

export function ClientLogos() {
  const t = useTranslations("home.socialProof");

  const metrics = Array.from({ length: 4 }, (_, i) => ({
    value: t(`metrics.${i}.value`),
    suffix: t(`metrics.${i}.suffix`),
    label: t(`metrics.${i}.label`),
  }));

  return (
    <section className="py-16 bg-[#0A1628] relative overflow-hidden">
      {/* Subtle gradient decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00A3FF]/5 via-transparent to-[#00A3FF]/5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-lg font-medium text-gray-400 mb-12"
        >
          {t("title")}
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                <CountUp
                  end={parseFloat(metric.value)}
                  suffix={metric.suffix}
                  duration={2.5}
                />
              </div>
              <p className="text-sm text-gray-400">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
