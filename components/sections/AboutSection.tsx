import { skills } from "@/lib/portfolio-data";
import { MotionDiv, MotionSection, fadeUp, stagger } from "@/components/shared/Motion";
import Magnetic from "@/components/shared/Magnetic";

export function AboutSection() {
  return (
    <MotionSection
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      variants={stagger}
      className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <MotionDiv variants={fadeUp} className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-400">
          About
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          A placement-ready engineer with real internship delivery across portals,
          inventory systems, and secure APIs.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Ritik Kumar Singh is a B.Tech Computer Science and Engineering student at
          Lovely Professional University. His work spans React and Next.js interfaces,
          Java Spring Boot APIs, REST integrations, MySQL, MS SQL Server, responsive
          web design, and data-structured products built during professional internships.
        </p>
      </MotionDiv>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <Magnetic key={skill.name}>
              <MotionDiv
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-border bg-background/40 p-6 shadow-lg backdrop-blur-sm transition-all hover:border-cyan-400/50 hover:shadow-cyan-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-emerald-400/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative z-10 flex items-center gap-4">
                  <span className="grid size-12 place-items-center rounded-xl border border-border bg-accent text-cyan-400 shadow-inner transition-transform group-hover:rotate-12 group-hover:scale-110">
                    <Icon className="size-6" />
                  </span>
                  <div>
                    <h3 className="font-bold text-foreground group-hover:text-cyan-400 transition-colors">{skill.name}</h3>
                    <p className="mt-1 text-sm font-medium text-muted-foreground">{skill.category}</p>
                  </div>
                </div>
              </MotionDiv>
            </Magnetic>
          );
        })}
      </div>
    </MotionSection>
  );
}
