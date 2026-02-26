"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Smartphone, Server, Rocket, ShoppingCart, BarChart3, Zap, Bot, Users, Database, Download } from "lucide-react";
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

export function ServicesPreview() {
  const t = useTranslations("home.services");

  const services = Array.from({ length: 11 }, (_, i) => ({
    icon: t(`items.${i}.icon`),
    title: t(`items.${i}.title`),
    description: t(`items.${i}.description`),
  }));

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1628] mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Globe;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card variant="corporate" className="h-full group">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#00A3FF]/10 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-[#00A3FF]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#0A1628] mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[#64748B] leading-relaxed">
                        {service.description}
                      </p>
                    </div>
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
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/servicos">
            <Button variant="corporateOutline" size="lg" className="group">
              {t("cta")}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
