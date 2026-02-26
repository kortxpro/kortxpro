"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Proposal A - Neural (gradient with glow)
        neural:
          "bg-gradient-to-r from-[#00A3FF] to-[#0066CC] text-white hover:shadow-[0_0_30px_rgba(0,163,255,0.5)] hover:scale-105",
        neuralOutline:
          "border-2 border-[#00A3FF] text-[#00A3FF] hover:bg-[#00A3FF]/10 hover:shadow-[0_0_20px_rgba(0,163,255,0.3)]",
        // Proposal B - Corporate (solid, clean)
        corporate:
          "bg-[#00A3FF] text-white hover:bg-[#0091E6] hover:shadow-lg",
        corporateOutline:
          "border-2 border-[#00A3FF] text-[#00A3FF] hover:bg-[#00A3FF] hover:text-white",
        corporateGhost:
          "text-[#00A3FF] hover:bg-[#00A3FF]/10 underline-offset-4 hover:underline",
        // Proposal C - Minimal (outline, black/white)
        minimal:
          "border-2 border-current text-inherit hover:bg-current hover:text-white dark:hover:text-black",
        minimalSolid: "bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200",
        // Common
        ghost: "hover:bg-gray-100 dark:hover:bg-gray-800",
        link: "text-[#00A3FF] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        xl: "h-16 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "neural",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
