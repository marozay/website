import type { Technology } from "./technologies.types.ts";

/** Single source for stack entries. */
const allTechnologies = {
  // Frontend
  react: {
    title: "React",
    description: "UI library for component-driven interfaces.",
    iconUrl: "",
    source: "https://react.dev",
    type: "frontend",
  },
  nextjs: {
    title: "NextJS",
    description: "React framework with routing and server rendering.",
    iconUrl: "",
    source: "https://nextjs.org",
    type: "frontend",
  },
  tailwind: {
    title: "Tailwind",
    description: "Utility-first CSS framework.",
    iconUrl: "",
    source: "https://tailwindcss.com",
    type: "frontend",
  },
  tanstack: {
    title: "Tanstack",
    description: "Headless toolkit for tables, forms and data.",
    iconUrl: "",
    source: "https://tanstack.com",
    type: "frontend",
  },
  reactQuery: {
    title: "React Query",
    description: "Data fetching and cache layer for React.",
    iconUrl: "",
    source: "https://tanstack.com/query",
    type: "frontend",
  },
  scss: {
    title: "SCSS",
    description: "CSS preprocessor with nesting and mixins.",
    iconUrl: "",
    source: "https://sass-lang.com",
    type: "frontend",
  },
  mui: {
    title: "MUI",
    description: "React component library built on Material Design.",
    iconUrl: "",
    source: "https://mui.com",
    type: "frontend",
  },
  shadcnRadix: {
    title: "Shadcn/Radix",
    description: "Composable UI primitives copied into project.",
    iconUrl: "",
    source: "https://ui.shadcn.com",
    type: "frontend",
  },
  baseui: {
    title: "BaseUI",
    description: "Headless React primitives for accessible components.",
    iconUrl: "",
    source: "https://base-ui.com",
    type: "frontend",
  },
  reactAria: {
    title: "React Aria",
    description: "Accessible React hooks and components from Adobe.",
    iconUrl: "",
    source: "https://react-aria.adobe.com",
    type: "frontend",
  },
  vanillaJsTs: {
    title: "Vanilla JS/TS",
    description: "Plain browser APIs without a framework.",
    iconUrl: "",
    source: "https://developer.mozilla.org/docs/Web/JavaScript",
    type: "frontend",
  },
  web3: {
    title: "Web 3",
    description: "Blockchain client and wallet integration.",
    iconUrl: "",
    source: "https://ethereum.org",
    type: "frontend",
  },

  // Backend
  python: {
    title: "Python",
    description: "General-purpose backend language.",
    iconUrl: "",
    source: "https://python.org",
    type: "backend",
  },
  node: {
    title: "Node",
    description: "JavaScript runtime for servers.",
    iconUrl: "",
    source: "https://nodejs.org",
    type: "backend",
  },
  bun: {
    title: "Bun",
    description: "All-in-one JavaScript runtime and toolkit.",
    iconUrl: "",
    source: "https://bun.sh",
    type: "backend",
  },
  rpc: {
    title: "RPC",
    description: "Typed remote procedure calls between client and server.",
    iconUrl: "",
    source: "",
    type: "backend",
  },
  openapi: {
    title: "Openapi",
    description: "Specification for describing HTTP APIs.",
    iconUrl: "",
    source: "https://openapis.org",
    type: "backend",
  },

  // Data & AI
  postgres: {
    title: "Postgres",
    description: "Relational database with strong SQL support.",
    iconUrl: "",
    source: "https://postgresql.org",
    type: "data-and-ai",
  },
  mongo: {
    title: "Mongo",
    description: "Document database for flexible schemas.",
    iconUrl: "",
    source: "https://mongodb.com",
    type: "data-and-ai",
  },
  redis: {
    title: "Redis",
    description: "In-memory store for cache and queues.",
    iconUrl: "",
    source: "https://redis.io",
    type: "data-and-ai",
  },
  sqlite: {
    title: "SQLite",
    description: "Embedded relational database in a single file.",
    iconUrl: "",
    source: "https://sqlite.org",
    type: "data-and-ai",
  },
  spacy: {
    title: "spaCy",
    description: "NLP library for parsing and entity extraction.",
    iconUrl: "",
    source: "https://spacy.io",
    type: "data-and-ai",
  },
} as const satisfies Record<string, Omit<Technology, "id">>;

/** Complete technologies map, each value has `id` mirrored from key. */
export const technologies: Record<string, Technology> = Object.fromEntries(
  Object.entries(allTechnologies).map(([id, tech]) => [id, { ...tech, id: id }]),
);
