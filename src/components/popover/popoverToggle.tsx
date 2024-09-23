import { Slot } from "@radix-ui/react-slot";
import { PropsWithChildren } from "react";
import { usePopoverContext } from "./root";

export function PopoverToggle({ children }: PropsWithChildren) {
  const { onHandlePopover } = usePopoverContext();

  return <Slot onClick={onHandlePopover}>{children}</Slot>;
}
