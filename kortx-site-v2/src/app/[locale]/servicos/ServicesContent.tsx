"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { clipReveal, slideFromLeft, slideFromRight, fadeUp, viewportOnce } from "@/lib/animations";
import { TextButton } from "@/components/ui/TextButton";

const services = ["web", "mobile", "systems", "ai", "design", "consulting"] as const;

export function ServicesContent() {
  const t = useTranslations("services");

  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <div className="px-6 md:px-10 max-w-[1440px] mx-auto mb-20">
        <motion.h1
          variants={clipReveal}
          initial="hidden"
          animate="visible"
          className="font-display text-display-lg text-white"
        >
          {t("headline")}
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-4 text-text-secondary max-w-2xl text-lg"
        >
          {t("sub")}
        </motion.p>
      </div>

      {/* Service blocks — alternating bg + layout */}
      {services.map((key, i) => {
        const num = String(i + 1).padStart(2, "0");
        const isAlt = i % 2 === 1;
        const animation = isAlt ? slideFromRight : slideFromLeft;

        return (
          <motion.div
            key={key}
            variants={animation}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className={`py-20 md:py-28 px-6 md:px-10 ${isAlt ? "bg-surface" : "bg-black"}`}
          >
            <div className="max-w-[1440px] mx-auto">
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 ${isAlt ? "md:text-right" : ""}`}>
                <div className={isAlt ? "md:order-2" : ""}>
                  <span className="font-mono text-sm text-text-muted">{num}</span>
                  <h2 className="font-display text-display-md text-white mt-2">
                    {t(`items.${key}.title`)}
                  </h2>
                </div>
                <div className={isAlt ? "md:order-1" : ""}>
                  <p className="text-text-secondary leading-relaxed text-lg mb-6">
                    {t(`items.${key}.description`)}
                  </p>
                  {/* Horizontal capability tags */}
                  <div className="flex flex-wrap gap-2">
                    {(t.raw(`items.${key}.features`) as string[]).map((feature: string, j: number) => (
                      <span
                        key={j}
                        className="font-mono text-xs px-3 py-1.5 bg-surface-elevated border border-border rounded text-text-secondary"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* CTA */}
      <div className="py-20 px-6 md:px-10 bg-black">
        <div className="max-w-[1440px] mx-auto">
          <TextButton href="/contato">
            {t("headline") === "Nossos serviços" ? "Fale sobre seu projeto" : "Talk about your project"}
          </TextButton>
        </div>
      </div>
    </div>
  );
}
