import { Banknote, Droplets, Tractor, Wheat } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ValueChain {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const valueChains: ValueChain[] = [
  {
    title: "Farmer Networks & Co-ops",
    description:
      "Coordinate field agents, demo farms, and farmer records to increase yields and traceability across counties.",
    icon: Wheat,
  },
  {
    title: "Agri-finance & Insurance",
    description:
      "Automate loan origination, premium collections, and risk scoring with data-rich farmer profiles.",
    icon: Banknote,
  },
  {
    title: "Input & Produce Marketplaces",
    description:
      "Build digital marketplaces that manage inventory, fulfilment, and pricing for agro-dealers and buyers.",
    icon: Tractor,
  },
  {
    title: "Water & Climate Resilience",
    description:
      "Monitor irrigation networks, soil health, and conservation programs with IoT sensors and analytics.",
    icon: Droplets,
  },
];
