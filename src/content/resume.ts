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
    institution: "Blekinge Institute of Technology",
    degree: "Master of Science",
    field: "Computer Science",
    start: "Jan 2024",
    end: "Present",
    highlights: [
      "Student Ambassador — assisted 38+ incoming students with orientation, housing, and academic guidance",
      "Secured a 50% tuition scholarship for academic excellence",
    ],
  },
  {
    institution: "Jawaharlal Nehru Technological University",
    degree: "Bachelor of Technology",
    field: "Computer Science",
    start: "Aug 2020",
    end: "Nov 2023",
    highlights: [
      "Graduated in the Top 1% of the Bachelor of Technology program",
      "Co-authored a research paper on Smart Contracts",
    ],
  },
];
