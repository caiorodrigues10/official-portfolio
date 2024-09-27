"use client";
import clsx from "clsx";
import Link from "next/link";
import {
  AnchorHTMLAttributes,
  createContext,
  FC,
  Fragment,
  MutableRefObject,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import * as ReactDom from "react-dom";
import { Slot } from "@radix-ui/react-slot";

interface ItemsProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon?: ReactNode;
  title: string;
}

interface PopoverData {
  container: MutableRefObject<any>;
  popoverRef: MutableRefObject<any>;
  position: "bottomLeft" | "bottomCenter" | "bottomRight" | "leftTop";
  visible: boolean;
  onHandlePopover: (args: any) => void;
}

const PopoverContext = createContext<PopoverData>({} as PopoverData);

export interface PopoverProps {
  position?: "bottomLeft" | "bottomCenter" | "bottomRight" | "leftTop";
  onVisible?: boolean;
  children: ReactNode;
  setOnVisible?: (value: SetStateAction<boolean>) => void;
}

type AnyEvent = MouseEvent | TouchEvent;

const PopoverRoot: FC<PopoverProps> = ({
  children,
  position = "bottomCenter",
  onVisible = false,
  setOnVisible,
}) => {
  const [visible, setVisible] = useState(
    onVisible !== undefined ? onVisible : false
  );
  const popoverRef = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listener = (event: AnyEvent) => {
      const containerElement = container?.current;
      const popoverElement = popoverRef?.current;

      if (
        !containerElement ||
        containerElement.contains(event.target as Node) ||
        !popoverElement ||
        popoverElement.contains(event.target as Node)
      ) {
        return;
      }
      setOnVisible && setOnVisible(false);
      setVisible(false);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [setOnVisible]);

  const onHandlePopover = () => {
    setVisible((prevState) => {
      if (!prevState) {
        return true;
      } else if (prevState) {
        return false;
      }
      return false;
    });

    setOnVisible &&
      setOnVisible((prevState) => {
        if (!prevState) {
          return true;
        } else if (prevState) {
          return false;
        }
        return false;
      });
  };

  useEffect(() => {
    setVisible(onVisible);
  }, [onVisible]);

  return (
    <PopoverContext.Provider
      value={{
        visible,
        container,
        popoverRef,
        position,
        onHandlePopover,
      }}
    >
      <div ref={container} className="relative">
        {children}
      </div>
    </PopoverContext.Provider>
  );
};

interface PopoverToggleProps {
  children: ReactNode;
  className?: string;
}

const PopoverToggle: FC<PopoverToggleProps> = ({ children, className }) => {
  const { onHandlePopover } = useContext(PopoverContext);

  return (
    <Slot onClick={onHandlePopover} className={className}>
      {children}
    </Slot>
  );
};

const PopoverItem: FC<ItemsProps> = ({ title, icon, href, ...rest }) => {
  return (
    <Link passHref href={href || ""}>
      <a
        className="hover:bg-gray-150 flex min-h-[44px] cursor-pointer items-center justify-between px-2 dark:hover:bg-gray-700"
        {...rest}
      >
        <p className="px-3">{title}</p>
        {icon && icon}
      </a>
    </Link>
  );
};

interface PopoverContentProps {
  children: ReactNode;
  className?: string;
}

const PopoverContent: FC<PopoverContentProps> = ({ children, className }) => {
  const { visible, popoverRef, container, position } =
    useContext(PopoverContext);

  return (
    <Fragment>
      {visible &&
        ReactDom.createPortal(
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
                `absolute z-[1000] flex flex-col rounded-lg border-2 border-zinc-300 shadow-md dark:border-zinc-800`,
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
          </div>,
          container.current
        )}
    </Fragment>
  );
};

export const Popover = {
  Root: PopoverRoot,
  Content: PopoverContent,
  Toggle: PopoverToggle,
  Item: PopoverItem,
};
