"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { ProjectMockup, type MockupVariant } from "@/components/ui/ProjectMockup";
import { TextButton } from "@/components/ui/TextButton";
import { fadeUp, viewportOnce } from "@/lib/animations";

const projects: { key: string; variant: MockupVariant }[] = [
  { key: "1", variant: "site-law" },
  { key: "2", variant: "site-health" },
  { key: "3", variant: "site-realestate" },
  { key: "4", variant: "landing-saas" },
  { key: "5", variant: "landing-event" },
  { key: "6", variant: "app-internal" },
  { key: "7", variant: "app-field" },
  { key: "8", variant: "dashboard-finance" },
  { key: "9", variant: "system-logistics" },
];

export function Work() {
  const t = useTranslations("work");
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: scrollRef });
  const progressWidth = useTransform(scrollXProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="work" className="relative bg-black py-24 md:py-32 overflow-hidden">
      {/* Header */}
      <div className="px-6 md:px-10 max-w-[1440px] mx-auto mb-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <h2 className="font-display text-display-lg text-white">
            {t("headline")}
          </h2>
          <p className="mt-2 text-text-secondary max-w-xl">
            {t("sub")}
          </p>
          <p className="mt-2 font-mono text-xs text-text-muted">
            {t("confidential")}
          </p>
        </motion.div>
      </div>

      {/* Horizontal scroll gallery */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-6 md:px-10 pb-4 snap-x snap-mandatory"
      >
        {projects.map((project) => (
          <div
            key={project.key}
            className="flex-shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] snap-start"
          >
            <div className="bg-surface rounded-xl p-6 border border-border h-full">
              <ProjectMockup variant={project.variant} />
              <div className="mt-6">
                <span className="font-mono text-xs text-accent uppercase tracking-wider">
                  {t(`projects.${project.key}.category`)}
                </span>
                <h3 className="font-display text-lg text-white mt-1">
                  {t(`projects.${project.key}.title`)}
                </h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  {t(`projects.${project.key}.description`)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="px-6 md:px-10 max-w-[1440px] mx-auto mt-8">
        <div className="h-px bg-border relative">
          <motion.div
            className="absolute top-0 left-0 h-full bg-accent"
            style={{ width: progressWidth }}
          />
        </div>

        {/* View all link */}
        <div className="flex justify-end mt-6">
          <TextButton href="/portfolio">{t("viewAll")}</TextButton>
        </div>
      </div>
    </section>
  );
}
