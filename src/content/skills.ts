export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "HTML / CSS",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    category: "Tools & Infra",
    items: [
      "Git",
      "Docker",
      "Vercel",
      "AWS",
      "GitHub Actions",
      "Linux",
    ],
  },
];
