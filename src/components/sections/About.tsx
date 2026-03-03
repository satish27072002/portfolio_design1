"use client";

import Image from "next/image";
import { Code2, Server, Lightbulb } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { SITE } from "@/lib/constants";
import { motion } from "framer-motion";

const capabilities = [
  {
    icon: Lightbulb,
    title: "Product Thinking",
    description:
      "I work closely with stakeholders to translate requirements into solutions that ship on time and move metrics.",
  },
  {
    icon: Code2,
    title: "Frontend",
    description:
      "Frontend is where I spend a lot of energy, getting interactions right, keeping things fast, and making sure the UI actually feels good. React, Next.js, Tailwind, and shadcn/ui are my daily tools.",
  },
  {
    icon: Server,
    title: "Backend",
    description:
      "Designing reliable, microservice-based APIs and data pipelines with Node.js, Python, and PostgreSQL.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <Reveal>
          <p className="text-sm font-mono text-primary/60 tracking-widest uppercase mb-2">
            About
          </p>
          <h2 className="text-4xl font-bold text-foreground mb-8">Who I am</h2>
        </Reveal>

        {/* Bio + photo */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <Reveal className="flex-1">
            <div className="max-w-2xl">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Hi, I&apos;m {SITE.name.split(" ")[0]}. I build things, break things,
                and build them better. I genuinely enjoy the full journey from sketching
                out a UI to wiring up the backend, and I care a lot about how things
                feel to use, not just how they work under the hood.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Outside of code I&apos;m watching football, cricket, Star Wars or Marvel
                (in that order, most days). Space podcasts are my thinking music, there&apos;s
                something about the scale of the universe that puts everything else in
                perspective. Professionally, I&apos;m in a lucky spot: we&apos;re living through
                an AI revolution and I actually get to build with these tools. I want to
                join a team where that matters, where I can contribute to something real
                and leave a visible dent.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex-shrink-0">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-2 rounded-2xl blur-xl opacity-30 bg-primary/20" />

              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden mx-auto lg:mx-0">
                <Image
                  src="/photo.jpg"
                  alt={`Photo of ${SITE.name}`}
                  fill
                  sizes="(max-width: 1024px) 256px, 288px"
                  className="object-cover"
                  priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </motion.div>
          </Reveal>
        </div>

        {/* Capability cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <Reveal key={cap.title} delay={i * 0.1}>
              <motion.div
                className="group p-8 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 h-full"
                whileHover={{ y: -4 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <cap.icon className="h-6 w-6 text-primary/70" />
                </motion.div>
                <h3 className="font-semibold text-lg text-foreground mb-3">{cap.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {cap.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
