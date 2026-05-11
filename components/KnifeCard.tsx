"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import type { Knife } from "@/lib/data";

type KnifeCardProps = {
  knife: Knife;
  index?: number;
};

export function KnifeCard({ knife, index = 0 }: KnifeCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className="group h-full"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      whileHover={reduceMotion ? {} : { scale: 1.02, y: -4 }}
    >
      <Card className="flex h-full flex-col overflow-hidden">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={knife.image}
            alt={knife.name}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-sumi via-sumi/25 to-transparent" />
          <div className="absolute right-4 top-4 rounded-full border border-gold/35 bg-sumi/45 px-3 py-1 text-xs uppercase tracking-[0.26em] text-gold backdrop-blur-sm">
            {knife.kanji}
          </div>
        </div>
        <CardContent className="relative flex flex-1 flex-col px-5 py-5">
          <div className="absolute left-5 right-5 top-0 h-px origin-left scale-x-0 bg-blade transition-transform duration-300 group-hover:scale-x-100" />
          <div className="absolute bottom-5 right-5 text-4xl font-heading text-gold/0 transition duration-300 group-hover:text-gold/30">
            {knife.kanji}
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold/80">{knife.steel}</p>
          <CardTitle className="mt-3">{knife.name}</CardTitle>
          <CardDescription className="mt-3">{knife.description}</CardDescription>
          <p className="mt-auto pt-5 text-sm uppercase tracking-[0.28em] text-blade">{knife.price}</p>
        </CardContent>
      </Card>
    </motion.article>
  );
}
