import type { ComponentType, SVGProps } from "react";
import type { HubIconKey } from "@/data/types";
import { BookOpen, Briefcase, Eye, GraduationCap, Handshake, HeartHandshake, Rocket, Sparkles, Store, Users } from "./icons";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export const hubIconMap: Record<HubIconKey, IconComponent> = {
  home: Sparkles,
  student: GraduationCap,
  learning: BookOpen,
  opportunity: Rocket,
  project: Briefcase,
  mentor: HeartHandshake,
  marketplace: Store,
  community: Users,
  business: Handshake,
  about: Eye,
};
