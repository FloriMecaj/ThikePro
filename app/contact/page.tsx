import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Contact",
};

const cards = [
  {
    label: "Phone",
    value: "+355 67 216 7773",
    href: "tel:+355672167773",
  },
  {
    label: "Instagram",
    value: "@thike_pro",
    href: "https://www.instagram.com/thike_pro/",
  },
  {
    label: "Location",
    value: "Rruga Ibrahim Rugova, Tirana, Albania",
  },
  {
    label: "Delivery",
    value: "Dërgesë në gjithë Shqipërinë",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto flex w-[min(1180px,92vw)] flex-col gap-10 pb-16 md:gap-16">
      <Reveal>
        <Card className="rounded-[2rem] bg-gradient-to-br from-black/60 to-sumi px-6 py-12 sm:px-10 md:px-14">
          <div className="kanji-watermark">職人</div>
          <SectionHeading
            eyebrow="Porosi / Order"
            title="Commission the Right Blade"
            description="Reach Thike Profesionale directly for pricing, availability, personalization, and nationwide delivery across Albania."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {cards.map((card) => {
              const content = (
                <Card className="rounded-[1.5rem] bg-white/[0.03]">
                  <CardContent className="px-5 py-6">
                    <p className="text-xs uppercase tracking-[0.32em] text-gold">
                      {card.label}
                    </p>
                    <p className="mt-3 text-lg text-washi/85">{card.value}</p>
                  </CardContent>
                </Card>
              );

              return card.href ? (
                <Link
                  key={card.label}
                  href={card.href}
                  target="_blank"
                  className="block"
                >
                  {content}
                </Link>
              ) : (
                <div key={card.label}>{content}</div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild>
              <Link
                href="https://www.instagram.com/thike_pro/"
                target="_blank"
                rel="noreferrer"
              >
                Send a DM on Instagram
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="tel:+355672167773">Call Now</Link>
            </Button>
            <Button asChild variant="outline">
              <Link
                href="https://www.google.com/maps/search/?api=1&query=Rruga+Ibrahim+Rugova,+Tirana,+Albania"
                target="_blank"
                rel="noreferrer"
              >
                Open in Google Maps
              </Link>
            </Button>
          </div>
        </Card>
      </Reveal>

      <Reveal>
        <Card className="overflow-hidden rounded-[2rem]">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[340px]">
              <iframe
                title="Google Map for Rruga Ibrahim Rugova, Tirana"
                src="https://maps.google.com/maps?q=Rruga%20Ibrahim%20Rugova%2C%20Tirana%2C%20Albania&z=15&output=embed"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex flex-col justify-center gap-4 px-8 py-10 md:px-12">
              <p className="text-xs uppercase tracking-[0.34em] text-gold">
                Visit / Tirana
              </p>
              <h2 className="font-heading text-3xl text-washi md:text-4xl">
                Rruga Ibrahim Rugova, in the center of the city.
              </h2>
              <p className="max-w-lg text-base leading-8 text-washi/72">
                Use Instagram DM for the fastest response about models,
                engraving, and delivery. Appointments and direct pickup
                arrangements can be coordinated privately.
              </p>
            </div>
          </div>
        </Card>
      </Reveal>
    </div>
  );
}
