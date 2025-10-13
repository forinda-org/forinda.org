import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { engagementModels } from "@/lib/data/engagement";
import { impactMetrics } from "@/lib/data/impact";

export function ImpactSection() {
  return (
    <section className="bg-background" id="impact">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">
            Proof in numbers
          </span>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Impact realised across agrifood ecosystems.
          </h2>
        </div>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr]">
          <div className="space-y-8">
            <p className="text-base text-muted-foreground">
              Whether you&apos;re digitising extension services or scaling national traceability, Forinda anchors every sprint on
              measurable outcomes—grounded in farmer value and stakeholder insight.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              {impactMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-border/70 bg-card px-4 py-6 text-center shadow-sm"
                >
                  <p className="text-3xl font-semibold text-primary">{metric.value}</p>
                  <p className="mt-2 text-sm font-medium text-foreground">{metric.label}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{metric.blurb}</p>
                </div>
              ))}
            </div>
          </div>
          <Card className="border border-primary/15 bg-secondary text-secondary-foreground shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-secondary-foreground">
                How our clients engage
              </CardTitle>
              <CardDescription className="text-secondary-foreground/80">
                Flexible engagement models ensure sustained momentum from idea validation to multi-year delivery.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {engagementModels.map((model) => {
                const Icon = model.icon;
                return (
                  <div
                    key={model.title}
                    className="flex items-center gap-3 rounded-xl border border-primary/20 bg-background px-4 py-3 text-foreground"
                  >
                    <Icon className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{model.title}</p>
                      <p className="text-xs text-muted-foreground">{model.description}</p>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
