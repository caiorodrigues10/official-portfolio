import clsx from "clsx";
import { ReactNode } from "react";

interface TextInputContentProps {
  className?: string;
  children: ReactNode;
}

export function TextInputContent({
  children,
  className,
}: TextInputContentProps) {
  return (
    <div
      className={clsx(
        "input-theme flex h-10 w-full items-center gap-3 rounded-md px-4 duration-200 focus-within:ring-1 hover:ring-1",
        className
      )}
    >
      {children}
    </div>
  );
}
