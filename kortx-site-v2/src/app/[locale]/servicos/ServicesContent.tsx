"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { Link } from "@/i18n/navigation";
import { GradientButton } from "@/components/ui/GradientButton";
import { Globe, Smartphone, Server, Brain, Palette, MessageSquare } from "lucide-react";

const services = [
  { key: "web", icon: Globe },
  { key: "mobile", icon: Smartphone },
  { key: "systems", icon: Server },
  { key: "ai", icon: Brain },
  { key: "design", icon: Palette },
  { key: "consulting", icon: MessageSquare },
] as const;

export function ServicesContent() {
  const t = useTranslations("services");

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight gradient-text">
            {t("headline")}
          </h1>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            {t("sub")}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map(({ key, icon: Icon }) => (
            <motion.div
              key={key}
              variants={fadeInUp}
              className="group p-8 rounded-2xl bg-bg-elevated border border-white/[0.06] hover:border-accent/30 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <Icon size={24} className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {t(`items.${key}.title`)}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                {t(`items.${key}.description`)}
              </p>
              <ul className="space-y-2">
                {(t.raw(`items.${key}.features`) as string[]).map((feature: string, i: number) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-text-muted">
                    <div className="w-1 h-1 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-20 text-center"
        >
          <Link href="/contato">
            <GradientButton size="lg">
              {t("headline") === "Nossos serviços" ? "Fale sobre seu projeto" : "Talk about your project"}
            </GradientButton>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
