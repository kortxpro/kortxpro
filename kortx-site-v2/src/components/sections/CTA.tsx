"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/animations";

export function CTA() {
  const t = useTranslations("cta");

  return (
    <section className="py-20 px-6 bg-surface">
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="max-w-6xl mx-auto text-center"
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          {t("headline")}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mt-4 text-text-secondary max-w-lg mx-auto"
        >
          contato@kortx.pro
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8">
          <Link
            href="/contato"
            className="inline-block bg-accent text-black font-medium text-sm px-8 py-3 rounded-md hover:bg-accent/90 transition-colors"
          >
            {t("headline")}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
