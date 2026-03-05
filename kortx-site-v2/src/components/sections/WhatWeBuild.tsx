"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { clipReveal, slideFromLeft, slideFromRight, fadeUp, viewportOnce } from "@/lib/animations";

const items = ["sites", "apps", "systems", "landing", "ecommerce", "dashboards"] as const;

// Each block has a unique layout
function Block01({ num, title, desc }: { num: string; title: string; desc: string }) {
  // Number gigante absolute + título left + descrição right (assimétrico)
  return (
    <motion.div
      variants={slideFromLeft}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="relative bg-black py-20 md:py-28 px-6 md:px-10 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto relative">
        <span className="absolute -top-8 -left-4 font-display text-[12rem] md:text-[18rem] leading-none text-white/[0.03] select-none pointer-events-none">
          {num}
        </span>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-end">
          <h3 className="font-display text-display-md text-white">{title}</h3>
          <p className="text-text-secondary leading-relaxed">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

function Block02({ num, title, desc }: { num: string; title: string; desc: string }) {
  // Number flush-right + conteúdo centrado com accent line vertical
  return (
    <motion.div
      variants={clipReveal}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="relative bg-black py-20 md:py-28 px-6 md:px-10"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        <div className="flex items-start gap-6 max-w-xl">
          <div className="w-px h-20 bg-accent shrink-0 mt-2" />
          <div>
            <h3 className="font-display text-display-md text-white">{title}</h3>
            <p className="mt-4 text-text-secondary leading-relaxed">{desc}</p>
          </div>
        </div>
        <span className="font-display text-[6rem] md:text-[8rem] leading-none text-white/[0.05] select-none">
          {num}
        </span>
      </div>
    </motion.div>
  );
}

function Block03({ num, title, desc }: { num: string; title: string; desc: string }) {
  // Background surface + número com margin negativa
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="relative bg-surface py-20 md:py-28 px-6 md:px-10"
    >
      <div className="max-w-[1440px] mx-auto">
        <span className="font-display text-[5rem] md:text-[7rem] leading-none text-accent/10 -mb-8 block">
          {num}
        </span>
        <h3 className="font-display text-display-md text-white relative z-10">{title}</h3>
        <p className="mt-4 text-text-secondary leading-relaxed max-w-xl">{desc}</p>
      </div>
    </motion.div>
  );
}

function Block04({ num, title, desc }: { num: string; title: string; desc: string }) {
  // Número e título na mesma linha "04 — Landing Pages"
  return (
    <motion.div
      variants={slideFromRight}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="relative bg-black py-20 md:py-28 px-6 md:px-10"
    >
      <div className="max-w-[1440px] mx-auto">
        <h3 className="font-display text-display-md text-white">
          <span className="text-text-muted">{num}</span>
          <span className="text-text-muted mx-4">—</span>
          {title}
        </h3>
        <p className="mt-6 text-text-secondary leading-relaxed max-w-2xl ml-0 md:ml-32">{desc}</p>
      </div>
    </motion.div>
  );
}

function Block05({ num, title, desc }: { num: string; title: string; desc: string }) {
  // Split 40/60
  return (
    <motion.div
      variants={slideFromLeft}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="relative bg-black py-20 md:py-28 px-6 md:px-10"
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-16">
        <div className="md:col-span-2">
          <span className="font-mono text-sm text-text-muted">{num}</span>
          <h3 className="font-display text-display-md text-white mt-2">{title}</h3>
        </div>
        <div className="md:col-span-3">
          <p className="text-text-secondary leading-relaxed text-lg">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

function Block06({ num, title, desc }: { num: string; title: string; desc: string }) {
  // Background warm + título em accent
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="relative py-20 md:py-28 px-6 md:px-10"
      style={{ backgroundColor: "#0d0d08" }}
    >
      <div className="max-w-[1440px] mx-auto">
        <span className="font-mono text-sm text-text-muted">{num}</span>
        <h3 className="font-display text-display-md text-accent mt-2">{title}</h3>
        <p className="mt-4 text-text-secondary leading-relaxed max-w-xl">{desc}</p>
      </div>
    </motion.div>
  );
}

const blocks = [Block01, Block02, Block03, Block04, Block05, Block06];

export function WhatWeBuild() {
  const t = useTranslations("whatWeBuild");

  return (
    <section>
      {/* Section header */}
      <div className="bg-black px-6 md:px-10 pt-24 pb-12">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            variants={clipReveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <h2 className="font-display text-display-lg text-white">{t("headline")}</h2>
            <p className="mt-4 text-text-secondary max-w-xl">{t("sub")}</p>
          </motion.div>
        </div>
      </div>

      {/* Blocks */}
      {items.map((item, i) => {
        const Block = blocks[i];
        const num = String(i + 1).padStart(2, "0");
        return (
          <Block
            key={item}
            num={num}
            title={t(`items.${item}.title`)}
            desc={t(`items.${item}.description`)}
          />
        );
      })}
    </section>
  );
}
