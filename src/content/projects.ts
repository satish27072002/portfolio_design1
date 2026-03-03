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
    title: "Mental Health Coach",
    description: "Safety-first mental health coaching web app with LangGraph multi-agent orchestration for coaching, therapist discovery, and appointment booking.",
    outcomes: [
      "Built LangGraph multi-agent system with context-aware LLM-based intent classification and tiered crisis detection",
      "Engineered production-grade observability: structured JSON logging with correlation IDs, LangSmith tracing, and rate limiting",
      "Added retry logic with exponential backoff and session-based conversation continuity",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "FastAPI", "PostgreSQL", "pgvector", "LangGraph", "Docker", "LangSmith", "Stripe", "Google OAuth"],
    github: "https://github.com/satish27072002/mh-skills-coach",
    live: "https://mh-skills-coach.francecentral.cloudapp.azure.com/",
  },
  {
    title: "Graphwise",
    description: "Code knowledge graph platform with GraphRAG — processes repositories, models code relationships in Neo4j, and enables natural-language code search and Q&A.",
    outcomes: [
      "Implemented a Graph RAG pipeline that models code relationships in Neo4j for natural-language code search and Q&A",
      "Operationalized deployment on Azure VM with a single HTTPS entry point through Caddy and CI/CD-driven releases via GitHub Actions",
    ],
    stack: ["React", "Vite", "TypeScript", "Tailwind CSS", "FastAPI", "Neo4j", "PostgreSQL", "Redis", "Docker", "Caddy", "GitHub Actions", "Azure"],
    github: "https://github.com/satish27072002/Graphwise",
    live: "https://graphwise-satish.norwayeast.cloudapp.azure.com/dashboard",
  },
  {
    title: "AI Marketing Assistant for Tjamigo",
    description: "AI-powered lead generation assistant for Tjamigo (Stockholm event platform) that automated Reddit prospect sourcing to support founder outreach and customer acquisition.",
    outcomes: [
      "Built an automated pipeline that generated 100+ new Reddit leads to support founder outreach and business growth",
      "Created a classify-and-rank system for Reddit prospects, reducing manual lead sourcing and improving outreach efficiency",
    ],
    stack: ["React", "Shadcn UI", "FastAPI", "PostgreSQL", "SQLAlchemy", "FAISS", "LangGraph", "Groq API", "Reddit API"],
    github: "https://github.com/satish27072002/Marketing_Assistant",
  },
];
