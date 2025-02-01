import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "ir-inline-flex ir-items-center ir-justify-center ir-gap-2 ir-whitespace-nowrap ir-rounded-md ir-text-sm ir-font-medium ir-transition-colors focus-visible:ir-outline-none focus-visible:ir-ring-1 focus-visible:ir-ring-ring disabled:ir-pointer-events-none disabled:ir-opacity-50 [&_svg]:ir-pointer-events-none [&_svg]:ir-size-4 [&_svg]:ir-shrink-0",
  {
    variants: {
      variant: {
        default:
          "ir-bg-primary ir-text-primary-foreground ir-shadow hover:ir-bg-primary/90",
        destructive:
          "ir-bg-destructive ir-text-destructive-foreground ir-shadow-sm hover:ir-bg-destructive/90",
        outline:
          "ir-border ir-border-input ir-bg-background ir-shadow-sm hover:ir-bg-accent hover:ir-text-accent-foreground",
        secondary:
          "ir-bg-secondary ir-text-secondary-foreground ir-shadow-sm hover:ir-bg-secondary/80",
        ghost: "hover:ir-bg-accent hover:ir-text-accent-foreground",
        link: "ir-text-primary ir-underline-offset-4 hover:ir-underline",
      },
      size: {
        default: "ir-h-9 ir-px-4 ir-py-2",
        sm: "ir-h-8 ir-rounded-md ir-px-3 ir-text-xs",
        lg: "ir-h-10 ir-rounded-md ir-px-8",
        icon: "ir-h-9 ir-w-9",
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
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
