"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { GradientButton } from "@/components/ui/GradientButton";

const serviceVisuals = [
  // Web — browser mockup
  { gradient: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)", icon: "W" },
  // Apps — phone
  { gradient: "linear-gradient(135deg, #0a0a0a, #1a0a2e, #2d1b69)", icon: "A" },
  // Systems — dashboard
  { gradient: "linear-gradient(135deg, #0d1117, #161b22, #21262d)", icon: "S" },
  // Branding — shapes
  { gradient: "linear-gradient(135deg, #1b1b2f, #162447, #1f4068)", icon: "B" },
  // E-commerce — cart
  { gradient: "linear-gradient(135deg, #0a0a0a, #1a1a1a, #2a1a3a)", icon: "E" },
  // AI — neural
  { gradient: "linear-gradient(135deg, #111827, #1e293b, #0f172a)", icon: "I" },
];

function ServiceBlock({
  index,
  title,
  description,
  tags,
  isLast,
}: {
  index: number;
  title: string;
  description: string;
  tags: string[];
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-30% 0px -30% 0px" });

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);

  const isEven = index % 2 === 0;
  const visual = serviceVisuals[index];
  const number = String(index + 1).padStart(2, "0");

  return (
    <div ref={containerRef} className={`${!isLast ? "border-b border-border" : ""}`}>
      <div
        ref={ref}
        className="mx-auto max-w-[1560px] px-6 lg:px-10 py-24 lg:py-32"
      >
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
          isEven ? "" : "lg:[direction:rtl]"
        }`}>
          {/* Text side */}
          <div className={`${isEven ? "" : "lg:[direction:ltr]"}`}>
            {/* Number */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="text-xs font-mono text-indigo tracking-widest">{number}</span>
              <div className="h-px w-12 bg-gradient opacity-50" />
            </motion.div>

            {/* Title */}
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-[-0.03em] leading-[1.05] mb-6"
            >
              {title}
            </motion.h3>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-text-secondary text-lg leading-relaxed mb-8 max-w-lg"
            >
              {description}
            </motion.p>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-2"
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 text-xs font-mono rounded-full border border-border text-text-muted hover:border-indigo/40 hover:text-text-secondary transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Visual side */}
          <div className={`${isEven ? "" : "lg:[direction:ltr]"}`}>
            <motion.div
              initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
              animate={inView
                ? { opacity: 1, clipPath: "inset(0 0% 0 0)" }
                : { opacity: 0, clipPath: "inset(0 100% 0 0)" }
              }
              transition={{ duration: 1, delay: 0.15, ease: [0.77, 0, 0.175, 1] }}
              className="relative"
            >
              <motion.div
                style={{ y: imageY, scale: imageScale }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden"
              >
                {/* Background gradient */}
                <div
                  className="absolute inset-0"
                  style={{ background: visual.gradient }}
                />

                {/* Animated mesh inside */}
                <motion.div
                  className="absolute inset-0 opacity-40"
                  animate={{
                    background: [
                      `radial-gradient(circle at 20% 30%, rgba(99,102,241,0.4), transparent 60%)`,
                      `radial-gradient(circle at 80% 70%, rgba(168,85,247,0.4), transparent 60%)`,
                      `radial-gradient(circle at 50% 20%, rgba(6,182,212,0.4), transparent 60%)`,
                      `radial-gradient(circle at 20% 30%, rgba(99,102,241,0.4), transparent 60%)`,
                    ],
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Grid overlay */}
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                  }}
                />

                {/* Large letter watermark */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[120px] lg:text-[180px] font-bold text-white/[0.03] select-none leading-none">
                    {visual.icon}
                  </span>
                </div>

                {/* Floating accent element */}
                <motion.div
                  animate={{ y: [-8, 8, -8], rotate: [0, 3, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-6 right-6 w-14 h-14 rounded-xl bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] flex items-center justify-center"
                >
                  <span className="text-sm font-mono text-gradient">{number}</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  const t = useTranslations("services");
  const items = t.raw("items") as Array<{
    title: string;
    description: string;
    tags: string[];
  }>;

  return (
    <section className="relative">
      {/* Section header */}
      <div className="mx-auto max-w-[1560px] px-6 lg:px-10 pt-32 lg:pt-40 pb-16 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="block text-xs font-mono uppercase tracking-widest text-indigo mb-4">
            {t("label")}
          </span>
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.03em] leading-[1.1] mb-4">
            {t("title")}
          </h2>
          <p className="text-text-secondary text-lg max-w-xl">
            {t("subtitle")}
          </p>
        </motion.div>
      </div>

      {/* Service blocks — one per service, alternating layout */}
      <div className="border-t border-border">
        {items.map((item, i) => (
          <ServiceBlock
            key={i}
            index={i}
            title={item.title}
            description={item.description}
            tags={item.tags}
            isLast={i === items.length - 1}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-[1560px] px-6 lg:px-10 py-16 lg:py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GradientButton href="/servicos" variant="outline">
            {t("cta")}
          </GradientButton>
        </motion.div>
      </div>
    </section>
  );
}
