import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export function Button({
  children,
  className,
  isLoading,
  disabled,
  ...rest
}: IButtonProps) {
  return (
    <button
      className={clsx(
        "border-none flex justify-center items-center gap-4 bg-[#0068FF] hover:bg-[#005ae1] duration-200 active:bg-[#0052cd] text-white font-semibold almarai-regular h-10 uppercase rounded-full",
        className
      )}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading && (
        <div className="h-5 w-5 rounded-full animate-spin fill-zinc-700 border-2 border-white border-t-0 border-l-0" />
      )}
      {children}
    </button>
  );
}
