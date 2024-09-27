import clsx from "clsx";

import {
  TextAreaContentProps,
  TextAreaErrorsProps,
  TextAreaInputProps,
  TextAreaRootProps,
} from "./types";

import { forwardRef } from "react";

function TextAreaRoot({ children, width, className }: TextAreaRootProps) {
  return (
    <div
      className={clsx("flex flex-col gap-1", className)}
      style={width ? { width } : {}}
    >
      {children}
    </div>
  );
}

TextAreaRoot.displayName = "TextArea.Root";

function TextAreaError({ isInvalid, description }: TextAreaErrorsProps) {
  if (!isInvalid) {
    return null;
  }

  return (
    <span className="ml-0.5 text-sm text-red-500 gruppo-regular">
      {description}
    </span>
  );
}

TextAreaError.displayName = "TextArea.Error";

function TextAreaContent({ className, children }: TextAreaContentProps) {
  return (
    <div
      className={clsx(
        "textarea-theme rounded-md duration-200 hover:ring-1 focus-within:ring-1",
        className
      )}
    >
      {children}
    </div>
  );
}

TextAreaContent.displayName = "TextArea.Content";

const TextAreaInput = forwardRef<HTMLTextAreaElement, TextAreaInputProps>(
  ({ className, onChange, onBlur, disabled, ...rest }, ref) => {
    return (
      <textarea
        ref={ref}
        {...rest}
        className={clsx("textarea", className)}
        onBlur={onBlur}
        onChange={onChange}
        disabled={disabled}
      />
    );
  }
);

TextAreaInput.displayName = "TextArea.Input";

export const TextArea = {
  Root: TextAreaRoot,
  Errors: TextAreaError,
  Content: TextAreaContent,
  Input: TextAreaInput,
};
