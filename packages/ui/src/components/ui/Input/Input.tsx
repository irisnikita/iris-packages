import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "password" | "email" | "number" | "search";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "ir-flex ir-h-9 ir-w-full ir-rounded-md ir-border ir-border-input ir-bg-transparent ir-px-3 ir-py-1 ir-text-base ir-shadow-sm ir-transition-colors file:ir-border-0 file:ir-bg-transparent file:ir-text-sm file:ir-font-medium file:ir-text-foreground placeholder:ir-text-muted-foreground focus-visible:ir-outline-none focus-visible:ir-ring-1 focus-visible:ir-ring-ring disabled:ir-cursor-not-allowed disabled:ir-opacity-50 md:ir-text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
