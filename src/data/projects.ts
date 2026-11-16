import type { Project } from "./projects.types";
import { technologies } from "./technologies";
import type { Technology, TechnologyType } from "./technologies.types";

/** Single source for engagements. */
export const allProjects = {
  freelance: {
    title: "Freelance",
    role: "Fullstack",
    shortDescription: "Telegram bots, landing pages and Mini Apps for clients.",
    fullDescription:
      "Started my developer journey here to gain real hands-on experience. I built various small-to-medium projects for clients, mostly focusing on <strong>Telegram bots</strong>, responsive <strong>landing pages</strong>, and <strong>Telegram Mini Apps</strong> (TMA). It was a great time to learn how to code, solve real problems, and work with clients.",
    startDate: new Date("2021-09-01T00:00:00Z"),
    endDate: new Date("2023-02-28T00:00:00Z"),
    images: [],
    stack: [
      technologies.python,
      technologies.node,
      technologies.vanillaJsTs,
      technologies.react,
      technologies.nextjs,
      technologies.sqlite,
      technologies.postgres,
      technologies.mui,
    ],
  },
  cryptoSofters: {
    title: "Crypto Softers",
    role: "Fullstack",
    shortDescription: "First team role; Web3 product work under code review.",
    fullDescription:
      "My first experience working in a real development team. Working under the guidance of an experienced developer helped me level up my skills quickly through tasks and code reviews. This is also where I got my first hands-on experience with Web3 technologies.",
    startDate: new Date("2023-02-01T00:00:00Z"),
    endDate: new Date("2023-08-31T00:00:00Z"),
    images: [],
    stack: [
      technologies.react,
      technologies.shadcnRadix,
      technologies.tailwind,
      technologies.openapi,
      technologies.web3,
      technologies.python,
      technologies.reactQuery,
    ],
  },
  vitrinagram: {
    title: "Vitrinagram",
    role: "Fullstack",
    shortDescription: "Full-stack feature delivery across frontend and backend.",
    fullDescription:
      "With some solid experience already under my belt, I joined the team to handle a wide variety of tasks. I worked across the entire stack, shifting smoothly between frontend and backend development to deliver features end-to-end.",
    startDate: new Date("2023-08-01T00:00:00Z"),
    endDate: new Date("2024-05-31T00:00:00Z"),
    images: [],
    stack: [
      technologies.react,
      technologies.scss,
      technologies.tailwind,
      technologies.postgres,
      technologies.redis,
      technologies.python,
      technologies.node,
      technologies.tanstack,
    ],
  },
  tendersAi: {
    title: "Tenders AI",
    role: "Fullstack",
    shortDescription: "Lead frontend plus an NLP parser for product specs.",
    fullDescription:
      "Served as the Lead Frontend Developer. During a team creative block, I stepped up and brought an innovative solution by diving into NLP. I successfully (yet accidentally 😆) implemented an AI feature that recognized and parsed freely-written product specifications, which helped the project move forward.",
    startDate: new Date("2024-05-01T00:00:00Z"),
    endDate: new Date("2025-11-10T00:00:00Z"),
    images: [],
    stack: [
      technologies.react,
      technologies.tailwind,
      technologies.baseui,
      technologies.python,
      technologies.spacy,
      technologies.mongo,
      technologies.postgres,
      technologies.tanstack,
    ],
  },
  helloClient: {
    title: "HelloClient",
    role: "Fullstack",
    shortDescription: "Large mature product; backend depth and Postgres tuning.",
    fullDescription:
      "Working on a large, mature product, consistently shipping new features while maintaining strict quality control and optimization standards. This fast-paced yet stable environment allowed me to dive much deeper into the backend, mastering complex architectural trade-offs and optimizing PostgreSQL.",
    startDate: new Date("2025-11-18T00:00:00Z"),
    endDate: null,
    images: [],
    stack: [
      technologies.react,
      technologies.tailwind,
      technologies.reactAria,
      technologies.bun,
      technologies.postgres,
      technologies.rpc,
      technologies.tanstack,
    ],
  },
} satisfies Record<string, Omit<Project, "id">>;

/** Complete projects map, each value has `id` mirrored from key. */
export const projects: Record<string, Project> = Object.fromEntries(
  Object.entries(allProjects).map(([id, proj]) => [id, { ...proj, id: id }]),
);

interface TechnologyGroupStats {
  technologyType: TechnologyType;
  technologies: {
    technology: Technology;
    projectsCount: number;
  }[];
}

export function getGroupedTechnologyStats(): TechnologyGroupStats[] {
  const projectValues = Object.values(projects);
  const technologyValues = Object.values(technologies);
  const uniqueGroups = new Set(technologyValues.map((tech) => tech.type));

  return [...uniqueGroups].map((techType) => ({
    technologyType: techType,
    technologies: technologyValues
      .filter((tech) => tech.type === techType)
      .map((tech) => {
        let projectsCount = 0;
        for (const project of projectValues) {
          if (project.stack.find((stack) => stack.id === tech.id)) {
            projectsCount += 1;
          }
        }
        return {
          technology: tech,
          projectsCount: projectsCount,
        };
      }),
  }));
}
