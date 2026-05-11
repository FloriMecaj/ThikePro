import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full text-xs font-semibold uppercase tracking-[0.28em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-sumi disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border border-gold/60 bg-gold px-7 py-3 text-sumi hover:border-gold hover:bg-washi",
        outline:
          "border border-washi/20 px-7 py-3 text-washi hover:border-blade hover:text-blade",
        ghost:
          "rounded-full border border-washi/10 bg-transparent px-4 py-2 text-washi/75 hover:border-blade hover:text-blade",
        icon: "h-10 w-10 rounded-full border border-washi/10 p-0 text-washi hover:border-blade hover:text-blade",
      },
      size: {
        default: "",
        sm: "px-5 py-2 text-[11px]",
        lg: "px-8 py-4",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
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
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
