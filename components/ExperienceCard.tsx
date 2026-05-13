import { CheckCircle2, BriefcaseBusiness } from "lucide-react";

import { MotionArticle } from "@/components/shared/Motion";
import { Badge } from "@/components/ui/badge";

type ExperienceCardProps = {
  item: {
    company: string;
    role: string;
    period: string;
    tech: string[];
    contributions: string[];
  };
};

export function ExperienceCard({ item }: ExperienceCardProps) {
  return (
    <MotionArticle
      initial={{ opacity: 0, x: -22 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.55, type: "spring", stiffness: 100 }}
      className="group relative rounded-2xl border border-border bg-background/40 p-6 backdrop-blur-md transition-all hover:border-cyan-400/50 hover:shadow-lg"
    >
      <div className="absolute -left-[45px] top-8 hidden size-6 place-items-center rounded-full border-4 border-background bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)] md:grid transition-transform group-hover:scale-125">
        <BriefcaseBusiness className="size-3 text-slate-900" />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">{item.period}</p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-foreground group-hover:text-cyan-400 transition-colors">{item.company}</h3>
          <p className="mt-1 text-base font-medium text-muted-foreground">{item.role}</p>
        </div>
        <div className="flex flex-wrap gap-2 sm:justify-end">
          {item.tech.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-accent/50 text-xs font-medium text-foreground hover:bg-accent"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-3 border-t border-border/50 pt-6">
        {item.contributions.map((contribution) => (
          <p key={contribution} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.3)] rounded-full" />
            <span>{contribution}</span>
          </p>
        ))}
      </div>
    </MotionArticle>
  );
}
