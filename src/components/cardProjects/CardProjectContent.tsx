import clsx from "clsx";
import { PropsWithChildren, ReactNode } from "react";

interface CardProjectContentProps {
  children: ReactNode;
  className?: string;
}

export function CardProjectContent({
  children,
  className,
}: CardProjectContentProps) {
  return (
    <div className={clsx("flex flex-col gap-8 p-8", className)}>{children}</div>
  );
}
