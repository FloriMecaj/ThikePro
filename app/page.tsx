import Link from "next/link";
import { HeroSection } from "@/components/HeroSection";
import { InstagramTeaser } from "@/components/InstagramTeaser";
import { KnifeCard } from "@/components/KnifeCard";
import { MarqueeTicker } from "@/components/MarqueeTicker";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { featuredKnives } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="space-y-10 pb-16 md:space-y-16">
      <HeroSection />

      <MarqueeTicker />

      <Reveal className="mx-auto w-[min(1180px,92vw)]">
        <Card className="rounded-[2rem] px-6 py-12 sm:px-10 md:px-14">
          <div className="kanji-watermark">刃</div>
          <SectionHeading
            eyebrow="匠 / TAKUMI"
            title="Featured Blades"
            description="A curated first look at the Damascus and Japanese-style collection shaping kitchens across Tirana."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredKnives.map((knife, index) => (
              <KnifeCard key={knife.name} knife={knife} index={index} />
            ))}
          </div>
          <div className="mt-10 flex justify-end">
            <Button asChild variant="outline">
              <Link href="/products">View All</Link>
            </Button>
          </div>
        </Card>
      </Reveal>

      <Reveal className="mx-auto w-[min(1180px,92vw)]">
        <Card className="rounded-[2rem] border-gold/30 bg-gradient-to-r from-gold/15 via-gold/5 to-transparent px-6 py-12 sm:px-10 md:px-14">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-gold">Personalizim Falas</p>
              <h2 className="mt-3 font-heading text-4xl text-washi md:text-5xl">
                Your Signature, Honed Into Steel
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-washi/75 sm:text-base">
              <span className="font-heading text-gold">あなたの名前を刃に</span> — engrave a name,
              dedication, or culinary identity directly onto the blade at no extra cost.
            </p>
          </div>
        </Card>
      </Reveal>

      <InstagramTeaser />
    </div>
  );
}
