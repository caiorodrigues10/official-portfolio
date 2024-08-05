"use client";
import React, { useEffect, useState, ElementType } from "react";

interface TypeEffectProps {
  text: string;
  speed: number;
  as?: ElementType;
  className?: string;
}

const TypeEffect: React.FC<TypeEffectProps> = ({
  text,
  speed,
  className,
  as: Element = "span",
}) => {
  const [displayedText, setDisplayedText] = useState<string>("");

  useEffect(() => {
    let i = 0;
    let timeoutId: NodeJS.Timeout;

    const updateText = () => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
        timeoutId = setTimeout(updateText, speed);
      }
    };

    updateText();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text, speed]);

  return (
    <Element className={className}>
      {displayedText}
      <span className="cursor">|</span>
    </Element>
  );
};

export default TypeEffect;
