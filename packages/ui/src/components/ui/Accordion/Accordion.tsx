import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("ir-border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="ir-flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "ir-flex ir-flex-1 ir-items-center ir-justify-between ir-py-4 ir-text-sm ir-font-medium ir-transition-all hover:ir-underline ir-text-left [&[data-state=open]>svg]:ir-rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="ir-h-4 ir-w-4 ir-shrink-0 ir-text-muted-foreground ir-transition-transform ir-duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="ir-overflow-hidden ir-text-sm data-[state=closed]:ir-animate-accordion-up data-[state=open]:ir-animate-accordion-down"
    {...props}
  >
    <div className={cn("ir-pb-4 ir-pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
