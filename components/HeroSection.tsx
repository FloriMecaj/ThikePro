"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const particles = [
  "left-[8%] top-[26%]",
  "left-[18%] top-[62%]",
  "left-[72%] top-[24%]",
  "left-[84%] top-[58%]",
  "left-[58%] top-[76%]",
];

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 120]);

  return (
    <section ref={ref} className="relative min-h-[calc(100vh-6rem)] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,168,76,0.16),transparent_28%),linear-gradient(120deg,rgba(26,26,26,0.2),rgba(26,26,26,0.92))]" />
        <div className="absolute inset-0 paper-noise opacity-50" />
      </motion.div>

      <div className="absolute inset-y-0 right-[-4%] hidden w-[58vw] items-center lg:flex">
        <motion.div
          className="relative h-[420px] w-full rounded-l-[14rem] border-y border-l border-gold/20 bg-gradient-to-br from-washi/12 via-steel/10 to-black/20 px-12 py-10 backdrop-blur-sm mask-knife"
          initial={reduceMotion ? false : { clipPath: "inset(0 100% 0 0)" }}
          animate={reduceMotion ? {} : { clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(245,240,232,0.12),transparent_38%,rgba(201,168,76,0.18))]" />
          <div className="absolute inset-y-8 left-20 w-px bg-gradient-to-b from-transparent via-gold/80 to-transparent" />
          <div className="absolute bottom-10 right-20 h-16 w-16 rounded-full border border-blade/50" />
          <div className="absolute right-24 top-16 text-[10rem] font-heading leading-none text-washi/5">
            刃
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] w-[min(1180px,92vw)] items-center py-16">
        <div className="max-w-4xl">
          <motion.p
            className="mb-5 text-xs uppercase tracking-[0.38em] text-gold sm:text-sm"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            匠 / TAKUMI — ARTISAN
          </motion.p>
          <motion.h1
            className="text-balance font-heading text-5xl leading-[0.95] text-washi sm:text-6xl md:text-7xl lg:text-9xl"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12 }}
          >
            The Art of the Blade
          </motion.h1>
          <motion.p
            className="mt-4 font-heading text-2xl text-gold/80 md:text-3xl lg:text-4xl"
            initial={reduceMotion ? false : { opacity: 0, letterSpacing: "0.4em" }}
            animate={reduceMotion ? {} : { opacity: 1, letterSpacing: "0.18em" }}
            transition={{ duration: 1, delay: 0.22 }}
          >
            刃の芸術
          </motion.p>
          <motion.p
            className="mt-8 max-w-2xl text-base leading-8 text-washi/72 sm:text-lg"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34 }}
          >
            Damascus &amp; Japanese Knives — Handcrafted Perfection. Premium steel, refined
            balance, and a quiet luxury language shaped for Tirana&apos;s most exacting kitchens.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.46 }}
          >
            <Button asChild>
              <Link href="/contact">Order Now</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/products">Explore Collection</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {particles.map((position) => (
        <div
          key={position}
          className={`absolute ${position} h-3 w-3 rounded-full bg-blade/40 blur-[1px]`}
          style={{ animation: reduceMotion ? "none" : "drift 7s ease-in-out infinite" }}
        />
      ))}
    </section>
  );
}
