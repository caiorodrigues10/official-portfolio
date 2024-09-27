import { Slot } from "@radix-ui/react-slot";
import { PropsWithChildren } from "react";

export function TextInputIcon({ children }: PropsWithChildren) {
  return (
    <Slot className="flex items-center justify-center text-gray-400">
      {children}
    </Slot>
  );
}

TextInputIcon.displayName = "TextInput.Icon";
