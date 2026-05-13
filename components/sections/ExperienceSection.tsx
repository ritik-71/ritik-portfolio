"use client";

import { useRef } from "react";
import { useScroll, useSpring, motion } from "framer-motion";
import { ExperienceCard } from "@/components/ExperienceCard";
import { MotionDiv, MotionSection, fadeUp } from "@/components/shared/Motion";
import { experiences } from "@/lib/portfolio-data";

export function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <MotionSection
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-120px" }}
      className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <MotionDiv variants={fadeUp} className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-400">
          Experience
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          Internship experience across public-sector and enterprise software.
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Building and maintaining real-world systems, from dynamic inventory tables to role-based access control platforms for government workflows.
        </p>
      </MotionDiv>

      <div ref={containerRef} className="relative mt-16 grid gap-8 md:ml-8 md:pl-10 lg:pl-12">
        <div className="absolute left-0 top-0 hidden h-full w-0.5 bg-border md:block" />
        <motion.div
          style={{ scaleY, originY: 0 }}
          className="absolute left-0 top-0 hidden w-0.5 bg-gradient-to-b from-cyan-400 to-emerald-400 md:block"
        />
        {experiences.map((item) => (
          <ExperienceCard key={item.company} item={item} />
        ))}
      </div>
    </MotionSection>
  );
}
