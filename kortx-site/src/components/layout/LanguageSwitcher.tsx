"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  variant?: "neural" | "corporate" | "minimal";
}

export function LanguageSwitcher({ variant = "neural" }: LanguageSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: "pt-BR" | "en-US") => {
    router.replace(pathname, { locale: newLocale });
  };

  const baseStyles = "px-2 py-1 text-sm font-medium transition-all duration-200";

  const variantStyles = {
    neural: {
      active: "text-[#00A3FF]",
      inactive: "text-gray-400 hover:text-white",
    },
    corporate: {
      active: "text-[#00A3FF]",
      inactive: "text-gray-500 hover:text-gray-900",
    },
    minimal: {
      active: "text-current underline",
      inactive: "text-gray-400 hover:text-current",
    },
  };

  const styles = variantStyles[variant];

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => switchLocale("pt-BR")}
        className={cn(baseStyles, locale === "pt-BR" ? styles.active : styles.inactive)}
      >
        PT
      </button>
      <span className="text-gray-600">|</span>
      <button
        onClick={() => switchLocale("en-US")}
        className={cn(baseStyles, locale === "en-US" ? styles.active : styles.inactive)}
      >
        EN
      </button>
    </div>
  );
}
