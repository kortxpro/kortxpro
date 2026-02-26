"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  BarChart3,
  Users,
  Zap,
  MessageSquare,
  Play,
  X,
  CheckCircle2,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const iconMap: Record<string, React.ElementType> = {
  trendingUp: TrendingUp,
  barChart3: BarChart3,
  users: Users,
  zap: Zap,
  messageSquare: MessageSquare,
};

export function AIFirstPageContent() {
  const t = useTranslations("aiFirst");

  const traditionalItems = Array.from({ length: 4 }, (_, i) =>
    t(`problemTraditionalItems.${i}`)
  );

  const aiFirstItems = Array.from({ length: 4 }, (_, i) =>
    t(`problemAIFirstItems.${i}`)
  );

  const benefits = Array.from({ length: 5 }, (_, i) => ({
    icon: t(`benefits.${i}.icon`),
    title: t(`benefits.${i}.title`),
    description: t(`benefits.${i}.description`),
  }));

  const steps = Array.from({ length: 3 }, (_, i) => ({
    number: t(`steps.${i}.number`),
    title: t(`steps.${i}.title`),
    description: t(`steps.${i}.description`),
  }));

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#0A1628] to-[#00A3FF]/20">
        <div className="absolute inset-0 hero-grid-pattern" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {t("heroTitle")}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              {t("heroSubtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* O Problema — Antes vs AI First */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              {t("problemTitle")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card variant="corporate" padding="lg" className="h-full border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                    <X className="w-5 h-5 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1628]">
                    {t("problemTraditionalTitle")}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {traditionalItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gray-300 mt-2 flex-shrink-0" />
                      <span className="text-[#64748B] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            {/* AI First */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card variant="corporate" padding="lg" className="h-full border-[#00A3FF]/30 bg-[#00A3FF]/5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#00A3FF]/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-[#00A3FF]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1628]">
                    {t("problemAIFirstTitle")}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {aiFirstItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#00A3FF] mt-0.5 flex-shrink-0" />
                      <span className="text-[#64748B] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              {t("videoTitle")}
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              {t("videoSubtitle")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative aspect-video bg-[#0A1628] rounded-2xl shadow-xl overflow-hidden group cursor-pointer">
              {/* Grid pattern overlay */}
              <div className="absolute inset-0 hero-grid-pattern opacity-30" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 transition-transform group-hover:scale-110">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5 Beneficios */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              {t("benefitsTitle")}
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              {t("benefitsSubtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = iconMap[benefit.icon] || Zap;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card variant="corporate" padding="lg" className="h-full">
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-[#00A3FF]/10 flex items-center justify-center mb-4">
                      <IconComponent className="w-7 h-7 text-[#00A3FF]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0A1628] mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-[#64748B] leading-relaxed">
                      {benefit.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Como funciona — 3 steps */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
              {t("stepsTitle")}
            </h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              {t("stepsSubtitle")}
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex gap-6 md:gap-8 mb-12 last:mb-0"
              >
                {/* Number circle + connector line */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#00A3FF] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-[#00A3FF]/20 mt-4" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-12 last:pb-0">
                  <h3 className="text-2xl font-bold text-[#0A1628] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#64748B] leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#0A1628] to-[#00A3FF]/20">
        <div className="absolute inset-0 hero-grid-pattern" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t("ctaTitle")}
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              {t("ctaDescription")}
            </p>
            <Link href="/contato">
              <Button variant="corporate" size="lg" className="group">
                {t("ctaButton")}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
