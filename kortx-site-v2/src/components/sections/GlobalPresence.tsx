"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function GlobalPresence() {
  const t = useTranslations("global");

  const locations = [
    {
      key: "orlando",
      city: t("orlando.city"),
      country: t("orlando.country"),
      coords: t("orlando.coords"),
    },
    {
      key: "rio",
      city: t("rio.city"),
      country: t("rio.country"),
      coords: t("rio.coords"),
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight gradient-text">
            {t("headline")}
          </h2>
          <p className="mt-4 text-text-secondary">
            {t("sub")}
          </p>
        </motion.div>

        {/* Locations */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto"
        >
          {locations.map((loc) => (
            <motion.div
              key={loc.key}
              variants={fadeInUp}
              className="relative p-8 rounded-2xl bg-bg-elevated border border-white/[0.06] text-center group hover:border-accent/20 transition-colors duration-500"
            >
              {/* Pulsing dot */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <div
                    className="absolute inset-0 w-3 h-3 rounded-full bg-accent"
                    style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
                  />
                </div>
              </div>

              {/* City name */}
              <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                {loc.city}
              </h3>

              {/* Country */}
              <p className="mt-2 text-text-secondary">
                {loc.country}
              </p>

              {/* Coordinates */}
              <p className="mt-4 font-mono text-sm text-white/30">
                {loc.coords}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
