"use client";

import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { fadeUp, viewportOnce } from "@/lib/animations";

const steps = ["1", "2", "3", "4"] as const;

export function Approach() {
  const t = useTranslations("approach");
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const activeStep = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [1, 1, 2, 3, 4]);

  return (
    <section ref={containerRef} className="relative bg-black min-h-[300vh]">
      <div className="sticky top-0 min-h-screen flex items-stretch px-6 md:px-10 overflow-hidden">
        <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 py-20">
          {/* LEFT (sticky content) */}
          <div className="flex flex-col justify-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <h2 className="font-display text-display-lg text-white">
                {t("headline")}
              </h2>
              <p className="mt-4 text-text-secondary max-w-sm">
                {t("sub")}
              </p>
            </motion.div>
            {/* Giant step number */}
            <StepNumber progress={activeStep} />
          </div>

          {/* RIGHT (scrolling steps) */}
          <div className="flex flex-col">
            {steps.map((step) => (
              <div key={step} className="min-h-screen flex items-center">
                <div>
                  <span className="font-mono text-sm text-accent">
                    {String(Number(step)).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-display-sm text-white mt-2">
                    {t(`steps.${step}.title`)}
                  </h3>
                  <p className="mt-4 text-text-secondary leading-relaxed max-w-md">
                    {t(`steps.${step}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepNumber({ progress }: { progress: MotionValue<number> }) {
  return (
    <div className="mt-12 relative h-24">
      {steps.map((step) => (
        <StepDigit key={step} step={Number(step)} progress={progress} />
      ))}
    </div>
  );
}

function StepDigit({ step, progress }: { step: number; progress: MotionValue<number> }) {
  const opacity = useTransform(
    progress,
    [step - 0.5, step, step + 0.5],
    [0, 1, 0]
  );

  return (
    <motion.span
      className="absolute font-display text-display-xl text-accent/10"
      style={{ opacity }}
    >
      {String(step).padStart(2, "0")}
    </motion.span>
  );
}
