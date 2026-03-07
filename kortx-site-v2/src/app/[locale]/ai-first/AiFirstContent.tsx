"use client";

import { useRef, useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { NeuralNetwork } from "@/components/effects/NeuralNetwork";
import { TypeWriter } from "@/components/effects/TypeWriter";
import { GradientButton } from "@/components/ui/GradientButton";
import { fadeUp, staggerContainer, letterReveal, staggerFast } from "@/lib/animations";

function AnimatedMetric({ value, inView }: { value: string; inView: boolean }) {
  const numericPart = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]/g, "");

  const [display, setDisplay] = useState("0" + suffix);

  useEffect(() => {
    if (!inView) return;
    const end = numericPart;
    const duration = 1800;
    const startTime = performance.now();
    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(end * eased).toString() + suffix);
      if (progress < 1) requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }, [inView, numericPart, suffix]);

  return <span>{display}</span>;
}

export function AiFirstContent() {
  const t = useTranslations("aiFirst");
  const terminal = t.raw("terminal") as string[];
  const capabilities = t.raw("capabilities.items") as Array<{
    title: string;
    description: string;
    metric: string;
    metricLabel: string;
  }>;
  const steps = t.raw("process.steps") as Array<{
    title: string;
    description: string;
  }>;

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const title1 = t("hero.title1");
  const title2 = t("hero.title2");

  return (
    <div>
      {/* ===== HERO — Full-screen neural network + JARVIS terminal ===== */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-bg">
        {/* Neural Network — full background */}
        <div className="absolute inset-0">
          <NeuralNetwork
            particleCount={140}
            connectionDistance={190}
            particleColor="#6366f1"
            accentColor="#06b6d4"
            mouseRadius={250}
          />
        </div>

        {/* Radial vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, transparent 30%, rgba(5,5,5,0.7) 100%)",
          }}
        />

        {/* Content */}
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 mx-auto max-w-[1560px] px-6 lg:px-10 w-full pt-32 pb-20 pointer-events-none"
        >
          <div className="text-center max-w-4xl mx-auto">
            {/* Terminal badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-10"
            >
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] backdrop-blur-sm border border-white/[0.06]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo" />
                </span>
                <TypeWriter
                  texts={terminal}
                  speed={40}
                  deleteSpeed={20}
                  pauseTime={2200}
                  className="text-xs font-mono text-indigo/90"
                />
              </div>
            </motion.div>

            {/* Label */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="block text-xs font-mono uppercase tracking-[0.3em] text-text-muted mb-6"
            >
              {t("hero.label")}
            </motion.span>

            {/* Title — letter reveal */}
            <motion.div
              variants={staggerFast}
              initial="hidden"
              animate="visible"
              className="mb-8"
            >
              <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.04em]">
                <span className="block">
                  {title1.split("").map((char, i) => (
                    <motion.span
                      key={i}
                      variants={letterReveal}
                      custom={i}
                      className="inline-block"
                      style={{ whiteSpace: char === " " ? "pre" : undefined }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
                <span className="block text-gradient">
                  {title2.split("").map((char, i) => (
                    <motion.span
                      key={i}
                      variants={letterReveal}
                      custom={i + title1.length}
                      className="inline-block"
                      style={{ whiteSpace: char === " " ? "pre" : undefined }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8 }}
              className="text-lg lg:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto mb-10"
            >
              {t("hero.subtitle")}
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1 }}
              className="pointer-events-auto"
            >
              <GradientButton href="/contato" size="lg">
                {t("cta.button")}
              </GradientButton>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-text-muted/30 flex justify-center pt-1.5"
          >
            <motion.div
              animate={{ opacity: [1, 0], y: [0, 12] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-0.5 h-2 rounded-full bg-text-muted"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== CAPABILITIES — 4 immersive blocks ===== */}
      <section className="relative">
        <div className="border-t border-border">
          {capabilities.map((cap, i) => (
            <CapabilityBlock key={i} index={i} cap={cap} />
          ))}
        </div>
      </section>

      {/* ===== PROCESS — Dark horizontal timeline ===== */}
      <section className="relative py-32 lg:py-40 bg-surface border-t border-border">
        <div className="mx-auto max-w-[1560px] px-6 lg:px-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.03em] mb-20"
            >
              {t("process.title")}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="relative p-8 lg:p-10 border-l border-border first:border-l-0 lg:first:border-l"
                >
                  {/* Top connector line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient opacity-30" />

                  {/* Number */}
                  <div className="text-5xl font-bold text-gradient opacity-20 mb-6">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Pulse dot */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo/50 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo" />
                    </span>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                  </div>

                  <p className="text-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== CTA — Full neural ambiance ===== */}
      <section className="relative py-40 lg:py-52 overflow-hidden">
        {/* Background neural hint */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px]"
            style={{ background: "radial-gradient(circle, #6366f1, transparent 70%)" }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1560px] px-6 lg:px-10 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <motion.h2
              variants={fadeUp}
              className="text-[clamp(2.2rem,5vw,4rem)] font-bold tracking-[-0.03em] leading-[1.1] mb-6"
            >
              {t("cta.title")}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-text-secondary text-lg lg:text-xl mb-10"
            >
              {t("cta.subtitle")}
            </motion.p>
            <motion.div variants={fadeUp}>
              <GradientButton href="/contato" size="lg">
                {t("cta.button")}
              </GradientButton>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

/* ===== Capability Block — scroll-driven, alternating ===== */
function CapabilityBlock({
  index,
  cap,
}: {
  index: number;
  cap: { title: string; description: string; metric: string; metricLabel: string };
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-30% 0px -30% 0px" });
  const isEven = index % 2 === 0;
  const number = String(index + 1).padStart(2, "0");

  return (
    <div ref={ref} className={`border-b border-border ${index === 0 ? "" : ""}`}>
      <div className="mx-auto max-w-[1560px] px-6 lg:px-10 py-24 lg:py-32">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${
          isEven ? "" : "lg:[direction:rtl]"
        }`}>
          {/* Text */}
          <div className={isEven ? "" : "lg:[direction:ltr]"}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="text-xs font-mono text-indigo tracking-widest">{number}</span>
              <div className="h-px w-12 bg-gradient opacity-50" />
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[clamp(1.8rem,3.5vw,3rem)] font-bold tracking-[-0.03em] leading-[1.1] mb-5"
            >
              {cap.title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-text-secondary text-lg leading-relaxed max-w-lg"
            >
              {cap.description}
            </motion.p>
          </div>

          {/* Metric visual */}
          <div className={isEven ? "" : "lg:[direction:ltr]"}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative flex flex-col items-center justify-center"
            >
              {/* Large metric */}
              <div className="relative">
                <div className="text-[clamp(5rem,12vw,10rem)] font-bold text-gradient leading-none tracking-[-0.05em]">
                  {cap.metric}
                </div>
                {/* Glow behind metric */}
                <div className="absolute inset-0 text-[clamp(5rem,12vw,10rem)] font-bold leading-none tracking-[-0.05em] blur-[40px] opacity-20 text-indigo select-none pointer-events-none">
                  {cap.metric}
                </div>
              </div>
              <p className="text-sm font-mono text-text-muted uppercase tracking-widest mt-4 text-center">
                {cap.metricLabel}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
