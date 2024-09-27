import { ReactNode, SetStateAction, TextareaHTMLAttributes } from "react";

interface TextAreaData {
  setValue: (value: SetStateAction<string>) => void;
  value: string;
}

interface TextAreaRootProps {
  children: ReactNode;
  width?: string;
  className?: string;
}

interface TextAreaErrorsProps {
  isInvalid: boolean;
  description?: string;
}

interface TextAreaContentProps {
  className?: string;
  children: ReactNode;
}

interface TextAreaInputProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export type {
  TextAreaData,
  TextAreaRootProps,
  TextAreaErrorsProps,
  TextAreaContentProps,
  TextAreaInputProps,
};
