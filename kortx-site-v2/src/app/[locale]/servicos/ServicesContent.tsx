"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { GradientButton } from "@/components/ui/GradientButton";

export function ServicesContent() {
  const t = useTranslations("servicesPage");
  const tServices = useTranslations("services");
  const items = tServices.raw("items") as Array<{
    title: string;
    description: string;
    tags: string[];
  }>;
  const steps = t.raw("process.steps") as Array<{
    title: string;
    description: string;
  }>;

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

      {/* Services Grid */}
      <section className="mx-auto max-w-[1560px] px-6 lg:px-10 mb-32 lg:mb-40">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {items.map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="glow-card p-8 group">
              <div className="w-3 h-3 rounded-full bg-gradient mb-6" />
              <h3 className="text-xl font-semibold tracking-tight mb-3">{item.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-5">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs font-mono rounded-full border border-border text-text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Process */}
      <section className="bg-surface py-32 lg:py-40 border-y border-border">
        <div className="mx-auto max-w-[1560px] px-6 lg:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.03em] mb-16 lg:mb-20"
            >
              {t("process.title")}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <motion.div key={i} variants={fadeUp} className="relative">
                  {/* Step number */}
                  <div className="text-6xl font-bold text-gradient opacity-20 mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
                  {/* Connector line */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 lg:py-40">
        <div className="mx-auto max-w-[1560px] px-6 lg:px-10 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <GradientButton href="/contato" size="lg">
              {t("cta")}
            </GradientButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
