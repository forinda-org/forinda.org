"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteNavigation } from "@/lib/data/navigation";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-foreground">
          <span>Forinda</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          {siteNavigation.map((item) => (
            <Link key={item.name} href={item.href} className="transition-colors hover:text-foreground">
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link href="#contact">Talk to us</Link>
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden" asChild>
            <Link href="#contact">Contact</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
