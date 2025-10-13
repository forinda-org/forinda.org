import Link from "next/link";

import { footerLinks } from "@/lib/data/navigation";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-semibold text-foreground">Forinda</p>
          <p className="text-sm text-muted-foreground">
            Agritech software experts partnering with Kenya&apos;s boldest growers, cooperatives, and agribusinesses.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          {footerLinks.map((link) => (
            <Link key={link.name} href={link.href} className="transition-colors hover:text-foreground">
              {link.name}
            </Link>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Forinda. Built in Nairobi, delivering across Africa.
        </p>
      </div>
    </footer>
  );
}
