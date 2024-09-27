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

    // Reseta o texto antes de começar a animação
    setDisplayedText("");

    const updateText = () => {
      if (i <= text.length) {
        setDisplayedText(text.substring(0, i + 1)); // Atualiza o texto até a posição i
        i++;
        timeoutId = setTimeout(updateText, speed);
      }
    };

    updateText(); // Inicializa a animação imediatamente

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
