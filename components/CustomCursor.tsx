"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [finePointer, setFinePointer] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const updatePointer = () => setFinePointer(mediaQuery.matches);
    updatePointer();
    setMounted(true);

    window.addEventListener("mousemove", handleMove);
    mediaQuery.addEventListener("change", updatePointer);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      mediaQuery.removeEventListener("change", updatePointer);
    };
  }, []);

  const handleMove = (event: MouseEvent) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  if (!mounted || !finePointer) {
    return null;
  }

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden md:block"
      animate={{
        x: position.x - 14,
        y: position.y - 14,
      }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { type: "spring", stiffness: 500, damping: 35, mass: 0.2 }
      }
    >
      <div className="flex h-7 w-7 items-center justify-center rounded-full border border-blade/60 bg-sumi/55 text-xs text-blade shadow-[0_0_30px_rgba(139,26,26,0.28)]">
        刃
      </div>
    </motion.div>
  );
}
