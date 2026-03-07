"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("footer");
  const tn = useTranslations("nav");

  return (
    <footer className="bg-black text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-tight text-white inline-block mb-4">
              KORT<span className="text-white/40">.</span>X
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              {t("description")}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-white/30 mb-5">
              {t("navigation")}
            </h4>
            <nav className="flex flex-col gap-3">
              <Link href="/portfolio" className="text-sm text-white/60 hover:text-white transition-colors">{tn("work")}</Link>
              <Link href="/servicos" className="text-sm text-white/60 hover:text-white transition-colors">{tn("services")}</Link>
              <Link href="/sobre" className="text-sm text-white/60 hover:text-white transition-colors">{tn("about")}</Link>
              <Link href="/ai-first" className="text-sm text-white/60 hover:text-white transition-colors">{tn("aiFirst")}</Link>
              <Link href="/contato" className="text-sm text-white/60 hover:text-white transition-colors">{tn("contact")}</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-white/30 mb-5">
              {t("contactTitle")}
            </h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:contato@kortx.pro" className="text-sm text-white/60 hover:text-white transition-colors">
                contato@kortx.pro
              </a>
              <a href="mailto:hello@kortx.pro" className="text-sm text-white/60 hover:text-white transition-colors">
                hello@kortx.pro
              </a>
              <span className="text-sm text-white/60">{t("phone")}</span>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-white/30 mb-5">
              Locations
            </h4>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-sm text-white/80 font-medium">Orlando</p>
                <p className="text-sm text-white/40">Florida, United States</p>
              </div>
              <div>
                <p className="text-sm text-white/80 font-medium">Rio de Janeiro</p>
                <p className="text-sm text-white/40">RJ, Brasil</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-mono text-xs text-white/30">
            &copy; 2018–{new Date().getFullYear()} KORT.X. {t("rights")}
          </p>
          <div className="flex items-center gap-6 font-mono text-xs text-white/30">
            <span>{t("privacy")}</span>
            <span>{t("terms")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
