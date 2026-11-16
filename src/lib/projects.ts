export interface Project {
  start: Date;
  end: Date | null;
  title: string;
  job: string;
  description: string;
  stack: string[];
}

export const projects: Project[] = [
  {
    start: new Date("2021-09-01T00:00:00Z"),
    end: new Date("2023-02-28T00:00:00Z"),
    title: "Freelance",
    job: "Fullstack",
    description:
      "Started my developer journey here to gain real hands-on experience. I built various small-to-medium projects for clients, mostly focusing on <strong>Telegram bots</strong>, responsive <strong>landing pages</strong>, and <strong>Telegram Mini Apps</strong> (TMA). It was a great time to learn how to code, solve real problems, and work with clients.",
    stack: ["Python", "Node", "Vanilla JS/TS", "React", "NextJS", "SQLite", "Postgres", "MUI"],
  },
  {
    start: new Date("2023-02-01T00:00:00Z"),
    end: new Date("2023-08-31T00:00:00Z"),
    title: "Crypto Softers",
    job: "Fullstack",
    description:
      "My first experience working in a real development team. Working under the guidance of an experienced developer helped me level up my skills quickly through tasks and code reviews. This is also where I got my first hands-on experience with Web3 technologies.",
    stack: ["React", "Shadcn/Radix", "Tailwind", "Openapi", "Web 3", "Python", "React Query"],
  },
  {
    start: new Date("2023-08-01T00:00:00Z"),
    end: new Date("2024-05-31T00:00:00Z"),
    title: "Vitrinagram",
    job: "Fullstack",
    description:
      "With some solid experience already under my belt, I joined the team to handle a wide variety of tasks. I worked across the entire stack, shifting smoothly between frontend and backend development to deliver features end-to-end.",
    stack: ["React", "SCSS", "Tailwind", "Postgres", "Redis", "Python", "Node", "Tanstack"],
  },
  {
    start: new Date("2024-05-01T00:00:00Z"),
    end: new Date("2025-11-10T00:00:00Z"),
    title: "Tenders AI",
    job: "Fullstack",
    description:
      "Served as the Lead Frontend Developer. During a team creative block, I stepped up and brought an innovative solution by diving into NLP. I successfully (yet accidentally 😆) implemented an AI feature that recognized and parsed freely-written product specifications, which helped the project move forward.",
    stack: ["React", "Tailwind", "BaseUI", "Python", "spaCy", "Mongo", "Postgres", "Tanstack"],
  },
  {
    start: new Date("2025-11-18T00:00:00Z"),
    end: null,
    title: "HelloClient",
    job: "Fullstack",
    description:
      "Working on a large, mature product, consistently shipping new features while maintaining strict quality control and optimization standards. This fast-paced yet stable environment allowed me to dive much deeper into the backend, mastering complex architectural trade-offs and optimizing PostgreSQL.",
    stack: ["React", "Tailwind", "React Aria", "Bun", "Postgres", "RPC", "Tanstack"],
  },
];

const MONTH_YEAR = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

export const formatDate = (date: Date): string => MONTH_YEAR.format(date);

export const formatDuration = (start: Date, end?: Date): string => {
  const until = end ?? new Date();
  let totalMonths =
    (until.getFullYear() - start.getFullYear()) * 12 + (until.getMonth() - start.getMonth());

  if (until.getDate() < start.getDate()) totalMonths -= 1;
  if (totalMonths <= 0) return "1 mo";

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return [years > 0 ? `${years} yr` : "", months > 0 ? `${months} mo` : ""]
    .filter(Boolean)
    .join(" ");
};

export const toIsoDate = (date: Date): string => date.toISOString().slice(0, 10);
