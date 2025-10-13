import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { valueChains } from "@/lib/data/value-chains";

export function ValueChainsSection() {
  return (
    <section className="bg-secondary" id="value-chains">
      <div className="mx-auto max-w-6xl px-6 py-20 text-secondary-foreground">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">
            Value chains
          </span>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Platforms we digitise from soil to shelf.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-secondary-foreground/80">
            Our squads embed with extension teams, agronomists, and supply chain leaders to co-create platforms grounded in
            Kenyan market realities, regulation, and farmer needs.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {valueChains.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.title}
                className="border-none bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-md"
              >
                <CardHeader className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {item.description}
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
