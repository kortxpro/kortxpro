"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Smartphone, Server, Rocket, ShoppingCart, BarChart3, Zap, Bot, Users, Database, Download, CheckCircle2 } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const iconMap: Record<string, React.ElementType> = {
  globe: Globe,
  smartphone: Smartphone,
  server: Server,
  rocket: Rocket,
  shoppingCart: ShoppingCart,
  barChart: BarChart3,
  zap: Zap,
  bot: Bot,
  users: Users,
  database: Database,
  download: Download,
};

export function ServicesPageContent() {
  const t = useTranslations("services");

  const categories = Array.from({ length: 11 }, (_, i) => ({
    icon: t(`categories.${i}.icon`),
    title: t(`categories.${i}.title`),
    description: t(`categories.${i}.description`),
    features: Array.from({ length: 4 }, (_, j) => t(`categories.${i}.features.${j}`)),
  }));

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#0A1628] to-[#00A3FF]/20">
        <div className="absolute inset-0 hero-grid-pattern" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              {t("heroTitle")}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t("heroSubtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => {
              const IconComponent = iconMap[category.icon] || Globe;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card variant="corporate" padding="lg" className="h-full">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-[#00A3FF]/10 flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-[#00A3FF]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#0A1628] mb-2">
                          {category.title}
                        </h3>
                        <p className="text-[#64748B] leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-4 pl-[72px]">
                      {category.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#00A3FF] flex-shrink-0" />
                          <span className="text-sm text-[#64748B]">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-20"
          >
            <Card variant="corporate" padding="lg" className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-[#0A1628] mb-3">
                {t("ctaTitle")}
              </h3>
              <p className="text-[#64748B] mb-6">
                {t("ctaDescription")}
              </p>
              <Link href="/contato">
                <Button variant="corporate" size="lg" className="group">
                  {t("ctaButton")}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
