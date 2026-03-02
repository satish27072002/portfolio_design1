export type Project = {
  title: string;
  description: string;
  outcomes: string[];
  stack: string[];
  github?: string;
  live?: string;
  caseStudy?: string;
  /** Path to screenshot in /public/ e.g. "/projects/project-one.png" */
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Project One",
    description: "One-sentence description of what this project does.",
    outcomes: [
      "Key metric or impact — e.g. reduced load time by 40%",
      "Business outcome — e.g. 100+ active users in first month",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/satish27/project-one",
    live: "https://project-one.vercel.app",
  },
  {
    title: "Project Two",
    description: "One-sentence description of what this project does.",
    outcomes: [
      "Key metric or impact",
      "Business outcome",
    ],
    stack: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/satish27/project-two",
  },
  {
    title: "Project Three",
    description: "One-sentence description of what this project does.",
    outcomes: [
      "Key metric or impact",
      "Business outcome",
    ],
    stack: ["Python", "FastAPI", "Redis"],
    github: "https://github.com/satish27/project-three",
    live: "https://project-three.vercel.app",
  },
];
