"use client";
import clsx from "clsx";
import React, { ReactNode, useCallback, useRef, useEffect } from "react";

interface TiltComponentProps {
  children: ReactNode;
  className?: string;
}

function TiltComponent({ children, className }: TiltComponentProps) {
  const elRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = elRef.current;
    if (!el) return;

    const { clientWidth: width, clientHeight: height } = el;
    const { clientX, clientY } = e;

    const rect = el.getBoundingClientRect();
    const xVal = clientX - rect.left;
    const yVal = clientY - rect.top;

    const maxRotation = 10;

    const yRotation = ((xVal - width / 2) / width) * maxRotation;
    const xRotation = (-(yVal - height / 2) / height) * maxRotation;

    el.style.transform = `perspective(500px) scale(1.1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
  }, []);

  const handleMouseOut = useCallback(() => {
    const el = elRef.current;
    if (!el) return;

    el.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)";
  }, []);

  useEffect(() => {
    const el = elRef.current;

    return () => {
      if (el) {
        el.style.transform =
          "perspective(500px) scale(1) rotateX(0) rotateY(0)";
      }
    };
  }, []);

  return (
    <div
      className={clsx("tilt transition-transform duration-300", className)}
      ref={elRef}
      onMouseMove={handleMove}
      onMouseOut={handleMouseOut}
    >
      {children}
    </div>
  );
}

export default TiltComponent;
