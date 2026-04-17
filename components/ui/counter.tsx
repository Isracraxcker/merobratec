"use client";

import { motion, useMotionValue, animate } from "motion/react";
import { useEffect, useState } from "react";

type CounterProps = {
  from?: number;
  to: number;
  suffix?: string;
};

export default function Counter({ from = 0, to, suffix = "" }: CounterProps) {
  const count = useMotionValue(from);
  const [value, setValue] = useState(from);

  useEffect(() => {
    const controls = animate(count, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate(latest) {
        setValue(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [count, to]);

  return (
    <span>
      {value} {suffix}
    </span>
  );
}