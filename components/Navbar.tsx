"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5Zm8.94 1.13a.94.94 0 1 1 0 1.88.94.94 0 0 1 0-1.88ZM12 6.8A5.2 5.2 0 1 1 6.8 12 5.2 5.2 0 0 1 12 6.8Zm0 1.5A3.7 3.7 0 1 0 15.7 12 3.7 3.7 0 0 0 12 8.3Z" />
    </svg>
  );
}

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-3 w-[min(1180px,92vw)] rounded-full border border-washi/10 bg-sumi/75 px-4 py-3 backdrop-blur-md md:mt-4 md:px-5 md:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="group">
            <p className="font-heading text-base tracking-[0.3em] text-washi md:text-lg md:tracking-[0.35em]">
              THIKE PRO
            </p>
            <p className="text-[9px] uppercase tracking-[0.28em] text-gold/80 md:text-[10px] md:tracking-[0.34em]">
              職人
            </p>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? "text-washi after:scale-x-100" : ""}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://www.instagram.com/thike_pro/"
              target="_blank"
              rel="noreferrer"
              className="text-washi/70 hover:text-blade"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-5 w-5" />
            </Link>
          </nav>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="icon" size="icon" className="md:hidden" aria-label="Open navigation menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-l border-gold/20 bg-[radial-gradient(circle_at_top,rgba(201,168,76,0.14),transparent_30%),linear-gradient(180deg,rgba(245,240,232,0.05),transparent_28%),linear-gradient(145deg,rgba(90,100,114,0.18),rgba(26,26,26,0.96))] px-5 pb-6 pt-5 md:hidden"
            >
              <div className="pointer-events-none absolute inset-0 paper-noise opacity-50" />
              <div className="pointer-events-none absolute -right-10 top-24 font-heading text-[9rem] leading-none text-gold/5">
                匠
              </div>
              <div className="pointer-events-none absolute bottom-16 left-[-1rem] h-40 w-px bg-gradient-to-b from-transparent via-blade/80 to-transparent" />

              <SheetHeader className="relative z-10 pt-8">
                <p className="text-[10px] uppercase tracking-[0.38em] text-gold/80">刃 / THE ART OF THE BLADE</p>
                <SheetTitle className="text-3xl tracking-[0.28em]">THIKE PRO</SheetTitle>
                <SheetDescription className="max-w-[18rem] text-[11px] tracking-[0.3em] text-washi/55">
                  職人 · A luxury knife atelier language shaped for Tirana.
                </SheetDescription>
              </SheetHeader>
              <Separator className="relative z-10 my-6 bg-gradient-to-r from-blade via-gold/50 to-transparent" />
              <nav className="relative z-10 flex flex-col gap-2.5">
                {links.map((link, index) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className={`group rounded-[1.35rem] border px-4 py-3 transition duration-300 ${
                        pathname === link.href
                          ? "border-blade bg-blade/10 text-washi shadow-[0_0_24px_rgba(139,26,26,0.18)]"
                          : "border-washi/10 bg-white/[0.02] text-washi/75 hover:border-gold/40 hover:bg-white/[0.04] hover:text-washi"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <span className="font-heading text-xs tracking-[0.26em] text-gold/70">
                            0{index + 1}
                          </span>
                          <div>
                            <p className="text-base uppercase tracking-[0.28em]">{link.label}</p>
                            <p className="mt-1 text-[10px] uppercase tracking-[0.32em] text-washi/45 group-hover:text-gold/70">
                              {index === 0 && "ホーム / Entry"}
                              {index === 1 && "匠 / Brand Story"}
                              {index === 2 && "鋼 / Collection"}
                              {index === 3 && "連絡 / Order"}
                            </p>
                          </div>
                        </div>
                        <span className="h-px w-8 bg-gradient-to-r from-blade to-transparent transition group-hover:w-12" />
                      </div>
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="relative z-10 mt-6 rounded-[1.35rem] border border-washi/10 bg-black/20 p-4">
                <p className="text-[10px] uppercase tracking-[0.34em] text-gold/80">あなたの名前を刃に</p>
                <p className="mt-2 text-sm leading-6 text-washi/68">
                  Free personalization, premium presentation, and direct consultation through Instagram.
                </p>
              </div>
              <SheetFooter className="relative z-10 mt-6 gap-2.5 pb-1">
                <SheetClose asChild>
                  <Button asChild variant="outline" className="w-full justify-center">
                    <Link href="/contact">Order Now</Link>
                  </Button>
                </SheetClose>
                <Button asChild className="w-full justify-center">
                  <Link href="https://www.instagram.com/thike_pro/" target="_blank" rel="noreferrer">
                    <InstagramIcon className="h-4 w-4" />
                    Instagram
                  </Link>
                </Button>
              </SheetFooter>
              <div className="relative z-10 mt-5 flex items-center justify-between border-t border-washi/10 pt-4 text-[10px] uppercase tracking-[0.34em] text-washi/40">
                <span>Tirana / Albania</span>
                <span>鋼</span>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
