export interface DeliveryPhase {
  title: string;
  description: string;
}

export const deliveryPhases: DeliveryPhase[] = [
  {
    title: "Landscape & Prototype",
    description:
      "We align with agronomists, extension teams, and farmers to map value chains, data sources, and pilot use cases.",
  },
  {
    title: "Build & Integrate",
    description:
      "Cross-functional squads deliver iterative releases, integrating field tools, ERP systems, and sector data providers.",
  },
  {
    title: "Launch & Scale",
    description:
      "Telemetry, agronomic analytics, and enablement ensure your teams can iterate with confidence post-launch.",
  },
];
