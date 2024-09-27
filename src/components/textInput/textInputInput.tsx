"use client";
import clsx from "clsx";
import { InputHTMLAttributes, forwardRef } from "react";

const TextInputInput = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, onBlur, type, disabled, ...rest }, ref) => {
  return (
    <input
      ref={ref}
      {...rest}
      className={clsx("input", className)}
      onBlur={onBlur}
    />
  );
});

TextInputInput.displayName = "Input";

export { TextInputInput };
