import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/content/projects";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      {/* Sticky back link */}
      <Link
        href="/#projects"
        className="fixed top-5 left-5 z-50 flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border/50"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to Home
      </Link>

      <div className="paper-wrapper">
        <main className="px-6 md:px-12 py-24 max-w-4xl mx-auto">

          {/* ── Hero Header ── */}
          <section className="mb-12">
            <p className="text-sm font-mono text-primary/60 tracking-widest uppercase mb-4">
              Case Study
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-8">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm font-medium hover:border-primary/40 hover:bg-primary/5 transition-colors"
                >
                  <Github className="h-4 w-4" />
                  GitHub Repo
                </a>
              )}
            </div>
          </section>

          {/* ── Glance Bar ── */}
          <section className="mb-16 pb-16 border-b border-border/50">
            <div className="flex flex-wrap gap-2 items-center">
              <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/10 px-3 py-1 text-sm font-medium">
                {project.role}
              </Badge>
              <Badge variant="outline" className="px-3 py-1 text-sm font-medium text-muted-foreground">
                {project.timeline}
              </Badge>
              <span className="w-px h-5 bg-border/50 mx-1" />
              {project.stack.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="px-3 py-1 text-sm font-normal bg-card/50 border border-border/50"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </section>

          {/* ── Visuals ── */}
          {(project.video || (project.images && project.images.length > 0)) && (
            <section className="mb-16">
              <p className="text-sm font-mono text-primary/60 tracking-widest uppercase mb-4">
                Visuals
              </p>

              <div className="space-y-3">
                {/* Images — 1 image: full width; 2 images: equal grid; 3+: first full width then grid */}
                {project.images && project.images.length === 1 && (
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border/50 shadow-lg">
                    <Image
                      src={project.images[0]}
                      alt={`${project.title} screenshot 1`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 896px"
                      priority
                    />
                  </div>
                )}

                {project.images && project.images.length === 2 && (
                  <div className="grid grid-cols-2 gap-3">
                    {project.images.map((src, i) => (
                      <div
                        key={src}
                        className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border/50 shadow-lg"
                      >
                        <Image
                          src={src}
                          alt={`${project.title} screenshot ${i + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 50vw, 448px"
                          priority={i === 0}
                        />
                      </div>
                    ))}
                  </div>
                )}

                {project.images && project.images.length >= 3 && (
                  <>
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border/50 shadow-lg">
                      <Image
                        src={project.images[0]}
                        alt={`${project.title} screenshot 1`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 896px"
                        priority
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {project.images.slice(1).map((src, i) => (
                        <div
                          key={src}
                          className="relative w-full aspect-video rounded-2xl overflow-hidden border border-border/50 shadow-lg"
                        >
                          <Image
                            src={src}
                            alt={`${project.title} screenshot ${i + 2}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 50vw, 448px"
                          />
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Video — shown below images if both exist */}
                {project.video && (
                  <video
                    src={project.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full rounded-2xl border border-border/50 shadow-lg"
                  />
                )}
              </div>
            </section>
          )}

          {/* ── The Story ── */}
          <section className="mb-16 space-y-12 max-w-3xl">
            <div>
              <p className="text-sm font-mono text-primary/60 tracking-widest uppercase mb-3">
                Problem
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div>
              <p className="text-sm font-mono text-primary/60 tracking-widest uppercase mb-3">
                Solution
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
            </div>

            <div>
              <p className="text-sm font-mono text-primary/60 tracking-widest uppercase mb-3">
                Impact
              </p>
              <ul className="space-y-3">
                {project.impact.map((item, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                    <span className="text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ── Learnings ── */}
          <section className="max-w-3xl pb-24">
            <p className="text-sm font-mono text-primary/60 tracking-widest uppercase mb-3">
              What I Learned
            </p>
            <ul className="space-y-4">
              {project.learnings.map((item, i) => (
                <li key={i} className="flex gap-3 text-muted-foreground">
                  <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-primary/30 flex-shrink-0" />
                  <span className="text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

        </main>
      </div>
    </>
  );
}
