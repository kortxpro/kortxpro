"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { NeuralNetwork } from "@/components/ui/NeuralNetwork";
import { GradientButton } from "@/components/ui/GradientButton";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function CTA() {
  const t = useTranslations("cta");

  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Neural Network Background (fewer particles) */}
      <div className="absolute inset-0">
        <NeuralNetwork particleCount={50} connectionDistance={140} />
      </div>

      {/* Light beam effect */}
      <div className="light-beam" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-transparent to-bg-primary" />

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight gradient-text-accent leading-tight"
        >
          {t("headline")}
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="mt-6 text-lg text-white/60 max-w-xl mx-auto"
        >
          {t("sub")}
        </motion.p>

        <motion.div variants={fadeInUp} className="mt-10">
          <Link href="/contato">
            <GradientButton size="lg">{t("button")}</GradientButton>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
