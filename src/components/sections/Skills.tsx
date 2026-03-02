"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Reveal from "@/components/motion/Reveal";
import { skillGroups } from "@/content/skills";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <Reveal>
          <p className="text-sm font-mono text-primary/60 tracking-widest uppercase mb-2">
            Skills
          </p>
          <h2 className="text-4xl font-bold text-foreground mb-8">What I work with</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <Tabs defaultValue={skillGroups[0]?.category || "Frontend"}>
            <TabsList className="mb-8 flex flex-wrap h-auto gap-2 p-1.5 bg-card/50 backdrop-blur-sm">
              {skillGroups.map((group) => (
                <TabsTrigger
                  key={group.category}
                  value={group.category}
                  className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {group.category}
                </TabsTrigger>
              ))}
            </TabsList>

            {skillGroups.map((group) => (
              <TabsContent key={group.category} value={group.category}>
                <motion.div
                  className="flex flex-wrap gap-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {group.items.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: i * 0.03 }}
                    >
                      <Badge
                        variant="secondary"
                        className="text-sm py-2 px-4 font-normal bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
                      >
                        {item}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </Reveal>
      </div>
    </section>
  );
}
