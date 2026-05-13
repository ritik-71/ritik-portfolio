import type { Metadata } from "next";

import { ProjectsSection } from "@/components/sections/ProjectsSection";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Ritik Kumar Singh across Next.js, Spring Boot, Java, MySQL, MS SQL Server, Python, and OpenCV.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,rgba(52,211,153,0.16),transparent_32%),#020617] pt-16">
      <ProjectsSection />
    </div>
  );
}
