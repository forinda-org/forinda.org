import { Clock, Globe2, UsersRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ContactHighlight {
  icon: LucideIcon;
  text: string;
}

export const contactHighlights: ContactHighlight[] = [
  {
    icon: UsersRound,
    text: "Extension-aligned, cross-functional squads",
  },
  {
    icon: Globe2,
    text: "Regional expansion across East Africa",
  },
  {
    icon: Clock,
    text: "10-day agritech discovery playbook",
  },
];
