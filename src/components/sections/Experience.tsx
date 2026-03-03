"use client";

import Image from "next/image";
import { Briefcase, Calendar } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { experiences } from "@/content/experience";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="relative z-10">
        <Reveal>
          <p className="text-sm font-mono text-primary/60 tracking-widest uppercase mb-2">
            Experience
          </p>
          <h2 className="text-4xl font-bold text-foreground mb-8">Where I&apos;ve worked</h2>
        </Reveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary/10 to-transparent" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <Reveal key={`${exp.company}-${exp.start}`} delay={i * 0.1}>
                <motion.div
                  className={`relative flex items-center ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/30 -translate-x-1/2 z-10" />

                  {/* Content card */}
                  <div
                    className={`ml-12 md:ml-0 md:w-[45%] ${
                      i % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                      {/* Company logo */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center overflow-hidden flex-shrink-0">
                          {exp.logo ? (
                            <Image
                              src={exp.logo}
                              alt={`${exp.company} logo`}
                              width={24}
                              height={24}
                              className="object-contain w-6 h-6"
                            />
                          ) : (
                            <Briefcase className="h-5 w-5 text-primary/60" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground text-lg">{exp.role}</h3>
                          <p className="text-primary/70 text-sm font-medium">{exp.company}</p>
                        </div>
                      </div>

                      {/* Date */}
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground/60 mb-4">
                        <Calendar className="h-3.5 w-3.5" />
                        <span className="font-mono">
                          {exp.start} — {exp.end}
                        </span>
                      </div>

                      {/* Description */}
                      <ul className="space-y-2">
                        {exp.bullets.map((bullet, j) => (
                          <li
                            key={j}
                            className="text-sm text-muted-foreground flex gap-2"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/40 flex-shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Empty space for the other side */}
                  <div className="hidden md:block md:w-[45%]" />
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
