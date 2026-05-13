"use client";

import { ArrowUpRight, GitBranch, LayoutDashboard } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

import { MotionArticle } from "@/components/shared/Motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type ProjectCardProps = {
  project: {
    title: string;
    description: string;
    stack: string[];
    github: string;
    live: string;
    period: string;
    highlights: string[];
  };
  index?: number;
};

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <MotionArticle
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background/40 p-6 shadow-xl backdrop-blur-md transition-all hover:border-cyan-400/50 hover:shadow-cyan-500/10"
      >
        <div 
          style={{ transform: "translateZ(50px)" }}
          className="absolute inset-x-8 -top-24 h-36 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/20 group-hover:blur-2xl" 
        />
        
        <div 
          style={{ transform: "translateZ(30px)" }}
          className="relative z-10 flex flex-1 flex-col"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-block rounded-full bg-accent px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {project.period}
                </span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            </div>
            <div className="grid size-12 shrink-0 place-items-center rounded-xl border border-border bg-background shadow-inner transition-transform group-hover:rotate-12 group-hover:scale-110">
              <LayoutDashboard className="size-5 text-cyan-400" />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <Badge
                key={item}
                variant="secondary"
                className="bg-accent/50 text-xs font-medium text-foreground hover:bg-accent"
              >
                {item}
              </Badge>
            ))}
          </div>

          <div className="mt-6 flex-1">
            <ul className="grid gap-2.5 text-sm text-muted-foreground">
              {project.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_5px_rgba(34,211,238,0.5)]" />
                  <span className="leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.github && (
              <Button asChild size="sm" variant="outline" className="border-border bg-background/50 hover:bg-accent hover:text-cyan-400">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <GitBranch className="mr-2 size-4" />
                  Source Code
                </a>
              </Button>
            )}
            {project.live && (
              <Button
                asChild
                size="sm"
                className="bg-foreground text-background hover:bg-cyan-400 hover:text-slate-950"
              >
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live Preview
                  <ArrowUpRight className="ml-1 size-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </MotionArticle>
    </div>
  );
}
