"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), reduceMotion ? 200 : 1500);

    return () => window.clearTimeout(timer);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-sumi"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: reduceMotion ? 0.15 : 0.5 } }}
        >
          <div className="flex flex-col items-center gap-6">
            <svg
              width="200"
              height="62"
              viewBox="0 0 200 62"
              className="overflow-visible"
              aria-hidden="true"
            >
              <path
                d="M8 36C34 18 69 13 100 20c24 5 41 21 71 16 8-1 14-4 21-9"
                fill="none"
                stroke="#c9a84c"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="320"
                strokeDashoffset="320"
                style={{ animation: reduceMotion ? "none" : "brush-load 1.2s ease forwards" }}
              />
            </svg>
            <motion.div
              className="font-heading text-6xl text-gold"
              initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              匠
            </motion.div>
            <p className="text-xs uppercase tracking-[0.38em] text-washi/60">
              Thike Profesionale
            </p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
