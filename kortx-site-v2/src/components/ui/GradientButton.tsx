"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import type { Pathnames } from "@/i18n/routing";

interface GradientButtonProps {
  children: React.ReactNode;
  href?: Pathnames | string;
  onClick?: () => void;
  variant?: "filled" | "outline";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
}

export function GradientButton({
  children,
  href,
  onClick,
  variant = "filled",
  size = "md",
  type = "button",
  disabled = false,
  className = "",
}: GradientButtonProps) {
  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-sm",
    lg: "px-9 py-4 text-base",
  };

  const baseClasses = `
    relative inline-flex items-center justify-center gap-2
    rounded-full font-medium tracking-tight
    transition-all duration-400 ease-out
    overflow-hidden cursor-pointer
    ${sizes[size]}
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
    ${className}
  `;

  const filledClasses = `
    ${baseClasses}
    mesh-gradient text-white
    hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]
    hover:scale-[1.02]
    active:scale-[0.98]
  `;

  const outlineClasses = `
    ${baseClasses}
    bg-transparent text-text
    border border-border-hover
    hover:border-indigo hover:text-white
    hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]
    hover:scale-[1.02]
    active:scale-[0.98]
  `;

  const classes = variant === "filled" ? filledClasses : outlineClasses;

  const content = (
    <motion.span
      className="relative z-10 flex items-center gap-2"
      whileTap={{ scale: 0.97 }}
    >
      {children}
      {variant === "filled" && (
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          <path
            d="M1 7h12M8 2l5 5-5 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </motion.span>
  );

  if (href) {
    const isExternal = typeof href === "string" && href.startsWith("http");
    if (isExternal) {
      return (
        <a href={href} className={`group ${classes}`} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      );
    }
    return (
      <Link href={href as Pathnames} className={`group ${classes}`}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group ${classes}`}
    >
      {content}
    </button>
  );
}
