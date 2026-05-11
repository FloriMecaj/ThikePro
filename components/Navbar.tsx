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
      <div className="mx-auto mt-4 w-[min(1180px,92vw)] rounded-full border border-washi/10 bg-sumi/75 px-5 py-4 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <Link href="/" className="group">
            <p className="font-heading text-lg tracking-[0.35em] text-washi">THIKE PRO</p>
            <p className="text-[10px] uppercase tracking-[0.34em] text-gold/80">職人</p>
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
            <SheetContent side="right" className="md:hidden">
              <SheetHeader className="pt-10">
                <SheetTitle>THIKE PRO</SheetTitle>
                <SheetDescription>職人 · Precision for Tirana</SheetDescription>
              </SheetHeader>
              <Separator className="my-8 bg-washi/10" />
              <nav className="flex flex-col gap-3">
                {links.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className={`rounded-2xl border px-4 py-4 text-base uppercase tracking-[0.28em] transition ${
                        pathname === link.href
                          ? "border-blade bg-blade/10 text-washi"
                          : "border-washi/10 bg-white/[0.02] text-washi/75 hover:border-blade hover:text-washi"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <SheetFooter className="mt-8">
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
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
