"use client";

import Image from "next/image";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Reveal from "@/components/motion/Reveal";
import { projects } from "@/content/projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <Reveal>
          <p className="text-sm font-mono text-primary/60 tracking-widest uppercase mb-2">
            Projects
          </p>
          <h2 className="text-4xl font-bold text-foreground mb-8">Things I&apos;ve built</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.1}>
              <motion.div
                className="group relative bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500"
                whileHover={{ y: -4 }}
              >
                {/* Project image */}
                <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent flex items-center justify-center">
                      <span className="text-5xl font-bold text-primary/20 select-none">
                        {project.title
                          .split(" ")
                          .map((w) => w[0])
                          .join("")
                          .toUpperCase()
                          .slice(0, 2)}
                      </span>
                    </div>
                  )}
                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

                  {/* Hover overlay with links */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    {project.github && (
                      <Button asChild size="sm" variant="outline">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.live && (
                      <Button asChild size="sm">
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-semibold text-xl text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground/30 group-hover:text-primary transition-colors flex-shrink-0" />
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Outcomes */}
                  <ul className="space-y-1.5 mb-4">
                    {project.outcomes.map((outcome, j) => (
                      <li key={j} className="text-sm text-muted-foreground/80 flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                        {outcome}
                      </li>
                    ))}
                  </ul>

                  {/* Stack badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs font-normal bg-primary/5 hover:bg-primary/10"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Case study */}
                  {project.caseStudy && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="link" className="px-0 mt-4 text-primary">
                          Read case study
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>{project.title}</DialogTitle>
                        </DialogHeader>
                        <div className="prose prose-sm dark:prose-invert mt-2">
                          <p>{project.caseStudy}</p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
