"use client";

import { useRef, type MouseEvent } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { ProjectMockup, type MockupVariant } from "@/components/ui/ProjectMockup";
import { GradientButton } from "@/components/ui/GradientButton";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import { ArrowRight } from "lucide-react";

const featuredProjects: { key: string; variant: MockupVariant }[] = [
  { key: "1", variant: "site-law" },
  { key: "2", variant: "landing-saas" },
  { key: "3", variant: "app-field" },
];

function SpotlightCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--spot-x", `${x}px`);
    cardRef.current.style.setProperty("--spot-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`group relative rounded-2xl bg-bg-elevated border border-white/[0.06] overflow-hidden transition-all duration-500 hover:border-accent/30 ${className}`}
    >
      {/* Spotlight effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: "radial-gradient(400px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(99,102,241,0.08), transparent 60%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function Work() {
  const t = useTranslations("work");

  return (
    <section className="relative py-24 md:py-32 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight gradient-text">
            {t("headline")}
          </h2>
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            {t("sub")}
          </p>
          <p className="mt-2 font-mono text-xs text-text-muted">
            {t("confidential")}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {/* Featured (large) */}
          <motion.div variants={fadeInUp} className="lg:row-span-2">
            <SpotlightCard className="h-full p-6 flex flex-col">
              <div className="flex-1">
                <ProjectMockup variant={featuredProjects[0].variant} />
              </div>
              <div className="mt-6">
                <span className="font-mono text-xs text-accent uppercase tracking-wider">
                  {t(`projects.${featuredProjects[0].key}.category`)}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {t(`projects.${featuredProjects[0].key}.title`)}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {t(`projects.${featuredProjects[0].key}.description`)}
                </p>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Smaller projects */}
          {featuredProjects.slice(1).map((project) => (
            <motion.div key={project.key} variants={fadeInUp}>
              <SpotlightCard className="p-6">
                <ProjectMockup variant={project.variant} />
                <div className="mt-4">
                  <span className="font-mono text-xs text-accent uppercase tracking-wider">
                    {t(`projects.${project.key}.category`)}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {t(`projects.${project.key}.title`)}
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    {t(`projects.${project.key}.description`)}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 text-center"
        >
          <Link href="/portfolio">
            <GradientButton>
              {t("viewAll")} <ArrowRight size={16} className="inline ml-2" />
            </GradientButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
