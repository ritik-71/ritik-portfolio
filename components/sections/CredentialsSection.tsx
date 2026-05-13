import { Award, GraduationCap, ShieldCheck } from "lucide-react";

import { MotionDiv, MotionSection, fadeUp } from "@/components/shared/Motion";
import { Badge } from "@/components/ui/badge";
import { certifications, education, skillGroups } from "@/lib/portfolio-data";

export function CredentialsSection() {
  return (
    <MotionSection
      id="credentials"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      className="border-y border-border bg-background/20 px-4 py-24 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(34,211,238,0.05),transparent_50%)]" />
      
      <div className="relative mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <MotionDiv variants={fadeUp}>
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-400">
            Credentials
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
            Academic foundation, verified learning, and practical engineering depth.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Ritik combines a computer science degree track with applied internships,
            analytics certification, automation training, and hands-on full-stack
            project delivery.
          </p>
        </MotionDiv>

        <div className="grid gap-6">
          <MotionDiv
            variants={fadeUp}
            className="group rounded-2xl border border-border bg-background/40 p-6 backdrop-blur-md transition-all hover:border-cyan-400/30 hover:shadow-lg"
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="grid size-12 place-items-center rounded-xl bg-cyan-400/10 text-cyan-400 shadow-inner group-hover:scale-110 transition-transform">
                <GraduationCap className="size-6" />
              </span>
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>
            <div className="grid gap-4">
              {education.map((item) => (
                <div
                  key={`${item.institution}-${item.program}`}
                  className="rounded-xl border border-border bg-background/50 p-5 transition-colors hover:bg-accent/50"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{item.institution}</p>
                      <p className="mt-1 text-sm font-medium text-muted-foreground">{item.program}</p>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="font-mono text-xs font-semibold text-cyan-400">{item.period}</p>
                      <p className="mt-1 text-sm font-bold text-foreground">{item.score}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </MotionDiv>

          <MotionDiv
            variants={fadeUp}
            className="grid gap-6 md:grid-cols-2"
          >
            <div className="group rounded-2xl border border-border bg-background/40 p-6 backdrop-blur-md transition-all hover:border-emerald-400/30 hover:shadow-lg">
              <div className="mb-6 flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-xl bg-emerald-400/10 text-emerald-400 shadow-inner group-hover:scale-110 transition-transform">
                  <Award className="size-6" />
                </span>
                <h3 className="text-xl font-bold text-foreground">Certifications</h3>
              </div>
              <div className="grid gap-4">
                {certifications.map((item) => (
                  <p key={item} className="flex gap-3 text-sm font-medium leading-relaxed text-muted-foreground">
                    <ShieldCheck className="mt-0.5 size-5 shrink-0 text-emerald-400" />
                    <span>{item}</span>
                  </p>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-background/40 p-6 backdrop-blur-md hover:border-cyan-400/30 transition-all hover:shadow-lg">
              <h3 className="text-xl font-bold text-foreground mb-6">Skill Matrix</h3>
              <div className="grid gap-5">
                {skillGroups.map((group) => (
                  <div key={group.title}>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/80">
                      {group.title}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <Badge
                          key={item}
                          variant="secondary"
                          className="bg-accent/50 hover:bg-accent text-xs font-medium"
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  );
}
