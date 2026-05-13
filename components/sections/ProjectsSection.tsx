import { ProjectCard } from "@/components/ProjectCard";
import { MotionDiv, MotionSection, fadeUp } from "@/components/shared/Motion";
import { projects } from "@/lib/portfolio-data";

export function ProjectsSection() {
  return (
    <MotionSection
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      className="border-y border-white/10 bg-white/[0.025] px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        <MotionDiv variants={fadeUp} className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-200">
              Projects
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Practical work with dashboards, databases, and intelligent systems.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/56">
            Each project is selected to show production instincts: clear workflows,
            reliable data models, and interfaces that reduce friction.
          </p>
        </MotionDiv>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
