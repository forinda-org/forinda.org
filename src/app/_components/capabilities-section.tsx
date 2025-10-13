import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { capabilities } from "@/lib/data/capabilities";

export function CapabilitiesSection() {
  return (
    <section className="bg-background" id="capabilities">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 space-y-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">
            What we deliver
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Capabilities tuned for resilient digital agriculture.
          </h2>
          <p className="mx-auto max-w-3xl text-base text-muted-foreground">
            We combine agronomic insight, human-centred design, and senior engineering talent to empower farmers,
            aggregators, and policymakers with confident decisions.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <Card key={capability.title} className="border border-border/80 shadow-sm transition-shadow hover:shadow-md">
                <CardHeader className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl text-foreground">
                    {capability.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {capability.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
