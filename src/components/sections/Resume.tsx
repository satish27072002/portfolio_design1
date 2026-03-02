"use client";

import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Reveal from "@/components/motion/Reveal";
import { SITE } from "@/lib/constants";
import { experiences } from "@/content/experience";
import { projects } from "@/content/projects";
import { skillGroups } from "@/content/skills";
import { education } from "@/content/resume";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section id="resume" className="section-padding relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Section header */}
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-12">
            <div>
              <p className="text-sm font-mono text-primary/60 tracking-widest uppercase mb-2">
                Resume
              </p>
              <h2 className="text-4xl font-bold text-foreground">At a glance</h2>
            </div>
            <Button
              asChild
              className="self-start bg-foreground text-background hover:bg-foreground/90"
            >
              <a href={SITE.resumeUrl} target="_blank" rel="noopener noreferrer">
                <FileDown className="h-4 w-4 mr-2" />
                Download PDF
              </a>
            </Button>
          </div>
        </Reveal>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column: Experience + Projects */}
          <div className="flex flex-col gap-6">
            {/* Experience (condensed) */}
            <Reveal delay={0.1}>
              <motion.div
                className="p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50"
                whileHover={{ y: -2 }}
              >
                <h3 className="text-sm font-mono text-primary/60 tracking-widest uppercase mb-5">
                  Experience
                </h3>
                <div className="flex flex-col gap-5">
                  {experiences.map((exp) => (
                    <div
                      key={`${exp.company}-${exp.start}`}
                      className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1"
                    >
                      <div>
                        <p className="font-semibold text-foreground text-sm">{exp.role}</p>
                        <p className="text-primary/70 text-sm">{exp.company}</p>
                      </div>
                      <span className="text-xs text-muted-foreground/60 font-mono whitespace-nowrap">
                        {exp.start} — {exp.end}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Reveal>

            {/* Featured Projects (condensed) */}
            <Reveal delay={0.15}>
              <motion.div
                className="p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50"
                whileHover={{ y: -2 }}
              >
                <h3 className="text-sm font-mono text-primary/60 tracking-widest uppercase mb-5">
                  Featured Projects
                </h3>
                <div className="flex flex-col gap-5">
                  {projects.map((project) => (
                    <div key={project.title}>
                      <p className="font-semibold text-foreground text-sm mb-2">
                        {project.title}
                      </p>
                      <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.slice(0, 4).map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-[10px] font-normal py-0 bg-primary/5"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.stack.length > 4 && (
                          <Badge
                            variant="secondary"
                            className="text-[10px] font-normal py-0 text-muted-foreground bg-primary/5"
                          >
                            +{project.stack.length - 4}
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          </div>

          {/* Right column: Education + Skills */}
          <div className="flex flex-col gap-6">
            {/* Education */}
            <Reveal delay={0.2}>
              <motion.div
                className="p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50"
                whileHover={{ y: -2 }}
              >
                <h3 className="text-sm font-mono text-primary/60 tracking-widest uppercase mb-5">
                  Education
                </h3>
                <div className="flex flex-col gap-5">
                  {education.map((edu) => (
                    <div key={`${edu.institution}-${edu.start}`}>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                        <div>
                          <p className="font-semibold text-foreground text-sm">
                            {edu.degree} in {edu.field}
                          </p>
                          <p className="text-primary/70 text-sm">{edu.institution}</p>
                        </div>
                        <span className="text-xs text-muted-foreground/60 font-mono whitespace-nowrap">
                          {edu.start} — {edu.end}
                        </span>
                      </div>
                      {edu.gpa && (
                        <p className="text-xs text-muted-foreground mb-2">
                          GPA: {edu.gpa}
                        </p>
                      )}
                      {edu.highlights && edu.highlights.length > 0 && (
                        <ul className="space-y-1">
                          {edu.highlights.map((h, i) => (
                            <li key={i} className="text-xs text-muted-foreground flex gap-2">
                              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/40 flex-shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </Reveal>

            {/* Skills (compact inline) */}
            <Reveal delay={0.25}>
              <motion.div
                className="p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50"
                whileHover={{ y: -2 }}
              >
                <h3 className="text-sm font-mono text-primary/60 tracking-widest uppercase mb-5">
                  Skills
                </h3>
                <div className="flex flex-col gap-4">
                  {skillGroups.map((group) => (
                    <div key={group.category}>
                      <p className="text-xs font-medium text-foreground mb-1.5">
                        {group.category}
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {group.items.join(" · ")}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
