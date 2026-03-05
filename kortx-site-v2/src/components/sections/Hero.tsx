"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { NeuralNetwork } from "@/components/ui/NeuralNetwork";
import { GradientButton } from "@/components/ui/GradientButton";
import { ChevronDown } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Neural Network Background */}
      <div className="absolute inset-0">
        <NeuralNetwork particleCount={80} connectionDistance={150} />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/50 via-transparent to-bg-primary" />

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20"
      >
        {/* Tag */}
        <motion.div variants={fadeInUp}>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-light">
            {t("tag")}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeInUp}
          className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight gradient-text leading-[1.1]"
        >
          {t("headline")}
        </motion.h1>

        {/* Sub */}
        <motion.p
          variants={fadeInUp}
          className="mt-6 text-lg md:text-xl text-white/60 max-w-xl mx-auto leading-relaxed"
        >
          {t("sub")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeInUp}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/portfolio">
            <GradientButton size="lg">{t("cta")}</GradientButton>
          </Link>
          <Link href="/contato">
            <GradientButton size="lg" variant="outline">
              {t("ctaSecondary")}
            </GradientButton>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-white/30">
          {t("scroll")}
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={16} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
