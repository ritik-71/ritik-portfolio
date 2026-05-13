import type { Metadata } from "next";

import { ExperienceSection } from "@/components/sections/ExperienceSection";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Internship experience for Ritik Kumar Singh at NIC Rajya Sabha and Vinculum Group.",
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_34%),#020617] pt-16">
      <ExperienceSection />
    </div>
  );
}
