import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { heroHighlights, heroSupportItems } from "@/lib/data/hero";

export function HeroSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="space-y-10">
          <div className="space-y-4">
            <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
              Kenya-grown agritech expertise
            </span>
            <div className="space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Agritech platforms that connect farms, finance, and markets.
              </h1>
              <p className="max-w-2xl text-lg text-muted-foreground">
                Forinda partners with farmer organisations and agribusiness leaders to design clear, resilient software
                that unlocks visibility, climate readiness, and growth across East Africa.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="lg" asChild>
              <Link href="#contact">Book a discovery workshop</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/40 text-primary hover:bg-primary/10"
              asChild
            >
              <Link href="#approach">Our delivery approach</Link>
            </Button>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {heroHighlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 text-sm">
            {heroSupportItems.map((item) => {
              const Icon = item.icon;
              return (
                <span
                  key={item.text}
                  className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card px-3 py-1.5 text-foreground shadow-sm"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  <span className={item.emphasise ? "font-semibold" : undefined}>{item.text}</span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
