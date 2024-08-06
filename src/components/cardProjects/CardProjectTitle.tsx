import clsx from "clsx";
import { ReactNode } from "react";

interface CardProjectTitleProps {
  children: ReactNode;
  className?: string;
}

export default function CardProjectTitle({
  children,
  className,
}: CardProjectTitleProps) {
  return (
    <h1
      className={clsx("text-3xl dark:text-[#D7D7D7] syncopate-bold", className)}
    >
      {children}
    </h1>
  );
}
