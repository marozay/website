import type { Project } from "./projects";

export interface StackItem {
  name: string;
  count: number;
  via: string[];
}

export interface StackGroup {
  label: string;
  items: StackItem[];
}

// Domain is editorial, not derivable from project data.
const GROUPS: Array<{ label: string; domains: string[] }> = [
  {
    label: "Frontend",
    domains: [
      "React",
      "NextJS",
      "Tailwind",
      "Tanstack",
      "React Query",
      "SCSS",
      "MUI",
      "Shadcn/Radix",
      "BaseUI",
      "React Aria",
      "Vanilla JS/TS",
      "Web 3",
    ],
  },
  {
    label: "Backend",
    domains: ["Python", "Node", "Bun", "RPC", "Openapi"],
  },
  {
    label: "Data & AI",
    domains: ["Postgres", "Mongo", "Redis", "SQLite", "spaCy"],
  },
];

export const deriveStack = (projects: Project[]): StackGroup[] => {
  const collected = new Map<string, StackItem>();

  for (const project of projects) {
    for (const name of project.stack) {
      const entry = collected.get(name) ?? { name, count: 0, via: [] };
      entry.count += 1;
      if (!entry.via.includes(project.title)) entry.via.push(project.title);
      collected.set(name, entry);
    }
  }

  return GROUPS.map(({ label, domains }) => ({
    label,
    items: domains
      .map((name) => collected.get(name))
      .filter((item): item is StackItem => item !== undefined)
      .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name)),
  })).filter((group) => group.items.length > 0);
};
