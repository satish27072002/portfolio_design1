"use client";

import Image from "next/image";
import { Github, Linkedin, Mail, FileText, ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/motion/FadeIn";
import { SITE } from "@/lib/constants";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="min-h-[100dvh] relative flex flex-col justify-center section-padding overflow-hidden"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 102, 241, 0.15), transparent)",
        }}
        animate={{
          background: [
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 102, 241, 0.15), transparent)",
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(168, 85, 247, 0.15), transparent)",
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 102, 241, 0.15), transparent)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full opacity-20"
            style={{
              background: `radial-gradient(circle, rgba(99, 102, 241, 0.3), transparent 70%)`,
              left: `${10 + i * 25}%`,
              top: `${20 + (i % 2) * 40}%`,
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <motion.div style={{ y, opacity }} className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <FadeIn delay={0.1}>
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary/70 text-sm mb-6 w-fit"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>Available for work</span>
              </motion.div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <motion.p
                className="text-sm font-medium text-primary/70 tracking-widest uppercase mb-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                Hello, I&apos;m
              </motion.p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-[1.05]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              >
                {SITE.name.split(" ")[0]}{" "}
                <span className="text-primary/80">{SITE.name.split(" ")[1]}</span>
              </motion.h1>
            </FadeIn>

            <FadeIn delay={0.25}>
              <motion.p
                className="text-xl sm:text-2xl text-foreground/70 mb-5 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                {SITE.role}
              </motion.p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <motion.p
                className="text-base text-muted-foreground/80 max-w-lg mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {SITE.pitch}
              </motion.p>
            </FadeIn>

            {/* CTA buttons */}
            <FadeIn delay={0.35}>
              <motion.div
                className="flex flex-wrap gap-3 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
              >
                <Button asChild className="bg-foreground text-background hover:bg-foreground/90">
                  <a href={SITE.resumeUrl} download>
                    <FileText className="h-4 w-4 mr-2" />
                    Download Resume
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-border hover:bg-primary/5">
                  <a href={SITE.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-border hover:bg-primary/5">
                  <a href={`https://${SITE.linkedin}`} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-border hover:bg-primary/5">
                  <a href={`mailto:${SITE.email}`}>
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </a>
                </Button>
              </motion.div>
            </FadeIn>

            {/* Scroll indicator */}
            <motion.div
              className="flex items-center gap-2 text-muted-foreground/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <span className="text-sm">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDown className="h-4 w-4" />
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Photo with 3D effect */}
          <FadeIn delay={0.3} className="flex justify-center lg:justify-end order-1 lg:order-2">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
              whileHover={{ scale: 1.02, rotate: 0 }}
            >
              {/* Glow effect */}
              <motion.div
                className="absolute -inset-6 rounded-3xl"
                style={{
                  background: "linear-gradient(135deg, rgba(99, 102, 241, 0.4), transparent 50%, rgba(168, 85, 247, 0.2))",
                }}
                animate={{
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Photo container */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/photo.jpg"
                  alt={`Photo of ${SITE.name}`}
                  fill
                  sizes="(max-width: 1024px) 288px, 320px"
                  className="object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Border */}
                <div className="absolute inset-0 rounded-2xl border border-white/10" />
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-primary/40 rounded-tr-lg"
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-primary/40 rounded-bl-lg"
                animate={{ rotate: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              />
            </motion.div>
          </FadeIn>
        </div>
      </motion.div>
    </section>
  );
}
