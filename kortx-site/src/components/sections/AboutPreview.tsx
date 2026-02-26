"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function AboutPreview() {
  const t = useTranslations("home.about");

  const offices = Array.from({ length: 2 }, (_, i) => ({
    city: t(`offices.${i}.city`),
    state: t(`offices.${i}.state`),
    description: t(`offices.${i}.description`),
  }));

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1628] mb-6">
              {t("title")}
            </h2>
            <p className="text-lg text-[#64748B] leading-relaxed mb-8">
              {t("description")}
            </p>
            <Link href="/sobre">
              <Button variant="corporateOutline" size="lg" className="group">
                {t("cta")}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>

          {/* Offices */}
          <div className="space-y-6">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Card variant="corporate">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#00A3FF]/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-[#00A3FF]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0A1628] mb-1">
                        {office.city}
                      </h3>
                      <p className="text-sm text-[#00A3FF] mb-2">
                        {office.state}
                      </p>
                      <p className="text-sm text-[#64748B]">
                        {office.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
