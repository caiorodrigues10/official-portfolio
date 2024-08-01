import { ReactNode } from "react";

interface PopoverToggleProps {
  className?: string;
  children: ReactNode;
}

export function PopoverToggle({ children, className }: PopoverToggleProps) {
  return (
    <button type="button" className={className}>
      {children}
    </button>
  );
}
