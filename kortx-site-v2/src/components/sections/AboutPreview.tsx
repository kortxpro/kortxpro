"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeUp, slideFromLeft, slideFromRight, staggerContainer } from "@/lib/animations";
import { GradientButton } from "@/components/ui/GradientButton";

export function AboutPreview() {
  const t = useTranslations("about");
  const locations = t.raw("locations") as string[];

  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-5 blur-[150px]"
        style={{ background: "radial-gradient(circle, #a855f7, transparent 70%)" }}
      />

      <div className="mx-auto max-w-[1560px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.span
              variants={fadeUp}
              className="block text-xs font-mono uppercase tracking-widest text-indigo mb-4"
            >
              {t("label")}
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.03em] leading-[1.1] mb-6"
            >
              {t("title")}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-text-secondary text-lg leading-relaxed mb-4"
            >
              {t("description1")}
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-text-secondary text-lg leading-relaxed mb-8"
            >
              {t("description2")}
            </motion.p>

            {/* Locations */}
            <motion.div variants={fadeUp} className="flex items-center gap-6 mb-8">
              {locations.map((loc) => (
                <div key={loc} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gradient" />
                  <span className="text-sm font-mono text-text-secondary">{loc}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp}>
              <GradientButton href="/sobre">
                {t("cta")}
              </GradientButton>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Gradient frame */}
              <div className="absolute inset-0 rounded-3xl bg-gradient opacity-[0.07]" />
              <div className="absolute inset-[1px] rounded-3xl bg-card" />

              {/* Content inside */}
              <div className="relative h-full flex flex-col items-center justify-center p-12">
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-8 right-8 w-16 h-16 rounded-2xl border-gradient flex items-center justify-center"
                >
                  <span className="text-2xl font-bold text-gradient">K</span>
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-12 left-8 w-12 h-12 rounded-xl bg-gradient-subtle border border-border flex items-center justify-center"
                >
                  <span className="text-xs font-mono text-indigo">.X</span>
                </motion.div>

                {/* Center content */}
                <div className="text-center">
                  <div className="text-8xl font-bold text-gradient mb-4">6</div>
                  <p className="text-text-secondary text-sm font-mono uppercase tracking-widest">
                    Years building
                  </p>
                  <p className="text-text-secondary text-sm font-mono uppercase tracking-widest">
                    digital products
                  </p>
                </div>

                {/* Orbital circles */}
                <div className="absolute inset-12 rounded-full border border-border/30" />
                <div className="absolute inset-20 rounded-full border border-border/20" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
