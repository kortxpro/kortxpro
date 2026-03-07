"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { GradientButton } from "@/components/ui/GradientButton";

export function CTA() {
  const t = useTranslations("cta");

  return (
    <section className="relative py-32 lg:py-44 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -30, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10 blur-[150px]"
          style={{ background: "radial-gradient(circle, #6366f1, #a855f7, transparent 70%)" }}
        />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1560px] px-6 lg:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.h2
            variants={fadeUp}
            className="text-[clamp(2.2rem,5vw,4rem)] font-bold tracking-[-0.03em] leading-[1.1] mb-6"
          >
            {t("title")}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-text-secondary text-lg lg:text-xl mb-10"
          >
            {t("subtitle")}
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <GradientButton href="/contato" size="lg">
              {t("button")}
            </GradientButton>
            <GradientButton href="/contato" variant="outline" size="lg">
              {t("secondary")}
            </GradientButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
