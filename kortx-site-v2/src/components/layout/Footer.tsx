"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="relative border-t border-border bg-bg">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient opacity-30" />

      <div className="mx-auto max-w-[1560px] px-6 lg:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="py-16 lg:py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
        >
          {/* Brand */}
          <motion.div variants={fadeUp} className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold tracking-tighter">
                KORT<span className="text-gradient">.X</span>
              </span>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              {t("description")}
            </p>
            <a
              href={`mailto:${t("email")}`}
              className="inline-block mt-4 text-sm text-text-secondary hover:text-white transition-colors gradient-underline"
            >
              {t("email")}
            </a>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={fadeUp}>
            <h4 className="text-xs font-mono uppercase tracking-widest text-text-muted mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {(["services", "work", "about", "contact"] as const).map((key) => (
                <li key={key}>
                  <Link
                    href={
                      key === "services" ? "/servicos" :
                      key === "work" ? "/portfolio" :
                      key === "about" ? "/sobre" :
                      "/contato"
                    }
                    className="text-sm text-text-secondary hover:text-white transition-colors duration-300"
                  >
                    {t(`nav.${key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div variants={fadeUp}>
            <h4 className="text-xs font-mono uppercase tracking-widest text-text-muted mb-6">
              Social
            </h4>
            <ul className="space-y-3">
              {(["instagram", "linkedin", "github"] as const).map((key) => (
                <li key={key}>
                  <a
                    href="#"
                    className="text-sm text-text-secondary hover:text-white transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t(`social.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Locations */}
          <motion.div variants={fadeUp}>
            <h4 className="text-xs font-mono uppercase tracking-widest text-text-muted mb-6">
              Offices
            </h4>
            <ul className="space-y-3">
              {(["orlando", "rio"] as const).map((key) => (
                <li key={key} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient shrink-0" />
                  <span className="text-sm text-text-secondary">
                    {t(`locations.${key}`)}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-border py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} KORT.X. {t("copyright")}
          </p>
          <p className="text-xs text-text-muted font-mono">
            Orlando, FL &middot; Rio de Janeiro, BR
          </p>
        </div>
      </div>
    </footer>
  );
}
