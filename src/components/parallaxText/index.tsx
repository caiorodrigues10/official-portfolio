"use client";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion";
import { ReactNode, useRef, useState } from "react";

interface ParallaxProps {
  children: ReactNode;
  baseVelocity: number;
  direction?: "left" | "right";
}

export function ParallaxText({
  children,
  baseVelocity = 1,
  direction = "right",
}: ParallaxProps) {
  const baseX = useMotionValue(0);
  const [pausedX, setPausedX] = useState<number | null>(null);
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const handleHoverStart = () => {
    setPausedX(baseX.get());
    directionFactor.current = 0;
  };

  const handleHoverEnd = () => {
    setPausedX(null);
    directionFactor.current = direction === "left" ? -1 : 1;
  };

  useAnimationFrame((t, delta) => {
    if (pausedX !== null) {
      baseX.set(pausedX);
      return;
    }

    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    baseX.set(baseX.get() + moveBy);
  });

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      className="parallax overflow-hidden whitespace-nowrap"
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <motion.div className="flex" style={{ x }}>
        <div className="flex gap-4">
          {children}
          {children}
          {children}
          {children}
        </div>
      </motion.div>
    </div>
  );
}
