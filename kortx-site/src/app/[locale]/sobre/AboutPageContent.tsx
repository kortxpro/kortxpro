"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { ArrowRight, MapPin, Target, Eye, Heart, Handshake } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const valueIcons = [Target, Eye, Heart, Handshake];

export function AboutPageContent() {
  const t = useTranslations("about");

  const storyParagraphs = Array.from({ length: 3 }, (_, i) => t(`storyParagraphs.${i}`));
  const nameParagraphs = Array.from({ length: 3 }, (_, i) => t(`nameParagraphs.${i}`));
  const values = Array.from({ length: 4 }, (_, i) => ({
    title: t(`values.${i}.title`),
    description: t(`values.${i}.description`),
  }));
  const offices = Array.from({ length: 2 }, (_, i) => ({
    city: t(`offices.${i}.city`),
    state: t(`offices.${i}.state`),
    description: t(`offices.${i}.description`),
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

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[#0A1628] mb-8">
              {t("storyTitle")}
            </h2>
            <div className="space-y-6">
              {storyParagraphs.map((paragraph, index) => (
                <p key={index} className="text-lg text-[#64748B] leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why KORT.X */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card variant="corporate" padding="lg">
              <h2 className="text-3xl font-bold text-[#0A1628] mb-6">
                {t("nameTitle")}
              </h2>
              <div className="space-y-4">
                {nameParagraphs.map((paragraph, index) => (
                  <p key={index} className="text-[#64748B]">
                    {index === 1 ? (
                      <>
                        {paragraph.split("quadrado azul")[0]}
                        <span className="inline-block w-3 h-3 bg-[#00A3FF] mx-1 align-middle" />
                        {paragraph.split("quadrado azul").length > 1
                          ? paragraph.split("quadrado azul")[1]
                          : paragraph.split("blue square").length > 1
                          ? paragraph.split("blue square")[1]
                          : ""}
                      </>
                    ) : (
                      paragraph
                    )}
                  </p>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-[#0A1628] mb-6">
              {t("missionTitle")}
            </h2>
            <p className="text-2xl text-[#00A3FF] font-medium">
              &ldquo;{t("missionText")}&rdquo;
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-[#0A1628] text-center mb-12"
          >
            {t("valuesTitle")}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = valueIcons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card variant="corporate" className="h-full">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00A3FF]/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#00A3FF]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#0A1628] mb-1">
                          {value.title}
                        </h3>
                        <p className="text-[#64748B]">{value.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-16 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-[#0A1628] text-center mb-12"
          >
            {t("officesTitle")}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Card variant="corporate" padding="lg" className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#00A3FF]/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-[#00A3FF]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0A1628] mb-1">
                        {office.city}
                      </h3>
                      <p className="text-sm text-[#00A3FF] mb-3">
                        {office.state}
                      </p>
                      <p className="text-[#64748B] text-sm leading-relaxed">
                        {office.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16"
          >
            <Link href="/contato">
              <Button variant="corporate" size="lg" className="group">
                {t("heroTitle").includes("Sobre") ? "Fale Conosco" : "Get in Touch"}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
