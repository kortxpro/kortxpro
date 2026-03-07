"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { GradientButton } from "@/components/ui/GradientButton";
import { NeuralNetwork } from "@/components/effects/NeuralNetwork";
import { letterReveal, staggerFast, fadeUp, blurIn } from "@/lib/animations";

export function Hero() {
  const t = useTranslations("hero");
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const title1 = t("title1");
  const title2 = t("title2");

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background base */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-bg" />
        {/* Subtle gradient orbs behind everything */}
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 60, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px]"
          style={{ background: "radial-gradient(circle, #6366f1, transparent 70%)" }}
        />
        <motion.div
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 100, -40, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-10 blur-[120px]"
          style={{ background: "radial-gradient(circle, #a855f7, transparent 70%)" }}
        />
        {/* Noise overlay */}
        <div className="absolute inset-0 noise-overlay opacity-40" />
      </div>

      {/* Neural Network — right side, immersive */}
      <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full">
        {/* Fade-out gradient on left edge so it blends into the text area */}
        <div className="absolute inset-y-0 left-0 w-40 z-10 bg-gradient-to-r from-bg to-transparent" />
        {/* Fade bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 z-10 bg-gradient-to-t from-bg to-transparent" />
        <NeuralNetwork
          particleCount={120}
          connectionDistance={180}
          particleColor="#6366f1"
          accentColor="#06b6d4"
          mouseRadius={230}
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-20 mx-auto max-w-[1560px] px-6 lg:px-10 w-full pt-32 pb-20"
      >
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            variants={blurIn}
            initial="hidden"
            animate="visible"
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-bg/60 backdrop-blur-sm text-xs font-mono text-text-secondary uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient animate-pulse-glow" />
              {t("badge")}
            </span>
          </motion.div>

          {/* Title with letter reveal */}
          <motion.div
            variants={staggerFast}
            initial="hidden"
            animate="visible"
            className="mb-6"
          >
            <h1 className="text-[clamp(2.8rem,8vw,6rem)] font-bold leading-[0.95] tracking-[-0.04em]">
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
              <span className="block">
                {title2.split("").map((char, i) => {
                  const isKortx = title2.indexOf("KORT.X") !== -1 &&
                    i >= title2.indexOf("KORT.X") &&
                    i < title2.indexOf("KORT.X") + 6;
                  return (
                    <motion.span
                      key={i}
                      variants={letterReveal}
                      custom={i + title1.length}
                      className={`inline-block ${isKortx ? "text-gradient" : ""}`}
                      style={{ whiteSpace: char === " " ? "pre" : undefined }}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            className="text-lg lg:text-xl text-text-secondary leading-relaxed max-w-xl mb-10"
          >
            {t("subtitle")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <GradientButton href="/portfolio" size="lg">
              {t("cta1")}
            </GradientButton>
            <GradientButton href="/contato" variant="outline" size="lg">
              {t("cta2")}
            </GradientButton>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-6 lg:left-10 z-20 flex items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-text-muted/30 flex justify-center pt-1.5"
        >
          <motion.div
            animate={{ opacity: [1, 0], y: [0, 12] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-0.5 h-2 rounded-full bg-text-muted"
          />
        </motion.div>
        <span className="text-[11px] font-mono text-text-muted uppercase tracking-widest">
          {t("scroll")}
        </span>
      </motion.div>
    </section>
  );
}
