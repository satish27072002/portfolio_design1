"use client";

import Image from "next/image";
import { Github, Linkedin, Mail, FileText, ArrowDown } from "lucide-react";
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

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="min-h-[100dvh] relative flex flex-col justify-center section-padding overflow-hidden"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30 dark:opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.3), transparent)",
        }}
        animate={{
          background: [
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.3), transparent)",
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(167, 139, 250, 0.3), transparent)",
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.3), transparent)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-foreground/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text content */}
          <div className="flex flex-col justify-center">
            <FadeIn delay={0.1}>
              <motion.p
                className="text-sm font-mono text-primary/60 tracking-widest uppercase mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Hello, I&apos;m
              </motion.p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-[1.1]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
              >
                {SITE.name.split(" ")[0]}{" "}
                <span className="text-primary/80">{SITE.name.split(" ")[1]}</span>
              </motion.h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <motion.p
                className="text-xl sm:text-2xl text-muted-foreground mb-6 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {SITE.role}
              </motion.p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <motion.p
                className="text-base text-muted-foreground/80 max-w-lg mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {SITE.pitch}
              </motion.p>
            </FadeIn>

            {/* CTA buttons */}
            <FadeIn delay={0.5}>
              <motion.div
                className="flex flex-wrap gap-3 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Button asChild className="bg-foreground text-background hover:bg-foreground/90">
                  <a href={SITE.resumeUrl} target="_blank" rel="noopener noreferrer">
                    <FileText className="h-4 w-4 mr-2" />
                    Resume
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-foreground/20">
                  <a href={SITE.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-foreground/20">
                  <a href={`https://${SITE.linkedin}`} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-foreground/20">
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

          {/* Right: Photo with 3D tilt effect */}
          <FadeIn delay={0.3} className="flex justify-center lg:justify-end">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              style={{ perspective: 1000 }}
            >
              {/* Glow effect */}
              <motion.div
                className="absolute -inset-4 rounded-2xl blur-2xl"
                style={{
                  background: "linear-gradient(135deg, rgba(120, 119, 198, 0.4), transparent, rgba(167, 139, 250, 0.2))",
                }}
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Photo container with 3D effect */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/photo.jpg"
                  alt={`Photo of ${SITE.name}`}
                  fill
                  sizes="(max-width: 1024px) 288px, 320px"
                  className="object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-primary/30 rounded-tr-lg"
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-primary/30 rounded-bl-lg"
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
