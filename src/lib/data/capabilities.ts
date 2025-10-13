import { CloudCog, Satellite, Sprout } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Capability {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const capabilities: Capability[] = [
  {
    title: "Smart Farm Management",
    description:
      "Deploy farmer-friendly mobile apps, USSD services, and offline-first tools to capture field data, track crop progress, and deliver agricultural advisory services anywhere.",
    icon: Sprout,
  },
  {
    title: "Precision Agriculture & Climate Intelligence",
    description:
      "Integrate satellite imagery, weather feeds, soil sensors, and remote sensing into intelligent dashboards that guide planting, irrigation, harvesting, and climate adaptation strategies.",
    icon: Satellite,
  },
  {
    title: "Agricultural Supply Chain & Finance",
    description:
      "Streamline logistics, payments, and credit scoring to optimize crop aggregation, input distribution, farmer financing, and market access for agricultural communities.",
    icon: CloudCog,
  },
];
