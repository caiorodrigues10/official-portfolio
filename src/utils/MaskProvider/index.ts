import { createMask } from "imask";

const phoneMask = (value: string): string => {
  const textSerialize = value
    .replace("(", "")
    .replace(")", "")
    .replace("-", "")
    .replace(" ", "");

  const phoneFormat = createMask({
    mask: textSerialize.length >= 11 ? "(00) 00000-0000" : "(00) 0000-0000",
  });

  phoneFormat.resolve(value);
  return phoneFormat.value;
};

export { phoneMask };
