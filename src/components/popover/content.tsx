import { Fragment, ReactNode } from "react";
import * as ReactDom from "react-dom";
import { usePopoverContext } from "./root";
import clsx from "clsx";

interface PopoverContentProps {
  children: ReactNode;
  className?: string;
}

export function PopoverContent({ children, className }: PopoverContentProps) {
  const { visible, popoverRef, container, position } = usePopoverContext();

  return (
    <Fragment>
      {visible &&
        (ReactDom.createPortal(
          (
            <div
              className={clsx("flex flex-col", {
                "items-end": position === "bottomLeft",
                "items-center": position === "bottomCenter",
                "items-start": position === "bottomRight",
              })}
            >
              <div
                ref={popoverRef}
                className={clsx(
                  `absolute z-[1000] flex flex-col rounded-lg border-2 border-zinc-300 bg-white shadow-md dark:border-zinc-500 dark:bg-zinc-700`,
                  {
                    "animate-PopoverBottomOpen": visible,
                    "-bottom-1 right-[75%]": position === "leftTop",
                    "right-[40%]": position === "bottomLeft",
                    "left-[40%]": position === "bottomRight",
                  },
                  className
                )}
              >
                {children}
              </div>
            </div>
          ) as any,
          container.current as Element
        ) as ReactNode)}
    </Fragment>
  );
}
