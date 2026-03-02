export type Experience = {
  company: string;
  role: string;
  start: string;
  end: string;
  bullets: string[];
  /** Path to company logo in /public/ e.g. "/logos/company.png" */
  logo?: string;
};

export const experiences: Experience[] = [
  {
    company: "Company Name",
    role: "Software Engineer",
    start: "Jan 2024",
    end: "Present",
    bullets: [
      "Led development of X feature, resulting in Y outcome",
      "Improved performance of Z by N%",
      "Collaborated with cross-functional teams to ship feature on time",
    ],
  },
  {
    company: "Previous Company",
    role: "Junior Software Engineer",
    start: "Jun 2022",
    end: "Dec 2023",
    bullets: [
      "Built and maintained A component used by N users",
      "Reduced bug count by X% through better testing practices",
      "Mentored 2 interns on React and TypeScript best practices",
    ],
  },
];
