"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("footer");
  const tn = useTranslations("nav");

  return (
    <footer className="relative bg-bg-primary border-t border-white/[0.06]">
      {/* Glow line */}
      <div className="glow-line" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-xl font-bold tracking-tight text-white mb-4">
              KORT<span className="text-accent">.</span>X
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              {t("description")}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text-muted mb-4">
              {t("navigation")}
            </h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-sm text-text-secondary hover:text-white transition-colors">{t("home")}</Link></li>
              <li><Link href="/servicos" className="text-sm text-text-secondary hover:text-white transition-colors">{tn("services")}</Link></li>
              <li><Link href="/portfolio" className="text-sm text-text-secondary hover:text-white transition-colors">{tn("portfolio")}</Link></li>
              <li><Link href="/sobre" className="text-sm text-text-secondary hover:text-white transition-colors">{tn("about")}</Link></li>
              <li><Link href="/ai-first" className="text-sm text-text-secondary hover:text-white transition-colors">{tn("aiFirst")}</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text-muted mb-4">
              {t("company")}
            </h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-text-secondary">{t("blog")}</span></li>
              <li><span className="text-sm text-text-secondary">{t("careers")}</span></li>
              <li><span className="text-sm text-text-secondary">{t("privacy")}</span></li>
              <li><span className="text-sm text-text-secondary">{t("terms")}</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text-muted mb-4">
              {t("contactTitle")}
            </h4>
            <ul className="space-y-3">
              <li><a href="mailto:contato@kortx.pro" className="text-sm font-mono text-text-secondary hover:text-white transition-colors">{t("emailGeneral")}</a></li>
              <li><a href="mailto:hello@kortx.pro" className="text-sm font-mono text-text-secondary hover:text-white transition-colors">{t("emailUS")}</a></li>
              <li><span className="text-sm font-mono text-text-secondary">{t("phone")}</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} KORT.X. {t("rights")}
          </p>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-text-muted">Orlando, FL</span>
            <span className="text-text-muted/30">|</span>
            <span className="font-mono text-xs text-text-muted">Rio de Janeiro, RJ</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
