"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CountUp } from "@/components/effects/CountUp";
import { ProjectMockup, type MockupVariant } from "@/components/ui/ProjectMockup";

export function PortfolioPageContent() {
  const t = useTranslations("portfolio");

  const projects = Array.from({ length: 4 }, (_, i) => ({
    title: t(`projects.${i}.title`),
    category: t(`projects.${i}.category`),
    mockupType: t(`projects.${i}.mockupType`) as MockupVariant,
    description: t(`projects.${i}.description`),
    tech: Array.from({ length: 5 }, (_, j) => t(`projects.${i}.tech.${j}`)),
    metrics: Array.from({ length: 3 }, (_, j) => ({
      value: t(`projects.${i}.metrics.${j}.value`),
      suffix: t(`projects.${i}.metrics.${j}.suffix`),
      label: t(`projects.${i}.metrics.${j}.label`),
    })),
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

      {/* Projects */}
      <section className="py-16 pb-24 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card variant="corporate" padding="lg">
                  {/* Mockup */}
                  <div className="mb-6">
                    <ProjectMockup variant={project.mockupType} />
                  </div>

                  {/* Header */}
                  <div className="mb-6">
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

                  {/* Tech stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-[#64748B] uppercase tracking-wider mb-3">
                      {t("techTitle")}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, tIndex) => (
                        <Badge key={tIndex} variant="outline" className="text-[#64748B] border-gray-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="pt-6 border-t border-gray-200">
                    <h4 className="text-sm font-semibold text-[#64748B] uppercase tracking-wider mb-4">
                      {t("metricsTitle")}
                    </h4>
                    <div className="grid grid-cols-3 gap-8">
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
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16"
          >
            <Link href="/contato">
              <Button variant="corporate" size="lg" className="group">
                Iniciar Projeto
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
