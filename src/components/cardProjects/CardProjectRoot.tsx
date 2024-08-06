import clsx from "clsx";
import Image from "next/image";
import { ReactNode } from "react";

interface CardRootProps {
  children: ReactNode;
  className?: string;
}

export function CardProjectRoot({ children, className }: CardRootProps) {
  return (
    <div
      className={clsx(
        "flex dark:bg-[#18181850] bg-white border border-zinc-300 dark:border-zinc-800 shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
}
