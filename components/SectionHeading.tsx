import { Separator } from "@/components/ui/separator";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="relative max-w-3xl border-l-4 border-blade pl-5">
      <p className="text-xs uppercase tracking-[0.34em] text-gold">{eyebrow}</p>
      <h2 className="mt-3 font-heading text-4xl text-washi md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-washi/70">{description}</p>
      <Separator className="mt-8 h-8 w-56 bg-transparent brush-divider opacity-60" />
    </div>
  );
}
