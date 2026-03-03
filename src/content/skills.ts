export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "Java", "C", "JavaScript", "TypeScript", "HTML/CSS"],
  },
  {
    category: "Frontend & Web",
    items: ["React", "Next.js", "Tailwind CSS", "Radix", "Shadcn UI", "Streamlit", "Flask", "FastAPI", "Node.js"],
  },
  {
    category: "AI & Agents",
    items: ["LangGraph", "LangChain", "RAG", "GraphRAG", "FAISS", "Chroma", "pgvector", "NLP", "Word Embeddings", "Computer Vision", "Agentic AI"],
  },
  {
    category: "Infra & Platforms",
    items: ["PostgreSQL", "Neo4j", "Redis", "Docker", "Kubernetes", "Microsoft Azure", "Google Cloud Platform", "GitHub Actions", "Git"],
  },
];
