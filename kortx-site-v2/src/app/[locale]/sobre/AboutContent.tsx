"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { GradientButton } from "@/components/ui/GradientButton";

export function AboutContent() {
  const t = useTranslations("aboutPage");
  const values = t.raw("values") as Array<{ title: string; description: string }>;

  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="mx-auto max-w-[1560px] px-6 lg:px-10 mb-24 lg:mb-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.h1
            variants={fadeUp}
            className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold tracking-[-0.04em] leading-[1] mb-6"
          >
            {t("title")}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-xl text-text-secondary leading-relaxed"
          >
            {t("subtitle")}
          </motion.p>
        </motion.div>
      </section>

      {/* Mission */}
      <section className="bg-surface py-32 lg:py-40 border-y border-border mb-24 lg:mb-32">
        <div className="mx-auto max-w-[1560px] px-6 lg:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeUp}>
              <span className="block text-xs font-mono uppercase tracking-widest text-indigo mb-4">
                Mission
              </span>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.03em] leading-[1.1] mb-6">
                {t("mission.title")}
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                {t("mission.description")}
              </p>
            </motion.div>

            {/* Visual element */}
            <motion.div variants={fadeUp} className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                <div className="absolute inset-0 mesh-gradient opacity-30" />
                <div className="absolute inset-0 bg-card/80" />
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-7xl lg:text-8xl font-bold text-gradient opacity-30">K.X</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-[1560px] px-6 lg:px-10 mb-24 lg:mb-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp} className="mb-16">
            <span className="block text-xs font-mono uppercase tracking-widest text-indigo mb-4">
              Values
            </span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.03em]">
              O que nos guia
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="glow-card p-8 lg:p-10"
              >
                <div className="text-4xl font-bold text-gradient opacity-20 mb-4">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-semibold tracking-tight mb-3">{value.title}</h3>
                <p className="text-text-secondary leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Team */}
      <section className="bg-surface py-32 lg:py-40 border-y border-border">
        <div className="mx-auto max-w-[1560px] px-6 lg:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <motion.span
              variants={fadeUp}
              className="block text-xs font-mono uppercase tracking-widest text-indigo mb-4"
            >
              Team
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.03em] mb-6"
            >
              {t("team.title")}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-text-secondary text-lg leading-relaxed mb-10"
            >
              {t("team.description")}
            </motion.p>
            <motion.div variants={fadeUp}>
              <GradientButton href="/contato">
                Fale conosco
              </GradientButton>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
