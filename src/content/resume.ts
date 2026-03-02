export type Education = {
  institution: string;
  degree: string;
  field: string;
  start: string;
  end: string;
  gpa?: string;
  highlights?: string[];
};

export const education: Education[] = [
  {
    institution: "University Name",
    degree: "Bachelor of Science",
    field: "Computer Science",
    start: "Aug 2019",
    end: "May 2023",
    gpa: "3.8 / 4.0",
    highlights: [
      "Dean's List — 4 semesters",
      "Relevant coursework: Data Structures & Algorithms, Operating Systems, Machine Learning",
    ],
  },
];
