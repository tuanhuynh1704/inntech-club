export type HubIconKey =
  | "home" | "student" | "learning" | "opportunity" | "project"
  | "mentor" | "marketplace" | "community" | "business" | "about";

export type HubSection = { id: string; label: string };

export type Hub = {
  id: string;
  number: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  href: string;
  accent: string;
  icon: HubIconKey;
  sections: HubSection[];
};

export type FilterItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  meta?: string;
  chips?: string[];
  href?: string;
  external?: boolean;
  kicker?: string;
  badge?: string;
  sample?: boolean;
  accent?: string;
};

export type SearchEntry = {
  id: string;
  title: string;
  description: string;
  href: string;
  hub: string;
  kind: string;
  keywords: string[];
};

export type FormField = {
  name: string;
  label: string;
  type: "text" | "email" | "textarea" | "select";
  required?: boolean;
  placeholder?: string;
  options?: string[];
};
