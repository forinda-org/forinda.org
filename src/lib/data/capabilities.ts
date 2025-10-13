import { CloudCog, Satellite, Sprout } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Capability {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const capabilities: Capability[] = [
  {
    title: "Digital Farm Operations",
    description:
      "Deploy farmer-facing mobile apps, USSD, and offline-first tools to capture field data and advisory outcomes anywhere.",
    icon: Sprout,
  },
  {
    title: "Geospatial & Climate Intelligence",
    description:
      "Fuse satellite imagery, weather feeds, and remote sensing into dashboards that guide planting, harvesting, and risk mitigation.",
    icon: Satellite,
  },
  {
    title: "Supply Chain & Finance Orchestration",
    description:
      "Integrate logistics, payments, and credit scoring to streamline aggregation, input distribution, and farmer financing.",
    icon: CloudCog,
  },
];
