import { Github, Linkedin, Mail } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">
            © {year} {SITE.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={`https://${SITE.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${SITE.email}`}
              aria-label="Email"
              className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
