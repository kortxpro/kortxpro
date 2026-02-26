"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

export function CTAInstitutional() {
  const t = useTranslations("home.cta");

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#0A1628] to-[#00A3FF]/20">
      {/* Geometric decorations */}
      <div className="absolute inset-0 hero-grid-pattern" />
      <div className="hero-circle-decoration w-[400px] h-[400px] -top-[150px] -right-[150px]" />
      <div className="hero-circle-decoration w-[300px] h-[300px] -bottom-[100px] -left-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            {t("title")}
          </h2>
          <p className="text-xl text-gray-300 mb-10">{t("description")}</p>

          <Link href="/contato">
            <Button variant="corporate" size="xl" className="group bg-white text-[#0A1628] hover:bg-gray-100">
              {t("button")}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>

          <p className="text-sm text-gray-400 mt-6">{t("note")}</p>
        </motion.div>
      </div>
    </section>
  );
}
