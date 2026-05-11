import { KnifeCard } from "@/components/KnifeCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { allKnives } from "@/lib/data";

export const metadata = {
  title: "Products",
};

export default function ProductsPage() {
  return (
    <div className="mx-auto flex w-[min(1180px,92vw)] flex-col gap-10 pb-16 md:gap-16">
      <Reveal>
        <Card className="rounded-[2rem] px-6 py-12 sm:px-10 md:px-14">
          <div className="kanji-watermark">鋼</div>
          <SectionHeading
            eyebrow="鋼 / HAGANE"
            title="The Collection"
            description="Damascus layering, Japanese silhouettes, and premium finishing presented with a restrained atelier sensibility."
          />
          {/* <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-washi/65">
            {["All", "Chef", "Santoku", "Damascus", "Gyuto"].map((filter) => (
              <Button
                key={filter}
                variant="ghost"
                size="sm"
                className="bg-black/20 hover:bg-black/30"
              >
                {filter}
              </Button>
            ))}
          </div> */}
        </Card>
      </Reveal>

      <Reveal>
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allKnives.map((knife, index) => (
            <KnifeCard key={knife.name} knife={knife} index={index} />
          ))}
        </section>
      </Reveal>
    </div>
  );
}
