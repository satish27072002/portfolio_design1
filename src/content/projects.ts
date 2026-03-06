export type Project = {
  title: string;
  description: string;
  outcomes: string[];
  stack: string[];
  github?: string;
  live?: string;
  caseStudy?: string;
  image?: string;
  // hub-and-spoke fields
  slug: string;
  images?: string[];   // screenshots — drop files in /public/projects/
  video?: string;      // screen recording — drop file in /public/projects/
  role: string;
  timeline: string;
  problem: string;
  solution: string;
  impact: string[];
  learnings: string[];
};

export const projects: Project[] = [
  {
    title: "Mental Health Coach",
    description:
      "Safety-first mental health coaching web app with LangGraph multi-agent orchestration for coaching, therapist discovery, and appointment booking.",
    outcomes: [
      "Built LangGraph multi-agent system with context-aware LLM-based intent classification and tiered crisis detection",
      "Engineered production-grade observability: structured JSON logging with correlation IDs, LangSmith tracing, and rate limiting",
      "Added retry logic with exponential backoff and session-based conversation continuity",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "FastAPI", "PostgreSQL", "pgvector", "LangGraph", "Docker", "LangSmith", "Stripe", "Google OAuth"],
    github: "https://github.com/satish27072002/mh-skills-coach",
    live: "https://mh-skills-coach.francecentral.cloudapp.azure.com/",
    slug: "mental-health-coach",
    images: ["/projects/mhc-1.png", "/projects/mhc-2.png"],
    role: "Solo Developer",
    timeline: "Jan 2025 – ongoing",
    problem:
      "Mental health support has a significant access gap. Therapy is expensive, wait times are long, and there is no structured way for people to practice coping skills between sessions. Existing apps either feel clinical and impersonal or lack safety guardrails, which makes them risky for vulnerable users.",
    solution:
      "Built a multi-agent coaching system using LangGraph that routes conversations between a coaching agent (RAG-backed with pgvector), a therapist discovery agent (via OpenStreetMap), and a booking agent for appointment emails. A dedicated SafetyGate layer runs before every response, detecting crisis language and returning emergency resources before any AI output is shown.",
    impact: [
      "Tiered crisis detection with Swedish emergency number integration: 100% safety test pass rate across 20+ scenarios",
      "Structured JSON logging with correlation IDs and LangSmith tracing for full observability of every LLM call",
      "Rate limiting, exponential backoff retries, and 30s LLM timeout for production-grade resilience",
      "Session-based conversation continuity so context is preserved across turns",
    ],
    learnings: [
      "LangGraph's stateful graph model is significantly better than linear chains for multi-turn conversations. The explicit state machine makes routing logic debuggable and testable",
      "Safety gates need to run before routing, not after. Edge cases showed the router itself could be jailbroken without this ordering",
      "pgvector in PostgreSQL eliminated a separate vector DB dependency; at this scale it was the right trade-off over a dedicated service like Pinecone",
    ],
  },
  {
    title: "Graphwise",
    description:
      "Code knowledge graph platform with GraphRAG: processes repositories, models code relationships in Neo4j, and enables natural-language code search and Q&A.",
    outcomes: [
      "Implemented a Graph RAG pipeline that models code relationships in Neo4j for natural-language code search and Q&A",
      "Operationalized deployment on Azure VM with a single HTTPS entry point through Caddy and CI/CD-driven releases via GitHub Actions",
    ],
    stack: ["React", "Vite", "TypeScript", "Tailwind CSS", "FastAPI", "Neo4j", "PostgreSQL", "Redis", "Docker", "Caddy", "GitHub Actions", "Azure"],
    github: "https://github.com/satish27072002/Graphwise",
    live: "https://graphwise-satish.norwayeast.cloudapp.azure.com/dashboard",
    slug: "graphwise",
    images: ["/projects/graphwise-1.png"],
    video: "/projects/graphwise.mov",
    role: "Solo Developer",
    timeline: "Feb 2025 – Mar 2025",
    problem:
      "Understanding a large, unfamiliar codebase is one of the most time-consuming parts of software development. Traditional keyword search misses semantic relationships, you can find a function by name but not by what it connects to. Existing tools either require expensive embeddings for every file or produce flat, context-free results.",
    solution:
      "Built a Graph RAG pipeline that parses a repository's AST, extracts entities (functions, classes, imports, modules) and their relationships, and stores them as a property graph in Neo4j. At query time, natural language questions are converted to Cypher traversals, retrieving structurally relevant context before passing it to an LLM, giving answers grounded in actual code topology, not just text similarity.",
    impact: [
      "Natural-language code search grounded in actual code relationships, not just embeddings",
      "CI/CD pipeline with GitHub Actions. Push to main automatically rebuilds and redeploys",
    ],
    learnings: [
      "Graph-based retrieval and vector-based retrieval solve different problems. Graph is better for 'what calls what', vectors for 'what does this concept mean'; combining both gives the best results",
      "Neo4j Cypher generation from natural language is the hardest part. LLMs hallucinate invalid property names; adding a schema-awareness step before generation reduced errors significantly",
      "Caddy was a much simpler reverse proxy choice than Nginx for this scale. Automatic HTTPS with one line of config",
    ],
  },
  {
    title: "AI Marketing Assistant for Tjamigo",
    description:
      "AI-powered lead generation assistant for Tjamigo (Stockholm event platform) that automated Reddit prospect sourcing to support founder outreach and customer acquisition.",
    outcomes: [
      "Built an automated pipeline that generated 100+ new Reddit leads to support founder outreach and business growth",
      "Created a classify-and-rank system for Reddit prospects, reducing manual lead sourcing and improving outreach efficiency",
    ],
    stack: ["React", "Shadcn UI", "FastAPI", "PostgreSQL", "SQLAlchemy", "FAISS", "LangGraph", "Groq API", "Reddit API"],
    github: "https://github.com/satish27072002/Marketing_Assistant",
    slug: "tjamigo-marketing",
    images: ["/projects/tjamigo-1.png", "/projects/tjamigo-2.png", "/projects/tjamigo-3.png", "/projects/tjamigo-4.png"],
    role: "Solo Developer",
    timeline: "Dec 2024 – Jan 2025",
    problem:
      "Tjamigo, an early-stage Stockholm event platform, needed to grow its user base but had no structured outreach pipeline. The founder was manually scrolling Reddit looking for potential users, slow, inconsistent, and unscalable. There was no way to prioritise who to contact or track what had already been tried.",
    solution:
      "Built an end-to-end lead generation pipeline: a Reddit scraper collects posts and comments matching event-related intent signals, a LangGraph classification agent scores each prospect by relevance and purchase intent using Groq's fast inference, FAISS deduplicates against previously seen leads, and a React dashboard surfaces ranked prospects with suggested outreach copy for the founder to review and send.",
    impact: [
      "100+ qualified Reddit leads generated in the first run, ready for founder outreach",
      "Automated classify-and-rank pipeline reduced manual prospecting from hours to minutes per session",
      "FAISS deduplication prevented re-contacting the same prospects across sessions",
    ],
    learnings: [
      "Groq's inference speed made real-time classification feel instant, for pipelines scoring hundreds of posts quickly, latency matters more than marginal quality gains from larger models",
      "Reddit's API rate limits are the real bottleneck: batching requests and caching raw responses before classification was essential",
      "Showing ranked prospects with suggested copy rather than raw leads dramatically improved adoption. The tool needed to fit the founder's workflow, not create a new one",
    ],
  },
];
