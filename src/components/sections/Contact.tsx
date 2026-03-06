"use client";

import { Zap, Mail, Github, Linkedin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/motion/Reveal";
import ContactModal from "@/components/sections/ContactModal";
import { SITE } from "@/lib/constants";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <Reveal>
          <p className="text-sm font-mono text-primary/60 tracking-widest uppercase mb-2">
            Contact
          </p>
          <h2 className="text-4xl font-bold text-foreground mb-8">Get in touch</h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Reveal delay={0.1}>
            <div className="max-w-md">
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Want to connect, collaborate, or just say hi? I&apos;d love to hear
                from you. Drop me a message and I&apos;ll get back to you as soon as
                possible.
              </p>

              {/* Social links */}
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="outline" size="lg" className="border-border/50">
                  <a href={`mailto:${SITE.email}`}>
                    <Mail className="h-5 w-5 mr-2" />
                    Email
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-border/50">
                  <a href={SITE.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-border/50">
                  <a href={`https://${SITE.linkedin}`} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5 mr-2" />
                    LinkedIn
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-border/50">
                  <a href={SITE.resumeUrl} download>
                    <FileText className="h-5 w-5 mr-2" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <motion.div
              className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50"
              whileHover={{ y: -2 }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Send me a message
              </h3>
              <p className="text-muted-foreground mb-6">
                I get an instant notification on Discord when you ping me.
              </p>
              <ContactModal>
                <Button className="w-full sm:w-auto bg-foreground text-background hover:bg-foreground/90">
                  <Zap className="h-4 w-4 mr-2" />
                  Ping me
                </Button>
              </ContactModal>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
