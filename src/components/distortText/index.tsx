"use client";
import React, { useState, useEffect, useRef } from "react";

interface DistortTextProps {
  children: React.ReactNode;
  className?: string;
}

const DistortText: React.FC<DistortTextProps> = ({ children, className }) => {
  const [text, setText] = useState<string>(
    typeof children === "string" ? children : ""
  );
  const [originalText, setOriginalText] = useState<string>(
    typeof children === "string" ? children : ""
  );
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890+>?-$#@%&*";
  const runsRef = useRef<number>(0);

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  const distortText = () => {
    if (runsRef.current >= 2) {
      runsRef.current = 0;
      setText(originalText);
      return;
    }

    const chars = text.split("");
    const rand = Math.floor(Math.random() * chars.length);
    const randRep = Math.floor(Math.random() * charSet.length);

    if (chars[rand] !== charSet[randRep] && chars[rand] !== " ") {
      chars[rand] = charSet[randRep];
    } else {
      distortText();
    }

    setText(chars.join(""));
    runsRef.current += 1;
  };

  const handleMouseEnter = () => {
    const id = setInterval(distortText, 100);
    setIntervalId(id);
  };

  const handleMouseLeave = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    setText(originalText);
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {text}
    </span>
  );
};

export default DistortText;
