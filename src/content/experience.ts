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
    company: "Siemens Energy",
    role: "Master Thesis Student",
    start: "Jan 2025",
    end: "Sept 2025",
    bullets: [
      "Developed a RAG-driven system for deprecated word replacement in technical documents at Siemens Energy, leveraging Azure OpenAI LLMs and NLP to enhance writing efficiency by 50%",
      "Researched and proposed an agentic AI architecture to extend the pipeline, investigating multi-agent orchestration frameworks (LangChain, LangGraph) for scalable, autonomous document correction workflows",
    ],
  },
  {
    company: "Google Developer Student Club — JNTUHCEH",
    role: "Technical and Management Lead",
    start: "Oct 2022",
    end: "Sept 2023",
    bullets: [
      "Organized 15 flagship events in AI, Blockchain and WEB3, managing resources to meet club goals; led Google Cloud Platform advocacy, guiding more than 300 students through free, structured skill development programs",
      "Conducted DApps events and cryptocurrency workshops, providing hands-on experience in decentralized applications, enabling students to develop practical blockchain skills and industry knowledge",
    ],
  },
  {
    company: "AIESEC",
    role: "UI/UX designer with marketing",
    start: "Feb 2022",
    end: "Jan 2023",
    bullets: [
      "Worked closely with the marketing team to design the UI/UX for the regional website and creative work like flyer/pamphlet design.",
    ],
  },
];
