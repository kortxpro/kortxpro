"use client";

import { Link } from "@/i18n/navigation";
import type { ComponentProps } from "react";

type LinkProps = ComponentProps<typeof Link>;

interface TextButtonProps {
  children: React.ReactNode;
  href?: LinkProps["href"];
  onClick?: () => void;
  className?: string;
  external?: boolean;
}

export function TextButton({ children, href, onClick, className = "", external }: TextButtonProps) {
  const baseClass = `font-mono text-sm text-accent inline-flex items-center gap-2 group transition-colors hover:text-accent/80 ${className}`;

  if (href && external) {
    return (
      <a href={href as string} className={baseClass} target="_blank" rel="noopener noreferrer">
        <span>{children}</span>
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={baseClass}>
        <span>{children}</span>
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={baseClass}>
      <span>{children}</span>
      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
    </button>
  );
}
