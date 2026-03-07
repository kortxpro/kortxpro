"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="min-h-[90vh] flex items-center justify-center px-6 md:px-10">
      <motion.div
        variants={staggerContainer(0.15)}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center pt-16"
      >
        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-[1.1]"
        >
          {t("headline")}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
        >
          {t("sub")}
        </motion.p>
      </motion.div>
    </section>
  );
}
