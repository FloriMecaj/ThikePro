import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="mx-auto flex w-[min(1180px,92vw)] flex-col gap-10 pb-16 md:gap-16">
      <Reveal>
        <Card className="rounded-[2rem] px-6 py-12 sm:px-10 md:px-14">
          <div className="kanji-watermark">匠</div>
          <SectionHeading
            eyebrow="職人 / SHOKUNIN"
            title="Forged for Precision"
            description="Thike Profesionale brings the presence of a Japanese knife atelier into Tirana with premium Damascus patterns, balanced profiles, and blades selected for professionals and serious home cooks."
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6 text-base leading-8 text-washi/78">
              <p>
                Thike Profesionale — Tirana&apos;s premier source for Damascus and
                Japanese-style professional knives. Every blade tells a story of craftsmanship
                and precision.
              </p>
              <p>
                The collection is shaped around steel character, edge retention, and the quiet
                confidence of tools designed to be used daily. The aesthetic is restrained, but
                the performance is uncompromising.
              </p>
              <p className="inline-flex items-center gap-3 rounded-full border border-washi/10 px-4 py-2 text-sm uppercase tracking-[0.22em] text-washi/70">
                <span className="red-dot" />
                Rruga Ibrahim Rugova, Tirana, Albania
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {[
                ["388", "Posts"],
                ["18.5K", "Followers"],
                ["Est.", "Tirana"],
              ].map(([value, label]) => (
                <Card key={label} className="rounded-[1.5rem] bg-black/20 text-center">
                  <CardContent className="px-5 py-6">
                    <p className="font-heading text-3xl text-gold">{value}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.32em] text-washi/60">{label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Card>
      </Reveal>

      <Reveal>
        <Card className="overflow-hidden rounded-[2rem]">
          <div className="relative h-[420px] w-full md:h-[520px]">
            <Image
              src="/images/image3.jpg"
              alt="Atmospheric Japanese knife display"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1180px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sumi via-sumi/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-10">
              <p className="text-xs uppercase tracking-[0.34em] text-gold/85">鋼 / HAGANE</p>
              <h2 className="mt-3 max-w-2xl font-heading text-3xl text-washi md:text-5xl">
                An editorial atmosphere built around steel, shadow, and deliberate detail.
              </h2>
            </div>
          </div>
        </Card>
      </Reveal>
    </div>
  );
}
