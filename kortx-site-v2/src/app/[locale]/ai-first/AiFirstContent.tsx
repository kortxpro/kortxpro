"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { GradientButton } from "@/components/ui/GradientButton";
import { NeuralNetwork } from "@/components/ui/NeuralNetwork";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { Bot, Zap, Database, MessageCircle } from "lucide-react";

const itemIcons = [Bot, Zap, Database, MessageCircle];

export function AiFirstContent() {
  const t = useTranslations("aiFirst");

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
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight gradient-text-accent">
            {t("headline")}
          </h1>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            {t("sub")}
          </p>
        </motion.div>

        {/* What it means */}
        <motion.section
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-24"
        >
          <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl font-bold text-white mb-4">
            {t("what.headline")}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-text-secondary leading-relaxed text-lg mb-12">
            {t("what.description")}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(["1", "2", "3", "4"] as const).map((key, i) => {
              const Icon = itemIcons[i];
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
                    {t(`what.items.${key}.title`)}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {t(`what.items.${key}.description`)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative py-20 rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0">
            <NeuralNetwork particleCount={40} connectionDistance={130} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/80 via-transparent to-bg-primary/80" />
          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text-accent mb-6">
              {t("cta.headline")}
            </h2>
            <Link href="/contato">
              <GradientButton size="lg">{t("cta.button")}</GradientButton>
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
