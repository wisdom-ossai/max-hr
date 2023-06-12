import * as React from "react";

import { cn } from "@maxHR/lib/utils";
import { Button } from "./button";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: () => React.ReactNode;
  onIconClick?: () => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, onIconClick, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:border-primary-300 focus-visible:border-2 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />

        {icon && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onIconClick}
            className={cn(
              "text-center flex items-center font-normal rounded-full absolute top-1 right-2"
            )}
          >
            {icon()}
          </Button>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
