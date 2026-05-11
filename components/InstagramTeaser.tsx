import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const posts = [
  "/images/image1.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
];

export function InstagramTeaser() {
  return (
    <Reveal className="mx-auto w-[min(1180px,92vw)]">
      <Card className="rounded-[2rem] px-6 py-12 sm:px-10 md:px-14">
        <div className="kanji-watermark">職人</div>
        <SectionHeading
          eyebrow="@thike_pro"
          title="Follow the Atelier"
          description="A preview of the textures, edgework, and steel personalities featured on Instagram."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map((src, index) => (
            <Card key={src} className="rounded-[1.8rem] bg-black/20 p-4">
              <CardContent className="p-0">
                <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-washi/55">
                  <span className="red-dot" />
                  Post {index + 1}
                </div>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem]">
                  <Image
                    src={src}
                    alt={`Instagram preview ${index + 1}`}
                    fill
                    className="object-cover transition duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 flex justify-end">
          <Button asChild>
            <Link href="https://www.instagram.com/thike_pro/" target="_blank" rel="noreferrer">
              Follow us on Instagram
            </Link>
          </Button>
        </div>
      </Card>
    </Reveal>
  );
}
