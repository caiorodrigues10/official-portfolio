"use client";
import {
  createContext,
  MutableRefObject,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import clsx from "clsx";

interface PopoverRootProps {
  className?: string;
  children: ReactNode;
}

interface PopoverData {
  container: MutableRefObject<HTMLDivElement | null>;
  popoverRef: MutableRefObject<HTMLDivElement | null>;
  position: "bottomLeft" | "bottomCenter" | "bottomRight" | "leftTop";
  visible: boolean;
  onHandlePopover: () => void;
}

const PopoverContext = createContext<PopoverData | undefined>(undefined);

export function PopoverRoot({ children, className }: PopoverRootProps) {
  const [visible, setVisible] = useState(false);
  const popoverRef = useRef<HTMLDivElement | null>(null);
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const containerElement = container.current;
      const popoverElement = popoverRef.current;

      if (
        !containerElement ||
        containerElement.contains(event.target as Node) ||
        !popoverElement ||
        popoverElement.contains(event.target as Node)
      ) {
        return;
      }
      setVisible(false);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, []);

  const onHandlePopover = () => {
    setVisible((e) => !e);
  };

  return (
    <PopoverContext.Provider
      value={{
        visible,
        container,
        popoverRef,
        position: "bottomLeft", // Exemplo de valor padrão
        onHandlePopover,
      }}
    >
      <div className={clsx("relative", className)}>{children}</div>
    </PopoverContext.Provider>
  );
}

const usePopoverContext = (): PopoverData => {
  const context = useContext(PopoverContext);
  if (context === undefined) {
    throw new Error("usePopoverContext must be used within a PopoverRoot");
  }
  return context;
};

export { usePopoverContext };
