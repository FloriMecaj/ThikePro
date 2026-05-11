import Link from "next/link";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/thike_pro/",
  },
];

export function Footer() {
  return (
    <footer className="relative z-10 mt-12 border-t border-washi/10 bg-black/25">
      <div className="mx-auto flex w-[min(1180px,92vw)] flex-col gap-5 py-8 text-sm text-washi/60 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-heading text-base tracking-[0.24em] text-washi">
            THIKE PRO <span className="text-gold">·</span> 職人{" "}
            <span className="text-gold">·</span> © 2026
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.26em]">
            Crafted with steel. Perfected by tradition.
          </p>
        </div>
        <div className="flex gap-5">
          {socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="nav-link"
            >
              {social.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
