import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
       "border rounded-lg py-2 px-3 w-full bg-warning-foreground outline-0",
        className
      )}
      {...props}
    />
  )
}

export { Input }
