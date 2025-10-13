import { BarChart3, ShieldCheck, Sprout } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface EngagementModel {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const engagementModels: EngagementModel[] = [
  {
    title: "Pilot & season sprints",
    description:
      "Deliver priority features ahead of planting or harvest windows with rapid feedback from the field.",
    icon: Sprout,
  },
  {
    title: "Data observability",
    description:
      "Instrument agronomic KPIs, supply dashboards, and climate alerts to guide programme decisions.",
    icon: BarChart3,
  },
  {
    title: "Embedded squads",
    description:
      "Dedicated squads embedded within your organisation to steward continuous delivery and compliance.",
    icon: ShieldCheck,
  },
];
