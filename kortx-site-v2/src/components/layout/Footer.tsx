"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("footer");
  const tn = useTranslations("nav");

  return (
    <footer className="bg-black px-6 md:px-10 py-10">
      <div className="max-w-[1440px] mx-auto">
        {/* Row 1: Logo + Nav Links */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <Link href="/" className="font-display text-xl tracking-tight text-white">
            KORT<span className="text-accent">.</span>X
          </Link>

          <nav className="flex flex-wrap items-center gap-1 font-mono text-xs uppercase tracking-wider">
            <Link href="/servicos" className="text-text-secondary hover:text-white transition-colors px-2 py-1">{tn("services")}</Link>
            <span className="text-text-muted">/</span>
            <Link href="/portfolio" className="text-text-secondary hover:text-white transition-colors px-2 py-1">{tn("portfolio")}</Link>
            <span className="text-text-muted">/</span>
            <Link href="/sobre" className="text-text-secondary hover:text-white transition-colors px-2 py-1">{tn("about")}</Link>
            <span className="text-text-muted">/</span>
            <Link href="/ai-first" className="text-text-secondary hover:text-white transition-colors px-2 py-1">{tn("aiFirst")}</Link>
            <span className="text-text-muted">/</span>
            <Link href="/contato" className="text-text-secondary hover:text-white transition-colors px-2 py-1">{tn("contact")}</Link>
          </nav>
        </div>

        {/* Row 2: Copyright + Locations */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-mono text-xs text-text-muted">
            &copy; {new Date().getFullYear()} KORT.X. {t("rights")}
          </p>
          <div className="flex items-center gap-3 font-mono text-xs text-text-muted">
            <span>Orlando, FL</span>
            <span className="text-text-muted/40">/</span>
            <span>Rio de Janeiro, RJ</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
