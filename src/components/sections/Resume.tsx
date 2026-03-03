"use client";

import { FileDown, Briefcase, GraduationCap, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/motion/Reveal";
import { SITE } from "@/lib/constants";
import { experiences } from "@/content/experience";
import { projects } from "@/content/projects";
import { education } from "@/content/resume";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section id="resume" className="section-padding relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
            <div>
              <p className="text-sm font-mono text-primary/60 tracking-widest uppercase mb-2">
                Resume
              </p>
              <h2 className="text-4xl font-bold text-foreground">Quick Overview</h2>
            </div>
            <Button asChild className="bg-foreground text-background hover:bg-foreground/90">
              <a href={SITE.resumeUrl} target="_blank" rel="noopener noreferrer">
                <FileDown className="h-4 w-4 mr-2" />
                Download PDF
              </a>
            </Button>
          </div>
        </Reveal>

        {/* Clean 4-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Experience Card */}
          <Reveal delay={0.1}>
            <motion.div
              className="p-5 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all"
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Briefcase className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Experience</h3>
              </div>
              <div className="space-y-3">
                {experiences.slice(0, 2).map((exp) => (
                  <div key={exp.company} className="text-sm">
                    <p className="font-medium text-foreground">{exp.company}</p>
                    <p className="text-muted-foreground text-xs">{exp.role}</p>
                    <p className="text-muted-foreground/60 text-xs">{exp.start} - {exp.end}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </Reveal>

          {/* Projects Card */}
          <Reveal delay={0.15}>
            <motion.div
              className="p-5 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all"
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Code2 className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Projects</h3>
              </div>
              <div className="space-y-2">
                {projects.slice(0, 3).map((project) => (
                  <div key={project.title} className="text-sm">
                    <p className="font-medium text-foreground truncate">{project.title}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </Reveal>

          {/* Education Card */}
          <Reveal delay={0.2}>
            <motion.div
              className="p-5 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all"
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Education</h3>
              </div>
              <div className="space-y-3">
                {education.map((edu) => (
                  <div key={edu.institution} className="text-sm">
                    <p className="font-medium text-foreground">{edu.institution}</p>
                    <p className="text-muted-foreground text-xs">{edu.degree} in {edu.field}</p>
                    <p className="text-muted-foreground/60 text-xs">{edu.start} - {edu.end}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </Reveal>

          {/* Skills Card */}
          <Reveal delay={0.25}>
            <motion.div
              className="p-5 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all"
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Code2 className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Top Skills</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {["React", "Next.js", "LangGraph", "FastAPI", "PostgreSQL", "TypeScript", "Node.js", "Python"].map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
