import clsx from "clsx";
import { ReactNode } from "react";
import { usePopoverContext } from "./popoverRoot";

interface PopoverContentProps {
  className?: string;
  children: ReactNode;
}

export function PopoverContent({ children, className }: PopoverContentProps) {
  const { visible } = usePopoverContext();

  return (
    <div
      className={clsx(
        "absolute min-w-[200px] bg-slate-100 dark:bg-slate-700 rounded-md border border-slate-300 dark:border-slate-900 top-0",
        {
          hidden: !visible,
        },
        className
      )}
    >
      {children}
    </div>
  );
}
