import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface CardProjectButtonProps {
  children: ReactNode;
  className?: string;
}

export default function CardProjectButton({
  children,
  className,
}: CardProjectButtonProps) {
  return (
    <a
      className={clsx(
        "effect-3 syncopate-regular flex flex-row text-zinc-400 justify-between max-w-fit gap-6 dark:text-[#7d7d7d] duration-200 hover:text-sky-500 dark:hover:text-sky-500",
        className
      )}
    >
      {children}
      <ArrowRight size={24} />
    </a>
  );
}
