"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      // Updated background to soft gradient using theme colors
      "inline-flex h-10 items-center justify-center rounded-xl bg-gradient-to-r from-[#F1E821]/20 via-[#23C0AD]/20 to-[#487AFA]/20 p-1 text-[#487AFA] shadow-inner backdrop-blur-sm",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      // Active tab gets bright gradient + smooth ring transitions
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-all duration-300 " +
        "ring-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#23C0AD]/50 focus-visible:ring-offset-[#F1E821]/40 " +
        "disabled:pointer-events-none disabled:opacity-50 " +
        "data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#F1E821] data-[state=active]:via-[#23C0AD] data-[state=active]:to-[#487AFA] " +
        "data-[state=active]:text-white data-[state=active]:shadow-md hover:scale-[1.03]",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      // Soft border glow on focus
      "mt-3 rounded-lg border border-[#23C0AD]/20 bg-transparent/80 p-4 shadow-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#487AFA]/50 focus-visible:ring-offset-[#F1E821]/30 transition-all duration-300",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
