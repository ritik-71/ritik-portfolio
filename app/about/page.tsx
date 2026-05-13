import type { Metadata } from "next";

import { AboutSection } from "@/components/sections/AboutSection";
import { CredentialsSection } from "@/components/sections/CredentialsSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Ritik Kumar Singh, a Computer Science Engineering student focused on full-stack development.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_34%),#020617] pt-16">
      <AboutSection />
      <CredentialsSection />
    </div>
  );
}
