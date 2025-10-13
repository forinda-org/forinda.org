import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { deliveryPhases } from "@/lib/data/approach";

export function ApproachSection() {
  return (
    <section
      id="approach"
      className="bg-muted"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="space-y-4">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Delivery approach
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              A delivery approach rooted in agripreneur partnerships.
            </h2>
            <p className="text-base text-foreground/80">
              We work as an extension of your team—embedding Kenyan talent, sector expertise, and proven frameworks to deliver
              lasting impact for farmers, buyers, and financiers.
            </p>
          </div>
          <Card className="border border-primary/20 bg-background shadow-md">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Our product lifecycle</CardTitle>
              <CardDescription>
                Structured collaboration ensures clarity and speed while keeping your stakeholders engaged at every step.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {deliveryPhases.map((phase, index) => (
                <div key={phase.title} className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-sm font-semibold text-primary">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{phase.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{phase.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
