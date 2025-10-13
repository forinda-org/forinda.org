import { Clock, Globe2, Sprout, Wheat } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const heroHighlights = [
  "Digital platforms that connect farmers, cooperatives, and agribusinesses in real time.",
  "Data pipelines, GIS, and IoT integration to unlock decisions from soil to market.",
  "Capacity-building partnerships that blend product strategy with agronomic insight.",
];

export interface HeroSupportItem {
  icon: LucideIcon;
  text: string;
  emphasise?: boolean;
}

export const heroSupportItems: HeroSupportItem[] = [
  {
    icon: Wheat,
    text: "Supporting cooperatives across Nairobi, Eldoret, and Arusha",
    emphasise: true,
  },
  {
    icon: Clock,
    text: "Season-aware delivery with bi-weekly releases",
  },
  {
    icon: Globe2,
    text: "Serving growers across Africa's food systems",
  },
  {
    icon: Sprout,
    text: "Built with farmers, agronomists, and product strategists",
  },
];
