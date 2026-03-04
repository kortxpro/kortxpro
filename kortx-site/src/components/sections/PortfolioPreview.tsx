"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CountUp } from "@/components/effects/CountUp";
import { ProjectMockup, type MockupVariant } from "@/components/ui/ProjectMockup";

export function PortfolioPreview() {
  const t = useTranslations("home.portfolio");

  const projects = Array.from({ length: 3 }, (_, i) => ({
    title: t(`projects.${i}.title`),
    category: t(`projects.${i}.category`),
    mockupType: t(`projects.${i}.mockupType`) as MockupVariant,
    description: t(`projects.${i}.description`),
    metrics: Array.from({ length: 3 }, (_, j) => ({
      value: t(`projects.${i}.metrics.${j}.value`),
      suffix: t(`projects.${i}.metrics.${j}.suffix`),
      label: t(`projects.${i}.metrics.${j}.label`),
    })),
  }));

  return (
    <section className="py-24 bg-[#F8FAFC]">
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

        {/* Confidentiality notice */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 bg-[#0A1628]/5 border border-[#0A1628]/10 rounded-xl px-5 py-3 mb-10 max-w-2xl mx-auto"
        >
          <ShieldCheck className="h-4 w-4 text-[#00A3FF] flex-shrink-0" />
          <p className="text-sm text-[#64748B]">
            {t("confidential")}
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card variant="corporate" padding="lg">
                <div
                  className={`flex flex-col lg:flex-row lg:items-center gap-8 ${
                    index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Mockup */}
                  <div className="lg:w-2/5 flex-shrink-0">
                    <ProjectMockup variant={project.mockupType} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col lg:flex-row lg:items-center gap-8">
                    {/* Project info */}
                    <div className="flex-1">
                      <Badge variant="corporate" className="mb-4">
                        {project.category}
                      </Badge>
                      <h3 className="text-2xl font-bold text-[#0A1628] mb-3">
                        {project.title}
                      </h3>
                      <p className="text-[#64748B] leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Metrics */}
                    <div className="flex gap-8 lg:gap-6 flex-shrink-0">
                      {project.metrics.map((metric, mIndex) => (
                        <div key={mIndex} className="text-center">
                          <div className="text-3xl font-bold text-[#00A3FF]">
                            <CountUp
                              end={parseFloat(metric.value)}
                              duration={2}
                              suffix={metric.suffix}
                            />
                          </div>
                          <p className="text-xs text-[#64748B] mt-1">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>
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
          className="text-center mt-12"
        >
          <Link href="/portfolio">
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
