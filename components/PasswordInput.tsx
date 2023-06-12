"use client";
import React, { useState } from "react";
import Icons from "./Icons";
import { Input } from "./ui/input";

export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
      <Input
        ref={ref}
        type={showPassword ? "text" : "password"}
        placeholder="Enter Password"
        icon={() =>
          showPassword ? (
            <Icons.EyeOff className="ml-auto h-4 w-4 opacity-50 dark:text-white" />
          ) : (
            <Icons.Eye className="ml-auto h-4 w-4 opacity-50 dark:text-white" />
          )
        }
        onIconClick={() => setShowPassword((prev) => !prev)}
        {...props}
      />
    );
  }
);

PasswordInput.displayName = "Input";

export default PasswordInput;
