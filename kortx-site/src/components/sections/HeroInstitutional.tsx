"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { TypeWriter } from "@/components/effects/TypeWriter";
import { NeuralNetwork } from "@/components/effects/NeuralNetwork";

export function HeroInstitutional() {
  const t = useTranslations("home.hero");

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#0F1D32] to-[#0A1628]">
      {/* Ambient gradient orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-[#00A3FF]/[0.07] blur-[120px]" />
      <div className="absolute bottom-[-15%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#00A3FF]/[0.05] blur-[100px]" />

      {/* Subtle grid */}
      <div className="absolute inset-0 hero-grid-pattern opacity-40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div>
            {/* Tagline badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00A3FF]/10 border border-[#00A3FF]/20 text-[#00A3FF] text-sm font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00A3FF] animate-pulse" />
                <TypeWriter texts={t.raw("taglines") as string[]} speed={60} />
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6"
            >
              {t("headline")}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-gray-400 leading-relaxed max-w-xl mb-10"
            >
              {t("subheadline")}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/servicos">
                <Button size="lg" className="group bg-[#00A3FF] text-white hover:bg-[#0091E6] hover:shadow-lg">
                  {t("ctaPrimary")}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contato">
                <Button variant="corporateOutline" size="lg" className="border-white/25 text-white hover:bg-white/10 hover:border-white/40">
                  {t("ctaSecondary")}
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right — Neural Network visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <div className="relative w-full max-w-md aspect-square">
              {/* Neural Network canvas */}
              <NeuralNetwork
                particleCount={70}
                connectionDistance={140}
                mouseRadius={180}
              />

              {/* Stat cards floating */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[8%] left-[-5%] z-10 bg-white/[0.07] backdrop-blur-md border border-white/10 rounded-xl px-4 py-3"
              >
                <p className="text-xs text-gray-400">Projetos entregues</p>
                <p className="text-lg font-bold text-white">150+</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[12%] right-[-8%] z-10 bg-white/[0.07] backdrop-blur-md border border-white/10 rounded-xl px-4 py-3"
              >
                <p className="text-xs text-gray-400">Satisfação</p>
                <p className="text-lg font-bold text-[#00A3FF]">98%</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
